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

  it("doesn't take a hyphen in words for a minus", () => {
    expect(firstNumber("Net-30 terms, 2 visits")).toBe(30);
    expect(firstNumber("Day-rate 450")).toBe(450);
  });
});
