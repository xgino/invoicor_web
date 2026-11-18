import { ogImage } from "@/lib/og";

/** Share image for /free-invoice-generator (ROADMAP 35d), rendered at build time. */
export const dynamic = "force-static";

export function GET() {
  return ogImage({
    eyebrow: "Free · no signup",
    title: "Free Invoice Generator: create and download a PDF invoice.",
    subtitle: "21 free templates · 38 currencies · 11 languages",
  });
}
