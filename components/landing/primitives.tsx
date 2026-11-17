import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { appStoreLink } from "@/lib/config";
import { AppleIcon } from "./AppleIcon";

/** Style helper for a reveal delay, e.g. <div className="reveal" style={{ ...delay(0.1) }}> */
export function delay(seconds: number): CSSProperties {
  return { "--d": `${seconds}s` } as CSSProperties;
}

/** Shared section heading font. */
export const display: CSSProperties = { fontFamily: "var(--font-display)" };

/** Eyebrow label above section headings. */
export function Eyebrow({ color, children }: { color: string; children: ReactNode }) {
  return (
    <p
      style={{
        fontSize: 13,
        fontWeight: 700,
        color,
        letterSpacing: ".08em",
        textTransform: "uppercase",
        marginBottom: 12,
      }}
    >
      {children}
    </p>
  );
}

type ShapeType = "circle" | "ring" | "square" | "cross" | "dots" | "tri";

/** Decorative floating shape (aria-hidden). */
export function Shape({
  type,
  size,
  color,
  top,
  left,
  delay: d = 0,
  dur = 8,
  drift = "A",
}: {
  type: ShapeType;
  size: number;
  color: string;
  top: string;
  left: string;
  delay?: number;
  dur?: number;
  drift?: "A" | "B" | "C";
}) {
  const s: CSSProperties = {
    position: "absolute",
    top,
    left,
    width: size,
    height: size,
    opacity: 0.5,
    pointerEvents: "none",
    zIndex: 0,
    animation: `sf${drift} ${dur}s ${d}s ease-in-out infinite`,
  };
  switch (type) {
    case "circle":
      return <div aria-hidden style={{ ...s, borderRadius: "50%", background: color }} />;
    case "ring":
      return (
        <div aria-hidden style={{ ...s, borderRadius: "50%", border: `2px solid ${color}` }} />
      );
    case "square":
      return (
        <div
          aria-hidden
          style={{ ...s, borderRadius: size * 0.18, background: color, transform: "rotate(15deg)" }}
        />
      );
    case "cross":
      return (
        <svg
          aria-hidden
          style={s}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      );
    case "dots":
      return (
        <svg aria-hidden style={{ ...s, opacity: 0.25 }} viewBox="0 0 40 40" fill={color}>
          {[0, 10, 20, 30].flatMap((x) =>
            [0, 10, 20, 30].map((y) => <circle key={`${x}-${y}`} cx={x + 5} cy={y + 5} r="1.5" />),
          )}
        </svg>
      );
    case "tri":
      return (
        <svg aria-hidden style={s} viewBox="0 0 30 30" fill="none" stroke={color} strokeWidth="2">
          <polygon points="15,4 27,26 3,26" />
        </svg>
      );
  }
}

/**
 * Primary call to action. Defaults to the App Store; pass an internal `href` (e.g. "/templates")
 * to link inside the site instead.
 */
export function Cta({ text, section, href }: { text: string; section: string; href?: string }) {
  const style: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    background: "#fff",
    color: "#0a0f1e",
    padding: "17px 36px",
    borderRadius: 16,
    fontSize: 16,
    fontWeight: 700,
    textDecoration: "none",
    letterSpacing: "-0.01em",
    boxShadow: "0 8px 32px rgba(255,255,255,.15)",
  };
  const tracking = {
    "data-track": "cta_click",
    "data-track-text": text,
    "data-track-section": section,
  };

  if (href) {
    return (
      <Link href={href} className="cta-btn" style={style} {...tracking}>
        {text}
      </Link>
    );
  }
  return (
    <a
      href={appStoreLink(`home-${section}`)}
      target="_blank"
      rel="noopener noreferrer"
      className="cta-btn"
      style={style}
      {...tracking}
    >
      <AppleIcon size={18} />
      {text}
    </a>
  );
}

/** iPhone 15 Pro style frame around a screen mockup. */
export function IPhone({
  children,
  style: sx = {},
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <div style={{ position: "relative", width: 340, maxWidth: "100%", ...sx }}>
      <div
        style={{
          borderRadius: 52,
          padding: 4,
          background: "linear-gradient(145deg, #555 0%, #222 30%, #444 60%, #1a1a1a 100%)",
          boxShadow:
            "0 60px 120px rgba(0,0,0,.35), 0 0 0 1px rgba(255,255,255,.05) inset, inset 0 1px 1px rgba(255,255,255,.1)",
        }}
      >
        <div
          style={{
            borderRadius: 48,
            overflow: "hidden",
            background: "#000",
            position: "relative",
            aspectRatio: "393/852",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 10,
              left: "50%",
              transform: "translateX(-50%)",
              width: 120,
              height: 34,
              background: "#000",
              borderRadius: 20,
              zIndex: 10,
            }}
          />
          <div style={{ position: "absolute", inset: 0, borderRadius: 48, overflow: "hidden" }}>
            {children}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 8,
              left: "50%",
              transform: "translateX(-50%)",
              width: 120,
              height: 4,
              background: "rgba(255,255,255,.2)",
              borderRadius: 3,
              zIndex: 10,
            }}
          />
        </div>
      </div>
    </div>
  );
}

/** Infinite horizontal ticker. */
export function Marquee({
  items,
  speed = 25,
  reverse = false,
}: {
  items: string[];
  speed?: number;
  reverse?: boolean;
}) {
  return (
    <div style={{ overflow: "hidden", padding: "14px 0" }}>
      <div
        style={{
          display: "flex",
          animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : ""}`,
          width: "max-content",
        }}
      >
        {[0, 1].map((r) => (
          <div
            key={r}
            aria-hidden={r === 1}
            style={{ display: "flex", gap: 40, paddingRight: 40, alignItems: "center" }}
          >
            {items.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "rgba(255,255,255,.3)",
                  whiteSpace: "nowrap",
                  letterSpacing: ".04em",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "#6366f1",
                    display: "inline-block",
                  }}
                />
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
