import type { GeneratorDict } from "./en";

/** Free invoice generator, Danish (Denmark). "du", as on the Danish home page. */
export const da: GeneratorDict = {
  ui: {
    viewAria: "Visning af fakturageneratoren",
    tabForm: "Formular",
    tabPreview: "Forhåndsvisning",
    previewAria: "Forhåndsvisning af fakturaen",
    offerTitle: "Indlæs eksemplet for {niche}?",
    offerText:
      "Det erstatter dine nuværende linjer og noter; din virksomhed og kunde bliver stående.",
    offerLoad: "Indlæs eksempel",
    offerKeep: "Behold mine",
    savedBlocked: "Ikke gemt: browseren blokerer lagring",
    savedOk: "Gemt kun i denne browser. Ingen andre kan se det.",
    newInvoice: "Ny faktura",
    newInvoiceTitle: "Beholder dine firmaoplysninger, rydder kunde og linjer",
    clearAll: "Ryd alt",
    clearConfirm:
      "Ryd alt? Det fjerner dine firmaoplysninger, kunden og linjerne fra denne browser.",
    templateLabel: "Skabelon",
    browseTemplates: "Se skabeloner",
    subtotal: "Subtotal",
    discount: "Rabat",
    tax: "Moms",
    taxIncluded: " (inkluderet)",
    total: "I alt",

    setupTitle: "Opsætning",
    setupHint: "Design, sprog og valuta",
    change: "Skift",
    invoiceLanguage: "Fakturasprog",
    currency: "Valuta",
    dateFormat: "Datoformat",

    detailsTitle: "Fakturaoplysninger",
    detailsHint: "Nummer, datoer og hvornår du vil have betaling",
    invoiceNumber: "Fakturanummer",
    invoiceNumberHint: "Brug et fortløbende nummer, f.eks. 1001, 1002, 1003",
    issueDate: "Fakturadato",
    dueDate: "Forfaldsdato",
    paymentTerms: "Betalingsbetingelser",
    paymentTermsPlaceholder: "f.eks. Netto 14 dage",

    businessTitle: "Din virksomhed",
    businessHint: "Hvem fakturaen er fra",
    businessName: "Firmanavn",
    email: "E-mail",
    phone: "Telefon",
    address: "Adresse",
    postalCode: "Postnummer",
    city: "By",
    country: "Land",
    taxId: "Momsnummer (CVR/SE)",
    taxIdPlaceholder: "f.eks. DK12345678",
    registration: "Registreringsnummer",
    registrationPlaceholder: "f.eks. CVR-nummer",
    bankDetails: "Bankoplysninger",
    bankName: "Bank",
    iban: "IBAN / reg.nr. og kontonummer",
    swift: "SWIFT / BIC",

    clientTitle: "Faktureres til",
    clientHint: "Hvem du fakturerer",
    clientName: "Kunde- eller firmanavn",
    contactPerson: "Kontaktperson",
    clientTaxHint: "Skal med for erhvervskunder i EU",

    itemsTitle: "Linjer",
    itemsHint: "Hvad du tager betaling for, op til {max} linjer",
    addLine: "Tilføj linje",
    itemsLimit: "Det er den gratis grænse. I Invoicor-appen kan du tilføje flere.",
    line: "Linje {line}",
    moveUp: "Flyt linje {line} op",
    moveDown: "Flyt linje {line} ned",
    removeLine: "Fjern linje {line}",
    item: "Beskrivelse",
    itemPlaceholder: "f.eks. Udskiftning af køkkenarmatur",
    qty: "Antal",
    price: "Pris",
    details: "Detaljer (valgfrit)",
    detailsPlaceholder: "Vises på en linje for sig under beskrivelsen",
    amount: "Beløb",

    taxTitle: "Moms og rabat",
    taxHint: "Én momssats for hele fakturaen",
    taxRate: "Momssats",
    taxInclusive: "Priserne er inkl. moms",
    discountNone: "Ingen rabat",
    discountPercent: "Procent (%)",
    discountFixed: "Fast beløb",
    discountPct: "Rabat %",
    discountAmount: "Rabatbeløb",

    notesTitle: "Noter",
    notesHint: "Et tak, garantibetingelser eller andet",

    payTitle: "Link til onlinebetaling",
    payHint: "Valgfrit. Kunden betaler direkte til dig, aldrig gennem os",
    payLabel: "Dit betalingslink",
    payFieldHint:
      "Dit eget link fra PayPal, Stripe eller en anden tjeneste. Det vises som en “Betal online”-knap.",
    payError: "Linket skal starte med https://",

    logo: "Logo (valgfrit)",
    logoAlt: "Dit logo",
    logoRemove: "Fjern",
    logoUpload: "Upload logo",
    logoHint: "PNG eller JPG, højst 500 KB. Erstatter navnet øverst.",
    logoErrType: "Brug et PNG- eller JPG-billede.",
    logoErrSize: "Logoet må højst fylde 500 KB.",
    logoErrRead: "Billedet kunne ikke læses.",

    creating: "Laver din pdf…",
    download: "Hent pdf",
    downloadNote: "Gratis. Pdf'en har en lille linje nederst: “Created with invoicor.com”.",
    downloadNeedsItem: "Tilføj mindst én linje med en beskrivelse for at hente pdf'en.",
    pdfError:
      "Browseren kunne ikke lave pdf'en. Prøv igen, eller brug en anden browser. Din formular er gemt.",
    ready: "Klar",
    doneTitle: "Din faktura er hentet",
    doneText: "Find {file} i din mappe med overførsler.",
    downloadAgain: "Hent igen",
    createAnother: "Lav en ny",
    appTitle: "Næste gang: send den fra telefonen.",
    appText:
      "Invoicor-appen gemmer kunden og dine varer, holder styr på hver faktura og dens status og har intet vandmærke. {n} fakturaer gratis.",
    fileName: "faktura",

    previewFrame: "Forhåndsvisning af fakturaen",
    previewError:
      "Forhåndsvisningen kunne ikke indlæses. Tjek din forbindelse; din formular er gemt.",
    overflowTitle: "Fakturaen kan ikke længere være på én side.",
    overflowText:
      "Bunden af fakturaen (noter, bankoplysninger) ville blive skåret af. Forkort detaljerne, eller brug færre linjer.",

    pickerTitle: "Vælg en skabelon",
    pickerCount: "{free} gratis her · alle {all} i appen",
    close: "Luk",
    free: "Gratis",
    inApp: "I appen",
    lockedAria: "{name}: findes i Invoicor-appen",
    thumbTitle: "Skabelonen {name}",
  },

  defaults: {
    invoiceNumber: "1001",
    paymentTerms: "Netto 14 dage",
    notes: "Tak for samarbejdet.",
  },

  page: {
    meta: {
      title: "Lav faktura gratis: fakturaskabelon og pdf | Invoicor",
      description:
        "Lav en gratis faktura online: vælg en fakturaskabelon, tilføj dine linjer, og hent en pdf. Ingen tilmelding. 38 valutaer og 11 sprog.",
    },
    home: "Forside",
    crumb: "Lav faktura gratis",
    eyebrow: "Gratis · ingen tilmelding",
    h1: "Lav faktura gratis",
    lead: "Udfyld dine oplysninger, vælg en skabelon, og hent en professionel faktura som pdf. Gratis, uden konto, i 38 valutaer og på 11 sprog.",

    howEyebrow: "Sådan virker det",
    howTitle: "Lav en faktura i 3 trin",
    howDescription: "Lav en professionel faktura online, og hent den som pdf.",
    steps: [
      {
        name: "Tilføj din virksomhed og din kunde",
        text: "Skriv firmanavn, adresse og CVR-nummer, og derefter hvem du fakturerer. Tilføj dit logo, hvis du har et.",
      },
      {
        name: "Tilføj linjer, moms og rabat",
        text: "Skriv, hvad du har lavet eller solgt, med antal og pris. Vælg én momssats og eventuelt en rabat; totalen regnes ud for dig.",
      },
      {
        name: "Vælg en skabelon, og hent pdf'en",
        text: "Vælg en af 21 gratis skabeloner, tjek forhåndsvisningen, og hent din faktura som pdf.",
      },
    ],

    mustEyebrow: "Tjekliste",
    mustTitle: "Det skal en faktura indeholde i Danmark",
    mustIntro:
      "Er du momsregistreret, skal en fuld faktura efter momsbekendtgørelsen indeholde disse oplysninger. Generatoren har et felt til hver.",
    mustHave: [
      "Udstedelsesdato (fakturadato)",
      "Et fortløbende fakturanummer, der kun bruges én gang",
      "Dit CVR- eller SE-nummer",
      "Navn og adresse på dig som sælger og på køberen",
      "Mængde og art af de varer eller ydelser, du leverer",
      "Leveringsdatoen, hvis den er en anden end fakturadatoen",
      "Beløbet ekskl. moms, enhedspris og eventuelle rabatter",
      "Momssatsen (normalt 25 %) og momsbeløbet i kroner",
      "Køberens momsnummer og teksten “omvendt betalingspligt”, når køberen skal betale momsen",
    ],
    mustNote:
      "Er du ikke momsregistreret, eller er ydelsen momsfritaget, så skriv ingen moms på, men angiv på fakturaen, hvorfor der ikke er moms. Fakturerer du det offentlige, skal fakturaen sendes elektronisk via NemHandel (OIOUBL/Peppol), ikke som pdf. Har du pligt til digital bogføring efter bogføringsloven, skal fakturaen også registreres i dit bogføringssystem. Spørg din revisor eller Skattestyrelsen ved tvivl.",

    typesEyebrow: "Det grundlæggende",
    typesTitle: "Faktura, kvittering eller tilbud?",
    types: [
      {
        title: "Tilbud",
        text: "Før opgaven: hvad den forventes at koste. Ikke en opfordring til at betale.",
      },
      {
        title: "Faktura",
        text: "Efter opgaven (eller før, ved et depositum): en opfordring til at betale, med en forfaldsdato.",
      },
      { title: "Kvittering", text: "Efter betaling: bevis for, at pengene er modtaget." },
    ],
    typesNote:
      "Generatoren laver fakturaer. Mange virksomheder sender den samme faktura mærket “Betalt” som kvittering, når pengene er kommet.",

    termsEyebrow: "Få betaling",
    termsTitle: "Betalingsbetingelser, der giver betaling til tiden",
    termsText:
      "Betalingsbetingelserne fortæller kunden, hvornår der skal betales. Til privatkunder og mindre opgaver er “netto 8 dage” almindeligt; til erhvervskunder ser man ofte “netto 14 dage” eller “netto 30 dage”. Uanset hvad du vælger, så skriv den konkrete forfaldsdato på fakturaen, gør det let at betale med reg.nr. og kontonummer eller et betalingslink, og gem fakturanummeret. Står forfaldsdatoen på fakturaen, kan du efter renteloven kræve morarente, hvis kunden betaler for sent. Klare betingelser og en tydelig forfaldsdato er den nemmeste måde at undgå rykkere på.",

    tipsEyebrow: "Gode vaner",
    tipsTitle: "Nummerering, afsendelse og opfølgning",
    tips: [
      {
        title: "Nummerér fakturaerne i én fortløbende række",
        text: "Brug et fortløbende nummer som 1001, 1002, og genbrug aldrig et nummer. Skattestyrelsen forventer en fortløbende nummerering, og det gør det let at finde hver faktura, når kunden eller din revisor spørger.",
      },
      {
        title: "Send den samme dag",
        text: "Fakturaer, der sendes lige efter opgaven, bliver betalt hurtigere. Send pdf'en på e-mail eller som besked, og skriv totalen og forfaldsdatoen i selve beskeden, så kunden ser dem uden at åbne filen.",
      },
      {
        title: "Følg venligt op, og i god tid",
        text: "Er forfaldsdatoen passeret, så send en kort og venlig påmindelse med fakturaen vedhæftet. De fleste sene betalinger er bare glemt. Gem en kopi af hver faktura, du sender, så du altid ved, hvad der står åbent.",
      },
    ],

    vsEyebrow: "Dit valg",
    vsTitle: "Generatoren eller Invoicor-appen?",
    vsIntro:
      "Begge laver de samme professionelle fakturaer med de samme skabeloner. Generatoren er perfekt til en enkelt faktura; appen er til dig, der fakturerer hver uge.",
    vsCaption: "Den gratis fakturagenerator sammenlignet med Invoicor-appen",
    vsGenerator: "Generator",
    vsApp: "App",
    compare: [
      ["Pris", "Gratis", "{n} fakturaer gratis, derefter et abonnement"],
      ["Vandmærke", "Lille linje: “Created with invoicor.com”", "Intet"],
      ["Skabeloner", "21 gratis", "Alle 31 (21 gratis, resten med abonnement)"],
      ["Linjer", "Op til 10", "Op til 50 (Pro)"],
      ["Gemte kunder og varer", "Kun i denne browser", "Ja, på din konto"],
      ["Fakturahistorik og status", "Nej", "Kladde, sendt, betalt, forfalden"],
      ["Hvor", "Enhver browser", "iPhone og iPad"],
    ] as Array<[string, string, string]>,

    moreEyebrow: "Skabeloner og guides",
    moreTitle: "Fakturaer til din type arbejde",
    moreBefore:
      "Generatoren har 21 gratis skabeloner. Vil du vide, hvad der skal stå på en faktura i din branche, så se vores",
    moreLink: "fakturaskabeloner og guides",
    moreAfter: ", eller guiden til din branche:",
    moreEnglishNote: "Guiderne findes indtil videre kun på engelsk.",
    useCases: [
      { href: "/industries/plumbers-hvac", label: "VVS'ere" },
      { href: "/industries/electricians", label: "Elektrikere" },
      { href: "/industries/freelance-designers", label: "Freelancedesignere" },
      { href: "/industries/photographers-videographers", label: "Fotografer" },
      { href: "/industries/consultants-coaches", label: "Konsulenter og coaches" },
      { href: "/industries/cleaning-services", label: "Rengøring" },
    ],

    faqEyebrow: "Ofte stillede spørgsmål",
    faqTitle: "Gratis fakturagenerator: spørgsmål",
    faqs: [
      {
        question: "Er fakturageneratoren virkelig gratis?",
        answer:
          "Ja. Det er gratis at lave og hente fakturaer her, og det kræver ingen konto. Hver pdf har en lille linje nederst: “Created with invoicor.com”. Vil du helt undgå den, har Invoicor-appen til iPhone intet vandmærke, og dine første {n} fakturaer er gratis.",
      },
      {
        question: "Skal jeg oprette mig?",
        answer:
          "Nej. Udfyld formularen, og hent pdf'en. Din kladde gemmes i din egen browser, så du kan lukke fanen og fortsætte senere på samme enhed.",
      },
      {
        question: "Gemmer I min faktura?",
        answer:
          "Nej. Forhåndsvisningen og pdf'en laves direkte i din browser, så det, du skriver, forlader aldrig din enhed. Din kladde gemmes kun i denne browser; “Ryd alt” sletter den.",
      },
      {
        question: "Hvilke valutaer og sprog kan jeg bruge?",
        answer:
          "38 valutaer og 11 fakturasprog. Fakturaens faste tekster (Faktura, Antal, I alt og så videre) oversættes til det sprog, du vælger.",
      },
      {
        question: "Kan jeg tilføje mit logo?",
        answer:
          "Ja. Upload et PNG- eller JPG-billede på højst 500 KB, så vises det øverst på fakturaen.",
      },
      {
        question: "Hvor mange linjer kan jeg tilføje?",
        answer:
          "Op til 10 pr. faktura, det samme som i Invoicor-appens gratisabonnement. Appens betalte abonnementer giver flere.",
      },
      {
        question: "Kan jeg tilføje moms og rabat?",
        answer:
          "Ja. Vælg én momssats for fakturaen, lagt oven i eller allerede inkluderet i dine priser, og eventuelt en rabat i procent eller som fast beløb. Subtotal, moms og total regnes ud for dig.",
      },
      {
        question: "Kan kunden betale online?",
        answer:
          "Tilføj dit eget betalingslink (f.eks. fra PayPal, Stripe eller Wise) og dine bankoplysninger; de står på fakturaen. Kunden betaler direkte til dig, f.eks. med bankoverførsel eller MobilePay. Invoicor håndterer ingen betalinger og tager intet gebyr.",
      },
      {
        question: "Kan jeg redigere pdf'en, når den er hentet?",
        answer:
          "En pdf er ikke beregnet til at blive redigeret. Ret formularen, og hent en ny; din kladde er der stadig. Vil du gemme hver faktura med dens status og sende den igen senere, så brug Invoicor-appen.",
      },
      {
        question: "Kan jeg kopiere tekst fra pdf'en?",
        answer:
          "Nej. Pdf'en laves i din browser som et skarpt billede af fakturaen, så teksten kan ikke markeres eller søges i. Dit betalingslink og de andre links virker stadig. Invoicor-appen laver pdf'er med tekst, der kan markeres.",
      },
    ],
  },
};
