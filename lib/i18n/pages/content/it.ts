import type { ContentDict } from "./en";

/**
 * Template and industry pages and their hubs, Italian (Italy). Informal "tu", as on the help
 * center and the home page. The app's screens are in English; the invoices can be in Italian.
 */
export const it: ContentDict = {
  home: "Home",
  onThisPage: "In questa pagina",
  updated: "Aggiornato",
  disclaimer:
    "Informazioni generali, non consulenza fiscale o legale. Verifica i dettagli con un commercialista o un avvocato nel luogo in cui lavori.",
  hubCta: "Crea la tua prossima fattura",
  templateHub: {
    meta: {
      title: "Modelli di fattura gratis per settore | Invoicor",
      description:
        "Modelli di fattura gratuiti per settore, con guide: cosa includere, esempi di voci ed errori da evitare. Creali e inviali in un attimo con l'app Invoicor.",
    },
    crumb: "Modelli",
    eyebrow: "Modelli e guide gratuiti",
    title: "Modelli di fattura gratuiti",
    subtitle:
      "Modelli e guide per il tuo mestiere o per il tipo di fattura che ti serve (acconto, a ore, freelance …): cosa includere, una fattura di esempio con voci reali e gli errori che ritardano il pagamento.",
    groupTypes: "Tipi di fattura",
    groupTrades: "Modelli per mestiere",
    cardType: "Tipo di fattura",
    cardTrade: "Modello e guida",
    cta: "Vedi il modello",
    explainerTitle: "Come usare questi modelli",
    explainer: [
      "Ogni guida mostra cosa contiene una buona fattura per quel mestiere o quel tipo: i dati che il cliente e il suo commercialista si aspettano, come indicare manodopera e materiali, come gestire acconti e imposte. La fattura di esempio usa voci realistiche, così puoi copiarne la struttura per i tuoi lavori.",
      "Puoi rifarle tutte con un foglio di calcolo o un programma di videoscrittura. Oppure crea la stessa fattura con l'app Invoicor: i dati della tua attività, i clienti e le voci salvate si compilano da soli, totali e imposte vengono calcolati e invii un PDF pulito dal telefono. Le prime {n} fatture sono gratis.",
    ],
  },
  template: {
    crumb: "Modelli",
    eyebrow: "Modello e guida gratuiti",
    use: "Usa questo modello gratis",
    app: "Crealo nell'app",
    toc: {
      include: "Cosa includere",
      sample: "Esempio di fattura",
      notes: "Note",
      industryNotes: "Note sul settore",
      mistakes: "Errori da evitare",
      formats: "Inviala in PDF",
      tip: "Consiglio",
      faq: "Domande frequenti",
    },
    eyebrows: {
      include: "Checklist",
      sample: "Esempio",
      notes: "Da sapere",
      mistakes: "Da evitare",
      formats: "Formato",
      tip: "Consiglio",
    },
    subtotal: "Subtotale",
    depositPaid: "Acconto versato",
    tax: "IVA",
    balanceDue: "Saldo da pagare",
    invoiceNotes: "Note sulla fattura:",
    fillExample: "Compila questo esempio online",
    fillHint: "Gratis, senza registrazione. Modifica quello che vuoi, poi scarica il PDF.",
    mistakesTitle: "Errori comuni da evitare",
    formatsTitle: "Inviala in PDF",
    whyPdf: "Perché il PDF",
    pdfDefault:
      "Un PDF si vede uguale su ogni telefono e computer, non si modifica per sbaglio ed è quello che clienti e commercialisti si aspettano.",
    browserTitle: "Gratis, nel browser",
    browserText:
      "Apri questo modello nel generatore gratuito: le righe di esempio sono già compilate. Modificale, aggiungi il tuo logo e scarica il PDF. Senza registrazione.",
    openGenerator: "Apri il generatore",
    iphoneTitle: "Dal tuo iPhone",
    iphoneText:
      "L'app Invoicor crea lo stesso PDF e lo invia via email o messaggio, con i tuoi clienti e le voci di sempre già salvati. {n} fatture gratis.",
    getApp: "Scarica l'app",
    whyNotWord:
      "Perché non Word o Excel? Chiunque li apra può cambiare gli importi, e una formula può rovinare un totale senza che te ne accorga. Invoicor crea solo PDF.",
    appCardEyebrow: "Fatturi ogni settimana?",
    appCardText: "Salva i tuoi clienti e le voci di sempre, e invia ogni fattura dal telefono.",
    moreTemplates: "Altri modelli di fattura",
    ctaGradient: "in pochi secondi.",
    ctaText:
      "Clienti e voci salvati, totali e imposte calcolati in automatico e un PDF pulito che invii dal telefono prima di lasciare il cantiere.",
  },
  industryHub: {
    meta: {
      title: "Software di fatturazione per settore | Invoicor",
      description:
        "Idraulico, designer freelance o consulente: scopri come l'app Invoicor rende più veloce la fatturazione nel tuo lavoro.",
    },
    crumb: "Settori",
    eyebrow: "Settori",
    title: "Pensato per come lavori.",
    subtitle:
      "Ogni mestiere fattura a modo suo. Scopri gli errori di fatturazione, le voci e le regole fiscali del tuo lavoro, e come li gestisce Invoicor.",
    card: "Settore",
    cta: "Scopri come funziona",
    explainerTitle: "Un'app, con il modo di fatturare del tuo mestiere",
    explainer: [
      "Un idraulico fattura il diritto di chiamata, la manodopera e i ricambi. Un designer fattura un acconto e gli stati di avanzamento. Un'impresa di pulizie fattura lo stesso cliente ogni settimana. Ogni pagina di settore spiega gli errori che ritardano il pagamento in quel mestiere, le voci che userai di più, i termini che i clienti si aspettano e i punti fiscali da verificare.",
      "Invoicor funziona allo stesso modo per tutti: salvi clienti e voci una volta, scegli un modello e invii un PDF pulito dal telefono. {n} fatture sono gratis, e Invoicor non trattiene mai nulla sui tuoi pagamenti.",
    ],
  },
  industry: {
    crumb: "Settori",
    start: "Inizia gratis su iOS",
    online: "Creane una gratis online",
    toc: {
      mistakes: "Errori di fatturazione",
      features: "Come ti aiuta Invoicor",
      scenario: "Un caso reale",
      tip: "Il consiglio dell'esperto",
      lineItems: "Voci più comuni",
      glossary: "Glossario",
      tax: "Fisco e obblighi",
      faq: "Domande frequenti",
    },
    eyebrows: {
      mistakes: "Cosa va storto",
      features: "Come ti aiuta Invoicor",
      scenario: "Una giornata di lavoro",
      tip: "Il consiglio dell'esperto",
      lineItems: "Voci",
      glossary: "Glossario",
      tax: "Fisco e obblighi",
    },
    scenarioTitle: "Un caso reale di fatturazione",
    fromExperience: "Dall'esperienza",
    lineItemsIntro:
      "Salvale una volta come prodotti in Invoicor e aggiungile a qualsiasi fattura con un tocco.",
    whatToKnow: "Cosa sapere",
    templatesEyebrow: "Modelli gratuiti",
    templatesTitle: "Ti serve una sola fattura, subito?",
    templatesCard: "Con un esempio già compilato e cosa includere",
    moreIndustries: "Altri settori",
    ctaGradient: "Provalo gratis.",
    ctaText:
      "Clienti e voci salvati, totali e imposte calcolati in automatico e un PDF pulito che invii dal telefono.",
  },
};
