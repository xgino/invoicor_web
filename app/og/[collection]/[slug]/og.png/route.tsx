import { getComparisons, getIndustries, getTemplates } from "@/lib/content";
import { ogImage } from "@/lib/og";

/**
 * Per-page share images (ROADMAP chunk 16d), rendered at build time to
 * out/og/{templates|industries|compare}/{slug}/og.png. lib/seo.ts points each page at its own.
 */
export const dynamic = "force-static";
export const dynamicParams = false;

type Card = { eyebrow: string; title: string };

function cards(): Record<string, Record<string, Card>> {
  return {
    templates: Object.fromEntries(
      getTemplates().map((t) => [t.slug, { eyebrow: "Free invoice template", title: t.h1 }]),
    ),
    industries: Object.fromEntries(
      getIndustries().map((i) => [i.slug, { eyebrow: `Invoicing for ${i.industry}`, title: i.h1 }]),
    ),
    compare: Object.fromEntries(
      getComparisons().map((c) => [
        c.slug,
        { eyebrow: `${c.competitor} alternative`, title: c.h1 },
      ]),
    ),
  };
}

export function generateStaticParams() {
  return Object.entries(cards()).flatMap(([collection, bySlug]) =>
    Object.keys(bySlug).map((slug) => ({ collection, slug })),
  );
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ collection: string; slug: string }> },
) {
  const { collection, slug } = await params;
  const card = cards()[collection]?.[slug];
  if (!card) return new Response("Not found", { status: 404 });
  return ogImage(card);
}
