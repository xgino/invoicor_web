import { expect, test } from "@playwright/test";
import { trackAnalytics } from "./helpers";

/** The free tools (ROADMAP T1): the hub and each calculator's main result. */
test.beforeEach(async ({ page }) => {
  await trackAnalytics(page);
  await page.addInitScript(() => localStorage.setItem("invoicor-consent-v1", "denied"));
});

test("the hub lists every tool, generator first", async ({ page }) => {
  await page.goto("/tools");
  const links = page.locator("main ul").first().getByRole("link");
  await expect(links.first()).toContainText("Free invoice generator");
  await expect(links).toHaveCount(4);
});

test("VAT calculator adds and removes VAT", async ({ page }) => {
  await page.goto("/tools/vat-calculator");
  await page.getByLabel("Amount without VAT").fill("478.50");
  await page.getByLabel("Country (standard rate)").selectOption("Germany");
  await expect(page.getByText("€569.42")).toBeVisible();
  await page.getByRole("radio", { name: /Remove VAT/ }).click();
  await page.getByLabel("Amount including VAT").fill("121");
  await page.getByLabel("Country (standard rate)").selectOption("Netherlands");
  await expect(page.getByText("€100.00").first()).toBeVisible();
});

test("hours calculator totals a week and converts to decimal", async ({ page }) => {
  await page.goto("/tools/hours-calculator");
  // 5 default days of 09:00–17:00 with a 30-minute break = 37:30
  await expect(page.getByText("37:30")).toBeVisible();
  await expect(page.getByText("37.50").first()).toBeVisible();
  await page.getByLabel("Time (1:45) or decimal (1.75)").fill("1:45");
  await expect(page.getByText("1:45 = 1.75 hours")).toBeVisible();
});

test("hourly rate calculator shows the minimum rate", async ({ page }) => {
  await page.goto("/tools/hourly-rate-calculator");
  await page.getByLabel(/Tax and social contributions/).fill("25");
  // 48,000 / 0.75 + 6,000 = 70,000 over 44 × 25 h = 63.64
  await expect(page.getByText("$63.64")).toBeVisible();
});
