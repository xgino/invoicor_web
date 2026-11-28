import { HandCoins, MessageSquareText, ServerCog, Sparkles } from "lucide-react";
import Link from "next/link";
import { ClosingCta, PageHeader } from "@/components/sections/content/blocks";
import { CompanyDetails } from "@/components/sections/content/company";
import { JsonLd } from "@/components/seo/JsonLd";
import { buttonClass } from "@/components/ui/Button";
import { Container, Eyebrow, Heading, Section, Text } from "@/components/ui/layout";
import { COMPANY, absoluteUrl } from "@/lib/config";
import type { Locale } from "@/lib/i18n/config";
import { TRUST } from "@/lib/i18n/pages/trust";
import { ROUTES } from "@/lib/i18n/routes";
import { organizationLd } from "@/lib/jsonld";
import { FREE_INVOICES } from "@/lib/pricing";

const ICONS = [Sparkles, HandCoins, MessageSquareText, ServerCog];
const fill = (s: string, country: string) =>
  s.replaceAll("{n}", String(FREE_INVOICES)).replaceAll("{country}", country);

/** About page (P10, E-E-A-T) in every language: who's behind Invoicor, facts only. */
export function AboutPage({ locale }: { locale: Locale }) {
  const all = TRUST[locale];
  const t = all.about;
  const path = ROUTES.about[locale] ?? "/about";
  const f = (s: string) => fill(s, all.country);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: absoluteUrl(path),
          name: t.eyebrow,
          inLanguage: locale,
          mainEntity: organizationLd(),
        }}
      />
      <PageHeader
        locale={locale}
        crumbs={[{ name: all.home, href: ROUTES.home[locale] ?? "/" }, { name: t.crumb }]}
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      <Section aria-labelledby="why-title">
        <Container narrow className="space-y-5 text-[1.0625rem] leading-relaxed">
          <Eyebrow>{t.whyEyebrow}</Eyebrow>
          <Heading id="why-title">{t.whyTitle}</Heading>
          {/* The owner's own story is written in English; other languages keep the general text. */}
          {COMPANY.story && locale === "en" ? (
            <Text>{COMPANY.story}</Text>
          ) : (
            <Text muted>{t.whyText}</Text>
          )}
          <Text muted>{t.whyText2}</Text>
        </Container>
      </Section>

      <Section tone="tint" aria-labelledby="principles-title">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>{t.principlesEyebrow}</Eyebrow>
            <Heading id="principles-title">{t.principlesTitle}</Heading>
          </div>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {t.principles.map((p, i) => {
              const Icon = ICONS[i]!;
              return (
                <li key={p.title} className="bg-surface ring-line rounded-2xl p-7 ring-1">
                  <Icon aria-hidden className="text-brand-600 size-6" strokeWidth={1.75} />
                  <h3 className="font-heading text-h4 text-ink mt-4">{p.title}</h3>
                  <p className="text-muted mt-2 leading-relaxed">{f(p.text)}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      <Section aria-labelledby="what-title">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>{t.whatEyebrow}</Eyebrow>
            <Heading id="what-title">{t.whatTitle}</Heading>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="bg-surface ring-line rounded-2xl p-7 ring-1">
              <h3 className="font-heading text-h4 text-ink">{t.doesTitle}</h3>
              <ul className="text-muted mt-4 list-disc space-y-2 pl-5">
                {t.does.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div className="bg-surface ring-line rounded-2xl p-7 ring-1">
              <h3 className="font-heading text-h4 text-ink">{t.doesntTitle}</h3>
              <ul className="text-muted mt-4 list-disc space-y-2 pl-5">
                {t.doesnt.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-small text-subtle mt-6 text-center">{t.screensNote}</p>
        </Container>
      </Section>

      <Section tone="tint" aria-labelledby="who-title">
        <Container narrow>
          <Eyebrow>{t.whoEyebrow}</Eyebrow>
          <Heading id="who-title">{f(t.whoTitle)}</Heading>
          <Text muted className="mt-4 mb-8">
            {f(t.whoText)}
          </Text>
          <CompanyDetails t={all.company} />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={ROUTES.contact[locale] ?? "/contact"}
              className={buttonClass({ size: "md" })}
            >
              {t.contactButton}
            </Link>
            <Link
              href={ROUTES.help[locale] ?? "/help"}
              className={buttonClass({ size: "md", variant: "secondary" })}
            >
              {t.helpButton}
            </Link>
          </div>
        </Container>
      </Section>

      <ClosingCta
        locale={locale}
        title={t.ctaTitle}
        gradient={t.ctaGradient}
        text={f(t.ctaText)}
        campaign={locale === "en" ? "about-footer" : `about-footer-${locale}`}
      />
    </>
  );
}
