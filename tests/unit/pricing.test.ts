import { describe, expect, it } from "vitest";
import {
  FREE_INVOICES,
  PAID_PLANS,
  PLANS,
  STARTING_PRICE,
  formatPrice,
  getPlan,
  trialNote,
} from "@/lib/pricing";

// The App Store is the source of truth (decision D1). If prices change there, change
// content/pricing.json and these expectations together.
describe("pricing", () => {
  it("has exactly the plans the app sells", () => {
    expect(PLANS.map((p) => p.id)).toEqual(["free", "starter", "pro"]);
    expect(PAID_PLANS.map((p) => p.id)).toEqual(["starter", "pro"]);
  });

  it("matches the App Store prices", () => {
    expect([getPlan("starter").monthly, getPlan("starter").yearly]).toEqual([4.99, 49.99]);
    expect([getPlan("pro").monthly, getPlan("pro").yearly]).toEqual([7.99, 79.99]);
    expect(STARTING_PRICE).toBe("$4.99");
    expect(FREE_INVOICES).toBe(3);
  });

  it("formats prices and trial notes", () => {
    expect(formatPrice(0)).toBe("$0");
    expect(formatPrice(4.99)).toBe("$4.99");
    expect(trialNote(getPlan("starter"), "monthly")).toBe(
      "3-day free trial, then $4.99/month. Cancel anytime.",
    );
    expect(trialNote(getPlan("pro"), "yearly")).toBe(
      "7-day free trial, then $79.99/year. Cancel anytime.",
    );
  });

  it("never claims 'unlimited invoices' (BRAND.md §10)", () => {
    for (const plan of PLANS) {
      for (const feature of plan.features) expect(feature).not.toMatch(/unlimited invoices/i);
    }
  });

  it("makes yearly cheaper than 12 monthly payments", () => {
    for (const plan of PAID_PLANS) expect(plan.yearly).toBeLessThan(plan.monthly * 12);
  });
});
