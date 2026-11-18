import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AndroidPage } from "@/components/sections/android/AndroidPage";
import { HomePage } from "@/components/sections/home/HomePage";
import { HOME } from "@/lib/i18n/pages/home";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { ANDROID } from "@/lib/i18n/pages/android";
import { type PageKey, alternatesFor, localizedPaths } from "@/lib/i18n/routes";
import { buildMetadata } from "@/lib/seo";

/**
 * Every translated page (ROADMAP 36c). The URL (with its translated slug) is looked up in the
 * route table (lib/i18n/routes.ts); only pages listed there for this language are built, so a
 * language never shows an untranslated page.
 */
export const dynamicParams = false;

export function generateStaticParams({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) return [];
  return localizedPaths(params.locale).map((p) => ({ path: p.segments }));
}

type Props = { params: Promise<{ locale: string; path?: string[] }> };

async function resolve(props: Props): Promise<{ locale: Locale; key: PageKey } | null> {
  const { locale, path = [] } = await props.params;
  if (!isLocale(locale)) return null;
  const match = localizedPaths(locale).find((p) => p.segments.join("/") === path.join("/"));
  return match ? { locale, key: match.key } : null;
}

const PAGES: Record<
  PageKey,
  {
    render?: (l: Locale) => React.ReactNode;
    meta?: (l: Locale) => { title: string; description: string };
  }
> = {
  home: {
    render: (l) => <HomePage t={HOME[l]} locale={l} />,
    meta: (l) => ({ title: HOME[l].meta.title, description: HOME[l].meta.description }),
  },
  generator: {},
  android: {
    render: (l) => <AndroidPage locale={l} />,
    meta: (l) => ({ title: ANDROID[l].metaTitle, description: ANDROID[l].metaDescription }),
  },
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const page = await resolve(props);
  const def = page && PAGES[page.key];
  if (!page || !def?.meta) return {};
  const languages = alternatesFor(page.key);
  return buildMetadata({
    ...def.meta(page.locale),
    path: languages[page.locale]!,
    locale: page.locale,
    languages,
  });
}

export default async function LocalizedPage(props: Props) {
  const page = await resolve(props);
  const render = page && PAGES[page.key].render;
  if (!page || !render) notFound();
  return render(page.locale);
}
