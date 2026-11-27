import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryView } from "@/components/sections/content/IndustryView";
import {
  CONTENT_UPDATED_AT,
  getIndustries,
  getIndustry,
  getTemplatesForIndustry,
  text,
} from "@/lib/content";
import { contentVersions } from "@/lib/content-i18n";
import { CONTENT_TEXT } from "@/lib/i18n/pages/content";
import { buildMetadata, ogImagePath } from "@/lib/seo";

// Only the slugs in content/industries.json exist; anything else is a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getIndustries().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const d = getIndustry(slug);
  if (!d) return {};
  return buildMetadata({
    title: d.title,
    description: d.meta_description,
    path: `/industries/${d.slug}`,
    image: ogImagePath("industries", d.slug),
    // Its versions in other languages (content/{locale}/industries.json), for hreflang.
    languages: contentVersions("industries", d.slug),
  });
}

/** Industry page in English (blueprint "Industry"). All text from content/industries.json. */
export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const d = getIndustry(slug);
  if (!d) notFound();

  const industry = d.industry;
  const lower = industry.toLowerCase();
  const templates = getTemplatesForIndustry(d.slug);

  return (
    <IndustryView
      d={d}
      locale="en"
      t={CONTENT_TEXT.en}
      updated={CONTENT_UPDATED_AT.industries}
      headings={{
        badge: text(d, "badge_text") ?? `Invoicing for ${lower}`,
        stats: `${industry} at a glance`,
        mistakes: text(d, "industry_mistakes_title") ?? `Billing mistakes that cost ${lower} money`,
        features: `Built for how ${lower} bill`,
        tip: text(d, "expert_tip_title") ?? `A tip for ${lower}`,
        lineItems: `Common line items for ${lower}`,
        glossary: text(d, "industry_glossary_title") ?? `${industry} billing terms`,
        tax: text(d, "tax_or_compliance_title") ?? `Tax considerations for ${lower}`,
        faq: `Questions from ${lower}`,
        cta: `Built for ${lower}.`,
      }}
      links={{
        home: "/",
        hub: "/industries",
        online: templates[0]
          ? `/free-invoice-generator?example=${templates[0].slug}`
          : "/free-invoice-generator",
        templates: templates.map((t) => ({
          href: `/templates/${t.slug}`,
          title: `Free ${t.niche.toLowerCase()} invoice template`,
        })),
        related: d.related.map((r) => ({
          href: `/industries/${r.slug}`,
          title: `Invoicing for ${r.name}`,
        })),
      }}
    />
  );
}
