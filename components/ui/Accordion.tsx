import { ChevronDown } from "lucide-react";
import type { ElementType, ReactNode } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqLd } from "@/lib/jsonld";
import { cx } from "./cx";

/** "How do I pay an invoice safely?" → "how-do-i-pay-an-invoice-safely" (stable deep-link id). */
export function questionId(question: string): string {
  return question
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64)
    .replace(/-+$/, "");
}

/**
 * FAQ accordion (ROADMAP chunks 17e, P9). Native <details>, so it works without JavaScript and
 * answers stay in the HTML for search engines. Each question is a real heading (h3 by default)
 * with its own id, so `/help#how-do-i-pay-an-invoice-safely` links straight to one answer (the
 * HashOpener in the root layout opens it). `structuredData` adds FAQPage JSON-LD for exactly the
 * questions shown (once per page).
 */
export function Accordion({
  items,
  structuredData = false,
  headingLevel = 3,
  className,
}: {
  /** `content` is an optional formatted version of `answer` (same meaning); the JSON-LD uses `answer`. */
  items: Array<{ question: string; answer: string; content?: ReactNode; id?: string }>;
  structuredData?: boolean;
  headingLevel?: 2 | 3 | 4;
  className?: string;
}) {
  if (items.length === 0) return null;
  const Heading = `h${headingLevel}` as ElementType;
  return (
    <>
      {structuredData && <JsonLd data={faqLd(items)} />}
      <div
        className={cx("border-line divide-line bg-surface divide-y rounded-2xl border", className)}
      >
        {items.map((item) => (
          <details
            key={item.question}
            id={item.id ?? questionId(item.question)}
            className="group scroll-mt-24"
          >
            <summary className="text-ink hover:text-brand-700 focus-visible:focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 transition-colors [&::-webkit-details-marker]:hidden">
              <Heading className="text-body font-bold">{item.question}</Heading>
              <ChevronDown
                aria-hidden
                className="text-subtle size-5 shrink-0 transition-transform duration-250 group-open:rotate-180"
              />
            </summary>
            <div className="text-muted px-5 pb-5 leading-relaxed">
              {item.content ?? item.answer}
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
