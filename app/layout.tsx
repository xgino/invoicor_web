import type { Metadata, Viewport } from "next";
import { Analytics } from "@/components/analytics/Analytics";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { RevealObserver } from "@/components/RevealObserver";
import { APP_STORE_ID, SITE_NAME, SITE_URL } from "@/lib/config";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import { cabinet, satoshi } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Invoice Maker for iPhone | Create Invoices in Seconds | Invoicor",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Create professional invoices in under 5 seconds on your iPhone. 80% auto fill, beautiful PDF templates, multi currency, tax calculator, and instant sharing. Free to start.",
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
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

/**
 * Adds the `js` class before first paint so below-the-fold reveal animations start hidden.
 * Safety net: if the reveal script never loads, the class is removed after 3s so nothing
 * stays invisible.
 */
const jsClassScript = `(function(d){d.classList.add('js');setTimeout(function(){if(!d.classList.contains('reveal-ready'))d.classList.remove('js')},3000)})(document.documentElement)`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${satoshi.variable} ${cabinet.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsClassScript }} />
      </head>
      <body className="flex min-h-screen flex-col bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <RevealObserver />
        <Analytics />
      </body>
    </html>
  );
}
