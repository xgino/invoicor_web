"use client";

import {
  ArrowDown,
  ArrowUp,
  ImagePlus,
  Landmark,
  LayoutTemplate,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import { useId, useState, type Dispatch, type ReactNode } from "react";
import { cx } from "@/components/ui/cx";
import { Field, Input, NumberInput, Select, Textarea } from "@/components/ui/form";
import {
  DATE_FORMATS,
  type Draft,
  MAX_ITEMS,
  MAX_LOGO_BYTES,
  toNumber,
} from "@/lib/generator/draft";
import { formatMoney } from "@/lib/generator/totals";
import type { Action } from "./reducer";
import { gf, useGt } from "./text";

export interface Option {
  code: string;
  name: string;
  symbol?: string;
}

type Dispatcher = Dispatch<Action>;

/**
 * One fixed area of the form (ROADMAP 35b): always open, numbered, in the same order as the
 * invoice reads. Every field here is printed on the invoice, and nothing printed is missing.
 */
export function Area({
  step,
  title,
  hint,
  children,
}: {
  step: number;
  title: string;
  hint?: string;
  children: ReactNode;
}) {
  const id = useId();
  return (
    <section
      aria-labelledby={id}
      className="border-line border-b px-5 py-6 last:border-b-0 sm:px-6"
    >
      <div className="mb-4 flex items-start gap-3">
        <span
          aria-hidden
          className="bg-brand-50 text-brand-700 ring-brand-200 text-small grid size-7 shrink-0 place-items-center rounded-full font-bold tabular-nums ring-1"
        >
          {step}
        </span>
        <div>
          <h2 id={id} className="text-ink font-heading text-h4 leading-tight font-bold">
            {title}
          </h2>
          {hint && <p className="text-small text-subtle mt-0.5">{hint}</p>}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">{children}</div>
    </section>
  );
}

/** A labelled group inside an area (bank details). */
function SubGroup({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <fieldset className="bg-tint ring-line grid gap-4 rounded-2xl p-4 ring-1 sm:col-span-2 sm:grid-cols-2">
      <legend className="sr-only">{title}</legend>
      <p
        aria-hidden
        className="text-small text-ink flex items-center gap-2 font-bold sm:col-span-2"
      >
        {icon}
        {title}
      </p>
      {children}
    </fieldset>
  );
}

function TextField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  hint,
  wide = false,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  hint?: string;
  wide?: boolean;
  autoComplete?: string;
}) {
  const id = useId();
  return (
    <Field id={id} label={label} hint={hint} className={wide ? "sm:col-span-2" : undefined}>
      <Input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete ?? "off"}
        onChange={(e) => onChange(e.target.value)}
      />
    </Field>
  );
}

// ── 1. Setup ─────────────────────────────────────────────────────────────────

