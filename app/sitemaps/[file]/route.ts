import { SITEMAP_TYPES, renderUrlset, sitemapEntries, type SitemapType } from "@/lib/sitemap";

// Rendered once at build time into out/sitemaps/{type}.xml (output: "export").
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return SITEMAP_TYPES.map((t) => ({ file: `${t}.xml` }));
}

/** One page type's sitemap (lib/sitemap.ts, task S1). */
export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const type = file.replace(/\.xml$/, "") as SitemapType;
  if (!SITEMAP_TYPES.includes(type)) return new Response("Not found", { status: 404 });
  return new Response(renderUrlset(sitemapEntries()[type]), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
