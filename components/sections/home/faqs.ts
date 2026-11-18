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
    answer: `Yes. The free plan includes ${FREE_INVOICES} invoices with no watermark and no subscription, plus free templates and PDF export. Paid plans start at ${STARTING_PRICE} a month, with a ${PRICING.trial_days.monthly}-day free trial (${PRICING.trial_days.yearly} days on yearly plans). Cancel any time through Apple.`,
  },
  {
    question: "Does Invoicor take a fee from my payments?",
    answer:
      "No. Invoicor isn't a payment gateway: it never processes, holds or takes a cut of your payments, and it doesn't sit between you and your client. You pay a flat subscription and that's it. Add your own payment link (PayPal, Stripe, Wise) or bank details to the invoice and your client pays you directly; only that provider's own fees apply.",
  },
  {
    question: "Do I need a card for the free trial?",
    answer: `Not for the free plan: your first ${FREE_INVOICES} invoices need no subscription and no payment. The free trials of Starter and Pro (${PRICING.trial_days.monthly} days monthly, ${PRICING.trial_days.yearly} days yearly) run through Apple: you confirm with your Apple ID, which needs a payment method, and Apple only charges after the trial if you don't cancel. Invoicor never sees your card.`,
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
