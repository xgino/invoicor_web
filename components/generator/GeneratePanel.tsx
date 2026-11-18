"use client";

import { CircleCheck, Download, FilePlus2, Loader2 } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { buttonClass } from "@/components/ui/Button";
import { Stamp } from "@/components/ui/invoice";
import { track } from "@/lib/analytics";
import { type Draft, filledItems } from "@/lib/generator/draft";
import { makePdf } from "@/lib/generator/pdf";
import type { Action } from "./reducer";
import { gf, useGt } from "./text";
import { FREE_INVOICES } from "@/lib/pricing";

/** A short pause before "Create another", so a double click doesn't wipe the form by accident. */
const COOLDOWN_MS = 1500;

function save(url: string, filename: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

/**
 * Generate flow (ROADMAP chunk 34, 35c): the PDF is made in this browser from the filled template
 * (lib/generator/pdf.ts), downloaded, then the hand-off to the app. Nothing is sent to a server.
 * "Download again" reuses the same file.
 */
export function GeneratePanel({
  draft,
  dispatch,
  onGenerated,
  appCta,
}: {
  draft: Draft;
  dispatch: (action: Action) => void;
  onGenerated?: () => void;
  appCta?: ReactNode;
}) {
  const { t } = useGt();
  const [state, setState] = useState<"idle" | "working" | "done">("idle");
  const [error, setError] = useState<string | null>(null);
  const [cooling, setCooling] = useState(false);
  const [fileName, setFileName] = useState("");
  const file = useRef<{ url: string; name: string } | null>(null);
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
      const blob = await makePdf(draft);
      if (file.current) URL.revokeObjectURL(file.current.url);
      const safe = draft.invoice_number.replace(/[^A-Za-z0-9_-]/g, "-") || t.fileName;
      file.current = { url: URL.createObjectURL(blob), name: `${t.fileName}-${safe}.pdf` };
      save(file.current.url, file.current.name);
      setFileName(file.current.name);
      track("gen_download");
      onGenerated?.();
      setState("done");
      setCooling(true);
      window.setTimeout(() => setCooling(false), COOLDOWN_MS);
    } catch (e) {
      track("gen_error", { code: (e as Error)?.name || "unknown" });
      setError(t.pdfError);
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
                <Loader2 aria-hidden className="size-5 animate-spin" /> {t.creating}
              </>
            ) : (
              <>
                <Download aria-hidden className="size-5" /> {t.download}
              </>
            )}
          </button>
          <p className="text-small text-subtle mt-2 text-center">
            {ready ? t.downloadNote : t.downloadNeedsItem}
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
            {t.ready}
          </Stamp>
          <p className="text-ink flex items-center gap-2 font-bold">
            <CircleCheck aria-hidden className="text-success size-5" /> {t.doneTitle}
          </p>
          <p className="text-small text-muted mt-1 pr-20">{gf(t.doneText, { file: fileName })}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => file.current && save(file.current.url, file.current.name)}
              className={buttonClass({ variant: "secondary", size: "sm" })}
            >
              <Download aria-hidden className="size-4" /> {t.downloadAgain}
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
              <FilePlus2 aria-hidden className="size-4" /> {t.createAnother}
            </button>
          </div>
          {appCta && (
            <div className="border-line mt-5 border-t pt-5">
              <p className="text-ink font-bold">{t.appTitle}</p>
              <p className="text-small text-muted mt-1">{gf(t.appText, { n: FREE_INVOICES })}</p>
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
    </div>
  );
}
