import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cx } from "./cx";

/** Layout and type primitives (ROADMAP chunk 17b). Light only (decision D13). */

/** Page-width wrapper with the standard side gutter. */
export function Container({
  className,
  narrow = false,
  children,
}: {
  className?: string;
  /** Reading width (42rem) instead of the page width. */
  narrow?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "px-gutter mx-auto w-full sm:px-6",
        narrow ? "max-w-reading" : "max-w-page",
        className,
      )}
    >
      {children}
    </div>
  );
}

type SectionTone = "white" | "tint" | "brand" | "glow";

const TONES: Record<SectionTone, string> = {
  white: "bg-surface",
  tint: "bg-tint",
  brand: "bg-brand-50",
  glow: "bg-surface bg-brand-glow",
};

/**
 * A page section with the standard vertical rhythm. Tones: white (default), tint (alternate
 * rows), brand (one highlighted band per page), glow (hero and final CTA only).
 */
export function Section({
  tone = "white",
  id,
  className,
  children,
  ...rest
}: {
  tone?: SectionTone;
  id?: string;
  className?: string;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "className" | "children">) {
  return (
    <section id={id} className={cx("py-section scroll-mt-24", TONES[tone], className)} {...rest}>
      {children}
    </section>
  );
}

type HeadingLevel = 1 | 2 | 3 | 4;
type HeadingSize = "display" | "h1" | "h2" | "h3" | "h4";

const HEADING_SIZE: Record<HeadingSize, string> = {
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
};

/**
 * Heading. `level` sets the HTML tag (one h1 per page); `size` sets the look and defaults to the
 * level. Put at most one <Gradient> word inside, and only in display/h1/h2.
 */
export function Heading({
  level = 2,
  size,
  className,
  children,
  id,
}: {
  level?: HeadingLevel;
  size?: HeadingSize;
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  const Tag = `h${level}` as ElementType;
  return (
    <Tag
      id={id}
      className={cx(
        "font-heading text-ink text-balance",
        HEADING_SIZE[size ?? (`h${level}` as HeadingSize)],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/** The one gradient word in a large headline. */
export function Gradient({
  children,
  underline,
}: {
  children: ReactNode;
  /**
   * A hand-drawn underline that draws itself: "load" when the heading is visible on arrival (hero),
   * "reveal" inside a `.reveal` block (draws when scrolled into view). Use on 2–3 headlines at most.
   */
  underline?: "load" | "reveal";
}) {
  if (!underline) return <span className="text-gradient">{children}</span>;
  return (
    <span className="relative inline-block">
      <span className="text-gradient">{children}</span>
      <svg
        aria-hidden
        viewBox="0 0 300 20"
        preserveAspectRatio="none"
        className={cx(
          "draw-underline absolute -bottom-[0.18em] left-0 h-[0.32em] w-full",
          `on-${underline}`,
        )}
      >
        <path
          d="M4 14 C 70 4, 150 3, 296 9 M 30 17 C 110 11, 200 10, 270 14"
          pathLength={1}
          fill="none"
          stroke="url(#brand-underline)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/** Shared SVG gradient for the drawn underlines (rendered once in the root layout). */
export function SvgDefs() {
  return (
    <svg aria-hidden width="0" height="0" className="absolute">
      <defs>
        <linearGradient id="brand-underline" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="var(--color-brand-400)" />
          <stop offset="1" stopColor="var(--color-brand-600)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Small uppercase label above a heading. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cx("text-eyebrow text-brand-700 mb-3 uppercase", className)}>{children}</p>;
}

/** Body text. `lead` for the intro under a heading, `muted` for secondary text. */
export function Text({
  as: Tag = "p",
  size = "body",
  muted = false,
  className,
  children,
}: {
  as?: ElementType;
  size?: "lead" | "body" | "small";
  muted?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const sizes = { lead: "text-lead", body: "text-body", small: "text-small" };
  return (
    <Tag
      className={cx(sizes[size], muted || size === "lead" ? "text-muted" : "text-ink", className)}
    >
      {children}
    </Tag>
  );
}

/** Long-form text (guides, legal, template explainers): styles plain HTML children. */
export function Prose({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cx(
        "max-w-reading text-body text-ink",
        "[&_a]:text-brand-700 [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:no-underline",
        "[&_h2]:font-heading [&_h2]:text-h3 [&_h2]:mt-12 [&_h2]:mb-4",
        "[&_h3]:font-heading [&_h3]:text-h4 [&_h3]:mt-8 [&_h3]:mb-3",
        "[&_p]:my-4 [&_strong]:font-bold",
        "[&_li]:my-1.5 [&_li]:marker:text-stone-400 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6",
        "[&_blockquote]:border-brand-200 [&_blockquote]:text-muted [&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:pl-4",
        "[&_table]:text-small [&_th]:border-line-strong [&_td]:border-line [&_table]:my-6 [&_table]:w-full [&_td]:border-b [&_td]:py-2 [&_th]:border-b [&_th]:py-2 [&_th]:text-left",
        "[&_code]:bg-tint [&_code]:rounded [&_code]:px-1 [&_code]:text-[0.9em]",
        className,
      )}
    >
      {children}
    </div>
  );
}
