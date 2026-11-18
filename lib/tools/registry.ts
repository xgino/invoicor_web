import type { Locale } from "@/lib/i18n/config";
import { TOOLS_TEXT } from "@/lib/i18n/pages/tools";
import { ROUTES } from "@/lib/i18n/routes";

/**
 * Every free tool (ROADMAP T1, HL2), in the order the /tools hub shows them. Used by the hub, the
 * tool pages, the sitemap and llms.txt, so a new tool needs an entry here, a route in
 * lib/i18n/routes.ts, its text in lib/i18n/pages/tools and a page.
 */
export type ToolKey = "generator" | "vat" | "hours" | "rate";

export interface Tool {
  key: ToolKey;
  href: string;
  name: string;
  short: string;
  icon: "FileText" | "Percent" | "Clock" | "TrendingUp";
  featured?: boolean;
}

const LIST: Array<Pick<Tool, "key" | "icon" | "featured">> = [
  { key: "generator", icon: "FileText", featured: true },
  { key: "vat", icon: "Percent" },
  { key: "hours", icon: "Clock" },
  { key: "rate", icon: "TrendingUp" },
];

/** The tools that exist in this language, with their local URL, name and description. */
export function toolsFor(locale: Locale): Tool[] {
  return LIST.flatMap((t) => {
    const href = ROUTES[t.key][locale];
    return href ? [{ ...t, href, ...TOOLS_TEXT[locale].tools[t.key] }] : [];
  });
}

/** The English tools (sitemap, llms.txt). */
export const TOOLS: Tool[] = toolsFor("en");
