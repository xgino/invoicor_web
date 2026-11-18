import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { BODY_CLASS, JS_CLASS_SCRIPT, SiteBody } from "@/components/layout/SiteBody";
import { APP_STORE_ID, SITE_NAME, SITE_URL } from "@/lib/config";
import { LOCALE_INFO, PREFIXED_LOCALES, isLocale } from "@/lib/i18n/config";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import { THEME_COLOR } from "@/lib/theme";
import { cabinet, satoshi } from "../fonts";
import "../globals.css";

/**
 * Root layout for every translated page (ROADMAP 36): `/nl/…`, `/de/…` and the other 9 languages.
 * Same shell as the English layout in app/(en), but with the page's language on <html lang>.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return PREFIXED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: LOCALE_INFO[locale].og,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: { card: "summary_large_image", images: [DEFAULT_OG_IMAGE.url] },
    itunes: { appId: APP_STORE_ID },
    formatDetection: { telephone: false },
  };
}

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === "en") notFound();
  return (
    <html lang={locale} className={`${satoshi.variable} ${cabinet.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: JS_CLASS_SCRIPT }} />
      </head>
      <body className={BODY_CLASS}>
        <SiteBody locale={locale}>{children}</SiteBody>
      </body>
    </html>
  );
}
