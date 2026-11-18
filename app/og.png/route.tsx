import { ogImage } from "@/lib/og";

/**
 * Default social share image, rendered once at build time to out/og.png (1200×630).
 * Referenced from every page by lib/seo.ts. A real ".png" path means any web server
 * sends the correct Content-Type without extra configuration.
 */
export const dynamic = "force-static";

export function GET() {
  return ogImage({ title: "Professional invoices in seconds, from your iPhone." });
}
