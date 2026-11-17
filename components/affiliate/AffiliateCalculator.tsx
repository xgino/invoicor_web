"use client";

import { useId, useState } from "react";
import { InvoicePaper, LineItems, PaperLabel } from "@/components/ui/invoice";
import { cx } from "@/components/ui/cx";
import { PRICING } from "@/lib/pricing";
import { AFFILIATE } from "./config";

const MIN = 1;
const MAX = 2000;
const { commission, plans } = AFFILIATE;

const money = (n: number) =>
  `${PRICING.symbol}${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

/** Earnings calculator, written as a statement (ROADMAP chunk 24c). */
export function AffiliateCalculator() {
  const [referrals, setReferrals] = useState(100);
  const [planIndex, setPlanIndex] = useState(plans.length - 1);
  const sliderId = useId();

  const plan = plans[planIndex] ?? plans[0]!;
  const perSub = (plan.price * commission) / 100;
  const monthly = perSub * referrals;

  return (
    <InvoicePaper highlight edge="perforated" className="p-6 sm:p-8">
      <PaperLabel>Your commission statement</PaperLabel>

      <div className="mt-6 grid gap-6">
        <fieldset>
          <legend className="text-small text-ink mb-2 font-bold">Plan they subscribe to</legend>
          <div className="bg-tint ring-line inline-flex gap-1 rounded-xl p-1 ring-1">
            {plans.map((p, i) => (
              <button
                key={p.name}
                type="button"
                aria-pressed={planIndex === i}
                onClick={() => setPlanIndex(i)}
                className={cx(
                  "text-small focus-visible:focus-ring rounded-lg px-4 py-2 font-bold transition-colors duration-150",
                  planIndex === i ? "bg-surface text-ink shadow-soft" : "text-muted hover:text-ink",
                )}
              >
                {p.name} · {money(p.price)}/mo
              </button>
            ))}
          </div>
        </fieldset>
        <div>
          <div className="text-small flex justify-between">
            <label htmlFor={sliderId} className="text-ink font-bold">
              Paying subscribers you refer
            </label>
            <output htmlFor={sliderId} className="text-ink font-bold tabular-nums">
              {referrals.toLocaleString("en-US")}
            </output>
          </div>
          <input
            id={sliderId}
            type="range"
            min={MIN}
            max={MAX}
            value={referrals}
            onChange={(e) => setReferrals(Number(e.target.value))}
            className="accent-brand-600 mt-3 w-full"
          />
        </div>
      </div>

      <LineItems
        className="mt-8"
        items={[
          {
            description: `${commission}% of ${plan.name}`,
            detail: `${money(plan.price)}/mo per subscriber`,
            amount: money(perSub),
          },
          {
            description: `× ${referrals.toLocaleString("en-US")} subscribers`,
            detail: "Every month they stay subscribed",
            amount: money(monthly),
          },
        ]}
        totals={[{ label: "Per year", amount: money(monthly * 12) }]}
        total={{ label: "You earn per month", amount: money(monthly) }}
      />
      <p className="text-small text-subtle mt-4">
        Commission is {commission}% of the subscription price excluding applicable taxes. Actual
        amounts may vary.
      </p>
    </InvoicePaper>
  );
}
