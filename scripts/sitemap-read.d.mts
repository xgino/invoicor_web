/** Types for scripts/sitemap-read.mjs. */
export function childSitemaps(xml: string): string[];
export function readBuiltSitemap(outDir: string): Array<{ loc: string; lastmod: string }>;
export function builtSitemapPaths(outDir: string): string[];
export function readSitemapFile(path: string): Promise<Array<{ loc: string; lastmod: string }>>;
