import { HubPage } from "@/components/sections/content/hub";
import { IndustryView } from "@/components/sections/content/IndustryView";
import { TemplateView, firstSentence } from "@/components/sections/content/TemplateView";
import { text } from "@/lib/content";
import { pageUpdated } from "@/lib/page-dates";
import {
  contentPath,
  contentVersions,
  getLocalIndustries,
  getLocalIndustry,
  getLocalTemplate,
  getLocalTemplates,
  getLocalTemplatesForIndustry,
  getLocalTradesForInvoiceType,
  hubPath,
  hubVersions,
} from "@/lib/content-i18n";
import type { Locale } from "@/lib/i18n/config";
import { CONTENT_TEXT } from "@/lib/i18n/pages/content";
import { CONTENT_BASES, ROUTES } from "@/lib/i18n/routes";
import { FREE_INVOICES } from "@/lib/pricing";
import { ogImagePath } from "@/lib/seo";

/**
 * The template and industry pages and hubs in the other languages (task S1), for
 * app/[locale]/[[...path]]: which URLs exist, their metadata and their page.
 */
export type ContentRoute =
  | { kind: "templateHub" }
  | { kind: "template"; slug: string }
  | { kind: "industryHub" }
  | { kind: "industry"; slug: string };

const segmentsOf = (path: string) => path.split("/").filter(Boolean).slice(1);

/** Every content URL in a language, as path segments after the locale (generateStaticParams). */
export function contentRoutes(l: Locale): Array<{ route: ContentRoute; segments: string[] }> {
  const out: Array<{ route: ContentRoute; segments: string[] }> = [];
  if (getLocalTemplates(l).length) {
    out.push({ route: { kind: "templateHub" }, segments: segmentsOf(CONTENT_BASES.templates[l]) });
    for (const t of getLocalTemplates(l))
      out.push({
        route: { kind: "template", slug: t.slug },
        segments: segmentsOf(contentPath("templates", l, t.slug)),
      });
  }
  if (getLocalIndustries(l).length) {
    out.push({ route: { kind: "industryHub" }, segments: segmentsOf(CONTENT_BASES.industries[l]) });
    for (const i of getLocalIndustries(l))
      out.push({
        route: { kind: "industry", slug: i.slug },
        segments: segmentsOf(contentPath("industries", l, i.slug)),
      });
  }
  return out;
}

const fill = (s: string) => s.replace("{n}", String(FREE_INVOICES));
const generatorFor = (l: Locale) => ROUTES.generator[l] ?? `/free-invoice-generator?lang=${l}`;
const withExample = (l: Locale, slug: string) => {
  const base = generatorFor(l);
  return `${base}${base.includes("?") ? "&" : "?"}example=${slug}`;
};

/** Metadata for a content route: title, description, path, language versions, share image. */
export function contentMeta(l: Locale, route: ContentRoute) {
  const t = CONTENT_TEXT[l];
  switch (route.kind) {
    case "templateHub":
      return {
        ...t.templateHub.meta,
        path: hubPath("templates", l)!,
        languages: hubVersions("templates"),
      };
    case "industryHub":
      return {
        ...t.industryHub.meta,
        path: hubPath("industries", l)!,
        languages: hubVersions("industries"),
      };
    case "template": {
      const d = getLocalTemplate(l, route.slug)!;
      return {
        title: d.title,
        description: d.meta_description,
        path: contentPath("templates", l, d.slug),
        languages: contentVersions("templates", d.translation_of),
        image: ogImagePath("templates", d.translation_of),
      };
    }
    case "industry": {
      const d = getLocalIndustry(l, route.slug)!;
      return {
        title: d.title,
        description: d.meta_description,
        path: contentPath("industries", l, d.slug),
        languages: contentVersions("industries", d.translation_of),
        image: ogImagePath("industries", d.translation_of),
      };
    }
  }
}

