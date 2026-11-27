import type { Metadata } from "next";
import { HubPage } from "@/components/sections/content/hub";
import { getTemplates } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Free Invoice Templates by Industry | Invoicor",
  description:
    "Free, industry-specific invoice templates and guides: what to include, sample breakdowns, and mistakes to avoid. Create and send them in seconds with the Invoicor app.",
  path: "/templates",
});

/** Templates hub (ROADMAP chunk 21c, blueprint "Hub"). */
export default function TemplatesHubPage() {
  return (
    <HubPage
      path="/templates"
      name="Templates"
      eyebrow="Free templates & guides"
      title="Free Invoice Templates"
      subtitle="Invoice templates and guides for your trade or the kind of invoice you need (deposit, hourly, freelance …): exactly what to include, a sample invoice with real line items, and the mistakes that delay payment."
      items={[
        // General documents (no trade) first: the parents the trade pages link up to.
        ...getTemplates().filter((t) => !t.industry),
        ...getTemplates().filter((t) => t.industry),
      ].map((t) => ({
        href: `/templates/${t.slug}`,
        eyebrow: t.industry ? "Template & guide" : "Invoice type",
        title: `${t.niche} invoice`,
        text: t.subtitle,
        group: t.industry ? "Templates by trade" : "Invoice types",
      }))}
      cta="View template"
      campaign="templates-hub"
      explainer={
        <>
          <h2 className="font-heading text-h3 text-ink">How to use these templates</h2>
          <p>
            Each guide shows what a good invoice of that trade or type contains: the details your
            client and their accountant expect, how to list labor and materials, and how to handle
            deposits and tax. The sample invoice uses realistic line items, so you can copy the
            structure for your own jobs.
          </p>
          <p>
            You can rebuild any of them in a spreadsheet or word processor. Or create the same
            invoice in the Invoicor app: your business details, saved clients and saved items fill
            in for you, totals and tax are calculated, and you send a clean PDF from your phone.
            Your first 3 invoices are free.
          </p>
        </>
      }
    />
  );
}
