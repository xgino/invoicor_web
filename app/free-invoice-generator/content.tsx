import { Check } from "lucide-react";
import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import { Container, Eyebrow, Heading, Text } from "@/components/ui/layout";
import { FREE_INVOICES } from "@/lib/pricing";

/**
 * The SEO content below the generator (ROADMAP 35b, blueprint "Generator"). Every claim matches
 * BRAND.md §10 and the public API's real limits (invoicor_api/docs/PUBLIC_GENERATOR.md).
 */
export const STEPS = [
  {
    name: "Add your business and your client",
    text: "Enter your business name, address and tax number, then who you're billing. Add your logo if you have one.",
  },
  {
    name: "Add the line items, tax and discount",
    text: "List what you did or sold with quantity and price. Set one tax rate and an optional discount; the totals add up for you.",
  },
  {
    name: "Pick a template and download the PDF",
    text: "Choose one of 21 free templates, check the live preview and download your invoice as a PDF.",
  },
];

const MUST_HAVE = [
  "The word “Invoice” and a unique invoice number",
  "The issue date and the payment due date",
  "Your business name, address and contact details",
  "Your tax or VAT number, where your country requires it",
  "Your client's name and address (and their VAT number for EU business clients)",
  "A clear description of each item or service, with quantity and price",
  "Subtotal, tax rate, tax amount and the total due",
  "How to pay: bank details or a payment link, and your payment terms",
];

export const GENERATOR_FAQS = [
  {
    question: "Is this invoice generator really free?",
    answer: `Yes. Creating and downloading invoices here is free and needs no account. Each PDF has a small “Created with invoicor.com” line at the bottom. If you'd rather have no line at all, the Invoicor iPhone app has no watermark and its first ${FREE_INVOICES} invoices are free.`,
  },
  {
    question: "Do I need to sign up?",
    answer:
      "No. Fill in the form and download the PDF. Your draft is kept in your own browser, so you can close the tab and continue later on the same device.",
  },
  {
    question: "Do you store my invoice?",
    answer:
      "No. What you type is sent to our servers in Germany only to build the preview and the PDF, and it isn't saved there. The draft lives in your browser; “Clear form” removes it.",
  },
  {
    question: "Which currencies and languages can I use?",
    answer:
      "38 currencies and 11 invoice languages. The invoice labels (Invoice, Quantity, Total and so on) are translated into the language you choose.",
  },
  {
    question: "Can I add my logo?",
    answer: "Yes. Upload a PNG or JPG of up to 500 KB and it appears at the top of the invoice.",
  },
  {
    question: "How many line items can I add?",
    answer:
      "Up to 10 per invoice, the same as the Invoicor app's free plan. The app's paid plans allow more.",
  },
  {
    question: "Can I add tax and a discount?",
    answer:
      "Yes. Set one tax rate for the invoice, added on top or already included in your prices, and an optional percentage or fixed discount. The subtotal, tax and total are calculated for you.",
  },
  {
    question: "Can my client pay online?",
    answer:
      "Add your own payment link (for example from PayPal, Stripe or Wise) and your bank details; they're printed on the invoice. Your client pays you directly. Invoicor doesn't process payments and takes no fee.",
  },
  {
    question: "Can I edit the PDF after downloading?",
    answer:
      "A PDF isn't meant to be edited. Change the form and download a new one; your draft is still there. To keep every invoice with its status and resend it later, use the Invoicor app.",
  },
  {
    question: "Why can't I download more right now?",
    answer:
      "To keep the free tool fast for everyone, there's a limit on how many PDFs one person can create per hour. Wait a little and try again.",
  },
];

const TIPS = [
  {
    title: "Number invoices in one simple sequence",
    text: "Use a running number such as INV-0001, INV-0002, and never reuse one. Many tax authorities expect numbers without gaps, and it makes every invoice easy to find when a client or your accountant asks.",
  },
  {
    title: "Send it the same day",
    text: "Invoices sent right after the job get paid sooner. Email the PDF or share it by message, and mention the total and the due date in the message itself so your client sees them without opening the file.",
  },
  {
    title: "Follow up politely, and early",
    text: "If the due date passes, send a short, friendly reminder with the invoice attached. Most late payments are simply forgotten. Keep a copy of every invoice you send, so you always know what's still open.",
  },
];

const COMPARE: Array<[string, string, string]> = [
  ["Price", "Free", `${FREE_INVOICES} invoices free, then a plan`],
  ["Watermark", "Small “Created with invoicor.com” line", "None"],
  ["Templates", "21 free", "All 31 (21 free, the rest by plan)"],
  ["Line items", "Up to 10", "Up to 50 (Pro)"],
  ["Saved clients and items", "This browser only", "Yes, on your account"],
  ["Invoice history and status", "No", "Draft, sent, paid, overdue"],
  ["Where", "Any browser", "iPhone and iPad"],
];

const USE_CASES = [
  { href: "/industries/plumbers-hvac", label: "Plumbers & HVAC" },
  { href: "/industries/electricians", label: "Electricians" },
  { href: "/industries/freelance-designers", label: "Freelance designers" },
  { href: "/industries/photographers-videographers", label: "Photographers" },
  { href: "/industries/consultants-coaches", label: "Consultants & coaches" },
  { href: "/industries/cleaning-services", label: "Cleaning services" },
];

