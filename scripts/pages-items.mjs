/**
 * The plan's items, per category: T1, T2 … (trade templates), I1 … (industry pages), and so on. One
 * item ≈ 20 pages of one category, the size one run builds well. An item's pages are the rows of
 * seo/keyword-map.csv with that `item`.
 *
 * Language items (L1, L2 …) are numbered here from LANGUAGE_SOURCES: for every source item, one L
 * item per language (in LANGUAGE_ORDER), covering that item's `localize: yes` pages. **Append only**:
 * add new items and sources at the end, so existing numbers never change.
 *
 * Completion is automatic: an item is done when all its pages are live (parked pages skipped); an L
 * item when all its pages exist in that language (`translation_of`). A task (code, no pages) is
 * ticked here by hand: `done: true`.
 */

/** Per category: the item letter(s). */
export const PREFIX = {
  templates: "T",
  billing: "B",
  types: "D",
  industries: "I",
  compare: "C",
  tools: "TL",
  generators: "G",
  country: "CT",
  local: "LO",
  blog: "BL",
  core: "P",
};

/** Code work without pages; it comes first where pages depend on it. */
export const TASKS = [
  {
    id: "S1",
    done: false,
    title: "Language setup for templates and industry pages (roadmap H4)",
    text: "The template and industry page labels in 11 languages, `content/{locale}/templates.json` and `industries.json`, local slugs per language in the route table, hreflang between the versions, the language switcher, the hubs per language, and the sitemap split per page type (a sitemap index, so Search Console shows indexing per type). Every L item for templates and industry pages waits for this.",
  },
  {
    id: "S2",
    done: false,
    title: "Hubs at scale",
    text: "With 150+ templates the hubs need groups (home services, trades, creative, professional, invoice types, billing types) with anchors and a short intro each, so every page is at most 2 clicks from its hub. No thin sub-hub URLs: groups are sections of the one hub.",
  },
  {
    id: "S3",
    done: false,
    title: "Country page type (roadmap chunk 43)",
    text: "The page code for country pages (CT items) and local rule pages (LO1): the generator preset per country plus the rules section. CT and LO1 wait for this.",
  },
  {
    id: "S4",
    done: false,
    title: "Calculator engine (for TL3)",
    text: "One calculator component driven by a config per trade (inputs, units, formula steps, the 'Put on an invoice' link), metric units per language. TL3 waits for this.",
  },
];

/** English (and local) items, per category in build order. `text` adds a note shown with the item. */
export const ITEMS = [
  { id: "T1", title: "Trade templates 1–20 (built)" },
  { id: "T2", title: "Trade templates 21–35 (built)" },
  { id: "T3", title: "Trade templates 36–50 (built)" },
  { id: "T4", title: "10 trades: notary, home inspection, IT services …" },
  { id: "T5", title: "Home and property services" },
  { id: "T6", title: "Makers, repair, transport, events" },
  { id: "T7", title: "Professional, wellness, care" },
  { id: "T8", title: "Beauty, creative, specialist" },
  { id: "T9", title: "Trades with demand of their own: auto repair, auto body, architect …" },
  { id: "T10", title: "Home systems and specialist contractors" },
  { id: "T11", title: "Property, waste and household services" },
  { id: "T12", title: "Auto, transport and heavy equipment" },
  { id: "T13", title: "Workshops, repair and industrial trades" },
  { id: "T14", title: "Events, food, travel and entertainment" },
  { id: "T15", title: "Professional services II" },
  { id: "T16", title: "Digital and tech services" },
  { id: "T17", title: "Creative, fashion and crafts" },
  { id: "T18", title: "Health and wellness II" },
  { id: "T19", title: "Education and childcare" },
  { id: "T20", title: "Animals, farms and outdoors" },
  { id: "I1", title: "Industry pages 1–20 (built)" },
  { id: "I2", title: "Industry pages 21–32 (built)" },
  { id: "I3", title: "Industry pages 33–43 (built)" },
  { id: "I4", title: "Industry pages for T4's trades" },
  { id: "I5", title: "Industry pages for T5's trades" },
  { id: "I6", title: "Industry pages for T6's trades" },
  { id: "I7", title: "Industry pages for T7's trades" },
  { id: "I8", title: "Industry pages for T8's trades" },
  { id: "I9", title: "Architects, real estate agents, private investigators, equipment rental" },
  {
    id: "I10",
    title: "One trade per page: split the combined industry pages",
    text: "each split narrows its old combined page when it goes live (see the briefs)",
  },
  { id: "I11", title: "Who invoices: self-employed, freelancers, sellers" },
  { id: "I12", title: "Specialist contractors" },
  { id: "I13", title: "Cleaning, waste and property services" },
  { id: "I14", title: "Auto shops and transport" },
  { id: "I15", title: "Professional services" },
  { id: "I16", title: "Events, food and travel" },
  { id: "I17", title: "Creative and media" },
  { id: "I18", title: "Health, wellness and beauty" },
  { id: "I19", title: "Education and childcare" },
  { id: "I20", title: "Animals, farms and outdoors" },
  { id: "B1", title: "Billing types I", text: "build with or after D1 (the parents)" },
  { id: "B2", title: "Billing types II" },
  { id: "B3", title: "Billing types III" },
  {
    id: "D1",
    title: "Invoice types: the general documents",
    text: "the parents of the billing types and big local searches (Anzahlungsrechnung, factuur zzp): build first",
  },
  { id: "C1", title: "Compare pages (built, English only)" },
  { id: "C2", title: "20 more compares (English only)" },
  { id: "TL0", title: "Free tools built before the plan (hub, VAT, hours, hourly rate)" },
  { id: "TL1", title: "Free tools I" },
  { id: "TL2", title: "Free tools II" },
  { id: "TL3", title: "Pricing calculators for trades", text: "needs task S4" },
  { id: "G0", title: "The free invoice generator (built)" },
  { id: "G1", title: "Document generators (receipt, estimate, proforma, credit note)" },
  {
    id: "CT1",
    title: "Country pages I (English-speaking countries + EU reverse charge)",
    text: "needs task S3",
  },
  { id: "CT2", title: "Country pages II", text: "needs task S3" },
  {
    id: "CT3",
    title: "European countries in English (for foreign freelancers)",
    text: "needs task S3",
  },
  {
    id: "LO1",
    title: "Invoice rules per country, in its own language",
    text: "needs task S3; it, pt, pl stay on hold (e-invoicing)",
  },
  { id: "LO2", title: "Local rivals, in their own language (HL9)" },
  {
    id: "P0",
    title: "Core pages (built): home, hubs, help, affiliate, terms, privacy, Android",
  },
  { id: "BL1", title: "Blog articles 1–17 (built, learn.invoicor.com)" },
  { id: "BL2", title: "Blog articles 18–34 (built, learn.invoicor.com)" },
  { id: "P1", title: "Trust pages: about, contact (E-E-A-T)" },
];

