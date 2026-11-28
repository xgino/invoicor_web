import type { ContentDict } from "./en";

/** Template and industry pages and their hubs, Norwegian Bokmål (Norway). "du", as on the rest of the Norwegian site. */
export const nb: ContentDict = {
  home: "Hjem",
  onThisPage: "På denne siden",
  updated: "Oppdatert",
  disclaimer:
    "Generell informasjon, ikke skatte- eller juridisk rådgivning. Sjekk detaljene med en regnskapsfører eller advokat der du jobber.",
  hubCta: "Lag din neste faktura",
  templateHub: {
    meta: {
      title: "Gratis fakturamaler etter bransje | Invoicor",
      description:
        "Gratis fakturamaler og guider for din bransje: hva fakturaen skal inneholde, eksempler og feil du bør unngå. Lag og send dem på sekunder med Invoicor.",
    },
    crumb: "Maler",
    eyebrow: "Gratis maler og guider",
    title: "Gratis fakturamaler",
    subtitle:
      "Fakturamaler og guider for faget ditt eller fakturatypen du trenger (forskudd, timer, frilans …): nøyaktig hva som skal med, en eksempelfaktura med ekte varelinjer og feilene som forsinker betalingen.",
    groupTypes: "Fakturatyper",
    groupTrades: "Maler etter fag",
    cardType: "Fakturatype",
    cardTrade: "Mal og guide",
    cta: "Se malen",
    explainerTitle: "Slik bruker du malene",
    explainer: [
      "Hver guide viser hva en god faktura for det faget eller den typen inneholder: opplysningene kunden og regnskapsføreren deres forventer, hvordan du fører arbeid og materialer, og hvordan du håndterer forskudd og mva. Eksempelfakturaen har realistiske varelinjer, så du kan bruke oppsettet på dine egne oppdrag.",
      "Du kan lage dem selv i et regneark eller tekstprogram. Eller lag den samme fakturaen i Invoicor-appen: firmaopplysningene, lagrede kunder og lagrede varer fylles inn for deg, summer og mva regnes ut, og du sender en ryddig PDF fra telefonen. De første {n} fakturaene er gratis.",
    ],
  },
  template: {
    crumb: "Maler",
    eyebrow: "Gratis mal og guide",
    use: "Bruk malen gratis",
    app: "Lag den i appen",
    toc: {
      include: "Dette skal med",
      sample: "Eksempel på faktura",
      notes: "Merknader",
      industryNotes: "Merknader om faget",
      mistakes: "Feil du bør unngå",
      formats: "Send den som PDF",
      tip: "Godt tips",
      faq: "Vanlige spørsmål",
    },
    eyebrows: {
      include: "Sjekkliste",
      sample: "Eksempel",
      notes: "Greit å vite",
      mistakes: "Unngå dette",
      formats: "Format",
      tip: "Godt tips",
    },
    subtotal: "Delsum",
    depositPaid: "Betalt forskudd",
    tax: "MVA",
    balanceDue: "Å betale",
    invoiceNotes: "Merknader på fakturaen:",
    fillExample: "Fyll ut eksempelet på nett",
    fillHint: "Gratis, uten registrering. Endre det du vil, og last ned PDF-en.",
    mistakesTitle: "Vanlige feil du bør unngå",
    formatsTitle: "Send den som PDF",
    whyPdf: "Hvorfor PDF",
    pdfDefault:
      "En PDF ser lik ut på alle telefoner og datamaskiner, kan ikke endres ved et uhell og er det kunder og regnskapsførere forventer.",
    browserTitle: "Gratis, i nettleseren",
    browserText:
      "Åpne malen i den gratis generatoren: eksempellinjene er allerede fylt inn. Endre dem, legg til logoen din og last ned PDF-en. Uten registrering.",
    openGenerator: "Åpne generatoren",
    iphoneTitle: "Fra iPhonen din",
    iphoneText:
      "Invoicor-appen lager den samme PDF-en og sender den på e-post eller melding, med kundene og de faste varene dine lagret. {n} fakturaer gratis.",
    getApp: "Last ned appen",
    whyNotWord:
      "Hvorfor ikke Word eller Excel? Alle som åpner filen, kan endre beløpene, og en formel kan i det stille ødelegge en sum. Invoicor lager bare PDF-er.",
    appCardEyebrow: "Fakturerer du hver uke?",
    appCardText: "Lagre kundene og de faste varelinjene dine, og send hver faktura fra telefonen.",
    moreTemplates: "Flere fakturamaler",
    ctaGradient: "på sekunder.",
    ctaText:
      "Lagrede kunder og varelinjer, automatiske summer og mva, og en ryddig PDF du sender fra telefonen før du drar fra jobben.",
  },
  industryHub: {
    meta: {
      title: "Faktureringsprogram etter bransje | Invoicor",
      description:
        "Er du rørlegger, frilansdesigner eller konsulent? Se hvordan Invoicor-appen gjør faktureringen raskere.",
    },
    crumb: "Bransjer",
    eyebrow: "Bransjer",
    title: "Laget for måten du jobber på.",
    subtitle:
      "Hvert fag fakturerer forskjellig. Se faktureringsfeilene, varelinjene og mva-reglene for arbeidet ditt, og hvordan Invoicor håndterer dem.",
    card: "Bransje",
    cta: "Se hvordan det fungerer",
    explainerTitle: "Én app, slik faget ditt fakturerer",
    explainer: [
      "En rørlegger fakturerer oppmøte, arbeid og deler. En designer fakturerer forskudd og delbetalinger. Et renholdsfirma fakturerer den samme kunden hver uke. Hver bransjeside går gjennom feilene som forsinker betalingen i faget, varelinjene du bruker mest, ordene kundene forventer å se, og mva-punktene du bør sjekke.",
      "Invoicor fungerer likt for alle: lagre kundene og varelinjene én gang, velg en mal og send en ryddig PDF fra telefonen. {n} fakturaer er gratis, og Invoicor tar aldri en andel av betalingene dine.",
    ],
  },
  industry: {
    crumb: "Bransjer",
    start: "Kom i gang gratis på iOS",
    online: "Lag en gratis på nett",
    toc: {
      mistakes: "Faktureringsfeil",
      features: "Slik hjelper Invoicor",
      scenario: "Et eksempel fra virkeligheten",
      tip: "Råd fra faget",
      lineItems: "Vanlige varelinjer",
      glossary: "Ordliste",
      tax: "Mva og regler",
      faq: "Vanlige spørsmål",
    },
    eyebrows: {
      mistakes: "Dette går galt",
      features: "Slik hjelper Invoicor",
      scenario: "En dag på jobben",
      tip: "Råd fra faget",
      lineItems: "Varelinjer",
      glossary: "Ordliste",
      tax: "Mva og regler",
    },
    scenarioTitle: "Et eksempel på fakturering fra virkeligheten",
    fromExperience: "Av erfaring",
    lineItemsIntro:
      "Lagre disse én gang som varer i Invoicor, og legg dem til på hvilken som helst faktura med ett trykk.",
    whatToKnow: "Dette bør du vite",
    templatesEyebrow: "Gratis maler",
    templatesTitle: "Trenger du én faktura akkurat nå?",
    templatesCard: "Med et utfylt eksempel og hva som skal med",
    moreIndustries: "Flere bransjer",
    ctaGradient: "Prøv gratis.",
    ctaText:
      "Lagrede kunder og varelinjer, automatiske summer og mva, og en ryddig PDF du sender fra telefonen.",
  },
};
