import { Mail, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArticleLayout, Block, PageHeader } from "@/components/sections/content/blocks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { buttonClass } from "@/components/ui/Button";
import { InvoicePaper } from "@/components/ui/invoice";
import { CONTACT_EMAIL } from "@/lib/config";
import { faqLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Help Center | Invoicor",
  description:
    "Answers to common questions about Invoicor: creating invoices, templates, currencies, tax, sending and tracking, subscriptions, and your data.",
  path: "/help",
});

interface HelpItem {
  q: string;
  /** Plain text answer (also used for the FAQPage structured data). */
  a: string;
  /** Optional rich version for the page; must say the same as `a`. */
  rich?: ReactNode;
}

const SECTIONS: Array<{ id: string; title: string; items: HelpItem[] }> = [
  {
    id: "getting-started",
    title: "Getting Started",
    items: [
      {
        q: "How do I create my first invoice?",
        a: 'Open Invoicor, tap the + button on the Invoices tab. Select a client (or create a new one), add your items, and tap "Preview Invoice". Your invoice is generated as a PDF that you can share via email, WhatsApp, AirDrop, or any other app.',
      },
      {
        q: "Do I need to set up a business profile first?",
        a: "Yes. Before creating your first invoice, Invoicor will prompt you to add your business details (company name, address, logo, banking info). This only takes a minute and the information is reused on every invoice you create.",
      },
      {
        q: "Is Invoicor free to use?",
        a: "Yes. You can create up to 3 invoices for free with no time limit and no subscription. Free invoices include the free templates, PDF export, client management and status tracking. There is no watermark in the app, on any plan.",
      },
      {
        q: "Which devices are supported?",
        a: "Invoicor is available for iPhone running iOS 17.6 or later. iPad is supported in compatibility mode. A web version is not currently available — your data is accessed through the iOS app.",
      },
    ],
  },
  {
    id: "creating-invoices",
    title: "Creating Invoices",
    items: [
      {
        q: "Can I add my company logo to invoices?",
        a: 'Yes. Go to your Business Profile and tap "Upload Logo". Invoicor supports PNG, JPG, SVG, and WebP formats. Your logo appears on every invoice you send. PNG transparency is preserved.',
      },
      {
        q: "How do templates work?",
        a: "Invoicor includes 31 professionally designed invoice templates: 21 are free, 8 come with Starter and 2 with Pro. Higher plans include all lower-tier templates. You can set a default template in your Business Profile or choose a different one for each invoice.",
      },
      {
        q: "Can I invoice in different currencies?",
        a: "Yes. Invoicor supports 38 currencies, including USD, EUR, GBP, JPY, CHF, CAD, AUD, INR and BRL. Set a default currency in your Business Profile or change it per invoice.",
      },
      {
        q: "Can I send invoices in my client's language?",
        a: "Yes. Invoicor supports 11 invoice languages. All labels on the invoice (Item, Quantity, Total, etc.) are translated automatically. Set a default language in your Business Profile or choose per invoice.",
      },
      {
        q: "How does tax calculation work?",
        a: "Set your tax rate in your Business Profile (e.g. 21% for Dutch BTW). Invoicor automatically calculates tax on every invoice. You can choose between tax-inclusive and tax-exclusive pricing. You can also override the tax rate per invoice.",
      },
      {
        q: "Can I add discounts to an invoice?",
        a: "Yes. You can apply a percentage discount or a fixed amount discount to any invoice. The discount is shown as a separate line in the totals section.",
      },
      {
        q: "What's the maximum number of items per invoice?",
        a: "It depends on your plan: up to 10 line items per invoice on Free, 25 on Starter and 50 on Pro.",
      },
    ],
  },
  {
    id: "sending-tracking",
    title: "Sending & Tracking",
    items: [
      {
        q: "How do I send an invoice?",
        a: 'From the invoice detail screen, tap "Share". Your invoice is generated as a PDF and you can send it via email, WhatsApp, AirDrop, Messages, or any other sharing app on your iPhone.',
      },
      {
        q: "What do the invoice statuses mean?",
        a: "Draft — saved but not sent yet, you can still edit it. Sent — shared with your client, locked for editing. Paid — client has paid, marked by you. Overdue — past the due date, still unpaid. Cancelled — voided, no longer active.",
        rich: (
          <>
            <strong className="text-ink">Draft</strong> — saved but not sent yet, you can still edit
            it.
            <br />
            <strong className="text-ink">Sent</strong> — shared with your client, locked for
            editing.
            <br />
            <strong className="text-ink">Paid</strong> — client has paid, marked by you.
            <br />
            <strong className="text-ink">Overdue</strong> — past the due date, still unpaid.
            <br />
            <strong className="text-ink">Cancelled</strong> — voided, no longer active.
          </>
        ),
      },
      {
        q: "Can I edit an invoice after sending it?",
        a: 'No. Once an invoice is marked as "Sent", it\'s locked to preserve the legal record. If you need to make changes, duplicate the invoice, edit the copy, and send the updated version.',
      },
      {
        q: "Can I duplicate an invoice?",
        a: 'Yes. On the invoice detail screen, tap the "Copy" button. This creates a new draft with the same client, items, and settings. Useful for recurring work.',
      },
    ],
  },
  {
    id: "account-billing",
    title: "Account & Billing",
    items: [
      {
        q: "How do subscriptions work?",
        a: "Invoicor offers Starter and Pro plans, billed monthly or yearly through the Apple App Store. All billing is handled by Apple — we never see or store your payment information. You can manage or cancel your subscription in your iPhone's Settings → Apple ID → Subscriptions.",
      },
      {
        q: "Do I need a card for the free trial?",
        a: "Not for the free plan: your first 3 invoices need no subscription and no payment. The free trials of Starter and Pro run through Apple: you confirm with your Apple ID, which needs a payment method, and Apple only charges after the trial if you don't cancel. Invoicor never sees your card.",
      },
      {
        q: "Can I cancel my subscription?",
        a: "Yes, anytime. Go to your iPhone Settings → Apple ID → Subscriptions → Invoicor → Cancel. Your plan stays active until the end of the current billing period. You won't be charged again.",
      },
      {
        q: "What happens if I downgrade to Free?",
        a: "Your existing invoices, clients, and data remain intact. You can still view, share, and track all previously created invoices. You just won't be able to create new invoices beyond the free limit until you resubscribe.",
      },
      {
        q: "How do I delete my account?",
        a: 'Go to Settings in the app and tap "Delete Account". This permanently removes your account and all associated data from our servers. This action cannot be undone.',
      },
    ],
  },
  {
    id: "multiple-businesses",
    title: "Multiple Businesses",
    items: [
      {
        q: "Can I manage multiple businesses?",
        a: "Yes. Pro plan users can create up to 3 separate business profiles, each with its own company name, logo, address, and banking details. Switch between them when creating an invoice.",
      },
      {
        q: "How do I set a default business profile?",
        a: 'In the Library tab, go to the Business section. Long-press on a profile and select "Set as Default". The default profile is pre-selected when you create a new invoice.',
      },
    ],
  },
  {
    id: "data-privacy",
    title: "Data & Privacy",
    items: [
      {
        q: "Where is my data stored?",
        a: "Your account and invoice data is stored on secure servers in Germany, within the European Union, under GDPR. Website analytics on invoicor.com (Google Analytics and PostHog, US services) only run if you accept cookies.",
      },
      {
        q: "Do you sell my data?",
        a: "No. We do not sell, rent, or share your personal data or your clients' data with anyone. Read our full Privacy Policy.",
        rich: (
          <>
            No. We do not sell, rent, or share your personal data or your clients&apos; data with
            anyone. Read our full{" "}
            <Link
              href="/privacy"
              className="text-brand-700 font-medium underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            .
          </>
        ),
      },
      {
        q: "Can I export my data?",
        a: `You can export individual invoices as PDF at any time. For a full data export, contact us at ${CONTACT_EMAIL} and we'll provide your data in a machine-readable format as required by GDPR.`,
      },
    ],
  },
];

