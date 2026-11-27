import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AndroidPage } from "@/components/sections/android/AndroidPage";
import { GeneratorPage } from "@/components/sections/generator/GeneratorPage";
import { HelpPage } from "@/components/sections/help/HelpPage";
import {
  type ContentRoute,
  ContentRoutePage,
  contentMeta,
  contentRoutes,
} from "@/components/sections/content/localized";
import { HomePage } from "@/components/sections/home/HomePage";
import { ToolPage, ToolsHub } from "@/components/tools/ToolPage";
import { HOME } from "@/lib/i18n/pages/home";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { ANDROID } from "@/lib/i18n/pages/android";
import { GENERATOR } from "@/lib/i18n/pages/generator";
import { HELP } from "@/lib/i18n/pages/help";
import { TOOLS_TEXT } from "@/lib/i18n/pages/tools";
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
  return [
    ...localizedPaths(params.locale).map((p) => ({ path: p.segments })),
    // The template and industry pages and hubs in this language (task S1), when it has any.
    ...contentRoutes(params.locale).map((c) => ({ path: c.segments })),
  ];
}

type Props = { params: Promise<{ locale: string; path?: string[] }> };

type Resolved =
  | { locale: Locale; key: PageKey; content?: undefined }
  | { locale: Locale; key?: undefined; content: ContentRoute };

async function resolve(props: Props): Promise<Resolved | null> {
  const { locale, path = [] } = await props.params;
  if (!isLocale(locale)) return null;
  const joined = path.join("/");
  const match = localizedPaths(locale).find((p) => p.segments.join("/") === joined);
  if (match) return { locale, key: match.key };
  const content = contentRoutes(locale).find((c) => c.segments.join("/") === joined);
  return content ? { locale, content: content.route } : null;
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
  generator: {
    render: (l) => <GeneratorPage locale={l} />,
    meta: (l) => GENERATOR[l].page.meta,
  },
  tools: {
    render: (l) => <ToolsHub locale={l} />,
    meta: (l) => TOOLS_TEXT[l].hub.meta,
  },
  vat: {
    render: (l) => <ToolPage tool="vat" locale={l} />,
    meta: (l) => TOOLS_TEXT[l].vat.meta,
  },
  hours: {
    render: (l) => <ToolPage tool="hours" locale={l} />,
    meta: (l) => TOOLS_TEXT[l].hours.meta,
  },
  rate: {
    render: (l) => <ToolPage tool="rate" locale={l} />,
    meta: (l) => TOOLS_TEXT[l].rate.meta,
  },
  help: {
    render: (l) => <HelpPage locale={l} />,
    meta: (l) => HELP[l].meta,
  },
  android: {
    render: (l) => <AndroidPage locale={l} />,
    meta: (l) => ({ title: ANDROID[l].metaTitle, description: ANDROID[l].metaDescription }),
  },
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const page = await resolve(props);
  if (page?.content)
    return buildMetadata({ ...contentMeta(page.locale, page.content), locale: page.locale });
  const def = page?.key && PAGES[page.key];
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
  if (page?.content) return <ContentRoutePage locale={page.locale} route={page.content} />;
  const render = page?.key && PAGES[page.key].render;
  if (!page || !render) notFound();
  return render(page.locale);
}
