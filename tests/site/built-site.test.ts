/**
 * Checks the static export in out/ (run `npm run build` first). These guard the move to Next.js
 * and the redesign: every URL the live site has must still exist, with SEO basics intact.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { childSitemaps, builtSitemapPaths } from "../../scripts/sitemap-read.mjs";
import { SITEMAP_TYPES } from "@/lib/sitemap";

const OUT = join(process.cwd(), "out");
const SITE = "https://invoicor.com";

if (!existsSync(OUT))
  throw new Error("out/ not found: run `npm run build` before `npm run test:site`.");

/** The frozen list of public URLs (tests/urls.txt). */
const URLS = readFileSync(join(process.cwd(), "tests/urls.txt"), "utf8")
  .split("\n")
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith("#"));

/** Same lookup as nginx: try_files $uri $uri.html $uri/index.html */
function htmlFor(path: string): string {
  const file = path === "/" ? join(OUT, "index.html") : join(OUT, `${path}.html`);
  if (!existsSync(file)) throw new Error(`${path}: no ${file.replace(OUT, "out")}`);
  return readFileSync(file, "utf8");
}

const attr = (html: string, re: RegExp) => html.match(re)?.[1];

describe("every public URL still exists", () => {
  it.each(URLS)("%s", (path) => {
    const html = htmlFor(path);

    // Exactly one H1
    expect(html.match(/<h1[\s>]/g) ?? [], "one <h1>").toHaveLength(1);

    // Self-referencing canonical, no trailing slash
    const canonical = attr(html, /<link rel="canonical" href="([^"]+)"/);
    expect(canonical).toBe(path === "/" ? SITE : `${SITE}${path}`);

    // Unique ids (FAQ deep links, anchors)
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
    expect(dupes, "duplicate ids").toEqual([]);

    // Indexable
    expect(html).not.toMatch(/<meta name="robots" content="noindex/);

    // Title and description present
    expect(attr(html, /<title>([^<]+)<\/title>/)?.length ?? 0).toBeGreaterThan(10);
    expect(attr(html, /<meta name="description" content="([^"]+)"/)?.length ?? 0).toBeGreaterThan(
      50,
    );

    // The share image exists in the build
    const og = attr(html, /<meta property="og:image" content="([^"]+)"/);
    expect(og, "og:image").toBeDefined();
    expect(existsSync(join(OUT, og!.replace(SITE, ""))), `${og} is in out/`).toBe(true);
  });
});

describe("sitemap, robots and hidden pages", () => {
  const listed = builtSitemapPaths(OUT);
  const index = readFileSync(join(OUT, "sitemap.xml"), "utf8");

  it("is an index of one sitemap per page type, each in the build", () => {
    const children = childSitemaps(index).map((u) => u.replace(SITE, ""));
    expect(children).toEqual(SITEMAP_TYPES.map((t) => `/sitemaps/${t}.xml`));
    for (const c of children) expect(existsSync(join(OUT, c)), c).toBe(true);
  });

  it("lists every URL once", () => {
    expect(listed.length).toBe(new Set(listed).size);
  });

  it("lists exactly the public URLs", () => {
    expect([...listed].sort()).toEqual([...URLS].sort());
  });

  it("keeps /brand hidden", () => {
    expect(htmlFor("/brand")).toMatch(/<meta name="robots" content="noindex/);
    expect(listed).not.toContain("/brand");
    expect(readFileSync(join(OUT, "llms.txt"), "utf8")).not.toContain("/brand");
  });

  it("points robots.txt at the sitemap", () => {
    expect(readFileSync(join(OUT, "robots.txt"), "utf8")).toContain(`Sitemap: ${SITE}/sitemap.xml`);
  });

  it("has a branded 404 page", () => {
    expect(existsSync(join(OUT, "404.html"))).toBe(true);
  });
});

describe("App Store links carry Apple's campaign tracking (ROADMAP X10)", () => {
  it.each(URLS)("%s", (path) => {
    const html = htmlFor(path);
    // Every clickable App Store link (href), not the plain address in structured data.
    const links = [...html.matchAll(/href="(https:\/\/apps\.apple\.com[^"]*)"/g)].map((m) =>
      m[1]!.replaceAll("&amp;", "&"),
    );
    for (const link of links) {
      const q = new URL(link).searchParams;
      expect(q.get("pt"), link).toBe("128750110");
      expect(q.get("mt"), link).toBe("8");
      expect(q.get("ct")?.length ?? 0, link).toBeGreaterThan(0);
      expect(q.get("ct")!.length, link).toBeLessThanOrEqual(40);
    }
  });
});
