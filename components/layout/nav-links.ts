import { CHROME } from "@/lib/i18n/chrome";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { ROUTES } from "@/lib/i18n/routes";

export interface NavLink {
  href: string;
  label: string;
}

/**
 * Main navigation (ROADMAP chunks 18a, 35e, T2): four items (the blog link went 2026-11-27, R10). Industries and Compare live in the
 * footer and on the hubs; the generator is the first of the free tools.
 */
export const NAV_LINKS: readonly NavLink[] = [
  { href: "/templates", label: "Templates" },
  { href: "/tools", label: "Free tools" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/help", label: "Help" },
] as const;

/**
 * The menu in another language (ROADMAP 36e): only pages that exist in that language, so a German
 * visitor never lands on an English page from the main menu. The generator falls back to the
 * English one with the invoice language preset (`?lang=`) until it's translated.
 */
export function navLinksFor(
  locale: Locale,
  /** This language's templates hub, once it has template pages (task S1; lib/content-i18n.ts). */
  templatesHub?: string,
): readonly NavLink[] {
  if (locale === DEFAULT_LOCALE) return NAV_LINKS;
  const t = CHROME[locale].nav;
  const home = ROUTES.home[locale];
  return [
    ...(templatesHub ? [{ href: templatesHub, label: t.templates }] : []),
    {
      href: ROUTES.generator[locale] ?? `/free-invoice-generator?lang=${locale}`,
      label: t.generator,
    },
    ...(ROUTES.tools[locale] ? [{ href: ROUTES.tools[locale]!, label: t.tools }] : []),
    { href: home ? `${home}#pricing` : "/#pricing", label: t.pricing },
    ...(ROUTES.help[locale] ? [{ href: ROUTES.help[locale]!, label: t.help }] : []),
  ];
}

/** True when `pathname` is the link's page or one of its children. */
export function isActive(pathname: string, href: string): boolean {
  if (href.includes("#") || href.includes("?") || href.startsWith("http")) return false;
  // The invoice generator is one of the free tools.
  if (href === "/tools" && pathname === "/free-invoice-generator") return true;
  // A language's tools hub is the parent of its tool pages (/de/tools/…) but not its generator.
  return pathname === href || pathname.startsWith(`${href}/`);
}
