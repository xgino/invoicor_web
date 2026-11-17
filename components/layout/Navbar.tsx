import Link from "next/link";
import { AppleIcon } from "@/components/brand/AppleIcon";
import { Logo } from "@/components/brand/Logo";
import { buttonClass } from "@/components/ui/Button";
import { appStoreLink } from "@/lib/config";
import { DesktopLinks, MobileMenu, NavShell } from "./NavClient";

/**
 * Site navigation (ROADMAP chunk 18): light, fixed, 64 px high. Pages start below it with the
 * `pt-nav` spacing. Only the scroll state, active link and mobile menu run in the browser.
 */
export function Navbar() {
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
      Get the app
    </a>
  );

  return (
    <NavShell>
      <nav
        aria-label="Main"
        className="max-w-page px-gutter mx-auto flex h-16 items-center justify-between gap-6 sm:px-6"
      >
        <Link
          href="/"
          aria-label="Invoicor home"
          className="text-ink focus-visible:focus-ring flex items-center rounded-lg"
        >
          <Logo size={32} />
        </Link>
        <DesktopLinks />
        <div className="flex items-center gap-2">
          <div className="hidden md:block">{cta("navbar")}</div>
          <MobileMenu cta={cta("navbar_mobile", true)} />
        </div>
      </nav>
    </NavShell>
  );
}
