import type { NextConfig } from "next";

/**
 * Static export: `npm run build` writes a plain HTML/CSS/JS site to `out/`.
 * Upload that folder to the server; nginx serves it (see DEPLOY.md).
 * Redirects and headers live in nginx, because static exports can't set them.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  poweredByHeader: false,
  reactStrictMode: true,
  // A branded 404 across both root layouts (app/global-not-found.tsx, ROADMAP 36).
  experimental: { globalNotFound: true },
  images: {
    // No image server in a static export; images are pre-sized files in /public.
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
