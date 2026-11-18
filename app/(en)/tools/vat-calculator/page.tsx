import type { Metadata } from "next";
import { VatCalculator } from "@/components/tools/Calculators";
import { ToolPage } from "@/components/tools/ToolPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "VAT Calculator: Add or Remove VAT Online (Free) | Invoicor",
  description:
    "Free VAT calculator: add VAT to a net price or take it out of a gross price. Standard rates for 19 countries, instant results, nothing to install.",
  path: "/tools/vat-calculator",
});

const FAQS = [
  {
    question: "How do I add VAT to a price?",
    answer:
      "Multiply the net price by the VAT rate and add the result. For 100 at 21% VAT: 100 × 0.21 = 21 VAT, so the gross price is 121. The calculator does this for you and rounds to the cent.",
  },
  {
    question: "How do I remove VAT from a price that includes it?",
    answer:
      "Divide the gross price by 1 plus the rate, not by subtracting the rate. For 121 including 21% VAT: 121 ÷ 1.21 = 100 net, and the VAT is 21. Taking 21% off 121 would give 95.59, which is wrong.",
  },
  {
    question: "Which VAT rates does the calculator include?",
    answer:
      "The standard rates of 16 European countries and the GST of Australia, Canada and New Zealand, as of November 2026. Many countries also have reduced rates for some goods and services; type any rate yourself if yours is different.",
  },
  {
    question: "Should my invoice show prices with or without VAT?",
    answer:
      "Business clients usually expect net prices with the VAT added at the bottom; consumers expect the price they pay, including VAT. Either way, a VAT invoice should show the net amount, the rate, the VAT amount and the total. In the Invoicor app and the free generator you choose per invoice whether prices include tax.",
  },
  {
    question: "Is anything I type sent to a server?",
    answer: "No. The calculator runs entirely in your browser.",
  },
];

export default function Page() {
  return (
    <ToolPage
      href="/tools/vat-calculator"
      title="VAT calculator"
      subtitle="Add VAT to a net price or take it out of a gross price, with the standard rates of 19 countries. Instant, free, and nothing leaves your browser."
      tool={<VatCalculator />}
      faqs={FAQS}
      sections={[
        {
          title: "Adding VAT (net to gross)",
          body: (
            <p>
              VAT = net × rate ÷ 100, and gross = net + VAT. A job priced at 478.50 with 19% VAT has
              90.92 VAT and a total of 569.42. Amounts are rounded to the cent, half up, the way
              invoices are.
            </p>
          ),
        },
        {
          title: "Removing VAT (gross to net)",
          body: (
            <>
              <p>
                net = gross ÷ (1 + rate ÷ 100). This is the step people most often get wrong: taking
                the rate off the gross amount gives too little. At 20% VAT, 120 gross is 100 net,
                not 96.
              </p>
              <p>
                Use this when a supplier quotes a price including VAT, or when you set a consumer
                price and need to know what part of it is yours.
              </p>
            </>
          ),
        },
        {
          title: "Standard and reduced rates",
          body: (
            <p>
              The country list uses each country&apos;s standard rate. Food, books, transport and
              some services often have a lower rate, and some services are exempt. When in doubt,
              check your tax authority&apos;s website or ask your accountant, then type the rate
              yourself.
            </p>
          ),
        },
      ]}
    />
  );
}
