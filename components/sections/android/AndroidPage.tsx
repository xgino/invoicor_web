import { ArrowRight, Globe, Smartphone } from "lucide-react";
import Link from "next/link";
import { PageHeader } from "@/components/sections/content/blocks";
import { buttonClass } from "@/components/ui/Button";
import { AppStoreBadge } from "@/components/ui/content";
import { Container, Heading, Section, Text } from "@/components/ui/layout";
import { CHROME } from "@/lib/i18n/chrome";
import { LOCALE_INFO, type Locale } from "@/lib/i18n/config";
import { ANDROID } from "@/lib/i18n/pages/android";
import { ROUTES } from "@/lib/i18n/routes";
import { VisitCounter } from "./VisitCounter";

/**
 * The Android page (ROADMAP 35d), in every language (36). It says honestly that there's no
 * Android app yet, offers what works today (the free web generator), and counts every visit.
 */
export function AndroidPage({ locale }: { locale: Locale }) {
  const t = ANDROID[locale];
  const generator = ROUTES.generator[locale] ?? `/free-invoice-generator?lang=${locale}`;
  return (
    <>
      <PageHeader
        crumbs={[{ name: t.crumbHome, href: ROUTES.home[locale] ?? "/" }, { name: "Android" }]}
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        actions={
          <Link
            href={generator}
            data-track="cta_click"
            data-track-section="android_generator"
            className={buttonClass({ size: "lg" })}
          >
            {t.cta} <ArrowRight aria-hidden className="size-4" />
          </Link>
        }
        aside={
          <div className="bg-surface ring-line shadow-card rounded-3xl p-8 ring-1 sm:p-10">
            <VisitCounter
              intl={LOCALE_INFO[locale].intl}
              counting={t.counting}
              label={t.counterLabel}
            />
            <p className="text-small text-subtle border-line mt-6 border-t pt-5 text-center">
              {t.counterNote}
            </p>
          </div>
        }
      />

      <Section aria-labelledby="today-title">
        <Container>
          <Heading id="today-title" size="h2">
            {t.todayTitle}
          </Heading>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="bg-surface ring-line shadow-soft rounded-2xl p-7 ring-1">
              <span className="bg-brand-50 text-brand-700 ring-brand-200 grid size-11 place-items-center rounded-xl ring-1">
                <Globe aria-hidden className="size-5" />
              </span>
              <h3 className="font-heading text-h4 text-ink mt-5 font-bold">{t.card1Title}</h3>
              <Text className="text-muted mt-2">{t.card1Text}</Text>
              <Link
                href={generator}
                className="text-brand-700 focus-visible:focus-ring mt-5 inline-flex items-center gap-1.5 rounded-lg font-bold"
              >
                {t.card1Link} <ArrowRight aria-hidden className="size-4" />
              </Link>
            </div>
            <div className="bg-surface ring-line shadow-soft rounded-2xl p-7 ring-1">
              <span className="bg-brand-50 text-brand-700 ring-brand-200 grid size-11 place-items-center rounded-xl ring-1">
                <Smartphone aria-hidden className="size-5" />
              </span>
              <h3 className="font-heading text-h4 text-ink mt-5 font-bold">{t.card2Title}</h3>
              <Text className="text-muted mt-2">{t.card2Text}</Text>
              <AppStoreBadge
                campaign={locale === "en" ? "android_page" : `android_page_${locale}`}
                top={CHROME[locale].badges.appStoreTop}
                className="mt-5"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
