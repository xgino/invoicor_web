/**
 * The math behind the free tools (/tools). Pure functions, unit-tested
 * (tests/unit/tools.test.ts), so the pages can't show a wrong number.
 * Money is rounded half up to cents, like the app.
 */
export const cents = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100;

/** A positive, finite number from user input ("1,5" → 1.5); anything else → 0. */
export function num(value: string | number): number {
  const n =
    typeof value === "number" ? value : Number(String(value).replace(/\s/g, "").replace(",", "."));
  return Number.isFinite(n) && n > 0 ? n : 0;
}

// ── VAT ──────────────────────────────────────────────────────────────────────

export interface VatResult {
  net: number;
  vat: number;
  gross: number;
}

/** "add": the amount is without VAT. "remove": the amount already includes VAT. */
export function vat(amount: number, ratePercent: number, mode: "add" | "remove"): VatResult {
  const r = ratePercent / 100;
  if (mode === "add") {
    const v = cents(amount * r);
    return { net: cents(amount), vat: v, gross: cents(amount + v) };
  }
  const net = cents(amount / (1 + r));
  return { net, vat: cents(amount - net), gross: cents(amount) };
}

/**
 * Standard VAT/GST rates, November 2026. Reduced rates differ per product; the tool says so.
 * Check before changing: these are shown on a page that people rely on.
 */
export const STANDARD_RATES: Array<{ country: string; rate: number }> = [
  { country: "Austria", rate: 20 },
  { country: "Belgium", rate: 21 },
  { country: "Denmark", rate: 25 },
  { country: "Finland", rate: 25.5 },
  { country: "France", rate: 20 },
  { country: "Germany", rate: 19 },
  { country: "Ireland", rate: 23 },
  { country: "Italy", rate: 22 },
  { country: "Netherlands", rate: 21 },
  { country: "Norway", rate: 25 },
  { country: "Poland", rate: 23 },
  { country: "Portugal", rate: 23 },
  { country: "Spain", rate: 21 },
  { country: "Sweden", rate: 25 },
  { country: "Switzerland", rate: 8.1 },
  { country: "United Kingdom", rate: 20 },
  { country: "Australia (GST)", rate: 10 },
  { country: "Canada (GST)", rate: 5 },
  { country: "New Zealand (GST)", rate: 15 },
];

// ── Hours ────────────────────────────────────────────────────────────────────

/** "09:30" → 570 minutes; invalid → null. */
export function parseTime(value: string): number | null {
  const m = value.trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  const h = Number(m[1]);
  const min = Number(m[2]);
  return h < 24 && min < 60 ? h * 60 + min : null;
}

/** Minutes worked between start and end, minus the break. Past midnight counts as overnight. */
export function shiftMinutes(start: string, end: string, breakMinutes: number): number {
  const s = parseTime(start);
  const e = parseTime(end);
  if (s === null || e === null) return 0;
  const span = e >= s ? e - s : e + 24 * 60 - s;
  return Math.max(0, span - Math.max(0, Math.round(breakMinutes)));
}

/** 105 → "1:45". */
export function hhmm(minutes: number): string {
  const m = Math.max(0, Math.round(minutes));
  return `${Math.floor(m / 60)}:${String(m % 60).padStart(2, "0")}`;
}

/** 105 → 1.75 (the number to put on an invoice line). */
export const decimalHours = (minutes: number) => Math.round((minutes / 60) * 100) / 100;

/** "1:45" or "1.75" or "1,75" → minutes; invalid → null. */
export function parseDuration(value: string): number | null {
  const v = value.trim();
  const clock = v.match(/^(\d+):([0-5]\d)$/);
  if (clock) return Number(clock[1]) * 60 + Number(clock[2]);
  const n = Number(v.replace(",", "."));
  return v !== "" && Number.isFinite(n) && n >= 0 ? Math.round(n * 60) : null;
}

// ── Hourly rate ──────────────────────────────────────────────────────────────

export interface RateInput {
  /** What you want to keep per year, after income tax. */
  takeHome: number;
  /** Share of profit set aside for income tax and social contributions, in %. */
  taxPercent: number;
  /** Business costs per year: insurance, software, equipment, accountant… */
  costs: number;
  /** Weeks a year you don't bill: holidays, sick days, quiet periods. */
  weeksOff: number;
  /** Hours a week you can actually bill (not admin, travel or sales). */
  billableHours: number;
}

export interface RateResult {
  hourly: number;
  daily: number;
  /** Profit before tax you need. */
  beforeTax: number;
  /** Total you need to invoice per year (profit before tax + costs). */
  revenue: number;
  billableHoursPerYear: number;
  perMonth: number;
}

export function hourlyRate(i: RateInput): RateResult | null {
  const tax = Math.min(Math.max(i.taxPercent, 0), 90) / 100;
  const weeks = Math.max(0, 52 - Math.min(Math.max(i.weeksOff, 0), 52));
  const hours = weeks * Math.max(0, i.billableHours);
  if (hours <= 0) return null;
  const beforeTax = i.takeHome / (1 - tax);
  const revenue = beforeTax + Math.max(0, i.costs);
  const hourly = revenue / hours;
  return {
    hourly: cents(hourly),
    daily: cents(hourly * 8),
    beforeTax: cents(beforeTax),
    revenue: cents(revenue),
    billableHoursPerYear: hours,
    perMonth: cents(revenue / 12),
  };
}
