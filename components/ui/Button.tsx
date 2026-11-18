import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "./cx";

/**
 * Button (ROADMAP chunk 17a). Primary uses the CTA gradient (white text passes AA at any size);
 * use at most one primary per section. Pass `href` to render a link: internal paths use
 * next/link, `http…` links open in a new tab.
 */
type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const BASE =
  "inline-flex items-center justify-center gap-2 font-bold whitespace-nowrap select-none transition duration-150 ease-brand focus-visible:focus-ring disabled:pointer-events-none disabled:opacity-60 aria-disabled:pointer-events-none aria-disabled:opacity-60";

const VARIANTS: Record<Variant, string> = {
  primary:
    "sheen bg-brand-cta text-white shadow-brand hover:shadow-brand-lg hover:-translate-y-0.5 hover:[background-image:var(--brand-gradient-cta-hover)] active:translate-y-0",
  secondary:
    "bg-surface text-ink border border-line-strong shadow-soft hover:border-stone-400 hover:bg-tint",
  ghost: "text-brand-700 hover:bg-brand-50",
};

const SIZES: Record<Size, string> = {
  sm: "h-9 rounded-lg px-3.5 text-small",
  md: "h-11 rounded-xl px-5 text-body",
  lg: "h-14 rounded-xl px-7 text-[1.0625rem]",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  /** Shows a spinner and blocks clicks. */
  loading?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & { href?: undefined };
type LinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> & {
    href: string;
  };

export function buttonClass({
  variant = "primary",
  size = "md",
  className,
}: Pick<CommonProps, "variant" | "size" | "className"> = {}) {
  return cx(BASE, VARIANTS[variant], SIZES[size], className);
}

function Spinner() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4 animate-spin"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity=".3" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Button(props: ButtonProps | LinkProps) {
  const { variant, size, loading = false, className, children, ...rest } = props;
  const cls = buttonClass({ variant, size, className });
  const content = (
    <>
      {loading && <Spinner />}
      {children}
    </>
  );

  if (rest.href !== undefined) {
    const { href, ...anchor } = rest as LinkProps;
    const state = loading ? { "aria-disabled": true, "aria-busy": true } : {};
    if (/^https?:\/\//.test(href)) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          {...state}
          {...anchor}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...state} {...anchor}>
        {content}
      </Link>
    );
  }

  const { type = "button", disabled, ...button } = rest as ButtonProps;
  return (
    <button
      type={type}
      className={cls}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...button}
    >
      {content}
    </button>
  );
}
