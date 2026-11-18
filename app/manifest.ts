import type { MetadataRoute } from "next";
import { THEME_COLOR } from "@/lib/theme";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Invoicor: Invoice Maker",
    short_name: "Invoicor",
    description: "Create professional invoices in seconds on your iPhone.",
    start_url: "/",
    display: "browser",
    background_color: THEME_COLOR,
    theme_color: THEME_COLOR,
    // Generated from the SVG logo (components/brand/Logo.tsx); full-bleed squares, the OS rounds them.
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
