import { COMPANY, CONTACT_EMAIL } from "@/lib/config";
import type { TrustDict } from "@/lib/i18n/pages/trust/en";

/**
 * The business behind Invoicor, for the About and Contact pages in every language. Only the fields
 * filled in `COMPANY` (lib/config.ts) are shown, so the page never states a detail we don't have.
 */
export function CompanyDetails({ t }: { t: TrustDict["company"] }) {
  const rows = [
    { label: t.business, value: COMPANY.legalName || "Invoicor" },
    {
      label: t.basedIn,
      value: [COMPANY.city, COMPANY.country && t.countryName].filter(Boolean).join(", "),
    },
    { label: t.kvk, value: COMPANY.kvk },
    { label: t.vat, value: COMPANY.vat },
    { label: t.data, value: t.dataValue },
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
        <dt className="text-small text-subtle sm:w-64 sm:shrink-0">{t.email}</dt>
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