export function GeneratorContent() {
  return (
    <div className="border-line border-t">
      <Container narrow className="py-section space-y-16">
        <section aria-labelledby="how-title">
          <Eyebrow>How it works</Eyebrow>
          <Heading id="how-title">How to create an invoice in 3 steps</Heading>
          <ol className="mt-8 space-y-5">
            {STEPS.map((s, i) => (
              <li key={s.name} className="flex gap-4">
                <span className="bg-brand-gradient grid size-9 shrink-0 place-items-center rounded-full font-bold text-white tabular-nums">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-ink font-bold">{s.name}</h3>
                  <p className="text-muted mt-1 leading-relaxed">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="include-title">
          <Eyebrow>Checklist</Eyebrow>
          <Heading id="include-title">What an invoice must include</Heading>
          <Text className="text-muted mt-4">
            The exact rules depend on your country, but a clear invoice almost always has these. The
            generator has a field for each.
          </Text>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {MUST_HAVE.map((m) => (
              <li key={m} className="bg-tint ring-line flex gap-2.5 rounded-xl p-3.5 ring-1">
                <Check aria-hidden className="text-brand-600 mt-0.5 size-4 shrink-0" />
                <span className="text-small text-ink">{m}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="types-title">
          <Eyebrow>The basics</Eyebrow>
          <Heading id="types-title">Invoice, receipt or estimate?</Heading>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["Estimate", "Before the work: what it will probably cost. Not a request to pay."],
              [
                "Invoice",
                "After the work (or before, for a deposit): a request to pay, with a due date.",
              ],
              ["Receipt", "After payment: proof that the money was received."],
            ].map(([title, text]) => (
              <div key={title} className="ring-line rounded-2xl p-5 ring-1">
                <h3 className="font-heading text-h4 text-ink">{title}</h3>
                <p className="text-small text-muted mt-2 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <Text className="text-muted mt-5">
            This generator makes invoices. Many businesses send the same document marked “Paid” as a
            receipt once the money arrives.
          </Text>
        </section>

        <section aria-labelledby="terms-title">
          <Eyebrow>Getting paid</Eyebrow>
          <Heading id="terms-title">Payment terms that get you paid on time</Heading>
          <Text className="text-muted mt-4 leading-relaxed">
            Payment terms tell your client when to pay. “Due on receipt” suits small jobs and
            one-off clients. “Net 14” or “Net 30” (pay within 14 or 30 days) is common for business
            clients. Whatever you choose, put the actual due date on the invoice, make paying easy
            with your bank details or a payment link, and keep the invoice number for your records.
            Clear terms and a clear due date are the simplest way to avoid chasing payments.
          </Text>
        </section>

        <section aria-labelledby="tips-title">
          <Eyebrow>Good habits</Eyebrow>
          <Heading id="tips-title">Numbering, sending and following up</Heading>
          <div className="mt-6 space-y-5">
            {TIPS.map((t) => (
              <div key={t.title}>
                <h3 className="text-ink font-bold">{t.title}</h3>
                <p className="text-muted mt-1 leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="vs-title">
          <Eyebrow>Your choice</Eyebrow>
          <Heading id="vs-title">This generator or the Invoicor app?</Heading>
          <Text className="text-muted mt-4">
            Both make the same professional invoices from the same templates. The generator is
            perfect for a one-off invoice; the app is for when you invoice every week.
          </Text>
          <div className="ring-line mt-6 overflow-hidden rounded-2xl ring-1">
            <table className="w-full text-left">
              <caption className="sr-only">
                Free invoice generator compared with the Invoicor app
              </caption>
              <thead className="bg-tint text-eyebrow text-subtle uppercase">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    &nbsp;
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Generator
                  </th>
                  <th scope="col" className="text-brand-700 px-4 py-3">
                    App
                  </th>
                </tr>
              </thead>
              <tbody className="divide-line text-small divide-y">
                {COMPARE.map(([what, gen, app]) => (
                  <tr key={what}>
                    <th scope="row" className="text-ink px-4 py-3 font-medium">
                      {what}
                    </th>
                    <td className="text-muted px-4 py-3">{gen}</td>
                    <td className="text-ink px-4 py-3">{app}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section aria-labelledby="more-title">
          <Eyebrow>Templates & guides</Eyebrow>
          <Heading id="more-title">Invoices for your kind of work</Heading>
          <Text className="text-muted mt-4">
            The generator has 21 free templates. For what to put on an invoice in your trade, see
            our{" "}
            <Link
              href="/templates"
              className="text-brand-700 font-medium underline underline-offset-2"
            >
              invoice templates and guides
            </Link>
            , or the guide for your industry:
          </Text>
          <ul className="mt-5 flex flex-wrap gap-2">
            {USE_CASES.map((u) => (
              <li key={u.href}>
                <Link
                  href={u.href}
                  className="text-small text-brand-700 hover:bg-brand-50 focus-visible:focus-ring ring-brand-200 rounded-full px-3 py-1 font-bold ring-1"
                >
                  {u.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="faq-title">
          <Eyebrow>FAQ</Eyebrow>
          <Heading id="faq-title">Free invoice generator: questions</Heading>
          <Accordion items={GENERATOR_FAQS} structuredData className="mt-6" />
        </section>
      </Container>
    </div>
  );
}
