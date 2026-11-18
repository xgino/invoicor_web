import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/config";

export const dynamic = "force-static";

/**
 * Decision D3 (ROADMAP, 2026-11-17): allow all AI bots, search and training, so ChatGPT,
 * Claude, Perplexity and Gemini can find, cite and recommend Invoicor. The `*` rule already
 * covers them; they're listed by name so the choice is explicit and easy to change.
 */
const AI_BOTS = [
  // Answer / search bots (cite pages in AI answers)
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "Claude-SearchBot",
  "Claude-User",
  // Training bots (more mentions in AI models over time)
  "GPTBot",
  "ClaudeBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

// /generator/ holds the raw template files the free generator fills in the browser.
const PRIVATE = ["/api/", "/admin/", "/generator/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE },
      { userAgent: AI_BOTS, allow: "/", disallow: PRIVATE },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
