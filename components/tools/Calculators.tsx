"use client";

import { Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useId, useState, type ReactNode } from "react";
import { buttonClass } from "@/components/ui/Button";
import { cx } from "@/components/ui/cx";
import { Field, Input, NumberInput, Select } from "@/components/ui/form";
import { InvoicePaper, PaperLabel } from "@/components/ui/invoice";
import {
  STANDARD_RATES,
  decimalHours,
  hhmm,
  hourlyRate,
  num,
  parseDuration,
  shiftMinutes,
  vat,
} from "@/lib/tools/math";

/**
 * The free calculators (ROADMAP T1). Everything runs in the browser; nothing is sent anywhere.
 * Math lives in lib/tools/math.ts and is unit-tested.
 */
const CURRENCIES = ["USD", "EUR", "GBP", "CAD", "AUD", "CHF", "SEK", "NOK", "DKK", "PLN"];

const money = (amount: number, currency: string, digits = 2) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(amount);

function CurrencySelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const id = useId();
  return (
    <Field id={id} label="Currency">
      <Select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
        {CURRENCIES.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </Select>
    </Field>
  );
}

/** The result, styled like the bottom of an invoice. */
function Result({
  rows,
  total,
  note,
}: {
  rows: Array<{ label: string; value: string }>;
  total: { label: string; value: string };
  note?: ReactNode;
}) {
  return (
    <div className="bg-brand-50 ring-brand-200 rounded-2xl p-5 ring-1" aria-live="polite">
      <dl className="text-small space-y-2">
        {rows.map((r) => (
          <div key={r.label} className="flex justify-between gap-4">
            <dt className="text-muted">{r.label}</dt>
            <dd className="text-ink font-medium tabular-nums">{r.value}</dd>
          </div>
        ))}
        <div className="border-ink flex items-baseline justify-between gap-4 border-t-2 pt-2">
          <dt className="text-ink font-bold">{total.label}</dt>
          <dd className="font-heading text-ink text-h3 tabular-nums">{total.value}</dd>
        </div>
      </dl>
      {note && <p className="text-small text-muted mt-3">{note}</p>}
    </div>
  );
}

function GeneratorLink({ text }: { text: string }) {
  return (
    <Link
      href="/free-invoice-generator"
      data-track="tool_to_generator"
      className={buttonClass({ variant: "secondary", className: "mt-5 w-full" })}
    >
      {text}
    </Link>
  );
}

// ── VAT calculator ───────────────────────────────────────────────────────────

