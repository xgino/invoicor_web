import { CHROME } from "@/lib/i18n/chrome";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { ROUTES } from "@/lib/i18n/routes";

export interface NavLink {
  href: string;
  label: string;
}

/** Main navigation (ROADMAP chunks 18a, 35e). */
export const NAV_LINKS: readonly NavLink[] = [
  { href: "/free-invoice-generator", label: "Free generator" },
  { href: "/templates", label: "Templates" },
  { href: "/industries", label: "Industries" },
  { href: "/compare", label: "Compare" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/help", label: "Help" },
] as const;

/**
 * The menu in another language (ROADMAP 36e): only pages that exist in that language, so a German
 * visitor never lands on an English page from the main menu. The generator falls back to the
 * English one with the invoice language preset (`?lang=`) until it's translated.
 */
export function navLinksFor(locale: Locale): readonly NavLink[] {
  if (locale === DEFAULT_LOCALE) return NAV_LINKS;
  const t = CHROME[locale].nav;
  const home = ROUTES.home[locale];
  return [
    {
      href: ROUTES.generator[locale] ?? `/free-invoice-generator?lang=${locale}`,
      label: t.generator,
    },
    { href: home ? `${home}#pricing` : "/#pricing", label: t.pricing },
  ];
}

/** True when `pathname` is the link's page or one of its children. */
export function isActive(pathname: string, href: string): boolean {
  if (href.includes("#") || href.includes("?")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}
