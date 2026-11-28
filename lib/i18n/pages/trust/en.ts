/**
 * The About and Contact pages (P10, P11) and the business-details block, English. Every fact is in
 * BRAND.md §10 (the fact sheet); re-check it when the app changes. Placeholders: {n} = free
 * invoices, {country} = where the business is run from (`country` below), {email}.
 * App screens are in English, so their names ("Settings → Support → Send Feedback", "My
 * Submissions") stay in English in every language.
 */
export interface TrustDict {
  home: string;
  /** COMPANY.country in the form the "Run from {country}" sentences need (article or case ending included); the bare name is `company.countryName`. */
  country: string;
  about: {
    meta: { title: string; description: string };
    crumb: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    whyEyebrow: string;
    whyTitle: string;
    /** Shown until the owner's own story (COMPANY.story) is filled in. */
    whyText: string;
    whyText2: string;
    principlesEyebrow: string;
    principlesTitle: string;
    /** Four, in this order: free start, money, people, EU data. */
    principles: [Item, Item, Item, Item];
    whatEyebrow: string;
    whatTitle: string;
    doesTitle: string;
    does: string[];
    doesntTitle: string;
    doesnt: string[];
    screensNote: string;
    whoEyebrow: string;
    whoTitle: string;
    whoText: string;
    contactButton: string;
    helpButton: string;
    ctaTitle: string;
    ctaGradient: string;
    ctaText: string;
  };
  contact: {
    meta: { title: string; description: string };
    crumb: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    waysHidden: string;
    app: {
      title: string;
      before: string;
      path: string;
      middle: string;
      submissions: string;
      after: string;
    };
    email: { title: string; before: string; after: string };
    help: { title: string; before: string; link: string; after: string };
    noPhone: string;
    topicsEyebrow: string;
    topicsTitle: string;
    /** Four, in this order: bug, subscriptions, data, affiliates. */
    topics: [Item, Item, Item, Item];
    related: string;
    /** Privacy, terms and the affiliate program are English-only pages: say so in other languages. */
    relatedLinks: { privacy: string; terms: string; affiliate: string; about: string };
    companyEyebrow: string;
    companyTitle: string;
    ctaTitle: string;
    ctaGradient: string;
    ctaText: string;
  };
  company: {
    business: string;
    basedIn: string;
    /** The Dutch Chamber of Commerce number, explained for this language's readers. */
    kvk: string;
    vat: string;
    data: string;
    dataValue: string;
    email: string;
    /** The country on its own, for the "Based in" row (no article or case ending). */
    countryName: string;
  };
}

interface Item {
  title: string;
  text: string;
}

