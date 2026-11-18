import { FileText, Mail, MessagesSquare, Send, UserRound } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { Stamp } from "@/components/ui/invoice";
import { Container, Eyebrow, Gradient, Heading, Section, Text } from "@/components/ui/layout";
import { formatMoney } from "@/lib/i18n/money";
import { sampleTotals } from "./Hero";
import type { Locale } from "@/lib/i18n/config";
import type { HomeDict } from "@/lib/i18n/pages/home/en";

/**
 * How it works as a path (ROADMAP P3): four numbered stops on a line that draws itself when
 * scrolled into view (horizontal on desktop, vertical on phones), each with a small invoice
 * visual, ending at "Paid". CSS only; static under reduced motion.
 */
function steps(
  t: HomeDict,
  locale: Locale,
): Array<{ title: string; text: string; visual: ReactNode }> {
  const h = t.how;
  const sample = t.sample;
  const sums = sampleTotals(sample);
  const money = (n: number) => formatMoney(n, locale);
  return [
    {
      ...h.steps[0]!,
      visual: (
        <div className="flex items-center gap-2.5">
          <span className="bg-brand-gradient grid size-8 place-items-center rounded-full text-[0.75rem] font-bold text-white">
            {sample.clientInitials}
          </span>
          <div className="leading-tight">
            <p className="text-small text-ink font-bold">{sample.clientName}</p>
            <p className="text-subtle text-[0.75rem]">{h.savedClient}</p>
          </div>
        </div>
      ),
    },
    {
      ...h.steps[1]!,
      visual: (
        <ul className="text-small space-y-1 tabular-nums">
          {[
            ...sample.items.map((i) => [i.short, money(i.amount)]),
            [sample.taxLabel, money(sums.tax)],
          ].map(([label, amount]) => (
            <li key={label} className="flex justify-between gap-4">
              <span className="text-muted">{label}</span>
              <span className="text-ink font-medium">{amount}</span>
            </li>
          ))}
          <li className="border-line text-ink flex justify-between gap-4 border-t pt-1.5 font-bold">
            <span>{h.total}</span>
            <span>{money(sums.total)}</span>
          </li>
        </ul>
      ),
    },
    {
      ...h.steps[2]!,
      visual: (
        <div className="flex flex-wrap gap-1.5">
          {[
            { icon: FileText, label: "PDF" },
            { icon: MessagesSquare, label: "WhatsApp" },
            { icon: Mail, label: "Mail" },
          ].map((c) => (
            <span
              key={c.label}
              className="bg-tint ring-line text-ink flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.75rem] font-medium ring-1"
            >
              <c.icon aria-hidden className="text-brand-700 size-3" />
              {c.label}
            </span>
          ))}
        </div>
      ),
    },
    {
      ...h.steps[3]!,
      visual: (
        <div className="flex items-center justify-between gap-3">
          <div className="leading-tight">
            <p className="text-ink font-heading text-h4 tabular-nums">{money(sums.total)}</p>
            <p className="text-subtle text-[0.75rem]">{h.paidToYou}</p>
          </div>
          <Stamp tone="success" rotate={-8} delay={1.4} className="text-[0.8125rem]">
            {sample.stamp}
          </Stamp>
        </div>
      ),
    },
  ];
}

const ICONS = [UserRound, FileText, Send, null];

export function HowItWorks({ t, locale }: { t: HomeDict; locale: Locale }) {
  const h = t.how;
  const STEPS = steps(t, locale);
  return (
    <Section tone="tint" aria-labelledby="how-title">
      <Container>
        <div className="reveal mx-auto max-w-2xl text-center">
          <Eyebrow>{h.eyebrow}</Eyebrow>
          <Heading id="how-title">
            {h.titleA} <Gradient>{h.titleB}</Gradient>
          </Heading>
          <Text size="lead" className="mt-4">
            {h.lead}
          </Text>
        </div>

        <ol className="relative mt-14 grid gap-8 lg:grid-cols-4 lg:gap-6">
          {/* The path on desktop: one line through the four stops */}
          <span
            aria-hidden
            className="reveal draw-x bg-brand-gradient absolute top-6 right-[12.5%] left-[12.5%] hidden h-0.5 lg:block"
          />
          {STEPS.map((step, i) => {
            const Icon = ICONS[i];
            const last = i === STEPS.length - 1;
            return (
              <li
                key={step.title}
                className="reveal relative grid grid-cols-[3rem_1fr] gap-5 lg:grid-cols-1 lg:grid-rows-[auto_1fr] lg:gap-6"
                style={{ "--d": `${0.25 + i * 0.22}s` } as CSSProperties}
              >
                {/* The path on phones: a segment from this stop to the next */}
                {!last && (
                  <span
                    aria-hidden
                    className="reveal draw-y bg-brand-500 absolute top-12 -bottom-8 left-6 w-0.5 -translate-x-1/2 lg:hidden"
                  />
                )}
                <span
                  className={
                    last
                      ? "bg-brand-gradient shadow-brand relative z-10 grid size-12 place-items-center rounded-full text-white lg:mx-auto"
                      : "bg-surface ring-brand-200 text-brand-700 shadow-soft relative z-10 grid size-12 place-items-center rounded-full ring-2 lg:mx-auto"
                  }
                >
                  {Icon ? (
                    <Icon aria-hidden className="size-5" strokeWidth={2} />
                  ) : (
                    <span className="font-heading text-[1.1rem] font-extrabold">✓</span>
                  )}
                  <span className="sr-only">
                    {h.step} {i + 1}
                  </span>
                </span>
                <div className="bg-surface ring-line shadow-card h-full rounded-2xl p-5 ring-1 lg:text-center">
                  <p className="text-eyebrow text-brand-700 uppercase">
                    {h.step} {i + 1}
                  </p>
                  <h3 className="font-heading text-h4 text-ink mt-1">{step.title}</h3>
                  <p className="text-small text-muted mt-1.5 leading-relaxed">{step.text}</p>
                  <div className="bg-tint/70 ring-line mt-4 rounded-xl p-3 text-left ring-1">
                    {step.visual}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
