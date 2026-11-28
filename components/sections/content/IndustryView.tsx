import { ArrowRight } from "lucide-react";
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
import { Badge, RelatedLinks } from "@/components/ui/content";
import { InvoicePaper, PaperLabel } from "@/components/ui/invoice";
import { appStoreLink } from "@/lib/config";
import { type IndustryEntry, text } from "@/lib/content";
import type { Locale } from "@/lib/i18n/config";
import type { ContentDict } from "@/lib/i18n/pages/content/en";
import { definedTermSetLd } from "@/lib/jsonld";

const THREE = [1, 2, 3];

/**
 * What an industry page needs besides its entry: the headings with the profession in them and
 * every link, built by the page for its language. Everything else comes from `t` and the entry.
 */
export interface IndustryViewProps {
  d: IndustryEntry;
  locale: Locale;
  t: ContentDict;
  updated: string;
  headings: {
    badge: string;
    stats: string;
    mistakes: string;
    features: string;
    tip: string;
    lineItems: string;
    glossary: string;
    tax: string;
    faq: string;
    cta: string;
  };
  links: {
    home: string;
    hub: string;
    online: string;
    templates: Array<{ href: string; title: string }>;
    related: Array<{ href: string; title: string }>;
  };
}

/** Industry page (blueprint "Industry", RULES.md §5 I), in any language. */
export function IndustryView({ d, locale, t, updated, headings: h, links }: IndustryViewProps) {
  const p = t.industry;
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

  const toc = [
    { id: "mistakes", label: p.toc.mistakes, show: mistakes.length > 0 },
    { id: "features", label: p.toc.features, show: features.length > 0 },
    { id: "scenario", label: p.toc.scenario, show: !!scenario },
    { id: "tip", label: p.toc.tip, show: !!tip },
    { id: "line-items", label: p.toc.lineItems, show: d.common_line_items.length > 0 },
    { id: "glossary", label: p.toc.glossary, show: d.industry_glossary.length > 0 },
    { id: "tax", label: p.toc.tax, show: !!tax },
    { id: "faqs", label: p.toc.faq, show: d.faqs.length > 0 },
  ].filter((s) => s.show);

  return (
    <>
      <JsonLd data={definedTermSetLd(h.glossary, d.industry_glossary)} />

      <PageHeader
        crumbs={[
          { name: t.home, href: links.home },
          { name: p.crumb, href: links.hub },
          { name: d.industry },
        ]}
        eyebrow={h.badge}
        title={d.h1}
        subtitle={d.subtitle}
        updated={updated}
        updatedLabel={t.updated}
        locale={locale}
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
              {p.start}
            </a>
            <Link
              href={links.online}
              data-track="template_use"
              data-track-section={`industry-${d.slug}`}
              className={buttonClass({ variant: "secondary", size: "lg" })}
            >
              {p.online}
            </Link>
          </>
        }
        aside={
          d.industry_stats.length > 0 && (
            <InvoicePaper highlight edge="perforated" className="p-6 sm:p-7">
              <PaperLabel>{h.stats}</PaperLabel>
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

      <ArticleLayout toc={toc} tocLabel={t.onThisPage}>
        {mistakes.length > 0 && (
          <Block id="mistakes" eyebrow={p.eyebrows.mistakes} title={h.mistakes}>
            <PointList items={mistakes} tone="cross" />
          </Block>
        )}

        {features.length > 0 && (
          <Block id="features" eyebrow={p.eyebrows.features} title={h.features}>
            <PointList items={features} numbered />
          </Block>
        )}

        {scenario && (
          <Block
            id="scenario"
            eyebrow={p.eyebrows.scenario}
            title={text(d, "real_scenario_title") ?? p.scenarioTitle}
          >
            <p className="text-ink text-[1.0625rem] leading-relaxed">{scenario}</p>
          </Block>
        )}

        {tip && (
          <Block id="tip" eyebrow={p.eyebrows.tip} title={h.tip}>
            <Callout title={p.fromExperience}>{tip}</Callout>
          </Block>
        )}

        {d.common_line_items.length > 0 && (
          <Block
            id="line-items"
            eyebrow={p.eyebrows.lineItems}
            title={h.lineItems}
            intro={p.lineItemsIntro}
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
          <Block id="glossary" eyebrow={p.eyebrows.glossary} title={h.glossary}>
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
          <Block id="tax" eyebrow={p.eyebrows.tax} title={h.tax}>
            <NoteList items={[{ title: p.whatToKnow, text: tax }]} />
            <p className="text-small text-subtle mt-6">{t.disclaimer}</p>
          </Block>
        )}

        <FaqBlock title={h.faq} faqs={d.faqs} />

        {links.templates.length > 0 && (
          <div className="border-line border-t py-14">
            <p className="text-eyebrow text-brand-700 uppercase">{p.templatesEyebrow}</p>
            <h2 className="font-heading text-h3 text-ink mt-2 font-bold">{p.templatesTitle}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {links.templates.map((x) => (
                <Link
                  key={x.href}
                  href={x.href}
                  className="group bg-tint ring-line hover:ring-brand-200 focus-visible:focus-ring flex items-center justify-between gap-4 rounded-2xl p-5 ring-1 transition"
                >
                  <span>
                    <span className="text-ink block font-bold">{x.title}</span>
                    <span className="text-small text-muted mt-0.5 block">{p.templatesCard}</span>
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

        {links.related.length > 0 && (
          <div className="border-line border-t py-14">
            <RelatedLinks title={p.moreIndustries} links={links.related} />
          </div>
        )}
      </ArticleLayout>

      <ClosingCta
        title={h.cta}
        gradient={p.ctaGradient}
        text={p.ctaText}
        campaign={`industry-${d.slug}-footer`}
        locale={locale}
      />
    </>
  );
}
