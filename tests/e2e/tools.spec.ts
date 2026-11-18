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
  await page.getByLabel("Country (standard rate)").selectOption("DE");
  await expect(page.getByText("€569.42")).toBeVisible();
  await page.getByRole("radio", { name: /Remove VAT/ }).click();
  await page.getByLabel("Amount including VAT").fill("121");
  await page.getByLabel("Country (standard rate)").selectOption("NL");
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
  await expect(page.getByText("$63.64").first()).toBeVisible();
});

test("in German: own URL, German text, Germany's rate and German number format", async ({
  page,
}) => {
  await page.goto("/de/tools/mehrwertsteuer-rechner");
  await expect(page.locator("html")).toHaveAttribute("lang", "de");
  // Germany is preselected (19 %), 100 net → 119,00 € gross.
  await expect(page.getByLabel("Land (Regelsatz)")).toHaveValue("DE");
  await expect(page.getByLabel("Land (Regelsatz)").locator("option:checked")).toHaveText(
    /Deutschland/,
  );
  await expect(page.getByText("119,00 €")).toBeVisible();
  // The hours calculator writes decimal hours the German way.
  await page.goto("/de/tools/stundenrechner");
  await expect(page.getByText("37,50").first()).toBeVisible();
});

test("every language has its tools hub with 4 tools", async ({ request }) => {
  for (const path of [
    "/nl/tools",
    "/de/tools",
    "/fr/outils",
    "/es/herramientas",
    "/it/strumenti",
    "/pt/ferramentas",
    "/pl/narzedzia",
    "/sv/verktyg",
    "/da/vaerktoejer",
    "/nb/verktoy",
  ]) {
    const res = await request.get(path);
    expect(res.status(), path).toBe(200);
  }
});

test("the hours become a real invoice line in the generator", async ({ page, isMobile }) => {
  await page.route(/\/api\/invoices\/templates\/[^/]+\/preview\/$/, (route) =>
    route.fulfill({ contentType: "text/html", body: "<html><body>template</body></html>" }),
  );
  await page.goto("/tools/hours-calculator");
  await page.getByLabel("Your hourly rate (optional)").fill("60");
  // 37.50 hours × $60.00 = $2,250.00
  await expect(page.getByText("$2,250.00").first()).toBeVisible();
  await page.getByRole("link", { name: "Create an invoice for these hours" }).click();
  await expect(page).toHaveURL(/\/free-invoice-generator$/); // the parameters are removed again
  await expect(page.getByLabel("Item", { exact: true }).first()).toHaveValue(/^Work /);
  await expect(page.getByLabel("Qty").first()).toHaveValue("37.5");
  await expect(page.getByLabel("Price").first()).toHaveValue("60");
  if (isMobile) await page.getByRole("tab", { name: "Preview" }).click();
  await expect(page.locator("aside dl")).toContainText("$2,250.00");
});

test("the hourly rate calculator works per month too", async ({ page }) => {
  await page.goto("/tools/hourly-rate-calculator");
  await expect(page.getByText("$67.79").first()).toBeVisible(); // 48,000 a year at 30 %
  await page.getByRole("radio", { name: "Per month" }).click();
  await expect(page.getByLabel(/Income you want to keep/)).toHaveValue("4000");
  await expect(page.getByText("$67.79").first()).toBeVisible(); // same income, same rate
});
