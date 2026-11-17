"use client";

import { useEffect, useState } from "react";
import { cx } from "@/components/ui/cx";

export interface TocSection {
  id: string;
  label: string;
}

/**
 * "On this page" list: a sticky sidebar on large screens that highlights the section in view.
 * Hidden on small screens (the page reads top to bottom there).
 */
export function Toc({ sections }: { sections: TocSection[] }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    if (sections.length === 0 || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sections]);

  if (sections.length === 0) return <div className="hidden lg:block" />;

  return (
    <nav aria-label="On this page" className="hidden lg:block">
      <div className="sticky top-24 pt-14">
        <p className="text-eyebrow text-subtle mb-3 uppercase">On this page</p>
        <ul className="border-line space-y-0.5 border-l">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={active === s.id ? "location" : undefined}
                className={cx(
                  "text-small focus-visible:focus-ring -ml-px block border-l-2 py-1.5 pl-4 transition-colors duration-150",
                  active === s.id
                    ? "border-brand-600 text-ink font-bold"
                    : "text-muted hover:text-ink border-transparent",
                )}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
