import { Counter } from "@/components/ui/Counter";
import { Container } from "@/components/ui/layout";

/**
 * True numbers only (decision D2, BRAND.md §10). Each is verified against the live API / app;
 * update them when the app changes.
 */
const STATS = [
  { end: 31, suffix: "", label: "Invoice templates" },
  { end: 38, suffix: "", label: "Currencies" },
  { end: 11, suffix: "", label: "Invoice languages" },
  { end: 0, suffix: "%", label: "Fees on your payments" },
];

export function ProofBand() {
  return (
    <section aria-label="Invoicor in numbers" className="bg-tint border-line border-y">
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
