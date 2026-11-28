import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TemplateView, firstSentence } from "@/components/sections/content/TemplateView";
import { getIndustry, getTemplate, getTemplates, getTradesForInvoiceType } from "@/lib/content";
import { contentVersions } from "@/lib/content-i18n";
import { pageUpdated } from "@/lib/page-dates";
import { CONTENT_TEXT } from "@/lib/i18n/pages/content";
import { buildMetadata, ogImagePath } from "@/lib/seo";

// Only the slugs in content/templates.json exist; anything else is a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getTemplates().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/templates/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const d = getTemplate(slug);
  if (!d) return {};
  return buildMetadata({
    title: d.title,
    description: d.meta_description,
    path: `/templates/${d.slug}`,
    image: ogImagePath("templates", d.slug),
    // Its versions in other languages (content/{locale}/templates.json), for hreflang.
    languages: contentVersions("templates", d.slug),
  });
}

/** Template page in English (blueprint "Template"). All text from content/templates.json. */
export default async function TemplatePage({ params }: PageProps<"/templates/[slug]">) {
  const { slug } = await params;
  const d = getTemplate(slug);
  if (!d) notFound();

  const niche = d.niche;
  const nicheLower = niche.toLowerCase();
  // "an hourly invoice", "an international invoice", "a deposit invoice".
  const aNiche = `${/^(?:[aeiou]|hour|honest|honor)/.test(nicheLower) ? "an" : "a"} ${nicheLower}`;
  const industry = d.industry ? getIndustry(d.industry) : undefined;
  const page = (s: string) => `/templates/${s}`;

  return (
    <TemplateView
      d={d}
      locale="en"
      t={CONTENT_TEXT.en}
      updated={pageUpdated(`/templates/${d.slug}`)}
      headings={{
        include: `What to include on ${aNiche} invoice`,
        paperSample: `${niche} invoice · sample`,
        docLabel: `${niche} invoice`,
        sampleFallback: `${niche} invoice example`,
        notesFallback: `${niche} billing notes`,
        tip: `A tip for ${nicheLower} invoices`,
        tipCallout: `${niche} pro tip`,
        faq: `${niche} invoicing FAQ`,
        cta: `Make your ${nicheLower} invoice`,
        typeLinks: `Invoice types for ${nicheLower} jobs`,
        tradeLinks: `${niche} invoices by trade`,
        pdfDefault: `A PDF looks the same on every phone and computer, can't be changed by accident, and is what clients and accountants expect. It's the right format for every ${nicheLower} invoice you send.`,
        browserText: `Open this ${nicheLower} template in the free generator: the example lines are already filled in. Change them, add your logo and download the PDF. No signup.`,
      }}
      links={{
        home: "/",
        hub: "/templates",
        // "Use this template": the generator opens with this page's example already filled in.
        use: `/free-invoice-generator?example=${d.slug}`,
        industry: industry && {
          href: `/industries/${industry.slug}`,
          title: `The ${industry.industry.toLowerCase()} invoice app`,
        },
        // Trade page → its invoice types (deposit, labor and materials …); type page → its trades.
        types: d.invoice_types.flatMap((s) => {
          const t = getTemplate(s);
          return t
            ? [
                {
                  href: page(t.slug),
                  title: `${t.niche} invoice`,
                  description: firstSentence(t.subtitle),
                },
              ]
            : [];
        }),
        trades: d.industry
          ? []
          : getTradesForInvoiceType(d.slug).map((t) => ({
              href: page(t.slug),
              title: `${t.niche} invoice`,
            })),
        related: d.related.map((r) => ({ href: page(r.slug), title: `${r.name} invoice` })),
      }}
    />
  );
}
