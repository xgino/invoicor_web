import { Briefcase } from "lucide-react";
import type { Metadata } from "next";
import { HubCard, HubHeader } from "@/components/content/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { getIndustries, text } from "@/lib/content";
import { breadcrumbLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Invoicing Software by Industry | Invoicor",
  description:
    "Whether you are a plumber, freelance designer, or consultant, see how Invoicor's mobile app speeds up your billing process.",
  path: "/industries",
});

export default function IndustriesHubPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Industries" }])} />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <HubHeader
          icon={<Briefcase className="h-8 w-8" aria-hidden />}
          iconClass="bg-emerald-100 text-emerald-600"
          title="Built for how you work."
          text="Every profession bills differently. Find out how Invoicor solves the specific invoicing and cash flow headaches in your industry."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {getIndustries().map((d) => (
            <HubCard
              key={d.slug}
              href={`/industries/${d.slug}`}
              eyebrow={text(d, "badge_text") ?? "Industry Solution"}
              title={d.industry}
              text={d.subtitle}
              cta="View workflow"
              accent="emerald"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
