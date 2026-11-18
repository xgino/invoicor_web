import { describe, expect, it } from "vitest";
import { appStoreQrSvg } from "@/lib/qr";

describe("App Store QR code", () => {
  it("renders an SVG with a solid light background (scannable on any card)", async () => {
    const svg = await appStoreQrSvg();
    expect(svg.startsWith("<svg")).toBe(true);
    expect(svg).toContain("<path");
    expect(svg).toMatch(/fill="#ffffff"/i);
  });
});
