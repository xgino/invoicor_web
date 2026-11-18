"use client";

import {
  CircleCheck,
  CloudOff,
  Eye,
  FilePlus2,
  LayoutTemplate,
  Sparkles,
  PencilLine,
  Trash2,
} from "lucide-react";
import { useCallback, useEffect, useReducer, useRef, useState, type ReactNode } from "react";
import { cx } from "@/components/ui/cx";
import { track } from "@/lib/analytics";
import { type Draft, filledItems, newDraft, newItemId } from "@/lib/generator/draft";
import type { GeneratorExample } from "@/lib/generator/examples";
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
import { GeneratorTextProvider, gf } from "./text";
import type { GeneratorUi } from "@/lib/i18n/pages/generator/en";
import type { DraftDefaults } from "@/lib/generator/defaults";

/**
 * The free invoice generator (ROADMAP chunks 32–35). Everything runs in the browser: the form,
 * totals, preview and the PDF. The draft autosaves locally.
 */
export function Generator({
  templates,
  currencies,
  languages,
  examples = {},
  appCta,
  t,
  intl = "en-US",
  defaults,
}: {
  /** The tool's text in the page's language (lib/i18n/pages/generator). */
  t: GeneratorUi;
  /** Number formatting for the on-screen totals. */
  intl?: string;
  /** Local starting values; a saved draft always wins. */
  defaults?: DraftDefaults;
  templates: GeneratorTemplate[];
  currencies: Option[];
  languages: Option[];
  /** Example invoices from the template pages, for ?example=plumbing (ROADMAP S1-a). */
  examples?: Record<string, GeneratorExample>;
  /** Server-rendered App Store badge + QR code, shown after a download (chunk 34). */
  appCta?: ReactNode;
}) {
  const fresh = useCallback(() => ({ ...newDraft(), ...defaults }), [defaults]);
  const [draft, dispatch] = useReducer(reducer, undefined, fresh);
  const ready = useRef(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [tab, setTab] = useState<"form" | "preview">("form");
  const [saved, setSaved] = useState<"idle" | "saved" | "blocked">("idle");
  const started = useRef(false);
  // An example that would replace the visitor's own items waits for a click instead.
  const [offer, setOffer] = useReducer(
    (_: { slug: string; example: GeneratorExample } | null, next: typeof _) => next,
    null,
  );

  // Restore the saved draft, then apply deep-link params (?template=&currency=&lang=&example=).
  useEffect(() => {
    const saved = loadDraft();
    const next = saved ?? fresh();
    const params = new URLSearchParams(window.location.search);
    const tpl = params.get("template");
    if (tpl && templates.some((t) => t.slug === tpl && t.tier === "free")) next.template_slug = tpl;
    const cur = params.get("currency")?.toUpperCase();
    if (cur && currencies.some((c) => c.code === cur)) next.currency = cur;
    const lang = params.get("lang");
    if (lang && languages.some((l) => l.code === lang)) next.language = lang;
    const slug = params.get("example");
    const example = slug ? examples[slug] : undefined;
    if (slug && example) {
      if (saved && filledItems(saved).length > 0) setOffer({ slug, example });
      else {
        dispatch({ type: "replace", draft: withExample(next, example) });
        track("gen_example", { example: slug });
        ready.current = true;
        return;
      }
    }
    dispatch({ type: "replace", draft: next });
    ready.current = true;
  }, [templates, currencies, languages, examples, fresh]);

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
    <GeneratorTextProvider value={{ t, intl }}>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] xl:gap-12">
        {/* Phone: switch between the form and the preview */}
        <div
          className="bg-tint ring-line sticky top-[4.5rem] z-20 flex gap-1 rounded-xl p-1 ring-1 lg:hidden"
          role="tablist"
          aria-label={t.viewAria}
        >
          {(
            [
              ["form", t.tabForm, PencilLine],
              ["preview", t.tabPreview, Eye],
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
          {offer && (
            <div
              role="status"
              className="bg-brand-50 ring-brand-200 mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl p-4 ring-1"
            >
              <p className="text-small text-ink flex-1">
                <Sparkles aria-hidden className="text-brand-600 mr-1.5 inline size-4" />
                <strong>
                  {gf(t.offerTitle, { niche: offer.example.niche.toLowerCase() })}
                </strong>{" "}
                {t.offerText}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    update({ type: "replace", draft: withExample(draft, offer.example) });
                    track("gen_example", { example: offer.slug });
                    setOffer(null);
                  }}
                  className="text-small bg-brand-600 hover:bg-brand-700 focus-visible:focus-ring rounded-lg px-3 py-1.5 font-bold text-white"
                >
                  {t.offerLoad}
                </button>
                <button
                  type="button"
                  onClick={() => setOffer(null)}
                  className="text-small text-muted hover:text-ink focus-visible:focus-ring rounded-lg px-3 py-1.5 font-bold"
                >
                  {t.offerKeep}
                </button>
              </div>
            </div>
          )}
          <SaveBar
            t={t}
            saved={saved}
            onNew={() => {
              update({ type: "newInvoice" });
              track("gen_new_invoice");
            }}
            onClear={() => {
              if (!window.confirm(t.clearConfirm)) return;
              clearDraft();
              dispatch({ type: "replace", draft: fresh() });
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
          aria-label={t.previewAria}
          className={cx("lg:sticky lg:top-24", tab === "form" && "hidden lg:block")}
        >
          <div className="mb-3 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-eyebrow text-subtle uppercase">{t.templateLabel}</p>
              <p className="text-ink truncate font-bold">{template?.name ?? draft.template_slug}</p>
            </div>
            <button
              type="button"
              onClick={() => setPickerOpen(true)}
              className="text-small text-brand-700 hover:bg-brand-50 focus-visible:focus-ring ring-brand-200 inline-flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 font-bold ring-1"
            >
              <LayoutTemplate aria-hidden className="size-4" /> {t.browseTemplates}
            </button>
          </div>

          <Preview draft={draft} />

          <dl className="bg-surface ring-line mt-5 space-y-1.5 rounded-2xl p-4 tabular-nums ring-1">
            <div className="text-small text-muted flex justify-between">
              <dt>{t.subtotal}</dt>
              <dd>{formatMoney(totals.subtotal, draft.currency, intl)}</dd>
            </div>
            {totals.discount > 0 && (
              <div className="text-small text-brand-700 flex justify-between">
                <dt>{t.discount}</dt>
                <dd>−{formatMoney(totals.discount, draft.currency, intl)}</dd>
              </div>
            )}
            <div className="text-small text-muted flex justify-between">
              <dt>
                {t.tax}
                {draft.tax_inclusive ? t.taxIncluded : ""}
              </dt>
              <dd>{formatMoney(totals.tax, draft.currency, intl)}</dd>
            </div>
            <div className="border-ink text-ink flex justify-between border-t-2 pt-2 font-bold">
              <dt>{t.total}</dt>
              <dd className="font-heading text-h4">
                {formatMoney(totals.total, draft.currency, intl)}
              </dd>
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
    </GeneratorTextProvider>
  );
}

/** Shows that the draft is kept in this browser, with the two ways to start over (ROADMAP 35b i). */
function SaveBar({
  t,
  saved,
  onNew,
  onClear,
}: {
  t: GeneratorUi;
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
            {t.savedBlocked}
          </>
        ) : (
          <>
            <CircleCheck aria-hidden className="text-success size-4" />
            {t.savedOk}
          </>
        )}
      </p>
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={onNew}
          className="text-small text-ink hover:bg-tint focus-visible:focus-ring inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-bold"
          title={t.newInvoiceTitle}
        >
          <FilePlus2 aria-hidden className="text-brand-600 size-4" /> {t.newInvoice}
        </button>
        <button
          type="button"
          onClick={onClear}
          className="text-small text-muted hover:bg-tint hover:text-ink focus-visible:focus-ring inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-bold"
        >
          <Trash2 aria-hidden className="size-4" /> {t.clearAll}
        </button>
      </div>
    </div>
  );
}

/** The draft with a template page's example items and notes (keeps business, client, settings). */
function withExample(draft: Draft, example: GeneratorExample): Draft {
  return {
    ...draft,
    items: example.items.map((i) => ({ id: newItemId(), description: "", ...i })),
    notes: example.notes || draft.notes,
  };
}
