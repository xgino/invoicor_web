import Link from "next/link";
import { AppleIcon } from "@/components/brand/AppleIcon";
import { Logo } from "@/components/brand/Logo";
import { buttonClass } from "@/components/ui/Button";
import { appStoreLink } from "@/lib/config";
import { CHROME } from "@/lib/i18n/chrome";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { ROUTES } from "@/lib/i18n/routes";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { DesktopLinks, MobileMenu, NavShell } from "./NavClient";
import { hubPath } from "@/lib/content-i18n";
import { navLinksFor } from "./nav-links";

/**
 * Site navigation (ROADMAP chunk 18): light, fixed, 64 px high. Pages start below it with the
 * `pt-nav` spacing. Only the scroll state, active link and mobile menu run in the browser.
 */
export function Navbar({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const t = CHROME[locale].nav;
  const links = navLinksFor(locale, hubPath("templates", locale));
  const cta = (campaign: string, full = false) => (
    <a
      href={appStoreLink(campaign)}
      target="_blank"
      rel="noopener noreferrer"
      data-track="cta_click"
      data-track-section={campaign}
      className={buttonClass({ size: "sm", className: full ? "w-full" : undefined })}
    >
      <AppleIcon size={14} />
      {t.getApp}
    </a>
  );

  return (
    <NavShell>
      <nav
        aria-label={t.mainAria}
        className="max-w-page px-gutter mx-auto flex h-16 items-center justify-between gap-6 sm:px-6"
      >
        <Link
          href={ROUTES.home[locale] ?? "/"}
          aria-label={t.homeAria}
          className="text-ink focus-visible:focus-ring flex items-center rounded-lg"
        >
          <Logo size={32} />
        </Link>
        <DesktopLinks links={links} />
        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} label={CHROME[locale].switcher.label} />
          <div className="hidden md:block">{cta("navbar")}</div>
          <MobileMenu
            links={links}
            cta={cta("navbar_mobile", true)}
            openLabel={t.openMenu}
            closeLabel={t.closeMenu}
          />
        </div>
      </nav>
    </NavShell>
  );
}
