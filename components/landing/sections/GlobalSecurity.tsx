import { Eyebrow, delay, display } from "../primitives";

const LANGUAGES = ["English", "Nederlands", "Deutsch", "Français", "Español", "Italiano", "+ more"];
const TRUST = ["GDPR", "Germany", "Encrypted", "No Ads"];

const h2Style: React.CSSProperties = {
  ...display,
  fontSize: "clamp(28px,3.5vw,40px)",
  fontWeight: 900,
  lineHeight: 1.1,
  margin: "0 0 12px",
  letterSpacing: "-0.02em",
};

function Pill({ children, tone }: { children: React.ReactNode; tone: "green" | "slate" }) {
  const green = tone === "green";
  return (
    <span
      style={{
        fontSize: 12,
        fontWeight: 600,
        padding: "6px 12px",
        borderRadius: 8,
        background: green ? "rgba(74,222,128,.06)" : "rgba(148,163,184,.05)",
        color: green ? "#4ade80" : "#94a3b8",
        border: `1px solid ${green ? "rgba(74,222,128,.1)" : "rgba(148,163,184,.08)"}`,
      }}
    >
      {children}
    </span>
  );
}

export function GlobalSecurity() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background: "#0a0a0f",
        borderTop: "1px solid rgba(255,255,255,.04)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 64 }}>
        <div className="reveal" style={{ flex: "1 1 min(360px, 100%)", minWidth: 0 }}>
          <Eyebrow color="#4ade80">Go Global</Eyebrow>
          <h2 style={h2Style}>
            Any currency.
            <br />
            Any language.
          </h2>
          <p style={{ fontSize: 16, color: "#64748b", margin: "0 0 20px" }}>
            Invoice in your client&apos;s native language. They pay up to 30% faster.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {LANGUAGES.map((l) => (
              <Pill key={l} tone="green">
                {l}
              </Pill>
            ))}
          </div>
        </div>
        <div
          className="reveal"
          style={{ flex: "1 1 min(360px, 100%)", minWidth: 0, ...delay(0.1) }}
        >
          <Eyebrow color="#94a3b8">Privacy First</Eyebrow>
          <h2 style={h2Style}>
            Your data stays
            <br />
            in Europe.
          </h2>
          <p style={{ fontSize: 16, color: "#64748b", margin: "0 0 20px" }}>
            Servers in Germany. GDPR compliant. We never sell your data.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {TRUST.map((t) => (
              <Pill key={t} tone="slate">
                {t}
              </Pill>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