/**
 * The order L items are numbered in: per source item, one L item per language. Append only.
 * Items without `localize: yes` pages get no L items. Item 0 (TL0, G0, P0) = built before the plan.
 */
export const LANGUAGE_SOURCES = [
  "T1",
  "I1",
  "T2",
  "T3",
  "I2",
  "I3",
  "D1",
  "B1",
  "T4",
  "I4",
  "TL1",
  "CT1",
  "P1",
  "T5",
  "I5",
  "B2",
  "T6",
  "I6",
  "TL2",
  "G1",
  "T7",
  "I7",
  "B3",
  "T8",
  "I8",
  "TL3",
  "T9",
  "I9",
  // Built before the plan; their language versions partly exist (home, generator, help, Android, tools).
  "TL0",
  "G0",
  "P0",
  // Trade templates T10–T20 (added 2026-11-26).
  "T10",
  "T11",
  "T12",
  "T13",
  "T14",
  "T15",
  "T16",
  "T17",
  "T18",
  "T19",
  "T20",
  // Industry pages I10–I20 (added 2026-11-27).
  "I10",
  "I11",
  "I12",
  "I13",
  "I14",
  "I15",
  "I16",
  "I17",
  "I18",
  "I19",
  "I20",
];

/** A suggested order for the English items (language items: in their number order). */
export const ORDER = [
  "S1",
  "D1",
  "B1",
  "T4",
  "I4",
  "TL1",
  "P1",
  "I10",
  "I11",
  "S3",
  "CT1",
  "T5",
  "I5",
  "C2",
  "S2",
  "CT2",
  "B2",
  "T6",
  "I6",
  "LO1",
  "LO2",
  "TL2",
  "G1",
  "T7",
  "I7",
  "B3",
  "T8",
  "I8",
  "S4",
  "TL3",
  "T9",
  "I9",
  "CT3",
  "T10",
  "T11",
  "T12",
  "T13",
  "T14",
  "T15",
  "T16",
  "T17",
  "T18",
  "T19",
  "T20",
  "I12",
  "I13",
  "I14",
  "I15",
  "I16",
  "I17",
  "I18",
  "I19",
  "I20",
];

/** Language order: traffic first (German), and the e-invoicing countries last (see PLAN.md). */
export const LANGUAGE_ORDER = ["de", "es", "fr", "nl", "sv", "da", "nb", "it", "pt", "pl"];

export const GOAL = 4000;

/**
 * What every language item must get right for that language (shown in PLAN.md). `keys`: the usual
 * shape of the local search per page type, a starting point for the research (the demand gate).
 */
