import { CircleCheck } from "lucide-react";
import { Cta, IPhone, Shape } from "../primitives";

/** True, checkable promises (BRAND.md). No fake faces or ratings until there are real reviews. */
const PROMISES = ["3 invoices free", "No watermark", "No card needed"];

const RECENT_INVOICES = [
  {
    c: "Acme Corp",
    n: "INV-0042",
    a: "€1,200",
    st: "Sent",
    bg: "rgba(96,165,250,.1)",
    tc: "#60a5fa",
  },
  {
    c: "Studio Nova",
    n: "INV-0041",
    a: "€3,080",
    st: "Paid",
    bg: "rgba(74,222,128,.1)",
    tc: "#4ade80",
  },
  {
    c: "Bright Agency",
    n: "INV-0040",
    a: "€750",
    st: "Draft",
    bg: "rgba(148,163,184,.08)",
    tc: "#94a3b8",
  },
];

export function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,.12) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(124,58,237,.06) 0%, transparent 50%), #09090b",
      }}
    >
      <Shape
        type="circle"
        size={140}
        color="rgba(99,102,241,.08)"
        top="6%"
        left="4%"
        dur={10}
        drift="A"
      />
      <Shape
        type="ring"
        size={90}
        color="rgba(37,99,235,.12)"
        top="15%"
        left="88%"
        delay={1.5}
        dur={8}
        drift="B"
      />
      <Shape
        type="square"
        size={40}
        color="rgba(245,158,11,.06)"
        top="72%"
        left="6%"
        delay={0.8}
        dur={11}
        drift="C"
      />
      <Shape
        type="cross"
        size={28}
        color="rgba(124,58,237,.15)"
        top="80%"
        left="82%"
        delay={2}
        dur={9}
        drift="A"
      />
      <Shape
        type="dots"
        size={100}
        color="rgba(37,99,235,.3)"
        top="38%"
        left="93%"
        dur={13}
        drift="B"
      />
      <Shape
        type="tri"
        size={36}
        color="rgba(16,185,129,.12)"
        top="12%"
        left="60%"
        delay={1}
        dur={12}
        drift="C"
      />
      <Shape
        type="ring"
        size={180}
        color="rgba(251,191,36,.04)"
        top="55%"
        left="85%"
        delay={0.5}
        dur={15}
        drift="A"
      />
      <Shape
        type="circle"
        size={24}
        color="rgba(239,68,68,.08)"
        top="88%"
        left="42%"
        delay={2.5}
        dur={7}
        drift="B"
      />

      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-20%",
          left: "30%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,.07) 0%, transparent 65%)",
          pointerEvents: "none",
          animation: "glow 6s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-15%",
          right: "10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,.05) 0%, transparent 60%)",
          pointerEvents: "none",
          animation: "glow 8s ease-in-out infinite 2s",
        }}
      />

      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "160px 24px 100px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 72,
          }}
        >
          {/* Copy */}
          <div
            className="anim-up"
            style={{
              flex: "1 1 min(480px, 100%)",
              minWidth: 0,
              maxWidth: 560,
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(99,102,241,.08)",
                border: "1px solid rgba(99,102,241,.15)",
                borderRadius: 999,
                padding: "7px 18px",
                fontSize: 13,
                fontWeight: 600,
                color: "#818cf8",
                marginBottom: 32,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#6366f1",
                  animation: "glow 2s ease-in-out infinite",
                }}
              />
              Now on the App Store
            </div>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px, 7vw, 82px)",
                fontWeight: 900,
                lineHeight: 1.0,
                letterSpacing: "-0.04em",
                margin: "0 0 24px",
                background: "linear-gradient(180deg, #ffffff 30%, rgba(255,255,255,.5) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your next invoice
              <br />
              takes 5 seconds.
            </h1>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                color: "#94a3b8",
                margin: "0 auto 40px",
                maxWidth: 440,
              }}
            >
              Invoicor auto-fills your business details, clients, and prices. Pick a template, tap
              send. Beautiful PDF — any currency, any language.
            </p>

            <Cta text="Download Free on iOS" section="hero" />

            <ul
              aria-label="What you get for free"
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px 20px",
                listStyle: "none",
                padding: 0,
                margin: "40px 0 0",
              }}
            >
              {PROMISES.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#94a3b8",
                  }}
                >
                  <CircleCheck aria-hidden size={16} color="#4ade80" strokeWidth={2.25} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* iPhone mockup */}
          <div className="anim-phone" style={{ flex: "0 0 auto", position: "relative" }}>
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: "120%",
                height: "120%",
                borderRadius: "50%",
                border: "1px solid rgba(99,102,241,.08)",
                animation: "pulse-ring 4s ease-out infinite",
              }}
            />

            <IPhone style={{ animation: "bob 6s ease-in-out infinite" }}>
              <div
                style={{
                  background: "#0f172a",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(160deg, #1e293b, #0f172a)",
                    padding: "52px 18px 20px",
                    borderRadius: "0 0 28px 28px",
                  }}
                >
                  <p
                    style={{
                      color: "rgba(255,255,255,.4)",
                      fontSize: 10,
                      fontWeight: 500,
                      margin: "0 0 3px",
                    }}
                  >
                    Good morning
                  </p>
                  <p
                    style={{
                      color: "#fff",
                      fontSize: 28,
                      fontWeight: 900,
                      margin: "0 0 14px",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    €4,280<span style={{ fontSize: 16, fontWeight: 400, opacity: 0.4 }}>.00</span>
                  </p>
                  <div style={{ display: "flex", gap: 6 }}>
                    {(
                      [
                        ["3", "Draft", "#94a3b8"],
                        ["5", "Sent", "#60a5fa"],
                        ["8", "Paid", "#4ade80"],
                      ] as const
                    ).map(([n, l, c]) => (
                      <div
                        key={l}
                        style={{
                          flex: 1,
                          background: "rgba(255,255,255,.05)",
                          borderRadius: 12,
                          padding: "8px 0",
                          textAlign: "center",
                        }}
                      >
                        <p style={{ color: c, fontSize: 16, fontWeight: 900, margin: 0 }}>{n}</p>
                        <p
                          style={{
                            color: "rgba(255,255,255,.35)",
                            fontSize: 8,
                            margin: "2px 0 0",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: ".05em",
                          }}
                        >
                          {l}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ padding: "14px 14px 0", flex: 1 }}>
                  <p
                    style={{
                      fontWeight: 800,
                      fontSize: 9,
                      margin: "0 0 10px",
                      color: "#94a3b8",
                      textTransform: "uppercase",
                      letterSpacing: ".05em",
                    }}
                  >
                    Recent invoices
                  </p>
                  {RECENT_INVOICES.map((inv) => (
                    <div
                      key={inv.n}
                      style={{
                        background: "rgba(255,255,255,.03)",
                        borderRadius: 14,
                        padding: "11px 12px",
                        marginBottom: 7,
                        border: "1px solid rgba(255,255,255,.04)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <p style={{ fontWeight: 700, fontSize: 11, margin: 0, color: "#e2e8f0" }}>
                          {inv.c}
                        </p>
                        <p style={{ fontSize: 9, color: "#475569", margin: "2px 0 0" }}>{inv.n}</p>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <p style={{ fontWeight: 900, fontSize: 11, margin: 0, color: "#f1f5f9" }}>
                          {inv.a}
                        </p>
                        <span
                          style={{
                            fontSize: 8,
                            fontWeight: 700,
                            color: inv.tc,
                            background: inv.bg,
                            padding: "2px 7px",
                            borderRadius: 5,
                          }}
                        >
                          {inv.st}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </IPhone>

            <div
              aria-hidden
              style={{
                position: "absolute",
                bottom: "18%",
                right: -32,
                background: "rgba(22,163,106,.12)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(74,222,128,.15)",
                borderRadius: 14,
                padding: "10px 16px",
                boxShadow: "0 8px 24px rgba(0,0,0,.2)",
                animation: "float 4s ease-in-out infinite",
              }}
            >
              <p
                style={{
                  fontSize: 9,
                  fontWeight: 600,
                  color: "#4ade80",
                  margin: "0 0 1px",
                  textTransform: "uppercase",
                  letterSpacing: ".05em",
                }}
              >
                Just paid
              </p>
              <p style={{ fontSize: 17, fontWeight: 900, margin: 0, color: "#4ade80" }}>+€3,080</p>
            </div>
          </div>
        </div>

        <div
          aria-hidden
          style={{
            textAlign: "center",
            marginTop: 56,
            animation: "scroll-hint 2s ease-in-out infinite",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,.2)"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
}
