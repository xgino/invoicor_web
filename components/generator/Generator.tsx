"use client";

import { Eye, LayoutTemplate, PencilLine, RotateCcw } from "lucide-react";
import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { cx } from "@/components/ui/cx";
import { track } from "@/lib/analytics";
import { newDraft, toPayload } from "@/lib/generator/draft";
import { clearDraft, loadDraft, saveDraft } from "@/lib/generator/storage";
import { computeTotals, formatMoney } from "@/lib/generator/totals";
import {
  BusinessSection,
  ClientSection,
  DetailsSection,
  ItemsSection,
  NotesSection,
  type Option,
  PaymentSection,
  TaxSection,
} from "./FormSections";
import { Preview } from "./Preview";
import { reducer } from "./reducer";
import { type GeneratorTemplate, TemplatePicker } from "./TemplatePicker";

/**
 * The free invoice generator (ROADMAP chunks 32–34). The form and totals run in the browser; the
 * API is only called for the live preview (debounced) and the PDF. The draft autosaves locally.
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
  const [previewError, setPreviewError] = useState<string | null>(null);
  const [generated, setGenerated] = useState(false);
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
    const t = window.setTimeout(() => saveDraft(draft), 400);
    return () => window.clearTimeout(t);
  }, [draft]);

  const update: typeof dispatch = useCallback((action) => {
    if (!started.current) {
      started.current = true;
      track("gen_form_start");
    }
    setGenerated(false);
    dispatch(action);
  }, []);

  const payload = useMemo(() => JSON.stringify(toPayload(draft)), [draft]);
  const totals = computeTotals(draft);
  const template = templates.find((t) => t.slug === draft.template_slug);
  const onPreviewError = useCallback((m: string | null) => setPreviewError(m), []);

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
        <div className="bg-surface ring-line shadow-card overflow-hidden rounded-2xl ring-1">
          <BusinessSection draft={draft} dispatch={update} />
          <ClientSection draft={draft} dispatch={update} />
          <DetailsSection
            draft={draft}
            dispatch={update}
            currencies={currencies}
            languages={languages}
          />
          <ItemsSection draft={draft} dispatch={update} />
          <TaxSection draft={draft} dispatch={update} />
          <PaymentSection draft={draft} dispatch={update} />
          <NotesSection draft={draft} dispatch={update} />
        </div>
        <button
          type="button"
          onClick={() => {
            if (!window.confirm("Clear the whole form? This can't be undone.")) return;
            clearDraft();
            dispatch({ type: "reset" });
            setGenerated(false);
          }}
          className="text-small text-muted hover:text-ink focus-visible:focus-ring mt-4 inline-flex items-center gap-1.5 rounded-lg px-2 py-1"
        >
          <RotateCcw aria-hidden className="size-4" /> Clear form
        </button>
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

        <Preview
          payload={payload}
          onError={onPreviewError}
          footer={
            <p
              className={cx(
                "text-small text-subtle mt-2 text-center transition-opacity duration-400",
                generated ? "opacity-100" : "opacity-0",
              )}
              aria-hidden={!generated}
            >
              Created with <span className="text-brand-700 font-bold">invoicor.com</span>
            </p>
          }
        />

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

        {/* Generate flow: chunk 34 */}
        <div data-generated={generated} data-preview-error={previewError ?? ""} hidden>
          {appCta}
        </div>
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
