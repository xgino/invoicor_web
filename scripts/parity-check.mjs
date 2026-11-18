#!/usr/bin/env node
/**
 * URL parity check (ROADMAP chunk 27): proves no URL or SEO signal is lost in the switch.
 *
 *   node scripts/parity-check.mjs --old https://invoicor.com --new http://127.0.0.1:4173
 *   node scripts/parity-check.mjs --old https://invoicor.com --new http://localhost:4173
 *
 * URLs checked: the old site's sitemap + tests/urls.txt + every redirect in deploy/nginx/.
 * For each it fetches both sites (without following redirects) and compares status, title,
 * meta description, canonical and H1. Writes seo/parity/<date>-<host>.md and exits 1 if an URL
 * that worked on the old site returns neither 200 nor the expected 301 on the new one.
 *
 * Note: nginx redirects only exist on production. Against `npm run preview` they show as
 * "nginx only" instead of failing.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const args = Object.fromEntries(
  process.argv
    .slice(2)
    .join(" ")
    .split("--")
    .filter(Boolean)
    .map((a) => a.trim().split(/\s+/)),
);
const OLD = (args.old ?? "https://invoicor.com").replace(/\/$/, "");
const NEW = (args.new ?? "http://127.0.0.1:4173").replace(/\/$/, "");
const headers = args.auth
  ? { Authorization: `Basic ${Buffer.from(args.auth).toString("base64")}` }
  : {};
const isLocal = /127\.0\.0\.1|localhost/.test(NEW);

/** Redirects from the nginx config: `location = /path { return 301 /target; }` */
const REDIRECTS = Object.fromEntries(
  [
    ...readFileSync(join(root, "deploy/nginx/invoicor.com.conf"), "utf8").matchAll(
      /location = (\S+)\s*\{\s*return 301 (\S+);/g,
    ),
  ].map((m) => [m[1], m[2]]),
);

const frozen = readFileSync(join(root, "tests/urls.txt"), "utf8")
  .split("\n")
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith("#"));

async function oldSitemap() {
  try {
    const xml = await (
      await fetch(`${OLD}/sitemap.xml`, { signal: AbortSignal.timeout(15000) })
    ).text();
    return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname || "/");
  } catch {
    console.warn(`Could not read ${OLD}/sitemap.xml; checking tests/urls.txt only.`);
    return [];
  }
}

const decode = (s) =>
  s
    ?.replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/<[^>]+>/g, "")
    .trim();

async function inspect(base, path) {
  try {
    const res = await fetch(base + path, {
      redirect: "manual",
      headers: base === NEW ? headers : {},
      signal: AbortSignal.timeout(15000),
    });
    const html = res.status === 200 ? await res.text() : "";
    return {
      status: res.status,
      location: res.headers.get("location") ?? "",
      title: decode(html.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1]),
      description: decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1]),
      canonical: html.match(/<link rel="canonical" href="([^"]*)"/)?.[1],
      h1: decode(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]),
    };
  } catch (error) {
    return { status: 0, error: String(error) };
  }
}

const paths = [...new Set([...(await oldSitemap()), ...frozen, ...Object.keys(REDIRECTS)])].sort();
const rows = [];
let failures = 0;

for (const path of paths) {
  const [o, n] = await Promise.all([inspect(OLD, path), inspect(NEW, path)]);
  const target = REDIRECTS[path];
  let verdict = "ok";
  if (target) {
    const loc = n.location.replace(NEW, "");
    if (n.status === 301 && loc === target) verdict = "ok (301)";
    else if (isLocal) verdict = "nginx only";
    else verdict = `FAIL: expected 301 → ${target}`;
  } else if (n.status !== 200) {
    verdict = o.status === 200 ? `FAIL: was ${o.status}, now ${n.status}` : `new ${n.status}`;
  } else if (n.canonical && n.canonical !== `https://invoicor.com${path === "/" ? "" : path}`) {
    verdict = `FAIL: canonical ${n.canonical}`;
  }
  if (verdict.startsWith("FAIL")) failures++;
  const changed = (k) => (o.status === 200 && n.status === 200 && o[k] !== n[k] ? "changed" : "");
  rows.push({
    path,
    o,
    n,
    verdict,
    titleChanged: changed("title"),
    descChanged: changed("description"),
  });
  process.stdout.write(verdict.startsWith("FAIL") ? "F" : ".");
}

const date = new Date().toISOString().slice(0, 10);
const host = new URL(NEW).host.replace(/[^a-z0-9.-]/gi, "_");
const esc = (s) => (s ?? "").replace(/\|/g, "\\|");
const md = [
  `# URL parity: ${date}`,
  "",
  `Old: ${OLD} · New: ${NEW} · ${paths.length} URLs · **${failures} failures**`,
  "",
  "| URL | Old | New | Verdict | Title | Description | New H1 |",
  "|---|---|---|---|---|---|---|",
  ...rows.map(
    (r) =>
      `| \`${r.path}\` | ${r.o.status} | ${r.n.status}${r.n.location ? ` → ${r.n.location.replace(NEW, "")}` : ""} | ${r.verdict} | ${r.titleChanged} | ${r.descChanged} | ${esc(r.n.h1)} |`,
  ),
  "",
  "## New titles and descriptions",
  "",
  ...rows
    .filter((r) => r.n.status === 200)
    .map((r) => `- \`${r.path}\`: **${esc(r.n.title)}**. ${esc(r.n.description)}`),
  "",
  "Notes: the old site is a single-page app, so its HTML has the same title and no H1 for every",
  'URL (Google renders the JavaScript). "changed" means the raw HTML differs, not necessarily',
  "the title Google currently shows. Compare with the Search Console baseline (Y1) for that.",
  "",
].join("\n");

mkdirSync(join(root, "seo/parity"), { recursive: true });
const out = join(root, "seo/parity", `${date}-${host}.md`);
writeFileSync(out, md);
console.log(`\n${paths.length} URLs, ${failures} failures. Report: ${out.replace(root + "/", "")}`);
process.exit(failures ? 1 : 0);
