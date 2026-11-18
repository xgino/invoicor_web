"use client";

import { AlertCircle } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cx } from "@/components/ui/cx";
import { renderPreview } from "@/lib/generator/api";

const A4 = { width: 794, height: 1123 };

/**
 * Live preview (ROADMAP 33a/b): the real template, rendered by the API about half a second after
 * typing stops, in a sandboxed iframe scaled to fit. Typing itself costs no API calls.
 */
export function Preview({
  payload,
  footer,
  onError,
}: {
  /** JSON of the payload; a new string triggers a (debounced) render. */
  payload: string;
  footer?: ReactNode;
  onError?: (message: string | null) => void;
}) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);
  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  // Debounced render: one request ~500 ms after the last change, older ones are cancelled.
  useEffect(() => {
    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setLoading(true);
      try {
        const next = await renderPreview(JSON.parse(payload), controller.signal);
        setHtml(next);
        setError(null);
        onError?.(null);
      } catch (e) {
        if ((e as Error).name === "AbortError") return;
        const message = (e as Error).message;
        setError(message);
        onError?.(message);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 500);
    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [payload, onError]);

  return (
    <div>
      <div
        ref={box}
        className="bg-surface ring-line shadow-float relative h-(--h) overflow-hidden rounded-xl ring-1"
        style={{ "--h": `${Math.round(A4.height * scale)}px` } as CSSProperties}
      >
        {html && (
          <iframe
            title="Invoice preview"
            srcDoc={html}
            sandbox=""
            className={cx(
              "absolute top-0 left-0 h-[1123px] w-[794px] origin-top-left scale-(--s) border-0 transition-opacity duration-250",
              loading && "opacity-60",
            )}
            style={{ "--s": String(scale) } as CSSProperties}
          />
        )}
        {loading && !html && (
          <div aria-hidden className="absolute inset-0 animate-pulse bg-stone-100" />
        )}
        {error && (
          <div
            role="status"
            className="bg-surface/90 shadow-card ring-line absolute inset-x-4 top-4 flex gap-2 rounded-xl p-3 text-left ring-1 backdrop-blur"
          >
            <AlertCircle aria-hidden className="text-danger mt-0.5 size-4 shrink-0" />
            <p className="text-small text-ink">{error}</p>
          </div>
        )}
        <span className="sr-only" aria-live="polite">
          {loading ? "Updating preview" : "Preview updated"}
        </span>
      </div>
      {footer}
    </div>
  );
}
