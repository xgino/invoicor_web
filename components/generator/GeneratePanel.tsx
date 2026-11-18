"use client";

import { CircleCheck, Download, FilePlus2, Loader2 } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { buttonClass } from "@/components/ui/Button";
import { Stamp } from "@/components/ui/invoice";
import { track } from "@/lib/analytics";
import { GeneratorApiError, downloadPdf } from "@/lib/generator/api";
import { type Draft, filledItems, toPayload } from "@/lib/generator/draft";
import { turnstileToken } from "@/lib/generator/turnstile";
import type { Action } from "./reducer";

const COOLDOWN_MS = 5000;

function save(url: string, filename: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/**
 * Generate flow (ROADMAP chunk 34): bot check (if on), PDF from the API, download, then the
 * "Created with invoicor.com" reveal and the hand-off to the app. "Download again" reuses the same
 * file, so it costs no API call. The cooldown is UX only; the real limits are on the server.
 */
export function GeneratePanel({
  draft,
  dispatch,
  onGenerated,
  appCta,
}: {
  draft: Draft;
  dispatch: (action: Action) => void;
  onGenerated: () => void;
  appCta?: ReactNode;
}) {
  const [state, setState] = useState<"idle" | "working" | "done">("idle");
  const [error, setError] = useState<string | null>(null);
  const [cooling, setCooling] = useState(false);
  const [fileName, setFileName] = useState("");
  const file = useRef<{ url: string; name: string } | null>(null);
  const botBox = useRef<HTMLDivElement>(null);
  const ready = filledItems(draft).length > 0;

  useEffect(
    () => () => {
      if (file.current) URL.revokeObjectURL(file.current.url);
    },
    [],
  );

  async function generate() {
    setError(null);
    setState("working");
    track("gen_generate", {
      template: draft.template_slug,
      currency: draft.currency,
      language: draft.language,
    });
    try {
      const token = botBox.current ? await turnstileToken(botBox.current) : undefined;
      const blob = await downloadPdf(toPayload(draft, token ? { turnstile_token: token } : {}));
      if (file.current) URL.revokeObjectURL(file.current.url);
      const safe = draft.invoice_number.replace(/[^A-Za-z0-9_-]/g, "-") || "invoice";
      file.current = { url: URL.createObjectURL(blob), name: `invoice-${safe}.pdf` };
      save(file.current.url, file.current.name);
      setFileName(file.current.name);
      track("gen_download");
      onGenerated();
      setState("done");
      setCooling(true);
      window.setTimeout(() => setCooling(false), COOLDOWN_MS);
    } catch (e) {
      const message =
        e instanceof GeneratorApiError
          ? e.message
          : "Something went wrong while creating the PDF. Please try again.";
      track("gen_error", { code: e instanceof GeneratorApiError ? e.detail.code : "unknown" });
      setError(message);
      setState("idle");
    }
  }

  return (
    <div className="mt-5">
      {state !== "done" ? (
        <>
          <button
            type="button"
            onClick={generate}
            disabled={!ready || state === "working" || cooling}
            className={buttonClass({ size: "lg", className: "w-full" })}
          >
            {state === "working" ? (
              <>
                <Loader2 aria-hidden className="size-5 animate-spin" /> Creating your PDF…
              </>
            ) : (
              <>
                <Download aria-hidden className="size-5" /> Download PDF
              </>
            )}
          </button>
          <p className="text-small text-subtle mt-2 text-center">
            {ready
              ? "Free. The PDF has a small “Created with invoicor.com” line at the bottom."
              : "Add at least one line with a description to download."}
          </p>
        </>
      ) : (
        <div
          role="status"
          className="price-in bg-surface ring-brand-200 shadow-card relative overflow-hidden rounded-2xl p-5 ring-2"
        >
          <Stamp
            trigger="mount"
            tone="success"
            rotate={-8}
            className="absolute top-4 right-4 text-[0.8125rem]"
          >
            Ready
          </Stamp>
          <p className="text-ink flex items-center gap-2 font-bold">
            <CircleCheck aria-hidden className="text-success size-5" /> Your invoice is downloaded
          </p>
          <p className="text-small text-muted mt-1 pr-20">
            Check your Downloads folder for {fileName}.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => file.current && save(file.current.url, file.current.name)}
              className={buttonClass({ variant: "secondary", size: "sm" })}
            >
              <Download aria-hidden className="size-4" /> Download again
            </button>
            <button
              type="button"
              disabled={cooling}
              onClick={() => {
                dispatch({ type: "newInvoice" });
                setState("idle");
              }}
              className={buttonClass({ variant: "ghost", size: "sm" })}
            >
              <FilePlus2 aria-hidden className="size-4" /> Create another
            </button>
          </div>
          {appCta && (
            <div className="border-line mt-5 border-t pt-5">
              <p className="text-ink font-bold">Next time, send it from your phone.</p>
              <p className="text-small text-muted mt-1">
                The Invoicor app saves this client and your items, keeps every invoice with its
                status, and has no watermark. 3 invoices free.
              </p>
              <div className="mt-4">{appCta}</div>
            </div>
          )}
        </div>
      )}
      {error && (
        <p role="alert" className="text-small text-danger mt-3 text-center font-medium">
          {error}
        </p>
      )}
      <div ref={botBox} className="mt-3 flex justify-center empty:hidden" />
    </div>
  );
}
