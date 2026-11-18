import { expect, test, type Page } from "@playwright/test";
import { trackAnalytics } from "./helpers";

/**
 * The free invoice generator (ROADMAP Stage G) with a mocked API, so this runs in CI before the
 * real API is deployed. The API itself is tested in invoicor_api (invoices/test_public.py).
 */
async function mockApi(page: Page, pdfStatus = 200) {
  let pdfCalls = 0;
  await page.route(/\/api\/invoices\/public\/pdf\/$/, (route) => {
    pdfCalls++;
    return pdfStatus === 200
      ? route.fulfill({ contentType: "application/pdf", body: "%PDF-1.4 test" })
      : route.fulfill({ status: pdfStatus, contentType: "application/json", body: "{}" });
  });
  await page.route(/\/api\/invoices\/templates\/[^/]+\/preview\/$/, (route) =>
    route.fulfill({ contentType: "text/html", body: "<html><body>template</body></html>" }),
  );
  return () => pdfCalls;
}

async function fillInvoice(page: Page) {
  await page.getByLabel("Business name").fill("Rivera Plumbing");
  await page.getByLabel("Client or company name").fill("Sarah Mitchell");
  await page.getByLabel("Description").first().fill("Emergency call-out");
  await page.getByLabel("Price").first().fill("95");
}

test.beforeEach(async ({ page }) => {
  await trackAnalytics(page);
  await page.addInitScript(() => localStorage.setItem("invoicor-consent-v1", "denied"));
});

test("fill, preview, download, reveal the watermark line, download again for free", async ({
  page,
  isMobile,
}) => {
  const pdfCalls = await mockApi(page);
  await page.goto("/free-invoice-generator");
  await fillInvoice(page);
  if (isMobile) await page.getByRole("tab", { name: "Preview" }).click();

  await expect(
    page.frameLocator('iframe[title="Invoice preview"]').getByText("Rivera Plumbing").first(),
  ).toBeVisible();
  await expect(page.getByText("Total", { exact: true }).locator("..")).toContainText("$95.00");

  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download PDF" }).click();
  expect((await download).suggestedFilename()).toBe("invoice-INV-0001.pdf");
  await expect(page.getByText("Your invoice is downloaded")).toBeVisible();
  await expect(
    page.locator("aside").getByText("Created with", { exact: false }).first(),
  ).toBeVisible();

  const again = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download again" }).click();
  await again;
  expect(pdfCalls()).toBe(1);
});

test("the preview updates while typing, without calling the API", async ({ page, isMobile }) => {
  await mockApi(page);
  const apiCalls: string[] = [];
  page.on("request", (r) => {
    if (r.url().includes("/api/invoices/public/")) apiCalls.push(r.url());
  });
  await page.goto("/free-invoice-generator");
  await fillInvoice(page);
  await page.getByLabel("Business name").fill("Rivera Plumbing & Sons <LLC>");
  if (isMobile) await page.getByRole("tab", { name: "Preview" }).click();
  const preview = page.frameLocator('iframe[title="Invoice preview"]');
  await expect(preview.getByText("Rivera Plumbing & Sons <LLC>").first()).toBeVisible();
  await expect(preview.getByText("Emergency call-out")).toBeVisible();
  await expect(preview.getByText("$95").first()).toBeVisible();
  expect(apiCalls).toEqual([]);
});

test("explains the rate limit in plain words", async ({ page, isMobile }) => {
  await mockApi(page, 429);
  await page.goto("/free-invoice-generator");
  await fillInvoice(page);
  if (isMobile) await page.getByRole("tab", { name: "Preview" }).click();
  await page.getByRole("button", { name: "Download PDF" }).click();
  await expect(page.getByText(/wait a little/)).toBeVisible();
});

test("the download button waits for at least one line", async ({ page, isMobile }) => {
  await mockApi(page);
  await page.goto("/free-invoice-generator");
  if (isMobile) await page.getByRole("tab", { name: "Preview" }).click();
  await expect(page.getByRole("button", { name: "Download PDF" })).toBeDisabled();
});

test("keeps the draft after a refresh", async ({ page }) => {
  await mockApi(page);
  await page.goto("/free-invoice-generator");
  await page.getByLabel("Business name").fill("Rivera Plumbing");
  await page.waitForTimeout(700);
  await page.reload();
  await expect(page.getByLabel("Business name")).toHaveValue("Rivera Plumbing");
});
