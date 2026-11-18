/**
 * The help center's text, English (ROADMAP chunk 24b, HL3). The other languages in this folder have
 * the same shape (`HelpDict`), so a missing answer is a type error. Every answer must match
 * BRAND.md §10. Placeholders: {email} the support address.
 *
 * `link` turns part of an answer into a link (the text must appear in the answer); `list` shows an
 * answer as labelled lines (the plain `a` is still used for the FAQPage structured data).
 */
export const en = {
  meta: {
    title: "Help Center | Invoicor",
    description:
      "Answers to common questions about Invoicor: creating invoices, templates, currencies, tax, sending and tracking, subscriptions, and your data.",
  },
  home: "Home",
  crumb: "Help",
  toc: "On this page",
  eyebrow: "Support",
  title: "Help Center",
  subtitle:
    "Everything you need to know about Invoicor. Can't find your answer? Real people read every message.",
  contactTitle: "Still have a question?",
  contactText:
    "Send us a message from inside the app, or email us. Real people read every message; replies can take a few days.",
  sections: [
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
          a: "Invoicor runs on iPhone and iPad with iOS or iPadOS 17.6 or later. A web version is not available yet; your data is accessed through the app.",
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
          list: [
            ["Draft", "saved but not sent yet, you can still edit it."],
            ["Sent", "shared with your client, locked for editing."],
            ["Paid", "client has paid, marked by you."],
            ["Overdue", "past the due date, still unpaid."],
            ["Cancelled", "voided, no longer active."],
          ] as Array<[string, string]>,
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
          a: "Invoicor offers Starter and Pro plans, billed monthly or yearly through the Apple App Store. All billing is handled by Apple — we never see or store your payment information. You can manage or cancel your subscription in your iPhone's Settings → your name → Subscriptions.",
        },
        {
          q: "Do I need a card for the free trial?",
          a: "Not for the free plan: your first 3 invoices need no subscription and no payment. The free trials of Starter and Pro run through Apple: you start them with your Apple ID, which needs a payment method. Cancel before the trial ends and you pay nothing. Invoicor never sees your card.",
        },
        {
          q: "Can I cancel my subscription?",
          a: "Yes, anytime. Go to your iPhone Settings → your name → Subscriptions → Invoicor → Cancel. Your plan stays active until the end of the current billing period. You won't be charged again.",
        },
        {
          q: "What happens if I downgrade to Free?",
          a: "Your existing invoices, clients and data stay intact, and you can still view, share and track every invoice you made. The free plan includes 3 invoices in total, so if you've already created 3 or more, you'll need a plan again to create new ones.",
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
          a: "Your account and invoice data is stored on servers in Germany, in the European Union, under the GDPR. Website analytics on invoicor.com (Google Analytics and PostHog, US services) only run if you accept cookies.",
        },
        {
          q: "How do you protect my data?",
          a: "With standard protection measures: every connection between the app and our servers is encrypted (HTTPS), passwords are stored hashed, sign-in uses secure tokens (or Sign in with Apple or Google), and access to our servers in Germany is restricted. No online service can be completely secure, but we work to keep your data from being accessed without permission.",
        },
        {
          q: "Do you sell my data?",
          a: "No. We never sell or rent your data or your clients' data. We only share what is needed with the services that run Invoicor (our hosting provider in Germany, Apple or Google if you sign in with them, and our subscription service), each listed in our Privacy Policy.",
          link: { text: "Privacy Policy", page: "privacy" as const },
        },
        {
          q: "Can I export my data?",
          a: "You can export individual invoices as PDF at any time. For a full data export, contact us at {email} and we'll provide your data in a machine-readable format as required by GDPR.",
        },
      ],
    },
    {
      id: "safety",
      title: "Safety & Scams",
      items: [
        {
          q: "I received an invoice made with Invoicor. Is it genuine?",
          a: "Invoicor is the tool the sender used to make the invoice; we don't write, send on anyone's behalf or verify the contents. Treat it like any invoice: check that you know the sender, that you ordered the work or goods, and that the amount is right before you pay.",
        },
        {
          q: "How do I pay an invoice safely?",
          a: "Check three things: the sender (a business you know), the amount (matches what you agreed), and the payment details (match what that business used before). If anything is unusual, contact the sender through a phone number or address you already know, not the details on the invoice.",
        },
        {
          q: "The bank details or payment link on an invoice changed. What should I do?",
          a: "Don't pay yet. Changed payment details are the most common invoice scam. Call the sender on a number you already have and confirm the new details with them before paying.",
        },
        {
          q: "Does Invoicor handle or protect the payment?",
          a: "No. Invoicor isn't a payment service or gateway: payments go directly from the client to the sender, through the sender's own payment link or bank details. Invoicor can't hold, reverse or refund a payment. Our Terms of Service explain this in section 5.",
          link: { text: "Terms of Service", page: "terms" as const },
        },
        {
          q: "How do I report a suspicious invoice made with Invoicor?",
          a: "Email {email} with the invoice and how you received it. We can suspend accounts that send fraudulent invoices. If you've already paid a scammer, also contact your bank and the police straight away.",
        },
      ],
    },
  ],
};

export interface HelpItem {
  q: string;
  /** Plain text answer (also used for the FAQPage structured data). */
  a: string;
  /** Part of the answer that links to the privacy policy or terms. */
  link?: { text: string; page: "privacy" | "terms" };
  /** The answer as labelled lines. */
  list?: Array<[string, string]>;
}

export type HelpDict = Omit<typeof en, "sections"> & {
  sections: Array<{ id: string; title: string; items: HelpItem[] }>;
};
