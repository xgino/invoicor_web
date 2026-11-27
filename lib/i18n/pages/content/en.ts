/**
 * The fixed text of the template and industry pages and their hubs (task S1), per language.
 * The page's own text (headings with the trade's name in them, the sample, the FAQs) comes from
 * the content entry: content/templates.json in English, content/{locale}/templates.json in the
 * other languages, where it's written for that country.
 *
 * `{n}` is replaced with the number of free invoices.
 */
export const en = {
  home: "Home",
  onThisPage: "On this page",
  updated: "Updated",
  disclaimer:
    "General information, not tax or legal advice. Check the specifics with an accountant or lawyer where you work.",
  /** The hubs' closing call to action, before `template.ctaGradient` ("in seconds."). */
  hubCta: "Make your next invoice",
  templateHub: {
    meta: {
      title: "Free Invoice Templates by Industry | Invoicor",
      description:
        "Free, industry-specific invoice templates and guides: what to include, sample breakdowns, and mistakes to avoid. Create and send them in seconds with the Invoicor app.",
    },
    crumb: "Templates",
    eyebrow: "Free templates & guides",
    title: "Free Invoice Templates",
    subtitle:
      "Invoice templates and guides for your trade or the kind of invoice you need (deposit, hourly, freelance …): exactly what to include, a sample invoice with real line items, and the mistakes that delay payment.",
    groupTypes: "Invoice types",
    groupTrades: "Templates by trade",
    cardType: "Invoice type",
    cardTrade: "Template & guide",
    cta: "View template",
    explainerTitle: "How to use these templates",
    explainer: [
      "Each guide shows what a good invoice of that trade or type contains: the details your client and their accountant expect, how to list labor and materials, and how to handle deposits and tax. The sample invoice uses realistic line items, so you can copy the structure for your own jobs.",
      "You can rebuild any of them in a spreadsheet or word processor. Or create the same invoice in the Invoicor app: your business details, saved clients and saved items fill in for you, totals and tax are calculated, and you send a clean PDF from your phone. Your first {n} invoices are free.",
    ],
  },
  template: {
    crumb: "Templates",
    eyebrow: "Free template & guide",
    use: "Use this template free",
    app: "Create it in the app",
    toc: {
      include: "What to include",
      sample: "Invoice example",
      notes: "Notes",
      industryNotes: "Industry notes",
      mistakes: "Mistakes to avoid",
      formats: "Send it as a PDF",
      tip: "Pro tip",
      faq: "FAQ",
    },
    eyebrows: {
      include: "Checklist",
      sample: "Example",
      notes: "Good to know",
      mistakes: "Avoid these",
      formats: "Format",
      tip: "Pro tip",
    },
    subtotal: "Subtotal",
    depositPaid: "Deposit paid",
    tax: "Sales tax",
    balanceDue: "Balance due",
    invoiceNotes: "Invoice notes:",
    fillExample: "Fill in this example online",
    fillHint: "Free, no signup. Change anything, then download the PDF.",
    mistakesTitle: "Common mistakes to avoid",
    formatsTitle: "Send it as a PDF",
    whyPdf: "Why PDF",
    pdfDefault:
      "A PDF looks the same on every phone and computer, can't be changed by accident, and is what clients and accountants expect.",
    browserTitle: "Free, in your browser",
    browserText:
      "Open this template in the free generator: the example lines are already filled in. Change them, add your logo and download the PDF. No signup.",
    openGenerator: "Open the generator",
    iphoneTitle: "From your iPhone",
    iphoneText:
      "The Invoicor app makes the same PDF and sends it by email or message, with your clients and usual items saved. {n} invoices free.",
    getApp: "Get the app",
    whyNotWord:
      "Why not Word or Excel? Anyone who opens them can change the amounts, and a formula can quietly break a total. Invoicor makes PDFs only.",
    appCardEyebrow: "Invoicing every week?",
    appCardText: "Save your clients and usual line items, and send each invoice from your phone.",
    moreTemplates: "More invoice templates",
    ctaGradient: "in seconds.",
    ctaText:
      "Saved clients and line items, automatic totals and tax, and a clean PDF you send from your phone before you leave the job.",
  },
  industryHub: {
    meta: {
      title: "Invoicing Software by Industry | Invoicor",
      description:
        "Whether you are a plumber, freelance designer, or consultant, see how Invoicor's mobile app speeds up your billing process.",
    },
    crumb: "Industries",
    eyebrow: "Industries",
    title: "Built for how you work.",
    subtitle:
      "Every trade bills differently. See the billing mistakes, line items and tax rules for your work, and how Invoicor handles them.",
    card: "Industry",
    cta: "See how it works",
    explainerTitle: "One app, the way your trade bills",
    explainer: [
      "A plumber bills a call-out fee, labor and parts. A designer bills a deposit and milestones. A cleaner bills the same client every week. Each industry page covers the mistakes that delay payment in that trade, the line items you'll use most, the words clients expect to see, and the tax points to check.",
      "Invoicor works the same way for all of them: save your clients and line items once, pick a template, and send a clean PDF from your phone. {n} invoices are free, and Invoicor never takes a cut of your payments.",
    ],
  },
  industry: {
    crumb: "Industries",
    start: "Start free on iOS",
    online: "Create one free online",
    toc: {
      mistakes: "Billing mistakes",
      features: "How Invoicor helps",
      scenario: "A real scenario",
      tip: "Expert tip",
      lineItems: "Common line items",
      glossary: "Glossary",
      tax: "Tax & compliance",
      faq: "FAQ",
    },
    eyebrows: {
      mistakes: "What goes wrong",
      features: "How Invoicor helps",
      scenario: "A day on the job",
      tip: "Expert tip",
      lineItems: "Line items",
      glossary: "Glossary",
      tax: "Tax & compliance",
    },
    scenarioTitle: "A real billing scenario",
    fromExperience: "From experience",
    lineItemsIntro:
      "Save these once as products in Invoicor and add them to any invoice with a tap.",
    whatToKnow: "What to know",
    templatesEyebrow: "Free templates",
    templatesTitle: "Need a single invoice right now?",
    templatesCard: "With a filled-in example and what to include",
    moreIndustries: "More industries",
    ctaGradient: "Try it free.",
    ctaText:
      "Saved clients and line items, automatic totals and tax, and a clean PDF you send from your phone.",
  },
};

export type ContentDict = typeof en;
