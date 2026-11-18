"use client";

import { AlertCircle } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cx } from "@/components/ui/cx";
import type { Draft } from "@/lib/generator/draft";
import { type FillData, fillDraft, loadFillData, loadTemplate } from "@/lib/generator/fill";

const A4 = { width: 794, height: 1123 };
const BLANK = "<!doctype html><html><head></head><body></body></html>";

/**
 * Live preview (ROADMAP 33a/b): the real template, filled in the browser on every keystroke
 * (lib/generator/fill.ts, checked against the API's own fill), shown in a sandboxed iframe scaled
 * to fit. No API calls while typing; only the PDF comes from the server.
 *
 * The iframe may not run scripts. It is same-origin only so we can swap the page body in place:
 * no reload and no flicker while typing. Everything people type is escaped before it goes in.
 */
export function Preview({ draft, footer }: { draft: Draft; footer?: ReactNode }) {
  const box = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const shown = useRef({ head: "", html: "" });
  const [scale, setScale] = useState(0.5);
  const [data, setData] = useState<FillData | null>(null);
  const [template, setTemplate] = useState<{ slug: string; html: string } | null>(null);
  const [error, setError] = useState(false);

  // Fit the A4 page to the available width.
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const fit = () => setScale(Math.min(1, el.clientWidth / A4.width));
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Labels and currency symbols, once.
  useEffect(() => {
    loadFillData().then(setData, () => setError(true));
  }, []);

  // The template's HTML, when it changes (cached after the first time).
  const slug = draft.template_slug;
  useEffect(() => {
    let live = true;
    loadTemplate(slug).then(
      (html) => {
        if (!live) return;
        setTemplate({ slug, html });
        setError(false);
      },
      () => live && setError(true),
    );
    return () => {
      live = false;
    };
  }, [slug]);

  const html = useMemo(
    () => (template && data ? fillDraft(template.html, draft, data) : ""),
    [template, data, draft],
  );

  // Put the filled page into the iframe: the head only when the template changes, then the body.
  function paint() {
    const doc = frame.current?.contentDocument;
    if (!doc?.body || !html || shown.current.html === html) return;
    const next = new DOMParser().parseFromString(html, "text/html");
    if (shown.current.head !== next.head.innerHTML) {
      doc.head.innerHTML = next.head.innerHTML;
      shown.current.head = next.head.innerHTML;
    }
    for (const { name, value } of Array.from(next.body.attributes))
      doc.body.setAttribute(name, value);
    doc.body.innerHTML = next.body.innerHTML;
    shown.current.html = html;
  }

  useEffect(() => paint());

  const loading = !html;
  const switching = template !== null && template.slug !== slug;

  return (
    <div>
      <div
        ref={box}
        className="bg-surface ring-line shadow-float relative h-(--h) overflow-hidden rounded-xl ring-1"
        style={{ "--h": `${Math.round(A4.height * scale)}px` } as CSSProperties}
      >
        <iframe
          ref={frame}
          title="Invoice preview"
          srcDoc={BLANK}
          sandbox="allow-same-origin"
          onLoad={() => {
            shown.current = { head: "", html: "" };
            paint();
          }}
          className={cx(
            "absolute top-0 left-0 h-[1123px] w-[794px] origin-top-left scale-(--s) border-0 transition-opacity duration-150",
            switching && "opacity-60",
          )}
          style={{ "--s": String(scale) } as CSSProperties}
        />
        {loading && !error && (
          <div aria-hidden className="absolute inset-0 animate-pulse bg-stone-100" />
        )}
        {error && (
          <div
            role="status"
            className="bg-surface/90 shadow-card ring-line absolute inset-x-4 top-4 flex gap-2 rounded-xl p-3 text-left ring-1 backdrop-blur"
          >
            <AlertCircle aria-hidden className="text-danger mt-0.5 size-4 shrink-0" />
            <p className="text-small text-ink">
              The preview couldn&apos;t load. Check your connection; your form is saved.
            </p>
          </div>
        )}
      </div>
      {footer}
    </div>
  );
}
