/**
 * The road to ~4,000 pages, in chunks. Each chunk has items; one item ≈ 20 pages of one category,
 * the size one run can build well. An item's pages are the rows of seo/keyword-map.csv with that
 * `item`. For every item whose pages are marked `localize: yes`, the chunk also has one language
 * item per language (e.g. 1B-de): the same pages written for that country.
 *
 * Completion is automatic: an item is done when all its pages are live; a language item when all its
 * pages exist in that language (`translation_of`). A task (code work, no pages) is ticked here by
 * hand: set `done: true`.
 *
 * To add a chunk: follow "Rules for new chunks" in seo/PLAN.md, add the rows with briefs to the CSV,
 * then add the chunk here and run `npm run pages`.
 */

/** Language order: traffic first (German), and the e-invoicing countries last (see PLAN.md). */
export const LANGUAGE_ORDER = ["de", "es", "fr", "nl", "sv", "da", "nb", "it", "pt", "pl"];

export const GOAL = 4000;

export const CHUNKS = [
  {
    id: "0",
    title: "Built so far (English)",
    goal: "The pages that exist. Their language versions are scheduled in chunks 1–3.",
    items: [
      { id: "0A", title: "Trade templates, first 20" },
      { id: "0B", title: "Industry pages, first 20" },
      { id: "0C", title: "Compare pages (English only)" },
      { id: "0D", title: "Trade templates 21–35 (batch A)" },
      { id: "0E", title: "Trade templates 36–50 (batch A)" },
      { id: "0F", title: "Industry pages 21–32 (batch A)" },
      { id: "0G", title: "Industry pages 33–43 (batch A)" },
    ],
  },
  {
    id: "1",
    title: "Foundation: languages for templates, billing types, tools, countries",
    goal: "The language setup first, then billing types, 10 trades, tools and countries, with their language versions and those of the first 40 pages.",
    items: [
      {
        id: "1A",
        task: true,
        done: false,
        title: "Language setup for templates and industry pages (roadmap H4)",
        text: "Code, no pages: the template and industry page labels in 11 languages, `content/{locale}/templates.json` and `industries.json`, local slugs per language in the route table, hreflang between the versions, the language switcher, the hubs per language, and the sitemap split per page type (a sitemap index, so Search Console shows indexing per type: needed for the indexing check between chunks). Every language item below waits for this.",
      },
      { id: "1B", title: "Billing-type templates I" },
      { id: "1C", title: "10 trades: templates + industry pages" },
      { id: "1D", title: "Free tools I (needs code)" },
      { id: "1E", title: "Country pages I (needs code: the country page type)" },
      {
        id: "1F",
        title: "Invoice types: the general documents",
        text: "The parents of the billing-type pages (deposit, final, hourly, retainer …) and the who-invoices types (freelance, subcontractor). Bigger searches than the trade versions: build before or with 1B, and link 1B's pages up to these",
      },
      { id: "1G", title: "Trust pages (E-E-A-T: who's behind the site)" },
    ],
    languages: ["0A", "0B", "1B", "1C", "1D", "1F"],
  },
  {
    id: "2",
    title: "Home and property trades, compares, more countries",
    goal: "New trades and their industry pages, compares and countries; language versions for them and for the batch-A templates.",
    items: [
      { id: "2A", title: "20 trade templates: home and property services" },
      { id: "2B", title: "20 industry pages: the same trades" },
      { id: "2C", title: "20 compares (English only)" },
      { id: "2D", title: "Country pages II" },
      {
        id: "2E",
        task: true,
        done: false,
        title: "Hubs at scale",
        text: "Code, no pages: with 150+ templates the hubs need groups (home services, trades, creative, professional, invoice types, billing types) with anchors and a short intro each, so every page is at most 2 clicks from its hub and the hub stays useful to read. No thin sub-hub URLs: groups are sections of the one hub.",
      },
    ],
    languages: ["0D", "0E", "1E", "2A", "2B"],
  },
  {
    id: "3",
    title: "Billing types II, makers and transport, local rivals",
    goal: "Billing types, new trades, local rivals in their own language; language versions for them and the batch-A industry pages.",
    items: [
      { id: "3A", title: "Billing-type templates II" },
      { id: "3B", title: "20 trade templates: makers, repair, transport, events" },
      { id: "3C", title: "20 industry pages: the same trades" },
      { id: "3D", title: "20 local compares (in their own language, HL9)" },
    ],
    languages: ["0F", "0G", "3A", "3B", "3C"],
  },
  {
    id: "4",
    title: "Tools II and generators, professional and wellness trades",
    goal: "Tools and generators (code), new trades and billing types, with their language versions.",
    items: [
      { id: "4A", title: "Free tools II + document generators (needs code)" },
      { id: "4B", title: "20 trade templates: professional, wellness, care" },
      { id: "4C", title: "20 industry pages: the same trades" },
      { id: "4D", title: "Billing-type templates III" },
    ],
    languages: ["4A", "4B", "4C", "4D"],
  },
  {
    id: "5",
    title: "Beauty, creative and specialist trades",
    goal: "The last trades of this plan and their language versions: past 4,000.",
    items: [
      { id: "5A", title: "20 trade templates: beauty, creative, specialist" },
      { id: "5B", title: "20 industry pages: the same trades" },
    ],
    languages: ["5A", "5B"],
  },
  {
    id: "6",
    title: "Pricing calculators, more trades, Europe in English, local tax rules",
    goal: "Pages with their own value: calculators that do a trade's math, trades with real search demand that were missing, country rules in English for foreign freelancers, and rules only one country has.",
    items: [
      {
        id: "6A",
        title:
          "20 pricing calculators for trades (needs code: one calculator engine, a config per trade)",
      },
      { id: "6B", title: "16 trades with their own demand + 4 industry pages" },
      { id: "6C", title: "European countries in English (for foreign freelancers)" },
      { id: "6D", title: "Local tax rules (in their own language, no English parent)" },
    ],
    languages: ["6A", "6B"],
  },
];

