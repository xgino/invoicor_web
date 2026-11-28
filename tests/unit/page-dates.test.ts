import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { type PageDates, today } from "@/lib/page-dates";
import { pageSources, updateDates } from "@/lib/page-sources";

/**
 * content/page-dates.json: every page's date, from the last change to its own text.
 * `npm run dates` (UPDATE_PAGE_DATES=1) writes it, and runs before every commit; otherwise this
 * test fails when a row is missing, stale or left over, so the sitemaps' dates can't lag behind.
 */
const FILE = join(process.cwd(), "content/page-dates.json");
const read = (): PageDates => JSON.parse(readFileSync(FILE, "utf8")) as PageDates;

describe("page dates (content/page-dates.json)", () => {
  const sources = pageSources();

  if (process.env.UPDATE_PAGE_DATES) {
    it("updates the dates", () => {
      // The first fill can take each page's date from its history (PAGE_DATES_SEED, a JSON file).
      const seed = process.env.PAGE_DATES_SEED
        ? (JSON.parse(readFileSync(process.env.PAGE_DATES_SEED, "utf8")) as Record<string, string>)
        : {};
      const { next, changed, added, removed } = updateDates(read(), sources, today(), seed);
      writeFileSync(FILE, JSON.stringify(next, null, 2) + "\n");
      const list = (label: string, a: string[]) =>
        a.length
          ? `${label} ${a.length}: ${a.slice(0, 12).join(", ")}${a.length > 12 ? " …" : ""}`
          : "";
      console.log(
        [list("changed", changed), list("new", added), list("removed", removed)]
          .filter(Boolean)
          .join("\n") || "page dates: nothing changed",
      );
    });
    return;
  }

  it("has a current date for every page in the sitemaps", () => {
    const { changed, added, removed } = updateDates(read(), sources, today());
    const stale = [
      ...added.map((p) => `new: ${p}`),
      ...changed.map((p) => `text changed: ${p}`),
      ...removed.map((p) => `gone: ${p}`),
    ];
    expect(stale, "run: npm run dates (it also runs before every commit)").toEqual([]);
  });

  it("dates are real days, none in the future", () => {
    for (const [path, d] of Object.entries(read())) {
      expect(d.updated, path).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(d.updated <= today(), path).toBe(true);
    }
  });
});
