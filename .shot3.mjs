import { chromium } from "@playwright/test";
const [url, out, w, h] = process.argv.slice(2);
const b = await chromium.launch({ channel: "chrome" });
const p = await b.newPage({ viewport: { width: +w, height: +h } });
await p.addInitScript(() => localStorage.setItem("invoicor-consent-v1", "denied"));
await p.goto(url, { waitUntil: "networkidle" });
for (let y = 0; y < 12000; y += 600) {
  await p.evaluate((y) => window.scrollTo(0, y), y);
  await p.waitForTimeout(120);
}
await p.evaluate(() => {
  window.scrollTo(0, 0);
  document.querySelectorAll(".reveal").forEach((e) => e.classList.add("in"));
});
await p.waitForTimeout(2500);
await p.screenshot({ path: out, fullPage: true });
await b.close();
