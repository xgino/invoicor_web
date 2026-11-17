import { Cta, Eyebrow, Shape, delay, display } from "../primitives";

const STEPS = [
  {
    n: "01",
    t: "Pick your client",
    d: "Select from saved or create new. Name, address, email — auto-filled.",
    c: "#6366f1",
  },
  {
    n: "02",
    t: "Add items",
    d: "Pick saved products or type a line. Tax, discounts, totals calculated live.",
    c: "#8b5cf6",
  },
  {
    n: "03",
    t: "Send as PDF",
    d: "One tap. Beautiful PDF via email, WhatsApp, AirDrop. Track payment status.",
    c: "#4ade80",
  },
];

export function HowItWorks() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background: "#0a0a0f",
        borderTop: "1px solid rgba(255,255,255,.04)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Shape
        type="dots"
        size={80}
        color="rgba(99,102,241,.2)"
        top="20%"
        left="3%"
        dur={14}
        drift="A"
      />
      <Shape
        type="tri"
        size={32}
        color="rgba(245,158,11,.08)"
        top="70%"
        left="92%"
        dur={9}
        drift="B"
      />
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="reveal">
          <Eyebrow color="#60a5fa">How it works</Eyebrow>
          <h2
            style={{
              ...display,
              fontSize: "clamp(32px,4vw,50px)",
              fontWeight: 900,
              margin: "0 0 48px",
              letterSpacing: "-0.03em",
            }}
          >
            Three taps. Five seconds. <span style={{ color: "#4ade80" }}>Sent.</span>
          </h2>
        </div>
        <ol
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            justifyContent: "center",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {STEPS.map((step, i) => (
            <li
              key={step.n}
              className="reveal"
              style={{
                flex: "1 1 240px",
                maxWidth: 260,
                textAlign: "left",
                ...delay(0.1 + i * 0.12),
              }}
            >
              <div
                aria-hidden
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: `${step.c}15`,
                  border: `1px solid ${step.c}25`,
                  color: step.c,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  fontWeight: 900,
                  marginBottom: 18,
                  boxShadow: `0 0 30px ${step.c}12`,
                }}
              >
                {step.n}
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 700, margin: "0 0 6px" }}>{step.t}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.65, color: "#64748b", margin: 0 }}>
                {step.d}
              </p>
            </li>
          ))}
        </ol>
        <div className="reveal" style={{ marginTop: 52, ...delay(0.45) }}>
          <Cta text="Try It Free" section="how" />
        </div>
      </div>
    </section>
  );
}
