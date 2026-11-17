import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

/**
 * Unit tests (tests/unit) run before the build; built-site tests (tests/site) run on out/ after
 * `npm run build`. Browser tests live in tests/e2e and run with Playwright.
 */
export default defineConfig({
  resolve: { alias: { "@": fileURLToPath(new URL("./", import.meta.url)) } },
  test: {
    include: ["tests/unit/**/*.test.ts", "tests/site/**/*.test.ts"],
    environment: "node",
  },
});
