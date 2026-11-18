/**
 * The free invoice generator's draft (ROADMAP chunk 32). Field names match the public API
 * (invoicor_api/API/invoices/public.py), so the draft is sent almost as-is.
 * Amounts are kept as the strings people type ("1.5", "1,5", "85") and parsed when needed.
 */
export interface Party {
  company_name: string;
  contact_name: string;
  email: string;
  phone: string;
  address_line_1: string;
  city: string;
  postal_code: string;
  country: string;
  tax_id: string;
}

export interface Sender extends Party {
  registration_number: string; // KVK, company number…
  bank_name: string;
  iban: string;
  swift_code: string;
  logo: string; // PNG/JPEG data URI, ≤ 500 KB
}

export interface DraftItem {
  id: string;
  name: string;
  description: string;
  quantity: string;
  unit_price: string;
}

export interface Draft {
  template_slug: string;
  language: string;
  currency: string;
  date_format: string;
  invoice_number: string;
  issue_date: string; // YYYY-MM-DD
  due_date: string;
  payment_terms: string;
  notes: string;
  payment_url: string;
  tax_rate: string;
  tax_inclusive: boolean;
  discount_type: "none" | "percent" | "fixed";
  discount_value: string;
  sender: Sender;
  client: Party;
  items: DraftItem[];
}

/** Same limit as the app's free plan and the API. */
export const MAX_ITEMS = 10;
export const MAX_LOGO_BYTES = 500_000;

export const DATE_FORMATS = ["DD/MM/YYYY", "MM/DD/YYYY", "YYYY-MM-DD", "D MMM YYYY", "MMM D, YYYY"];

const emptyParty = (): Party => ({
  company_name: "",
  contact_name: "",
  email: "",
  phone: "",
  address_line_1: "",
  city: "",
  postal_code: "",
  country: "",
  tax_id: "",
});

let counter = 0;
export const newItemId = () => `i${Date.now().toString(36)}${(counter++).toString(36)}`;

export const emptyItem = (): DraftItem => ({
  id: newItemId(),
  name: "",
  description: "",
  quantity: "1",
  unit_price: "",
});

function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function newDraft(today = new Date()): Draft {
  const due = new Date(today);
  due.setDate(due.getDate() + 14);
  return {
    template_slug: "classic",
    language: "en",
    currency: "USD",
    date_format: "MM/DD/YYYY",
    invoice_number: "INV-0001",
    issue_date: isoDate(today),
    due_date: isoDate(due),
    payment_terms: "Due within 14 days",
    notes: "Thank you for your business.",
    payment_url: "",
    tax_rate: "0",
    tax_inclusive: false,
    discount_type: "none",
    discount_value: "0",
    sender: {
      ...emptyParty(),
      registration_number: "",
      bank_name: "",
      iban: "",
      swift_code: "",
      logo: "",
    },
    client: emptyParty(),
    items: [emptyItem()],
  };
}

/** "1,5" → 1.5, "" → 0, "abc" → 0. Never NaN. */
export function toNumber(value: string): number {
  const n = Number(String(value).replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(n) ? n : 0;
}

/** Items that will actually be invoiced: rows with a name. */
export function filledItems(draft: Draft): DraftItem[] {
  return draft.items.filter((i) => i.name.trim() !== "");
}

/** The JSON body for POST /api/invoices/public/pdf/ (and the browser fill, lib/generator/fill.ts). */
export function toPayload(draft: Draft, extra: Record<string, string> = {}) {
  const items = filledItems(draft).map((i) => ({
    name: i.name.trim(),
    description: i.description.trim(),
    quantity: toNumber(i.quantity || "1").toFixed(2),
    unit_price: toNumber(i.unit_price).toFixed(2),
  }));
  const trim = <T extends object>(o: T) =>
    Object.fromEntries(
      Object.entries(o).map(([k, v]) => [k, typeof v === "string" ? v.trim() : v]),
    ) as T;
  return {
    template_slug: draft.template_slug,
    language: draft.language,
    currency: draft.currency,
    date_format: draft.date_format,
    invoice_number: draft.invoice_number.trim(),
    issue_date: draft.issue_date || undefined,
    due_date: draft.due_date || undefined,
    payment_terms: draft.payment_terms.trim(),
    notes: draft.notes.trim(),
    payment_url: draft.payment_url.trim(),
    tax_rate: Math.min(100, Math.max(0, toNumber(draft.tax_rate))).toFixed(2),
    tax_inclusive: draft.tax_inclusive,
    discount_type: draft.discount_type,
    discount_value: Math.max(0, toNumber(draft.discount_value)).toFixed(2),
    sender: trim(draft.sender),
    client: trim(draft.client),
    // A preview needs at least one line; the PDF button is disabled until there is a real one.
    items:
      items.length > 0
        ? items
        : [{ name: "Item", description: "", quantity: "1.00", unit_price: "0.00" }],
    ...extra,
  };
}