export const LANGUAGES = {
  de: {
    numbers: "1.234,56 €",
    rate: "19% (7% reduced); Austria 20%, Switzerland 8.1%",
    keys: {
      template: "{trade} Rechnung Vorlage",
      industry: "Rechnungsprogramm für {trade}",
      tool: "{tool} Rechner",
    },
    name: "German",
    markets: "Germany, Austria, Switzerland",
    money: "EUR (CHF in Switzerland)",
    tax: "USt / MwSt; Kleinunternehmer (§19 UStG) note",
    watch:
      "B2B e-invoicing in Germany: receiving since 2025, sending phased in 2027–2028; say when a PDF is still fine.",
  },
  es: {
    numbers: "1.234,56 €",
    rate: "21% (10%, 4%)",
    keys: {
      template: "plantilla factura {trade}",
      industry: "programa de facturación para {trade}",
      tool: "calculadora de {tool}",
    },
    name: "Spanish",
    markets: "Spain first; Latin America only with care",
    money: "EUR",
    tax: "IVA; NIF",
    watch:
      "Spain: Verifactu and B2B e-invoicing are coming (check dates). Mexico (CFDI) and most of Latin America require electronic invoices: don't present a PDF as a valid invoice there.",
  },
  fr: {
    numbers: "1 234,56 €",
    rate: "20% (10%, 5.5%, 2.1%)",
    keys: {
      template: "modèle facture {trade}",
      industry: "logiciel de facturation {trade}",
      tool: "calculateur {tool}",
    },
    name: "French",
    markets: "France, Belgium (FR), Switzerland (FR)",
    money: "EUR (CHF)",
    tax: "TVA; 'TVA non applicable, art. 293 B du CGI' for micro-entrepreneurs",
    watch: "France: B2B e-invoicing from 2026–2027 (check dates).",
  },
  nl: {
    numbers: "€ 1.234,56",
    rate: "21% (9%)",
    keys: {
      template: "factuur {trade} voorbeeld",
      industry: "facturatie app voor {trade}",
      tool: "{tool} berekenen",
    },
    name: "Dutch",
    markets: "Netherlands, Belgium (NL)",
    money: "EUR",
    tax: "btw; KOR; KvK number; 'btw verlegd'",
    watch: "Belgium: B2B e-invoicing from 2026 (Peppol): say so on Belgian examples.",
  },
  sv: {
    numbers: "1 234,56 kr",
    rate: "25% (12%, 6%)",
    keys: {
      template: "fakturamall {trade}",
      industry: "faktureringsprogram för {trade}",
      tool: "räkna ut {tool}",
    },
    name: "Swedish",
    markets: "Sweden",
    money: "SEK",
    tax: "moms; F-skatt; momsregistreringsnummer",
    watch: "Public sector needs Peppol e-invoices.",
  },
  da: {
    numbers: "1.234,56 kr.",
    rate: "25%",
    keys: {
      template: "fakturaskabelon {trade}",
      industry: "faktureringsprogram til {trade}",
      tool: "beregn {tool}",
    },
    name: "Danish",
    markets: "Denmark",
    money: "DKK",
    tax: "moms; CVR number",
    watch:
      "Public sector needs e-invoices (NemHandel/OIOUBL); the bookkeeping law sets rules for digital systems (hedge).",
  },
  nb: {
    numbers: "1 234,56 kr",
    rate: "25% (15%, 12%)",
    keys: {
      template: "fakturamal {trade}",
      industry: "faktureringsprogram for {trade}",
      tool: "kalkulator {tool}",
    },
    name: "Norwegian (Bokmål)",
    markets: "Norway",
    money: "NOK",
    tax: "MVA; organisasjonsnummer + 'MVA'",
    watch: "Public sector needs EHF; Invoicor doesn't send EHF.",
  },
  it: {
    numbers: "1.234,56 €",
    rate: "22% (10%, 5%, 4%)",
    keys: {
      template: "fattura {trade} modello",
      industry: "programma fatturazione {trade}",
      tool: "calcolo {tool}",
    },
    name: "Italian",
    markets: "Italy, Switzerland (IT)",
    money: "EUR",
    tax: "IVA; partita IVA",
    watch:
      "Italy: invoices must be electronic via the SdI; a PDF is only a courtesy copy. Every Italian page says so in the first paragraph and never sends people to make a 'valid invoice' as a PDF.",
  },
  pt: {
    numbers: "1234,56 €",
    rate: "23% (13%, 6%)",
    keys: {
      template: "modelo de fatura {trade}",
      industry: "programa de faturação para {trade}",
      tool: "calculadora de {tool}",
    },
    name: "Portuguese",
    markets: "Portugal (PT-PT); Brazil only with care",
    money: "EUR",
    tax: "IVA; NIF",
    watch:
      "Portugal: invoices must come from AT-certified software; Brazil: NF-e/NFS-e electronic invoices. Say so plainly; a PDF from Invoicor isn't a valid invoice there.",
  },
  pl: {
    numbers: "1 234,56 zł",
    rate: "23% (8%, 5%)",
    keys: {
      template: "wzór faktury {trade}",
      industry: "program do faktur dla {trade}",
      tool: "kalkulator {tool}",
    },
    name: "Polish",
    markets: "Poland",
    money: "PLN",
    tax: "VAT; NIP",
    watch:
      "Poland: KSeF structured e-invoices become mandatory in 2026 (check dates); after that a PDF isn't a valid B2B invoice.",
  },
};
