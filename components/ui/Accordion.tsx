import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqLd } from "@/lib/jsonld";
import { cx } from "./cx";

/**
 * FAQ accordion (ROADMAP chunk 17e). Native <details>, so it works without JavaScript, answers
 * stay in the HTML for search engines, and keyboard support comes for free. `structuredData`
 * adds FAQPage JSON-LD for exactly the questions shown (use it once per page).
 */
export function Accordion({
  items,
  structuredData = false,
  className,
}: {
  /** `content` is an optional formatted version of `answer` (same meaning); the JSON-LD uses `answer`. */
  items: Array<{ question: string; answer: string; content?: ReactNode; id?: string }>;
  structuredData?: boolean;
  className?: string;
}) {
  if (items.length === 0) return null;
  return (
    <>
      {structuredData && <JsonLd data={faqLd(items)} />}
      <div
        className={cx("border-line divide-line bg-surface divide-y rounded-2xl border", className)}
      >
        {items.map((item) => (
          <details key={item.question} id={item.id} className="group scroll-mt-24">
            <summary className="text-ink hover:text-brand-700 focus-visible:focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 font-bold transition-colors [&::-webkit-details-marker]:hidden">
              {item.question}
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
