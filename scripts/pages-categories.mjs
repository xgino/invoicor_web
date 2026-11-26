/**
 * The direction per page category, shown in seo/PLAN.md: where its pages live, what they're for,
 * what they may and may not do, and what they link to. Edit this file to change a category's
 * direction; edit seo/keyword-map.csv to plan pages; then `npm run pages`.
 *
 * `match(row)` decides which rows (live and planned) belong to the category.
 */
export const CATEGORIES = [
  {
    id: "templates",
    title: "Trade templates",
    match: (r) => r.page_type === "template" && r.lang === "en",
    url: "`/templates/{trade}`",
    key: '"{trade} invoice template"',
    blueprint: "BLUEPRINTS.md#template-templatesslug",
    data: "`content/templates.json`",
    can: [
      "One page per trade with real work of its own: its jobs, units (per hour, per square foot, per visit), materials, terms and billing habits.",
      "A filled-in sample invoice with realistic prices; the free generator opens with it (Use this template).",
      "Trade-specific notes, mistakes, a pro tip and FAQs about how that trade invoices.",
      "Name the PDF: why a PDF works for this trade, and the free generator.",
    ],
    cannot: [
      'A trade that\'s only a synonym or a sub-niche of a live one ("auto repair" is already the key of /templates/auto-detailing): improve that page instead.',
      "Word, Excel or Google Docs downloads: we don't offer those files (S1-n).",
      "City or state versions of the same trade (doorway pages).",
      "Billing-type questions in depth (deposits, retainers, hourly): those are their own pages, see Billing-type templates.",
    ],
    links:
      "its industry page (`industry` field), 2 related templates, the trade's billing-type pages once they exist.",
    languages:
      "**yes**: written per country later (local trade names and prices), after the language setup (H4).",
  },
  {
    id: "billing",
    title: "Billing-type templates",
    match: (r) => r.page_type === "template (billing type)",
    url: "`/templates/{trade}-{billing}-invoice`",
    key: '"{trade} {deposit | progress | milestone | hourly | labor and materials | retainer} invoice"',
    blueprint: "BLUEPRINTS.md#billing-type-template-templatestrade-billing-invoice",
    data: "`content/templates.json`",
    can: [
      'Answer "how do I bill this way" for one trade: deposit size and terms, progress percentages and retainage, increments and minimums, parts vs labor, unused retainer hours.',
      "A sample invoice of that billing type (e.g. a deposit invoice, then how the final invoice subtracts it).",
      "Only combinations people actually bill that way (wedding trades take deposits, contractors bill progress, consultants bill hourly or on retainer).",
    ],
    cannot: [
      "Repeat the trade's general fields: one sentence and a link to its template.",
      "Claim the app tracks deposits, partial payments or time, or sends recurring invoices (it doesn't).",
      "Every trade × every billing type: at most 2 billing types per trade, and only where the search is real.",
    ],
    links: "the trade's template (in `related`), its industry page, one other billing-type page.",
    languages: "**yes**, with the trade templates.",
  },
  {
    id: "industries",
    title: 'Industry pages ("invoice app for …")',
    match: (r) => r.page_type === "industry",
    url: "`/industries/{professionals}`",
    key: '"invoice app for {professionals}"',
    blueprint: "BLUEPRINTS.md#industry-industriesslug",
    data: "`content/industries.json`",
    can: [
      "Show how that profession invoices from an iPhone with Invoicor: a real day (scenario), their usual line items, their mistakes and the app features that fix them.",
      "Profession-specific stats (price ranges), glossary, tax and licensing notes (hedged).",
      "Pair with the trade's template (template = the document, industry = the app).",
    ],
    cannot: [
      "A profession a live page already covers (drywall, fencing and remodeling sit under /industries/general-contractors).",
      "Features outside BRAND.md §10 in the feature cards (no estimates, scheduling, reminders, payments, photo attachments, time tracking).",
      '"The app in your language": the app\'s screens are English; say "invoices in 11 languages".',
    ],
    links: "the matching template(s), 2 related industries.",
    languages: "**yes**, after the language setup (H4).",
  },
  {
    id: "compare",
    title: 'Compare pages ("{competitor} alternative")',
    match: (r) => r.page_type === "compare",
    url: "`/compare/{competitor}`",
    key: '"{competitor} alternative"',
    blueprint: "BLUEPRINTS.md#compare-compareslug",
    data: "`content/comparisons.json`",
    can: [
      "An honest comparison: who the competitor is for, their prices and features from their own pages (source and date), where Invoicor is simpler or cheaper, and where they're the better choice.",
      'Competitors that people actually search for as "{name} alternative" or "{name} vs".',
    ],
    cannot: [
      "Competitor facts without a source and a date, or prices older than 3 months (re-check, E1-b).",
      '"X vs Y" pages between two competitors (little value of our own).',
      "Local rivals in other languages here: those are local pages (HL9), written in that language.",
    ],
    links: "2 related compares, the pricing section, the free generator.",
    languages: "**en-only** (HL8). Local rivals become their own local pages (HL9).",
  },
  {
    id: "tools",
    title: "Free tools",
    match: (r) => r.page_type === "tool" && r.lang === "en",
    url: "`/tools/{tool}` (local slugs per language, `lib/i18n/routes.ts`)",
    key: '"{tool} calculator / checker / generator"',
    blueprint: "../ROADMAP.md#t-free-tools",
    data: "page code: `components/tools/`, `lib/tools/registry.ts`",
    can: [
      "A tool that works in the browser and gives a real answer (a number, a check), with the steps in plain words.",
      "A button that puts the result on an invoice in the free generator (`?item=&qty=&price=&tax=&currency=`).",
      "Country presets per language (rates, number format, currency).",
    ],
    cannot: [
      "Rates or rules without a source and a date (VAT, late-payment interest): re-check every 6 months.",
      "Claims a check can't back up: an IBAN check catches typos, it doesn't prove who owns the account.",
      "Tools that need our server or a paid API without a decision first (VAT number check, business register: T5, T6).",
    ],
    links: "the free generator, the other tools (hub), the related templates.",
    languages: "**yes**: every tool exists in all 11 languages with local presets (T9).",
  },
  {
    id: "country",
    title: "Country pages (English)",
    match: (r) => r.page_type === "country" && r.lang === "en",
    url: "`/invoice-generator-{country}`, `/reverse-charge-invoice`",
    key: '"{country} VAT / GST / tax invoice (requirements)"',
    blueprint: "BLUEPRINTS.md#country-page-invoice-generator-country-and-local-pages",
    data: "page code: a new page type (chunk 43)",
    can: [
      "What must be on an invoice in that country, each rule with its official source and the date checked, plus the free generator preset (currency, rate).",
      "Countries whose rules differ in ways that matter (VAT/GST numbers, thresholds, required wording) and whose currency the generator supports (the API's 38).",
    ],
    cannot: [
      "Countries where a PDF invoice from Invoicor isn't a valid invoice (mandatory e-invoicing or certified software, e.g. Italy's SdI, Portugal's certified software, Poland's KSeF from 2026, Kenya's eTIMS): no page that sends people to make one here.",
      "Rules from memory: only what the official source says; rates change.",
      'The general "what goes on an invoice" (the blog owns it).',
    ],
    links: "the VAT calculator, the free generator, the reverse-charge page (EU countries).",
    languages:
      "**en-only** for English-speaking countries; other countries get a local page in their own language (next category).",
  },
  {
    id: "local",
    title: "Local pages (in the country's own language)",
    match: (r) =>
      (r.page_type === "country" && r.lang !== "en") || r.page_type === "compare (local)",
    url: "`/{lang}/{local slug}`",
    key: 'the country\'s own search words (e.g. "pflichtangaben rechnung", "factuureisen")',
    blueprint: "BLUEPRINTS.md#country-page-invoice-generator-country-and-local-pages",
    data: "page code under the language routes (chunk 43)",
    can: [
      "Written in the language from the start (rule R4): local invoice rules, small-business schemes, local wording and examples.",
      "Later: comparisons with that country's own rivals (HL9).",
    ],
    cannot: [
      'Compete with that language\'s generator page: this is "what must be on it", the generator is "make one".',
      "Invite people to make a PDF invoice where the law requires e-invoicing (IT, PT, PL): those are on hold until the product supports it.",
    ],
    links: "the language's generator page and VAT calculator.",
    languages: "**local**: only in its own language.",
  },
  {
    id: "generators",
    title: "Generators (other documents)",
    match: (r) => r.page_type === "generator" && r.lang === "en",
    url: "`/free-{document}-generator`",
    key: '"free {document} generator"',
    blueprint: "BLUEPRINTS.md#generator-free-invoice-generator-chunks-3035",
    data: "page code: a `document_type` in the web generator (chunk 44)",
    can: [
      "Other business documents made in the browser like the invoice: receipt, estimate, proforma, credit note.",
      "Say plainly that the app itself makes invoices only.",
    ],
    cannot: [
      "Separate pages for synonyms (quote = estimate: one page owns both keys).",
      "Fewer than 10 is right here: only documents a small business really sends.",
    ],
    links: "the invoice generator, the matching blog explainer.",
    languages: "**yes**, like the invoice generator.",
  },
  {
    id: "blog",
    title: "Blog (learn.invoicor.com)",
    match: (r) => r.page_type === "blog" || r.page_type === "guide",
    url: "`https://learn.invoicor.com/{slug}` (a separate site; you publish there)",
    key: 'a question people ask ("what is a proforma invoice")',
    blueprint: "BLUEPRINTS.md#guide-guidesslug-chunk-42",
    data: "the blog itself (not this repo); `npm run pages` picks new articles up from its sitemap",
    can: [
      "Explain concepts and how-tos (what, why, how) with a link to the matching template, tool or generator.",
      "Own the general topics, so templates and tools don't have to repeat them.",
    ],
    cannot: [
      "A second article on a topic the blog already has: 5 near-pairs exist already (PAGES.md); improve or merge.",
      "Trade-specific invoices (the templates own them) or app promises outside BRAND.md §10 (the fact check L1 found 129 such spots).",
    ],
    links: "one in-text link to invoicor.com per article (L2).",
    languages: "**en-only** for now (a separate site).",
  },
  {
    id: "core",
    title: "Core pages, hubs, trust and legal",
    match: (r) =>
      [
        "home",
        "hub",
        "support",
        "program",
        "legal",
        "trust",
        "android",
        "template (file format)",
      ].includes(r.page_type) && r.lang === "en",
    url: "fixed pages",
    key: "one each",
    blueprint: "BLUEPRINTS.md#about-contact-help-affiliate-legal",
    data: "page code",
    can: ["One page per purpose; hubs list every page of their collection by themselves."],
    cannot: [
      "More of them: these are single pages, so no 10 here.",
      "Word, Excel, Google Docs template pages until we really offer the files (on hold).",
    ],
    links: "nav and footer.",
    languages:
      "per page: home, generator, tools, help, Android are in 11 languages; templates and industries hubs follow H4; legal later (HL7).",
  },
];
