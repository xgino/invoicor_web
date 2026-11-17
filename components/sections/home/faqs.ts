import type { Faq } from "@/lib/content";
import { FREE_INVOICES, PRICING, STARTING_PRICE } from "@/lib/pricing";

/**
 * Home page FAQ. Shown in the Accordion, which also emits the FAQPage JSON-LD from this same
 * list, so the markup always matches what visitors read (a Google requirement).
 * Claims follow BRAND.md §10; "seconds" stays unquantified until decision D12 is made.
 */
export const HOME_FAQS: Faq[] = [
  {
    question: "Is Invoicor free to use?",
    answer: `Yes. The free plan includes ${FREE_INVOICES} invoices with no watermark and no card needed, plus free templates and PDF export. Paid plans start at ${STARTING_PRICE} a month, with a ${PRICING.trial_days.monthly}-day free trial (${PRICING.trial_days.yearly} days on yearly plans). Cancel any time through Apple.`,
  },
  {
    question: "Does Invoicor take a fee from my payments?",
    answer:
      "No. Invoicor never processes, holds or takes a cut of your payments. You pay a flat subscription and that's it. If you add your own PayPal or Stripe link to an invoice, your client pays you there directly, and only PayPal or Stripe's own fees apply.",
  },
  {
    question: "Can I invoice in other currencies and languages?",
    answer:
      "Yes. Invoicor supports 38 currencies and 11 invoice languages, so your client can read the invoice in their own language and pay in their own currency.",
  },
  {
    question: "How fast can I create an invoice?",
    answer:
      "Fast. Your business details, saved clients and saved products fill in for you, totals and tax are calculated as you go, and you share the PDF straight from your iPhone by email, WhatsApp or AirDrop.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Your account and invoice data is stored on servers in Germany, under EU data protection rules (GDPR). We never sell your data. Website analytics only run if you accept cookies.",
  },
  {
    question: "Does Invoicor calculate tax and discounts?",
    answer:
      "Yes. Set a tax rate (inclusive or exclusive) and a discount, and Invoicor works out the subtotal, tax and total for you.",
  },
];
