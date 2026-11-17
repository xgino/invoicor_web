import type { Metadata } from "next";
import { HubPage } from "@/components/sections/content/hub";
import { getComparisons, text } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Compare Invoicing Software Alternatives | Invoicor",
  description:
    "See how Invoicor stacks up against QuickBooks, FreshBooks, and Invoice2go. Find the best invoicing app for your small business.",
  path: "/compare",
});

/** Compare hub (ROADMAP chunk 23d, blueprint "Hub"). */
export default function CompareHubPage() {
  return (
    <HubPage
      path="/compare"
      name="Compare"
      eyebrow="Compare"
      title="Find your perfect alternative."
      subtitle="An honest look at how Invoicor compares to the best-known invoicing and accounting tools, including where they do more than we do."
      items={getComparisons().map((d) => ({
        href: `/compare/${d.slug}`,
        eyebrow: text(d, "badge_text") ?? "Comparison",
        title: `Invoicor vs ${d.competitor}`,
        text: d.subtitle,
      }))}
      cta="Read the comparison"
      campaign="compare-hub"
      explainer={
        <>
          <h2 className="font-heading text-h3 text-ink">How we compare</h2>
          <p>
            Most tools on this list are accounting software, payment platforms or all-in-one
            business suites that also send invoices. Invoicor does one thing: professional invoices
            from your iPhone, at a flat price, without taking a cut of your payments.
          </p>
          <p>
            If you need payroll, bookkeeping, bank feeds or a team workspace, the bigger tools are a
            better fit, and each comparison says so. If you mainly need to send good invoices
            quickly and get paid directly, Invoicor is the simpler choice. Prices and features of
            other tools change, so always check their websites for the latest details.
          </p>
        </>
      }
    />
  );
}
