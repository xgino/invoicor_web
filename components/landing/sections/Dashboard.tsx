import { Counter } from "../Counter";
import { Cta, Eyebrow, display } from "../primitives";

const METRICS = [
  { label: "Paid", end: 12.4, suffix: "k", prefix: "€", color: "#4ade80", dec: 1 },
  { label: "Unpaid", end: 2.1, suffix: "k", prefix: "€", color: "#fb923c", dec: 1 },
  { label: "Collection", end: 94, suffix: "%", prefix: "", color: "#60a5fa", dec: 0 },
  { label: "Avg. to paid", end: 8, suffix: " days", prefix: "", color: "#a78bfa", dec: 0 },
];

export function Dashboard() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background:
          "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(96,165,250,.05) 0%, transparent 50%), #09090b",
        position: "relative",
      }}
    >
      <div
        className="reveal"
        style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}
      >
        <Eyebrow color="#60a5fa">Revenue Dashboard</Eyebrow>
        <h2
          style={{
            ...display,
            fontSize: "clamp(32px,4.5vw,54px)",
            fontWeight: 900,
            lineHeight: 1.05,
            margin: "0 0 16px",
            letterSpacing: "-0.03em",
          }}
        >
          Know where your
          <br />
          money is. <span style={{ color: "#60a5fa" }}>Always.</span>
        </h2>
        <p style={{ fontSize: 17, color: "#64748b", margin: "0 0 40px", maxWidth: 480 }}>
          Paid vs unpaid. Collection rate. Average days to get paid. Compare this period to the last
          with one tap.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(170px,1fr))",
            gap: 14,
          }}
        >
          {METRICS.map((s) => (
            <div
              key={s.label}
              className="lift"
              style={
                {
                  background: "rgba(255,255,255,.03)",
                  border: "1px solid rgba(255,255,255,.05)",
                  borderRadius: 16,
                  padding: "22px 18px",
                  "--accent": s.color,
                } as React.CSSProperties
              }
            >
              <p
                style={{
                  fontSize: 12,
                  color: "#64748b",
                  margin: "0 0 8px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: ".05em",
                }}
              >
                {s.label}
              </p>
              <p
                style={{
                  fontSize: 28,
                  fontWeight: 900,
                  margin: 0,
                  color: s.color,
                  ...display,
                  letterSpacing: "-0.02em",
                }}
              >
                <Counter
                  end={s.end}
                  suffix={s.suffix}
                  prefix={s.prefix}
                  duration={2200}
                  decimals={s.dec}
                />
              </p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <Cta text="See Your Revenue" section="dashboard" />
        </div>
      </div>
    </section>
  );
}
