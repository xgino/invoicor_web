import { readFileSync } from "node:fs";
import { expect, test } from "@playwright/test";
import { trackAnalytics } from "./helpers";

/**
 * The free generator in other languages (ROADMAP HL1): its own URL, the text of that language and
 * local starting values (currency, date format, invoice number), and the same working PDF.
 */
test.beforeEach(async ({ page }) => {
  await trackAnalytics(page);
  await page.addInitScript(() => localStorage.setItem("invoicor-consent-v1", "denied"));
  await page.route(/\/api\/invoices\/templates\/[^/]+\/preview\/$/, (route) =>
    route.fulfill({ contentType: "text/html", body: "<html><body>template</body></html>" }),
  );
});

test("German generator: German text, euro, and a working PDF", async ({ page, isMobile }) => {
  await page.goto("/de/rechnung-erstellen");
  await expect(page.locator("html")).toHaveAttribute("lang", "de");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Rechnung kostenlos online erstellen",
  );
  await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute(
    "href",
    /\/free-invoice-generator$/,
  );
  await page
    .frameLocator('iframe[title="Vorschau der Rechnung"]')
    .locator("body *")
    .first()
    .waitFor({ state: "attached" });
  await expect(page.getByLabel("Währung")).toHaveValue("EUR");
  await expect(page.getByLabel("Datumsformat")).toHaveValue("DD/MM/YYYY");

  await page.getByLabel("Firmenname").fill("Elektro Weber");
  await page.getByLabel("Leistung", { exact: true }).first().fill("Steckdose montiert");
  await page.getByLabel("Preis").first().fill("95");
  if (isMobile) await page.getByRole("tab", { name: "Vorschau" }).click();
  await expect(page.locator("aside dl")).toContainText("95,00 €");

  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: "PDF herunterladen" }).click();
  const file = await download;
  expect(file.suggestedFilename()).toMatch(/^rechnung-.+\.pdf$/);
  expect(
    readFileSync((await file.path())!)
      .subarray(0, 5)
      .toString(),
  ).toBe("%PDF-");
});

test("every language has its own generator page", async ({ request }) => {
  for (const path of [
    "/nl/gratis-factuur-maken",
    "/fr/creer-une-facture",
    "/es/crear-factura",
    "/it/crea-fattura",
    "/pt/criar-fatura",
    "/pl/wystaw-fakture",
    "/sv/skapa-faktura",
    "/da/lav-faktura",
    "/nb/lag-faktura",
  ]) {
    const res = await request.get(path);
    expect(res.status(), path).toBe(200);
    const html = await res.text();
    expect(html, path).toContain(`lang="${path.split("/")[1]}"`);
    expect(html, path).toMatch(/hreflang="x-default"/i);
  }
});
