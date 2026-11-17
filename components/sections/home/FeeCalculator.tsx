"use client";

import { useId, useState } from "react";
import { InvoicePaper, LineItems, PaperLabel, Stamp } from "@/components/ui/invoice";

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

/**
 * What a per-payment cut costs over a year (ROADMAP chunk 20d2). It compares a fee an invoicing
 * app takes from each payment with Invoicor's 0%. It deliberately doesn't claim "you keep 100%":
 * your own PayPal or Stripe link still has PayPal or Stripe's own fee, as anywhere else.
 */
export function FeeCalculator() {
  const [revenue, setRevenue] = useState(60000);
  const [rate, setRate] = useState(2);
  const revenueId = useId();
  const rateId = useId();
  const cut = (revenue * rate) / 100;

  return (
    <InvoicePaper highlight edge="perforated" className="relative p-6 sm:p-8">
      <Stamp className="absolute top-6 right-6" rotate={-10}>
        0% fees
      </Stamp>
      <PaperLabel>Your year, itemised</PaperLabel>

      <div className="mt-6 space-y-6">
        <div>
          <div className="text-small flex justify-between">
            <label htmlFor={revenueId} className="text-ink font-bold">
              What you invoice in a year
            </label>
            <output htmlFor={revenueId} className="text-ink font-bold tabular-nums">
              {money(revenue)}
            </output>
          </div>
          <input
            id={revenueId}
            type="range"
            min={5000}
            max={250000}
            step={5000}
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="accent-brand-600 mt-3 w-full"
          />
        </div>
        <div>
          <div className="text-small flex justify-between">
            <label htmlFor={rateId} className="text-ink font-bold">
              Cut an app takes per payment
            </label>
            <output htmlFor={rateId} className="text-ink font-bold tabular-nums">
              {rate.toFixed(1)}%
            </output>
          </div>
          <input
            id={rateId}
            type="range"
            min={0.5}
            max={5}
            step={0.5}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="accent-brand-600 mt-3 w-full"
          />
        </div>
      </div>

      <LineItems
        className="mt-8"
        items={[
          {
            description: `A ${rate.toFixed(1)}% cut on every payment`,
            detail: "What a per-payment fee costs you",
            amount: money(cut),
          },
          { description: "Invoicor's cut", detail: "Flat subscription only", amount: "$0" },
        ]}
        total={{ label: "You keep, every year", amount: money(cut) }}
      />
    </InvoicePaper>
  );
}