export const en: TrustDict = {
  home: "Home",
  country: "the Netherlands",
  about: {
    meta: {
      title: "About Invoicor: the Honest Invoice App | Invoicor",
      description:
        "Who makes Invoicor and what it stands for: a free start, no fees on your money, real people reading every message, and your data on servers in Germany.",
    },
    crumb: "About",
    eyebrow: "About Invoicor",
    title: "The honest invoice app",
    subtitle:
      "Invoicor helps freelancers and small businesses send a professional invoice in seconds, in their client's language and currency, with no hidden paywall and no fees on their money.",
    whyEyebrow: "Why it exists",
    whyTitle: "Invoicing shouldn't eat your evening",
    whyText:
      "Most people who send invoices are plumbers, cleaners, designers and consultants, not accountants. They finish a job, the client asks for the invoice, and the tools on offer are either a blank document or accounting software built for a finance team. Invoicor is the middle: the fields a client's accounts team expects, filled in from what you saved last time, and a clean PDF you send before you leave.",
    whyText2:
      'The same complaints come up again and again in reviews of invoicing apps: a "free" plan that turns out to be a trial, no human to talk to, and payment processing that holds your money. Invoicor is built to avoid all three.',
    principlesEyebrow: "What we stand for",
    principlesTitle: "Four promises we can keep",
    principles: [
      {
        title: "Honestly free to start",
        text: "{n} real invoices in the app, without a watermark and without a subscription. You see what you get before you pay anything.",
      },
      {
        title: "We never touch your money",
        text: "Invoicor isn't a payment processor. Your client pays you directly, through your bank or a payment link you add yourself, and we take no cut of any payment.",
      },
      {
        title: "Real people read every message",
        text: "Feedback from the app and email reach the team, not a bot. Replies can take a few days, and we'd rather say so than promise an hour we can't keep.",
      },
      {
        title: "Your data stays in the EU",
        text: "Accounts and invoices are stored on servers in Germany and handled under the GDPR. Delete your account and your data is removed from our servers within 30 days, except what the law requires us to keep.",
      },
    ],
    whatEyebrow: "What it does, and doesn't",
    whatTitle: "So you know before you download",
    doesTitle: "Invoicor does",
    does: [
      "Make a professional invoice on your iPhone in seconds and share the PDF by email, iMessage or WhatsApp",
      "31 invoice templates and your own logo",
      "Invoices in 11 languages and 38 currencies, for clients abroad",
      "Saved clients and products, and one tap to duplicate last month's invoice",
      "A free invoice generator on this website, no account needed",
    ],
    doesntTitle: "Invoicor doesn't (yet)",
    doesnt: [
      "Estimates or quotes",
      "Recurring or scheduled invoices, or reminders to your clients",
      "Payment processing (you add your own payment link)",
      "Work offline: it needs an internet connection",
      "Android yet (it's coming: see the Android page)",
    ],
    screensNote: "The app's own screens are in English; the invoices come in 11 languages.",
    whoEyebrow: "Who's behind it",
    whoTitle: "Run from {country}",
    whoText:
      "Invoicor is a business operated from {country}. These are its details; the terms and the privacy policy say what applies when you use the app.",
    contactButton: "Contact us",
    helpButton: "Help & FAQ",
    ctaTitle: "Send your next invoice",
    ctaGradient: "in seconds.",
    ctaText: "{n} free invoices, no watermark, no subscription needed.",
  },
  contact: {
    meta: {
      title: "Contact Invoicor: Feedback, Questions, Bugs | Invoicor",
      description:
        "Reach the Invoicor team from the app (Settings, Send Feedback) or by email. A person reads every message; replies can take a few days.",
    },
    crumb: "Contact",
    eyebrow: "Contact",
    title: "Talk to the people who make Invoicor",
    subtitle:
      "Questions, bugs or ideas: a person on the team reads every message. Replies can take a few days, so for a quick answer, the help center may be faster.",
    waysHidden: "Ways to reach us",
    app: {
      title: "In the app",
      before: "Go to",
      path: "Settings → Support → Send Feedback",
      middle:
        "and choose a bug, a feature request or a question. Your iPhone model and app version are added for you, and",
      submissions: "My Submissions",
      after: "shows where each message is: new, seen, in progress or resolved.",
    },
    email: {
      title: "By email",
      before: "Write to",
      after: "for anything: when you can't sign in, for privacy requests, partnerships or press.",
    },
    help: {
      title: "Help & FAQ",
      before: "Most questions about templates, currencies, taxes and plans are answered in the",
      link: "help center",
      after: ", any time.",
    },
    noPhone:
      "There's no phone line or live chat: writing lets us look into your account and answer properly.",
    topicsEyebrow: "Before you write",
    topicsTitle: "Get the right answer the first time",
    topics: [
      {
        title: "A bug or a broken PDF",
        text: "Say what you tapped, what you expected and what happened, and the invoice number if it's about one invoice. A screenshot helps (attach it to an email).",
      },
      {
        title: "Subscriptions, refunds and cancelling",
        text: "Plans are bought through Apple, so Apple handles payments and refunds. Cancel any time in your iPhone's Settings, under your name, then Subscriptions. We're happy to help if something looks wrong.",
      },
      {
        title: "Your data and privacy",
        text: "Ask for a copy of your data or its deletion by email; you can also delete your account in the app. The privacy policy explains your rights under the GDPR.",
      },
      {
        title: "Affiliates and partners",
        text: "The affiliate program has its own page with how it works and how to sign up. For other partnerships, email us.",
      },
    ],
    related: "Related:",
    relatedLinks: {
      privacy: "privacy policy",
      terms: "terms",
      affiliate: "affiliate program",
      about: "about Invoicor",
    },
    companyEyebrow: "Business details",
    companyTitle: "Who you're writing to",
    ctaTitle: "Haven't tried it yet?",
    ctaGradient: "Start free.",
    ctaText: "{n} free invoices, no watermark, no subscription needed.",
  },
  company: {
    business: "Business",
    basedIn: "Based in",
    kvk: "KvK (Dutch Chamber of Commerce)",
    vat: "VAT number",
    data: "Data",
    dataValue: "Servers in Germany (EU), handled under the GDPR",
    email: "Email",
    countryName: "the Netherlands",
  },
};
