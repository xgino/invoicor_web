"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cx } from "./cx";

/**
 * Tabs (ROADMAP chunk 17e), following the WAI-ARIA tabs pattern: arrow keys, Home and End move
 * between tabs; only the active tab is in the tab order. Every panel is rendered (hidden ones
 * with `hidden`), so all content stays in the HTML for search engines.
 */
export function Tabs({
  tabs,
  label,
  className,
}: {
  tabs: Array<{ label: string; content: ReactNode }>;
  /** Accessible name of the tab list, e.g. "Billing period". */
  label: string;
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const base = useId();
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  function onKeyDown(e: KeyboardEvent) {
    const last = tabs.length - 1;
    const next =
      e.key === "ArrowRight"
        ? active === last
          ? 0
          : active + 1
        : e.key === "ArrowLeft"
          ? active === 0
            ? last
            : active - 1
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  }

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label={label}
        onKeyDown={onKeyDown}
        className="bg-tint ring-line inline-flex gap-1 rounded-xl p-1 ring-1"
      >
        {tabs.map((t, i) => (
          <button
            key={t.label}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${base}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${base}-panel-${i}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={cx(
              "text-small focus-visible:focus-ring rounded-lg px-4 py-2 font-bold transition-colors duration-150",
              i === active ? "bg-surface text-ink shadow-soft" : "text-muted hover:text-ink",
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div
          key={t.label}
          role="tabpanel"
          id={`${base}-panel-${i}`}
          aria-labelledby={`${base}-tab-${i}`}
          hidden={i !== active}
          tabIndex={0}
          className="focus-visible:focus-ring mt-6 rounded-xl"
        >
          {t.content}
        </div>
      ))}
    </div>
  );
}
