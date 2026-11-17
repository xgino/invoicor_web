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
