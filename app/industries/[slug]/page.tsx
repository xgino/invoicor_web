import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppleIcon } from "@/components/brand/AppleIcon";
import {
  ArticleLayout,
  Block,
  Callout,
  ClosingCta,
  FaqBlock,
  NoteList,
  PageHeader,
  PointList,
} from "@/components/sections/content/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { buttonClass } from "@/components/ui/Button";
import { Badge, RelatedLinks } from "@/components/ui/content";
import { InvoicePaper, PaperLabel } from "@/components/ui/invoice";
import { appStoreLink } from "@/lib/config";
import {
  CONTENT_UPDATED_AT,
  getIndustries,
  getIndustry,
  getTemplatesForIndustry,
  text,
} from "@/lib/content";
import { definedTermSetLd } from "@/lib/jsonld";
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
  });
}

const THREE = [1, 2, 3];

/** Industry page (ROADMAP chunk 22, blueprint "Industry"). All text from content/industries.json. */
export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const d = getIndustry(slug);
  if (!d) notFound();

  const industry = d.industry;
  const industryLower = industry.toLowerCase();
  const pairs = (prefix: string) =>
    THREE.flatMap((n) => {
      const title = text(d, `${prefix}_${n}_title`);
      return title ? [{ title, text: text(d, `${prefix}_${n}_text`) }] : [];
    });
  const mistakes = pairs("industry_mistake");
  const features = pairs("feature");
  const scenario = text(d, "real_scenario_text");
  const tip = text(d, "expert_tip_text");
  const tax = text(d, "tax_or_compliance_text");
  const glossaryTitle = text(d, "industry_glossary_title") ?? `${industry} billing terms`;

  const templates = getTemplatesForIndustry(d.slug);
  const toc = [
    { id: "mistakes", label: "Billing mistakes", show: mistakes.length > 0 },
    { id: "features", label: "How Invoicor helps", show: features.length > 0 },
    { id: "scenario", label: "A real scenario", show: !!scenario },
    { id: "tip", label: "Expert tip", show: !!tip },
    { id: "line-items", label: "Common line items", show: d.common_line_items.length > 0 },
    { id: "glossary", label: "Glossary", show: d.industry_glossary.length > 0 },
    { id: "tax", label: "Tax & compliance", show: !!tax },
    { id: "faqs", label: "FAQ", show: d.faqs.length > 0 },
  ].filter((s) => s.show);

  return (
    <>
      <JsonLd data={definedTermSetLd(glossaryTitle, d.industry_glossary)} />

      <PageHeader
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Industries", href: "/industries" },
          { name: industry },
        ]}
        eyebrow={text(d, "badge_text") ?? `Invoicing for ${industryLower}`}
        title={d.h1}
        subtitle={d.subtitle}
        updated={CONTENT_UPDATED_AT.industries}
        actions={
          <>
            <a
              href={appStoreLink(`industry-${d.slug}`)}
              target="_blank"
              rel="noopener noreferrer"
              data-track="cta_click"
              data-track-section={`industry-${d.slug}`}
              className={buttonClass({ size: "lg" })}
            >
              <AppleIcon size={17} />
              Start free on iOS
            </a>
            <Link
              href={
                templates[0]
                  ? `/free-invoice-generator?example=${templates[0].slug}`
                  : "/free-invoice-generator"
              }
              data-track="template_use"
              data-track-section={`industry-${d.slug}`}
              className={buttonClass({ variant: "secondary", size: "lg" })}
            >
              Create one free online
            </Link>
          </>
        }
        aside={
          d.industry_stats.length > 0 && (
            <InvoicePaper highlight edge="perforated" className="p-6 sm:p-7">
              <PaperLabel>{industry} at a glance</PaperLabel>
              <dl className="mt-4">
                {d.industry_stats.map((s) => (
                  <div
                    key={s.label}
                    className="border-line flex items-baseline justify-between gap-4 border-b py-3 last:border-b-0"
                  >
                    <dt className="text-small text-muted">{s.label}</dt>
                    <dd className="text-ink text-right font-bold tabular-nums">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </InvoicePaper>
          )
        }
      />

      <ArticleLayout toc={toc}>
        {mistakes.length > 0 && (
          <Block
            id="mistakes"
            eyebrow="What goes wrong"
            title={
              text(d, "industry_mistakes_title") ??
              `Billing mistakes that cost ${industryLower} money`
            }
          >
            <PointList items={mistakes} tone="cross" />
          </Block>
        )}

        {features.length > 0 && (
          <Block
            id="features"
            eyebrow="How Invoicor helps"
            title={`Built for how ${industryLower} bill`}
          >
            <PointList items={features} numbered />
          </Block>
        )}

        {scenario && (
          <Block
            id="scenario"
            eyebrow="A day on the job"
            title={text(d, "real_scenario_title") ?? "A real billing scenario"}
          >
            <p className="text-ink text-[1.0625rem] leading-relaxed">{scenario}</p>
          </Block>
        )}

        {tip && (
          <Block
            id="tip"
            eyebrow="Expert tip"
            title={text(d, "expert_tip_title") ?? `A tip for ${industryLower}`}
          >
            <Callout title="From experience">{tip}</Callout>
          </Block>
        )}

        {d.common_line_items.length > 0 && (
          <Block
            id="line-items"
            eyebrow="Line items"
            title={`Common line items for ${industryLower}`}
            intro="Save these once as products in Invoicor and add them to any invoice with a tap."
          >
            <InvoicePaper className="p-6 sm:p-8">
              <ul>
                {d.common_line_items.map((item) => (
                  <li
                    key={item.name}
                    className="border-line flex items-start justify-between gap-4 border-b py-4 first:pt-0 last:border-b-0 last:pb-0"
                  >
                    <div>
                      <h3 className="text-ink font-bold">{item.name}</h3>
                      <p className="text-small text-muted mt-1">{item.desc}</p>
                    </div>
                    <Badge tone="neutral">{item.type}</Badge>
                  </li>
                ))}
              </ul>
            </InvoicePaper>
          </Block>
        )}

        {d.industry_glossary.length > 0 && (
          <Block id="glossary" eyebrow="Glossary" title={glossaryTitle}>
            <dl className="grid gap-4 sm:grid-cols-2">
              {d.industry_glossary.map((g) => (
                <div key={g.term} className="bg-tint rounded-2xl p-5">
                  <dt className="text-ink font-bold">{g.term}</dt>
                  <dd className="text-muted mt-1.5 text-[0.9375rem] leading-relaxed">
                    {g.definition}
                  </dd>
                </div>
              ))}
            </dl>
          </Block>
        )}

        {tax && (
          <Block
            id="tax"
            eyebrow="Tax & compliance"
            title={text(d, "tax_or_compliance_title") ?? `Tax considerations for ${industryLower}`}
          >
            <NoteList items={[{ title: "What to know", text: tax }]} />
            <p className="text-small text-subtle mt-6">
              General information, not tax or legal advice. Check the specifics with an accountant
              or lawyer where you work.
            </p>
          </Block>
        )}

        <FaqBlock title={`Questions from ${industryLower}`} faqs={d.faqs} />

        {templates.length > 0 && (
          <div className="border-line border-t py-14">
            <p className="text-eyebrow text-brand-700 uppercase">Free templates</p>
            <h2 className="font-heading text-h3 text-ink mt-2 font-bold">
              Need a single invoice right now?
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {templates.map((t) => (
                <Link
                  key={t.slug}
                  href={`/templates/${t.slug}`}
                  className="group bg-tint ring-line hover:ring-brand-200 focus-visible:focus-ring flex items-center justify-between gap-4 rounded-2xl p-5 ring-1 transition"
                >
                  <span>
                    <span className="text-ink block font-bold">
                      Free {t.niche.toLowerCase()} invoice template
                    </span>
                    <span className="text-small text-muted mt-0.5 block">
                      With a filled-in example and what to include
                    </span>
                  </span>
                  <ArrowRight
                    aria-hidden
                    className="text-brand-700 size-5 shrink-0 transition group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        )}

        {d.related.length > 0 && (
          <div className="border-line border-t py-14">
            <RelatedLinks
              title="More industries"
              links={d.related.map((r) => ({
                href: `/industries/${r.slug}`,
                title: `Invoicing for ${r.name}`,
              }))}
            />
          </div>
        )}
      </ArticleLayout>

      <ClosingCta
        title={`Built for ${industryLower}.`}
        gradient="Try it free."
        text="Saved clients and line items, automatic totals and tax, and a clean PDF you send from your phone."
        campaign={`industry-${d.slug}-footer`}
      />
    </>
  );
}