/** What every language item must get right for that language (shown in PLAN.md). */
export const LANGUAGES = {
  de: {
    name: "German",
    markets: "Germany, Austria, Switzerland",
    money: "EUR (CHF in Switzerland)",
    tax: "USt / MwSt; Kleinunternehmer (§19 UStG) note",
    watch:
      "B2B e-invoicing in Germany: receiving since 2025, sending phased in 2027–2028; say when a PDF is still fine.",
  },
  es: {
    name: "Spanish",
    markets: "Spain first; Latin America only with care",
    money: "EUR",
    tax: "IVA; NIF",
    watch:
      "Spain: Verifactu and B2B e-invoicing are coming (check dates). Mexico (CFDI) and most of Latin America require electronic invoices: don't present a PDF as a valid invoice there.",
  },
  fr: {
    name: "French",
    markets: "France, Belgium (FR), Switzerland (FR)",
    money: "EUR (CHF)",
    tax: "TVA; 'TVA non applicable, art. 293 B du CGI' for micro-entrepreneurs",
    watch: "France: B2B e-invoicing from 2026–2027 (check dates).",
  },
  nl: {
    name: "Dutch",
    markets: "Netherlands, Belgium (NL)",
    money: "EUR",
    tax: "btw; KOR; KvK number; 'btw verlegd'",
    watch: "Belgium: B2B e-invoicing from 2026 (Peppol): say so on Belgian examples.",
  },
  sv: {
    name: "Swedish",
    markets: "Sweden",
    money: "SEK",
    tax: "moms; F-skatt; momsregistreringsnummer",
    watch: "Public sector needs Peppol e-invoices.",
  },
  da: {
    name: "Danish",
    markets: "Denmark",
    money: "DKK",
    tax: "moms; CVR number",
    watch:
      "Public sector needs e-invoices (NemHandel/OIOUBL); the bookkeeping law sets rules for digital systems (hedge).",
  },
  nb: {
    name: "Norwegian (Bokmål)",
    markets: "Norway",
    money: "NOK",
    tax: "MVA; organisasjonsnummer + 'MVA'",
    watch: "Public sector needs EHF; Invoicor doesn't send EHF.",
  },
  it: {
    name: "Italian",
    markets: "Italy, Switzerland (IT)",
    money: "EUR",
    tax: "IVA; partita IVA",
    watch:
      "Italy: invoices must be electronic via the SdI; a PDF is only a courtesy copy. Every Italian page says so in the first paragraph and never sends people to make a 'valid invoice' as a PDF.",
  },
  pt: {
    name: "Portuguese",
    markets: "Portugal (PT-PT); Brazil only with care",
    money: "EUR",
    tax: "IVA; NIF",
    watch:
      "Portugal: invoices must come from AT-certified software; Brazil: NF-e/NFS-e electronic invoices. Say so plainly; a PDF from Invoicor isn't a valid invoice there.",
  },
  pl: {
    name: "Polish",
    markets: "Poland",
    money: "PLN",
    tax: "VAT; NIP",
    watch:
      "Poland: KSeF structured e-invoices become mandatory in 2026 (check dates); after that a PDF isn't a valid B2B invoice.",
  },
};
