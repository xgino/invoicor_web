import { describe, expect, it } from "vitest";
import { DEFAULT_OG_IMAGE, buildMetadata, ogImagePath } from "@/lib/seo";

describe("buildMetadata", () => {
  it("sets an absolute canonical without a trailing slash", () => {
    const m = buildMetadata({ title: "T | Invoicor", description: "D", path: "/templates/hvac" });
    expect(m.alternates?.canonical).toBe("https://invoicor.com/templates/hvac");
    expect(m.robots).toBeUndefined();
  });

  it("uses the default share image unless a page has its own", () => {
    const plain = buildMetadata({ title: "T", description: "D", path: "/help" });
    expect(JSON.stringify(plain.openGraph)).toContain(DEFAULT_OG_IMAGE.url);

    const own = buildMetadata({
      title: "T",
      description: "D",
      path: "/templates/hvac",
      image: ogImagePath("templates", "hvac"),
    });
    expect(JSON.stringify(own.openGraph)).toContain(
      "https://invoicor.com/og/templates/hvac/og.png",
    );
    expect(JSON.stringify(own.twitter)).toContain("/og/templates/hvac/og.png");
  });

  it("marks noindex pages", () => {
    const m = buildMetadata({ title: "T", description: "D", path: "/brand", noindex: true });
    expect(m.robots).toEqual({ index: false, follow: true });
  });
});