export function VatCalculator() {
  const ids = { amount: useId(), rate: useId(), country: useId() };
  const [amount, setAmount] = useState("100");
  const [rate, setRate] = useState("21");
  const [mode, setMode] = useState<"add" | "remove">("add");
  const [currency, setCurrency] = useState("EUR");
  const r = vat(num(amount), Math.min(num(rate), 100), mode);
  const country = STANDARD_RATES.find((c) => String(c.rate) === rate)?.country ?? "";

  return (
    <InvoicePaper highlight edge="perforated" className="p-6 sm:p-8">
      <PaperLabel>VAT calculator</PaperLabel>
      <div
        role="radiogroup"
        aria-label="What is the amount?"
        className="bg-tint ring-line mt-5 grid grid-cols-2 gap-1 rounded-xl p-1 ring-1"
      >
        {(
          [
            ["add", "Add VAT (amount is net)"],
            ["remove", "Remove VAT (amount is gross)"],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            role="radio"
            aria-checked={mode === key}
            onClick={() => setMode(key)}
            className={cx(
              "text-small focus-visible:focus-ring rounded-lg px-3 py-2 font-bold transition-colors",
              mode === key ? "bg-surface text-ink shadow-soft" : "text-muted hover:text-ink",
            )}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field
          id={ids.amount}
          label={mode === "add" ? "Amount without VAT" : "Amount including VAT"}
        >
          <NumberInput id={ids.amount} value={amount} onChange={(e) => setAmount(e.target.value)} />
        </Field>
        <CurrencySelect value={currency} onChange={setCurrency} />
        <Field id={ids.country} label="Country (standard rate)">
          <Select
            id={ids.country}
            value={country}
            onChange={(e) => {
              const c = STANDARD_RATES.find((x) => x.country === e.target.value);
              if (c) setRate(String(c.rate));
            }}
          >
            <option value="">Custom rate</option>
            {STANDARD_RATES.map((c) => (
              <option key={c.country} value={c.country}>
                {c.country}: {c.rate}%
              </option>
            ))}
          </Select>
        </Field>
        <Field id={ids.rate} label="VAT rate">
          <NumberInput
            id={ids.rate}
            suffix="%"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </Field>
      </div>
      <div className="mt-6">
        <Result
          rows={[
            { label: "Net (without VAT)", value: money(r.net, currency) },
            { label: `VAT ${num(rate)}%`, value: money(r.vat, currency) },
          ]}
          total={{ label: "Gross (including VAT)", value: money(r.gross, currency) }}
        />
      </div>
      <GeneratorLink text="Put this on an invoice" />
    </InvoicePaper>
  );
}

// ── Hours calculator ─────────────────────────────────────────────────────────

interface Shift {
  id: number;
  label: string;
  start: string;
  end: string;
  break: string;
}

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let nextId = 1;
const shift = (label: string, start = "09:00", end = "17:00", br = "30"): Shift => ({
  id: nextId++,
  label,
  start,
  end,
  break: br,
});

export function HoursCalculator() {
  const [shifts, setShifts] = useState<Shift[]>(() => DAYS.slice(0, 5).map((d) => shift(d)));
  const [rate, setRate] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [convert, setConvert] = useState("1:45");
  const rateId = useId();
  const convertId = useId();

  const minutes = shifts.reduce((s, x) => s + shiftMinutes(x.start, x.end, num(x.break)), 0);
  const hours = decimalHours(minutes);
  const pay = Math.round(hours * num(rate) * 100) / 100;
  const converted = parseDuration(convert);
  const set = (id: number, key: keyof Shift, value: string) =>
    setShifts((list) => list.map((x) => (x.id === id ? { ...x, [key]: value } : x)));

  return (
    <InvoicePaper highlight edge="perforated" className="p-6 sm:p-8">
      <PaperLabel>Hours calculator</PaperLabel>
      <div className="mt-5 overflow-x-auto">
        <table className="text-small w-full min-w-[30rem]">
          <thead>
            <tr className="text-eyebrow text-subtle text-left uppercase">
              <th className="pb-2 font-medium">Day</th>
              <th className="pb-2 font-medium">Start</th>
              <th className="pb-2 font-medium">End</th>
              <th className="pb-2 font-medium">Break (min)</th>
              <th className="pb-2 text-right font-medium">Hours</th>
              <th className="pb-2">
                <span className="sr-only">Remove</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {shifts.map((x) => {
              const m = shiftMinutes(x.start, x.end, num(x.break));
              return (
                <tr key={x.id} className="border-line border-t">
                  <td className="py-2 pr-2">
                    <Input
                      aria-label="Day"
                      value={x.label}
                      onChange={(e) => set(x.id, "label", e.target.value)}
                      className="h-9 w-28"
                    />
                  </td>
                  <td className="py-2 pr-2">
                    <Input
                      aria-label={`${x.label} start`}
                      type="time"
                      value={x.start}
                      onChange={(e) => set(x.id, "start", e.target.value)}
                      className="h-9 w-28"
                    />
                  </td>
                  <td className="py-2 pr-2">
                    <Input
                      aria-label={`${x.label} end`}
                      type="time"
                      value={x.end}
                      onChange={(e) => set(x.id, "end", e.target.value)}
                      className="h-9 w-28"
                    />
                  </td>
                  <td className="py-2 pr-2">
                    <Input
                      aria-label={`${x.label} break in minutes`}
                      inputMode="numeric"
                      value={x.break}
                      onChange={(e) => set(x.id, "break", e.target.value)}
                      className="h-9 w-20"
                    />
                  </td>
                  <td className="text-ink py-2 text-right font-medium tabular-nums">{hhmm(m)}</td>
                  <td className="py-2 pl-2 text-right">
                    <button
                      type="button"
                      aria-label={`Remove ${x.label}`}
                      onClick={() => setShifts((l) => l.filter((y) => y.id !== x.id))}
                      className="text-muted hover:text-ink focus-visible:focus-ring grid size-8 place-items-center rounded-lg"
                    >
                      <Trash2 aria-hidden className="size-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button
        type="button"
        onClick={() => setShifts((l) => [...l, shift(DAYS[l.length % 7]!)])}
        className="text-small text-brand-700 hover:bg-brand-50 focus-visible:focus-ring ring-brand-200 mt-3 inline-flex items-center gap-1.5 rounded-xl px-4 py-2 font-bold ring-1"
      >
        <Plus aria-hidden className="size-4" /> Add a day
      </button>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field id={rateId} label="Hourly rate (optional)">
          <NumberInput
            id={rateId}
            value={rate}
            placeholder="0.00"
            onChange={(e) => setRate(e.target.value)}
          />
        </Field>
        <CurrencySelect value={currency} onChange={setCurrency} />
      </div>
      <div className="mt-6">
        <Result
          rows={[
            { label: "Total time", value: hhmm(minutes) },
            { label: "In decimal hours (for the invoice)", value: hours.toFixed(2) },
          ]}
          total={
            num(rate) > 0
              ? { label: "To invoice", value: money(pay, currency) }
              : { label: "Total hours", value: hours.toFixed(2) }
          }
        />
      </div>

      <div className="border-line mt-8 border-t pt-6">
        <p className="text-ink font-bold">Quick convert: hours and minutes ⇄ decimal</p>
        <div className="mt-3 flex flex-wrap items-end gap-4">
          <Field id={convertId} label="Time (1:45) or decimal (1.75)">
            <Input
              id={convertId}
              value={convert}
              onChange={(e) => setConvert(e.target.value)}
              className="w-40"
            />
          </Field>
          <p className="text-ink pb-2.5 font-medium tabular-nums" aria-live="polite">
            {converted === null
              ? "Type a time like 1:45 or a number like 1.75"
              : `${hhmm(converted)} = ${decimalHours(converted).toFixed(2)} hours`}
          </p>
        </div>
      </div>
      <GeneratorLink text="Invoice these hours" />
    </InvoicePaper>
  );
}

// ── Hourly rate calculator ───────────────────────────────────────────────────

export function RateCalculator() {
  const ids = { takeHome: useId(), tax: useId(), costs: useId(), weeks: useId(), hours: useId() };
  const [v, setV] = useState({
    takeHome: "48000",
    tax: "30",
    costs: "6000",
    weeks: "8",
    hours: "25",
  });
  const [currency, setCurrency] = useState("USD");
  const set = (k: keyof typeof v) => (e: { target: { value: string } }) =>
    setV((s) => ({ ...s, [k]: e.target.value }));
  const r = hourlyRate({
    takeHome: num(v.takeHome),
    taxPercent: num(v.tax),
    costs: num(v.costs),
    weeksOff: num(v.weeks),
    billableHours: num(v.hours),
  });

  return (
    <InvoicePaper highlight edge="perforated" className="p-6 sm:p-8">
      <PaperLabel>Hourly rate calculator</PaperLabel>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field id={ids.takeHome} label="Income you want to keep per year" hint="After income tax">
          <NumberInput id={ids.takeHome} value={v.takeHome} onChange={set("takeHome")} />
        </Field>
        <CurrencySelect value={currency} onChange={setCurrency} />
        <Field
          id={ids.tax}
          label="Tax and social contributions"
          hint="Share of profit you set aside"
        >
          <NumberInput id={ids.tax} suffix="%" value={v.tax} onChange={set("tax")} />
        </Field>
        <Field
          id={ids.costs}
          label="Business costs per year"
          hint="Insurance, software, tools, accountant"
        >
          <NumberInput id={ids.costs} value={v.costs} onChange={set("costs")} />
        </Field>
        <Field
          id={ids.weeks}
          label="Weeks you don't bill per year"
          hint="Holidays, sick days, quiet weeks"
        >
          <NumberInput id={ids.weeks} value={v.weeks} onChange={set("weeks")} />
        </Field>
        <Field
          id={ids.hours}
          label="Billable hours per week"
          hint="Paid work only, not admin or travel"
        >
          <NumberInput id={ids.hours} value={v.hours} onChange={set("hours")} />
        </Field>
      </div>
      <div className="mt-6">
        {r ? (
          <Result
            rows={[
              { label: "Profit you need before tax", value: money(r.beforeTax, currency, 0) },
              {
                label: "Plus business costs = to invoice per year",
                value: money(r.revenue, currency, 0),
              },
              { label: "That's per month", value: money(r.perMonth, currency, 0) },
              {
                label: "Billable hours per year",
                value: r.billableHoursPerYear.toLocaleString("en-US"),
              },
              { label: "Day rate (8 billable hours)", value: money(r.daily, currency) },
            ]}
            total={{ label: "Your minimum hourly rate", value: money(r.hourly, currency) }}
            note="A minimum: it covers your income, tax and costs, nothing more. Tax is a rough share; your accountant can give you the real figure."
          />
        ) : (
          <p className="text-small text-muted bg-tint rounded-2xl p-5">
            Add at least one billable hour per week and fewer than 52 weeks off.
          </p>
        )}
      </div>
      <GeneratorLink text="Make an invoice with this rate" />
    </InvoicePaper>
  );
}
