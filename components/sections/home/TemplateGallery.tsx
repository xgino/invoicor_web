"use client";

import { useEffect, useState } from "react";
import { Badge, Skeleton } from "@/components/ui/content";
import { API_URL } from "@/lib/config";

export interface GalleryTemplate {
  slug: string;
  name: string;
  tier?: string;
}

/**
 * Horizontal gallery of real templates (ROADMAP chunk 19d). Names come from the API at build time,
 * so they're in the HTML; the rendered previews load in the browser into sandboxed iframes, with
 * skeletons while loading. If the build-time call failed, the list is fetched in the browser.
 */
export function TemplateGallery({ initial }: { initial: GalleryTemplate[] }) {
  const [templates, setTemplates] = useState(initial);
  const [previews, setPreviews] = useState<Record<string, string>>({});

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    (async () => {
      let list = initial;
      if (list.length === 0) {
        try {
          const res = await fetch(`${API_URL}/invoices/templates/`, { signal: controller.signal });
          const data: unknown = await res.json();
          if (Array.isArray(data)) list = (data as GalleryTemplate[]).slice(0, 12);
        } catch {
          return;
        }
        if (cancelled) return;
        setTemplates(list);
      }
      for (const t of list) {
        fetch(`${API_URL}/invoices/templates/${t.slug}/preview/`, { signal: controller.signal })
          .then((r) => (r.ok ? r.text() : Promise.reject()))
          .then((html) => !cancelled && setPreviews((p) => ({ ...p, [t.slug]: html })))
          .catch(() => {});
      }
    })();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [initial]);

  if (templates.length === 0) return null;

  return (
    <ul className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pt-2 pb-8 sm:-mx-6 sm:px-6">
      {templates.map((t) => {
        const html = previews[t.slug];
        return (
          <li
            key={t.slug}
            className="bg-surface ring-line shadow-card ease-brand w-52 shrink-0 snap-start overflow-hidden rounded-2xl ring-1 transition-transform duration-250 hover:-translate-y-1.5"
          >
            <div className="bg-tint relative h-[17.5rem] w-52 overflow-hidden">
              {html ? (
                <iframe
                  srcDoc={html}
                  title={`${t.name} invoice template preview`}
                  loading="lazy"
                  sandbox=""
                  tabIndex={-1}
                  className="pointer-events-none absolute top-0 left-0 h-[1123px] w-[794px] origin-top-left scale-[0.262] border-0"
                />
              ) : (
                <div className="space-y-3 p-5">
                  <Skeleton className="h-8 w-16" />
                  <Skeleton className="h-3 w-24" />
                  <Skeleton className="mt-6 h-3 w-full" />
                  <Skeleton className="h-3 w-5/6" />
                  <Skeleton className="h-3 w-4/6" />
                </div>
              )}
            </div>
            <div className="border-line flex items-center justify-between gap-2 border-t px-4 py-3">
              <p className="text-small text-ink truncate font-bold">{t.name}</p>
              {t.tier && t.tier !== "free" && (
                <Badge tone={t.tier === "pro" ? "pro" : "starter"} className="capitalize">
                  {t.tier}
                </Badge>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
