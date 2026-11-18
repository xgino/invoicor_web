/**
 * Checks the static export in out/ (run `npm run build` first). These guard the move to Next.js
 * and the redesign: every URL the live site has must still exist, with SEO basics intact.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

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
  const sitemap = readFileSync(join(OUT, "sitemap.xml"), "utf8");
  const listed = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
    m[1]!.replace(SITE, "") === "" ? "/" : m[1]!.replace(SITE, ""),
  );

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
