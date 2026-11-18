import type { GeneratorDict } from "./en";

/** Free invoice generator, Swedish (Sweden). "du", as on the Swedish home page. */
export const sv: GeneratorDict = {
  ui: {
    viewAria: "Visning i fakturagenereraren",
    tabForm: "Formulär",
    tabPreview: "Förhandsvisning",
    previewAria: "Förhandsvisning av fakturan",
    offerTitle: "Ladda exemplet för {niche}?",
    offerText: "Det ersätter dina rader och anteckningar; ditt företag och din kund ligger kvar.",
    offerLoad: "Ladda exempel",
    offerKeep: "Behåll mina",
    savedBlocked: "Inte sparat: den här webbläsaren blockerar lagring",
    savedOk: "Sparat bara i den här webbläsaren. Ingen annan kan se det.",
    newInvoice: "Ny faktura",
    newInvoiceTitle: "Behåller dina företagsuppgifter, tömmer kund och rader",
    clearAll: "Rensa allt",
    clearConfirm:
      "Rensa allt? Dina företagsuppgifter, din kund och dina rader tas bort från den här webbläsaren.",
    templateLabel: "Mall",
    browseTemplates: "Bläddra bland mallar",
    subtotal: "Summa exkl. moms",
    discount: "Rabatt",
    tax: "Moms",
    taxIncluded: " (ingår)",
    total: "Att betala",

    setupTitle: "Fakturainställningar",
    setupHint: "Design, språk och valuta",
    change: "Ändra",
    invoiceLanguage: "Fakturaspråk",
    currency: "Valuta",
    dateFormat: "Datumformat",

    detailsTitle: "Fakturauppgifter",
    detailsHint: "Nummer, datum och när du vill ha betalt",
    invoiceNumber: "Fakturanummer",
    invoiceNumberHint: "Använd ett löpnummer, till exempel 1001, 1002",
    issueDate: "Fakturadatum",
    dueDate: "Förfallodatum",
    paymentTerms: "Betalningsvillkor",
    paymentTermsPlaceholder: "t.ex. 30 dagar netto",

    businessTitle: "Ditt företag",
    businessHint: "Vem fakturan kommer från",
    businessName: "Företagsnamn",
    email: "E-post",
    phone: "Telefon",
    address: "Adress",
    postalCode: "Postnummer",
    city: "Ort",
    country: "Land",
    taxId: "Momsregistreringsnummer",
    taxIdPlaceholder: "t.ex. SE556677889901",
    registration: "Organisationsnummer",
    registrationPlaceholder: "t.ex. organisationsnummer",
    bankDetails: "Betalningsuppgifter",
    bankName: "Bank",
    iban: "IBAN / bankgiro / kontonummer",
    swift: "SWIFT / BIC",

    clientTitle: "Faktureras",
    clientHint: "Vem du fakturerar",
    clientName: "Kundens namn eller företag",
    contactPerson: "Kontaktperson",
    clientTaxHint: "Behövs för företagskunder i andra EU-länder",

    itemsTitle: "Rader",
    itemsHint: "Vad du tar betalt för, upp till {max} rader",
    addLine: "Lägg till rad",
    itemsLimit: "Det är gränsen för gratisversionen. I Invoicor-appen kan du lägga till fler.",
    line: "Rad {line}",
    moveUp: "Flytta rad {line} uppåt",
    moveDown: "Flytta rad {line} nedåt",
    removeLine: "Ta bort rad {line}",
    item: "Beskrivning",
    itemPlaceholder: "t.ex. Byte av köksblandare",
    qty: "Antal",
    price: "À-pris",
    details: "Detaljer (valfritt)",
    detailsPlaceholder: "Visas på en egen rad under beskrivningen",
    amount: "Belopp",

    taxTitle: "Moms och rabatt",
    taxHint: "En momssats för hela fakturan",
    taxRate: "Momssats",
    taxInclusive: "Priserna är inklusive moms",
    discountNone: "Ingen rabatt",
    discountPercent: "Procent (%)",
    discountFixed: "Fast belopp",
    discountPct: "Rabatt %",
    discountAmount: "Rabattbelopp",

    notesTitle: "Anteckningar",
    notesHint: "Ett tack, F-skatt, garantivillkor eller annat",

    payTitle: "Betallänk",
    payHint: "Valfritt. Kunden betalar direkt till dig, aldrig via oss",
    payLabel: "Din betallänk",
    payFieldHint:
      "Din egen länk från PayPal, Stripe eller liknande. Den visas som en ”Betala online”-knapp.",
    payError: "Länken måste börja med https://",

    logo: "Logga (valfritt)",
    logoAlt: "Din logga",
    logoRemove: "Ta bort",
    logoUpload: "Ladda upp logga",
    logoHint: "PNG eller JPG, högst 500 kB. Ersätter namnet överst.",
    logoErrType: "Använd en PNG- eller JPG-bild.",
    logoErrSize: "Loggan får vara högst 500 kB.",
    logoErrRead: "Bilden gick inte att läsa.",

    creating: "Skapar din pdf…",
    download: "Ladda ner pdf",
    downloadNote: "Gratis. Pdf:en har en liten rad ”Created with invoicor.com” längst ner.",
    downloadNeedsItem: "Lägg till minst en rad med beskrivning för att ladda ner.",
    pdfError:
      "Webbläsaren kunde inte skapa pdf:en. Försök igen eller prova en annan webbläsare. Formuläret är sparat.",
    ready: "Klar",
    doneTitle: "Din faktura är nedladdad",
    doneText: "Titta efter {file} i mappen Hämtade filer.",
    downloadAgain: "Ladda ner igen",
    createAnother: "Skapa en till",
    appTitle: "Nästa gång: skicka den från mobilen.",
    appText:
      "Invoicor-appen sparar kunden och dina artiklar, håller koll på varje faktura och dess status, och har ingen vattenstämpel. {n} fakturor gratis.",
    fileName: "faktura",

    previewFrame: "Förhandsvisning av fakturan",
    previewError:
      "Förhandsvisningen kunde inte laddas. Kontrollera anslutningen; formuläret är sparat.",
    overflowTitle: "Fakturan får inte längre plats på en sida.",
    overflowText:
      "Nedersta delen (anteckningar, betalningsuppgifter) skulle klippas bort. Korta ner detaljerna eller använd färre rader.",

    pickerTitle: "Välj mall",
    pickerCount: "{free} gratis här · alla {all} i appen",
    close: "Stäng",
    free: "Gratis",
    inApp: "I appen",
    lockedAria: "{name}: finns i Invoicor-appen",
    thumbTitle: "Mallen {name}",
  },

  defaults: {
    invoiceNumber: "1001",
    paymentTerms: "Betalningsvillkor 30 dagar",
    notes: "Tack för uppdraget!",
  },

  page: {
    meta: {
      title: "Skapa faktura gratis: fakturamall och pdf online | Invoicor",
      description:
        "Skapa en gratis faktura online: välj fakturamall, lägg till dina rader och ladda ner en pdf. Ingen registrering. 38 valutor, 11 språk.",
    },
    home: "Start",
    crumb: "Skapa faktura gratis",
    eyebrow: "Gratis · ingen registrering",
    h1: "Skapa faktura gratis",
    lead: "Fyll i dina uppgifter, välj en mall och ladda ner en proffsig faktura som pdf. Gratis, utan konto, i 38 valutor och 11 språk.",

    howEyebrow: "Så funkar det",
    howTitle: "Skapa en faktura i 3 steg",
    howDescription: "Skapa en proffsig faktura online och ladda ner den som pdf.",
    steps: [
      {
        name: "Fyll i ditt företag och din kund",
        text: "Skriv in företagsnamn, adress och momsregistreringsnummer, sedan vem du fakturerar. Lägg till din logga om du har en.",
      },
      {
        name: "Lägg till rader, moms och rabatt",
        text: "Skriv vad du har gjort eller sålt, med antal och pris. Välj en momssats och eventuell rabatt, så räknas summorna ut åt dig.",
      },
      {
        name: "Välj mall och ladda ner pdf:en",
        text: "Välj en av 21 gratis mallar, kontrollera förhandsvisningen och ladda ner fakturan som pdf.",
      },
    ],

    mustEyebrow: "Checklista",
    mustTitle: "Det här ska en faktura innehålla",
    mustIntro:
      "Enligt mervärdesskattelagen ska en fullständig faktura i Sverige ha följande uppgifter (Skatteverket beskriver reglerna). Generatorn har ett fält för var och en.",
    mustHave: [
      "Fakturadatum och ett unikt löpnummer",
      "Ditt momsregistreringsnummer (SE + organisationsnummer/personnummer + 01)",
      "Ditt och kundens namn och adress",
      "Kundens momsregistreringsnummer vid omvänd skattskyldighet, till exempel till företag i andra EU-länder",
      "Vad du har sålt: mängd och art av varor, eller omfattning och art av tjänster",
      "Datum för leverans eller utfört arbete, om det skiljer sig från fakturadatum",
      "Beskattningsunderlag (belopp exkl. moms) per momssats, à-pris och eventuella rabatter",
      "Momssats och momsbelopp",
      "Hänvisning till regeln vid momsfrihet eller omvänd skattskyldighet, t.ex. ”Omvänd skattskyldighet”",
      "Förfallodatum och hur kunden betalar: bankgiro, plusgiro, kontonummer eller IBAN",
    ],
    mustNote:
      "”Godkänd för F-skatt” är inget lagkrav på fakturan sedan 2009, men många företagskunder förväntar sig det; skriv det i anteckningarna. Aktiebolag ska också ange organisationsnummer och säte. Inrikes betalar de flesta via bankgiro eller plusgiro: skriv numret i fältet för IBAN/kontonummer. Osäker på vad som gäller ditt företag? Fråga din redovisningskonsult.",

    typesEyebrow: "Grunderna",
    typesTitle: "Faktura, kvitto eller offert?",
    types: [
      {
        title: "Offert",
        text: "Före jobbet: vad det troligen kommer att kosta. Ingen begäran om betalning.",
      },
      {
        title: "Faktura",
        text: "Efter jobbet (eller före, vid förskott): en begäran om betalning, med förfallodatum.",
      },
      { title: "Kvitto", text: "Efter betalningen: ett bevis på att pengarna har kommit in." },
    ],
    typesNote:
      "Den här generatorn skapar fakturor. Många företag skickar samma dokument märkt ”Betald” som kvitto när pengarna har kommit in.",

    termsEyebrow: "Få betalt",
    termsTitle: "Betalningsvillkor som ger betalt i tid",
    termsText:
      "Betalningsvillkoren talar om när kunden ska betala. I Sverige är 30 dagar vanligast mellan företag, medan privatpersoner och mindre jobb ofta får 10–15 dagar. Skriv alltid ut det faktiska förfallodatumet, gör det enkelt att betala med bankgiro eller betallänk och spara fakturanumret. Betalar kunden för sent har du enligt räntelagen rätt till dröjsmålsränta (referensräntan plus 8 procentenheter), och av ett företag även 450 kr i förseningsersättning. En påminnelseavgift (högst 60 kr) får du bara ta ut om den är avtalad i förväg, till exempel i villkoren på fakturan.",

    tipsEyebrow: "Goda vanor",
    tipsTitle: "Numrering, utskick och påminnelser",
    tips: [
      {
        title: "Numrera fakturorna i en enkel serie",
        text: "Använd ett löpnummer som 1001, 1002 och återanvänd aldrig ett nummer. Fakturan ska ha ett löpnummer, och luckor i serien bör du kunna förklara. Det gör varje faktura lätt att hitta när kunden eller din redovisningskonsult frågar.",
      },
      {
        title: "Skicka den samma dag",
        text: "Fakturor som skickas direkt efter jobbet betalas snabbare. Mejla pdf:en eller dela den i ett meddelande, och skriv belopp och förfallodatum i själva meddelandet så att kunden ser dem utan att öppna filen.",
      },
      {
        title: "Påminn vänligt, och i tid",
        text: "Har förfallodatumet passerat? Skicka en kort, vänlig påminnelse med fakturan bifogad. De flesta sena betalningar är bara bortglömda. Spara en kopia av varje faktura du skickar, så vet du alltid vad som är obetalt.",
      },
    ],

    vsEyebrow: "Du väljer",
    vsTitle: "Den här generatorn eller Invoicor-appen?",
    vsIntro:
      "Båda gör samma proffsiga fakturor med samma mallar. Generatorn passar perfekt för en enstaka faktura; appen är för dig som fakturerar varje vecka.",
    vsCaption: "Gratis fakturagenerator jämförd med Invoicor-appen",
    vsGenerator: "Generator",
    vsApp: "App",
    compare: [
      ["Pris", "Gratis", "{n} fakturor gratis, sedan ett abonnemang"],
      ["Vattenstämpel", "Liten rad ”Created with invoicor.com”", "Ingen"],
      ["Mallar", "21 gratis", "Alla 31 (21 gratis, resten med abonnemang)"],
      ["Rader per faktura", "Upp till 10", "Upp till 50 (Pro)"],
      ["Sparade kunder och artiklar", "Bara i den här webbläsaren", "Ja, på ditt konto"],
      ["Fakturahistorik och status", "Nej", "Utkast, skickad, betald, förfallen"],
      ["Var", "I alla webbläsare", "iPhone och iPad"],
    ] as Array<[string, string, string]>,

    moreEyebrow: "Mallar och guider",
    moreTitle: "Fakturor för din bransch",
    moreBefore:
      "Generatorn har 21 gratis mallar. Vad du ska skriva på en faktura i din bransch hittar du i våra",
    moreLink: "fakturamallar och guider",
    moreAfter: ", eller i guiden för din bransch:",
    moreEnglishNote: "Guiderna finns än så länge bara på engelska.",
    useCases: [
      { href: "/industries/plumbers-hvac", label: "VVS-montörer" },
      { href: "/industries/electricians", label: "Elektriker" },
      { href: "/industries/freelance-designers", label: "Frilansande designers" },
      { href: "/industries/photographers-videographers", label: "Fotografer" },
      { href: "/industries/consultants-coaches", label: "Konsulter och coacher" },
      { href: "/industries/cleaning-services", label: "Städfirmor" },
    ],

    faqEyebrow: "Vanliga frågor",
    faqTitle: "Skapa faktura gratis: frågor och svar",
    faqs: [
      {
        question: "Är fakturageneratorn verkligen gratis?",
        answer:
          "Ja. Att skapa och ladda ner fakturor här är gratis och kräver inget konto. Varje pdf har en liten rad ”Created with invoicor.com” längst ner. Vill du slippa den helt har Invoicor-appen för iPhone ingen vattenstämpel, och dina första {n} fakturor är gratis.",
      },
      {
        question: "Måste jag registrera mig?",
        answer:
          "Nej. Fyll i formuläret och ladda ner pdf:en. Ditt utkast sparas i din egen webbläsare, så du kan stänga fliken och fortsätta senare på samma enhet.",
      },
      {
        question: "Sparar ni min faktura?",
        answer:
          "Nej. Förhandsvisningen och pdf:en skapas direkt i din webbläsare, så det du skriver lämnar aldrig din enhet. Utkastet sparas bara i den här webbläsaren; ”Rensa allt” tar bort det.",
      },
      {
        question: "Vilka valutor och språk kan jag använda?",
        answer:
          "38 valutor och 11 fakturaspråk. Rubrikerna på fakturan (Faktura, Antal, Att betala och så vidare) översätts till det språk du väljer.",
      },
      {
        question: "Kan jag lägga till min logga?",
        answer: "Ja. Ladda upp en PNG eller JPG på högst 500 kB så visas den överst på fakturan.",
      },
      {
        question: "Hur många rader kan jag lägga till?",
        answer:
          "Upp till 10 per faktura, lika många som i Invoicor-appens gratisabonnemang. Appens betalda abonnemang tillåter fler.",
      },
      {
        question: "Kan jag lägga till moms och rabatt?",
        answer:
          "Ja. Välj en momssats för fakturan, som läggs på eller redan ingår i dina priser, och en valfri rabatt i procent eller som fast belopp. Summa, moms och att betala räknas ut åt dig. Har du rader med olika momssatser, till exempel 25 % och 12 %, gör du en faktura per momssats.",
      },
      {
        question: "Kan kunden betala online?",
        answer:
          "Lägg till din egen betallänk (till exempel från PayPal, Stripe eller Wise) och ditt bankgiro eller kontonummer; de skrivs ut på fakturan. Kunden betalar direkt till dig, till exempel via bankgiro eller Swish om ni kommer överens om det. Invoicor hanterar inga betalningar och tar ingen avgift.",
      },
      {
        question: "Kan jag ändra pdf:en efter nedladdningen?",
        answer:
          "En pdf är inte tänkt att redigeras. Ändra i formuläret och ladda ner en ny; ditt utkast finns kvar. Vill du spara varje faktura med status och skicka den igen senare använder du Invoicor-appen.",
      },
      {
        question: "Kan jag kopiera text från pdf:en?",
        answer:
          "Nej. Pdf:en skapas i webbläsaren som en skarp bild av fakturan, så texten går inte att markera eller söka i. Betallänken och övriga länkar fungerar ändå. Invoicor-appen skapar pdf:er med markerbar text.",
      },
    ],
  },
};
