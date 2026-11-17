#!/usr/bin/env node
/**
 * Serves the static export in out/ the way nginx does in production (deploy/nginx/):
 *   /templates/plumbing  → out/templates/plumbing.html
 *   /templates/plumbing/ → 301 to /templates/plumbing
 *   unknown path         → out/404.html with status 404
 * Used by `npm run preview` and the browser tests. Run `npm run build` first.
 *
 * Usage: node scripts/serve-out.mjs [port]   (default 4173)
 */
import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "out");
const port = Number(process.argv[2] ?? process.env.PORT ?? 4173);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webmanifest": "application/manifest+json",
  ".woff2": "font/woff2",
};

if (!existsSync(root)) {
  console.error("out/ not found: run `npm run build` first.");
  process.exit(1);
}

const isFile = (p) => existsSync(p) && statSync(p).isFile();

function resolve(pathname) {
  const safe = normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, "");
  const direct = join(root, safe);
  if (isFile(direct)) return direct;
  if (isFile(`${direct}.html`)) return `${direct}.html`;
  if (isFile(join(direct, "index.html"))) return join(direct, "index.html");
  return null;
}

createServer((req, res) => {
  const { pathname, search } = new URL(req.url ?? "/", "http://localhost");

  if (pathname.length > 1 && pathname.endsWith("/")) {
    res.writeHead(301, { Location: pathname.replace(/\/+$/, "") + search });
    return res.end();
  }

  const file = resolve(pathname);
  const status = file ? 200 : 404;
  const path = file ?? join(root, "404.html");
  res.writeHead(status, {
    "Content-Type": TYPES[extname(path)] ?? "application/octet-stream",
    "Cache-Control": "no-cache",
  });
  createReadStream(path).pipe(res);
}).listen(port, "127.0.0.1", () => {
  console.log(`Serving out/ on http://127.0.0.1:${port}`);
});
