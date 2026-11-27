import { COMPANY, CONTACT_EMAIL } from "@/lib/config";

/**
 * The business behind Invoicor, for /about and /contact. Only the fields filled in
 * `COMPANY` (lib/config.ts) are shown, so the page never states a detail we don't have.
 */
export function CompanyDetails() {
  const rows = [
    { label: "Business", value: COMPANY.legalName || "Invoicor" },
    { label: "Based in", value: [COMPANY.city, COMPANY.country].filter(Boolean).join(", ") },
    { label: "KvK (Dutch Chamber of Commerce)", value: COMPANY.kvk },
    { label: "VAT number", value: COMPANY.vat },
    { label: "Data", value: "Servers in Germany (EU), handled under the GDPR" },
  ].filter((r) => r.value);
  return (
    <dl className="bg-surface ring-line divide-line divide-y rounded-2xl ring-1">
      {rows.map((r) => (
        <div key={r.label} className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:gap-6">
          <dt className="text-small text-subtle sm:w-64 sm:shrink-0">{r.label}</dt>
          <dd className="text-ink">{r.value}</dd>
        </div>
      ))}
      <div className="flex flex-col gap-1 px-6 py-4 sm:flex-row sm:gap-6">
        <dt className="text-small text-subtle sm:w-64 sm:shrink-0">Email</dt>
        <dd>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-brand-700 font-medium underline-offset-4 hover:underline"
            data-track="contact_click"
            data-track-link="email"
          >
            {CONTACT_EMAIL}
          </a>
        </dd>
      </div>
    </dl>
  );
}
