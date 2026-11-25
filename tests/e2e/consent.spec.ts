import { expect, test } from "@playwright/test";
import { trackAnalytics } from "./helpers";

// Decision D5: nothing that sets cookies loads before "Accept". StatsUp (cookieless, our own
// server) counts every visit, with or without a choice.

test("no analytics before a choice, and none after Decline", async ({ page }) => {
  const attempted = await trackAnalytics(page);
  await page.goto("/");
  const banner = page.getByRole("dialog", { name: /cookies/i });
  await expect(banner).toBeVisible();
  await page.waitForTimeout(500);
  expect(attempted).toEqual([]);

  await banner.getByRole("button", { name: "Decline" }).click();
  await expect(banner).toBeHidden();
  await page.reload();
  await page.waitForTimeout(500);
  await expect(page.getByRole("dialog", { name: /cookies/i })).toBeHidden();
  expect(attempted).toEqual([]);
});

test("Accept loads Google Analytics and PostHog", async ({ page }) => {
  const attempted = await trackAnalytics(page);
  await page.goto("/");
  await page
    .getByRole("dialog", { name: /cookies/i })
    .getByRole("button", { name: "Accept" })
    .click();
  await expect.poll(() => attempted.some((u) => u.includes("googletagmanager.com"))).toBe(true);
  await expect.poll(() => attempted.some((u) => u.includes("posthog.com"))).toBe(true);
});

test("Decline and Accept look the same (no nudging)", async ({ page }) => {
  await trackAnalytics(page);
  await page.goto("/");
  const banner = page.getByRole("dialog", { name: /cookies/i });
  const decline = await banner.getByRole("button", { name: "Decline" }).getAttribute("class");
  const accept = await banner.getByRole("button", { name: "Accept" }).getAttribute("class");
  expect(decline).toBe(accept);
});

test("the footer link re-opens the banner", async ({ page }) => {
  await trackAnalytics(page);
  await page.goto("/");
  await page.getByRole("button", { name: "Decline" }).click();
  await page.getByRole("button", { name: /cookie settings/i }).click();
  await expect(page.getByRole("dialog", { name: /cookies/i })).toBeVisible();
});

test("StatsUp counts every visit, also without a choice or after Decline", async ({ page }) => {
  const attempted = await trackAnalytics(page);
  await page.goto("/");
  await expect.poll(() => attempted.statsup.some((u) => u.includes("/static/tracker/"))).toBe(true);
  expect(attempted).toEqual([]); // still no Google Analytics or PostHog
});

test("after a Decline, the banner comes back after 6 months", async ({ page }) => {
  await trackAnalytics(page);
  const sevenMonthsAgo = Date.now() - 210 * 24 * 60 * 60 * 1000;
  await page.addInitScript(
    (at) => localStorage.setItem("invoicor-consent-v1", `denied:${at}`),
    sevenMonthsAgo,
  );
  await page.goto("/");
  await expect(page.getByRole("dialog", { name: /cookies/i })).toBeVisible();
});
