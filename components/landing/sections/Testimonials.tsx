import { Stars, delay, display } from "../primitives";

// TODO (roadmap chunk 20d): replace with real, attributed testimonials.
const TESTIMONIALS = [
  {
    q: "I used to spend 20 minutes per invoice in Google Docs. Now I open Invoicor, tap three times, and it is sent before my coffee gets cold.",
    n: "Sarah J.",
    r: "Freelance Designer",
    c: "#818cf8",
  },
  {
    q: "My clients actually commented on how professional my invoices look. The templates are better than what my accountant sends.",
    n: "Marcus C.",
    r: "Software Consultant",
    c: "#4ade80",
  },
  {
    q: "Had €3,000 in unsent invoices in my notes app. First day with Invoicor, sent them all. Got paid within a week.",
    n: "Elena R.",
    r: "Photography Studio",
    c: "#fbbf24",
  },
];

export function Testimonials() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background: "#0a0a0f",
        borderTop: "1px solid rgba(255,255,255,.04)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2
          className="reveal"
          style={{
            ...display,
            fontSize: "clamp(32px,4vw,46px)",
            fontWeight: 900,
            margin: "0 0 48px",
            textAlign: "center",
            letterSpacing: "-0.03em",
          }}
        >
          Businesses get paid <span style={{ color: "#4ade80" }}>faster.</span>
        </h2>
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 16,
            ...delay(0.12),
          }}
        >
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.n}
              className="lift"
              style={
                {
                  margin: 0,
                  background: "rgba(255,255,255,.02)",
                  border: "1px solid rgba(255,255,255,.05)",
                  borderRadius: 20,
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  "--accent": t.c,
                } as React.CSSProperties
              }
            >
              <div style={{ marginBottom: 16 }}>
                <Stars size={14} />
              </div>
              <blockquote
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "#94a3b8",
                  margin: "0 0 24px",
                  flex: 1,
                }}
              >
                &ldquo;{t.q}&rdquo;
              </blockquote>
              <figcaption style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  aria-hidden
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: `${t.c}15`,
                    border: `1px solid ${t.c}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: 15,
                    color: t.c,
                  }}
                >
                  {t.n[0]}
                </div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: 14, margin: 0 }}>{t.n}</p>
                  <p style={{ fontSize: 12, color: "#64748b", margin: 0 }}>{t.r}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
