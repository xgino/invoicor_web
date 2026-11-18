import { ArrowRight, Clock, FileText, Percent, TrendingUp } from "lucide-react";
import Link from "next/link";
import { ClosingCta, PageHeader } from "@/components/sections/content/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { cx } from "@/components/ui/cx";
import { Container, Eyebrow, Heading, Section } from "@/components/ui/layout";
import { fill } from "@/lib/i18n/chrome";
import { LOCALE_INFO, type Locale } from "@/lib/i18n/config";
import { TOOLS_TEXT } from "@/lib/i18n/pages/tools";
import { ROUTES } from "@/lib/i18n/routes";
import { webAppLd } from "@/lib/jsonld";
import { FREE_INVOICES } from "@/lib/pricing";
import { type Tool, type ToolKey, toolsFor } from "@/lib/tools/registry";
import { type CalcLocale, HoursCalculator, RateCalculator, VatCalculator } from "./Calculators";

export const TOOL_ICONS = { FileText, Percent, Clock, TrendingUp } satisfies Record<
  Tool["icon"],
  unknown
>;

type CalcKey = Exclude<ToolKey, "generator">;

const campaignFor = (name: string, locale: Locale) =>
  locale === "en" ? name : `${name}_${locale}`;

/** The calculator itself, with the page language's text, number format and starting values. */
function Calculator({ tool, locale }: { tool: CalcKey; locale: Locale }) {
  const t = TOOLS_TEXT[locale];
  const l: CalcLocale = {
    intl: LOCALE_INFO[locale].intl,
    currency: locale === "en" ? (tool === "vat" ? "EUR" : "USD") : LOCALE_INFO[locale].currency,
    currencyLabel: t.common.currency,
    generatorHref: ROUTES.generator[locale] ?? "/free-invoice-generator",
  };
  if (tool === "vat")
    return <VatCalculator t={t.vat.ui} l={l} defaultCountry={t.vat.defaultCountry} />;
  if (tool === "hours") return <HoursCalculator t={t.hours.ui} l={l} />;
  return <RateCalculator t={t.rate.ui} l={l} defaults={t.rate.defaults} />;
}

/**
 * One free tool page (ROADMAP T1, HL2): the tool first, then how it works in plain words, an FAQ
 * (also FAQPage JSON-LD), and the other tools. Same shape for every tool and every language.
 */
export function ToolPage({ tool, locale }: { tool: CalcKey; locale: Locale }) {
  const t = TOOLS_TEXT[locale];
  const page = t[tool];
  const all = toolsFor(locale);
  const me = all.find((x) => x.key === tool)!;
  const others = all.filter((x) => x.key !== tool);
  return (
    <>
      <JsonLd
        data={webAppLd({ name: `Invoicor ${me.name}`, path: me.href, description: me.short })}
      />
      <PageHeader
        crumbs={[
          { name: t.common.home, href: ROUTES.home[locale] ?? "/" },
          { name: t.hub.crumb, href: ROUTES.tools[locale] ?? "/tools" },
          { name: me.name },
        ]}
        eyebrow={t.common.eyebrow}
        title={page.title}
        subtitle={page.subtitle}
      />
      <Container className="-mt-6 pb-16">
        <div className="mx-auto max-w-3xl">
          <Calculator tool={tool} locale={locale} />
        </div>
      </Container>

      <Section tone="tint" aria-labelledby="how-title">
        <Container narrow>
          <Eyebrow>{t.common.howEyebrow}</Eyebrow>
          <Heading id="how-title">{t.common.howTitle}</Heading>
          <div className="mt-8 space-y-8">
            {page.sections.map((s) => (
              <div key={s.title}>
                <h3 className="font-heading text-h4 text-ink">{s.title}</h3>
                <div className="text-muted mt-2 space-y-3 leading-relaxed">
                  {s.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="faq-title">
        <Container narrow>
          <Eyebrow>{t.common.faqEyebrow}</Eyebrow>
          <Heading id="faq-title">{t.common.faqTitle}</Heading>
          <div className="mt-8">
            <Accordion items={page.faqs} structuredData />
          </div>
        </Container>
      </Section>

      <Section tone="tint" aria-labelledby="more-tools">
        <Container>
          <Heading id="more-tools" size="h3">
            {t.common.moreTools}
          </Heading>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {others.map((o) => {
              const Icon = TOOL_ICONS[o.icon];
              return (
                <li key={o.href}>
                  <Link
                    href={o.href}
                    className="group bg-surface ring-line hover:ring-brand-200 focus-visible:focus-ring flex h-full flex-col rounded-2xl p-5 ring-1 transition"
                  >
                    <span className="bg-brand-50 text-brand-700 grid size-10 place-items-center rounded-xl">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <span className="text-ink mt-4 flex items-center gap-1.5 font-bold">
                      {o.name}
                      <ArrowRight
                        aria-hidden
                        className="size-4 transition group-hover:translate-x-0.5"
                      />
                    </span>
                    <span className="text-small text-muted mt-1">{o.short}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <ClosingCta
        locale={locale}
        title={t.common.closing.title}
        gradient={t.common.closing.gradient}
        text={fill(t.common.closing.text, { n: FREE_INVOICES })}
        campaign={campaignFor(`tool-${tool}`, locale)}
      />
    </>
  );
}

/** The free tools hub (ROADMAP T1, HL2). */
export function ToolsHub({ locale }: { locale: Locale }) {
  const t = TOOLS_TEXT[locale];
  return (
    <>
      <PageHeader
        crumbs={[{ name: t.common.home, href: ROUTES.home[locale] ?? "/" }, { name: t.hub.crumb }]}
        eyebrow={t.hub.eyebrow}
        title={t.hub.title}
        subtitle={t.hub.subtitle}
      />
      <Container className="pb-24">
        <ul className="grid gap-5 md:grid-cols-2">
          {toolsFor(locale).map((tool) => {
            const Icon = TOOL_ICONS[tool.icon];
            return (
              <li key={tool.href} className={cx(tool.featured && "md:col-span-2")}>
                <Link
                  href={tool.href}
                  data-track="tool_open"
                  data-track-tool={tool.key}
                  className={cx(
                    "group ring-line hover:ring-brand-200 focus-visible:focus-ring shadow-soft flex h-full items-start gap-5 rounded-3xl p-7 ring-1 transition",
                    tool.featured ? "bg-brand-50" : "bg-surface",
                  )}
                >
                  <span
                    className={cx(
                      "grid size-12 shrink-0 place-items-center rounded-2xl",
                      tool.featured
                        ? "bg-brand-gradient shadow-brand text-white"
                        : "bg-brand-50 text-brand-700",
                    )}
                  >
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <span>
                    <span className="font-heading text-h4 text-ink flex items-center gap-2">
                      {tool.name}
                      <ArrowRight
                        aria-hidden
                        className="text-brand-700 size-4 transition group-hover:translate-x-1"
                      />
                    </span>
                    <span className="text-muted mt-1 block">{tool.short}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
      <ClosingCta
        locale={locale}
        title={t.hub.closing.title}
        gradient={fill(t.hub.closing.gradient, { n: FREE_INVOICES })}
        text={t.hub.closing.text}
        campaign={campaignFor("tools-hub", locale)}
      />
    </>
  );
}
