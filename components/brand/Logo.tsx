import { useId } from "react";

/**
 * The Invoicor logo, as SVG (ROADMAP chunk 16). Traced from the 1024 px iOS app icon, so the
 * website, favicon, share images and app all use the same shape.
 *
 * - <LogoMark />            the app icon: white mark on the orange gradient tile
 * - <LogoMark variant="mono" /> the mark alone in currentColor (small or one-color use)
 * - <Logo />                mark + "Invoicor" wordmark
 */

/** The white "send" mark with the chevron cut-out, in a 1024 × 1024 box. */
export const MARK_PATH =
  "M295 162Q560 268 815 412C880 450 880 575 815 612Q560 756 295 862C215 892 130 805 165 715L240 548Q258 512 240 476L165 305C130 215 215 132 295 162ZM395 347L670 482Q700 512 670 542L395 677C355 692 335 635 372 615L478 577C537 553 537 471 478 447L372 409C335 389 355 332 395 347Z";

/** Tile gradient, matching the app icon (top-left → bottom-right). */
export const TILE_FROM = "#EA6006";
export const TILE_TO = "#DC3002";

interface LogoMarkProps {
  size?: number;
  variant?: "tile" | "mono";
  className?: string;
  /** Accessible name. Leave empty when a visible "Invoicor" sits next to it. */
  title?: string;
}

export function LogoMark({ size = 32, variant = "tile", className, title }: LogoMarkProps) {
  const id = useId();
  const a11y = title ? { role: "img", "aria-label": title } : { "aria-hidden": true };

  if (variant === "mono") {
    return (
      <svg
        viewBox="130 130 760 760"
        width={size}
        height={size}
        className={className}
        fill="currentColor"
        {...a11y}
      >
        <path fillRule="evenodd" d={MARK_PATH} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 1024 1024" width={size} height={size} className={className} {...a11y}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={TILE_FROM} />
          <stop offset="1" stopColor={TILE_TO} />
        </linearGradient>
      </defs>
      <rect width="1024" height="1024" rx="230" fill={`url(#${id})`} />
      <path fill="#fff" fillRule="evenodd" d={MARK_PATH} />
    </svg>
  );
}

interface LogoProps {
  /** Height of the mark in px; the wordmark scales with it. */
  size?: number;
  className?: string;
}

/** Mark + wordmark. The wordmark uses the current text color (text-ink on light). */
export function Logo({ size = 32, className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`} style={{ gap: size * 0.31 }}>
      <LogoMark size={size} />
      <span
        className="font-heading font-extrabold"
        style={{ fontSize: size * 0.56, letterSpacing: "-0.02em", lineHeight: 1 }}
      >
        Invoicor
      </span>
    </span>
  );
}
