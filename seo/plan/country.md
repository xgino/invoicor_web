# Country pages (English)

> **Generated, don't edit by hand.** Direction: `scripts/pages-categories.mjs`; pages and briefs:
> `seo/keyword-map.csv`; then `npm run pages`. Back to the [chunks](../PLAN.md).

**0 done · 13 planned**

## Direction

- **URL:** `/invoice-generator-{country}`, `/reverse-charge-invoice` · **Key:** "{country} VAT / GST / tax invoice (requirements)"
- **Blueprint:** [BLUEPRINTS.md](../BLUEPRINTS.md#country-page-invoice-generator-country-and-local-pages) · **Where it's written:** page code: a new page type (chunk 43)
- **Links to:** the VAT calculator, the free generator, the reverse-charge page (EU countries).
- **Languages:** **en-only** for English-speaking countries; other countries get a local page in their own language (next category).

**Can do:**

- What must be on an invoice in that country, each rule with its official source and the date checked, plus the free generator preset (currency, rate).
- Countries whose rules differ in ways that matter (VAT/GST numbers, thresholds, required wording) and whose currency the generator supports (the API's 38).

**Can't do:**

- Countries where a PDF invoice from Invoicor isn't a valid invoice (mandatory e-invoicing or certified software, e.g. Italy's SdI, Portugal's certified software, Poland's KSeF from 2026, Kenya's eTIMS): no page that sends people to make one here.
- Rules from memory: only what the official source says; rates change.
- The general "what goes on an invoice" (the blog owns it).

## Done (0): don't build these again

_None yet._

## Planned (13)

### Item 1E (7)

#### /invoice-generator-uk

- **Key:** uk vat invoice requirements · also: invoice generator uk; vat invoice template uk
- **Item:** 1E · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (new page type, chunk 43): the free generator preset for the UK (GBP, the VAT rates) plus the UK rules. What a VAT invoice must show, full vs simplified invoices (under £250), the VAT number, rates 20/5/0%, the tax point, invoicing when you're not VAT-registered (no VAT shown). Every rule with its source on gov.uk and the date checked.
- **Don't write about:** What every invoice includes in general (the blog: learn:/what-should-an-invoice-include); how to use the generator (/free-invoice-generator).
- **Notes:** GBP, 20/5/0% VAT, VAT number; replaces /guides/invoice-requirements-uk

#### /invoice-generator-ireland

- **Key:** vat invoice ireland · also: invoice template ireland; irish vat invoice requirements
- **Item:** 1E · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): the generator preset for Ireland (EUR, the VAT rates) plus what a VAT invoice must show per Revenue, the VAT number, rates (23/13.5/9/0%, check and date them), credit notes, not registered = no VAT. Sources: revenue.ie.
- **Don't write about:** General invoice fields (the blog); EU reverse charge (owned by /reverse-charge-invoice): one sentence and a link.
- **Notes:** EUR, 23/13.5/9% VAT

#### /invoice-generator-australia

- **Key:** tax invoice australia · also: abn invoice template; gst invoice australia
- **Item:** 1E · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): the generator preset for Australia (AUD, 10% GST) plus the ATO tax invoice rules: the ABN, the words 'tax invoice', GST shown, the extra buyer details from A$1,000, not registered for GST = an 'invoice', not a tax invoice. Sources: ato.gov.au, dated.
- **Don't write about:** General invoice fields (the blog).
- **Notes:** AUD, 10% GST, ABN

#### /invoice-generator-new-zealand

- **Key:** gst invoice nz · also: tax invoice nz; nz invoice template
- **Item:** 1E · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): the generator preset for New Zealand (NZD, 15% GST) plus the current IRD rules (since 2023 'taxable supply information' replaced the old tax invoice rules: check and explain), the GST number, thresholds. Sources: ird.govt.nz, dated.
- **Don't write about:** General invoice fields (the blog).
- **Notes:** NZD, 15% GST, GST number

#### /invoice-generator-canada

