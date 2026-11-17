import { expect, test } from "@playwright/test";
import { PAGE_TYPES, axeViolations, trackAnalytics } from "./helpers";

/**
 * Pages still on the old design (before the Stage E rebuild). Their accessibility issues are
 * recorded as a test annotation instead of failing the run; every other page must pass. Each
 * Stage E chunk removes its pages from this list. The list may only shrink.
 */
const NOT_REBUILT_YET = new Set<string>([
  "home",
  "template",
  "industries hub",
  "industry",
  "compare",
  "help",
  "affiliate",
  "privacy",
  "terms",
]);

for (const [name, path] of Object.entries(PAGE_TYPES)) {
  test(`${name} (${path}) loads without errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await trackAnalytics(page);
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    expect(errors).toEqual([]);
  });

  test(`${name} (${path}) has no serious accessibility issues`, async ({ page }) => {
    await trackAnalytics(page);
    await page.goto(path);
    const violations = await axeViolations(page);
    if (NOT_REBUILT_YET.has(name)) {
      test.info().annotations.push({
        type: "not rebuilt yet",
        description: violations.map((v) => `${v.id}: ${v.targets.join(", ")}`).join(" | "),
      });
      return;
    }
    expect(violations).toEqual([]);
  });
}

test("unknown URLs return a real 404 with the branded page", async ({ page }) => {
  const response = await page.goto("/this-page-does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.locator("h1")).toHaveCount(1);
});

test("trailing slashes redirect to the canonical URL", async ({ page }) => {
  await page.goto("/templates/plumbing/");
  expect(new URL(page.url()).pathname).toBe("/templates/plumbing");
});
