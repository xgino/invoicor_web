/**
 * The free invoice generator's text, English (ROADMAP Stage H, HL1). The other languages in this
 * folder have the same shape (`GeneratorDict`), so a missing sentence is a type error.
 *
 * `ui` goes to the browser (the form, preview, download panel and template picker); `page` is the
 * server-rendered header and guide below the tool. The guide is written per country: the
 * checklist names that country's required invoice details, not a translation of the English one.
 *
 * Placeholders: {n} free invoices in the app, {max} line limit, {free}/{all} template counts,
 * {file} file name, {name} template name, {line} line number, {niche} example name.
 * Every claim matches BRAND.md §10 and the public API's real limits.
 */
export const en = {
  ui: {
    viewAria: "Generator view",
    tabForm: "Form",
    tabPreview: "Preview",
    previewAria: "Invoice preview",
    offerTitle: "Load the {niche} example?",
    offerText: "It replaces your current items and notes; your business and client stay.",
    offerLoad: "Load example",
    offerKeep: "Keep mine",
    savedBlocked: "Not saved: this browser blocks storage",
    savedOk: "Saved in this browser only. Nobody else can see it.",
    newInvoice: "New invoice",
    newInvoiceTitle: "Keeps your business details, clears the client and items",
    clearAll: "Clear everything",
    clearConfirm:
      "Clear everything? This removes your business details, client and items from this browser.",
    templateLabel: "Template",
    browseTemplates: "Browse templates",
    subtotal: "Subtotal",
    discount: "Discount",
    tax: "Tax",
    taxIncluded: " (included)",
    total: "Total",

    setupTitle: "Invoice setup",
    setupHint: "Design, language and currency",
    change: "Change",
    invoiceLanguage: "Invoice language",
    currency: "Currency",
    dateFormat: "Date format",

    detailsTitle: "Invoice details",
    detailsHint: "Number, dates and when you want to be paid",
    invoiceNumber: "Invoice number",
    invoiceNumberHint: "Use a running number, like INV-0001, INV-0002",
    issueDate: "Issue date",
    dueDate: "Due date",
    paymentTerms: "Payment terms",
    paymentTermsPlaceholder: "e.g. Due within 14 days",

    businessTitle: "Your business",
    businessHint: "Who the invoice is from",
    businessName: "Business name",
    email: "Email",
    phone: "Phone",
    address: "Address",
    postalCode: "Postal code",
    city: "City",
    country: "Country",
    taxId: "Tax / VAT ID",
    taxIdPlaceholder: "e.g. NL123456789B01",
    registration: "Registration number",
    registrationPlaceholder: "e.g. KVK, company number",
    bankDetails: "Bank details",
    bankName: "Bank name",
    iban: "IBAN / account number",
    swift: "SWIFT / BIC",

    clientTitle: "Bill to",
    clientHint: "Who you're billing",
    clientName: "Client or company name",
    contactPerson: "Contact person",
    clientTaxHint: "Needed for business clients in the EU",

    itemsTitle: "Items",
    itemsHint: "What you're charging for, up to {max} lines",
    addLine: "Add line",
    itemsLimit: "That's the free limit. The Invoicor app lets you add more.",
    line: "Line {line}",
    moveUp: "Move line {line} up",
    moveDown: "Move line {line} down",
    removeLine: "Remove line {line}",
    item: "Item",
    itemPlaceholder: "e.g. Kitchen tap repair",
    qty: "Qty",
    price: "Price",
    details: "Details (optional)",
    detailsPlaceholder: "Shown on its own line under the item",
    amount: "Amount",

    taxTitle: "Tax & discount",
    taxHint: "One tax rate for the whole invoice",
    taxRate: "Tax rate",
    taxInclusive: "Prices already include tax",
    discountNone: "No discount",
    discountPercent: "Percentage (%)",
    discountFixed: "Fixed amount",
    discountPct: "Discount %",
    discountAmount: "Discount amount",

    notesTitle: "Notes",
    notesHint: "A thank-you, warranty terms or anything else",

    payTitle: "Online payment link",
    payHint: "Optional. Your client pays you directly, never through us",
    payLabel: "Your payment link",
    payFieldHint: "Your own PayPal, Stripe or other link. It shows as a “Pay online” button.",
    payError: "Start the link with https://",

    logo: "Logo (optional)",
    logoAlt: "Your logo",
    logoRemove: "Remove",
    logoUpload: "Upload logo",
    logoHint: "PNG or JPG, up to 500 KB. Replaces the name at the top.",
    logoErrType: "Use a PNG or JPG image.",
    logoErrSize: "The logo must be 500 KB or smaller.",
    logoErrRead: "That image couldn't be read.",

    creating: "Creating your PDF…",
    download: "Download PDF",
    downloadNote: "Free. The PDF has a small “Created with invoicor.com” line at the bottom.",
    downloadNeedsItem: "Add at least one line with a description to download.",
    pdfError:
      "This browser couldn't create the PDF. Please try again, or try another browser. Your form is saved.",
    ready: "Ready",
    doneTitle: "Your invoice is downloaded",
    doneText: "Check your Downloads folder for {file}.",
    downloadAgain: "Download again",
    createAnother: "Create another",
    appTitle: "Next time, send it from your phone.",
    appText:
      "The Invoicor app saves this client and your items, keeps every invoice with its status, and has no watermark. {n} invoices free.",
    /** The PDF's file name, before the invoice number. */
    fileName: "invoice",

    previewFrame: "Invoice preview",
    previewError: "The preview couldn't load. Check your connection; your form is saved.",
    overflowTitle: "This no longer fits on one page.",
    overflowText:
      "The bottom of the invoice (notes, bank details) would be cut off. Shorten the item details or use fewer lines.",

    pickerTitle: "Choose a template",
    pickerCount: "{free} free here · all {all} in the app",
    close: "Close",
    free: "Free",
    inApp: "In the app",
    lockedAria: "{name}: available in the Invoicor app",
    thumbTitle: "{name} template",
  },

  /** What a new invoice starts with in this language (only when nothing is saved yet). */
  defaults: {
    invoiceNumber: "INV-0001",
    paymentTerms: "Due within 14 days",
    notes: "Thank you for your business.",
  },

  page: {
    meta: {
      title: "Free Invoice Generator: Create & Download a PDF | Invoicor",
      description:
        "Create a professional invoice online for free: pick a template, add your items and download a PDF. No signup. 38 currencies, 11 languages.",
    },
    home: "Home",
    crumb: "Free invoice generator",
    eyebrow: "Free · no signup",
    h1: "Free Invoice Generator",
    lead: "Fill in your details, pick a template and download a professional PDF invoice. Free, no account needed, in 38 currencies and 11 languages.",

    howEyebrow: "How it works",
    howTitle: "How to create an invoice in 3 steps",
    howDescription: "Create a professional invoice online and download it as a PDF.",
    steps: [
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
    ],

    mustEyebrow: "Checklist",
    mustTitle: "What an invoice must include",
    mustIntro:
      "The exact rules depend on your country, but a clear invoice almost always has these. The generator has a field for each.",
    mustHave: [
      "The word “Invoice” and a unique invoice number",
      "The issue date and the payment due date",
      "Your business name, address and contact details",
      "Your tax or VAT number, where your country requires it",
      "Your client's name and address (and their VAT number for EU business clients)",
      "A clear description of each item or service, with quantity and price",
      "Subtotal, tax rate, tax amount and the total due",
      "How to pay: bank details or a payment link, and your payment terms",
    ],
    /** Optional: a short local note under the checklist (e.g. the small-business VAT rule). */
    mustNote: "",

    typesEyebrow: "The basics",
    typesTitle: "Invoice, receipt or estimate?",
    types: [
      {
        title: "Estimate",
        text: "Before the work: what it will probably cost. Not a request to pay.",
      },
      {
        title: "Invoice",
        text: "After the work (or before, for a deposit): a request to pay, with a due date.",
      },
      { title: "Receipt", text: "After payment: proof that the money was received." },
    ],
    typesNote:
      "This generator makes invoices. Many businesses send the same document marked “Paid” as a receipt once the money arrives.",

    termsEyebrow: "Getting paid",
    termsTitle: "Payment terms that get you paid on time",
    termsText:
      "Payment terms tell your client when to pay. “Due on receipt” suits small jobs and one-off clients. “Net 14” or “Net 30” (pay within 14 or 30 days) is common for business clients. Whatever you choose, put the actual due date on the invoice, make paying easy with your bank details or a payment link, and keep the invoice number for your records. Clear terms and a clear due date are the simplest way to avoid chasing payments.",

    tipsEyebrow: "Good habits",
    tipsTitle: "Numbering, sending and following up",
    tips: [
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
    ],

    vsEyebrow: "Your choice",
    vsTitle: "This generator or the Invoicor app?",
    vsIntro:
      "Both make the same professional invoices from the same templates. The generator is perfect for a one-off invoice; the app is for when you invoice every week.",
    vsCaption: "Free invoice generator compared with the Invoicor app",
    vsGenerator: "Generator",
    vsApp: "App",
    /** [what, generator, app]. */
    compare: [
      ["Price", "Free", "{n} invoices free, then a plan"],
      ["Watermark", "Small “Created with invoicor.com” line", "None"],
      ["Templates", "21 free", "All 31 (21 free, the rest by plan)"],
      ["Line items", "Up to 10", "Up to 50 (Pro)"],
      ["Saved clients and items", "This browser only", "Yes, on your account"],
      ["Invoice history and status", "No", "Draft, sent, paid, overdue"],
      ["Where", "Any browser", "iPhone and iPad"],
    ] as Array<[string, string, string]>,

    moreEyebrow: "Templates & guides",
    moreTitle: "Invoices for your kind of work",
    moreBefore:
      "The generator has 21 free templates. For what to put on an invoice in your trade, see our",
    moreLink: "invoice templates and guides",
    moreAfter: ", or the guide for your industry:",
    /** Shown after the links when they lead to English pages (empty in English). */
    moreEnglishNote: "",
    useCases: [
      { href: "/industries/plumbers-hvac", label: "Plumbers & HVAC" },
      { href: "/industries/electricians", label: "Electricians" },
      { href: "/industries/freelance-designers", label: "Freelance designers" },
      { href: "/industries/photographers-videographers", label: "Photographers" },
      { href: "/industries/consultants-coaches", label: "Consultants & coaches" },
      { href: "/industries/cleaning-services", label: "Cleaning services" },
    ],

    faqEyebrow: "FAQ",
    faqTitle: "Free invoice generator: questions",
    faqs: [
      {
        question: "Is this invoice generator really free?",
        answer:
          "Yes. Creating and downloading invoices here is free and needs no account. Each PDF has a small “Created with invoicor.com” line at the bottom. If you'd rather have no line at all, the Invoicor iPhone app has no watermark and its first {n} invoices are free.",
      },
      {
        question: "Do I need to sign up?",
        answer:
          "No. Fill in the form and download the PDF. Your draft is kept in your own browser, so you can close the tab and continue later on the same device.",
      },
      {
        question: "Do you store my invoice?",
        answer:
          "No. The preview and the PDF are made right in your browser, so what you type never leaves your device. Your draft is saved in this browser only; “Clear everything” removes it.",
      },
      {
        question: "Which currencies and languages can I use?",
        answer:
          "38 currencies and 11 invoice languages. The invoice labels (Invoice, Quantity, Total and so on) are translated into the language you choose.",
      },
      {
        question: "Can I add my logo?",
        answer:
          "Yes. Upload a PNG or JPG of up to 500 KB and it appears at the top of the invoice.",
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
        question: "Can I copy text from the PDF?",
        answer:
          "No. The PDF is made in your browser as a sharp image of the invoice, so its text can't be selected or searched. Your payment link and the other links still work. The Invoicor app makes PDFs with selectable text.",
      },
    ],
  },
};

export type GeneratorDict = typeof en;
export type GeneratorUi = GeneratorDict["ui"];
