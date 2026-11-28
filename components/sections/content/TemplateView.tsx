import { ArrowRight, FileText, PencilLine } from "lucide-react";
import Link from "next/link";
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
import { type TemplateEntry, text } from "@/lib/content";
import { CHROME } from "@/lib/i18n/chrome";
import type { Locale } from "@/lib/i18n/config";
import type { ContentDict } from "@/lib/i18n/pages/content/en";
import { howToLd } from "@/lib/jsonld";
import { FREE_INVOICES } from "@/lib/pricing";

type Links = Array<{ href: string; title: string; description?: string }>;

/**
 * What a template page needs besides its entry: the headings with the trade's name in them and
 * every link, built by the page for its language (app/(en)/templates/[slug] for English,
 * app/[locale]/[[...path]] for the others). Everything else comes from `t` and the entry.
 */
export interface TemplateViewProps {
  d: TemplateEntry;
  locale: Locale;
  t: ContentDict;
  updated: string;
  headings: {
    include: string;
    /** The label on the sample in the header ("Deposit invoice · sample") … */
    paperSample: string;
    /** … and on the full example ("Deposit invoice"). */
    docLabel: string;
    sampleFallback: string;
    notesFallback: string;
    tip: string;
    /** The title of the pro tip box ("Deposit pro tip"). */
    tipCallout: string;
    faq: string;
    cta: string;
    typeLinks: string;
    tradeLinks: string;
    pdfDefault: string;
    browserText: string;
  };
  links: {
    home: string;
    hub: string;
    use: string;
    industry?: { href: string; title: string };
    types: Links;
    trades: Links;
    related: Links;
  };
}

