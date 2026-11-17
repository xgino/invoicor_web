import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Page } from "@playwright/test";

/** One page of each type: the accessibility and smoke tests run on these. */
export const PAGE_TYPES = {
  home: "/",
  "templates hub": "/templates",
  template: "/templates/plumbing",
  "industries hub": "/industries",
  industry: "/industries/plumbers-hvac",
  "compare hub": "/compare",
  compare: "/compare/quickbooks",
  help: "/help",
  affiliate: "/affiliate",
  privacy: "/privacy",
  terms: "/terms",
};

const ANALYTICS = /googletagmanager\.com|google-analytics\.com|posthog\.com/;

/** Blocks analytics requests (tests never send data) and records which were attempted. */
export async function trackAnalytics(page: Page) {
  const attempted: string[] = [];
  await page.route(ANALYTICS, (route) => {
    attempted.push(route.request().url());
    return route.abort();
  });
  return attempted;
}

const axeSource = readFileSync(join(process.cwd(), "node_modules/axe-core/axe.min.js"), "utf8");

export interface AxeViolation {
  id: string;
  impact: string;
  help: string;
  targets: string[];
}

/** Runs axe-core (WCAG 2.1 AA) and returns serious and critical violations. */
export async function axeViolations(page: Page): Promise<AxeViolation[]> {
  await page.addScriptTag({ content: axeSource });
  const result = await page.evaluate(async () => {
    // @ts-expect-error axe is injected above
    const r = await window.axe.run(document, { runOnly: ["wcag2a", "wcag2aa", "wcag21aa"] });
    return r.violations.map(
      (v: { id: string; impact: string; help: string; nodes: { target: string[] }[] }) => ({
        id: v.id,
        impact: v.impact,
        help: v.help,
        targets: v.nodes.slice(0, 5).map((n) => n.target.join(" ")),
      }),
    );
  });
  return result.filter(
    (v: { impact: string }) => v.impact === "serious" || v.impact === "critical",
  );
}
