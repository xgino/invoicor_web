import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cx } from "./cx";

/**
 * Form parts for the free invoice generator (ROADMAP chunk 17d, used from chunk 32).
 *
 *   <Field id="client" label="Client name" hint="As it appears on the invoice" error={err}>
 *     <Input id="client" invalid={!!err} aria-describedby={messageId("client")} />
 *   </Field>
 */

/** The id of the hint/error line under a field, for aria-describedby. */
export const messageId = (id: string) => `${id}-message`;

const CONTROL =
  "bg-surface text-ink border-line-strong shadow-soft w-full rounded-lg border px-3.5 text-body placeholder:text-subtle transition-colors duration-150 hover:border-stone-400 focus-visible:focus-ring focus-visible:border-brand-600 disabled:bg-tint disabled:text-subtle aria-invalid:border-danger";

export function Field({
  id,
  label,
  hint,
  error,
  required,
  className,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx("flex flex-col gap-1.5", className)}>
      <label htmlFor={id} className="text-small text-ink font-bold">
        {label}
        {required && (
          <span aria-hidden className="text-brand-700">
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      {(error || hint) && (
        <p
          id={messageId(id)}
          className={cx("text-small", error ? "text-danger font-medium" : "text-subtle")}
          role={error ? "alert" : undefined}
        >
          {error ?? hint}
        </p>
      )}
    </div>
  );
}

type Invalid = { invalid?: boolean };

export function Input({
  invalid,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & Invalid) {
  return (
    <input
      aria-invalid={invalid || undefined}
      className={cx(CONTROL, "h-11", className)}
      {...props}
    />
  );
}

export function Textarea({
  invalid,
  className,
  rows = 4,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & Invalid) {
  return (
    <textarea
      rows={rows}
      aria-invalid={invalid || undefined}
      className={cx(CONTROL, "py-2.5 leading-relaxed", className)}
      {...props}
    />
  );
}

export function Select({
  invalid,
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & Invalid) {
  return (
    <div className="relative">
      <select
        aria-invalid={invalid || undefined}
        className={cx(CONTROL, "h-11 appearance-none pr-10", className)}
        {...props}
      >
        {children}
      </select>
      <svg
        aria-hidden
        viewBox="0 0 20 20"
        className="text-subtle pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2"
        fill="currentColor"
      >
        <path d="M5.2 7.2a.75.75 0 0 1 1.06 0L10 10.94l3.74-3.74a.75.75 0 1 1 1.06 1.06l-4.27 4.27a.75.75 0 0 1-1.06 0L5.2 8.26a.75.75 0 0 1 0-1.06Z" />
      </svg>
    </div>
  );
}

/** Amount or quantity input, with an optional prefix ("$") or suffix ("%"). */
export function NumberInput({
  invalid,
  prefix,
  suffix,
  className,
  ...props
}: Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "prefix"> &
  Invalid & { prefix?: string; suffix?: string }) {
  return (
    <div className="relative">
      {prefix && (
        <span
          aria-hidden
          className="text-subtle pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2"
        >
          {prefix}
        </span>
      )}
      <input
        type="text"
        inputMode="decimal"
        autoComplete="off"
        aria-invalid={invalid || undefined}
        className={cx(
          CONTROL,
          "h-11 text-right tabular-nums",
          prefix && "pl-8",
          suffix && "pr-9",
          className,
        )}
        {...props}
      />
      {suffix && (
        <span
          aria-hidden
          className="text-subtle pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2"
        >
          {suffix}
        </span>
      )}
    </div>
  );
}
