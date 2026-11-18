import { LOCALE_INFO, type Locale } from "./config";

/** Round half up to cents (like the app and the API). */
export const cents = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100;

/**
 * Money in the page's language (ROADMAP 36f): "$95.00", "95,00 €", "€ 95,00", "380,00 zł".
 * `currency` defaults to the language's own currency (EUR for most, PLN, SEK, DKK, NOK).
 */
export function formatMoney(
  amount: number,
  locale: Locale,
  {
    currency = LOCALE_INFO[locale].currency,
    whole = false,
  }: { currency?: string; whole?: boolean } = {},
): string {
  return new Intl.NumberFormat(LOCALE_INFO[locale].intl, {
    style: "currency",
    currency,
    minimumFractionDigits: whole ? 0 : 2,
    maximumFractionDigits: whole ? 0 : 2,
  }).format(amount);
}

/**
 * Invoicor's prices are USD (content/pricing.json); in another language they're formatted that
 * language's way ("4,99 $", "4,99 $US") and the page says the App Store shows the local price.
 */
export function formatUsd(amount: number, locale: Locale): string {
  const whole = Number.isInteger(amount);
  return new Intl.NumberFormat(LOCALE_INFO[locale].intl, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: whole ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/** Fee calculator amounts per currency: the same invoice "size" in local money. */
export const CALCULATOR_SCALE: Record<string, number> = { PLN: 4, SEK: 10, NOK: 10, DKK: 7 };
