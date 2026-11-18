"use client";

import { Check, LayoutTemplate, Lock, X } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Badge } from "@/components/ui/content";
import { cx } from "@/components/ui/cx";
import { API_URL, appStoreLink } from "@/lib/config";

export interface GeneratorTemplate {
  slug: string;
  name: string;
  tier: string;
}

/**
 * Template browser (ROADMAP 33c): every template as a live thumbnail (the existing public preview
 * endpoint, loaded lazily). The free ones can be picked; Starter and Pro ones link to the app.
 */
export function TemplatePicker({
  templates,
  value,
  open,
  onClose,
  onPick,
}: {
  templates: GeneratorTemplate[];
  value: string;
  open: boolean;
  onClose: () => void;
  onPick: (slug: string) => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  const sorted = [...templates].sort(
    (a, b) => Number(a.tier !== "free") - Number(b.tier !== "free") || a.name.localeCompare(b.name),
  );

  return (
    <dialog
      ref={dialog}
      onClose={onClose}
      onClick={(e) => e.target === dialog.current && onClose()}
      aria-labelledby="tpl-title"
      className="bg-surface shadow-float m-auto max-h-[90dvh] w-[min(64rem,calc(100vw-2rem))] rounded-3xl p-0 backdrop:bg-stone-950/40 backdrop:backdrop-blur-sm"
    >
      <div className="border-line bg-surface/95 sticky top-0 z-10 flex items-center justify-between gap-4 border-b px-6 py-4 backdrop-blur">
        <div>
          <h2 id="tpl-title" className="font-heading text-h4 text-ink flex items-center gap-2">
            <LayoutTemplate aria-hidden className="text-brand-600 size-5" /> Choose a template
          </h2>
          <p className="text-small text-muted">
            {templates.filter((t) => t.tier === "free").length} free here · all {templates.length}{" "}
            in the app
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="text-muted hover:bg-tint hover:text-ink focus-visible:focus-ring grid size-10 place-items-center rounded-xl"
        >
          <X aria-hidden className="size-5" />
        </button>
      </div>
      {open && (
        <ul className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-3 lg:grid-cols-4">
          {sorted.map((t) => {
            const free = t.tier === "free";
            const selected = t.slug === value;
            const thumb = (
              <>
                <span className="bg-tint relative block aspect-[794/1123] overflow-hidden">
                  <Thumb slug={t.slug} name={t.name} />
                  {!free && (
                    <span className="absolute inset-0 grid place-items-center bg-stone-950/25">
                      <Lock aria-hidden className="size-6 text-white drop-shadow" />
                    </span>
                  )}
                  {selected && (
                    <span className="bg-brand-cta shadow-brand absolute top-2 right-2 grid size-7 place-items-center rounded-full text-white">
                      <Check aria-hidden className="size-4" />
                    </span>
                  )}
                </span>
                <span className="flex items-center justify-between gap-2 px-3 py-2.5">
                  <span className="text-small text-ink truncate font-bold">{t.name}</span>
                  {free ? (
                    <Badge tone="free">Free</Badge>
                  ) : (
                    <Badge tone={t.tier === "pro" ? "pro" : "starter"}>In the app</Badge>
                  )}
                </span>
              </>
            );
            const cls = cx(
              "bg-surface focus-visible:focus-ring block w-full overflow-hidden rounded-2xl text-left ring-1 transition duration-150 hover:-translate-y-0.5 hover:shadow-card",
              selected ? "ring-brand-500 ring-2" : "ring-line",
            );
            return (
              <li key={t.slug}>
                {free ? (
                  <button
                    type="button"
                    aria-pressed={selected}
                    onClick={() => {
                      onPick(t.slug);
                      onClose();
                    }}
                    className={cls}
                  >
                    {thumb}
                  </button>
                ) : (
                  <a
                    href={appStoreLink("gen-locked")}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="gen_app_click"
                    data-track-section="template_locked"
                    className={cls}
                    aria-label={`${t.name}: available in the Invoicor app`}
                  >
                    {thumb}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </dialog>
  );
}

/** Preview HTML per template, fetched once per page view. */
const cache = new Map<string, Promise<string>>();
function fetchPreview(slug: string): Promise<string> {
  let p = cache.get(slug);
  if (!p) {
    p = fetch(`${API_URL}/invoices/templates/${slug}/preview/`).then((r) =>
      r.ok ? r.text() : Promise.reject(new Error(String(r.status))),
    );
    p.catch(() => cache.delete(slug));
    cache.set(slug, p);
  }
  return p;
}

/**
 * A live thumbnail: the template's sample preview, fetched when it scrolls into view and shown via
 * srcDoc (the API forbids being framed directly), scaled to the card width.
 */
function Thumb({ slug, name }: { slug: string; name: string }) {
  const box = useRef<HTMLSpanElement>(null);
  const [html, setHtml] = useState("");
  const [scale, setScale] = useState(0.25);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const fit = () => setScale(el.clientWidth / 794);
    fit();
    const resize = new ResizeObserver(fit);
    resize.observe(el);
    let cancelled = false;
    const seen = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      seen.disconnect();
      fetchPreview(slug)
        .then((h) => !cancelled && setHtml(h))
        .catch(() => {});
    });
    seen.observe(el);
    return () => {
      cancelled = true;
      resize.disconnect();
      seen.disconnect();
    };
  }, [slug]);

  return (
    <span ref={box} className="absolute inset-0 block">
      {html ? (
        <iframe
          srcDoc={html}
          title={`${name} template`}
          sandbox=""
          tabIndex={-1}
          className="pointer-events-none absolute top-0 left-0 h-[1123px] w-[794px] origin-top-left scale-(--s) border-0"
          style={{ "--s": String(scale) } as CSSProperties}
        />
      ) : (
        <span aria-hidden className="absolute inset-3 animate-pulse rounded-lg bg-stone-200/60" />
      )}
    </span>
  );
}
