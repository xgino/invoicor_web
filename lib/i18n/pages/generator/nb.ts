/**
 * The free invoice generator's text, Norwegian Bokmål, written for Norway (ROADMAP Stage H, HL1).
 * Same shape as `en.ts`. The checklist follows bokføringsforskriften § 5-1-1 (salgsdokument).
 */
import type { GeneratorDict } from "./en";

export const nb: GeneratorDict = {
  ui: {
    viewAria: "Visning av fakturageneratoren",
    tabForm: "Skjema",
    tabPreview: "Forhåndsvisning",
    previewAria: "Forhåndsvisning av fakturaen",
    offerTitle: "Vil du laste inn eksempelet for {niche}?",
    offerText: "Det erstatter varelinjene og merknadene dine. Firmaet ditt og kunden beholdes.",
    offerLoad: "Last inn eksempel",
    offerKeep: "Behold mine",
    savedBlocked: "Ikke lagret: denne nettleseren blokkerer lagring",
    savedOk: "Lagret bare i denne nettleseren. Ingen andre kan se det.",
    newInvoice: "Ny faktura",
    newInvoiceTitle: "Beholder firmaopplysningene dine, tømmer kunde og varelinjer",
    clearAll: "Tøm alt",
    clearConfirm:
      "Vil du tømme alt? Da slettes firmaopplysningene, kunden og varelinjene dine fra denne nettleseren.",
    templateLabel: "Mal",
    browseTemplates: "Se alle maler",
    subtotal: "Sum eks. mva.",
    discount: "Rabatt",
    tax: "MVA",
    taxIncluded: " (inkludert)",
    total: "Å betale",

    setupTitle: "Oppsett",
    setupHint: "Design, språk og valuta",
    change: "Endre",
    invoiceLanguage: "Fakturaspråk",
    currency: "Valuta",
    dateFormat: "Datoformat",

    detailsTitle: "Fakturaopplysninger",
    detailsHint: "Nummer, datoer og når du vil ha betalt",
    invoiceNumber: "Fakturanummer",
    invoiceNumberHint: "Bruk fortløpende nummer, for eksempel 1001, 1002, 1003",
    issueDate: "Fakturadato",
    dueDate: "Forfallsdato",
    paymentTerms: "Betalingsbetingelser",
    paymentTermsPlaceholder: "f.eks. Betalingsfrist 14 dager",

    businessTitle: "Firmaet ditt",
    businessHint: "Hvem fakturaen er fra",
    businessName: "Firmanavn",
    email: "E-post",
    phone: "Telefon",
    address: "Adresse",
    postalCode: "Postnummer",
    city: "Poststed",
    country: "Land",
    taxId: "Org.nr. / MVA-nummer",
    taxIdPlaceholder: "f.eks. 123 456 789 MVA",
    registration: "Registreringsnummer",
    registrationPlaceholder: "f.eks. organisasjonsnummer, Foretaksregisteret",
    bankDetails: "Betalingsinformasjon",
    bankName: "Bank",
    iban: "Kontonummer / IBAN",
    swift: "SWIFT / BIC",

    clientTitle: "Faktureres til",
    clientHint: "Hvem du fakturerer",
    clientName: "Kunde eller firmanavn",
    contactPerson: "Kontaktperson",
    clientTaxHint: "Org.nr. for bedriftskunder",

    itemsTitle: "Varelinjer",
    itemsHint: "Hva du tar betalt for, opptil {max} linjer",
    addLine: "Legg til linje",
    itemsLimit: "Det er grensen i gratisversjonen. I Invoicor-appen kan du legge til flere.",
    line: "Linje {line}",
    moveUp: "Flytt linje {line} opp",
    moveDown: "Flytt linje {line} ned",
    removeLine: "Fjern linje {line}",
    item: "Beskrivelse",
    itemPlaceholder: "f.eks. Skifte blandebatteri på kjøkken",
    qty: "Antall",
    price: "Pris",
    details: "Detaljer (valgfritt)",
    detailsPlaceholder: "Vises på en egen linje under varen",
    amount: "Beløp",

    taxTitle: "MVA og rabatt",
    taxHint: "Én MVA-sats for hele fakturaen",
    taxRate: "MVA-sats",
    taxInclusive: "Prisene er inkludert MVA",
    discountNone: "Ingen rabatt",
    discountPercent: "Prosent (%)",
    discountFixed: "Fast beløp",
    discountPct: "Rabatt %",
    discountAmount: "Rabattbeløp",

    notesTitle: "Merknader",
    notesHint: "En takk, garantivilkår eller noe annet",

    payTitle: "Betalingslenke",
    payHint: "Valgfritt. Kunden betaler direkte til deg, aldri via oss",
    payLabel: "Din betalingslenke",
    payFieldHint:
      "Din egen lenke fra PayPal, Stripe eller en annen tjeneste. Den vises som en «Betal på nett»-knapp.",
    payError: "Lenken må begynne med https://",

    logo: "Logo (valgfritt)",
    logoAlt: "Logoen din",
    logoRemove: "Fjern",
    logoUpload: "Last opp logo",
    logoHint: "PNG eller JPG, maks 500 KB. Erstatter firmanavnet øverst.",
    logoErrType: "Bruk et PNG- eller JPG-bilde.",
    logoErrSize: "Logoen kan være maks 500 KB.",
    logoErrRead: "Bildet kunne ikke leses.",

    creating: "Lager PDF-en din …",
    download: "Last ned PDF",
    downloadNote: "Gratis. PDF-en har en liten «Created with invoicor.com»-linje nederst.",
    downloadNeedsItem: "Legg til minst én linje med beskrivelse for å laste ned.",
    pdfError:
      "Denne nettleseren klarte ikke å lage PDF-en. Prøv igjen, eller bruk en annen nettleser. Skjemaet ditt er lagret.",
    ready: "Klar",
    doneTitle: "Fakturaen er lastet ned",
    doneText: "Se etter {file} i nedlastingsmappen din.",
    downloadAgain: "Last ned igjen",
    createAnother: "Lag en ny",
    appTitle: "Neste gang kan du sende den fra mobilen.",
    appText:
      "Invoicor-appen lagrer kunden og varene dine, tar vare på hver faktura med status og har ikke vannmerke. {n} fakturaer gratis.",
    fileName: "faktura",

    previewFrame: "Forhåndsvisning av fakturaen",
    previewError:
      "Forhåndsvisningen kunne ikke lastes. Sjekk internettforbindelsen. Skjemaet ditt er lagret.",
    overflowTitle: "Fakturaen får ikke lenger plass på én side.",
    overflowText:
      "Nederste del av fakturaen (merknader, betalingsinformasjon) blir kuttet. Kort ned detaljene eller bruk færre linjer.",

    pickerTitle: "Velg en mal",
    pickerCount: "{free} gratis her · alle {all} i appen",
    close: "Lukk",
    free: "Gratis",
    inApp: "I appen",
    lockedAria: "{name}: tilgjengelig i Invoicor-appen",
    thumbTitle: "Malen {name}",
  },

  defaults: {
    invoiceNumber: "1001",
    paymentTerms: "Betalingsfrist 14 dager",
    notes: "Takk for oppdraget!",
  },

  page: {
    meta: {
      title: "Lag faktura gratis: fakturamal og PDF på nett | Invoicor",
      description:
        "Lag faktura gratis på nett: velg en fakturamal, legg inn varelinjer og last ned PDF. Uten registrering. 38 valutaer og 11 språk.",
    },
    home: "Hjem",
    crumb: "Lag faktura gratis",
    eyebrow: "Gratis · uten registrering",
    h1: "Lag faktura gratis",
    lead: "Fyll inn opplysningene, velg en mal og last ned en profesjonell faktura som PDF. Gratis, uten konto, i 38 valutaer og 11 språk.",

    howEyebrow: "Slik fungerer det",
    howTitle: "Lag en faktura i 3 steg",
    howDescription: "Lag en profesjonell faktura på nett og last den ned som PDF.",
    steps: [
      {
        name: "Legg inn firmaet ditt og kunden",
        text: "Skriv inn firmanavn, adresse og organisasjonsnummer, og deretter hvem du fakturerer. Legg til logoen din hvis du har en.",
      },
      {
        name: "Legg inn varelinjer, MVA og rabatt",
        text: "Før opp hva du har gjort eller solgt, med antall og pris. Velg én MVA-sats og eventuelt en rabatt. Summene regnes ut for deg.",
      },
      {
        name: "Velg en mal og last ned PDF-en",
        text: "Velg blant 21 gratis maler, sjekk forhåndsvisningen og last ned fakturaen som PDF.",
      },
    ],

    mustEyebrow: "Sjekkliste",
    mustTitle: "Dette må stå på en faktura i Norge",
    mustIntro:
      "Bokføringsforskriften § 5-1-1 sier hva et salgsdokument skal inneholde. Generatoren har et felt for hvert punkt.",
    mustHave: [
      "Et fakturanummer i en fortløpende nummerserie",
      "Fakturadato (utstedelsesdato)",
      "Ditt navn og organisasjonsnummer, med «MVA» bak hvis du er registrert i Merverdiavgiftsregisteret",
      "For aksjeselskap: «Foretaksregisteret» ved siden av organisasjonsnummeret",
      "Kundens navn og adresse (eller organisasjonsnummer)",
      "Leveringsdato og leveringssted",
      "Hva som er levert: ytelsens art og omfang, med antall og pris",
      "Vederlaget og forfallsdatoen",
      "Merverdiavgiften spesifisert: sats og beløp",
      "Hvordan kunden betaler: kontonummer og gjerne KID",
    ],
    mustNote:
      "Offentlige virksomheter krever som hovedregel elektronisk faktura (EHF), ikke PDF. Generatoren har én MVA-sats per faktura, så leverer du med ulike satser, kan du lage én faktura per sats. Spør regnskapsføreren din ved tvil.",

    typesEyebrow: "Det grunnleggende",
    typesTitle: "Faktura, kvittering eller tilbud?",
    types: [
      {
        title: "Tilbud",
        text: "Før jobben: hva den sannsynligvis vil koste. Ikke et krav om betaling.",
      },
      {
        title: "Faktura",
        text: "Etter jobben (eller før, som forskudd): et krav om betaling, med forfallsdato.",
      },
      { title: "Kvittering", text: "Etter betaling: bekreftelse på at pengene er mottatt." },
    ],
    typesNote:
      "Denne generatoren lager fakturaer. Mange sender samme dokument merket «Betalt» som kvittering når pengene har kommet inn.",

    termsEyebrow: "Få betalt",
    termsTitle: "Betalingsbetingelser som gir betaling i tide",
    termsText:
      "Betalingsbetingelsene forteller kunden når fakturaen skal betales. I Norge er 14 dagers betalingsfrist vanlig, både for privatkunder og bedrifter, mens noen bedriftskunder avtaler 30 dager. Uansett hva du velger: skriv den faktiske forfallsdatoen på fakturaen, og gjør det enkelt å betale med kontonummer, gjerne KID, eller en betalingslenke. Betaler kunden for sent, kan du kreve forsinkelsesrente etter forsinkelsesrenteloven og sende en purring med lovregulert purregebyr. Tydelige betingelser og en tydelig forfallsdato er den enkleste måten å slippe å mase på.",

    tipsEyebrow: "Gode vaner",
    tipsTitle: "Nummerering, utsending og oppfølging",
    tips: [
      {
        title: "Nummerer fakturaene i én enkel serie",
        text: "Bruk fortløpende nummer, som 1001, 1002, 1003, og bruk aldri et nummer om igjen. Bokføringsreglene krever en fortløpende nummerserie, og det gjør hver faktura lett å finne når kunden eller regnskapsføreren spør.",
      },
      {
        title: "Send den samme dag",
        text: "Fakturaer som sendes rett etter jobben, blir betalt raskere. Send PDF-en på e-post eller melding, og skriv beløpet og forfallsdatoen i selve meldingen, så kunden ser dem uten å åpne filen.",
      },
      {
        title: "Følg opp høflig, og tidlig",
        text: "Har forfallsdatoen passert, send en kort og vennlig påminnelse med fakturaen vedlagt. De fleste sene betalinger skyldes rett og slett at noen har glemt dem. Ta vare på en kopi av hver faktura du sender, så vet du alltid hva som er utestående.",
      },
    ],

    vsEyebrow: "Ditt valg",
    vsTitle: "Denne generatoren eller Invoicor-appen?",
    vsIntro:
      "Begge lager de samme profesjonelle fakturaene fra de samme malene. Generatoren passer perfekt til en enkeltfaktura. Appen er for deg som fakturerer hver uke.",
    vsCaption: "Gratis fakturagenerator sammenlignet med Invoicor-appen",
    vsGenerator: "Generator",
    vsApp: "App",
    compare: [
      ["Pris", "Gratis", "{n} fakturaer gratis, deretter et abonnement"],
      ["Vannmerke", "Liten «Created with invoicor.com»-linje", "Ingen"],
      ["Maler", "21 gratis", "Alle 31 (21 gratis, resten med abonnement)"],
      ["Varelinjer", "Opptil 10", "Opptil 50 (Pro)"],
      ["Lagrede kunder og varer", "Bare i denne nettleseren", "Ja, på kontoen din"],
      ["Fakturahistorikk og status", "Nei", "Utkast, sendt, betalt, forfalt"],
      ["Hvor", "Alle nettlesere", "iPhone og iPad"],
    ] as Array<[string, string, string]>,

    moreEyebrow: "Maler og guider",
    moreTitle: "Fakturaer for ditt fag",
    moreBefore:
      "Generatoren har 21 gratis maler. Vil du vite hva som bør stå på en faktura i din bransje, se våre",
    moreLink: "fakturamaler og guider",
    moreAfter: ", eller guiden for din bransje:",
    moreEnglishNote: "Disse guidene finnes foreløpig bare på engelsk.",
    useCases: [
      { href: "/industries/plumbers-hvac", label: "Rørleggere og VVS" },
      { href: "/industries/electricians", label: "Elektrikere" },
      { href: "/industries/freelance-designers", label: "Frilansdesignere" },
      { href: "/industries/photographers-videographers", label: "Fotografer" },
      { href: "/industries/consultants-coaches", label: "Konsulenter og coacher" },
      { href: "/industries/cleaning-services", label: "Rengjøring" },
    ],

    faqEyebrow: "Spørsmål og svar",
    faqTitle: "Lag faktura gratis: spørsmål og svar",
    faqs: [
      {
        question: "Er denne fakturageneratoren virkelig gratis?",
        answer:
          "Ja. Det er gratis å lage og laste ned fakturaer her, og du trenger ingen konto. Hver PDF har en liten «Created with invoicor.com»-linje nederst. Vil du slippe den linjen, har Invoicor-appen for iPhone ikke vannmerke, og de første {n} fakturaene er gratis.",
      },
      {
        question: "Må jeg registrere meg?",
        answer:
          "Nei. Fyll ut skjemaet og last ned PDF-en. Utkastet lagres i din egen nettleser, så du kan lukke fanen og fortsette senere på samme enhet.",
      },
      {
        question: "Lagrer dere fakturaen min?",
        answer:
          "Nei. Forhåndsvisningen og PDF-en lages direkte i nettleseren din, så det du skriver, forlater aldri enheten din. Utkastet lagres bare i denne nettleseren, og «Tøm alt» sletter det.",
      },
      {
        question: "Hvilke valutaer og språk kan jeg bruke?",
        answer:
          "38 valutaer og 11 fakturaspråk. Tekstene på fakturaen (Faktura, Antall, Å betale og så videre) oversettes til språket du velger.",
      },
      {
        question: "Kan jeg legge til logoen min?",
        answer: "Ja. Last opp en PNG eller JPG på maks 500 KB, så vises den øverst på fakturaen.",
      },
      {
        question: "Hvor mange varelinjer kan jeg legge til?",
        answer:
          "Opptil 10 per faktura, det samme som gratisversjonen av Invoicor-appen. Med et abonnement i appen kan du legge til flere.",
      },
      {
        question: "Kan jeg legge til MVA og rabatt?",
        answer:
          "Ja. Velg én MVA-sats for fakturaen, enten lagt til på toppen eller allerede inkludert i prisene, og eventuelt en rabatt i prosent eller som fast beløp. Sum, MVA og totalbeløp regnes ut for deg.",
      },
      {
        question: "Kan kunden betale på nett?",
        answer:
          "Legg til din egen betalingslenke (for eksempel fra PayPal, Stripe eller Wise) og kontonummeret ditt. Begge skrives på fakturaen. Kunden betaler direkte til deg, med nettbank, Vipps eller lenken. Invoicor behandler ingen betalinger og tar ingen gebyrer.",
      },
      {
        question: "Kan jeg redigere PDF-en etter nedlasting?",
        answer:
          "En PDF er ikke laget for å redigeres. Endre skjemaet og last ned en ny, utkastet ligger der fortsatt. Vil du ta vare på hver faktura med status og sende den på nytt senere, bruk Invoicor-appen.",
      },
      {
        question: "Kan jeg kopiere tekst fra PDF-en?",
        answer:
          "Nei. PDF-en lages i nettleseren som et skarpt bilde av fakturaen, så teksten kan ikke markeres eller søkes i. Betalingslenken og de andre lenkene virker likevel. Invoicor-appen lager PDF-er med tekst du kan markere.",
      },
    ],
  },
};
