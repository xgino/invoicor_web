"use client";

import { useId } from "react";
import { cx } from "./cx";

export type Period = "monthly" | "yearly";

/**
 * Monthly / yearly toggle styled as a physical switch (ROADMAP chunk 17.2e). A real
 * `role="switch"` button: Space or Enter flips it; the two labels also work as buttons.
 */
export function BillingSwitch({
  value,
  onChange,
  savingLabel,
  className,
}: {
  value: Period;
  onChange: (value: Period) => void;
  /** Shown next to "Yearly", e.g. "2 months free". */
  savingLabel?: string;
  className?: string;
}) {
  const id = useId();
  const yearly = value === "yearly";

  const label = (period: Period, text: string) => (
    <button
      type="button"
      onClick={() => onChange(period)}
      aria-hidden="true"
      tabIndex={-1}
      className={cx(
        "text-small font-bold transition-colors duration-150",
        value === period ? "text-ink" : "text-subtle hover:text-muted",
      )}
    >
      {text}
    </button>
  );

  return (
    <div className={cx("inline-flex items-center gap-3", className)}>
      {label("monthly", "Monthly")}
      <button
        type="button"
        role="switch"
        id={id}
        aria-checked={yearly}
        aria-label="Bill yearly"
        onClick={() => onChange(yearly ? "monthly" : "yearly")}
        className={cx(
          "focus-visible:focus-ring relative h-8 w-14 shrink-0 rounded-full p-1 shadow-inner transition-colors duration-250",
          yearly ? "bg-brand-cta" : "bg-stone-300",
        )}
      >
        <span
          aria-hidden
          className={cx(
            "bg-surface shadow-card ease-brand block size-6 rounded-full transition-transform duration-250",
            yearly && "translate-x-6",
          )}
        />
      </button>
      {label("yearly", "Yearly")}
      {savingLabel && (
        <span
          className={cx(
            "text-small rounded-full px-2.5 py-0.5 font-bold transition-colors duration-250",
            yearly ? "bg-brand-50 text-brand-800 ring-brand-200 ring-1" : "bg-tint text-muted",
          )}
        >
          {savingLabel}
        </span>
      )}
    </div>
  );
}
