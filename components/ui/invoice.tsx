import type { CSSProperties, ReactNode } from "react";
import { cx } from "./cx";

/**
 * Invoice-style components (ROADMAP chunk 17.2): the visual language only an invoicing brand
 * has. Paper, line items, totals and stamps. Shown on /brand.
 */

/**
 * A sheet of invoice paper: white, a fine paper shadow, an optional perforated bottom edge.
 * The base for hero mockups, pricing cards and examples.
 */
export function InvoicePaper({
  edge = "plain",
  highlight = false,
  className,
  children,
}: {
  /** "perforated" adds a tear-off edge at the bottom, like a receipt. */
  edge?: "plain" | "perforated";
  /** A brand-gradient top rule (the popular plan, the hero invoice). */
  highlight?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "bg-surface ring-line shadow-float relative rounded-2xl ring-1",
        edge === "perforated" && "rounded-b-none",
        className,
      )}
    >
      {highlight && (
        <div aria-hidden className="bg-brand-gradient absolute inset-x-0 top-0 h-1 rounded-t-2xl" />
      )}
      {children}
      {edge === "perforated" && (
        <div aria-hidden className="perforated-edge absolute inset-x-0 -bottom-2 h-2" />
      )}
    </div>
  );
}

/** Small uppercase label on invoice paper ("INVOICE", "BILL TO"). */
export function PaperLabel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cx(
        "text-subtle text-[0.6875rem] font-bold tracking-[0.12em] uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}

/** A money amount: tabular figures so columns line up; `strong` for totals. */
export function Money({
  children,
  strong = false,
  className,
}: {
  children: ReactNode;
  strong?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "tabular-nums",
        strong ? "font-heading text-ink font-extrabold tracking-tight" : "text-ink font-medium",
        className,
      )}
    >
      {children}
    </span>
  );
}

export interface LineItem {
  description: ReactNode;
  /** Optional second line under the description. */
  detail?: ReactNode;
  qty?: ReactNode;
  amount: ReactNode;
  /** A discount line: shown in brand color with a minus amount. */
  discount?: boolean;
}

/**
 * An invoice table: description, quantity, amount, then subtotal / tax lines and a Total.
 * `animate` reveals the lines one by one when scrolled into view.
 */
export function LineItems({
  items,
  totals = [],
  total,
  showQty = false,
  animate = false,
  className,
  headers = { description: "Description", amount: "Amount" },
}: {
  items: LineItem[];
  /** Column headings, in the page's language. */
  headers?: { description: string; amount: string };
  /** Lines between the items and the total, e.g. subtotal and tax. */
  totals?: Array<{ label: ReactNode; amount: ReactNode }>;
  total?: { label: ReactNode; amount: ReactNode };
  showQty?: boolean;
  animate?: boolean;
  className?: string;
}) {
  const line = (i: number) =>
    animate
      ? { className: "reveal line-in", style: { "--d": `${0.08 * i}s` } as CSSProperties }
      : {};

  return (
    <div className={cx("text-small", className)}>
      <div className="text-subtle border-line-strong flex border-b pb-2 text-[0.6875rem] font-bold tracking-[0.12em] uppercase">
        <span className="flex-1">{headers.description}</span>
        {showQty && <span className="w-12 text-right">Qty</span>}
        <span className="w-24 text-right">{headers.amount}</span>
      </div>
      <ul>
        {items.map((item, i) => (
          <li
            key={i}
            {...line(i)}
            className={cx("border-line flex items-start gap-2 border-b py-3", line(i).className)}
          >
            <span className="flex-1">
              <span
                className={cx("block font-medium", item.discount ? "text-brand-700" : "text-ink")}
              >
                {item.description}
              </span>
              {item.detail && <span className="text-subtle block">{item.detail}</span>}
            </span>
            {showQty && <span className="text-muted w-12 text-right tabular-nums">{item.qty}</span>}
            <span className="w-24 text-right">
              <Money className={item.discount ? "text-brand-700!" : undefined}>{item.amount}</Money>
            </span>
          </li>
        ))}
      </ul>
      {totals.length > 0 && (
        <dl className="mt-3 space-y-1.5">
          {totals.map((t, i) => (
            <div key={i} className="text-muted flex justify-between">
              <dt>{t.label}</dt>
              <dd>
                <Money>{t.amount}</Money>
              </dd>
            </div>
          ))}
        </dl>
      )}
      {total && (
        <div className="border-ink mt-3 flex items-baseline justify-between border-t-2 pt-3">
          <span className="text-ink font-bold">{total.label}</span>
          <Money strong className="text-h3">
            {total.amount}
          </Money>
        </div>
      )}
    </div>
  );
}

/**
 * A rubber stamp ("PAID", "SAVE 16%", "0% FEES"). Lands once with a small scale-and-rotate when
 * scrolled into view; static under reduced motion. Decorative: put the same fact in text nearby.
 */
export function Stamp({
  children,
  tone = "brand",
  rotate = -8,
  delay = 0.2,
  trigger = "scroll",
  className,
}: {
  children: ReactNode;
  tone?: "brand" | "success";
  rotate?: number;
  delay?: number;
  /** "scroll": lands when scrolled into view. "mount": lands as soon as it appears (use inside
   * interactive parts that add it later, like the billing switch). */
  trigger?: "scroll" | "mount";
  className?: string;
}) {
  const colors =
    tone === "success" ? "text-green-700 border-green-700" : "text-brand-700 border-brand-700";
  return (
    <span
      className={cx(
        trigger === "scroll" ? "reveal stamp" : "stamp stamp-now",
        "font-heading inline-block rounded-lg border-[3px] px-3 py-1 text-[0.9375rem] font-extrabold tracking-[0.08em] uppercase opacity-90 mix-blend-multiply select-none",
        colors,
        className,
      )}
      style={{ "--stamp-rotate": `${rotate}deg`, "--d": `${delay}s` } as CSSProperties}
    >
      {children}
    </span>
  );
}

/** A tiny steaming coffee cup (pricing anchor). Decorative. */
export function CoffeeCup({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cx("size-6", className)}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="steam"
        d="M12 9c-1.5-1.5 1.5-3 0-4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        className="steam"
        style={{ "--d": "0.6s" } as CSSProperties}
        d="M17 9c-1.5-1.5 1.5-3 0-4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M6 12h17v7a6 6 0 0 1-6 6h-5a6 6 0 0 1-6-6v-7Z"
        fill="currentColor"
        fillOpacity=".12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M23 14h1.5a3 3 0 0 1 0 6H23" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
