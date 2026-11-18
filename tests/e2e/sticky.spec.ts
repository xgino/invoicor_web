import { expect, test } from "@playwright/test";
import { trackAnalytics } from "./helpers";

// ROADMAP P16: the sticky "Get the app" bar on phones.
test("phones: the bar appears after the first screen and hides at the footer", async ({
  page,
  isMobile,
}) => {
  test.skip(!isMobile, "phones only");
  await trackAnalytics(page);
  await page.addInitScript(() => localStorage.setItem("invoicor-consent-v1", "denied"));
  await page.goto("/");
  const link = page.locator('a[data-track-section="sticky_mobile"]');
  const bar = link.locator("xpath=ancestor::div[contains(@class,'fixed')][1]");

  await expect(bar).toHaveAttribute("aria-hidden", "true");
  await page.locator("#who-title").scrollIntoViewIfNeeded();
  await expect(bar).toHaveAttribute("aria-hidden", "false");
  await expect(link).toBeInViewport();

  await page.locator("footer").scrollIntoViewIfNeeded();
  await expect(bar).toHaveAttribute("aria-hidden", "true");
});

test("phones: the bar waits while the cookie banner is open", async ({ page, isMobile }) => {
  test.skip(!isMobile, "phones only");
  await trackAnalytics(page);
  await page.goto("/");
  await page.locator("#who-title").scrollIntoViewIfNeeded();
  const bar = page
    .locator('a[data-track-section="sticky_mobile"]')
    .locator("xpath=ancestor::div[contains(@class,'fixed')][1]");
  await expect(bar).toHaveAttribute("aria-hidden", "true");
});
