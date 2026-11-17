import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { DarkPage } from "@/components/content/legal";
import { JsonLd } from "@/components/seo/JsonLd";
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

const strong: React.CSSProperties = { color: "#e2e8f0" };

const SECTIONS: Array<{ title: string; items: HelpItem[] }> = [
  {
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
        a: "Yes. You can create up to 3 invoices for free with no time limit. Free invoices include all features — templates, PDF export, client management, and status tracking. No watermarks on any plan.",
      },
      {
        q: "Which devices are supported?",
        a: "Invoicor is available for iPhone running iOS 17.6 or later. iPad is supported in compatibility mode. A web version is not currently available — your data is accessed through the iOS app.",
      },
    ],
  },
  {
    title: "Creating Invoices",
    items: [
      {
        q: "Can I add my company logo to invoices?",
        a: 'Yes. Go to your Business Profile and tap "Upload Logo". Invoicor supports PNG, JPG, SVG, and WebP formats. Your logo appears on every invoice you send. PNG transparency is preserved.',
      },
      {
        q: "How do templates work?",
        a: "Invoicor includes 30+ professionally designed invoice templates. Free users get access to the free collection. Starter and Pro plans unlock additional premium templates. You can set a default template in your Business Profile or choose a different one for each invoice.",
      },
      {
        q: "Can I invoice in different currencies?",
        a: "Yes. Invoicor supports 20+ currencies including USD, EUR, GBP, JPY, CHF, CAD, AUD, INR, BRL, and many more. Set a default currency in your Business Profile or change it per invoice.",
      },
      {
        q: "Can I send invoices in my client's language?",
        a: "Yes. Invoicor supports multiple invoice languages. All labels on the invoice (Item, Quantity, Total, etc.) are translated automatically. Set a default language in your Business Profile or choose per invoice.",
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
        a: "Each invoice can have up to 7 line items. This keeps invoices clean and fits on a single A4 page.",
      },
    ],
  },
  {
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
            <strong style={strong}>Draft</strong> — saved but not sent yet, you can still edit it.
            <br />
            <strong style={strong}>Sent</strong> — shared with your client, locked for editing.
            <br />
            <strong style={strong}>Paid</strong> — client has paid, marked by you.
            <br />
            <strong style={strong}>Overdue</strong> — past the due date, still unpaid.
            <br />
            <strong style={strong}>Cancelled</strong> — voided, no longer active.
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
    title: "Account & Billing",
    items: [
      {
        q: "How do subscriptions work?",
        a: "Invoicor offers Starter and Pro plans, billed monthly or yearly through the Apple App Store. All billing is handled by Apple — we never see or store your payment information. You can manage or cancel your subscription in your iPhone's Settings → Apple ID → Subscriptions.",
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
    title: "Data & Privacy",
    items: [
      {
        q: "Where is my data stored?",
        a: "All your data is stored on secure servers in Germany, within the European Union. We are fully GDPR compliant.",
      },
      {
        q: "Do you sell my data?",
        a: "No. We do not sell, rent, or share your personal data or your clients' data with anyone. Read our full Privacy Policy.",
        rich: (
          <>
            No. We do not sell, rent, or share your personal data or your clients&apos; data with
            anyone. Read our full{" "}
            <Link href="/privacy" style={{ color: "#818cf8", textDecoration: "none" }}>
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

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "var(--font-display)",
        fontSize: 20,
        fontWeight: 800,
        color: "#fff",
        margin: "40px 0 8px",
        letterSpacing: "-0.01em",
        paddingTop: 24,
        borderTop: "1px solid rgba(255,255,255,.04)",
      }}
    >
      {children}
    </h2>
  );
}

function Question({ item }: { item: HelpItem }) {
  return (
    <details className="faq-item" style={{ borderBottom: "1px solid rgba(255,255,255,.06)" }}>
      <summary
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 0",
        }}
      >
        <h3
          style={{ fontSize: 16, fontWeight: 600, color: "#e2e8f0", paddingRight: 16, margin: 0 }}
        >
          {item.q}
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
      <div style={{ paddingBottom: 20, fontSize: 15, lineHeight: 1.7, color: "#94a3b8" }}>
        {item.rich ?? item.a}
      </div>
    </details>
  );
}

export default function HelpPage() {
  const allItems = SECTIONS.flatMap((s) => s.items);
  return (
    <DarkPage
      eyebrow="Support"
      eyebrowColor="#818cf8"
      title="Help Center"
      intro={
        <p style={{ fontSize: 16, color: "#94a3b8", margin: 0 }}>
          Everything you need to know about Invoicor. Can&apos;t find what you&apos;re looking for?
          Reach out to us directly.
        </p>
      }
    >
      <JsonLd data={faqLd(allItems.map((i) => ({ question: i.q, answer: i.a })))} />

      {SECTIONS.map((section) => (
        <div key={section.title}>
          <SectionTitle>{section.title}</SectionTitle>
          {section.items.map((item) => (
            <Question key={item.q} item={item} />
          ))}
        </div>
      ))}

      <div
        style={{
          marginTop: 56,
          padding: "32px 24px",
          background: "rgba(255,255,255,.02)",
          border: "1px solid rgba(255,255,255,.06)",
          borderRadius: 16,
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            fontWeight: 800,
            margin: "0 0 8px",
            color: "#fff",
          }}
        >
          Still have questions?
        </h2>
        <p style={{ fontSize: 15, color: "#94a3b8", margin: "0 0 20px" }}>
          Send us a message directly from the app, or email us. We respond within 24 hours.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="soft-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,255,255,.06)",
            border: "1px solid rgba(255,255,255,.08)",
            color: "#e2e8f0",
            padding: "12px 24px",
            borderRadius: 12,
            fontSize: 14,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </DarkPage>
  );
}
