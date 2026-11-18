/**
 * The home page text, English (ROADMAP Stage H). The other languages in this folder have the same
 * shape (`HomeDict`), so a missing sentence is a type error. Placeholders: {n} free invoices,
 * {price} starting price, {monthly}/{yearly} trial days, {days}, {plan}, {pct}, {fee}, {currency}.
 * Money is formatted per language from numbers; never typed as text here.
 */
export const en = {
  meta: {
    title: "Invoice Maker for iPhone | Create Invoices in Seconds | Invoicor",
    description:
      "Create professional invoices in seconds on your iPhone. 31 templates, 38 currencies, 11 languages. 3 invoices free, and no fees on your payments.",
  },
  hero: {
    eyebrow: "Invoice maker for iPhone",
    titleA: "Professional invoices, sent",
    titleB: "in seconds.",
    lead: "Your business details, clients and prices fill in for you. Pick a template, tap send. A clean PDF in your client's language and currency, straight from your phone.",
    cta: "Download free on iOS",
    online: "Create one online",
    androidQ: "On Android?",
    androidLink: "It's coming soon",
    doodle: "ready to send",
    promisesAria: "What you get for free",
    promises: ["{n} invoices free", "No watermark", "No subscription needed"],
    sent: "Sent by email as PDF",
  },
  sample: {
    number: "Invoice № 0042",
    business: "Rivera Plumbing",
    issued: "Issued today · Due in 14 days",
    stamp: "Paid",
    billTo: "Bill to",
    client: "Sarah Mitchell · 18 Oak Lane, Austin TX",
    clientName: "Sarah Mitchell",
    clientInitials: "SM",
    items: [
      { description: "Emergency call-out", detail: "Saturday", short: "Call-out", amount: 95 },
      {
        description: "Labor, 2 hours",
        detail: "Replace kitchen faucet",
        short: "Labor, 2 h",
        amount: 170,
      },
      {
        description: "Faucet and fittings",
        detail: "",
        short: "Faucet and fittings",
        amount: 213.5,
      },
    ],
    subtotal: "Subtotal",
    taxLabel: "Tax 8%",
    taxRate: 8,
    total: "Total due",
  },
  trust: {
    send: "Send it as a PDF via",
    pay: "Get paid with your own link",
    messages: "Messages",
    bank: "Bank transfer",
  },
  proof: {
    aria: "Invoicor in numbers",
    templates: "Invoice templates",
    currencies: "Currencies",
    languages: "Invoice languages",
    fees: "Fees on your payments",
    percent: "%",
  },
  templates: {
    eyebrow: "31 templates · 21 free",
    titleA: "Invoices your clients",
    titleB: "take seriously.",
    lead: "Not the spreadsheet look. Your logo, a clean layout and every detail a client or accountant expects.",
    browse: "Browse templates",
    galleryAria: "Invoice template previews",
    preview: "invoice template preview",
  },
  how: {
    eyebrow: "How it works",
    titleA: "From job done to",
    titleB: "paid.",
    lead: "Set up your business once. After that, every invoice is a few taps.",
    step: "Step",
    steps: [
      {
        title: "Pick your client",
        text: "Choose a saved client or add a new one. Name, address and email fill in for you.",
      },
      {
        title: "Add your items",
        text: "Tap saved products or type a line. Tax, discount and totals add up as you go.",
      },
      {
        title: "Send the PDF",
        text: "Share it by email, WhatsApp, Messages or AirDrop, with your payment link on it.",
      },
      {
        title: "Get paid",
        text: "Your client pays you directly. Mark it paid and see what's still out at a glance.",
      },
    ],
    savedClient: "Saved client",
    total: "Total",
    paidToYou: "Paid to you",
  },
  who: {
    eyebrow: "Who it's for",
    titleA: "Built for people who'd rather",
    titleB: "be working.",
    lead: "If you send invoices between jobs, from your phone, Invoicor was made for you.",
    people: [
      {
        who: "Tradespeople",
        examples: "Plumbers, electricians, cleaners, landscapers",
        moment: "The job is done and the client is standing right there.",
        gain: "Send a professional invoice from the driveway, before you leave. No evening paperwork.",
        scene: ["Job done", "Invoice sent"],
      },
      {
        who: "Freelancers",
        examples: "Designers, photographers, consultants, coaches",
        moment: "The project is delivered, and the client is in another country.",
        gain: "Invoice them in their language and currency, with a layout that looks as good as your work.",
        scene: ["Project delivered", "Paid in EUR"],
      },
      {
        who: "Small businesses",
        examples: "Studios, contractors, owners of more than one business",
        moment: "End of the month: several clients, maybe two businesses.",
        gain: "Up to 3 business profiles on Pro, each with its own logo and details. Duplicate last month's invoices in a tap.",
        scene: ["Month end", "All sent"],
      },
    ],
    notAccountingA: "Not accounting software.",
    notAccountingB: "Just invoices.",
    notAccounting: [
      "No ledgers, no setup wizard",
      "Send the PDFs to your accountant",
      "Works on your iPhone, wherever the job is",
    ],
  },
  app: {
    eyebrow: "The app",
    titleA: "Know where your money is,",
    titleB: "always.",
    lead: "Invoicor isn't only for sending. It keeps every invoice, client and payment status in one place on your phone.",
    points: [
      "Paid, outstanding and sent at a glance, month by month (Starter and Pro).",
      "Every invoice shows its status: draft, sent, paid or overdue.",
      "Open any invoice later and share the PDF again in a tap.",
      "Sign in on another iPhone and everything is there.",
    ],
    altDashboard:
      "Invoicor dashboard with paid and outstanding amounts, monthly revenue chart and recent invoices",
    altSent: "A sent invoice in Invoicor, marked Sent",
    demo: "Real screens from the app, with demo data.",
  },
  features: {
    eyebrow: "Everything an invoice needs",
    title: "Built for the job, not for accountants.",
    lead: "No ledgers, no setup wizard. The parts of invoicing you actually use, done properly.",
    fast: "Fast",
    fastText:
      "Saved clients and products fill in for you. Totals, tax and discounts add up as you type. Duplicate last month's invoice with one tap.",
    paid: "Paid",
    sent: "Sent",
    draft: "Draft",
    global: "Global",
    globalText:
      "Invoice any client, anywhere: 38 currencies and 11 invoice languages. Your client reads it in their own language.",
    currenciesAria: "Some supported currencies",
    languagesAria: "Some invoice languages",
    professional: "Professional",
    professionalText:
      "31 templates (21 free) with your logo. Up to 3 business profiles on Pro, and a revenue dashboard to see what's paid and what's still out.",
    honest: "Honest",
    honestList: [
      "3 invoices free, no watermark",
      "No subscription needed to start",
      "0% of your payments, ever",
      "Data stored in Germany (GDPR)",
      "Clear prices, cancel any time",
      "Real people read every message",
    ],
  },
  keep: {
    eyebrow: "0% of your payments. Ever.",
    titleA: "You did the work.",
    titleB: "You keep the money.",
    lead: "Many invoicing apps take a percentage of every card payment, on top of their subscription. We think that's wrong. Invoicor isn't a payment gateway: it makes your invoice, you add your own payment link, and your client pays you directly.",
    points: [
      {
        title: "No cut, no per-invoice fee",
        text: "You pay one flat subscription. What your client pays is yours.",
      },
      {
        title: "Paid straight to you",
        text: "Add your own payment link to the invoice. The money never passes through us, so it can't be held or frozen.",
      },
      {
        title: "Honest about it",
        text: "If you use a PayPal or Stripe link, they charge their own fee, as they would anywhere. Invoicor adds 0%.",
      },
    ],
  },
  fee: {
    stamp: "0% fees",
    label: "What you keep with Invoicor",
    average: "Average invoice",
    perMonth: "Invoices per month",
    feeLabel: "Fee other apps take per payment",
    marks: ["Low", "Common", "High"],
    marksAria: "Example fee levels",
    keep: "With Invoicor you keep",
    pocket: "more in your pocket every year",
    perYear: "You invoice per year",
    wouldKeep: "An app taking {fee} would keep",
    takes: "Invoicor takes",
    note: "Example. Some invoicing apps take a fee from every payment on top of their subscription; rates vary. If you add your own PayPal or Stripe link, they charge their own fee, as they would anywhere. Invoicor adds nothing.",
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Clear prices. Nothing taken from your payments.",
    lead: "Start free. Upgrade when you send more. Cancel any time through Apple.",
  },
  table: {
    monthly: "Monthly",
    yearly: "Yearly",
    billYearly: "Bill yearly",
    monthsFree: "{n} months free",
    bestValue: "best value",
    everyPlan: "Included on every plan",
    everyList: [
      "Unlimited clients",
      "No watermark",
      "Your own payment link",
      "0% fees on your payments",
      "Data stored in Germany",
    ],
    note: "Prices in {currency}. The App Store shows your local price, set by Apple, which may include local taxes. The free plan needs no subscription. Free trials start with your Apple ID; cancel before a trial ends (in your iPhone settings) and you pay nothing. Yearly saves {pct}% against paying monthly.",
    popular: "★ Most popular",
    save: "Save {pct}%",
    invoiceNo: "Invoice №",
    perMonth: "/month",
    freeBilled: "No subscription, nothing billed",
    billedYearly: "Billed {price} once a year",
    billedMonthly: "Billed monthly",
    freePlan: "Free plan",
    freePlanDetail: "No subscription needed",
    plan12: "{plan} plan, 12 months",
    discount: "Yearly discount",
    plan1: "{plan} plan, 1 month",
    total: "Total",
    mo: "/mo",
    yr: "/yr",
    freeNote: "No watermark. Upgrade only when you send more.",
    trialYear: "{days}-day free trial, then {price} a year.",
    trialMonth: "{days}-day free trial, then {price} a month.",
    anchorStarter: "About one coffee a month.",
    anchorPro: "Just {price} a day.",
    anchorFree: "No subscription, no payment details, no catch.",
    ctaFree: "Download free",
    ctaTrial: "Start {days}-day free trial",
    subFree: "No subscription, no payment",
    subTrial: "Cancel before the trial ends and you pay nothing",
    /** null = use content/pricing.json as written (English). */
    plans: null as null | Record<
      "free" | "starter" | "pro",
      { description: string; features: string[] }
    >,
  },
  promises: {
    eyebrow: "Our promises",
    titleA: "No tricks.",
    titleB: "Just invoices.",
    lead: "What other invoice apps get the worst reviews for, we promise not to do.",
    core: "Our core promise",
    items: [
      {
        fact: "{zero}",
        factLabel: "for your first {n} invoices",
        title: "Free means free",
        text: "No watermark and no subscription. No trial that turns into a paywall halfway through your first invoice.",
        proof: "Upgrade only when you send more",
      },
      {
        fact: "0%",
        factLabel: "of your payments, ever",
        title: "We never touch your money",
        text: "Invoicor isn't a payment gateway, so it can't hold, freeze or take a cut. Your client pays you directly, through your own link.",
        proof: "One flat subscription, nothing per invoice",
      },
      {
        fact: "100%",
        factLabel: "of messages read by people",
        title: "Real people, not bots",
        text: "Feedback from the app and email go to the people who build Invoicor. Replies can take a few days; nothing gets lost in a bot.",
        proof: "No ticket robots, no canned answers",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions, answered.",
    items: [
      {
        question: "Is Invoicor free to use?",
        answer:
          "Yes. The free plan includes {n} invoices with no watermark and no subscription, plus free templates and PDF export. Paid plans start at {price} a month, with a {monthly}-day free trial ({yearly} days on yearly plans). Cancel any time through Apple.",
      },
      {
        question: "Does Invoicor take a fee from my payments?",
        answer:
          "No. Invoicor isn't a payment gateway: it never processes, holds or takes a cut of your payments, and it doesn't sit between you and your client. You pay a flat subscription and that's it. Add your own payment link (PayPal, Stripe, Wise) or bank details to the invoice and your client pays you directly; only that provider's own fees apply.",
      },
      {
        question: "Do I need a card for the free trial?",
        answer:
          "Not for the free plan: your first {n} invoices need no subscription and no payment. The free trials of Starter and Pro ({monthly} days monthly, {yearly} days yearly) run through Apple: you start them with your Apple ID, which needs a payment method. Cancel before the trial ends and you pay nothing. Invoicor never sees your card.",
      },
      {
        question: "Can I invoice in other currencies and languages?",
        answer:
          "Yes. Invoicor supports 38 currencies and 11 invoice languages, so your client can read the invoice in their own language and pay in their own currency.",
      },
      {
        question: "How fast can I create an invoice?",
        answer:
          "Once your business details, clients and products are saved, a new invoice is a few taps: pick the client, add saved items, and totals and tax are calculated for you. Then share the PDF straight from your iPhone by email, WhatsApp or AirDrop.",
      },
      {
        question: "Is my data safe?",
        answer:
          "We protect it with standard measures: your account and invoice data is stored on servers in Germany under EU data protection rules (GDPR), every connection is encrypted (HTTPS), passwords are stored hashed, and we never sell your data. No online service can promise perfect security, but we work to keep your data from being accessed without permission.",
      },
      {
        question: "Does Invoicor calculate tax and discounts?",
        answer:
          "Yes. Set a tax rate (inclusive or exclusive) and a discount, and Invoicor works out the subtotal, tax and total for you.",
      },
    ],
  },
  final: {
    titleA: "Send your next invoice",
    titleB: "today.",
    text: "{n} invoices free. No watermark, no subscription, no cut of your money.",
  },
};

export type HomeDict = typeof en;
