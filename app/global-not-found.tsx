import type { Metadata } from "next";
import { BODY_CLASS, JS_CLASS_SCRIPT, SiteBody } from "@/components/layout/SiteBody";
import { NotFoundContent } from "@/components/sections/errors/NotFoundContent";
import { SITE_URL } from "@/lib/config";
import { cabinet, satoshi } from "./fonts";
import "./globals.css";

/**
 * The 404 page for any unknown URL (ROADMAP 36). Needed because there are two root layouts now
 * (English in app/(en), translated pages in app/[locale]), so no single layout can wrap it.
 * Exported as out/404.html; nginx serves it with status 404.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: "Page not found | Invoicor" },
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${satoshi.variable} ${cabinet.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: JS_CLASS_SCRIPT }} />
      </head>
      <body className={BODY_CLASS}>
        <SiteBody locale="en">
          <NotFoundContent />
        </SiteBody>
      </body>
    </html>
  );
}