/** Template page (blueprint "Template", RULES.md §5 T, B and D), in any language. */
export function TemplateView({ d, locale, t, updated, headings: h, links }: TemplateViewProps) {
  const p = t.template;
  const requirements = [1, 2, 3, 4, 5, 6].flatMap((n) => {
    const title = text(d, `req_${n}_title`);
    return title ? [{ title, text: text(d, `req_${n}_text`) }] : [];
  });
  const whatToInclude = text(d, "what_to_include_intro");
  // Invoicor makes PDFs only (generator and app), so the page says so (ROADMAP S1-n).
  const pdfDesc = text(d, "format_pdf_desc") ?? h.pdfDefault;
  const proTip = text(d, "pro_tip");
  const rows = d.sample_breakdown_rows;
  const totals = [
    { key: "sample_breakdown_subtotal", label: p.subtotal },
    {
      key: "sample_breakdown_deposit",
      label: text(d, "sample_breakdown_deposit_label") ?? p.depositPaid,
    },
    { key: "sample_breakdown_tax", label: text(d, "sample_breakdown_tax_label") ?? p.tax },
  ].flatMap((x) => {
    const amount = text(d, x.key);
    return amount ? [{ label: x.label, amount }] : [];
  });
  const balance = text(d, "sample_breakdown_balance");
  const sampleTitle = text(d, "sample_breakdown_title") ?? h.sampleFallback;

  const toc = [
    { id: "what-to-include", label: p.toc.include, show: !!whatToInclude },
    { id: "sample", label: p.toc.sample, show: rows.length > 0 },
    // Invoice-type pages (deposit, freelance …) have no industry: their notes are about the document.
    {
      id: "notes",
      label: d.industry ? p.toc.industryNotes : p.toc.notes,
      show: d.industry_notes.length > 0,
    },
    { id: "mistakes", label: p.toc.mistakes, show: d.mistakes.length > 0 },
    { id: "formats", label: p.toc.formats, show: true },
    { id: "tip", label: p.toc.tip, show: !!proTip },
    { id: "faqs", label: p.toc.faq, show: d.faqs.length > 0 },
  ].filter((s) => s.show);

  const items = rows.map((r) => ({
    description: r.description,
    detail: r.rate ? `${r.qty} × ${r.rate}` : undefined,
    amount: r.amount,
  }));
  const total = balance ? { label: p.balanceDue, amount: balance } : undefined;

  return (
    <>
      <JsonLd
        data={howToLd(
          h.include,
          whatToInclude,
          requirements.map((r) => ({ name: r.title, text: r.text })),
        )}
      />

      <PageHeader
        crumbs={[
          { name: t.home, href: links.home },
          { name: p.crumb, href: links.hub },
          { name: d.niche },
        ]}
        eyebrow={p.eyebrow}
        title={d.h1}
        subtitle={d.subtitle}
        updated={updated}
        updatedLabel={t.updated}
        locale={locale}
        actions={
          <>
            <Link
              href={links.use}
              data-track="template_use"
              data-track-section={`template-${d.slug}`}
              className={buttonClass({ size: "lg" })}
            >
              <PencilLine aria-hidden className="size-4.5" />
              {p.use}
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
              {p.app}
            </a>
          </>
        }
        aside={
          rows.length > 0 && (
            <InvoicePaper highlight edge="perforated" className="p-6 sm:p-7">
              <PaperLabel>{h.paperSample}</PaperLabel>
              <LineItems
                className="mt-4"
                headers={CHROME[locale].invoice}
                animate
                items={items}
                totals={totals}
                total={total}
              />
            </InvoicePaper>
          )
        }
      />

      <ArticleLayout toc={toc} tocLabel={t.onThisPage}>
        {text(d, "intro_paragraph") && (
          <p className="text-lead text-ink pt-14 pb-2">{text(d, "intro_paragraph")}</p>
        )}
        {whatToInclude && (
          <Block
            id="what-to-include"
            eyebrow={p.eyebrows.include}
            title={h.include}
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
            eyebrow={p.eyebrows.sample}
            title={sampleTitle}
            intro={text(d, "sample_breakdown_intro")}
          >
            <InvoicePaper edge="perforated" className="p-6 sm:p-8">
              <PaperLabel>{h.docLabel}</PaperLabel>
              <LineItems
                className="mt-4"
                headers={CHROME[locale].invoice}
                items={items}
                totals={totals}
                total={total}
              />
              {text(d, "sample_breakdown_notes") && (
                <p className="text-small text-muted border-line mt-6 border-t pt-4">
                  <strong className="text-ink">{p.invoiceNotes}</strong>{" "}
                  {text(d, "sample_breakdown_notes")}
                </p>
              )}
            </InvoicePaper>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              <Link
                href={links.use}
                data-track="template_use"
                data-track-section={`template-${d.slug}-example`}
                className={buttonClass({ size: "md" })}
              >
                <PencilLine aria-hidden className="size-4" />
                {p.fillExample}
              </Link>
              <span className="text-small text-subtle">{p.fillHint}</span>
            </div>
          </Block>
        )}

        {d.industry_notes.length > 0 && (
          <Block
            id="notes"
            eyebrow={p.eyebrows.notes}
            title={text(d, "industry_notes_title") ?? h.notesFallback}
          >
            <NoteList items={d.industry_notes} />
            <p className="text-small text-subtle mt-6">{t.disclaimer}</p>
          </Block>
        )}

        {d.mistakes.length > 0 && (
          <Block
            id="mistakes"
            eyebrow={p.eyebrows.mistakes}
            title={text(d, "mistakes_title") ?? p.mistakesTitle}
          >
            <PointList items={d.mistakes} tone="cross" />
          </Block>
        )}

        <Block id="formats" eyebrow={p.eyebrows.formats} title={p.formatsTitle}>
          <ul className="grid gap-4 sm:grid-cols-3">
            <li className="bg-surface ring-line shadow-soft rounded-2xl p-6 ring-1">
              <FileText aria-hidden className="text-brand-600 size-7" strokeWidth={1.75} />
              <h3 className="text-ink mt-4 font-bold">{p.whyPdf}</h3>
              <p className="text-muted mt-2 text-[0.9375rem] leading-relaxed">{pdfDesc}</p>
            </li>
            <li className="bg-surface ring-line shadow-soft rounded-2xl p-6 ring-1">
              <PencilLine aria-hidden className="text-brand-600 size-7" strokeWidth={1.75} />
              <h3 className="text-ink mt-4 font-bold">{p.browserTitle}</h3>
              <p className="text-muted mt-2 text-[0.9375rem] leading-relaxed">{h.browserText}</p>
              <Link
                href={links.use}
                data-track="template_use"
                data-track-section={`template-${d.slug}-format`}
                className="text-brand-700 text-small mt-3 inline-flex items-center gap-1 font-bold"
              >
                {p.openGenerator} <ArrowRight aria-hidden className="size-4" />
              </Link>
            </li>
            <li className="bg-surface ring-line shadow-soft rounded-2xl p-6 ring-1">
              <span className="text-brand-600 block">
                <AppleIcon size={26} />
              </span>
              <h3 className="text-ink mt-4 font-bold">{p.iphoneTitle}</h3>
              <p className="text-muted mt-2 text-[0.9375rem] leading-relaxed">
                {p.iphoneText.replace("{n}", String(FREE_INVOICES))}
              </p>
              <a
                href={appStoreLink(`template-${d.slug}-format`)}
                target="_blank"
                rel="noopener noreferrer"
                data-track="cta_click"
                data-track-section={`template-${d.slug}-format`}
                className="text-brand-700 text-small mt-3 inline-flex items-center gap-1 font-bold"
              >
                {p.getApp} <ArrowRight aria-hidden className="size-4" />
              </a>
            </li>
          </ul>
          <p className="text-small text-muted mt-5">{p.whyNotWord}</p>
        </Block>

        {proTip && (
          <Block id="tip" eyebrow={p.eyebrows.tip} title={h.tip}>
            <Callout title={h.tipCallout}>{proTip}</Callout>
          </Block>
        )}

        <FaqBlock title={h.faq} faqs={d.faqs} />

        {links.industry && (
          <div className="border-line border-t py-14">
            <Link
              href={links.industry.href}
              className="group bg-tint ring-line hover:ring-brand-200 focus-visible:focus-ring flex items-center justify-between gap-6 rounded-2xl p-6 ring-1 transition sm:p-8"
            >
              <span>
                <span className="text-eyebrow text-brand-700 block uppercase">
                  {p.appCardEyebrow}
                </span>
                <span className="font-heading text-h4 text-ink mt-1 block font-bold">
                  {links.industry.title}
                </span>
                <span className="text-muted mt-1 block">{p.appCardText}</span>
              </span>
              <ArrowRight
                aria-hidden
                className="text-brand-700 size-5 shrink-0 transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        )}

        {links.types.length > 0 && (
          <div className="border-line border-t py-14">
            <RelatedLinks title={h.typeLinks} links={links.types} />
          </div>
        )}

        {links.trades.length > 0 && (
          <div className="border-line border-t py-14">
            <RelatedLinks title={h.tradeLinks} links={links.trades} />
          </div>
        )}

        {links.related.length > 0 && (
          <div className="border-line border-t py-14">
            <RelatedLinks title={p.moreTemplates} links={links.related} />
          </div>
        )}
      </ArticleLayout>

      <ClosingCta
        title={h.cta}
        gradient={p.ctaGradient}
        text={p.ctaText}
        campaign={`template-${d.slug}-footer`}
        locale={locale}
      />
    </>
  );
}

/** "Bill part of the price first. Then …" → "Bill part of the price first." (card descriptions). */
export function firstSentence(text: string): string {
  const m = text.match(/^.*?[.!?](?=\s|$)/);
  return m ? m[0] : text;
}
