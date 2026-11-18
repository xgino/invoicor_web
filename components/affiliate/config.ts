import { PAID_PLANS, PRICING } from "@/lib/pricing";

/** Affiliate program settings. Prices come from content/pricing.json. */
export const AFFILIATE = {
  commission: 20,
  /** Monthly subscription prices used by the earnings calculator. */
  plans: PAID_PLANS.map((p) => ({ name: p.name, price: p.monthly })),
  currency: PRICING.currency,
  /** Payouts (GoMarketMe): day of month, methods, minimum. */
  payoutDay: 30,
  payoutMethods: "PayPal or Wise",
  minimumPayout: "EUR 25",
};
