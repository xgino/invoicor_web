/**
 * The real App Store prices, from content/pricing.json (decision D1 in ROADMAP.md).
 * Every page that shows a price or a trial reads it from here: home pricing, structured data,
 * the affiliate calculator and the compare pages. Change prices in the JSON only.
 */
import { z } from "zod";
import pricingJson from "@/content/pricing.json";

const planSchema = z.object({
  id: z.enum(["free", "starter", "pro"]),
  name: z.string().min(1),
  description: z.string().min(1),
  monthly: z.number().min(0),
  yearly: z.number().min(0),
  popular: z.boolean().default(false),
  features: z.array(z.string().min(1)).min(1),
});

const pricingSchema = z.object({
  currency: z.string().length(3),
  symbol: z.string().min(1),
  trial_days: z.object({ monthly: z.number().int().min(0), yearly: z.number().int().min(0) }),
  plans: z.array(planSchema).min(1),
});

const parsed = pricingSchema.safeParse(pricingJson);
if (!parsed.success) {
  throw new Error(`content/pricing.json is invalid:\n${z.prettifyError(parsed.error)}`);
}

export type Plan = z.infer<typeof planSchema>;
export const PRICING = parsed.data;
export const PLANS = PRICING.plans;
export const PAID_PLANS = PLANS.filter((p) => p.monthly > 0);

export function getPlan(id: Plan["id"]): Plan {
  const plan = PLANS.find((p) => p.id === id);
  if (!plan) throw new Error(`content/pricing.json has no "${id}" plan`);
  return plan;
}

/** "$4.99" (or "$0" for free). */
export function formatPrice(amount: number): string {
  return `${PRICING.symbol}${Number.isInteger(amount) ? amount : amount.toFixed(2)}`;
}

/** "3-day free trial, then $4.99/month. Cancel anytime." */
export function trialNote(plan: Plan, period: "monthly" | "yearly"): string {
  const days = PRICING.trial_days[period];
  const price = formatPrice(plan[period]);
  const unit = period === "monthly" ? "month" : "year";
  return `${days}-day free trial, then ${price}/${unit}. Cancel anytime.`;
}

/** Cheapest paid monthly price, e.g. "$4.99". */
export const STARTING_PRICE = formatPrice(Math.min(...PAID_PLANS.map((p) => p.monthly)));

/** Number of free invoices, read from the free plan's first feature ("3 invoices (lifetime)"). */
export const FREE_INVOICES = Number(getPlan("free").features[0]?.match(/\d+/)?.[0] ?? 3);

/**
 * What yearly saves against 12 monthly payments, from the real prices (never typed by hand):
 * Starter $59.88 vs $49.99 → saves $9.89, 16%, 2 months (1.98, rounded).
 */
export function yearlySaving(plan: Plan) {
  const twelveMonths = Math.round(plan.monthly * 12 * 100) / 100;
  const amount = Math.round((twelveMonths - plan.yearly) * 100) / 100;
  return {
    twelveMonths,
    amount,
    percent: Math.floor((amount / twelveMonths) * 100),
    months: Math.round(amount / plan.monthly),
    perMonth: Math.round((plan.yearly / 12) * 100) / 100,
  };
}

/** The smallest saving across paid plans, so a shared "save X%" label is true for every plan. */
export const YEARLY_SAVING_PERCENT = Math.min(...PAID_PLANS.map((p) => yearlySaving(p).percent));
export const YEARLY_MONTHS_FREE = Math.min(...PAID_PLANS.map((p) => yearlySaving(p).months));
