import { type Draft, filledItems, toNumber } from "./draft";

/**
 * Totals for the on-screen summary. The same order and rules as the API and the app
 * (Invoice.recalculate_totals): items → subtotal → discount → tax → total, amounts per line rounded
 * to cents, results rounded half up to cents. So the numbers on screen match the PDF.
 */
const cents = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100;

export interface Totals {
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
}

export function computeTotals(draft: Draft): Totals {
  const subtotal = filledItems(draft).reduce(
    (sum, i) => sum + cents(toNumber(i.quantity || "1") * toNumber(i.unit_price)),
    0,
  );
  const value = Math.max(0, toNumber(draft.discount_value));
  let discount = 0;
  if (draft.discount_type === "percent" && value > 0)
    discount = subtotal * (Math.min(value, 100) / 100);
  else if (draft.discount_type === "fixed" && value > 0) discount = Math.min(value, subtotal);
  const taxable = subtotal - discount;
  const rate = Math.min(100, Math.max(0, toNumber(draft.tax_rate)));
  let tax: number;
  let total: number;
  if (draft.tax_inclusive) {
    total = taxable;
    tax = taxable - taxable / (1 + rate / 100);
  } else {
    tax = taxable * (rate / 100);
    total = taxable + tax;
  }
  return {
    subtotal: cents(subtotal),
    discount: cents(discount),
    tax: cents(tax),
    total: cents(total),
  };
}

/** "$1,234.50" in the chosen currency (falls back to "USD 1,234.50" for unusual codes). */
export function formatMoney(amount: number, currency: string, locale = "en-US"): string {
  try {
    return new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);
  } catch {
    return `${currency} ${amount.toFixed(2)}`;
  }
}
