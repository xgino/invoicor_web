"use client";

import { Check, Globe } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { cx } from "@/components/ui/cx";
import { LANG_STORAGE_KEY, LOCALES, LOCALE_INFO, type Locale } from "@/lib/i18n/config";
import { ROUTES, pageForPath } from "@/lib/i18n/routes";

/** Where a language choice leads from the current page: the same page if it exists, else home. */
function targetFor(
  pathname: string,
  locale: Locale,
  alternates: Partial<Record<Locale, string>>,
): string | null {
  const { key } = pageForPath(pathname);
  return alternates[locale] || (key && ROUTES[key][locale]) || ROUTES.home[locale] || null;
}

/**
 * The page's own language versions, from its hreflang links in <head>. Template and industry pages
 * (task S1) aren't in the route table, but their metadata lists every version, so the switcher
 * leads to the same page in the chosen language. Paths only, so a local preview stays local.
 */
function readAlternates(): string {
  const map: Record<string, string> = {};
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => {
    const lang = el.getAttribute("hreflang") ?? "";
    const href = el.getAttribute("href");
    if (href && (LOCALES as readonly string[]).includes(lang))
      map[lang] = new URL(href, window.location.href).pathname;
  });
  return JSON.stringify(map);
}
const noSubscribe = () => () => {};

function useAlternates(): Partial<Record<Locale, string>> {
  // Read on every render (a new page re-renders the switcher); "{}" while rendering on the server.
  const json = useSyncExternalStore(noSubscribe, readAlternates, () => "{}");
  return useMemo(() => JSON.parse(json) as Partial<Record<Locale, string>>, [json]);
}

function remember(locale: Locale) {
  try {
    window.localStorage.setItem(LANG_STORAGE_KEY, locale);
  } catch {
    // storage blocked: the switch still works, it just isn't remembered
  }
}

/**
 * Language menu (ROADMAP 36e): a globe button in the navbar and a full list in the footer. Each
 * language is named in itself. Only languages with a page to go to are offered. Choosing one is
 * remembered, so the one-time automatic switch never overrides it.
 */
export function LanguageSwitcher({
  locale,
  label,
  variant = "menu",
}: {
  locale: Locale;
  label: string;
  variant?: "menu" | "list";
}) {
  const pathname = usePathname();
  const alternates = useAlternates();
  const options = LOCALES.flatMap((l) => {
    const href = targetFor(pathname, l, alternates);
    return href ? [{ locale: l, href }] : [];
  });

  if (variant === "list") {
    return (
      <nav aria-label={label}>
        <p className="text-eyebrow text-ink mb-3 flex items-center gap-1.5 uppercase">
          <Globe aria-hidden className="size-3.5" /> {label}
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          {options.map((o) => (
            <li key={o.locale}>
              <a
                href={o.href}
                hrefLang={o.locale}
                lang={o.locale}
                aria-current={o.locale === locale ? "true" : undefined}
                onClick={() => remember(o.locale)}
                data-track="language_switch"
                data-track-to={o.locale}
                className="text-small text-muted hover:text-ink aria-[current=true]:text-ink focus-visible:focus-ring rounded aria-[current=true]:font-bold"
              >
                {LOCALE_INFO[o.locale].name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  return <Menu locale={locale} label={label} options={options} />;
}

function Menu({
  locale,
  label,
  options,
}: {
  locale: Locale;
  label: string;
  options: { locale: Locale; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (
        e instanceof KeyboardEvent ? e.key === "Escape" : !root.current?.contains(e.target as Node)
      )
        setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  if (options.length < 2) return null;
  return (
    <div ref={root} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        aria-label={`${label}: ${LOCALE_INFO[locale].name}`}
        onClick={() => setOpen((o) => !o)}
        className="text-small text-muted hover:text-ink hover:bg-tint focus-visible:focus-ring flex h-9 items-center gap-1.5 rounded-lg px-2.5 font-medium"
      >
        <Globe aria-hidden className="size-4" />
        <span className="uppercase">{locale}</span>
      </button>
      <ul
        id={id}
        hidden={!open}
        className="bg-surface ring-line shadow-float absolute top-full right-0 z-50 mt-2 max-h-[70vh] w-48 overflow-y-auto rounded-xl p-1.5 ring-1"
      >
        {options.map((o) => (
          <li key={o.locale}>
            <a
              href={o.href}
              hrefLang={o.locale}
              lang={o.locale}
              aria-current={o.locale === locale ? "true" : undefined}
              onClick={() => remember(o.locale)}
              data-track="language_switch"
              data-track-to={o.locale}
              className={cx(
                "text-small focus-visible:focus-ring flex items-center justify-between rounded-lg px-3 py-2",
                o.locale === locale
                  ? "text-ink bg-tint font-bold"
                  : "text-muted hover:text-ink hover:bg-tint",
              )}
            >
              {LOCALE_INFO[o.locale].name}
              {o.locale === locale && <Check aria-hidden className="text-brand-600 size-4" />}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
