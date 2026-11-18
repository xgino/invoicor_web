import { cx } from "./cx";

/**
 * Hand-drawn doodles that draw themselves (ROADMAP P13): an arrow and a loose circle in the brand
 * gradient. `when="load"` draws on arrival (hero), `when="reveal"` draws when the surrounding
 * `.reveal` block scrolls into view. Decorative only. Use sparingly: 3 places on the site.
 */
interface DoodleProps {
  className?: string;
  when?: "load" | "reveal";
}

const stroke = {
  fill: "none",
  stroke: "url(#brand-underline)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** A curved arrow pointing to the right (flip with `-scale-x-100` to point left). */
export function DrawnArrow({ className, when = "reveal" }: DoodleProps) {
  return (
    <svg aria-hidden viewBox="0 0 120 70" className={cx("drawn", `on-${when}`, className)}>
      <path pathLength={1} d="M6 58 C 28 20, 70 8, 108 22" {...stroke} />
      <path pathLength={1} d="M92 10 L 110 22 L 94 36" {...stroke} />
    </svg>
  );
}

/** A loose, slightly overlapping circle to put around a word or number. */
export function DrawnCircle({ className, when = "reveal" }: DoodleProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 100"
      preserveAspectRatio="none"
      className={cx("drawn pointer-events-none", `on-${when}`, className)}
    >
      <path
        pathLength={1}
        d="M150 14 C 110 2, 30 8, 12 40 C 0 70, 60 94, 120 90 C 180 86, 198 56, 186 32 C 176 14, 140 8, 100 12"
        {...stroke}
        strokeWidth={2.5}
      />
    </svg>
  );
}
