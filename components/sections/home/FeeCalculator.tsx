"use client";

import { TrendingUp } from "lucide-react";
import { useId, useState, type ReactNode } from "react";
import { cx } from "@/components/ui/cx";
import { InvoicePaper, PaperLabel, Stamp } from "@/components/ui/invoice";
import { fill } from "@/lib/i18n/chrome";
import { en as EN_HOME, type HomeDict } from "@/lib/i18n/pages/home/en";

/** Marked points on the fee slider. Examples, not named competitors. */
const MARK_VALUES = [1, 2.9, 3.5];

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
export function FeeCalculator({
  t = EN_HOME.fee,
  intl = "en-US",
  currency = "USD",
  scale = 1,
}: {
  t?: HomeDict["fee"];
  intl?: string;
  currency?: string;
  /** Local money per "dollar" of invoice size (SEK, NOK ×10, DKK ×7, PLN ×4). */
  scale?: number;
}) {
  const money = (n: number) =>
    n.toLocaleString(intl, { style: "currency", currency, maximumFractionDigits: 0 });
  const pct = (n: number) =>
    n.toLocaleString(intl, {
      style: "percent",
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  const markPct = (n: number) =>
    n.toLocaleString(intl, { style: "percent", maximumFractionDigits: 1 });
  const MARKS = MARK_VALUES.map((value, i) => ({ value, label: t.marks[i]! }));
  const [invoice, setInvoice] = useState(500 * scale);
  const [perMonth, setPerMonth] = useState(12);
  const [fee, setFee] = useState(2.9);
  const ids = { invoice: useId(), perMonth: useId(), fee: useId() };

  const yearly = invoice * perMonth * 12;
  const kept = (yearly * fee) / 100;

  return (
    <InvoicePaper highlight edge="perforated" className="relative p-6 sm:p-8">
      <Stamp className="absolute top-6 right-6" rotate={-10}>
        {t.stamp}
      </Stamp>
      <PaperLabel className="pr-28">{t.label}</PaperLabel>

      <div className="mt-6 space-y-6">
        <Slider
          id={ids.invoice}
          label={t.average}
          value={invoice}
          display={money(invoice)}
          min={50 * scale}
          max={5000 * scale}
          step={50 * scale}
          onChange={setInvoice}
        />
        <Slider
          id={ids.perMonth}
          label={t.perMonth}
          value={perMonth}
          display={String(perMonth)}
          min={1}
          max={100}
          step={1}
          onChange={setPerMonth}
        />
        <Slider
          id={ids.fee}
          label={t.feeLabel}
          value={fee}
          display={pct(fee / 100)}
          min={0.5}
          max={5}
          step={0.1}
          onChange={setFee}
        >
          <div className="mt-2 flex flex-wrap gap-1.5" role="group" aria-label={t.marksAria}>
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
                  {m.label} {markPct(m.value / 100)}
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
          {t.keep}
        </p>
        <p className="font-heading text-gradient mt-1 text-[2.75rem] leading-none font-extrabold tracking-tight tabular-nums">
          +{money(kept)}
        </p>
        <p className="text-small text-muted mt-1">{t.pocket}</p>
      </div>

      <dl className="text-small mt-5 space-y-2">
        <div className="flex justify-between gap-4">
          <dt className="text-muted">{t.perYear}</dt>
          <dd className="text-ink font-medium tabular-nums">{money(yearly)}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-muted">{fill(t.wouldKeep, { fee: pct(fee / 100) })}</dt>
          <dd className="text-muted tabular-nums">{money(kept)}</dd>
        </div>
        <div className="border-line flex justify-between gap-4 border-t pt-2">
          <dt className="text-ink font-bold">{t.takes}</dt>
          <dd className="text-ink font-bold tabular-nums">{money(0)}</dd>
        </div>
      </dl>

      <p className="text-subtle mt-4 text-[0.75rem] leading-relaxed">{t.note}</p>
    </InvoicePaper>
  );
}
