/**
 * Style guard (ROADMAP chunk 17.1e): one design system, used everywhere.
 * Pages and components may only use the brand tokens (styles/tokens.css) through Tailwind classes.
 * They fail this test if they hard-code colors, use inline styles, or use an off-brand palette.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { describe, expect, it } from "vitest";

const ROOT = process.cwd();

/** Files that work with raw values on purpose. */
const ALLOWED = [
  "app/(en)/brand/", // the token showcase prints the raw values
  "components/brand/", // the logo is drawn with exact colors and sizes
];

function files(dir: string): string[] {
  return readdirSync(join(ROOT, dir)).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(join(ROOT, path)).isDirectory()) return files(path);
    return /\.(tsx|ts)$/.test(name) ? [path] : [];
  });
}

const CHECKED = [...files("app"), ...files("components")].filter(
  (f) => !ALLOWED.some((a) => f.startsWith(a)) && !f.endsWith("route.tsx"),
);

const RULES: Array<[string, RegExp]> = [
  // style={{ ... }} is only for CSS custom properties like "--d" (reveal delays)
  ["inline style", /style=\{\{(?!\s*"--)[^}]*\}\}/],
  ["hex color", /["'`\s(]#[0-9a-fA-F]{3,8}\b(?![\w-])/],
  ["rgb() color", /\brgba?\(/],
  [
    "off-brand Tailwind color",
    /\b(bg|text|border|ring|from|to|via|fill|stroke|outline|divide|accent|decoration)-(slate|gray|zinc|neutral|blue|indigo|violet|purple|emerald|teal|cyan|sky|rose|pink|fuchsia|lime|yellow|orange|red)-\d+/,
  ],
];

describe("style guard", () => {
  it("checks a meaningful number of files", () => {
    expect(CHECKED.length).toBeGreaterThan(30);
  });

  it.each(CHECKED.map((f) => [relative(ROOT, join(ROOT, f))]))("%s", (file) => {
    const source = readFileSync(join(ROOT, file), "utf8");
    for (const [name, rule] of RULES) {
      const line = source.split("\n").findIndex((l) => rule.test(l));
      expect(line === -1 ? null : `${name} on line ${line + 1}`, file).toBeNull();
    }
  });
});
