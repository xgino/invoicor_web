"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { LANG_STORAGE_KEY, LOCALES, type Locale } from "@/lib/i18n/config";
import { ROUTES, pageForPath } from "@/lib/i18n/routes";

/**
 * Keeps the visitor in their remembered language while they click around (ROADMAP 37). Full page
 * loads are handled by the inline script in lib/i18n/auto-switch.ts; Next.js links change pages
 * without a reload, so this does the same check after every client-side navigation: if the page
 * also exists in the remembered language, go there.
 */
export function LanguageMemory({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const firstRender = useRef(true);

  useEffect(() => {
    // The first render is a full page load: the inline script already decided.
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (navigator.webdriver) return;
    let wanted: string | null = null;
    try {
      wanted = window.localStorage.getItem(LANG_STORAGE_KEY);
    } catch {
      return;
    }
    if (!wanted || wanted === locale || !LOCALES.includes(wanted as Locale)) return;
    const { key } = pageForPath(pathname);
    const target = key && ROUTES[key][wanted as Locale];
    if (target && target !== pathname) {
      window.location.replace(target + window.location.search + window.location.hash);
    }
  }, [pathname, locale]);

  return null;
}
