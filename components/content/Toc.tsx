"use client";

import { useEffect, useState } from "react";

export interface TocSection {
  id: string;
  label: string;
}

/** Sticky "On this page" navigation (desktop only) that highlights the section in view. */
export function Toc({ sections }: { sections: TocSection[] }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    if (sections.length === 0 || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const first = visible[0];
        if (first) setActive(first.target.id);
      },
      { rootMargin: "-10% 0px -50% 0px", threshold: 0 },
    );
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sections]);

  if (sections.length === 0) return null;

  return (
    <aside
      className="fixed top-1/2 left-6 z-30 hidden w-56 -translate-y-1/2 xl:block"
      aria-label="Page sections"
    >
      <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-md">
        <div className="mb-3 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
          On this page
        </div>
        <nav className="flex flex-col gap-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={active === s.id ? "location" : undefined}
              className={`rounded-lg px-2 py-1.5 text-sm leading-snug font-medium transition-colors ${
                active === s.id
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
