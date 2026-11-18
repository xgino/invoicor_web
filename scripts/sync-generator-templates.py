"""
Copy the free invoice templates, labels and currency symbols from invoicor_api into the website,
so the generator can fill the preview in the browser while people type (ROADMAP 33a).

Run with the API's own Python (it needs Django and babel), from this repo's root:

    ../invoicor_api/venv/bin/python scripts/sync-generator-templates.py ../invoicor_api/API

Writes:
  public/generator/templates/<slug>.json   {"html": "..."}  (free templates only)
  public/generator/data.json               labels and currency symbols per language, currency
                                           decimals, the PDF watermark line
  tests/fixtures/generator-parity.json     sample invoices filled by the real API code, so
                                           tests/unit/generator-fill.test.ts proves the browser
                                           fill matches the PDF.

Run it again whenever a template, label or currency changes in the API.
"""

import json
import os
import sys
from pathlib import Path

WEB = Path(__file__).resolve().parent.parent
API = Path(sys.argv[1] if len(sys.argv) > 1 else WEB.parent / "invoicor_api" / "API").resolve()

sys.path.insert(0, str(API))
os.chdir(API)
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings.test")

import django  # noqa: E402

django.setup()

from babel.numbers import get_currency_precision  # noqa: E402
from invoices.public import WATERMARK_HTML, PublicInvoiceSerializer, build_public_invoice  # noqa: E402
from utils.currencies import ACTIVE_CODES, get_currency_info  # noqa: E402
from utils.templates import fill_template, get_all_templates, get_template  # noqa: E402
from utils.translations import get_labels, get_supported_languages  # noqa: E402

out = WEB / "public" / "generator" / "templates"
out.mkdir(parents=True, exist_ok=True)
for old in out.glob("*.json"):
    old.unlink()

free = [t["slug"] for t in get_all_templates() if t["tier"] == "free"]
for slug in free:
    (out / f"{slug}.json").write_text(
        json.dumps({"html": get_template(slug)}, ensure_ascii=False), encoding="utf-8"
    )

languages = [l["code"] for l in get_supported_languages()]
data = {
    "templates": free,
    "watermark": WATERMARK_HTML,
    "digits": {code: get_currency_precision(code) for code in ACTIVE_CODES},
    "labels": {lang: get_labels(lang) for lang in languages},
    "symbols": {
        lang: {code: get_currency_info(code, locale=lang)["symbol"] for code in ACTIVE_CODES}
        for lang in languages
    },
}
(WEB / "public" / "generator" / "data.json").write_text(
    json.dumps(data, ensure_ascii=False, sort_keys=True), encoding="utf-8"
)

# ── Parity fixtures: the real API fill for a few sample invoices ──────────────
SENDER = {
    "company_name": "Rivera Plumbing & Sons",
    "contact_name": "",
    "email": "ana@rivera.example",
    "phone": "+1 555 0100",
    "address_line_1": "12 Main St",
    "city": "Austin",
    "postal_code": "78701",
    "country": "United States",
    "tax_id": "US-123",
    "registration_number": "Reg 4455",
    "website": "rivera.example",
    "bank_name": "First Bank",
    "iban": "NL91 ABNA 0417 1643 00",
    "swift_code": "ABNANL2A",
    "logo": "",
}
CLIENT = {
    "company_name": "Mitchell <Home> Co",
    "contact_name": "Sarah Mitchell",
    "email": "sarah@example.com",
    "phone": "+1 555 0199",
    "address_line_1": "4 Oak Ave",
    "city": "Denver",
    "postal_code": "80202",
    "country": "United States",
    "tax_id": "DE999 & co",
}
ITEMS = [
    {"name": "Emergency call-out", "description": "After hours", "quantity": "1.00", "unit_price": "95.00"},
    {"name": "Copper pipe", "description": "", "quantity": "2.50", "unit_price": "1234.57"},
    {"name": "Labour", "description": "Hours", "quantity": "3.00", "unit_price": "48.33"},
]
CASES = [
    {"template_slug": "classic", "language": "en", "currency": "USD", "date_format": "MM/DD/YYYY",
     "tax_rate": "8.25", "tax_inclusive": False, "discount_type": "percent", "discount_value": "10.00"},
    {"template_slug": free[-1], "language": "de", "currency": "EUR", "date_format": "D MMM YYYY",
     "tax_rate": "19.00", "tax_inclusive": True, "discount_type": "fixed", "discount_value": "50.00"},
    {"template_slug": free[len(free) // 2], "language": "fr", "currency": "CHF",
     "date_format": "MMM D, YYYY", "tax_rate": "0.00", "tax_inclusive": False,
     "discount_type": "none", "discount_value": "0.00"},
    {"template_slug": "classic", "language": "pl", "currency": "PLN", "date_format": "YYYY-MM-DD",
     "tax_rate": "23.00", "tax_inclusive": False, "discount_type": "percent", "discount_value": "12.50"},
    {"template_slug": free[3], "language": "en", "currency": "JPY", "date_format": "DD/MM/YYYY",
     "tax_rate": "10.00", "tax_inclusive": False, "discount_type": "fixed", "discount_value": "500.00"},
]
fixtures = []
for case in CASES:
    payload = {
        **case,
        "invoice_number": "INV-0042",
        "issue_date": "2026-03-05",
        "due_date": "2026-03-19",
        "payment_terms": "Due within 14 days",
        "notes": "Thanks! Pay by \"bank\" transfer & quote INV-0042.",
        "payment_url": "https://pay.example.com/inv-42",
        "sender": SENDER,
        "client": CLIENT,
        "items": ITEMS,
    }
    s = PublicInvoiceSerializer(data=payload)
    s.is_valid(raise_exception=True)
    inv = build_public_invoice(s.validated_data)
    html, err = fill_template(inv)
    assert err is None, err
    fixtures.append({"payload": payload, "html": html})

(WEB / "tests" / "fixtures").mkdir(parents=True, exist_ok=True)
(WEB / "tests" / "fixtures" / "generator-parity.json").write_text(
    json.dumps(fixtures, ensure_ascii=False, indent=1), encoding="utf-8"
)
print(f"{len(free)} templates, {len(languages)} languages, {len(fixtures)} parity fixtures")
