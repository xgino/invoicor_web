"use client";

import { TrendingUp } from "lucide-react";
import { useId, useState, type ReactNode } from "react";
import { cx } from "@/components/ui/cx";
import { InvoicePaper, PaperLabel, Stamp } from "@/components/ui/invoice";

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

/** Marked points on the fee slider. Examples, not named competitors. */
const MARKS = [
  { value: 1, label: "Low" },
  { value: 2.9, label: "Common" },
  { value: 3.5, label: "High" },
];

function Slider({
  id,
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
  children,
}: {
  id: string;
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  children?: ReactNode;
}) {
  return (
    <div>
      <div className="text-small flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-ink font-bold">
          {label}
        </label>
        <output htmlFor={id} className="text-ink font-heading text-h4 tabular-nums">
          {display}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="accent-brand-600 mt-2 w-full"
      />
      {children}
    </div>
  );
}

/**
 * "What you keep with Invoicor" (ROADMAP P5). Framed as a gain: the big number is what stays in
 * your pocket; what a per-payment fee would cost elsewhere is a secondary, clearly labelled line.
 * Honest by design: "other apps" are examples with a rate you choose, and your own PayPal/Stripe
 * link still has its own fee.
 */
export function FeeCalculator() {
  const [invoice, setInvoice] = useState(500);
  const [perMonth, setPerMonth] = useState(12);
  const [fee, setFee] = useState(2.9);
  const ids = { invoice: useId(), perMonth: useId(), fee: useId() };

  const yearly = invoice * perMonth * 12;
  const kept = (yearly * fee) / 100;

  return (
    <InvoicePaper highlight edge="perforated" className="relative p-6 sm:p-8">
      <Stamp className="absolute top-6 right-6" rotate={-10}>
        0% fees
      </Stamp>
      <PaperLabel className="pr-28">What you keep with Invoicor</PaperLabel>

      <div className="mt-6 space-y-6">
        <Slider
          id={ids.invoice}
          label="Average invoice"
          value={invoice}
          display={money(invoice)}
          min={50}
          max={5000}
          step={50}
          onChange={setInvoice}
        />
        <Slider
          id={ids.perMonth}
          label="Invoices per month"
          value={perMonth}
          display={String(perMonth)}
          min={1}
          max={100}
          step={1}
          onChange={setPerMonth}
        />
        <Slider
          id={ids.fee}
          label="Fee other apps take per payment"
          value={fee}
          display={`${fee.toFixed(1)}%`}
          min={0.5}
          max={5}
          step={0.1}
          onChange={setFee}
        >
          <div className="mt-2 flex flex-wrap gap-1.5" role="group" aria-label="Example fee levels">
            {MARKS.map((m) => {
              const active = Math.abs(fee - m.value) < 0.05;
              return (
                <button
                  key={m.value}
                  type="button"
                  onClick={() => setFee(m.value)}
                  aria-pressed={active}
                  className={cx(
                    "focus-visible:focus-ring rounded-full px-2.5 py-1 text-[0.75rem] font-bold whitespace-nowrap transition-colors duration-150",
                    active
                      ? "bg-brand-cta text-white"
                      : "bg-tint text-muted ring-line hover:text-ink ring-1",
                  )}
                >
                  {m.label} {m.value}%
                </button>
              );
            })}
          </div>
        </Slider>
      </div>

      {/* The result: a gain first */}
      <div className="bg-brand-50 ring-brand-200 mt-8 rounded-2xl p-5 ring-1">
        <p className="text-small text-brand-800 flex items-center gap-1.5 font-bold">
          <TrendingUp aria-hidden className="size-4" />
          With Invoicor you keep
        </p>
        <p className="font-heading text-gradient mt-1 text-[2.75rem] leading-none font-extrabold tracking-tight tabular-nums">
          +{money(kept)}
        </p>
        <p className="text-small text-muted mt-1">more in your pocket every year</p>
      </div>

      <dl className="text-small mt-5 space-y-2">
        <div className="flex justify-between gap-4">
          <dt className="text-muted">You invoice per year</dt>
          <dd className="text-ink font-medium tabular-nums">{money(yearly)}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-muted">An app taking {fee.toFixed(1)}% would keep</dt>
          <dd className="text-muted tabular-nums">{money(kept)}</dd>
        </div>
        <div className="border-line flex justify-between gap-4 border-t pt-2">
          <dt className="text-ink font-bold">Invoicor takes</dt>
          <dd className="text-ink font-bold tabular-nums">$0</dd>
        </div>
      </dl>

      <p className="text-subtle mt-4 text-[0.75rem] leading-relaxed">
        Example. Some invoicing apps take a fee from every payment on top of their subscription;
        rates vary. If you add your own PayPal or Stripe link, they charge their own fee, as they
        would anywhere. Invoicor adds nothing.
      </p>
    </InvoicePaper>
  );
}
