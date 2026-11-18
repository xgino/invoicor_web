import { expect, test } from "@playwright/test";
import { trackAnalytics } from "./helpers";

/** Android coming soon (ROADMAP 35d): the button leads to /android, which counts the visit. */
test.beforeEach(async ({ page }) => {
  await trackAnalytics(page);
  await page.addInitScript(() => localStorage.setItem("invoicor-consent-v1", "denied"));
});

test("the Android button opens the page, which shows the count", async ({ page }) => {
  const calls: string[] = [];
  await page.route(/abacus\.jasoncameron\.dev\/(hit|get)\/invoicor-web\/android-page$/, (route) => {
    calls.push(route.request().url());
    return route.fulfill({ contentType: "application/json", body: '{"value":1284}' });
  });
  await page.goto("/");
  await page
    .getByRole("contentinfo")
    .getByRole("link", { name: /Android/ })
    .click();
  await expect(page).toHaveURL(/\/android$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Android");
  await expect(page.getByText("1,284")).toBeVisible();
  await expect(page.getByText("visits to this page so far")).toBeVisible();
  // One call per visit; a test browser only reads (navigator.webdriver), so tests never add visits.
  expect(calls).toHaveLength(1);
  expect(calls[0]).toContain("/get/");
});

test("without the counter service the page still works, just without the number", async ({
  page,
}) => {
  await page.route(/abacus\.jasoncameron\.dev/, (route) => route.abort());
  await page.goto("/android");
  await expect(page.getByRole("link", { name: /Make an invoice in your browser/ })).toBeVisible();
  await expect(page.getByText("visits to this page so far")).toHaveCount(0);
});
