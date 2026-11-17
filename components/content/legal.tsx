import type { ReactNode } from "react";

/** Dark long-form layout shared by Help, Terms and Privacy. */
export function DarkPage({
  eyebrow,
  eyebrowColor,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  eyebrowColor: string;
  title: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <div style={{ background: "#09090b", color: "#e2e8f0", minHeight: "100vh" }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "120px 24px 80px" }}>
        <p
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: eyebrowColor,
            letterSpacing: ".08em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          {eyebrow}
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px,5vw,52px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            margin: "0 0 12px",
            color: "#fff",
          }}
        >
          {title}
        </h1>
        <div
          style={{
            fontSize: 14,
            color: "#94a3b8",
            marginBottom: 48,
            paddingBottom: 24,
            borderBottom: "1px solid rgba(255,255,255,.06)",
          }}
        >
          {intro}
        </div>
        {children}
      </div>
    </div>
  );
}

/** Numbered legal section. */
export function S({ n, t, children }: { n: string; t: string; children: ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 21,
          fontWeight: 800,
          color: "#fff",
          margin: "0 0 14px",
          letterSpacing: "-0.01em",
        }}
      >
        <span style={{ color: "#6b7280", marginRight: 8 }}>{n}.</span>
        {t}
      </h2>
      {children}
    </section>
  );
}

/** Paragraph. */
export function P({ children }: { children: ReactNode }) {
  return (
    <p style={{ fontSize: 15, lineHeight: 1.75, color: "#94a3b8", margin: "0 0 12px" }}>
      {children}
    </p>
  );
}

/** Highlighted paragraph. */
export function H({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontSize: 14,
        lineHeight: 1.7,
        color: "#cbd5e1",
        background: "rgba(255,255,255,.03)",
        border: "1px solid rgba(255,255,255,.06)",
        borderRadius: 10,
        padding: "14px 18px",
        margin: "0 0 12px",
        fontWeight: 500,
      }}
    >
      {children}
    </p>
  );
}

/** Bold inline label. */
export function B({ children }: { children: ReactNode }) {
  return <strong style={{ color: "#e2e8f0" }}>{children}</strong>;
}
