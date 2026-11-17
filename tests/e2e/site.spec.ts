import { expect, test } from "@playwright/test";
import { PAGE_TYPES, axeViolations, trackAnalytics } from "./helpers";

/**
 * Pages still on the old design (before the Stage E rebuild). Their accessibility test is
 * expected to fail; once a page is rebuilt and passes, Playwright reports it as "unexpectedly
 * passed" and it must be removed from this list. The list may only shrink.
 */
const NOT_REBUILT_YET = new Set<string>([
  "home",
  "templates hub",
  "template",
  "industries hub",
  "industry",
  "compare hub",
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
    test.fail(NOT_REBUILT_YET.has(name), "old design, rebuilt in Stage E");
    await trackAnalytics(page);
    await page.goto(path);
    expect(await axeViolations(page)).toEqual([]);
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
