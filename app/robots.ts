import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/config";

export const dynamic = "force-static";

/**
 * Same rules as the previous robots.txt.
 * Decision pending (ROADMAP chunk 6g): allow AI search bots (OAI-SearchBot, PerplexityBot,
 * Claude-SearchBot) so assistants can recommend Invoicor.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/admin/"] },
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
