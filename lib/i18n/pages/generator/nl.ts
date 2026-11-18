import type { GeneratorDict } from "./en";

/**
 * The free invoice generator, Dutch (NL and Flanders). Informal "je", as on the Dutch home page.
 * The checklist follows the Dutch invoice requirements (Belastingdienst), not the English list.
 */
export const nl: GeneratorDict = {
  ui: {
    viewAria: "Weergave van de generator",
    tabForm: "Formulier",
    tabPreview: "Voorbeeld",
    previewAria: "Voorbeeld van de factuur",
    offerTitle: "Het voorbeeld voor {niche} laden?",
    offerText: "Je huidige regels en notities worden vervangen; je bedrijf en klant blijven staan.",
    offerLoad: "Voorbeeld laden",
    offerKeep: "Mijn gegevens houden",
    savedBlocked: "Niet opgeslagen: deze browser blokkeert opslag",
    savedOk: "Alleen in deze browser opgeslagen. Niemand anders kan het zien.",
    newInvoice: "Nieuwe factuur",
    newInvoiceTitle: "Houdt je bedrijfsgegevens, wist de klant en de regels",
    clearAll: "Alles wissen",
    clearConfirm:
      "Alles wissen? Je bedrijfsgegevens, klant en regels worden uit deze browser verwijderd.",
    templateLabel: "Template",
    browseTemplates: "Bekijk templates",
    subtotal: "Subtotaal",
    discount: "Korting",
    tax: "Btw",
    taxIncluded: " (inbegrepen)",
    total: "Totaal",

    setupTitle: "Factuur instellen",
    setupHint: "Opmaak, taal en valuta",
    change: "Wijzigen",
    invoiceLanguage: "Factuurtaal",
    currency: "Valuta",
    dateFormat: "Datumnotatie",

    detailsTitle: "Factuurgegevens",
    detailsHint: "Nummer, datums en wanneer je betaald wilt worden",
    invoiceNumber: "Factuurnummer",
    invoiceNumberHint: "Gebruik een doorlopend nummer, zoals 2026-0001, 2026-0002",
    issueDate: "Factuurdatum",
    dueDate: "Vervaldatum",
    paymentTerms: "Betalingstermijn",
    paymentTermsPlaceholder: "bijv. Betalen binnen 14 dagen",

    businessTitle: "Je bedrijf",
    businessHint: "Van wie de factuur komt",
    businessName: "Bedrijfsnaam",
    email: "E-mail",
    phone: "Telefoon",
    address: "Adres",
    postalCode: "Postcode",
    city: "Plaats",
    country: "Land",
    taxId: "Btw-id",
    taxIdPlaceholder: "bijv. NL123456789B01",
    registration: "KvK-nummer",
    registrationPlaceholder: "bijv. 12345678",
    bankDetails: "Bankgegevens",
    bankName: "Naam van de bank",
    iban: "IBAN / rekeningnummer",
    swift: "BIC / SWIFT",

    clientTitle: "Factuur aan",
    clientHint: "Wie je factureert",
    clientName: "Naam klant of bedrijf",
    contactPerson: "Contactpersoon",
    clientTaxHint: "Nodig voor zakelijke klanten in de EU",

    itemsTitle: "Regels",
    itemsHint: "Wat je in rekening brengt, tot {max} regels",
    addLine: "Regel toevoegen",
    itemsLimit: "Dat is de gratis limiet. In de Invoicor-app kun je meer regels toevoegen.",
    line: "Regel {line}",
    moveUp: "Regel {line} omhoog",
    moveDown: "Regel {line} omlaag",
    removeLine: "Regel {line} verwijderen",
    item: "Omschrijving",
    itemPlaceholder: "bijv. Keukenkraan vervangen",
    qty: "Aantal",
    price: "Prijs",
    details: "Toelichting (optioneel)",
    detailsPlaceholder: "Staat op een eigen regel onder de omschrijving",
    amount: "Bedrag",

    taxTitle: "Btw en korting",
    taxHint: "Eén btw-tarief voor de hele factuur",
    taxRate: "Btw-tarief",
    taxInclusive: "Prijzen zijn inclusief btw",
    discountNone: "Geen korting",
    discountPercent: "Percentage (%)",
    discountFixed: "Vast bedrag",
    discountPct: "Korting %",
    discountAmount: "Kortingsbedrag",

    notesTitle: "Notities",
    notesHint: "Een bedankje, garantievoorwaarden of iets anders",

    payTitle: "Online betaallink",
    payHint: "Optioneel. Je klant betaalt jou direct, nooit via ons",
    payLabel: "Je betaallink",
    payFieldHint:
      "Je eigen Tikkie-, PayPal- of Stripe-link, of een andere link. Hij verschijnt als knop “Online betalen”.",
    payError: "Begin de link met https://",

    logo: "Logo (optioneel)",
    logoAlt: "Je logo",
    logoRemove: "Verwijderen",
    logoUpload: "Logo uploaden",
    logoHint: "PNG of JPG, maximaal 500 KB. Komt bovenaan in plaats van de naam.",
    logoErrType: "Gebruik een PNG- of JPG-afbeelding.",
    logoErrSize: "Het logo mag maximaal 500 KB zijn.",
    logoErrRead: "Deze afbeelding kon niet worden gelezen.",

    creating: "Je pdf wordt gemaakt…",
    download: "Pdf downloaden",
    downloadNote: "Gratis. Onderaan de pdf staat een kleine regel “Created with invoicor.com”.",
    downloadNeedsItem: "Voeg minstens één regel met een omschrijving toe om te downloaden.",
    pdfError:
      "Deze browser kon de pdf niet maken. Probeer het opnieuw of gebruik een andere browser. Je formulier is bewaard.",
    ready: "Klaar",
    doneTitle: "Je factuur is gedownload",
    doneText: "Kijk in je map Downloads voor {file}.",
    downloadAgain: "Opnieuw downloaden",
    createAnother: "Nog een maken",
    appTitle: "Verstuur hem de volgende keer vanaf je telefoon.",
    appText:
      "De Invoicor-app bewaart deze klant en je regels, houdt elke factuur bij met zijn status en heeft geen watermerk. {n} facturen gratis.",
    /** The PDF's file name, before the invoice number. */
    fileName: "factuur",

    previewFrame: "Voorbeeld van de factuur",
    previewError:
      "Het voorbeeld kon niet laden. Controleer je verbinding; je formulier is bewaard.",
    overflowTitle: "Dit past niet meer op één pagina.",
    overflowText:
      "De onderkant van de factuur (notities, bankgegevens) zou wegvallen. Maak de toelichtingen korter of gebruik minder regels.",

    pickerTitle: "Kies een template",
    pickerCount: "{free} gratis hier · alle {all} in de app",
    close: "Sluiten",
    free: "Gratis",
    inApp: "In de app",
    lockedAria: "{name}: beschikbaar in de Invoicor-app",
    thumbTitle: "Template {name}",
  },

  defaults: {
    invoiceNumber: "2026-0001",
    paymentTerms: "Betalen binnen 14 dagen",
    notes: "Bedankt voor de opdracht en de prettige samenwerking.",
  },

  page: {
    meta: {
      title: "Gratis factuur maken: online een pdf-factuur | Invoicor",
      description:
        "Maak gratis een factuur online: kies een template, vul je gegevens in en download een pdf. Zonder account. Met btw, logo en KvK-nummer.",
    },
    home: "Home",
    crumb: "Gratis factuur maken",
    eyebrow: "Gratis · zonder account",
    h1: "Gratis factuur maken",
    lead: "Vul je gegevens in, kies een template en download een professionele pdf-factuur. Gratis, zonder account, in 38 valuta en 11 talen.",

    howEyebrow: "Zo werkt het",
    howTitle: "Een factuur maken in 3 stappen",
    howDescription: "Maak online een professionele factuur en download hem als pdf.",
    steps: [
      {
        name: "Vul je bedrijf en je klant in",
        text: "Zet je bedrijfsnaam, adres, btw-id en KvK-nummer erin, en daarna wie je factureert. Heb je een logo, voeg het toe.",
      },
      {
        name: "Voeg de regels, btw en korting toe",
        text: "Zet erin wat je deed of verkocht, met aantal en prijs. Kies één btw-tarief en eventueel een korting; de totalen rekenen zichzelf uit.",
      },
      {
        name: "Kies een template en download de pdf",
        text: "Kies een van de 21 gratis templates, bekijk het voorbeeld live en download je factuur als pdf.",
      },
    ],

    mustEyebrow: "Checklist",
    mustTitle: "Wat moet er op een factuur?",
    mustIntro:
      "De Belastingdienst stelt eisen aan wat er op je factuur staat. Dit zijn de belangrijkste voor Nederland. De generator heeft voor elk een veld.",
    mustHave: [
      "Een uniek, doorlopend factuurnummer en de factuurdatum",
      "Je naam of bedrijfsnaam en je adres",
      "Je btw-identificatienummer (btw-id) en je KvK-nummer",
      "De naam en het adres van je klant",
      "De datum van levering of van de dienst, als die afwijkt van de factuurdatum",
      "Een duidelijke omschrijving van wat je leverde, met de hoeveelheid",
      "De prijs per eenheid exclusief btw, en eventuele korting",
      "Het btw-tarief en het btw-bedrag",
      "Het totaalbedrag exclusief btw en het totaal te betalen",
      "Bij btw verlegd: de vermelding “btw verlegd” en het btw-id van je klant",
    ],
    mustNote:
      "Doe je mee aan de kleineondernemersregeling (KOR)? Dan reken je geen btw; zet het tarief op 0% en vermeld in de notities dat je onder de KOR valt (vraag bij twijfel je boekhouder naar de juiste tekst). De generator heeft één btw-tarief per factuur, dus maak voor regels met 9% en 21% btw aparte facturen.",

    typesEyebrow: "De basis",
    typesTitle: "Factuur, kwitantie of offerte?",
    types: [
      {
        title: "Offerte",
        text: "Vóór het werk: wat het waarschijnlijk gaat kosten. Nog geen verzoek om te betalen.",
      },
      {
        title: "Factuur",
        text: "Na het werk (of vooraf, voor een aanbetaling): een verzoek om te betalen, met een vervaldatum.",
      },
      { title: "Kwitantie", text: "Na de betaling: bewijs dat het geld is ontvangen." },
    ],
    typesNote:
      "Deze generator maakt facturen. Veel ondernemers sturen hetzelfde document met “Betaald” erop als bewijs zodra het geld binnen is.",

    termsEyebrow: "Betaald krijgen",
    termsTitle: "Een betalingstermijn waarmee je op tijd betaald krijgt",
    termsText:
      "De betalingstermijn vertelt je klant wanneer hij moet betalen. In Nederland zijn 14 of 30 dagen gebruikelijk; voor kleine klussen en particulieren kan het ook direct. Heb je met een zakelijke klant niets afgesproken, dan geldt volgens de wet een termijn van 30 dagen, en daarna mag je de wettelijke handelsrente rekenen. Zet altijd de echte vervaldatum op de factuur, maak betalen makkelijk met je IBAN of een betaallink en bewaar het factuurnummer in je administratie. Duidelijke afspraken en een duidelijke vervaldatum zijn de eenvoudigste manier om achter betalingen aan zitten te voorkomen.",

    tipsEyebrow: "Goede gewoontes",
    tipsTitle: "Nummeren, versturen en herinneren",
    tips: [
      {
        title: "Nummer je facturen in één doorlopende reeks",
        text: "De Belastingdienst wil een uniek, opeenvolgend factuurnummer. Gebruik bijvoorbeeld 2026-0001, 2026-0002, en gebruik een nummer nooit twee keer. Zo vind je elke factuur meteen terug als je klant of je boekhouder ernaar vraagt.",
      },
      {
        title: "Verstuur hem dezelfde dag",
        text: "Een factuur die je direct na de klus verstuurt, wordt eerder betaald. Mail de pdf of deel hem via WhatsApp, en zet het bedrag en de vervaldatum ook in je bericht, zodat je klant ze ziet zonder het bestand te openen.",
      },
      {
        title: "Herinner vriendelijk, en op tijd",
        text: "Is de vervaldatum voorbij, stuur dan een korte, vriendelijke herinnering met de factuur erbij. De meeste late betalingen zijn gewoon vergeten. Bewaar een kopie van elke factuur die je verstuurt, zodat je altijd weet wat er nog openstaat.",
      },
    ],

    vsEyebrow: "Jij kiest",
    vsTitle: "Deze generator of de Invoicor-app?",
    vsIntro:
      "Allebei maken ze dezelfde professionele facturen met dezelfde templates. De generator is ideaal voor een losse factuur; de app is voor als je elke week factureert.",
    vsCaption: "De gratis factuurgenerator vergeleken met de Invoicor-app",
    vsGenerator: "Generator",
    vsApp: "App",
    compare: [
      ["Prijs", "Gratis", "{n} facturen gratis, daarna een abonnement"],
      ["Watermerk", "Kleine regel “Created with invoicor.com”", "Geen"],
      ["Templates", "21 gratis", "Alle 31 (21 gratis, de rest per abonnement)"],
      ["Factuurregels", "Tot 10", "Tot 50 (Pro)"],
      ["Opgeslagen klanten en producten", "Alleen in deze browser", "Ja, in je account"],
      ["Factuuroverzicht en status", "Nee", "Concept, verstuurd, betaald, te laat"],
      ["Waar", "Elke browser", "iPhone en iPad"],
    ],

    moreEyebrow: "Templates en gidsen",
    moreTitle: "Facturen voor jouw soort werk",
    moreBefore:
      "De generator heeft 21 gratis templates. Wil je weten wat er in jouw vak op een factuur hoort, kijk dan bij onze",
    moreLink: "factuurtemplates en gidsen",
    moreAfter: ", of bij de gids voor jouw branche:",
    moreEnglishNote: "Deze gidsen zijn voorlopig in het Engels.",
    useCases: [
      { href: "/industries/plumbers-hvac", label: "Loodgieters en installateurs" },
      { href: "/industries/electricians", label: "Elektriciens" },
      { href: "/industries/freelance-designers", label: "Freelance ontwerpers" },
      { href: "/industries/photographers-videographers", label: "Fotografen" },
      { href: "/industries/consultants-coaches", label: "Adviseurs en coaches" },
      { href: "/industries/cleaning-services", label: "Schoonmaakbedrijven" },
    ],

    faqEyebrow: "Veelgestelde vragen",
    faqTitle: "Gratis factuur maken: vragen",
    faqs: [
      {
        question: "Is deze factuurgenerator echt gratis?",
        answer:
          "Ja. Facturen maken en downloaden is hier gratis en je hebt geen account nodig. Onderaan elke pdf staat een kleine regel “Created with invoicor.com”. Wil je helemaal geen regel, dan heeft de Invoicor-app voor iPhone geen watermerk en zijn je eerste {n} facturen gratis.",
      },
      {
        question: "Moet ik me aanmelden?",
        answer:
          "Nee. Vul het formulier in en download de pdf. Je concept blijft in je eigen browser bewaard, dus je kunt het tabblad sluiten en later op hetzelfde apparaat verdergaan.",
      },
      {
        question: "Bewaren jullie mijn factuur?",
        answer:
          "Nee. Het voorbeeld en de pdf worden in je browser gemaakt, dus wat je typt verlaat je apparaat niet. Je concept staat alleen in deze browser; met “Alles wissen” haal je het weg.",
      },
      {
        question: "Welke valuta en talen kan ik gebruiken?",
        answer:
          "38 valuta en 11 factuurtalen. De vaste woorden op de factuur (Factuur, Aantal, Totaal enzovoort) worden vertaald in de taal die je kiest.",
      },
      {
        question: "Kan ik mijn logo toevoegen?",
        answer:
          "Ja. Upload een PNG of JPG van maximaal 500 KB en hij verschijnt bovenaan de factuur.",
      },
      {
        question: "Hoeveel regels kan ik toevoegen?",
        answer:
          "Tot 10 per factuur, net als in het gratis abonnement van de Invoicor-app. Met de betaalde abonnementen van de app kun je er meer toevoegen.",
      },
      {
        question: "Kan ik btw en korting toevoegen?",
        answer:
          "Ja. Kies één btw-tarief voor de factuur, bovenop je prijzen of er al in inbegrepen, en eventueel een korting in procenten of als vast bedrag. Subtotaal, btw en totaal worden voor je uitgerekend.",
      },
      {
        question: "Kan mijn klant online betalen?",
        answer:
          "Zet je eigen betaallink op de factuur (bijvoorbeeld een Tikkie, PayPal- of Stripe-link) en je IBAN; ze worden op de factuur gezet. Je klant betaalt jou direct. Invoicor verwerkt geen betalingen en rekent geen kosten.",
      },
      {
        question: "Kan ik de pdf na het downloaden nog aanpassen?",
        answer:
          "Een pdf is niet bedoeld om te bewerken. Pas het formulier aan en download een nieuwe; je concept staat er nog. Wil je elke factuur met zijn status bewaren en later opnieuw versturen, gebruik dan de Invoicor-app. Factureer je in België aan Belgische bedrijven? Sinds 1 januari 2026 moet dat een e-factuur via Peppol zijn; een pdf is dan niet genoeg.",
      },
      {
        question: "Kan ik tekst uit de pdf kopiëren?",
        answer:
          "Nee. De pdf wordt in je browser gemaakt als een scherpe afbeelding van de factuur, dus de tekst kun je niet selecteren of doorzoeken. Je betaallink en de andere links werken wel. De Invoicor-app maakt pdf's met selecteerbare tekst.",
      },
    ],
  },
};
