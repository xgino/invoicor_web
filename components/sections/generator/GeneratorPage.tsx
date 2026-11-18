import { Generator } from "@/components/generator/Generator";
import { draftDefaults } from "@/lib/generator/defaults";
import { JsonLd } from "@/components/seo/JsonLd";
import { AppStoreBadge, Breadcrumbs } from "@/components/ui/content";
import { Container } from "@/components/ui/layout";
import { QrDownload } from "@/components/ui/QrDownload";
import { getApiCurrencies, getApiLanguages, getApiTemplates } from "@/lib/api";
import { getTemplates } from "@/lib/content";
import { examplesBySlug } from "@/lib/generator/examples";
import { LOCALE_INFO, type Locale } from "@/lib/i18n/config";
import { GENERATOR } from "@/lib/i18n/pages/generator";
import { ROUTES } from "@/lib/i18n/routes";
import { howToLd, webAppLd } from "@/lib/jsonld";
import { GeneratorGuide } from "./GeneratorGuide";

/** Fallbacks if the API can't be reached at build time (the tool still works with these). */
const FALLBACK_CURRENCIES = [
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "British Pound", symbol: "£" },
];
const FALLBACK_LANGUAGES = [{ code: "en", name: "English" }];

/**
 * The free invoice generator page (ROADMAP Stage G, chunks 32–35; HL1 for the other languages):
 * the same tool everywhere, with the text, local defaults (currency, date format, invoice
 * language) and the guide of the page's language.
 */
export async function GeneratorPage({ locale }: { locale: Locale }) {
  const t = GENERATOR[locale];
  const info = LOCALE_INFO[locale];
  const path = ROUTES.generator[locale]!;
  const [templates, apiCurrencies, apiLanguages] = await Promise.all([
    getApiTemplates(),
    getApiCurrencies(),
    getApiLanguages(),
  ]);
  const currencies = apiCurrencies.length > 0 ? apiCurrencies : FALLBACK_CURRENCIES;
  const languages = apiLanguages.length > 0 ? apiLanguages : FALLBACK_LANGUAGES;
  // Only preset what the tool can actually offer (the API lists the currencies and languages).
  const defaults = draftDefaults(locale, info, t.defaults);
  if (!currencies.some((c) => c.code === defaults.currency)) defaults.currency = "EUR";
  if (!languages.some((l) => l.code === defaults.language)) defaults.language = "en";

  return (
    <>
      <JsonLd
        data={[
          webAppLd({ name: t.page.h1, path, description: t.page.meta.description }),
          howToLd(
            t.page.howTitle,
            t.page.howDescription,
            t.page.steps.map((step) => ({ name: step.name, text: step.text })),
          ),
        ]}
      />
      <section className="bg-surface relative isolate">
        <div aria-hidden className="bg-brand-glow absolute inset-x-0 top-0 -z-10 h-[28rem]" />
        <Container className="pt-nav pb-section">
          <Breadcrumbs
            items={[
              { name: t.page.home, href: ROUTES.home[locale] ?? "/" },
              { name: t.page.crumb },
            ]}
            className="pt-8"
          />
          <div className="mt-8 mb-10 max-w-3xl">
            <p className="text-eyebrow text-brand-700 mb-3 uppercase">{t.page.eyebrow}</p>
            <h1 className="font-heading text-h1 text-ink">{t.page.h1}</h1>
            <p className="text-lead text-muted mt-4">{t.page.lead}</p>
          </div>
          <Generator
            t={t.ui}
            intl={info.intl}
            defaults={locale === "en" ? undefined : defaults}
            examples={examplesBySlug(getTemplates())}
            templates={templates.map(({ slug, name, tier }) => ({ slug, name, tier }))}
            currencies={currencies}
            languages={languages}
            appCta={
              <div className="flex flex-wrap items-center gap-4">
                <AppStoreBadge campaign="gen_success" />
                <QrDownload campaign="qr_gen_success" />
              </div>
            }
          />
        </Container>
      </section>
      <GeneratorGuide t={t.page} />
    </>
  );
}
