import { renderIndex } from "@/lib/sitemap";

// Rendered once at build time into out/sitemap.xml (output: "export").
export const dynamic = "force-static";

/** The sitemap index: one sitemap per page type (lib/sitemap.ts, task S1). */
export function GET() {
  return new Response(renderIndex(), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
