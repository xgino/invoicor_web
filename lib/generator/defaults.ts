import type { Draft } from "./draft";
import type { GeneratorDict } from "@/lib/i18n/pages/generator/en";

/** What a new invoice starts with on this language's page (only when nothing is saved yet). */
export type DraftDefaults = Pick<
  Draft,
  "language" | "currency" | "date_format" | "invoice_number" | "payment_terms" | "notes"
>;

export function draftDefaults(
  locale: string,
  info: { currency: string; dateFormat: string },
  d: GeneratorDict["defaults"],
): DraftDefaults {
  return {
    language: locale,
    currency: info.currency,
    date_format: info.dateFormat,
    invoice_number: d.invoiceNumber,
    payment_terms: d.paymentTerms,
    notes: d.notes,
  };
}
