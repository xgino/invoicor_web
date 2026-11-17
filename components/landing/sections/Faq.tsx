import type { Faq as FaqItem } from "@/lib/content";
import { display } from "../primitives";
import { PRICING, STARTING_PRICE } from "@/lib/pricing";

/**
 * Visible FAQ. The same list feeds the FAQPage JSON-LD in app/page.tsx, so the markup always
 * matches what visitors can read (a Google requirement).
 */
export const HOME_FAQS: FaqItem[] = [
  {
    question: "Is Invoicor free to use?",
    answer: `Yes. Invoicor offers a free plan that includes 3 invoices with no watermark, unlimited clients, status tracking, and free templates. Paid plans start at ${STARTING_PRICE} per month, with a ${PRICING.trial_days.monthly}-day free trial (${PRICING.trial_days.yearly} days on yearly plans).`,
  },
  {
    question: "Can I create invoices in different currencies and languages?",
    answer:
      "Yes. Invoicor supports USD, EUR, GBP, JPY, CAD, AUD, and more. You can also translate your invoice into your client's language with one tap.",
  },
  {
    question: "How fast can I create an invoice with Invoicor?",
    answer:
      "Invoicor auto fills 80% of your invoice using saved clients, products, and business info. Once set up, you can create and send a professional PDF invoice in under 5 seconds.",
  },
  {
    question: "Is my data safe with Invoicor?",
    answer:
      "Yes. Your account and invoice data is stored on secure servers in Germany, under EU data protection rules (GDPR). We never sell your data. Website analytics only run if you accept cookies.",
  },
  {
    question: "Does Invoicor calculate tax and discounts automatically?",
    answer:
      "Yes. Set your tax rate once and Invoicor handles subtotals, tax amounts, discounts, and final totals automatically.",
  },
];

export function Faq() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background: "#09090b",
        borderTop: "1px solid rgba(255,255,255,.04)",
      }}
    >
      <div className="reveal" style={{ maxWidth: 720, margin: "0 auto" }}>
        <h2
          style={{
            ...display,
            fontSize: "clamp(32px,4vw,46px)",
            fontWeight: 900,
            margin: "0 0 32px",
            textAlign: "center",
            letterSpacing: "-0.03em",
          }}
        >
          Frequently asked questions
        </h2>
        {HOME_FAQS.map((f) => (
          <details
            key={f.question}
            className="faq-item"
            style={{ borderBottom: "1px solid rgba(255,255,255,.06)" }}
          >
            <summary
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 0",
              }}
            >
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#e2e8f0",
                  margin: 0,
                  paddingRight: 16,
                }}
              >
                {f.question}
              </h3>
              <svg
                aria-hidden
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#64748b"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ flexShrink: 0 }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </summary>
            <p
              style={{
                paddingBottom: 20,
                fontSize: 15,
                lineHeight: 1.7,
                color: "#94a3b8",
                margin: 0,
              }}
            >
              {f.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
