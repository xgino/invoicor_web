"use client";

import { useState } from "react";
import { appStoreLink } from "@/lib/config";
import { Eyebrow, display } from "../primitives";

interface Plan {
  nm: string;
  desc: string;
  monthly: string;
  yearly: string;
  features: string[];
  btn: string;
  bg: string;
  fg: string;
  accent: string;
  pop?: boolean;
}

const PLANS: Plan[] = [
  {
    nm: "Free",
    desc: "Try everything",
    monthly: "$0",
    yearly: "$0",
    features: [
      "3 invoices (lifetime)",
      "Unlimited clients",
      "1 business profile",
      "Free templates",
      "PDF export",
    ],
    btn: "Download Free",
    bg: "#fff",
    fg: "#0a0a0a",
    accent: "#64748b",
  },
  {
    nm: "Starter",
    desc: "For side projects",
    monthly: "$4.99",
    yearly: "$49.99",
    features: [
      "10 invoices/month",
      "Unlimited clients",
      "1 business profile",
      "All templates",
      "Revenue dashboard",
    ],
    btn: "Start Free Trial",
    bg: "#6366f1",
    fg: "#fff",
    accent: "#6366f1",
  },
  {
    nm: "Pro",
    desc: "For growing businesses",
    monthly: "$7.99",
    yearly: "$79.99",
    features: [
      "50 invoices/month",
      "Unlimited clients",
      "3 business profiles",
      "Premium templates",
      "Compare mode",
    ],
    btn: "Start Free Trial",
    bg: "#7c3aed",
    fg: "#fff",
    accent: "#7c3aed",
    pop: true,
  },
];

function toggleStyle(active: boolean): React.CSSProperties {
  return {
    padding: "10px 24px",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    fontWeight: 700,
    fontSize: 14,
    fontFamily: "inherit",
    background: active ? "rgba(255,255,255,.08)" : "transparent",
    color: active ? "#fff" : "#94a3b8",
    transition: "all .2s",
  };
}

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section
      id="pricing"
      style={{
        padding: "100px 24px",
        background: "#09090b",
        borderTop: "1px solid rgba(255,255,255,.04)",
        scrollMarginTop: 64,
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 48 }}>
          <Eyebrow color="#818cf8">Pricing</Eyebrow>
          <h2
            style={{
              ...display,
              fontSize: "clamp(32px,4vw,50px)",
              fontWeight: 900,
              margin: "0 0 8px",
              letterSpacing: "-0.03em",
            }}
          >
            Start free. Upgrade when you grow.
          </h2>
          <p style={{ fontSize: 16, color: "#64748b", margin: "0 0 28px" }}>
            No watermarks. No hidden fees. Cancel anytime.
          </p>
          <div
            role="group"
            aria-label="Billing period"
            style={{
              display: "inline-flex",
              background: "rgba(255,255,255,.04)",
              borderRadius: 12,
              padding: 3,
              border: "1px solid rgba(255,255,255,.06)",
            }}
          >
            <button
              type="button"
              aria-pressed={!yearly}
              onClick={() => setYearly(false)}
              style={toggleStyle(!yearly)}
            >
              Monthly
            </button>
            <button
              type="button"
              aria-pressed={yearly}
              onClick={() => setYearly(true)}
              style={toggleStyle(yearly)}
            >
              Yearly{" "}
              <span style={{ color: "#4ade80", fontSize: 11, fontWeight: 800, marginLeft: 4 }}>
                Save 2 months
              </span>
            </button>
          </div>
        </div>

        <div
          className="reveal"
          style={
            {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
              "--d": "0.12s",
            } as React.CSSProperties
          }
        >
          {PLANS.map((plan) => {
            const isFree = plan.monthly === "$0";
            const price = yearly ? plan.yearly : plan.monthly;
            const period = isFree ? "" : yearly ? "/year" : "/mo";
            return (
              <div
                key={plan.nm}
                className="lift"
                style={
                  {
                    background: "rgba(255,255,255,.02)",
                    border: plan.pop
                      ? `1.5px solid ${plan.accent}40`
                      : "1px solid rgba(255,255,255,.06)",
                    borderRadius: 20,
                    padding: "30px 24px",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: plan.pop ? `0 0 60px ${plan.accent}08` : "none",
                    "--accent": plan.pop ? plan.accent : "#ffffff",
                  } as React.CSSProperties
                }
              >
                {plan.pop && (
                  <div
                    style={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: plan.accent,
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 800,
                      padding: "4px 16px",
                      borderRadius: 999,
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <h3 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 2px" }}>{plan.nm}</h3>
                <p style={{ fontSize: 13, color: "#64748b", margin: "0 0 20px" }}>{plan.desc}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: 2, marginBottom: 24 }}>
                  <span
                    style={{ fontSize: 38, fontWeight: 900, letterSpacing: "-0.03em", ...display }}
                  >
                    {price}
                  </span>
                  {period && (
                    <span style={{ fontSize: 14, color: "#64748b", fontWeight: 500 }}>
                      {period}
                    </span>
                  )}
                </div>
                <ul
                  style={{ flex: 1, marginBottom: 24, listStyle: "none", padding: 0, marginTop: 0 }}
                >
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 13 }}
                    >
                      <svg
                        aria-hidden
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={plan.accent}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span style={{ fontSize: 14, fontWeight: 500, color: "#94a3b8" }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={appStoreLink(`home-pricing-${plan.nm.toLowerCase()}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grow"
                  data-track="pricing_click"
                  data-track-plan={plan.nm}
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "14px 0",
                    borderRadius: 12,
                    background: plan.bg,
                    color: plan.fg,
                    fontWeight: 700,
                    fontSize: 14,
                    textDecoration: "none",
                    boxShadow: `0 4px 16px ${plan.accent}20`,
                  }}
                >
                  {plan.btn}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
