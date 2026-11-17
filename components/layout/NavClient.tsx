"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cx } from "@/components/ui/cx";
import { NAV_LINKS, isActive } from "./nav-links";

/**
 * The navbar's interactive parts (ROADMAP chunk 18). The bar gets a border and stronger blur once
 * the page scrolls; the active link is underlined.
 */
export function NavShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl backdrop-saturate-150 transition-[background-color,border-color] duration-250",
        scrolled ? "bg-surface/85 border-line" : "bg-surface/70 border-transparent",
      )}
    >
      {children}
    </header>
  );
}

export function DesktopLinks() {
  const pathname = usePathname();
  return (
    <ul className="hidden items-center gap-1 md:flex">
      {NAV_LINKS.map((link) => {
        const active = isActive(pathname, link.href);
        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={cx(
                "group text-small focus-visible:focus-ring relative rounded-lg px-3 py-2 font-medium transition-colors duration-150",
                active ? "text-ink" : "text-muted hover:text-ink",
              )}
            >
              {link.label}
              <span
                aria-hidden
                className={cx(
                  "bg-brand-gradient ease-brand absolute inset-x-3 -bottom-px h-0.5 origin-left rounded-full transition-transform duration-250",
                  active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                )}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/** Slide-down menu for phones: focus stays inside, Esc and link clicks close it. */
export function MobileMenu({ cta }: { cta: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panel = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  // Close when the route changes (adjusting state during render, React's recommended pattern).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const first = panel.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panel.current) return;
      const items = [
        toggle.current,
        ...panel.current.querySelectorAll<HTMLElement>("a, button"),
      ].filter(Boolean) as HTMLElement[];
      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      if (e.shiftKey && document.activeElement === firstItem) {
        e.preventDefault();
        lastItem?.focus();
      } else if (!e.shiftKey && document.activeElement === lastItem) {
        e.preventDefault();
        firstItem?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={toggle}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="text-ink hover:bg-tint focus-visible:focus-ring -mr-2 grid size-10 place-items-center rounded-lg"
      >
        {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
      </button>
      <div
        id="mobile-menu"
        ref={panel}
        hidden={!open}
        className="bg-surface border-line shadow-float absolute inset-x-0 top-full h-[calc(100dvh-4rem)] overflow-y-auto border-t px-4 pt-4 pb-10"
      >
        <ul className="space-y-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                className="text-ink hover:bg-tint focus-visible:focus-ring aria-[current=page]:text-brand-700 block rounded-xl px-3 py-3 text-lg font-bold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="border-line mt-6 border-t pt-6">{cta}</div>
      </div>
    </div>
  );
}
