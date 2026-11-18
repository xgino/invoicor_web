import { describe, expect, it } from "vitest";
import {
  decimalHours,
  hhmm,
  hourlyRate,
  parseDuration,
  shiftMinutes,
  STANDARD_RATES,
  vat,
} from "@/lib/tools/math";

describe("VAT calculator", () => {
  it("adds VAT to a net amount", () => {
    expect(vat(100, 21, "add")).toEqual({ net: 100, vat: 21, gross: 121 });
    expect(vat(478.5, 19, "add")).toEqual({ net: 478.5, vat: 90.92, gross: 569.42 });
  });
  it("takes VAT out of a gross amount", () => {
    expect(vat(121, 21, "remove")).toEqual({ net: 100, vat: 21, gross: 121 });
    expect(vat(100, 20, "remove")).toEqual({ net: 83.33, vat: 16.67, gross: 100 });
  });
  it("net + VAT always equals gross", () => {
    for (const { rate } of STANDARD_RATES)
      for (const amount of [1, 9.99, 123.45, 10000]) {
        const r = vat(amount, rate, "remove");
        expect(Math.round((r.net + r.vat) * 100) / 100).toBe(r.gross);
      }
  });
});

describe("hours calculator", () => {
  it("counts a day minus the break", () => {
    expect(shiftMinutes("09:00", "17:30", 30)).toBe(480);
    expect(hhmm(480)).toBe("8:00");
  });
  it("handles shifts past midnight and bad input", () => {
    expect(shiftMinutes("22:00", "02:00", 0)).toBe(240);
    expect(shiftMinutes("9", "17:00", 0)).toBe(0);
    expect(shiftMinutes("09:00", "09:30", 60)).toBe(0);
  });
  it("converts between 1:45 and 1.75", () => {
    expect(decimalHours(105)).toBe(1.75);
    expect(parseDuration("1:45")).toBe(105);
    expect(parseDuration("1,75")).toBe(105);
    expect(parseDuration("abc")).toBeNull();
  });
});

describe("hourly rate calculator", () => {
  it("works back from take-home income", () => {
    const r = hourlyRate({
      takeHome: 48000,
      taxPercent: 25,
      costs: 6000,
      weeksOff: 8,
      billableHours: 25,
    })!;
    // 48,000 / 0.75 = 64,000 before tax; + 6,000 costs = 70,000; 44 weeks × 25 h = 1,100 h
    expect(r.beforeTax).toBe(64000);
    expect(r.revenue).toBe(70000);
    expect(r.billableHoursPerYear).toBe(1100);
    expect(r.hourly).toBe(63.64);
    expect(r.daily).toBe(509.09);
  });
  it("returns null when there are no billable hours", () => {
    expect(
      hourlyRate({ takeHome: 1, taxPercent: 0, costs: 0, weeksOff: 52, billableHours: 40 }),
    ).toBeNull();
  });
});
