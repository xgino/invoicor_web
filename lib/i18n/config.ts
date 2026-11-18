/**
 * The website's languages (ROADMAP Stage H): the same 11 languages the app makes invoices in.
 * English lives at the root (`/`, `/templates/…`), unchanged; every other language has its own
 * URLs under a prefix (`/de/…`) with translated slugs, so each version can rank on its own and
 * `hreflang` tells search engines which pages are translations of each other.
 */
export const LOCALES = ["en", "nl", "de", "fr", "es", "it", "pt", "pl", "sv", "da", "nb"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";
/** Every language except English (they get a URL prefix). */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE) as Exclude<
  Locale,
  "en"
>[];

export interface LocaleInfo {
  /** The language's name in itself, for the switcher ("Deutsch"). */
  name: string;
  /** Its name in English, for screen readers and analytics. */
  english: string;
  /** Open Graph locale. */
  og: string;
  /** Default currency and date format for the free generator. */
  currency: string;
  dateFormat: string;
  /** BCP 47 tag for number and date formatting. */
  intl: string;
}

export const LOCALE_INFO: Record<Locale, LocaleInfo> = {
  en: {
    name: "English",
    english: "English",
    og: "en_US",
    currency: "USD",
    dateFormat: "MM/DD/YYYY",
    intl: "en-US",
  },
  nl: {
    name: "Nederlands",
    english: "Dutch",
    og: "nl_NL",
    currency: "EUR",
    dateFormat: "DD/MM/YYYY",
    intl: "nl-NL",
  },
  de: {
    name: "Deutsch",
    english: "German",
    og: "de_DE",
    currency: "EUR",
    dateFormat: "DD/MM/YYYY",
    intl: "de-DE",
  },
  fr: {
    name: "Français",
    english: "French",
    og: "fr_FR",
    currency: "EUR",
    dateFormat: "DD/MM/YYYY",
    intl: "fr-FR",
  },
  es: {
    name: "Español",
    english: "Spanish",
    og: "es_ES",
    currency: "EUR",
    dateFormat: "DD/MM/YYYY",
    intl: "es-ES",
  },
  it: {
    name: "Italiano",
    english: "Italian",
    og: "it_IT",
    currency: "EUR",
    dateFormat: "DD/MM/YYYY",
    intl: "it-IT",
  },
  pt: {
    name: "Português",
    english: "Portuguese",
    og: "pt_PT",
    currency: "EUR",
    dateFormat: "DD/MM/YYYY",
    intl: "pt-PT",
  },
  pl: {
    name: "Polski",
    english: "Polish",
    og: "pl_PL",
    currency: "PLN",
    dateFormat: "DD/MM/YYYY",
    intl: "pl-PL",
  },
  sv: {
    name: "Svenska",
    english: "Swedish",
    og: "sv_SE",
    currency: "SEK",
    dateFormat: "YYYY-MM-DD",
    intl: "sv-SE",
  },
  da: {
    name: "Dansk",
    english: "Danish",
    og: "da_DK",
    currency: "DKK",
    dateFormat: "DD/MM/YYYY",
    intl: "da-DK",
  },
  nb: {
    name: "Norsk",
    english: "Norwegian",
    og: "nb_NO",
    currency: "NOK",
    dateFormat: "DD/MM/YYYY",
    intl: "nb-NO",
  },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/** localStorage key for the visitor's language (set by the switcher or the one-time auto-switch). */
export const LANG_STORAGE_KEY = "invoicor-lang";
