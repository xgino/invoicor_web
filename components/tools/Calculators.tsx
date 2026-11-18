"use client";

import { CalendarPlus, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState, type ReactNode } from "react";
import { buttonClass } from "@/components/ui/Button";
import { cx } from "@/components/ui/cx";
import { Field, Input, NumberInput, Select } from "@/components/ui/form";
import { InvoicePaper, PaperLabel } from "@/components/ui/invoice";
import type { HoursUi, RateUi, VatUi } from "@/lib/i18n/pages/tools/en";
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
 * Math lives in lib/tools/math.ts and is unit-tested. Text, number format and starting values come
 * from the page's language (lib/i18n/pages/tools), as props.
 */
const CURRENCIES = ["USD", "EUR", "GBP", "CAD", "AUD", "CHF", "SEK", "NOK", "DKK", "PLN"];

/** The language-dependent bits every calculator gets. */
export interface CalcLocale {
  /** BCP 47 tag for numbers, country and weekday names. */
  intl: string;
  currency: string;
  /** "Currency" in the page's language. */
  currencyLabel: string;
  /** Where "put this on an invoice" leads: the generator in this language. */
  generatorHref: string;
}

const fmt = (text: string, values: Record<string, string | number>) =>
  text.replace(/\{(\w+)\}/g, (m, k: string) => (k in values ? String(values[k]) : m));