/** Help center (ROADMAP chunk 24b): questions grouped by topic, one FAQPage JSON-LD for all. */
export default function HelpPage() {
  const allItems = SECTIONS.flatMap((s) => s.items);
  return (
    <>
      <JsonLd data={faqLd(allItems.map((i) => ({ question: i.q, answer: i.a })))} />
      <PageHeader
        crumbs={[{ name: "Home", href: "/" }, { name: "Help" }]}
        eyebrow="Support"
        title="Help Center"
        subtitle="Everything you need to know about Invoicor. Can't find your answer? Real people read every message."
      />
      <ArticleLayout toc={SECTIONS.map((s) => ({ id: s.id, label: s.title }))}>
        {SECTIONS.map((section) => (
          <Block key={section.id} id={section.id} title={section.title}>
            <Accordion
              items={section.items.map((i) => ({ question: i.q, answer: i.a, content: i.rich }))}
            />
          </Block>
        ))}

        <div className="border-line border-t py-14">
          <InvoicePaper highlight className="p-8 text-center">
            <MessageCircle
              aria-hidden
              className="text-brand-600 mx-auto size-8"
              strokeWidth={1.75}
            />
            <h2 className="font-heading text-h3 text-ink mt-4">Still have a question?</h2>
            <p className="text-muted mx-auto mt-2 max-w-md">
              Send us a message from inside the app, or email us. Real people read every message;
              replies can take a few days.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className={buttonClass({ variant: "secondary", className: "mt-6" })}
            >
              <Mail aria-hidden className="size-4" />
              {CONTACT_EMAIL}
            </a>
          </InvoicePaper>
        </div>
      </ArticleLayout>
    </>
  );
}
