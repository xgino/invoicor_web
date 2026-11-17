import { Counter } from "../Counter";
import { Marquee, delay } from "../primitives";

const FEATURES = [
  "Create in Seconds",
  "80% Auto-Fill",
  "31 Templates",
  "38 Currencies",
  "11 Invoice Languages",
  "Status Tracking",
  "Tax Calculator",
  "PDF Export",
  "Multiple Profiles",
  "Revenue Dashboard",
];

const CURRENCIES = [
  "$ USD",
  "€ EUR",
  "£ GBP",
  "¥ JPY",
  "CHF",
  "CA$ CAD",
  "A$ AUD",
  "₹ INR",
  "R$ BRL",
  "kr SEK",
  "kr NOK",
  "zł PLN",
  "₺ TRY",
  "R ZAR",
  "₩ KRW",
  "S$ SGD",
  "HK$ HKD",
  "₪ ILS",
];

const STATS = [
  { end: 31, suffix: "", label: "Invoice templates", color: "#818cf8" },
  { end: 38, suffix: "", label: "Currencies", color: "#4ade80" },
  { end: 5, suffix: "s", label: "To create & send", color: "#fbbf24" },
  { end: 11, suffix: "", label: "Invoice languages", color: "#f472b6" },
];

export function Stats() {
  return (
    <section
      style={{
        background: "#0a0a0f",
        borderTop: "1px solid rgba(255,255,255,.04)",
        borderBottom: "1px solid rgba(255,255,255,.04)",
      }}
    >
      <Marquee items={FEATURES} speed={28} />

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "48px 24px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 48,
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className="reveal"
            style={{ textAlign: "center", flex: "0 0 auto", ...delay(0.08 * i) }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 48,
                fontWeight: 900,
                margin: "0 0 4px",
                letterSpacing: "-0.03em",
                color: s.color,
              }}
            >
              <Counter end={s.end} suffix={s.suffix} duration={1800} />
            </p>
            <p
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "#64748b",
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: ".06em",
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <Marquee items={CURRENCIES} speed={35} reverse />
    </section>
  );
}
