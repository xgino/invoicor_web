import { FileText } from "lucide-react";
import type { Metadata } from "next";
import { HubCard, HubHeader } from "@/components/content/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { getTemplates } from "@/lib/content";
import { breadcrumbLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Free Invoice Templates by Industry | Invoicor",
  description:
    "Free, industry-specific invoice templates and guides: what to include, sample breakdowns, and mistakes to avoid. Create and send them in seconds with the Invoicor app.",
  path: "/templates",
});

export default function TemplatesHubPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Invoice Templates" }])} />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <HubHeader
          icon={<FileText className="h-8 w-8" aria-hidden />}
          iconClass="bg-indigo-100 text-indigo-600"
          title="Free Invoice Templates"
          text="Industry-specific invoice templates and guides. Learn exactly what to include, or use our mobile app to create and send a professional PDF in seconds."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {getTemplates().map((t) => (
            <HubCard
              key={t.slug}
              href={`/templates/${t.slug}`}
              eyebrow="Free Template & Guide"
              title={`${t.niche} Invoice`}
              text={t.subtitle}
              cta="View Template"
              accent="indigo"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
