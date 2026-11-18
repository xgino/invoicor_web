import { expect, test, type Page } from "@playwright/test";
import { trackAnalytics } from "./helpers";

/**
 * Languages (ROADMAP Stage H): separate URLs per language, hreflang, the switcher, and the one-time
 * automatic switch. Test browsers report navigator.webdriver, which the auto-switch skips on
 * purpose (like search engines), so these tests pretend to be a normal browser where needed.
 */
async function asRealBrowser(page: Page) {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "webdriver", { get: () => false });
    localStorage.setItem("invoicor-consent-v1", "denied");
  });
}

/** A normal desktop Chrome identity (headless test browsers say "HeadlessChrome", which is skipped). */
const CHROME_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36";

test.describe("German browser", () => {
  test.use({ locale: "de-DE", userAgent: CHROME_UA });

  test("switches to the German page once, then never again", async ({ page }) => {
    await trackAnalytics(page);
    await asRealBrowser(page);
    await page.goto("/android");
    await expect(page).toHaveURL(/\/de\/android$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "de");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Invoicor für Android ist unterwegs.",
    );
    // Second visit: the choice is remembered, no automatic switch.
    await page.goto("/android");
    await expect(page).toHaveURL(/\/android$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
  });

  test("the switcher wins over the browser language", async ({ page }) => {
    await trackAnalytics(page);
    await asRealBrowser(page);
    await page.goto("/de/android");
    await page.getByRole("contentinfo").getByRole("link", { name: "Français" }).click();
    await expect(page).toHaveURL(/\/fr\/android$/);
    await page.goto("/android");
    await expect(page).toHaveURL(/\/android$/); // no switch back to German
  });

  test("search engines and test browsers are never redirected", async ({ page }) => {
    await trackAnalytics(page);
    await page.goto("/android"); // navigator.webdriver = true here
    await expect(page).toHaveURL(/\/android$/);
  });
});

test.describe("English browser", () => {
  test.use({ locale: "en-US", userAgent: CHROME_UA });

  test("stays on English and keeps hreflang for every language", async ({ page }) => {
    await trackAnalytics(page);
    await asRealBrowser(page);
    await page.goto("/android");
    await expect(page).toHaveURL(/\/android$/);
    const langs = await page
      .locator('link[rel="alternate"][hreflang]')
      .evaluateAll((els) => els.map((e) => e.getAttribute("hreflang")));
    expect(langs).toEqual([
      "en",
      "nl",
      "de",
      "fr",
      "es",
      "it",
      "pt",
      "pl",
      "sv",
      "da",
      "nb",
      "x-default",
    ]);
  });

  test("the navbar switcher lists languages in their own names", async ({ page, isMobile }) => {
    test.skip(isMobile, "desktop navbar");
    await trackAnalytics(page);
    await page.addInitScript(() => localStorage.setItem("invoicor-consent-v1", "denied"));
    await page.goto("/android");
    await page.getByRole("button", { name: /Language: English/ }).click();
    await page.getByRole("banner").getByRole("link", { name: "Nederlands" }).click();
    await expect(page).toHaveURL(/\/nl\/android$/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Invoicor voor Android komt eraan.",
    );
  });
});
