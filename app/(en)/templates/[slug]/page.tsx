import { ArrowRight, FileText, PencilLine } from "lucide-react";
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
import {
  CONTENT_UPDATED_AT,
  getIndustry,
  getTemplate,
  getTemplates,
  getTradesForInvoiceType,
  text,
} from "@/lib/content";
import { howToLd } from "@/lib/jsonld";
import { FREE_INVOICES } from "@/lib/pricing";
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

/** Template page (ROADMAP chunk 21, blueprint "Template"). All text comes from content/templates.json. */
export default async function TemplatePage({ params }: PageProps<"/templates/[slug]">) {
  const { slug } = await params;
  const d = getTemplate(slug);
  if (!d) notFound();

  const niche = d.niche;
  const nicheLower = niche.toLowerCase();
  // "an hourly invoice", "an international invoice", "a deposit invoice".
  const aNiche = `${/^(?:[aeiou]|hour|honest|honor)/.test(nicheLower) ? "an" : "a"} ${nicheLower}`;
  const requirements = [1, 2, 3, 4, 5, 6].flatMap((n) => {
    const title = text(d, `req_${n}_title`);
    return title ? [{ title, text: text(d, `req_${n}_text`) }] : [];
  });
  const whatToInclude = text(d, "what_to_include_intro");
  // Invoicor makes PDFs only (generator and app), so the page says so (ROADMAP S1-n).
  const pdfDesc =
    text(d, "format_pdf_desc") ??
    `A PDF looks the same on every phone and computer, can't be changed by accident, and is what clients and accountants expect. It's the right format for every ${nicheLower} invoice you send.`;
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
  // Trade page → its invoice types (deposit, labor and materials …); type page → its trades.
  const typeLinks = d.invoice_types.flatMap((slug) => {
    const t = getTemplate(slug);
    return t
      ? [
          {
            href: `/templates/${t.slug}`,
            title: `${t.niche} invoice`,
            description: firstSentence(t.subtitle),
          },
        ]
      : [];
  });
  const tradeLinks = d.industry
    ? []
    : getTradesForInvoiceType(d.slug).map((t) => ({
        href: `/templates/${t.slug}`,
        title: `${t.niche} invoice`,
      }));

  const toc = [
    { id: "what-to-include", label: "What to include", show: !!whatToInclude },
    { id: "sample", label: "Invoice example", show: rows.length > 0 },
    // Invoice-type pages (deposit, freelance …) have no industry: their notes are about the document.
    {
      id: "notes",
      label: d.industry ? "Industry notes" : "Notes",
      show: d.industry_notes.length > 0,
    },
    { id: "mistakes", label: "Mistakes to avoid", show: d.mistakes.length > 0 },
    { id: "formats", label: "Send it as a PDF", show: true },
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
          `What to include on ${aNiche} invoice`,
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
            title={`What to include on ${aNiche} invoice`}
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

        <Block id="formats" eyebrow="Format" title="Send it as a PDF">
          <ul className="grid gap-4 sm:grid-cols-3">
            <li className="bg-surface ring-line shadow-soft rounded-2xl p-6 ring-1">
              <FileText aria-hidden className="text-brand-600 size-7" strokeWidth={1.75} />
              <h3 className="text-ink mt-4 font-bold">Why PDF</h3>
              <p className="text-muted mt-2 text-[0.9375rem] leading-relaxed">{pdfDesc}</p>
            </li>
            <li className="bg-surface ring-line shadow-soft rounded-2xl p-6 ring-1">
              <PencilLine aria-hidden className="text-brand-600 size-7" strokeWidth={1.75} />
              <h3 className="text-ink mt-4 font-bold">Free, in your browser</h3>
              <p className="text-muted mt-2 text-[0.9375rem] leading-relaxed">
                Open this {nicheLower} template in the free generator: the example lines are already
                filled in. Change them, add your logo and download the PDF. No signup.
              </p>
              <Link
                href={useHref}
                data-track="template_use"
                data-track-section={`template-${d.slug}-format`}
                className="text-brand-700 text-small mt-3 inline-flex items-center gap-1 font-bold"
              >
                Open the generator <ArrowRight aria-hidden className="size-4" />
              </Link>
            </li>
            <li className="bg-surface ring-line shadow-soft rounded-2xl p-6 ring-1">
              <span className="text-brand-600 block">
                <AppleIcon size={26} />
              </span>
              <h3 className="text-ink mt-4 font-bold">From your iPhone</h3>
              <p className="text-muted mt-2 text-[0.9375rem] leading-relaxed">
                The Invoicor app makes the same PDF and sends it by email or message, with your
                clients and usual items saved. {FREE_INVOICES} invoices free.
              </p>
              <a
                href={appStoreLink(`template-${d.slug}-format`)}
                target="_blank"
                rel="noopener noreferrer"
                data-track="cta_click"
                data-track-section={`template-${d.slug}-format`}
                className="text-brand-700 text-small mt-3 inline-flex items-center gap-1 font-bold"
              >
                Get the app <ArrowRight aria-hidden className="size-4" />
              </a>
            </li>
          </ul>
          <p className="text-small text-muted mt-5">
            Why not Word or Excel? Anyone who opens them can change the amounts, and a formula can
            quietly break a total. Invoicor makes PDFs only.
          </p>
        </Block>

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

        {typeLinks.length > 0 && (
          <div className="border-line border-t py-14">
            <RelatedLinks title={`Invoice types for ${nicheLower} jobs`} links={typeLinks} />
          </div>
        )}

        {tradeLinks.length > 0 && (
          <div className="border-line border-t py-14">
            <RelatedLinks title={`${niche} invoices by trade`} links={tradeLinks} />
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

/** "Bill part of the price first. Then …" → "Bill part of the price first." (card descriptions). */
function firstSentence(text: string): string {
  const m = text.match(/^.*?[.!?](?=\s|$)/);
  return m ? m[0] : text;
}
