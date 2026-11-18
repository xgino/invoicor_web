import type { ReactNode } from "react";
import { Analytics } from "@/components/analytics/Analytics";
import { ConsentBanner } from "@/components/consent/ConsentBanner";
import { SvgDefs } from "@/components/ui/layout";
import { CHROME } from "@/lib/i18n/chrome";
import type { Locale } from "@/lib/i18n/config";
import { AUTO_LANGUAGE_SCRIPT } from "@/lib/i18n/auto-switch";
import { Footer } from "./Footer";
import { HashOpener } from "./HashOpener";
import { LanguageMemory } from "./LanguageMemory";
import { Navbar } from "./Navbar";
import { RevealObserver } from "./RevealObserver";
import { StickyCta } from "./StickyCta";

/**
 * Adds the `js` class before first paint so below-the-fold reveal animations start hidden.
 * Safety net: if the reveal script never loads, the class is removed after 3s so nothing
 * stays invisible.
 */
export const JS_CLASS_SCRIPT = `(function(d){d.classList.add('js');setTimeout(function(){if(!d.classList.contains('reveal-ready'))d.classList.remove('js')},3000)})(document.documentElement)`;

export const BODY_CLASS =
  "bg-surface text-ink selection:bg-brand-100 selection:text-brand-900 flex min-h-screen flex-col font-sans";

/**
 * Everything inside <body>, shared by the English and the translated root layouts (ROADMAP 36),
 * so both stay identical apart from the language.
 */
export function SiteBody({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = CHROME[locale];
  return (
    <>
      {/* First in <body>: the <head> (with its hreflang links) is fully parsed by now. */}
      <script dangerouslySetInnerHTML={{ __html: AUTO_LANGUAGE_SCRIPT }} />
      <SvgDefs />
      <Navbar locale={locale} />
      <main className="grow">{children}</main>
      <Footer locale={locale} />
      <RevealObserver />
      <HashOpener />
      <LanguageMemory locale={locale} />
      <StickyCta t={t.sticky} />
      <Analytics />
      <ConsentBanner t={t.consent} />
    </>
  );
}
