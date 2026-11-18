import type { Metadata, Viewport } from "next";
import { BODY_CLASS, JS_CLASS_SCRIPT, SiteBody } from "@/components/layout/SiteBody";
import { APP_STORE_ID, SITE_NAME, SITE_URL } from "@/lib/config";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import { THEME_COLOR } from "@/lib/theme";
import { cabinet, satoshi } from "../fonts";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Invoice Maker for iPhone | Create Invoices in Seconds | Invoicor",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Create professional invoices in seconds on your iPhone. 31 templates, 38 currencies, 11 languages. 3 invoices free, and no fees on your payments.",
  applicationName: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: { card: "summary_large_image", images: [DEFAULT_OG_IMAGE.url] },
  // Safari "View in App Store" banner on iPhone
  itunes: { appId: APP_STORE_ID },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${satoshi.variable} ${cabinet.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: JS_CLASS_SCRIPT }} />
      </head>
      <body className={BODY_CLASS}>
        <SiteBody locale="en">{children}</SiteBody>
      </body>
    </html>
  );
}
