import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { type FillData, fillHtml, formatDate } from "@/lib/generator/fill";

/**
 * The browser fill must match the API's fill exactly, so the live preview looks like the PDF.
 * Fixtures come from the real API code (scripts/sync-generator-templates.py).
 */
const data = JSON.parse(readFileSync("public/generator/data.json", "utf8")) as FillData;
const fixtures = JSON.parse(readFileSync("tests/fixtures/generator-parity.json", "utf8")) as {
  payload: Parameters<typeof fillHtml>[1];
  html: string;
}[];
const template = (slug: string) =>
  (JSON.parse(readFileSync(`public/generator/templates/${slug}.json`, "utf8")) as { html: string })
    .html;

describe("browser fill matches the API", () => {
  for (const f of fixtures) {
    it(`${f.payload.template_slug} · ${f.payload.language} · ${f.payload.currency}`, () => {
      const html = fillHtml(template(f.payload.template_slug), f.payload, data);
      // We also escape quotes (safe in attributes); the browser renders both the same.
      expect(html.replaceAll("&quot;", '"')).toBe(f.html);
    });
  }

  it("has every free template and language", () => {
    expect(data.templates).toHaveLength(21);
    expect(Object.keys(data.labels)).toHaveLength(11);
  });

  it("escapes what people type and ignores a bad logo", () => {
    const p = { ...fixtures[0]!.payload };
    p.sender = { ...p.sender, company_name: '<img src=x onerror="alert(1)">', logo: 'x" onload="' };
    const html = fillHtml(template("classic"), p, data);
    expect(html).not.toContain("<img src=x");
    expect(html).not.toContain('onload="');
  });

  it("formats dates like the API", () => {
    expect(formatDate("2026-03-05", "D MMM YYYY")).toBe("5 Mar 2026");
    expect(formatDate("2026-03-05", "MMM D, YYYY")).toBe("Mar 5, 2026");
    expect(formatDate("2026-03-05", "DD/MM/YYYY")).toBe("05/03/2026");
  });
});
