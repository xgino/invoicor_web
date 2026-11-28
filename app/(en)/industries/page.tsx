import type { Metadata } from "next";
import { HubPage } from "@/components/sections/content/hub";
import { getIndustries, text } from "@/lib/content";
import { FREE_INVOICES } from "@/lib/pricing";
import { hubVersions } from "@/lib/content-i18n";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Invoicing Software by Industry | Invoicor",
  description:
    "Whether you are a plumber, freelance designer, or consultant, see how Invoicor's mobile app speeds up your billing process.",
  path: "/industries",
  // The hub in every language it exists in (task S1), for hreflang.
  languages: hubVersions("industries"),
});

/** Industries hub (ROADMAP chunk 22b, blueprint "Hub"). */
export default function IndustriesHubPage() {
  return (
    <HubPage
      path="/industries"
      name="Industries"
      eyebrow="Industries"
      title="Built for how you work."
      subtitle="Every trade bills differently. See the billing mistakes, line items and tax rules for your work, and how Invoicor handles them."
      items={getIndustries().map((d) => ({
        href: `/industries/${d.slug}`,
        eyebrow: text(d, "badge_text") ?? "Industry",
        title: d.industry,
        text: d.subtitle,
      }))}
      cta="See how it works"
      campaign="industries-hub"
      explainer={
        <>
          <h2 className="font-heading text-h3 text-ink">One app, the way your trade bills</h2>
          <p>
            A plumber bills a call-out fee, labor and parts. A designer bills a deposit and
            milestones. A cleaner bills the same client every week. Each industry page covers the
            mistakes that delay payment in that trade, the line items you&apos;ll use most, the
            words clients expect to see, and the tax points to check.
          </p>
          <p>
            Invoicor works the same way for all of them: save your clients and line items once, pick
            a template, and send a clean PDF from your phone. {FREE_INVOICES} invoices are free, and
            Invoicor never takes a cut of your payments.
          </p>
        </>
      }
    />
  );
}
