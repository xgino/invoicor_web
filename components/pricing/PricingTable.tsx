"use client";

import { Check, Gift, Sun } from "lucide-react";
import { useState } from "react";
import { BillingSwitch, type Period } from "@/components/ui/BillingSwitch";
import { buttonClass } from "@/components/ui/Button";
import { cx } from "@/components/ui/cx";
import { DrawnArrow } from "@/components/ui/doodles";
import {
  CoffeeCup,
  InvoicePaper,
  LineItems,
  Money,
  PaperLabel,
  Stamp,
} from "@/components/ui/invoice";
import { appStoreLink } from "@/lib/config";
import { fill } from "@/lib/i18n/chrome";
import { en as EN_HOME, type HomeDict } from "@/lib/i18n/pages/home/en";
import {
  PLANS,
  PRICING,
  YEARLY_MONTHS_FREE,
  YEARLY_SAVING_PERCENT,
  formatPrice,
  pricePerDay,
  type Plan,
  yearlySaving,
} from "@/lib/pricing";

type TableText = HomeDict["table"];

/** USD prices in the page's language: "$4.99" (English, as in pricing.json), "4,99 $", "US$ 4,99". */
function priceFormatter(intl: string) {
  if (intl === "en-US") return formatPrice;
  return (amount: number) =>
    new Intl.NumberFormat(intl, {
      style: "currency",
      currency: PRICING.currency,
      minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
      maximumFractionDigits: 2,
    }).format(amount);
}

/**
 * The pricing table, with every plan written out as an invoice (ROADMAP chunks 17.2d and 20c).
 * Prices come from content/pricing.json. Yearly is the default because it's the better deal;
 * the saving is calculated, never typed. All prices are in the static HTML.
 */