export function SetupArea({
  draft,
  dispatch,
  currencies,
  languages,
  templateName,
  onBrowse,
}: {
  draft: Draft;
  dispatch: Dispatcher;
  currencies: Option[];
  languages: Option[];
  templateName: string;
  onBrowse: () => void;
}) {
  const { t } = useGt();
  const ids = { cur: useId(), lang: useId(), fmt: useId() };
  const set = (key: keyof Draft) => (value: string) => dispatch({ type: "field", key, value });
  return (
    <Area step={1} title={t.setupTitle} hint={t.setupHint}>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <span className="text-small text-ink font-bold">{t.templateLabel}</span>
        <button
          type="button"
          onClick={onBrowse}
          className="bg-surface border-line-strong shadow-soft hover:border-brand-600 focus-visible:focus-ring flex h-11 items-center justify-between gap-3 rounded-lg border px-3.5 text-left transition-colors"
        >
          <span className="text-ink truncate font-medium">{templateName}</span>
          <span className="text-small text-brand-700 inline-flex shrink-0 items-center gap-1.5 font-bold">
            <LayoutTemplate aria-hidden className="size-4" /> {t.change}
          </span>
        </button>
      </div>
      <Field id={ids.lang} label={t.invoiceLanguage}>
        <Select
          id={ids.lang}
          value={draft.language}
          onChange={(e) => set("language")(e.target.value)}
        >
          {languages.map((l) => (
            <option key={l.code} value={l.code}>
              {l.name}
            </option>
          ))}
        </Select>
      </Field>
      <Field id={ids.cur} label={t.currency}>
        <Select
          id={ids.cur}
          value={draft.currency}
          onChange={(e) => set("currency")(e.target.value)}
        >
          {currencies.map((c) => (
            <option key={c.code} value={c.code}>
              {c.code}: {c.name}
            </option>
          ))}
        </Select>
      </Field>
      <Field id={ids.fmt} label={t.dateFormat}>
        <Select
          id={ids.fmt}
          value={draft.date_format}
          onChange={(e) => set("date_format")(e.target.value)}
        >
          {DATE_FORMATS.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </Select>
      </Field>
    </Area>
  );
}

// ── 2. Invoice details ───────────────────────────────────────────────────────

export function DetailsArea({ draft, dispatch }: { draft: Draft; dispatch: Dispatcher }) {
  const { t } = useGt();
  const ids = { issue: useId(), due: useId() };
  const set = (key: keyof Draft) => (value: string) => dispatch({ type: "field", key, value });
  return (
    <Area step={2} title={t.detailsTitle} hint={t.detailsHint}>
      <TextField
        label={t.invoiceNumber}
        value={draft.invoice_number}
        onChange={set("invoice_number")}
        hint={t.invoiceNumberHint}
        wide
      />
      <Field id={ids.issue} label={t.issueDate}>
        <Input
          id={ids.issue}
          type="date"
          value={draft.issue_date}
          onChange={(e) => set("issue_date")(e.target.value)}
        />
      </Field>
      <Field id={ids.due} label={t.dueDate}>
        <Input
          id={ids.due}
          type="date"
          value={draft.due_date}
          onChange={(e) => set("due_date")(e.target.value)}
        />
      </Field>
      <TextField
        label={t.paymentTerms}
        value={draft.payment_terms}
        onChange={set("payment_terms")}
        placeholder={t.paymentTermsPlaceholder}
        wide
      />
    </Area>
  );
}

// ── 3. Your business ─────────────────────────────────────────────────────────

export function BusinessArea({ draft, dispatch }: { draft: Draft; dispatch: Dispatcher }) {
  const { t } = useGt();
  const s = draft.sender;
  const set = (key: keyof Draft["sender"]) => (value: string) =>
    dispatch({ type: "sender", key, value });
  return (
    <Area step={3} title={t.businessTitle} hint={t.businessHint}>
      <LogoField value={s.logo} onChange={set("logo")} />
      <TextField
        label={t.businessName}
        value={s.company_name}
        onChange={set("company_name")}
        wide
        autoComplete="organization"
      />
      <TextField
        label={t.email}
        type="email"
        value={s.email}
        onChange={set("email")}
        autoComplete="email"
      />
      <TextField
        label={t.phone}
        type="tel"
        value={s.phone}
        onChange={set("phone")}
        autoComplete="tel"
      />
      <TextField
        label={t.address}
        value={s.address_line_1}
        onChange={set("address_line_1")}
        wide
        autoComplete="street-address"
      />
      <TextField label={t.postalCode} value={s.postal_code} onChange={set("postal_code")} />
      <TextField label={t.city} value={s.city} onChange={set("city")} />
      <TextField label={t.country} value={s.country} onChange={set("country")} wide />
      <TextField
        label={t.taxId}
        value={s.tax_id}
        onChange={set("tax_id")}
        placeholder={t.taxIdPlaceholder}
      />
      <TextField
        label={t.registration}
        value={s.registration_number}
        onChange={set("registration_number")}
        placeholder={t.registrationPlaceholder}
      />
      <SubGroup
        icon={<Landmark aria-hidden className="text-brand-600 size-4" />}
        title={t.bankDetails}
      >
        <TextField label={t.bankName} value={s.bank_name} onChange={set("bank_name")} wide />
        <TextField label={t.iban} value={s.iban} onChange={set("iban")} />
        <TextField label={t.swift} value={s.swift_code} onChange={set("swift_code")} />
      </SubGroup>
    </Area>
  );
}

// ── 4. Client ────────────────────────────────────────────────────────────────

export function ClientArea({ draft, dispatch }: { draft: Draft; dispatch: Dispatcher }) {
  const { t } = useGt();
  const c = draft.client;
  const set = (key: keyof Draft["client"]) => (value: string) =>
    dispatch({ type: "client", key, value });
  return (
    <Area step={4} title={t.clientTitle} hint={t.clientHint}>
      <TextField label={t.clientName} value={c.company_name} onChange={set("company_name")} wide />
      <TextField
        label={t.contactPerson}
        value={c.contact_name}
        onChange={set("contact_name")}
        wide
      />
      <TextField label={t.email} type="email" value={c.email} onChange={set("email")} />
      <TextField label={t.phone} type="tel" value={c.phone} onChange={set("phone")} />
      <TextField label={t.address} value={c.address_line_1} onChange={set("address_line_1")} wide />
      <TextField label={t.postalCode} value={c.postal_code} onChange={set("postal_code")} />
      <TextField label={t.city} value={c.city} onChange={set("city")} />
      <TextField label={t.country} value={c.country} onChange={set("country")} />
      <TextField label={t.taxId} value={c.tax_id} onChange={set("tax_id")} hint={t.clientTaxHint} />
    </Area>
  );
}

// ── 5. Items ─────────────────────────────────────────────────────────────────

export function ItemsArea({ draft, dispatch }: { draft: Draft; dispatch: Dispatcher }) {
  const { t } = useGt();
  const full = draft.items.length >= MAX_ITEMS;
  return (
    <Area step={5} title={t.itemsTitle} hint={gf(t.itemsHint, { max: MAX_ITEMS })}>
      <ol className="space-y-3 sm:col-span-2">
        {draft.items.map((item, index) => (
          <ItemRow
            key={item.id}
            draft={draft}
            index={index}
            dispatch={dispatch}
            last={index === draft.items.length - 1}
          />
        ))}
      </ol>
      <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
        <button
          type="button"
          disabled={full}
          onClick={() => dispatch({ type: "addItem" })}
          className="text-brand-700 hover:bg-brand-50 focus-visible:focus-ring ring-brand-200 inline-flex items-center gap-1.5 rounded-xl px-4 py-2 font-bold ring-1 transition-colors disabled:pointer-events-none disabled:opacity-50"
        >
          <Plus aria-hidden className="size-4" /> {t.addLine}
        </button>
        {full && <p className="text-small text-muted">{t.itemsLimit}</p>}
      </div>
    </Area>
  );
}

function ItemRow({
  draft,
  index,
  dispatch,
  last,
}: {
  draft: Draft;
  index: number;
  dispatch: Dispatcher;
  last: boolean;
}) {
  const { t, intl } = useGt();
  const item = draft.items[index]!;
  const ids = { name: useId(), desc: useId(), qty: useId(), price: useId() };
  const set = (key: "name" | "description" | "quantity" | "unit_price") => (value: string) =>
    dispatch({ type: "item", id: item.id, key, value });
  const amount = toNumber(item.quantity || "1") * toNumber(item.unit_price);
  const n = index + 1;

  return (
    <li className="bg-tint ring-line rounded-2xl p-4 ring-1">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="text-eyebrow text-subtle uppercase">{gf(t.line, { line: n })}</span>
        <div className="flex items-center gap-1">
          <IconButton
            label={gf(t.moveUp, { line: n })}
            disabled={index === 0}
            onClick={() => dispatch({ type: "moveItem", id: item.id, by: -1 })}
          >
            <ArrowUp className="size-4" />
          </IconButton>
          <IconButton
            label={gf(t.moveDown, { line: n })}
            disabled={last}
            onClick={() => dispatch({ type: "moveItem", id: item.id, by: 1 })}
          >
            <ArrowDown className="size-4" />
          </IconButton>
          <IconButton
            label={gf(t.removeLine, { line: n })}
            onClick={() => dispatch({ type: "removeItem", id: item.id })}
          >
            <Trash2 className="size-4" />
          </IconButton>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-[1fr_5.5rem_7.5rem]">
        <Field id={ids.name} label={t.item}>
          <Input
            id={ids.name}
            value={item.name}
            placeholder={t.itemPlaceholder}
            onChange={(e) => set("name")(e.target.value)}
          />
        </Field>
        <Field id={ids.qty} label={t.qty}>
          <NumberInput
            id={ids.qty}
            value={item.quantity}
            onChange={(e) => set("quantity")(e.target.value)}
          />
        </Field>
        <Field id={ids.price} label={t.price}>
          <NumberInput
            id={ids.price}
            value={item.unit_price}
            placeholder="0.00"
            onChange={(e) => set("unit_price")(e.target.value)}
          />
        </Field>
        <Field id={ids.desc} label={t.details} className="sm:col-span-2">
          <Input
            id={ids.desc}
            value={item.description}
            placeholder={t.detailsPlaceholder}
            onChange={(e) => set("description")(e.target.value)}
          />
        </Field>
        <div className="flex flex-col justify-end">
          <span className="text-small text-ink font-bold">{t.amount}</span>
          <span className="text-ink flex h-11 items-center justify-end font-bold tabular-nums">
            {formatMoney(amount, draft.currency, intl)}
          </span>
        </div>
      </div>
    </li>
  );
}

function IconButton({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      className="text-muted hover:bg-surface hover:text-ink focus-visible:focus-ring grid size-8 place-items-center rounded-lg transition-colors disabled:opacity-30"
    >
      {children}
    </button>
  );
}

// ── 6. Tax & discount ────────────────────────────────────────────────────────

export function TaxArea({ draft, dispatch }: { draft: Draft; dispatch: Dispatcher }) {
  const { t } = useGt();
  const ids = { rate: useId(), incl: useId(), dtype: useId(), dval: useId() };
  const set = (key: keyof Draft) => (value: Draft[keyof Draft]) =>
    dispatch({ type: "field", key, value });
  return (
    <Area step={6} title={t.taxTitle} hint={t.taxHint}>
      <Field id={ids.rate} label={t.taxRate}>
        <NumberInput
          id={ids.rate}
          suffix="%"
          value={draft.tax_rate}
          onChange={(e) => set("tax_rate")(e.target.value)}
        />
      </Field>
      <div className="flex items-end pb-2.5">
        <label
          htmlFor={ids.incl}
          className="text-small text-ink flex cursor-pointer items-center gap-2 font-medium"
        >
          <input
            id={ids.incl}
            type="checkbox"
            checked={draft.tax_inclusive}
            onChange={(e) => set("tax_inclusive")(e.target.checked)}
            className="accent-brand-600 size-4"
          />
          {t.taxInclusive}
        </label>
      </div>
      <Field id={ids.dtype} label={t.discount}>
        <Select
          id={ids.dtype}
          value={draft.discount_type}
          onChange={(e) => set("discount_type")(e.target.value)}
        >
          <option value="none">{t.discountNone}</option>
          <option value="percent">{t.discountPercent}</option>
          <option value="fixed">{t.discountFixed}</option>
        </Select>
      </Field>
      {draft.discount_type !== "none" && (
        <Field
          id={ids.dval}
          label={draft.discount_type === "percent" ? t.discountPct : t.discountAmount}
        >
          <NumberInput
            id={ids.dval}
            suffix={draft.discount_type === "percent" ? "%" : undefined}
            value={draft.discount_value}
            onChange={(e) => set("discount_value")(e.target.value)}
          />
        </Field>
      )}
    </Area>
  );
}

// ── 7. Notes ─────────────────────────────────────────────────────────────────

export function NotesArea({ draft, dispatch }: { draft: Draft; dispatch: Dispatcher }) {
  const { t } = useGt();
  const id = useId();
  return (
    <Area step={7} title={t.notesTitle} hint={t.notesHint}>
      <Field id={id} label={t.notesTitle} className="sm:col-span-2">
        <Textarea
          id={id}
          rows={3}
          value={draft.notes}
          onChange={(e) => dispatch({ type: "field", key: "notes", value: e.target.value })}
        />
      </Field>
    </Area>
  );
}

// ── 8. Payment link ──────────────────────────────────────────────────────────

export function PaymentLinkArea({ draft, dispatch }: { draft: Draft; dispatch: Dispatcher }) {
  const { t } = useGt();
  const id = useId();
  const badLink = draft.payment_url !== "" && !/^https?:\/\/\S+$/i.test(draft.payment_url.trim());
  return (
    <Area step={8} title={t.payTitle} hint={t.payHint}>
      <Field
        id={id}
        label={t.payLabel}
        hint={t.payFieldHint}
        error={badLink ? t.payError : undefined}
        className="sm:col-span-2"
      >
        <Input
          id={id}
          type="url"
          value={draft.payment_url}
          invalid={badLink}
          placeholder="https://"
          onChange={(e) => dispatch({ type: "field", key: "payment_url", value: e.target.value })}
        />
      </Field>
    </Area>
  );
}

// ── Logo ─────────────────────────────────────────────────────────────────────

function LogoField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const { t } = useGt();
  const id = useId();
  const [error, setError] = useState("");

  function pick(file: File | undefined) {
    setError("");
    if (!file) return;
    if (!["image/png", "image/jpeg"].includes(file.type)) return setError(t.logoErrType);
    if (file.size > MAX_LOGO_BYTES) return setError(t.logoErrSize);
    const reader = new FileReader();
    reader.onload = () => onChange(String(reader.result ?? ""));
    reader.onerror = () => setError(t.logoErrRead);
    reader.readAsDataURL(file);
  }

  return (
    <div className="sm:col-span-2">
      <span className="text-small text-ink mb-1.5 block font-bold">{t.logo}</span>
      <div className="flex flex-wrap items-center gap-3">
        {value ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element -- local data URI preview */}
            <img
              src={value}
              alt={t.logoAlt}
              className="ring-line bg-surface h-12 max-w-32 rounded-lg object-contain p-1 ring-1"
            />
            <button
              type="button"
              onClick={() => onChange("")}
              className="text-small text-muted hover:text-ink focus-visible:focus-ring inline-flex items-center gap-1 rounded-lg px-2 py-1"
            >
              <X aria-hidden className="size-4" /> {t.logoRemove}
            </button>
          </>
        ) : (
          <label
            htmlFor={id}
            className={cx(
              "text-small text-ink hover:bg-tint border-line-strong focus-within:focus-ring inline-flex cursor-pointer items-center gap-2 rounded-xl border border-dashed px-4 py-2.5 font-bold",
            )}
          >
            <ImagePlus aria-hidden className="text-brand-600 size-4" />
            {t.logoUpload}
            <input
              id={id}
              type="file"
              accept="image/png,image/jpeg"
              className="sr-only"
              onChange={(e) => pick(e.target.files?.[0])}
            />
          </label>
        )}
        <span className="text-small text-subtle">{t.logoHint}</span>
      </div>
      {error && (
        <p role="alert" className="text-small text-danger mt-1.5 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}
