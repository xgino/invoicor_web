import { Banknote, BadgeCheck, MessageCircle } from "lucide-react";
import { delay, display } from "../primitives";

/**
 * What Invoicor promises, built on the competitors' most common one-star complaints
 * (BRAND.md §1). Only true claims. Replace or extend with real, attributed App Store reviews
 * once there are enough (ROADMAP chunk 50).
 */
const PROMISES = [
  {
    icon: BadgeCheck,
    title: "Free means free",
    text: "Your first 3 invoices are free, with no watermark and no card needed. No trial that turns into a paywall halfway through your first invoice.",
    c: "#818cf8",
  },
  {
    icon: Banknote,
    title: "We never touch your money",
    text: "Invoicor doesn't process payments, so it can't hold, freeze or take a cut of what you earn. Your client pays you directly through your own payment link.",
    c: "#4ade80",
  },
  {
    icon: MessageCircle,
    title: "A real person answers",
    text: "Questions and feedback go straight from the app to the people who build it. No bots, no ticket queue that never ends.",
    c: "#fbbf24",
  },
];

export function Promises() {
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
          No tricks. <span style={{ color: "#4ade80" }}>Just invoices.</span>
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
          {PROMISES.map((p) => (
            <div
              key={p.title}
              className="lift"
              style={
                {
                  background: "rgba(255,255,255,.02)",
                  border: "1px solid rgba(255,255,255,.05)",
                  borderRadius: 20,
                  padding: "28px 24px",
                  "--accent": p.c,
                } as React.CSSProperties
              }
            >
              <div
                aria-hidden
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: `${p.c}15`,
                  border: `1px solid ${p.c}25`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                <p.icon size={22} color={p.c} strokeWidth={1.75} />
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, margin: "0 0 8px" }}>{p.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#94a3b8", margin: 0 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