export function PricingTable({
  campaign = "pricing",
  t = EN_HOME.table,
  intl = "en-US",
  headers,
}: {
  campaign?: string;
  t?: TableText;
  intl?: string;
  headers?: { description: string; amount: string };
}) {
  const [period, setPeriod] = useState<Period>("yearly");
  const fmt = priceFormatter(intl);

  return (
    <div>
      <div className="reveal relative mb-10 flex justify-center">
        <BillingSwitch
          value={period}
          onChange={setPeriod}
          savingLabel={fill(t.monthsFree, { n: YEARLY_MONTHS_FREE })}
          labels={{ monthly: t.monthly, yearly: t.yearly, toggle: t.billYearly }}
        />
        {/* Hand-drawn hint at the yearly saving (desktop): arrow down-left onto the badge */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 hidden translate-x-[9.75rem] -translate-y-[80%] items-start gap-1 md:flex"
        >
          <DrawnArrow className="mt-2 h-8 w-12 rotate-[200deg]" />
          <span className="font-heading text-small text-brand-700 -rotate-6 font-bold whitespace-nowrap">
            {t.bestValue}
          </span>
        </div>
      </div>
      <div className="grid gap-8 pt-4 lg:grid-cols-3 lg:gap-6">
        {PLANS.map((plan, i) => (
          <PlanInvoice
            key={plan.id}
            plan={plan}
            period={period}
            number={i + 1}
            campaign={campaign}
            t={t}
            fmt={fmt}
            headers={headers}
          />
        ))}
      </div>
      <div className="bg-surface ring-line shadow-soft mt-12 rounded-2xl p-5 ring-1">
        <p className="text-eyebrow text-brand-700 text-center uppercase">{t.everyPlan}</p>
        <ul className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {t.everyList.map((f) => (
            <li key={f} className="text-small text-ink flex items-center gap-1.5 font-medium">
              <Check aria-hidden className="text-brand-600 size-4" />
              {f}
            </li>
          ))}
        </ul>
      </div>
      <p className="text-small text-subtle mt-6 text-center">
        {fill(t.note, { currency: PRICING.currency, pct: YEARLY_SAVING_PERCENT })}
      </p>
    </div>
  );
}

function PlanInvoice({
  plan,
  period,
  number,
  campaign,
  t,
  fmt,
  headers,
}: {
  plan: Plan;
  period: Period;
  number: number;
  campaign: string;
  t: TableText;
  fmt: (n: number) => string;
  headers?: { description: string; amount: string };
}) {
  const local = t.plans?.[plan.id];
  const description = local?.description ?? plan.description;
  const features = local?.features ?? plan.features;
  const free = plan.monthly === 0;
  const saving = yearlySaving(plan);
  const days = PRICING.trial_days[period];
  const yearly = period === "yearly" && !free;

  const items = free
    ? [{ description: t.freePlan, detail: t.freePlanDetail, amount: fmt(0) }]
    : yearly
      ? [
          {
            description: fill(t.plan12, { plan: plan.name }),
            detail: `12 × ${fmt(plan.monthly)}`,
            amount: fmt(saving.twelveMonths),
          },
          {
            description: fill(t.monthsFree, { n: saving.months }),
            detail: t.discount,
            amount: `−${fmt(saving.amount)}`,
            discount: true,
          },
        ]
      : [{ description: fill(t.plan1, { plan: plan.name }), amount: fmt(plan.monthly) }];

  const total = free ? fmt(0) : `${fmt(plan[period])}${period === "monthly" ? t.mo : t.yr}`;

  return (
    <div
      className={cx(
        "relative h-full",
        plan.popular && "order-first lg:order-none lg:-translate-y-3",
      )}
    >
      {plan.popular && (
        <>
          {/* soft brand glow behind the favourite plan */}
          <div
            aria-hidden
            className="bg-brand-gradient absolute -inset-1 -z-10 rounded-3xl opacity-25 blur-2xl"
          />
          <span className="bg-brand-cta shadow-brand absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 rounded-full px-3.5 py-1 text-[0.75rem] font-bold whitespace-nowrap text-white">
            {t.popular}
          </span>
        </>
      )}
      <InvoicePaper
        highlight={plan.popular}
        edge="perforated"
        className={cx("flex h-full flex-col p-6 sm:p-7", plan.popular && "ring-brand-300 ring-2")}
      >
        {yearly && plan.popular && (
          <Stamp trigger="mount" className="absolute top-5 right-5" rotate={-10}>
            {fill(t.save, { pct: saving.percent })}
          </Stamp>
        )}

        <div className="mb-6 flex items-start justify-between gap-3">
          <div>
            <PaperLabel>
              {t.invoiceNo} {String(number).padStart(3, "0")}
            </PaperLabel>
            <h3 className="font-heading text-h3 text-ink mt-1">{plan.name}</h3>
            <p className="text-small text-muted">{description}</p>
          </div>
        </div>

        {/* key: re-run the small price animation when the period changes */}
        <div key={period} className="price-in">
          {/* The price people compare: per month, with what is billed right under it (P12) */}
          <p className="flex items-baseline gap-1.5">
            <span className="font-heading text-ink text-[2.75rem] leading-none font-extrabold tracking-tight tabular-nums">
              {fmt(free ? 0 : yearly ? saving.perMonth : plan.monthly)}
            </span>
            <span className="text-muted font-medium">{t.perMonth}</span>
          </p>
          <p className="text-small text-muted mt-1.5 mb-5">
            {free ? (
              t.freeBilled
            ) : yearly ? (
              <WithMoney text={t.billedYearly} price={fmt(plan.yearly)} />
            ) : (
              t.billedMonthly
            )}
          </p>
          <LineItems items={items} headers={headers} total={{ label: t.total, amount: total }} />
        </div>

        <p className="text-small text-muted mt-3 min-h-10">
          {free ? (
            t.freeNote
          ) : (
            <WithMoney
              text={fill(yearly ? t.trialYear : t.trialMonth, { days })}
              price={fmt(yearly ? plan.yearly : plan.monthly)}
            />
          )}
        </p>

        {/* One price anchor per plan, never repeated (ROADMAP P11) */}
        <p className="text-small text-brand-800 bg-brand-50 mt-3 flex items-center gap-2 rounded-lg px-3 py-2">
          {plan.id === "starter" ? (
            <CoffeeCup className="text-brand-700 size-5 shrink-0" />
          ) : plan.id === "pro" ? (
            <Sun aria-hidden className="text-brand-700 size-5 shrink-0" />
          ) : (
            <Gift aria-hidden className="text-brand-700 size-5 shrink-0" />
          )}
          {plan.id === "starter"
            ? t.anchorStarter
            : plan.id === "pro"
              ? fill(t.anchorPro, { price: fmt(pricePerDay(plan, free ? "monthly" : period)) })
              : t.anchorFree}
        </p>

        <ul className="text-small mt-5 mb-6 space-y-2">
          {features.map((f) => (
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
            className: "mt-auto w-full",
          })}
        >
          {free ? t.ctaFree : fill(t.ctaTrial, { days })}
        </a>
        <p className="text-small text-subtle mt-2 text-center">{free ? t.subFree : t.subTrial}</p>
      </InvoicePaper>
    </div>
  );
}

/** A sentence with one highlighted price: "Billed {price} once a year". */
function WithMoney({ text, price }: { text: string; price: string }) {
  const [before, after = ""] = text.split("{price}");
  return (
    <>
      {before}
      <Money>{price}</Money>
      {after}
    </>
  );
}
