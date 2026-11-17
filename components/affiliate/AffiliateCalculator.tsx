"use client";

import { useState } from "react";
import { PRICING } from "@/lib/pricing";
import { AFFILIATE } from "./config";

const { symbol } = PRICING;
const { green, greenLight, greenBorder, dark, text2, text3, border, plans, commission } = AFFILIATE;

const MIN = 1;
const MAX = 10000;

function money(n: number): string {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/** Interactive earnings calculator. */
export function AffiliateCalculator() {
  const [referrals, setReferrals] = useState(500);
  const [selectedPlan, setSelectedPlan] = useState(1);

  const plan = plans[selectedPlan] ?? plans[0]!;
  const perSub = (plan.price * commission) / 100;
  const monthly = perSub * referrals;
  const yearly = monthly * 12;
  const fill = ((referrals - MIN) / (MAX - MIN)) * 100;

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 24,
        border: `1px solid ${border}`,
        padding: "clamp(24px, 4vw, 48px)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 28,
          fontWeight: 800,
          textAlign: "center",
          margin: "0 0 8px",
          color: dark,
        }}
      >
        See what you could earn
      </h2>
      <p style={{ fontSize: 14, color: text3, textAlign: "center", margin: "0 0 32px" }}>
        Drag the slider. Pick a plan. Watch the numbers grow.
      </p>

      <div
        role="group"
        aria-label="Plan"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          marginBottom: 28,
          flexWrap: "wrap",
        }}
      >
        {plans.map((p, i) => (
          <button
            key={p.name}
            type="button"
            aria-pressed={selectedPlan === i}
            onClick={() => setSelectedPlan(i)}
            style={{
              padding: "10px 20px",
              borderRadius: 12,
              fontSize: 14,
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              transition: "all 0.15s",
              background: selectedPlan === i ? green : "#f1f5f9",
              color: selectedPlan === i ? "#fff" : text2,
              boxShadow: selectedPlan === i ? "0 2px 8px rgba(16,185,129,0.3)" : "none",
            }}
          >
            {p.name} - {symbol}
            {p.price}/mo
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 420, margin: "0 auto 32px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <label htmlFor="referrals" style={{ fontSize: 14, fontWeight: 600, color: text2 }}>
            Referred subscribers
          </label>
          <output
            htmlFor="referrals"
            style={{
              background: greenLight,
              color: "#047857",
              fontWeight: 700,
              fontSize: 18,
              padding: "4px 16px",
              borderRadius: 10,
              border: `1px solid ${greenBorder}`,
            }}
          >
            {referrals}
          </output>
        </div>
        <input
          id="referrals"
          type="range"
          min={MIN}
          max={MAX}
          value={referrals}
          onChange={(e) => setReferrals(Number(e.target.value))}
          style={{
            width: "100%",
            height: 8,
            borderRadius: 4,
            appearance: "none",
            cursor: "pointer",
            background: `linear-gradient(to right, ${green} 0%, ${green} ${fill}%, #e2e8f0 ${fill}%, #e2e8f0 100%)`,
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 11,
            color: text3,
            marginTop: 4,
          }}
        >
          <span>1</span>
          <span>2500</span>
          <span>5000</span>
          <span>7500</span>
          <span>10000</span>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: 16,
          marginBottom: 24,
        }}
      >
        <Result label="Per subscriber" value={`${symbol}${money(perSub)}`} note="every month" />
        <Result
          label="Monthly income"
          value={`${symbol}${money(monthly)}`}
          note={`from ${referrals} subscribers`}
          highlight
        />
        <Result
          label="Yearly income"
          value={`${symbol}${money(yearly)}`}
          note="passive recurring"
        />
      </div>

      <div style={{ background: dark, borderRadius: 14, padding: 20, textAlign: "center" }}>
        <p style={{ fontSize: 14, color: "#cbd5e1", margin: 0 }}>
          That is{" "}
          <strong style={{ color: "#fff", fontSize: 18 }}>
            {symbol}
            {money(yearly)}/year
          </strong>{" "}
          from just <strong style={{ color: "#34d399" }}>{referrals} subscribers</strong> on the{" "}
          {plan.name} plan. All passive. All recurring.
        </p>
      </div>

      <p style={{ fontSize: 11, color: text3, textAlign: "center", marginTop: 12 }}>
        Commission is {commission}% of the subscription price excluding applicable taxes. Actual
        amounts may vary.
      </p>
    </div>
  );
}

function Result({
  label,
  value,
  note,
  highlight = false,
}: {
  label: string;
  value: string;
  note: string;
  highlight?: boolean;
}) {
  return (
    <div
      style={{
        background: highlight ? greenLight : "#f8fafc",
        borderRadius: 16,
        padding: 20,
        textAlign: "center",
        border: highlight ? `2px solid ${green}20` : `1px solid ${border}`,
      }}
    >
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: highlight ? "#047857" : text3,
          margin: "0 0 6px",
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: highlight ? 30 : 26,
          fontWeight: 800,
          color: highlight ? "#047857" : green,
          margin: "0 0 4px",
        }}
      >
        {value}
      </p>
      <p style={{ fontSize: 11, color: highlight ? "#047857" : text3, margin: 0 }}>{note}</p>
    </div>
  );
}
