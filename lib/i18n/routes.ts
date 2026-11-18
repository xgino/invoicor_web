import { DEFAULT_LOCALE, LOCALES, type Locale } from "./config";

/**
 * Every page that exists in more than one language, with its URL per language (ROADMAP 36c).
 * A language only appears here once that page is really translated: no English filler under a
 * German URL. Slugs use each country's own search words (for the generator: what people type,
 * e.g. "rechnung erstellen" in German), not word-for-word translations.
 *
 * Client-safe (no server imports): the language switcher reads this table in the browser.
 */
export type PageKey =
  "home" | "generator" | "android" | "tools" | "vat" | "hours" | "rate" | "help";

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
  },
  help: {
    en: "/help",
    nl: "/nl/help",
    de: "/de/hilfe",
    fr: "/fr/aide",
    es: "/es/ayuda",
    it: "/it/aiuto",
    pt: "/pt/ajuda",
    pl: "/pl/pomoc",
    sv: "/sv/hjalp",
    da: "/da/hjaelp",
    nb: "/nb/hjelp",
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
  tools: {
    en: "/tools",
    nl: "/nl/tools",
    de: "/de/tools",
    fr: "/fr/outils",
    es: "/es/herramientas",
    it: "/it/strumenti",
    pt: "/pt/ferramentas",
    pl: "/pl/narzedzia",
    sv: "/sv/verktyg",
    da: "/da/vaerktoejer",
    nb: "/nb/verktoy",
  },
  vat: {
    en: "/tools/vat-calculator",
    nl: "/nl/tools/btw-berekenen",
    de: "/de/tools/mehrwertsteuer-rechner",
    fr: "/fr/outils/calcul-tva",
    es: "/es/herramientas/calculadora-iva",
    it: "/it/strumenti/calcolo-iva",
    pt: "/pt/ferramentas/calcular-iva",
    pl: "/pl/narzedzia/kalkulator-vat",
    sv: "/sv/verktyg/momsraknare",
    da: "/da/vaerktoejer/momsberegner",
    nb: "/nb/verktoy/mva-kalkulator",
  },
  hours: {
    en: "/tools/hours-calculator",
    nl: "/nl/tools/uren-berekenen",
    de: "/de/tools/stundenrechner",
    fr: "/fr/outils/calcul-heures",
    es: "/es/herramientas/calculadora-horas",
    it: "/it/strumenti/calcolo-ore",
    pt: "/pt/ferramentas/calculadora-horas",
    pl: "/pl/narzedzia/kalkulator-godzin",
    sv: "/sv/verktyg/timraknare",
    da: "/da/vaerktoejer/timeberegner",
    nb: "/nb/verktoy/timekalkulator",
  },
  rate: {
    en: "/tools/hourly-rate-calculator",
    nl: "/nl/tools/uurtarief-berekenen",
    de: "/de/tools/stundensatz-rechner",
    fr: "/fr/outils/calcul-taux-horaire",
    es: "/es/herramientas/calcular-precio-hora",
    it: "/it/strumenti/calcolo-tariffa-oraria",
    pt: "/pt/ferramentas/calcular-preco-hora",
    pl: "/pl/narzedzia/kalkulator-stawki-godzinowej",
    sv: "/sv/verktyg/rakna-ut-timpris",
    da: "/da/vaerktoejer/beregn-timepris",
    nb: "/nb/verktoy/beregn-timepris",
  },
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
