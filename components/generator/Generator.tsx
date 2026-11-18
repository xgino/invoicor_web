"use client";

import {
  CircleCheck,
  CloudOff,
  Eye,
  FilePlus2,
  LayoutTemplate,
  PencilLine,
  Trash2,
} from "lucide-react";
import { useCallback, useEffect, useReducer, useRef, useState, type ReactNode } from "react";
import { cx } from "@/components/ui/cx";
import { track } from "@/lib/analytics";
import { newDraft } from "@/lib/generator/draft";
import { clearDraft, loadDraft, saveDraft } from "@/lib/generator/storage";
import { computeTotals, formatMoney } from "@/lib/generator/totals";
import {
  BusinessArea,
  ClientArea,
  DetailsArea,
  ItemsArea,
  NotesArea,
  type Option,
  PaymentLinkArea,
  SetupArea,
  TaxArea,
} from "./FormSections";
import { GeneratePanel } from "./GeneratePanel";
import { Preview } from "./Preview";
import { reducer } from "./reducer";
import { type GeneratorTemplate, TemplatePicker } from "./TemplatePicker";

/**
 * The free invoice generator (ROADMAP chunks 32–34). The form and totals run in the browser; the
 * preview is filled in the browser too; the API is only called for the PDF. The draft autosaves locally.
 */
