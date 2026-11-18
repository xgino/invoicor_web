import { DEFAULT_LOCALE, LOCALES, type Locale } from "./config";

/**
 * Every page that exists in more than one language, with its URL per language (ROADMAP 36c).
 * A language only appears here once that page is really translated: no English filler under a
 * German URL. Slugs use each country's own search words (for the generator: what people type,
 * e.g. "rechnung erstellen" in German), not word-for-word translations.
 *
 * Client-safe (no server imports): the language switcher reads this table in the browser.
 */
export type PageKey = "home" | "generator" | "android";

export const ROUTES: Record<PageKey, Partial<Record<Locale, string>>> = {
  home: {
    en: "/",
    nl: "/nl",
    de: "/de",
    fr: "/fr",
    es: "/es",
    it: "/it",
    pt: "/pt",
    pl: "/pl",
    sv: "/sv",
    da: "/da",
    nb: "/nb",
  },
  generator: {
    en: "/free-invoice-generator",
  },
  android: {
    en: "/android",
    nl: "/nl/android",
    de: "/de/android",
    fr: "/fr/android",
    es: "/es/android",
    it: "/it/android",
    pt: "/pt/android",
    pl: "/pl/android",
    sv: "/sv/android",
    da: "/da/android",
    nb: "/nb/android",
  },
};

/** Planned generator URLs (live once the generator is translated, ROADMAP 36/38). */
export const GENERATOR_SLUGS: Record<Exclude<Locale, "en">, string> = {
  nl: "/nl/gratis-factuur-maken",
  de: "/de/rechnung-erstellen",
  fr: "/fr/creer-une-facture",
  es: "/es/crear-factura",
  it: "/it/crea-fattura",
  pt: "/pt/criar-fatura",
  pl: "/pl/wystaw-fakture",
  sv: "/sv/skapa-faktura",
  da: "/da/lav-faktura",
  nb: "/nb/lag-faktura",
};

export function pathFor(key: PageKey, locale: Locale): string | undefined {
  return ROUTES[key][locale];
}

/** The page's URL in every language it exists in (for hreflang, the switcher, the sitemap). */
export function alternatesFor(key: PageKey): Partial<Record<Locale, string>> {
  return ROUTES[key];
}

/** Which page and language a path belongs to; English pages outside the table → `null` key. */
export function pageForPath(pathname: string): { key: PageKey | null; locale: Locale } {
  const clean = pathname.replace(/\/+$/, "") || "/";
  for (const key of Object.keys(ROUTES) as PageKey[]) {
    for (const [locale, path] of Object.entries(ROUTES[key]) as [Locale, string][]) {
      if (path === clean) return { key, locale };
    }
  }
  const first = clean.split("/")[1];
  const locale = LOCALES.find((l) => l !== DEFAULT_LOCALE && l === first) ?? DEFAULT_LOCALE;
  return { key: null, locale };
}

/** The URL path segments of every translated page in one language (for generateStaticParams). */
export function localizedPaths(locale: Locale): { key: PageKey; segments: string[] }[] {
  return (Object.keys(ROUTES) as PageKey[]).flatMap((key) => {
    const path = ROUTES[key][locale];
    if (!path || locale === DEFAULT_LOCALE) return [];
    return [{ key, segments: path.split("/").filter(Boolean).slice(1) }];
  });
}
