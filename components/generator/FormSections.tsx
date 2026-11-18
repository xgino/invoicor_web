"use client";

import { ArrowDown, ArrowUp, ChevronDown, ImagePlus, Plus, Trash2, X } from "lucide-react";
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

export interface Option {
  code: string;
  name: string;
  symbol?: string;
}

/** A collapsible form section (native <details>: keyboard and screen reader friendly). */
export function Section({
  title,
  hint,
  defaultOpen = false,
  children,
}: {
  title: string;
  hint?: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  return (
    <details open={defaultOpen} className="group border-line border-b last:border-b-0">
      <summary className="hover:bg-tint focus-visible:focus-ring flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 [&::-webkit-details-marker]:hidden">
        <span>
          <span className="text-ink block font-bold">{title}</span>
          {hint && <span className="text-small text-subtle block">{hint}</span>}
        </span>
        <ChevronDown
          aria-hidden
          className="text-subtle size-5 shrink-0 transition-transform duration-250 group-open:rotate-180"
        />
      </summary>
      <div className="grid gap-4 px-5 pt-1 pb-6 sm:grid-cols-2">{children}</div>
    </details>
  );
}

type Dispatcher = Dispatch<Action>;

function TextField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  wide = false,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  wide?: boolean;
  autoComplete?: string;
}) {
  const id = useId();
  return (
    <Field id={id} label={label} className={wide ? "sm:col-span-2" : undefined}>
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

export function BusinessSection({ draft, dispatch }: { draft: Draft; dispatch: Dispatcher }) {
  const s = draft.sender;
  const set = (key: keyof Draft["sender"]) => (value: string) =>
    dispatch({ type: "sender", key, value });
  return (
    <Section title="Your business" hint="Who the invoice is from" defaultOpen>
      <LogoField value={s.logo} onChange={set("logo")} />
      <TextField
        label="Business name"
        value={s.company_name}
        onChange={set("company_name")}
        wide
        autoComplete="organization"
      />
      <TextField
        label="Email"
        type="email"
        value={s.email}
        onChange={set("email")}
        autoComplete="email"
      />
      <TextField
        label="Phone"
        type="tel"
        value={s.phone}
        onChange={set("phone")}
        autoComplete="tel"
      />
      <TextField
        label="Address"
        value={s.address_line_1}
        onChange={set("address_line_1")}
        wide
        autoComplete="street-address"
      />
      <TextField label="City" value={s.city} onChange={set("city")} />
      <TextField label="Postal code" value={s.postal_code} onChange={set("postal_code")} />
      <TextField label="Country" value={s.country} onChange={set("country")} />
      <TextField label="Tax / VAT number" value={s.tax_id} onChange={set("tax_id")} />
      <TextField
        label="Website"
        value={s.website}
        onChange={set("website")}
        wide
        placeholder="https://"
      />
    </Section>
  );
}

export function ClientSection({ draft, dispatch }: { draft: Draft; dispatch: Dispatcher }) {
  const c = draft.client;
  const set = (key: keyof Draft["client"]) => (value: string) =>
    dispatch({ type: "client", key, value });
  return (
    <Section title="Client" hint="Who you're billing" defaultOpen>
      <TextField
        label="Client or company name"
        value={c.company_name}
        onChange={set("company_name")}
        wide
      />
      <TextField label="Contact person" value={c.contact_name} onChange={set("contact_name")} />
      <TextField label="Email" type="email" value={c.email} onChange={set("email")} />
      <TextField label="Address" value={c.address_line_1} onChange={set("address_line_1")} wide />
      <TextField label="City" value={c.city} onChange={set("city")} />
      <TextField label="Postal code" value={c.postal_code} onChange={set("postal_code")} />
      <TextField label="Country" value={c.country} onChange={set("country")} />
      <TextField label="Tax / VAT number" value={c.tax_id} onChange={set("tax_id")} />
    </Section>
  );
}

export function DetailsSection({
  draft,
  dispatch,
  currencies,
  languages,
}: {
  draft: Draft;
  dispatch: Dispatcher;
  currencies: Option[];
  languages: Option[];
}) {
  const ids = { cur: useId(), lang: useId(), fmt: useId(), issue: useId(), due: useId() };
  const set = (key: keyof Draft) => (value: string) => dispatch({ type: "field", key, value });
  return (
    <Section title="Invoice details" hint="Number, dates, currency and language" defaultOpen>
      <TextField
        label="Invoice number"
        value={draft.invoice_number}
        onChange={set("invoice_number")}
      />
      <Field id={ids.cur} label="Currency">
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
      <Field id={ids.issue} label="Issue date">
        <Input
          id={ids.issue}
          type="date"
          value={draft.issue_date}
          onChange={(e) => set("issue_date")(e.target.value)}
        />
      </Field>
      <Field id={ids.due} label="Due date">
        <Input
          id={ids.due}
          type="date"
          value={draft.due_date}
          onChange={(e) => set("due_date")(e.target.value)}
        />
      </Field>
      <Field id={ids.lang} label="Invoice language">
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
      <Field id={ids.fmt} label="Date format">
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
    </Section>
  );
}

export function ItemsSection({ draft, dispatch }: { draft: Draft; dispatch: Dispatcher }) {
  const full = draft.items.length >= MAX_ITEMS;
  return (
    <Section
      title="Line items"
      hint={`Up to ${MAX_ITEMS} lines, like the app's free plan`}
      defaultOpen
    >
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
          <Plus aria-hidden className="size-4" /> Add line
        </button>
        {full && (
          <p className="text-small text-muted">
            That&apos;s the free limit. The Invoicor app lets you add more.
          </p>
        )}
      </div>
    </Section>
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
  const item = draft.items[index]!;
  const ids = { name: useId(), desc: useId(), qty: useId(), price: useId() };
  const set = (key: "name" | "description" | "quantity" | "unit_price") => (value: string) =>
    dispatch({ type: "item", id: item.id, key, value });
  const amount = toNumber(item.quantity || "1") * toNumber(item.unit_price);
  const n = index + 1;

  return (
    <li className="bg-tint ring-line rounded-2xl p-4 ring-1">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="text-eyebrow text-subtle uppercase">Line {n}</span>
        <div className="flex items-center gap-1">
          <IconButton
            label={`Move line ${n} up`}
            disabled={index === 0}
            onClick={() => dispatch({ type: "moveItem", id: item.id, by: -1 })}
          >
            <ArrowUp className="size-4" />
          </IconButton>
          <IconButton
            label={`Move line ${n} down`}
            disabled={last}
            onClick={() => dispatch({ type: "moveItem", id: item.id, by: 1 })}
          >
            <ArrowDown className="size-4" />
          </IconButton>
          <IconButton
            label={`Remove line ${n}`}
            onClick={() => dispatch({ type: "removeItem", id: item.id })}
          >
            <Trash2 className="size-4" />
          </IconButton>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-[1fr_6rem_8rem]">
        <Field id={ids.name} label="Description">
          <Input
            id={ids.name}
            value={item.name}
            placeholder="e.g. Labor, 2 hours"
            onChange={(e) => set("name")(e.target.value)}
          />
        </Field>
        <Field id={ids.qty} label="Qty">
          <NumberInput
            id={ids.qty}
            value={item.quantity}
            onChange={(e) => set("quantity")(e.target.value)}
          />
        </Field>
        <Field id={ids.price} label="Price">
          <NumberInput
            id={ids.price}
            value={item.unit_price}
            placeholder="0.00"
            onChange={(e) => set("unit_price")(e.target.value)}
          />
        </Field>
        <Field id={ids.desc} label="Details (optional)" className="sm:col-span-2">
          <Input
            id={ids.desc}
            value={item.description}
            placeholder="Shown under the line"
            onChange={(e) => set("description")(e.target.value)}
          />
        </Field>
        <div className="flex flex-col justify-end">
          <span className="text-small text-ink font-bold">Amount</span>
          <span className="text-ink flex h-11 items-center justify-end font-bold tabular-nums">
            {formatMoney(amount, draft.currency)}
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

export function TaxSection({ draft, dispatch }: { draft: Draft; dispatch: Dispatcher }) {
  const ids = { rate: useId(), incl: useId(), dtype: useId(), dval: useId() };
  const set = (key: keyof Draft) => (value: Draft[keyof Draft]) =>
    dispatch({ type: "field", key, value });
  return (
    <Section title="Tax & discount" hint="One tax rate for the whole invoice">
      <Field id={ids.rate} label="Tax rate">
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
          Prices already include tax
        </label>
      </div>
      <Field id={ids.dtype} label="Discount">
        <Select
          id={ids.dtype}
          value={draft.discount_type}
          onChange={(e) => set("discount_type")(e.target.value)}
        >
          <option value="none">No discount</option>
          <option value="percent">Percentage (%)</option>
          <option value="fixed">Fixed amount</option>
        </Select>
      </Field>
      {draft.discount_type !== "none" && (
        <Field
          id={ids.dval}
          label={draft.discount_type === "percent" ? "Discount %" : "Discount amount"}
        >
          <NumberInput
            id={ids.dval}
            suffix={draft.discount_type === "percent" ? "%" : undefined}
            value={draft.discount_value}
            onChange={(e) => set("discount_value")(e.target.value)}
          />
        </Field>
      )}
    </Section>
  );
}

export function PaymentSection({ draft, dispatch }: { draft: Draft; dispatch: Dispatcher }) {
  const linkId = useId();
  const setField = (key: keyof Draft) => (value: string) => dispatch({ type: "field", key, value });
  const setSender = (key: keyof Draft["sender"]) => (value: string) =>
    dispatch({ type: "sender", key, value });
  const badLink = draft.payment_url !== "" && !/^https?:\/\/\S+$/i.test(draft.payment_url.trim());
  return (
    <Section title="Payment" hint="How your client pays you (directly, never through us)">
      <TextField
        label="Payment terms"
        value={draft.payment_terms}
        onChange={setField("payment_terms")}
        wide
        placeholder="e.g. Due within 14 days"
      />
      <Field
        id={linkId}
        label="Your payment link (optional)"
        hint="Your own PayPal, Stripe or other link. It's printed on the invoice."
        error={badLink ? "Start the link with https://" : undefined}
        className="sm:col-span-2"
      >
        <Input
          id={linkId}
          type="url"
          value={draft.payment_url}
          invalid={badLink}
          placeholder="https://"
          onChange={(e) => setField("payment_url")(e.target.value)}
        />
      </Field>
      <TextField
        label="Bank name"
        value={draft.sender.bank_name}
        onChange={setSender("bank_name")}
      />
      <TextField
        label="IBAN / account number"
        value={draft.sender.iban}
        onChange={setSender("iban")}
      />
      <TextField
        label="SWIFT / BIC"
        value={draft.sender.swift_code}
        onChange={setSender("swift_code")}
      />
    </Section>
  );
}

export function NotesSection({ draft, dispatch }: { draft: Draft; dispatch: Dispatcher }) {
  const id = useId();
  return (
    <Section title="Notes" hint="A thank-you, warranty terms or anything else">
      <Field id={id} label="Notes" className="sm:col-span-2">
        <Textarea
          id={id}
          rows={3}
          value={draft.notes}
          onChange={(e) => dispatch({ type: "field", key: "notes", value: e.target.value })}
        />
      </Field>
    </Section>
  );
}

function LogoField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const id = useId();
  const [error, setError] = useState("");

  function pick(file: File | undefined) {
    setError("");
    if (!file) return;
    if (!["image/png", "image/jpeg"].includes(file.type))
      return setError("Use a PNG or JPG image.");
    if (file.size > MAX_LOGO_BYTES) return setError("The logo must be 500 KB or smaller.");
    const reader = new FileReader();
    reader.onload = () => onChange(String(reader.result ?? ""));
    reader.onerror = () => setError("That image couldn't be read.");
    reader.readAsDataURL(file);
  }

  return (
    <div className="sm:col-span-2">
      <span className="text-small text-ink mb-1.5 block font-bold">Logo (optional)</span>
      <div className="flex items-center gap-3">
        {value ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element -- local data URI preview */}
            <img
              src={value}
              alt="Your logo"
              className="ring-line bg-surface h-12 max-w-32 rounded-lg object-contain p-1 ring-1"
            />
            <button
              type="button"
              onClick={() => onChange("")}
              className="text-small text-muted hover:text-ink focus-visible:focus-ring inline-flex items-center gap-1 rounded-lg px-2 py-1"
            >
              <X aria-hidden className="size-4" /> Remove
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
            Upload logo
            <input
              id={id}
              type="file"
              accept="image/png,image/jpeg"
              className="sr-only"
              onChange={(e) => pick(e.target.files?.[0])}
            />
          </label>
        )}
        <span className="text-small text-subtle">PNG or JPG, up to 500 KB</span>
      </div>
      {error && (
        <p role="alert" className="text-small text-danger mt-1.5 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}