- **Key:** gst hst invoice canada · also: canada invoice template; invoice requirements canada
- **Item:** 1E · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): the generator preset for Canada (CAD) plus the GST/HST rules: the registration number, rates by province (GST 5%, HST provinces, PST and QST separate), the small-supplier threshold, the information required by invoice amount. The app applies one tax rate per invoice: explain how to show GST + PST honestly. Sources: canada.ca, dated.
- **Don't write about:** General invoice fields (the blog); the VAT calculator (/tools/vat-calculator).
- **Notes:** CAD, GST/HST/PST by province

#### /invoice-generator-south-africa

- **Key:** vat invoice south africa · also: tax invoice south africa; sars invoice requirements
- **Item:** 1E · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): the generator preset for South Africa (ZAR, 15% VAT) plus SARS tax invoice rules: full vs abridged tax invoices and their thresholds (check), the VAT number, the words 'tax invoice'. Sources: sars.gov.za, dated.
- **Don't write about:** General invoice fields (the blog).
- **Notes:** ZAR, 15% VAT

#### /reverse-charge-invoice

- **Key:** eu reverse charge invoice · also: vat reverse charge invoice; intra eu invoice
- **Item:** 1E · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): EU business-to-business invoices across borders: when the reverse charge applies (services and goods between VAT-registered businesses in different EU countries), both VAT numbers, no VAT charged, the reverse-charge note (VAT Directive art. 196), checking the client's VAT number in VIES. A generator preset with 0% and the note filled in. Sources: the EU's Your Europe pages, dated.
- **Don't write about:** Country VAT rates (owned by /tools/vat-calculator); the Irish rules (/invoice-generator-ireland).
- **Notes:** EU B2B: both VAT numbers + the reverse-charge note; chunk 43 called it /eu

### Item 2D (6)

#### /invoice-generator-singapore

- **Key:** gst invoice singapore · also: tax invoice singapore; iras invoice requirements
- **Item:** 2D · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): the generator preset (SGD, 9% GST) plus IRAS tax invoice rules: the GST registration number, the words 'tax invoice', simplified tax invoices under the threshold, not registered = no GST. Sources: iras.gov.sg, dated.
- **Don't write about:** General invoice fields (the blog).

#### /invoice-generator-nigeria

- **Key:** vat invoice nigeria · also: invoice template nigeria; firs invoice requirements
- **Item:** 2D · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): the generator preset (NGN, 7.5% VAT) plus what an invoice must show (TIN, VAT), the current e-invoicing plans of the tax authority (check: if e-invoicing becomes mandatory for a business size, say so plainly). Sources: the tax authority's site, dated.
- **Don't write about:** General invoice fields (the blog).

#### /invoice-generator-uae

- **Key:** tax invoice uae · also: vat invoice uae; fta invoice requirements
- **Item:** 2D · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): the generator preset (AED, 5% VAT) plus FTA tax invoice rules: the TRN, the words 'tax invoice', simplified tax invoices, the coming e-invoicing rollout (check dates and say plainly whether a PDF still counts). Sources: tax.gov.ae, dated.
- **Don't write about:** General invoice fields (the blog).

#### /invoice-generator-malta

- **Key:** vat invoice malta · also: malta invoice requirements
- **Item:** 2D · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): EUR, VAT rates (check), the VAT number; Malta's rules from the CFR. Sources dated.
- **Don't write about:** General invoice fields (the blog).

#### /invoice-generator-hong-kong

- **Key:** invoice template hong kong · also: hong kong invoice requirements
- **Item:** 2D · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): HKD, no VAT or GST in Hong Kong; what businesses usually show (business registration number) and record-keeping rules. Sources dated.
- **Don't write about:** General invoice fields (the blog).

#### /invoice-generator-switzerland

- **Key:** vat invoice switzerland · also: mwst invoice switzerland
- **Item:** 2D · **Intent:** country rules + generator preset · **Languages:** en-only
- **Write about:** Needs page code (chunk 43): CHF, MWST/TVA rates (8.1/2.6/3.8% since 2024; check), the UID with 'MWST', the QR-bill (Swiss payment slip: Invoicor doesn't make QR-bills: say so). Sources: estv.admin.ch, dated.
- **Don't write about:** General invoice fields (the blog).
