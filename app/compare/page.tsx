import { ArrowLeftRight } from "lucide-react";
import type { Metadata } from "next";
import { HubCard, HubHeader } from "@/components/content/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { getComparisons, text } from "@/lib/content";
import { breadcrumbLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Compare Invoicing Software Alternatives | Invoicor",
  description:
    "See how Invoicor stacks up against QuickBooks, FreshBooks, and Invoice2go. Find the best invoicing app for your small business.",
  path: "/compare",
});

export default function CompareHubPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Compare" }])} />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <HubHeader
          icon={<ArrowLeftRight className="h-8 w-8" aria-hidden />}
          iconClass="bg-blue-100 text-blue-600"
          title="Find your perfect alternative."
          text="Stop paying for bloated accounting software. See how Invoicor compares to the biggest names in the industry and why freelancers are making the switch."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {getComparisons().map((d) => (
            <HubCard
              key={d.slug}
              href={`/compare/${d.slug}`}
              eyebrow={text(d, "badge_text") ?? "Comparison"}
              title={`Invoicor vs ${d.competitor}`}
              text={d.subtitle}
              cta="Read the breakdown"
              accent="blue"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