const decimal = (n: number, intl: string) =>
  new Intl.NumberFormat(intl, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

const money = (amount: number, currency: string, intl: string, digits = 2) =>
  new Intl.NumberFormat(intl, {
    style: "currency",
    currency,
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(amount);

function CurrencySelect({
  value,
  onChange,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  label: string;
}) {
  const id = useId();
  const options = CURRENCIES.includes(value) ? CURRENCIES : [value, ...CURRENCIES];
  return (
    <Field id={id} label={label}>
      <Select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((c) => (
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

/**
 * The generator URL with this result as an invoice line (the generator reads ?item=&qty=&price=
 * &tax=&currency=, adds the line and removes the parameters again). Numbers use a dot.
 */
function prefill(
  l: CalcLocale,
  line: { item: string; qty: number; price: number; tax?: number; from: string },
): string {
  const q = new URLSearchParams({
    item: line.item,
    qty: String(Math.round(line.qty * 100) / 100),
    price: String(Math.round(line.price * 100) / 100),
    currency: l.currency,
    from: line.from,
  });
  if (line.tax !== undefined) q.set("tax", String(line.tax));
  return `${l.generatorHref}?${q.toString()}`;
}

function GeneratorLink({ text, href }: { text: string; href: string }) {
  return (
    <Link
      href={href}
      data-track="tool_to_generator"
      className={buttonClass({ className: "mt-5 w-full" })}
    >
      {text}
    </Link>
  );
}

/** A small group heading inside a calculator. */
function Group({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <fieldset className="mt-6 first:mt-5">
      <legend className="text-ink mb-3 flex items-center gap-2 font-bold">
        <span
          aria-hidden
          className="bg-brand-50 text-brand-700 ring-brand-200 text-small grid size-6 place-items-center rounded-full tabular-nums ring-1"
        >
          {n}
        </span>
        {title}
      </legend>
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

// ── VAT calculator ───────────────────────────────────────────────────────────

/** The country list in the page's language, sorted by name there. */
function countries(intl: string, gst: string) {
  let names: Intl.DisplayNames | null = null;
  try {
    names = new Intl.DisplayNames([intl], { type: "region" });
  } catch {
    // very old browsers: English names from the table
  }
  return STANDARD_RATES.map((c) => ({
    ...c,
    name: `${names?.of(c.code) ?? c.country.replace(/ \(GST\)$/, "")}${c.gst ? ` (${gst})` : ""}`,
  })).sort((a, b) => a.name.localeCompare(b.name, intl));
}

export function VatCalculator({
  t,
  l,
  defaultCountry,
}: {
  t: VatUi;
  l: CalcLocale;
  /** ISO code of the preselected country. */
  defaultCountry: string;
}) {
  const ids = { amount: useId(), rate: useId(), country: useId() };
  const list = countries(l.intl, t.gst);
  const start = list.find((c) => c.code === defaultCountry) ?? list[0]!;
  const [amount, setAmount] = useState("100");
  const [rate, setRate] = useState(String(start.rate));
  const [code, setCode] = useState(start.code);
  const [mode, setMode] = useState<"add" | "remove">("add");
  const [currency, setCurrency] = useState(l.currency);
  const r = vat(num(amount), Math.min(num(rate), 100), mode);
  // The chosen country stays selected while its rate is unchanged; another rate means "custom".
  const country = list.find((c) => c.code === code && String(c.rate) === rate)?.code ?? "";
  const money_ = (n: number) => money(n, currency, l.intl);

  return (
    <InvoicePaper highlight edge="perforated" className="p-6 sm:p-8">
      <PaperLabel>{t.label}</PaperLabel>
      <div
        role="radiogroup"
        aria-label={t.modeAria}
        className="bg-tint ring-line mt-5 grid grid-cols-2 gap-1 rounded-xl p-1 ring-1"
      >
        {(
          [
            ["add", t.add],
            ["remove", t.remove],
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
        <Field id={ids.amount} label={mode === "add" ? t.amountNet : t.amountGross}>
          <NumberInput id={ids.amount} value={amount} onChange={(e) => setAmount(e.target.value)} />
        </Field>
        <CurrencySelect value={currency} onChange={setCurrency} label={l.currencyLabel} />
        <Field id={ids.country} label={t.country}>
          <Select
            id={ids.country}
            value={country}
            onChange={(e) => {
              const c = list.find((x) => x.code === e.target.value);
              if (c) {
                setCode(c.code);
                setRate(String(c.rate));
              }
            }}
          >
            <option value="">{t.custom}</option>
            {list.map((c) => (
              <option key={c.code} value={c.code}>
                {c.name}: {c.rate.toLocaleString(l.intl)}%
              </option>
            ))}
          </Select>
        </Field>
        <Field id={ids.rate} label={t.rate}>
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
            { label: t.net, value: money_(r.net) },
            {
              label: fmt(t.vatRow, { rate: num(rate).toLocaleString(l.intl) }),
              value: money_(r.vat),
            },
          ]}
          total={{ label: t.gross, value: money_(r.gross) }}
        />
      </div>
      <GeneratorLink
        text={t.cta}
        href={prefill(
          { ...l, currency },
          {
            item: t.invoiceItem,
            qty: 1,
            price: r.net,
            tax: num(rate),
            from: "vat",
          },
        )}
      />
    </InvoicePaper>
  );
}

// ── Hours calculator ─────────────────────────────────────────────────────────

interface Shift {
  id: number;
  /** YYYY-MM-DD; empty until the browser knows today's date (no mismatch with the static page). */
  date: string;
  start: string;
  end: string;
  break: string;
}

let nextId = 1;
const shift = (date: string, start = "09:00", end = "17:00", br = "30"): Shift => ({
  id: nextId++,
  date,
  start,
  end,
  break: br,
});

const iso = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

function addDays(date: string, days: number): string {
  const d = date ? new Date(`${date}T12:00:00`) : new Date();
  d.setDate(d.getDate() + days);
  return iso(d);
}

/** The next working day after `date` (skips Saturday and Sunday). */
function nextWorkday(date: string): string {
  let next = addDays(date, 1);
  while ([0, 6].includes(new Date(`${next}T12:00:00`).getDay())) next = addDays(next, 1);
  return next;
}

/** Monday to Friday of the current week. */
function thisWeek(): string[] {
  const today = new Date();
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((today.getDay() + 6) % 7));
  return Array.from({ length: 5 }, (_, i) => addDays(iso(monday), i));
}

export function HoursCalculator({ t, l }: { t: HoursUi; l: CalcLocale }) {
  const [shifts, setShifts] = useState<Shift[]>(() => Array.from({ length: 5 }, () => shift("")));
  const [rate, setRate] = useState("");
  const [currency, setCurrency] = useState(l.currency);
  const [convert, setConvert] = useState("1:45");
  const rateId = useId();
  const convertId = useId();

  // Fill in this week's dates once the page runs in the browser.
  useEffect(() => {
    const week = thisWeek();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- today's date only exists in the browser; the static page has none
    setShifts((list) => list.map((x, i) => (x.date ? x : { ...x, date: week[i] ?? "" })));
  }, []);

  const dayName = (date: string) =>
    date
      ? new Intl.DateTimeFormat(l.intl, {
          weekday: "short",
          day: "numeric",
          month: "short",
        }).format(new Date(`${date}T12:00:00`))
      : "";
  const shortDate = (date: string) =>
    date
      ? new Intl.DateTimeFormat(l.intl, { day: "numeric", month: "short" }).format(
          new Date(`${date}T12:00:00`),
        )
      : "";

  const minutes = shifts.reduce((s, x) => s + shiftMinutes(x.start, x.end, num(x.break)), 0);
  const hours = decimalHours(minutes);
  const hourly = num(rate);
  const pay = Math.round(hours * hourly * 100) / 100;
  const converted = parseDuration(convert);
  const dates = shifts
    .map((x) => x.date)
    .filter(Boolean)
    .sort();
  const from = shortDate(dates[0] ?? "");
  const to = shortDate(dates[dates.length - 1] ?? "");
  const set = (id: number, key: keyof Shift, value: string) =>
    setShifts((list) => list.map((x) => (x.id === id ? { ...x, [key]: value } : x)));
  const last = () => shifts[shifts.length - 1];
  const addDay = () =>
    setShifts((list) => {
      const prev = list[list.length - 1];
      return [...list, shift(nextWorkday(prev?.date ?? ""), prev?.start, prev?.end, prev?.break)];
    });
  const addWeek = () =>
    setShifts((list) => {
      const out = [...list];
      for (let i = 0; i < 5; i++) {
        const prev = out[out.length - 1];
        out.push(shift(nextWorkday(prev?.date ?? ""), prev?.start, prev?.end, prev?.break));
      }
      return out;
    });

  return (
    <InvoicePaper highlight edge="perforated" className="p-6 sm:p-8">
      <PaperLabel>{t.label}</PaperLabel>
      <p className="text-small text-muted mt-2">{t.intro}</p>
      <div className="mt-5 overflow-x-auto">
        <table className="text-small w-full min-w-[32rem]">
          <thead>
            <tr className="text-eyebrow text-subtle text-left uppercase">
              <th className="pb-2 font-medium">{t.date}</th>
              <th className="pb-2 font-medium">{t.start}</th>
              <th className="pb-2 font-medium">{t.end}</th>
              <th className="pb-2 font-medium">{t.break}</th>
              <th className="pb-2 text-right font-medium">{t.hours}</th>
              <th className="pb-2">
                <span className="sr-only">{t.remove}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {shifts.map((x) => {
              const m = shiftMinutes(x.start, x.end, num(x.break));
              const name = dayName(x.date) || t.date;
              return (
                <tr key={x.id} className="border-line border-t">
                  <td className="py-2 pr-2">
                    <Input
                      aria-label={t.date}
                      type="date"
                      value={x.date}
                      onChange={(e) => set(x.id, "date", e.target.value)}
                      className="h-9 w-36"
                    />
                  </td>
                  <td className="py-2 pr-2">
                    <Input
                      aria-label={fmt(t.startAria, { day: name })}
                      type="time"
                      value={x.start}
                      onChange={(e) => set(x.id, "start", e.target.value)}
                      className="h-9 w-28"
                    />
                  </td>
                  <td className="py-2 pr-2">
                    <Input
                      aria-label={fmt(t.endAria, { day: name })}
                      type="time"
                      value={x.end}
                      onChange={(e) => set(x.id, "end", e.target.value)}
                      className="h-9 w-28"
                    />
                  </td>
                  <td className="py-2 pr-2">
                    <Input
                      aria-label={fmt(t.breakAria, { day: name })}
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
                      aria-label={fmt(t.removeAria, { day: name })}
                      onClick={() => setShifts((list) => list.filter((y) => y.id !== x.id))}
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
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={addDay}
          className="text-small text-brand-700 hover:bg-brand-50 focus-visible:focus-ring ring-brand-200 inline-flex items-center gap-1.5 rounded-xl px-4 py-2 font-bold ring-1"
        >
          <Plus aria-hidden className="size-4" /> {t.addDay}
        </button>
        <button
          type="button"
          onClick={addWeek}
          className="text-small text-brand-700 hover:bg-brand-50 focus-visible:focus-ring ring-brand-200 inline-flex items-center gap-1.5 rounded-xl px-4 py-2 font-bold ring-1"
        >
          <CalendarPlus aria-hidden className="size-4" /> {t.addWeek}
        </button>
        {dates.length > 0 && last() && (
          <span className="text-small text-subtle ml-auto">
            {fmt(t.period, { days: shifts.length, from, to })}
          </span>
        )}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field id={rateId} label={t.rate}>
          <NumberInput
            id={rateId}
            value={rate}
            placeholder={decimal(0, l.intl)}
            onChange={(e) => setRate(e.target.value)}
          />
        </Field>
        <CurrencySelect value={currency} onChange={setCurrency} label={l.currencyLabel} />
      </div>
      <div className="mt-6">
        <Result
          rows={[
            { label: t.totalTime, value: hhmm(minutes) },
            { label: t.decimal, value: decimal(hours, l.intl) },
            ...(hourly > 0
              ? [
                  {
                    label: fmt(t.calc, {
                      hours: decimal(hours, l.intl),
                      rate: money(hourly, currency, l.intl),
                    }),
                    value: money(pay, currency, l.intl),
                  },
                ]
              : []),
          ]}
          total={
            hourly > 0
              ? { label: t.toInvoice, value: money(pay, currency, l.intl) }
              : { label: t.totalHours, value: decimal(hours, l.intl) }
          }
        />
      </div>
      <GeneratorLink
        text={t.cta}
        href={prefill(
          { ...l, currency },
          {
            item: fmt(t.invoiceItem, { from, to }),
            qty: hours,
            price: hourly,
            from: "hours",
          },
        )}
      />

      <div className="border-line mt-8 border-t pt-6">
        <p className="text-ink font-bold">{t.convertTitle}</p>
        <div className="mt-3 flex flex-wrap items-end gap-4">
          <Field id={convertId} label={t.convertLabel}>
            <Input
              id={convertId}
              value={convert}
              onChange={(e) => setConvert(e.target.value)}
              className="w-40"
            />
          </Field>
          <p className="text-ink pb-2.5 font-medium tabular-nums" aria-live="polite">
            {converted === null
              ? t.convertHint
              : fmt(t.convertResult, {
                  time: hhmm(converted),
                  hours: decimal(decimalHours(converted), l.intl),
                })}
          </p>
        </div>
      </div>
    </InvoicePaper>
  );
}

// ── Hourly rate calculator ───────────────────────────────────────────────────

export function RateCalculator({
  t,
  l,
  defaults,
}: {
  t: RateUi;
  l: CalcLocale;
  /** Yearly amounts. */
  defaults: { takeHome: string; tax: string; costs: string; weeks: string; hours: string };
}) {
  const ids = { takeHome: useId(), tax: useId(), costs: useId(), weeks: useId(), hours: useId() };
  const [v, setV] = useState(defaults);
  const [period, setPeriod] = useState<"year" | "month">("year");
  const [currency, setCurrency] = useState(l.currency);
  const set = (k: keyof typeof v) => (e: { target: { value: string } }) =>
    setV((s) => ({ ...s, [k]: e.target.value }));
  const perYear = (value: string) => num(value) * (period === "month" ? 12 : 1);
  // Switching keeps the same income: the amounts are converted, not reinterpreted.
  function switchTo(next: "year" | "month") {
    if (next === period) return;
    const factor = next === "month" ? 1 / 12 : 12;
    const conv = (value: string) => String(Math.round(num(value) * factor));
    setV((s) => ({ ...s, takeHome: conv(s.takeHome), costs: conv(s.costs) }));
    setPeriod(next);
  }
  const r = hourlyRate({
    takeHome: perYear(v.takeHome),
    taxPercent: num(v.tax),
    costs: perYear(v.costs),
    weeksOff: num(v.weeks),
    billableHours: num(v.hours),
  });
  const m = (n: number, digits = 0) => money(n, currency, l.intl, digits);

  return (
    <InvoicePaper highlight edge="perforated" className="p-6 sm:p-8">
      <PaperLabel>{t.label}</PaperLabel>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <div
          role="radiogroup"
          aria-label={t.periodAria}
          className="bg-tint ring-line inline-grid grid-cols-2 gap-1 rounded-xl p-1 ring-1"
        >
          {(
            [
              ["month", t.perMonth],
              ["year", t.perYear],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={period === key}
              onClick={() => switchTo(key)}
              className={cx(
                "text-small focus-visible:focus-ring rounded-lg px-4 py-1.5 font-bold transition-colors",
                period === key ? "bg-surface text-ink shadow-soft" : "text-muted hover:text-ink",
              )}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="w-40">
          <CurrencySelect value={currency} onChange={setCurrency} label={l.currencyLabel} />
        </div>
      </div>

      <Group n={1} title={t.earnTitle}>
        <Field id={ids.takeHome} label={t.takeHome} hint={t.takeHomeHint}>
          <NumberInput id={ids.takeHome} value={v.takeHome} onChange={set("takeHome")} />
        </Field>
      </Group>
      <Group n={2} title={t.payTitle}>
        <Field id={ids.tax} label={t.tax} hint={t.taxHint}>
          <NumberInput id={ids.tax} suffix="%" value={v.tax} onChange={set("tax")} />
        </Field>
        <Field id={ids.costs} label={t.costs} hint={t.costsHint}>
          <NumberInput id={ids.costs} value={v.costs} onChange={set("costs")} />
        </Field>
      </Group>
      <Group n={3} title={t.billTitle}>
        <Field id={ids.weeks} label={t.weeks} hint={t.weeksHint}>
          <NumberInput id={ids.weeks} value={v.weeks} onChange={set("weeks")} />
        </Field>
        <Field id={ids.hours} label={t.hours} hint={t.hoursHint}>
          <NumberInput id={ids.hours} value={v.hours} onChange={set("hours")} />
        </Field>
      </Group>

      <div className="mt-7" aria-live="polite">
        {r ? (
          <div className="bg-brand-50 ring-brand-200 rounded-2xl p-5 ring-1">
            <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
              <div>
                <p className="text-small text-muted">{t.total}</p>
                <p className="font-heading text-ink text-h2 tabular-nums">{m(r.hourly, 2)}</p>
              </div>
              <div className="text-right">
                <p className="text-small text-muted">{t.day}</p>
                <p className="text-ink text-h4 font-bold tabular-nums">{m(r.daily)}</p>
              </div>
            </div>
            <div className="border-brand-200 mt-4 border-t pt-4">
              <p className="text-small text-ink font-bold">{t.stepsTitle}</p>
              <ol className="text-small text-muted mt-2 list-decimal space-y-1.5 pl-5">
                <li>
                  {fmt(t.step1, {
                    takeHome: m(perYear(v.takeHome)),
                    beforeTax: m(r.beforeTax),
                    tax: num(v.tax).toLocaleString(l.intl),
                  })}
                </li>
                <li>
                  {fmt(t.step2, {
                    costs: m(perYear(v.costs)),
                    revenue: m(r.revenue),
                    perMonth: m(r.perMonth),
                  })}
                </li>
                <li>
                  {fmt(t.step3, {
                    weeks: (52 - Math.min(num(v.weeks), 52)).toLocaleString(l.intl),
                    hours: num(v.hours).toLocaleString(l.intl),
                    billable: r.billableHoursPerYear.toLocaleString(l.intl),
                  })}
                </li>
                <li>
                  {fmt(t.step4, {
                    revenue: m(r.revenue),
                    billable: r.billableHoursPerYear.toLocaleString(l.intl),
                    hourly: m(r.hourly, 2),
                  })}
                </li>
              </ol>
            </div>
            <p className="text-small text-subtle mt-4">{t.note}</p>
          </div>
        ) : (
          <p className="text-small text-muted bg-tint rounded-2xl p-5">{t.invalid}</p>
        )}
      </div>
      {r && (
        <GeneratorLink
          text={t.cta}
          href={prefill(
            { ...l, currency },
            { item: t.invoiceItem, qty: 1, price: r.hourly, from: "rate" },
          )}
        />
      )}
    </InvoicePaper>
  );
}
