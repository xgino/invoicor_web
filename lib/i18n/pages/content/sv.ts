import type { ContentDict } from "./en";

/**
 * Fixed text of the template and industry pages and their hubs, Swedish (Sweden). "du", as on
 * the Swedish home and help pages; "pdf" in lower case, as elsewhere in Swedish on the site.
 */
export const sv: ContentDict = {
  home: "Start",
  onThisPage: "På den här sidan",
  updated: "Uppdaterad",
  disclaimer:
    "Allmän information, inte skatte- eller juridisk rådgivning. Kontrollera detaljerna med en redovisningskonsult eller jurist där du driver ditt företag.",
  hubCta: "Skapa din nästa faktura",
  templateHub: {
    meta: {
      title: "Gratis fakturamallar per bransch | Invoicor",
      description:
        "Gratis fakturamallar och guider per bransch: vad fakturan ska innehålla, exempel med rader och misstag att undvika. Skapa och skicka dem med Invoicor.",
    },
    crumb: "Mallar",
    eyebrow: "Gratis mallar och guider",
    title: "Gratis fakturamallar",
    subtitle:
      "Fakturamallar och guider för din bransch eller den typ av faktura du behöver (förskott, timdebitering, frilans …): exakt vad som ska med, en exempelfaktura med riktiga rader och misstagen som försenar betalningen.",
    groupTypes: "Fakturatyper",
    groupTrades: "Mallar per bransch",
    cardType: "Fakturatyp",
    cardTrade: "Mall och guide",
    cta: "Visa mallen",
    explainerTitle: "Så använder du mallarna",
    explainer: [
      "Varje guide visar vad en bra faktura för den branschen eller typen innehåller: uppgifterna din kund och kundens redovisning förväntar sig, hur du anger arbete och material, och hur du hanterar förskott och moms. Exempelfakturan har realistiska rader, så du kan använda upplägget för dina egna jobb.",
      "Du kan bygga upp vilken som helst av dem i ett kalkylark eller ordbehandlingsprogram. Eller skapa samma faktura i Invoicor-appen: dina företagsuppgifter, sparade kunder och sparade artiklar fylls i åt dig, summor och moms räknas ut och du skickar en snygg pdf från mobilen. Dina första {n} fakturor är gratis.",
    ],
  },
  template: {
    crumb: "Mallar",
    eyebrow: "Gratis mall och guide",
    use: "Använd mallen gratis",
    app: "Skapa den i appen",
    toc: {
      include: "Det här ska med",
      sample: "Exempelfaktura",
      notes: "Anteckningar",
      industryNotes: "Branschanteckningar",
      mistakes: "Misstag att undvika",
      formats: "Skicka som pdf",
      tip: "Proffstips",
      faq: "Vanliga frågor",
    },
    eyebrows: {
      include: "Checklista",
      sample: "Exempel",
      notes: "Bra att veta",
      mistakes: "Undvik detta",
      formats: "Format",
      tip: "Proffstips",
    },
    subtotal: "Delsumma",
    depositPaid: "Betalt förskott",
    tax: "Moms",
    balanceDue: "Att betala",
    invoiceNotes: "Meddelande på fakturan:",
    fillExample: "Fyll i exemplet online",
    fillHint: "Gratis, ingen registrering. Ändra vad du vill och ladda ner pdf:en.",
    mistakesTitle: "Vanliga misstag att undvika",
    formatsTitle: "Skicka som pdf",
    whyPdf: "Varför pdf",
    pdfDefault:
      "En pdf ser likadan ut på alla mobiler och datorer, kan inte ändras av misstag och är det kunder och redovisningskonsulter förväntar sig.",
    browserTitle: "Gratis, i webbläsaren",
    browserText:
      "Öppna mallen i den gratis generatorn: exempelraderna är redan ifyllda. Ändra dem, lägg till din logga och ladda ner pdf:en. Ingen registrering.",
    openGenerator: "Öppna generatorn",
    iphoneTitle: "Från din iPhone",
    iphoneText:
      "Invoicor-appen skapar samma pdf och skickar den via e-post eller meddelande, med dina kunder och vanliga artiklar sparade. {n} fakturor gratis.",
    getApp: "Hämta appen",
    whyNotWord:
      "Varför inte Word eller Excel? Alla som öppnar filen kan ändra beloppen, och en formel kan i tysthet förstöra en summa. Invoicor skapar bara pdf-filer.",
    appCardEyebrow: "Fakturerar du varje vecka?",
    appCardText: "Spara dina kunder och vanliga rader, och skicka varje faktura från mobilen.",
    moreTemplates: "Fler fakturamallar",
    ctaGradient: "på några sekunder.",
    ctaText:
      "Sparade kunder och rader, automatiska summor och moms, och en snygg pdf som du skickar från mobilen innan du lämnar jobbet.",
  },
  industryHub: {
    meta: {
      title: "Fakturering per bransch | Invoicor",
      description:
        "Rörmokare, frilansande designer eller konsult: se hur Invoicors mobilapp gör din fakturering snabbare.",
    },
    crumb: "Branscher",
    eyebrow: "Branscher",
    title: "Byggd för hur du jobbar.",
    subtitle:
      "Varje bransch fakturerar på sitt sätt. Se faktureringsmisstagen, raderna och momsreglerna för ditt arbete, och hur Invoicor hanterar dem.",
    card: "Bransch",
    cta: "Se hur det fungerar",
    explainerTitle: "En app, efter hur din bransch fakturerar",
    explainer: [
      "En rörmokare fakturerar en utryckningsavgift, arbete och delar. En designer fakturerar förskott och delmål. En städare fakturerar samma kund varje vecka. Varje branschsida går igenom misstagen som försenar betalningen i den branschen, raderna du använder mest, orden kunderna förväntar sig och momsfrågorna att kontrollera.",
      "Invoicor fungerar likadant för alla: spara dina kunder och rader en gång, välj en mall och skicka en snygg pdf från mobilen. {n} fakturor är gratis, och Invoicor tar aldrig någon del av dina betalningar.",
    ],
  },
  industry: {
    crumb: "Branscher",
    start: "Börja gratis på iOS",
    online: "Skapa en gratis online",
    toc: {
      mistakes: "Faktureringsmisstag",
      features: "Så hjälper Invoicor",
      scenario: "Ett verkligt exempel",
      tip: "Experttips",
      lineItems: "Vanliga rader",
      glossary: "Ordlista",
      tax: "Moms och regler",
      faq: "Vanliga frågor",
    },
    eyebrows: {
      mistakes: "Vad som går fel",
      features: "Så hjälper Invoicor",
      scenario: "En dag på jobbet",
      tip: "Experttips",
      lineItems: "Rader",
      glossary: "Ordlista",
      tax: "Moms och regler",
    },
    scenarioTitle: "Ett verkligt faktureringsexempel",
    fromExperience: "Av erfarenhet",
    lineItemsIntro:
      "Spara dem en gång som artiklar i Invoicor och lägg till dem på vilken faktura som helst med ett tryck.",
    whatToKnow: "Bra att veta",
    templatesEyebrow: "Gratis mallar",
    templatesTitle: "Behöver du en enda faktura nu direkt?",
    templatesCard: "Med ett ifyllt exempel och vad som ska med",
    moreIndustries: "Fler branscher",
    ctaGradient: "Testa gratis.",
    ctaText:
      "Sparade kunder och rader, automatiska summor och moms, och en snygg pdf som du skickar från mobilen.",
  },
};
