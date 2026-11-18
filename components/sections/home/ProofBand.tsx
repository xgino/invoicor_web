import { Counter } from "@/components/ui/Counter";
import { Container } from "@/components/ui/layout";
import type { Locale } from "@/lib/i18n/config";
import type { HomeDict } from "@/lib/i18n/pages/home/en";

/**
 * True numbers only (decision D2, BRAND.md §10). Each is verified against the live API / app;
 * update them when the app changes.
 */
export function ProofBand({ t }: { t: HomeDict; locale: Locale }) {
  const p = t.proof;
  const STATS = [
    { end: 31, suffix: "", label: p.templates },
    { end: 38, suffix: "", label: p.currencies },
    { end: 11, suffix: "", label: p.languages },
    { end: 0, suffix: p.percent, label: p.fees },
  ];
  return (
    <section aria-label={p.aria} className="bg-tint border-line border-y">
      <Container>
        <dl className="divide-line grid grid-cols-2 py-10 sm:grid-cols-4 sm:divide-x">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="reveal flex flex-col px-4 py-3 text-center"
              style={{ "--d": `${i * 0.08}s` } as React.CSSProperties}
            >
              <dt className="text-small text-muted order-2 mt-1">{s.label}</dt>
              <dd className="font-heading text-h1 text-ink order-1 tabular-nums">
                <Counter end={s.end} suffix={s.suffix} duration={1400} />
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
