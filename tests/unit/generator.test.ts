import { describe, expect, it } from "vitest";
import { MAX_ITEMS, newDraft, toNumber, toPayload } from "@/lib/generator/draft";
import { computeTotals, formatMoney } from "@/lib/generator/totals";

function draftWith(items: Array<[string, string, string]>, patch = {}) {
  const d = newDraft(new Date("2026-11-18T12:00:00Z"));
  d.items = items.map(([name, quantity, unit_price], i) => ({
    id: String(i),
    name,
    description: "",
    quantity,
    unit_price,
  }));
  return { ...d, ...patch };
}

describe("generator totals (same math as the API and app)", () => {
  it("adds items, then tax on top", () => {
    const d = draftWith(
      [
        ["Call-out", "1", "95"],
        ["Labor", "2", "85"],
        ["Faucet", "1", "213.50"],
      ],
      { tax_rate: "8" },
    );
    expect(computeTotals(d)).toEqual({ subtotal: 478.5, discount: 0, tax: 38.28, total: 516.78 });
  });

  it("applies a percent discount before tax", () => {
    const d = draftWith([["Design", "1", "1000"]], {
      tax_rate: "21",
      discount_type: "percent",
      discount_value: "10",
    });
    expect(computeTotals(d)).toEqual({ subtotal: 1000, discount: 100, tax: 189, total: 1089 });
  });

  it("never discounts more than the subtotal and handles tax included", () => {
    const fixed = draftWith([["A", "1", "50"]], { discount_type: "fixed", discount_value: "80" });
    expect(computeTotals(fixed).total).toBe(0);
    const incl = draftWith([["A", "1", "121"]], { tax_rate: "21", tax_inclusive: true });
    expect(computeTotals(incl)).toEqual({ subtotal: 121, discount: 0, tax: 21, total: 121 });
  });

  it("ignores empty rows and reads comma decimals", () => {
    const d = draftWith([
      ["Hours", "1,5", "40"],
      ["", "3", "100"],
    ]);
    expect(computeTotals(d).total).toBe(60);
    expect(toNumber("1,5")).toBe(1.5);
    expect(toNumber("abc")).toBe(0);
  });

  it("formats money in the chosen currency", () => {
    expect(formatMoney(1234.5, "USD")).toBe("$1,234.50");
    expect(formatMoney(10, "EUR")).toBe("€10.00");
  });
});

describe("generator payload", () => {
  it("matches the API shape and clamps values", () => {
    const p = toPayload(
      draftWith([["A", "2", "9.999"]], { tax_rate: "150", discount_value: "-5" }),
    );
    expect(p.items).toEqual([
      { name: "A", description: "", quantity: "2.00", unit_price: "10.00" },
    ]);
    expect(p.tax_rate).toBe("100.00");
    expect(p.discount_value).toBe("0.00");
    expect(p.template_slug).toBe("classic");
  });

  it("sends a placeholder line for an empty preview", () => {
    expect(toPayload(draftWith([["", "1", ""]])).items).toHaveLength(1);
  });

  it("allows at most the free plan's items", () => {
    expect(MAX_ITEMS).toBe(10);
  });
});
