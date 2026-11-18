import { ArrowRight, File, FileSpreadsheet, FileText, PencilLine } from "lucide-react";
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
import { RelatedLinks } from "@/components/ui/content";
import { InvoicePaper, LineItems, PaperLabel } from "@/components/ui/invoice";
import { appStoreLink } from "@/lib/config";
import { CONTENT_UPDATED_AT, getIndustry, getTemplate, getTemplates, text } from "@/lib/content";
import { howToLd } from "@/lib/jsonld";
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
  });
}

const FORMATS = [
  { key: "format_pdf_desc", label: "PDF", icon: FileText },
  { key: "format_word_desc", label: "Word", icon: File },
  { key: "format_excel_desc", label: "Excel", icon: FileSpreadsheet },
];

/** Template page (ROADMAP chunk 21, blueprint "Template"). All text comes from content/templates.json. */
export default async function TemplatePage({ params }: PageProps<"/templates/[slug]">) {
  const { slug } = await params;
  const d = getTemplate(slug);
  if (!d) notFound();

  const niche = d.niche;
  const nicheLower = niche.toLowerCase();
  const requirements = [1, 2, 3, 4, 5, 6].flatMap((n) => {
    const title = text(d, `req_${n}_title`);
    return title ? [{ title, text: text(d, `req_${n}_text`) }] : [];
  });
  const whatToInclude = text(d, "what_to_include_intro");
  const formats = FORMATS.flatMap((f) => {
    const desc = text(d, f.key);
    return desc ? [{ ...f, desc }] : [];
  });
  const proTip = text(d, "pro_tip");
  const rows = d.sample_breakdown_rows;
  const totals = [
    { key: "sample_breakdown_subtotal", label: "Subtotal" },
    {
      key: "sample_breakdown_deposit",
      label: text(d, "sample_breakdown_deposit_label") ?? "Deposit paid",
    },
    { key: "sample_breakdown_tax", label: text(d, "sample_breakdown_tax_label") ?? "Sales tax" },
  ].flatMap((t) => {
    const amount = text(d, t.key);
    return amount ? [{ label: t.label, amount }] : [];
  });
  const balance = text(d, "sample_breakdown_balance");
  const sampleTitle = text(d, "sample_breakdown_title") ?? `${niche} invoice example`;
  // "Use this template": the generator opens with this page's example already filled in (36a).
  const useHref = `/free-invoice-generator?example=${d.slug}`;
  const industry = d.industry ? getIndustry(d.industry) : undefined;

  const toc = [
    { id: "what-to-include", label: "What to include", show: !!whatToInclude },
    { id: "sample", label: "Invoice example", show: rows.length > 0 },
    { id: "notes", label: "Industry notes", show: d.industry_notes.length > 0 },
    { id: "mistakes", label: "Mistakes to avoid", show: d.mistakes.length > 0 },
    { id: "formats", label: "File formats", show: formats.length > 0 },
    { id: "tip", label: "Pro tip", show: !!proTip },
    { id: "faqs", label: "FAQ", show: d.faqs.length > 0 },
  ].filter((s) => s.show);

  const items = rows.map((r) => ({
    description: r.description,
    detail: r.rate ? `${r.qty} × ${r.rate}` : undefined,
    amount: r.amount,
  }));

  return (
    <>
      <JsonLd
        data={howToLd(
          `What to include on a ${nicheLower} invoice`,
          whatToInclude,
          requirements.map((r) => ({ name: r.title, text: r.text })),
        )}
      />

      <PageHeader
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Templates", href: "/templates" },
          { name: niche },
        ]}
        eyebrow="Free template & guide"
        title={d.h1}
        subtitle={d.subtitle}
        updated={CONTENT_UPDATED_AT.templates}
        actions={
          <>
            <Link
              href={useHref}
              data-track="template_use"
              data-track-section={`template-${d.slug}`}
              className={buttonClass({ size: "lg" })}
            >
              <PencilLine aria-hidden className="size-4.5" />
              Use this template free
            </Link>
            <a
              href={appStoreLink(`template-${d.slug}`)}
              target="_blank"
              rel="noopener noreferrer"
              data-track="cta_click"
              data-track-section={`template-${d.slug}`}
              className={buttonClass({ variant: "secondary", size: "lg" })}
            >
              <AppleIcon size={17} />
              Create it in the app
            </a>
          </>
        }
        aside={
          rows.length > 0 && (
            <InvoicePaper highlight edge="perforated" className="p-6 sm:p-7">
              <PaperLabel>{niche} invoice · sample</PaperLabel>
              <LineItems
                className="mt-4"
                animate
                items={items}
                totals={totals}
                total={balance ? { label: "Balance due", amount: balance } : undefined}
              />
            </InvoicePaper>
          )
        }
      />

      <ArticleLayout toc={toc}>
        {text(d, "intro_paragraph") && (
          <p className="text-lead text-ink pt-14 pb-2">{text(d, "intro_paragraph")}</p>
        )}
        {whatToInclude && (
          <Block
            id="what-to-include"
            eyebrow="Checklist"
            title={`What to include on a ${nicheLower} invoice`}
            intro={whatToInclude}
          >
            <PointList items={requirements} />
            {text(d, "what_to_include_outro") && (
              <p className="text-muted mt-8 leading-relaxed">{text(d, "what_to_include_outro")}</p>
            )}
          </Block>
        )}

        {rows.length > 0 && (
          <Block
            id="sample"
            eyebrow="Example"
            title={sampleTitle}
            intro={text(d, "sample_breakdown_intro")}
          >
            <InvoicePaper edge="perforated" className="p-6 sm:p-8">
              <PaperLabel>{niche} invoice</PaperLabel>
              <LineItems
                className="mt-4"
                items={items}
                totals={totals}
                total={balance ? { label: "Balance due", amount: balance } : undefined}
              />
              {text(d, "sample_breakdown_notes") && (
                <p className="text-small text-muted border-line mt-6 border-t pt-4">
                  <strong className="text-ink">Invoice notes:</strong>{" "}
                  {text(d, "sample_breakdown_notes")}
                </p>
              )}
            </InvoicePaper>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              <Link
                href={useHref}
                data-track="template_use"
                data-track-section={`template-${d.slug}-example`}
                className={buttonClass({ size: "md" })}
              >
                <PencilLine aria-hidden className="size-4" />
                Fill in this example online
              </Link>
              <span className="text-small text-subtle">
                Free, no signup. Change anything, then download the PDF.
              </span>
            </div>
          </Block>
        )}

        {d.industry_notes.length > 0 && (
          <Block
            id="notes"
            eyebrow="Good to know"
            title={text(d, "industry_notes_title") ?? `${niche} billing notes`}
          >
            <NoteList items={d.industry_notes} />
            <p className="text-small text-subtle mt-6">
              General information, not tax or legal advice. Check the specifics with an accountant
              or lawyer where you work.
            </p>
          </Block>
        )}

        {d.mistakes.length > 0 && (
          <Block
            id="mistakes"
            eyebrow="Avoid these"
            title={text(d, "mistakes_title") ?? "Common mistakes to avoid"}
          >
            <PointList items={d.mistakes} tone="cross" />
          </Block>
        )}

        {formats.length > 0 && (
          <Block
            id="formats"
            eyebrow="Formats"
            title={text(d, "when_to_use_each_format_title") ?? "Which file format should you use?"}
          >
            <ul className="grid gap-4 sm:grid-cols-3">
              {formats.map((f) => (
                <li key={f.key} className="bg-surface ring-line shadow-soft rounded-2xl p-6 ring-1">
                  <f.icon aria-hidden className="text-brand-600 size-7" strokeWidth={1.75} />
                  <h3 className="text-ink mt-4 font-bold">{f.label}</h3>
                  <p className="text-muted mt-2 text-[0.9375rem] leading-relaxed">{f.desc}</p>
                </li>
              ))}
            </ul>
          </Block>
        )}

        {proTip && (
          <Block id="tip" eyebrow="Pro tip" title={`A tip for ${nicheLower} invoices`}>
            <Callout title={`${niche} pro tip`}>{proTip}</Callout>
          </Block>
        )}

        <FaqBlock title={`${niche} invoicing FAQ`} faqs={d.faqs} />

        {industry && (
          <div className="border-line border-t py-14">
            <Link
              href={`/industries/${industry.slug}`}
              className="group bg-tint ring-line hover:ring-brand-200 focus-visible:focus-ring flex items-center justify-between gap-6 rounded-2xl p-6 ring-1 transition sm:p-8"
            >
              <span>
                <span className="text-eyebrow text-brand-700 block uppercase">
                  Invoicing every week?
                </span>
                <span className="font-heading text-h4 text-ink mt-1 block font-bold">
                  The {industry.industry.toLowerCase()} invoice app
                </span>
                <span className="text-muted mt-1 block">
                  Save your clients and usual line items, and send each invoice from your phone.
                </span>
              </span>
              <ArrowRight
                aria-hidden
                className="text-brand-700 size-5 shrink-0 transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        )}

        {d.related.length > 0 && (
          <div className="border-line border-t py-14">
            <RelatedLinks
              title="More invoice templates"
              links={d.related.map((r) => ({
                href: `/templates/${r.slug}`,
                title: `${r.name} invoice`,
              }))}
            />
          </div>
        )}
      </ArticleLayout>

      <ClosingCta
        title={`Make your ${nicheLower} invoice`}
        gradient="in seconds."
        text="Saved clients and line items, automatic totals and tax, and a clean PDF you send from your phone before you leave the job."
        campaign={`template-${d.slug}-footer`}
      />
    </>
  );
}
