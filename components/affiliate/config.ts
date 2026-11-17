import { PAID_PLANS, PRICING } from "@/lib/pricing";

/** Affiliate program settings and colors. Prices come from content/pricing.json. */
export const AFFILIATE = {
  commission: 20,
  /** Monthly subscription prices used by the earnings calculator. */
  plans: PAID_PLANS.map((p) => ({ name: p.name, price: p.monthly })),
  currency: PRICING.currency,
  green: "#10b981",
  greenLight: "#ecfdf5",
  greenBorder: "#d1fae5",
  dark: "#0f172a",
  text1: "#1e293b",
  text2: "#475569",
  text3: "#64748b",
  border: "#e2e8f0",
};