/** The page for a content route. */
export function ContentRoutePage({ locale: l, route }: { locale: Locale; route: ContentRoute }) {
  const t = CONTENT_TEXT[l];
  const home = { name: t.home, href: ROUTES.home[l] ?? "/" };
  const page = (s: string) => contentPath("templates", l, s);

  if (route.kind === "templateHub") {
    const all = getLocalTemplates(l);
    const h = t.templateHub;
    return (
      <HubPage
        path={hubPath("templates", l)!}
        name={h.crumb}
        eyebrow={h.eyebrow}
        title={h.title}
        subtitle={h.subtitle}
        items={[...all.filter((x) => !x.industry), ...all.filter((x) => x.industry)].map((x) => ({
          href: page(x.slug),
          eyebrow: x.industry ? h.cardTrade : h.cardType,
          title: x.niche,
          text: x.subtitle,
          group: x.industry ? h.groupTrades : h.groupTypes,
        }))}
        cta={h.cta}
        campaign={`templates-hub-${l}`}
        locale={l}
        home={home}
        closing={{ title: t.hubCta, gradient: t.template.ctaGradient, text: t.template.ctaText }}
        explainer={
          <>
            <h2 className="font-heading text-h3 text-ink">{h.explainerTitle}</h2>
            {h.explainer.map((x) => (
              <p key={x}>{fill(x)}</p>
            ))}
          </>
        }
      />
    );
  }

  if (route.kind === "industryHub") {
    const h = t.industryHub;
    return (
      <HubPage
        path={hubPath("industries", l)!}
        name={h.crumb}
        eyebrow={h.eyebrow}
        title={h.title}
        subtitle={h.subtitle}
        items={getLocalIndustries(l).map((x) => ({
          href: contentPath("industries", l, x.slug),
          eyebrow: text(x, "badge_text") ?? h.card,
          title: x.industry,
          text: x.subtitle,
        }))}
        cta={h.cta}
        campaign={`industries-hub-${l}`}
        locale={l}
        home={home}
        closing={{ title: t.hubCta, gradient: t.industry.ctaGradient, text: t.industry.ctaText }}
        explainer={
          <>
            <h2 className="font-heading text-h3 text-ink">{h.explainerTitle}</h2>
            {h.explainer.map((x) => (
              <p key={x}>{fill(x)}</p>
            ))}
          </>
        }
      />
    );
  }

  if (route.kind === "template") {
    const d = getLocalTemplate(l, route.slug)!;
    const industry = d.industry ? getLocalIndustry(l, d.industry) : undefined;
    return (
      <TemplateView
        d={d}
        locale={l}
        t={t}
        updated={pageUpdated(contentPath("templates", l, d.slug))}
        headings={{
          include: d.include_title,
          paperSample: d.paper_label,
          docLabel: d.niche,
          sampleFallback: t.template.toc.sample,
          notesFallback: t.template.toc.notes,
          tip: d.tip_title ?? t.template.toc.tip,
          tipCallout: d.tip_title ?? t.template.toc.tip,
          faq: d.faq_title,
          cta: d.cta_title,
          typeLinks: d.links_title ?? t.templateHub.groupTypes,
          tradeLinks: d.links_title ?? t.templateHub.groupTrades,
          pdfDefault: t.template.pdfDefault,
          browserText: t.template.browserText,
        }}
        links={{
          home: home.href,
          hub: hubPath("templates", l)!,
          use: withExample(l, d.slug),
          industry: industry && {
            href: contentPath("industries", l, industry.slug),
            title: industry.h1,
          },
          types: d.invoice_types.flatMap((s) => {
            const x = getLocalTemplate(l, s);
            return x
              ? [{ href: page(x.slug), title: x.niche, description: firstSentence(x.subtitle) }]
              : [];
          }),
          trades: d.industry
            ? []
            : getLocalTradesForInvoiceType(l, d.slug).map((x) => ({
                href: page(x.slug),
                title: x.niche,
              })),
          related: d.related.map((r) => ({ href: page(r.slug), title: r.name })),
        }}
      />
    );
  }

  const d = getLocalIndustry(l, route.slug)!;
  const templates = getLocalTemplatesForIndustry(l, d.slug);
  return (
    <IndustryView
      d={d}
      locale={l}
      t={t}
      updated={pageUpdated(contentPath("industries", l, d.slug))}
      headings={{
        badge: text(d, "badge_text") ?? t.industryHub.card,
        stats: d.stats_label ?? d.industry,
        mistakes: text(d, "industry_mistakes_title") ?? t.industry.toc.mistakes,
        features: d.features_title,
        tip: text(d, "expert_tip_title") ?? t.industry.toc.tip,
        lineItems: d.line_items_title,
        glossary: text(d, "industry_glossary_title") ?? t.industry.toc.glossary,
        tax: text(d, "tax_or_compliance_title") ?? t.industry.toc.tax,
        faq: d.faq_title,
        cta: d.cta_title,
      }}
      links={{
        home: home.href,
        hub: hubPath("industries", l)!,
        online: templates[0] ? withExample(l, templates[0].slug) : generatorFor(l),
        templates: templates.map((x) => ({ href: page(x.slug), title: x.h1 })),
        related: d.related.map((r) => ({
          href: contentPath("industries", l, r.slug),
          title: r.name,
        })),
      }}
    />
  );
}