export function Generator({
  templates,
  currencies,
  languages,
  appCta,
}: {
  templates: GeneratorTemplate[];
  currencies: Option[];
  languages: Option[];
  /** Server-rendered App Store badge + QR code, shown after a download (chunk 34). */
  appCta?: ReactNode;
}) {
  const [draft, dispatch] = useReducer(reducer, undefined, () => newDraft());
  const ready = useRef(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [tab, setTab] = useState<"form" | "preview">("form");
  const [saved, setSaved] = useState<"idle" | "saved" | "blocked">("idle");
  const started = useRef(false);

  // Restore the saved draft, then apply deep-link params (?template=&currency=&lang=).
  useEffect(() => {
    const saved = loadDraft();
    const next = saved ?? newDraft();
    const params = new URLSearchParams(window.location.search);
    const tpl = params.get("template");
    if (tpl && templates.some((t) => t.slug === tpl && t.tier === "free")) next.template_slug = tpl;
    const cur = params.get("currency")?.toUpperCase();
    if (cur && currencies.some((c) => c.code === cur)) next.currency = cur;
    const lang = params.get("lang");
    if (lang && languages.some((l) => l.code === lang)) next.language = lang;
    dispatch({ type: "replace", draft: next });
    ready.current = true;
  }, [templates, currencies, languages]);

  // Autosave (debounced) and the first-edit analytics event.
  useEffect(() => {
    if (!ready.current) return;
    const t = window.setTimeout(() => setSaved(saveDraft(draft) ? "saved" : "blocked"), 400);
    return () => window.clearTimeout(t);
  }, [draft]);

  const update: typeof dispatch = useCallback((action) => {
    if (!started.current) {
      started.current = true;
      track("gen_form_start");
    }
    dispatch(action);
  }, []);

  const totals = computeTotals(draft);
  const template = templates.find((t) => t.slug === draft.template_slug);

  function pickTemplate(slug: string) {
    track("gen_template_change", { template: slug });
    update({ type: "field", key: "template_slug", value: slug });
  }

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] xl:gap-12">
      {/* Phone: switch between the form and the preview */}
      <div
        className="bg-tint ring-line sticky top-[4.5rem] z-20 flex gap-1 rounded-xl p-1 ring-1 lg:hidden"
        role="tablist"
        aria-label="Generator view"
      >
        {(
          [
            ["form", "Form", PencilLine],
            ["preview", "Preview", Eye],
          ] as const
        ).map(([key, label, Icon]) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={tab === key}
            onClick={() => setTab(key)}
            className={cx(
              "text-small focus-visible:focus-ring flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 font-bold transition-colors",
              tab === key ? "bg-surface text-ink shadow-soft" : "text-muted",
            )}
          >
            <Icon aria-hidden className="size-4" /> {label}
          </button>
        ))}
      </div>

      {/* Form */}
      <div className={cx(tab === "preview" && "hidden lg:block")}>
        <SaveBar
          saved={saved}
          onNew={() => {
            update({ type: "newInvoice" });
            track("gen_new_invoice");
          }}
          onClear={() => {
            if (
              !window.confirm(
                "Clear everything? This removes your business details, client and items from this browser.",
              )
            )
              return;
            clearDraft();
            dispatch({ type: "reset" });
            setSaved("idle");
          }}
        />
        <div className="bg-surface ring-line shadow-card overflow-hidden rounded-2xl ring-1">
          <SetupArea
            draft={draft}
            dispatch={update}
            currencies={currencies}
            languages={languages}
            templateName={template?.name ?? draft.template_slug}
            onBrowse={() => setPickerOpen(true)}
          />
          <DetailsArea draft={draft} dispatch={update} />
          <BusinessArea draft={draft} dispatch={update} />
          <ClientArea draft={draft} dispatch={update} />
          <ItemsArea draft={draft} dispatch={update} />
          <TaxArea draft={draft} dispatch={update} />
          <NotesArea draft={draft} dispatch={update} />
          <PaymentLinkArea draft={draft} dispatch={update} />
        </div>
      </div>

      {/* Preview + summary + generate */}
      <aside
        aria-label="Invoice preview"
        className={cx("lg:sticky lg:top-24", tab === "form" && "hidden lg:block")}
      >
        <div className="mb-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-eyebrow text-subtle uppercase">Template</p>
            <p className="text-ink truncate font-bold">{template?.name ?? draft.template_slug}</p>
          </div>
          <button
            type="button"
            onClick={() => setPickerOpen(true)}
            className="text-small text-brand-700 hover:bg-brand-50 focus-visible:focus-ring ring-brand-200 inline-flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 font-bold ring-1"
          >
            <LayoutTemplate aria-hidden className="size-4" /> Browse templates
          </button>
        </div>

        <Preview draft={draft} />

        <dl className="bg-surface ring-line mt-5 space-y-1.5 rounded-2xl p-4 tabular-nums ring-1">
          <div className="text-small text-muted flex justify-between">
            <dt>Subtotal</dt>
            <dd>{formatMoney(totals.subtotal, draft.currency)}</dd>
          </div>
          {totals.discount > 0 && (
            <div className="text-small text-brand-700 flex justify-between">
              <dt>Discount</dt>
              <dd>−{formatMoney(totals.discount, draft.currency)}</dd>
            </div>
          )}
          <div className="text-small text-muted flex justify-between">
            <dt>Tax{draft.tax_inclusive ? " (included)" : ""}</dt>
            <dd>{formatMoney(totals.tax, draft.currency)}</dd>
          </div>
          <div className="border-ink text-ink flex justify-between border-t-2 pt-2 font-bold">
            <dt>Total</dt>
            <dd className="font-heading text-h4">{formatMoney(totals.total, draft.currency)}</dd>
          </div>
        </dl>
        <GeneratePanel draft={draft} dispatch={update} appCta={appCta} />
      </aside>

      <TemplatePicker
        templates={templates}
        value={draft.template_slug}
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onPick={pickTemplate}
      />
    </div>
  );
}

/** Shows that the draft is kept in this browser, with the two ways to start over (ROADMAP 35b i). */
function SaveBar({
  saved,
  onNew,
  onClear,
}: {
  saved: "idle" | "saved" | "blocked";
  onNew: () => void;
  onClear: () => void;
}) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
      <p className="text-small text-muted flex items-center gap-1.5" role="status">
        {saved === "blocked" ? (
          <>
            <CloudOff aria-hidden className="text-subtle size-4" />
            Not saved: this browser blocks storage
          </>
        ) : (
          <>
            <CircleCheck aria-hidden className="text-success size-4" />
            Saved in this browser only. Nobody else can see it.
          </>
        )}
      </p>
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={onNew}
          className="text-small text-ink hover:bg-tint focus-visible:focus-ring inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-bold"
          title="Keeps your business details, clears the client and items"
        >
          <FilePlus2 aria-hidden className="text-brand-600 size-4" /> New invoice
        </button>
        <button
          type="button"
          onClick={onClear}
          className="text-small text-muted hover:bg-tint hover:text-ink focus-visible:focus-ring inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-bold"
        >
          <Trash2 aria-hidden className="size-4" /> Clear everything
        </button>
      </div>
    </div>
  );
}
