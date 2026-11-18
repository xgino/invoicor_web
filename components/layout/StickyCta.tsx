"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { AppleIcon } from "@/components/brand/AppleIcon";
import { LogoMark } from "@/components/brand/Logo";
import { buttonClass } from "@/components/ui/Button";
import { cx } from "@/components/ui/cx";
import { appStoreLink } from "@/lib/config";
import { getServerConsent, readConsent, subscribeConsent } from "@/lib/consent";
import { CHROME, fill, type ChromeDict } from "@/lib/i18n/chrome";
import { FREE_INVOICES } from "@/lib/pricing";

/**
 * Sticky "Get the app" bar on phones (ROADMAP P16). Appears after the first screen, hides while
 * any element marked `data-hide-sticky` (closing CTAs, footer) is on screen and while the cookie
 * banner is open, so it never doubles a button or covers the banner. Hidden from md up.
 */
export function StickyCta({ t = CHROME.en.sticky }: { t?: ChromeDict["sticky"] }) {
  const pathname = usePathname();
  const consent = useSyncExternalStore(subscribeConsent, readConsent, getServerConsent);
  const [scrolled, setScrolled] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const visible = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      }
      setBlocked(visible.size > 0);
    });
    document.querySelectorAll("[data-hide-sticky]").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [pathname]);

  // Wait for the visitor's cookie choice (the banner sits in the same place).
  const show = scrolled && !blocked && consent != null;

  return (
    <div
      aria-hidden={!show}
      className={cx(
        "bg-surface/95 border-line fixed inset-x-0 bottom-0 z-40 border-t px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl transition-transform duration-250 md:hidden",
        show ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
    >
      <div className="flex items-center gap-3">
        <LogoMark size={36} />
        <div className="min-w-0 flex-1 leading-tight">
          <p className="text-ink text-small truncate font-bold">{t.title}</p>
          <p className="text-subtle truncate text-[0.75rem]">{fill(t.sub, { n: FREE_INVOICES })}</p>
        </div>
        <a
          href={appStoreLink("sticky_mobile")}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={show ? 0 : -1}
          data-track="cta_click"
          data-track-section="sticky_mobile"
          className={buttonClass({ size: "sm" })}
        >
          <AppleIcon size={13} />
          {t.cta}
        </a>
      </div>
    </div>
  );
}
