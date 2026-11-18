import { expect, test } from "@playwright/test";
import { PAGE_TYPES, axeViolations, trackAnalytics } from "./helpers";

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
    // Reduced motion: measure final colors, not text that is still fading in.
    await page.emulateMedia({ reducedMotion: "reduce" });
    // Block the live API so the page is checked in its worst case (no template previews), the
    // same locally and in CI. A difference here once hid a failure that only CI saw.
    await page.route(/invoicor\.com\/api\//, (route) => route.abort());
    await trackAnalytics(page);
    await page.goto(path);
    const violations = await axeViolations(page);
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
