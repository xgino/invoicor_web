import { Cta, Shape, display } from "../primitives";

export function FinalCta() {
  return (
    <section
      style={{
        padding: "120px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(99,102,241,.06) 0%, transparent 60%), #09090b",
        borderTop: "1px solid rgba(255,255,255,.04)",
      }}
    >
      <Shape
        type="circle"
        size={20}
        color="rgba(251,191,36,.15)"
        top="20%"
        left="15%"
        dur={6}
        drift="A"
      />
      <Shape
        type="ring"
        size={60}
        color="rgba(99,102,241,.08)"
        top="65%"
        left="80%"
        dur={8}
        drift="B"
      />
      <Shape
        type="cross"
        size={18}
        color="rgba(255,255,255,.06)"
        top="30%"
        left="85%"
        dur={7}
        drift="C"
      />
      <Shape
        type="square"
        size={14}
        color="rgba(74,222,128,.1)"
        top="75%"
        left="20%"
        dur={9}
        drift="A"
      />
      <div
        className="reveal"
        style={{ maxWidth: 580, margin: "0 auto", position: "relative", zIndex: 1 }}
      >
        <h2
          style={{
            ...display,
            fontSize: "clamp(36px, 5.5vw, 60px)",
            fontWeight: 900,
            margin: "0 0 16px",
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
          }}
        >
          Send your first invoice
          <br />
          <span style={{ color: "#818cf8" }}>in 60 seconds.</span>
        </h2>
        <p style={{ fontSize: 17, color: "#64748b", margin: "0 0 40px", lineHeight: 1.6 }}>
          Free on the App Store. No credit card required.
        </p>
        <Cta text="Download Invoicor" section="final" />
      </div>
    </section>
  );
}
