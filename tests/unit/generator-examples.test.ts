import { describe, expect, it } from "vitest";
import { firstNumber } from "@/lib/generator/examples";

describe("firstNumber (template samples → generator lines)", () => {
  it("reads plain amounts, quantities with units and nothing", () => {
    expect(firstNumber("$2,800.00")).toBe(2800);
    expect(firstNumber("1.5 hrs")).toBe(1.5);
    expect(firstNumber("£6.50")).toBe(6.5);
    expect(firstNumber("Included")).toBeNull();
  });

  it("keeps a minus before the currency sign, so credits stay negative", () => {
    expect(firstNumber("-$4,500.00")).toBe(-4500);
    expect(firstNumber("-€65.00")).toBe(-65);
    expect(firstNumber("−$65.00")).toBe(-65);
    expect(firstNumber("-65")).toBe(-65);
  });

  it("reads the German number format (dot for thousands, comma for decimals)", () => {
    expect(firstNumber("1.200,00 €")).toBe(1200);
    expect(firstNumber("-1.200,00 €")).toBe(-1200);
    expect(firstNumber("85,00 €")).toBe(85);
    expect(firstNumber("1,5 Std.")).toBe(1.5);
    expect(firstNumber("12.345,67 €")).toBe(12345.67);
    expect(firstNumber("3 Std.")).toBe(3);
  });

  it("reads Dutch amounts with the minus before or after the euro sign", () => {
    expect(firstNumber("€ 1.234,56")).toBe(1234.56);
    expect(firstNumber("-€ 1.200,00")).toBe(-1200);
    expect(firstNumber("€ -45,50")).toBe(-45.5);
    expect(firstNumber("3 uur")).toBe(3);
  });

  it("doesn't take a hyphen in words for a minus", () => {
    expect(firstNumber("Net-30 terms, 2 visits")).toBe(30);
    expect(firstNumber("Day-rate 450")).toBe(450);
  });
});
