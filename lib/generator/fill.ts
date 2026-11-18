import { type Draft, toPayload } from "./draft";

/**
 * Fills an invoice template in the browser, so the preview updates on every keystroke without
 * calling the API (ROADMAP 33a). A port of invoicor_api's build_replacement_map() for the fields the
 * free generator has; the PDF is still made by the API from the same payload.
 * tests/unit/generator-fill.test.ts checks the output against HTML filled by the real API code.
 */
export interface FillData {
  templates: string[];
  labels: Record<string, Record<string, string>>;
  symbols: Record<string, Record<string, string>>;
}

type Payload = ReturnType<typeof toPayload>;

const TRANSPARENT_PIXEL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

/** Python's xml.sax.saxutils.escape after strip(), plus quotes (attribute-safe, renders the same). */
function safe(value: unknown): string {
  const text = value == null ? "" : String(value).trim();
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Whole cents from a "12.34" string (the payload always has two decimals). */
function toCents(value: string): number {
  return Math.round(Number(value) * 100);
}

/** Round half up to whole cents, like Decimal.quantize(ROUND_HALF_UP). */
function halfUp(cents: number): number {
  return Math.sign(cents) * Math.floor(Math.abs(cents) + 0.5 + 1e-9);
}

/**
 * babel's format_decimal: locale grouping, up to 3 decimals, trailing zeros dropped. babel groups
 * 4-digit numbers too ("1 234" in Polish and Spanish), so grouping is "always".
 */
function formatNumber(cents: number, lang: string): string {
  try {
    return new Intl.NumberFormat(lang, {
      maximumFractionDigits: 3,
      useGrouping: "always",
    } as Intl.NumberFormatOptions).format(cents / 100);
  } catch {
    return String(cents / 100);
  }
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** utils/templates.format_date_display (English month names, like strftime in the C locale). */
export function formatDate(iso: string, fmt: string): string {
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return iso;
  const [, y, mo, d] = m as unknown as [string, string, string, string];
  const mon = MONTHS[Number(mo) - 1] ?? mo;
  switch (fmt) {
    case "MM/DD/YYYY":
      return `${mo}/${d}/${y}`;
    case "YYYY-MM-DD":
      return `${y}-${mo}-${d}`;
    case "D MMM YYYY":
      return `${Number(d)} ${mon} ${y}`;
    case "MMM D, YYYY":
      return `${mon} ${Number(d)}, ${y}`;
    default:
      return `${d}/${mo}/${y}`;
  }
}

function isoDay(date: Date): string {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())}`;
}

/** The numbers build_public_invoice() computes, in whole cents (rates in hundredths of a %). */
export function invoiceAmounts(p: Payload) {
  const items = p.items.map((i) => {
    const q = toCents(i.quantity);
    const u = toCents(i.unit_price);
    return { ...i, q, u, amount: halfUp((q * u) / 100) };
  });
  const subtotal = items.reduce((s, i) => s + i.amount, 0);
  const dv = toCents(p.discount_value);
  let discountType = p.discount_type;
  let discount = 0;
  if (discountType === "percent" && dv > 0) discount = (subtotal * dv) / 10000;
  else if (discountType === "fixed" && dv > 0) discount = Math.min(dv, subtotal);
  else discountType = "percent";
  const taxable = subtotal - discount;
  const rate = toCents(p.tax_rate) / 100;
  let tax: number;
  let total: number;
  if (p.tax_inclusive) {
    total = taxable;
    tax = taxable - taxable / (1 + rate / 100);
  } else {
    tax = taxable * (rate / 100);
    total = taxable + tax;
  }
  return {
    items,
    discountType,
    discountValue: dv,
    discount: halfUp(discount),
    subtotal: halfUp(subtotal),
    tax: halfUp(tax),
    total: halfUp(total),
    taxRate: toCents(p.tax_rate),
  };
}

export function buildReplacements(p: Payload, data: FillData, today = new Date()) {
  const lang = p.language || "en";
  const labels = data.labels[lang] ?? data.labels.en ?? {};
  const symbol = data.symbols[lang]?.[p.currency] ?? p.currency;
  const sender = p.sender as unknown as Record<string, string>;
  const client = p.client as unknown as Record<string, string>;
  const a = invoiceAmounts(p);
  const n = (cents: number) => formatNumber(cents, lang);
  const r: Record<string, string> = {};

  for (const [key, text] of Object.entries(labels)) r[`t.${key}`] = safe(text);
  r["t.TAX_MODE"] = safe(
    p.tax_inclusive
      ? (labels.TAX_INCLUDED ?? "Tax Included")
      : (labels.TAX_EXCLUDED ?? "Tax Excluded"),
  );

  const logo = sender.logo ?? "";
  r.LOGO = /^data:image\/(png|jpeg);base64,[A-Za-z0-9+/=]+$/.test(logo) ? logo : TRANSPARENT_PIXEL;

  const party = (prefix: string, o: Record<string, string>, keys: string[]) => {
    for (const k of keys) r[`${prefix}_${k.toUpperCase()}`] = safe(o[k]);
    const a1 = o.address_line_1 ?? "";
    r[`${prefix}_ADDRESS`] = safe(a1);
    r[`${prefix}_ADDRESS_LINE_1`] = safe(a1);
    r[`${prefix}_ADDRESS_LINE_2`] = "";
    r[`${prefix}_STATE`] = "";
  };
  party("SENDER", sender, [
    "company_name",
    "website",
    "city",
    "postal_code",
    "country",
    "phone",
    "email",
    "tax_id",
    "registration_number",
    "bank_name",
    "iban",
    "swift_code",
    "routing_number",
    "account_number",
  ]);
  party("CLIENT", client, [
    "company_name",
    "contact_name",
    "email",
    "phone",
    "city",
    "postal_code",
    "country",
    "tax_id",
  ]);

  const issue = p.issue_date || isoDay(today);
  const dueDefault = new Date(today);
  dueDefault.setDate(dueDefault.getDate() + 14);
  r.INVOICE_NUMBER = safe(p.invoice_number || "INV-0001");
  r.INVOICE_STATUS = "sent";
  r.ISSUE_DATE = safe(formatDate(issue, p.date_format));
  r.DUE_DATE = safe(formatDate(p.due_date || isoDay(dueDefault), p.date_format));
  r.NOTES = safe(p.notes);
  r.PAYMENT_TERMS = safe(p.payment_terms);
  r.PAYMENT_URL = safe(p.payment_url);
  r.CURRENCY = safe(p.currency);
  r.CURRENCY_SYMBOL = safe(symbol);

  r.DISCOUNT_TYPE = safe(a.discountType);
  r.DISCOUNT_VALUE = safe(n(a.discountValue));
  r.DISCOUNT_AMOUNT = safe(n(a.discount));
  if (a.discountType === "percent" && a.discountValue > 0) {
    r.DISCOUNT_LABEL = safe(`${n(a.discountValue)}%`);
    r.DISCOUNT_DISPLAY = safe(`-${symbol}${n(a.discount)}`);
  } else if (a.discountType === "fixed" && a.discountValue > 0) {
    r.DISCOUNT_LABEL = safe(`${symbol}${n(a.discountValue)}`);
    r.DISCOUNT_DISPLAY = safe(`-${symbol}${n(a.discount)}`);
  } else {
    r.DISCOUNT_LABEL = "";
    r.DISCOUNT_DISPLAY = "";
  }

  r.SUBTOTAL = safe(n(a.subtotal));
  r.TAX_RATE = safe(n(a.taxRate));
  r.TAX_RATE_DISPLAY = safe(`${n(a.taxRate)}%`);
  r.TAX_AMOUNT = safe(n(a.tax));
  r.TOTAL = safe(n(a.total));
  r.SUBTOTAL_DISPLAY = safe(`${symbol}${n(a.subtotal)}`);
  r.TAX_AMOUNT_DISPLAY = safe(`${symbol}${n(a.tax)}`);
  r.TOTAL_DISPLAY = safe(`${symbol}${n(a.total)}`);

  // Same markup as build_item_rows_html(); the symbol is inserted as-is there too.
  r.ITEM_ROWS = a.items
    .map((i) => {
      const desc = i.description ? `<span class="item-desc">${safe(i.description)}</span>` : "";
      return `
                <tr>
                    <td><span class="item-name">${safe(i.name)}</span>${desc}</td>
                    <td class="center">${safe(n(i.q))}</td>
                    <td class="right">${symbol}${safe(n(i.u))}</td>
                    <td class="right">${symbol}${safe(n(i.amount))}</td>
                </tr>`;
    })
    .join("\n");

  return r;
}

/** Template HTML with every {{placeholder}} filled; unknown ones become empty, like the API. */
export function fillHtml(html: string, p: Payload, data: FillData, today?: Date): string {
  const r = buildReplacements(p, data, today);
  return html.replace(/\{\{([^}]+)\}\}/g, (match, key: string) =>
    key in r ? r[key]! : /^ITEM_\d+_/.test(key) ? "" : match,
  );
}

export function fillDraft(html: string, draft: Draft, data: FillData): string {
  return fillHtml(html, toPayload(draft), data);
}

// ── Loading the synced files (public/generator, see scripts/sync-generator-templates.py) ──

let dataPromise: Promise<FillData> | null = null;
const templateCache = new Map<string, Promise<string>>();

async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url}: ${res.status}`);
  return (await res.json()) as T;
}

export function loadFillData(): Promise<FillData> {
  dataPromise ??= getJson<FillData>("/generator/data.json").catch((e) => {
    dataPromise = null;
    throw e;
  });
  return dataPromise;
}

export function loadTemplate(slug: string): Promise<string> {
  let p = templateCache.get(slug);
  if (!p) {
    p = getJson<{ html: string }>(`/generator/templates/${encodeURIComponent(slug)}.json`)
      .then((j) => j.html)
      .catch((e) => {
        templateCache.delete(slug);
        throw e;
      });
    templateCache.set(slug, p);
  }
  return p;
}
