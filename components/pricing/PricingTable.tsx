"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { BillingSwitch, type Period } from "@/components/ui/BillingSwitch";
import { buttonClass } from "@/components/ui/Button";
import { Badge } from "@/components/ui/content";
import {
  CoffeeCup,
  InvoicePaper,
  LineItems,
  Money,
  PaperLabel,
  Stamp,
} from "@/components/ui/invoice";
import { appStoreLink } from "@/lib/config";
import {
  FREE_INVOICES,
  PLANS,
  PRICING,
  YEARLY_MONTHS_FREE,
  YEARLY_SAVING_PERCENT,
  formatPrice,
  type Plan,
  yearlySaving,
} from "@/lib/pricing";

/**
 * The pricing table, with every plan written out as an invoice (ROADMAP chunks 17.2d and 20c).
 * Prices come from content/pricing.json. Yearly is the default because it's the better deal;
 * the saving is calculated, never typed. All prices are in the static HTML.
 */
export function PricingTable({ campaign = "pricing" }: { campaign?: string }) {
  const [period, setPeriod] = useState<Period>("yearly");

  return (
    <div>
      <div className="mb-10 flex justify-center">
        <BillingSwitch
          value={period}
          onChange={setPeriod}
          savingLabel={`${YEARLY_MONTHS_FREE} months free`}
        />
      </div>
      <div className="grid items-start gap-8 lg:grid-cols-3 lg:gap-6">
        {PLANS.map((plan, i) => (
          <PlanInvoice
            key={plan.id}
            plan={plan}
            period={period}
            number={i + 1}
            campaign={campaign}
          />
        ))}
      </div>
      <p className="text-small text-subtle mt-10 text-center">
        Prices in {PRICING.currency}. Subscriptions are billed and managed by Apple; cancel any time
        in your iPhone settings. Yearly saves {YEARLY_SAVING_PERCENT}% against paying monthly.
      </p>
    </div>
  );
}

function PlanInvoice({
  plan,
  period,
  number,
  campaign,
}: {
  plan: Plan;
  period: Period;
  number: number;
  campaign: string;
}) {
  const free = plan.monthly === 0;
  const saving = yearlySaving(plan);
  const days = PRICING.trial_days[period];
  const yearly = period === "yearly" && !free;

  const items = free
    ? [{ description: "Free plan", detail: "No card needed", amount: formatPrice(0) }]
    : yearly
      ? [
          {
            description: `${plan.name} plan, 12 months`,
            detail: `12 × ${formatPrice(plan.monthly)}`,
            amount: formatPrice(saving.twelveMonths),
          },
          {
            description: `${saving.months} months free`,
            detail: "Yearly discount",
            amount: `−${formatPrice(saving.amount)}`,
            discount: true,
          },
        ]
      : [{ description: `${plan.name} plan, 1 month`, amount: formatPrice(plan.monthly) }];

  const total = free
    ? formatPrice(0)
    : `${formatPrice(plan[period])}${period === "monthly" ? "/mo" : "/yr"}`;

  return (
    <InvoicePaper highlight={plan.popular} edge="perforated" className="relative p-6 sm:p-7">
      {yearly && plan.popular && (
        <Stamp trigger="mount" className="absolute top-5 right-5" rotate={-10}>
          Save {saving.percent}%
        </Stamp>
      )}

      <div className="mb-6 flex items-start justify-between gap-3">
        <div>
          <PaperLabel>Invoice № {String(number).padStart(3, "0")}</PaperLabel>
          <h3 className="font-heading text-h3 text-ink mt-1">{plan.name}</h3>
          <p className="text-small text-muted">{plan.description}</p>
        </div>
        {plan.popular && !yearly && <Badge tone="pro">Most popular</Badge>}
      </div>

      {/* key: re-run the small price animation when the period changes */}
      <div key={period} className="price-in">
        <LineItems items={items} total={{ label: "Total", amount: total }} />
      </div>

      <p className="text-small text-muted mt-3 min-h-10">
        {free ? (
          `${FREE_INVOICES} invoices, no watermark. Upgrade only if you need more.`
        ) : yearly ? (
          <>
            That&apos;s <Money>{formatPrice(saving.perMonth)}</Money> a month. {days}-day free
            trial.
          </>
        ) : (
          <>
            {days}-day free trial, then <Money>{formatPrice(plan.monthly)}</Money> a month.
          </>
        )}
      </p>

      {plan.id === "starter" && (
        <p className="text-small text-brand-800 bg-brand-50 mt-3 flex items-center gap-2 rounded-lg px-3 py-2">
          <CoffeeCup className="text-brand-700 size-5 shrink-0" />
          Less than one coffee a month.
        </p>
      )}

      <ul className="text-small mt-5 space-y-2">
        {plan.features.map((f) => (
          <li key={f} className="text-ink flex gap-2">
            <Check aria-hidden className="text-brand-600 mt-0.5 size-4 shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <a
        href={appStoreLink(`${campaign}_${plan.id}`)}
        target="_blank"
        rel="noopener noreferrer"
        data-track="cta_click"
        data-track-section={`${campaign}_${plan.id}`}
        className={buttonClass({
          variant: plan.popular ? "primary" : "secondary",
          className: "mt-6 w-full",
        })}
      >
        {free ? "Download free" : `Start ${days}-day free trial`}
      </a>
    </InvoicePaper>
  );
}
