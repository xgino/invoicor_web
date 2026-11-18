import type { GeneratorDict } from "./en";

/**
 * Generator, Italian (Italy). Informal "tu", as on the Italian home page. Honest about SDI: in
 * Italy the fiscal invoice is the electronic one sent through the Sistema di Interscambio, so the
 * PDF from this page is positioned as a proforma, a copia di cortesia or a document for clients
 * abroad, never as the valid fattura for domestic sales.
 */
export const it: GeneratorDict = {
  ui: {
    viewAria: "Vista del generatore",
    tabForm: "Modulo",
    tabPreview: "Anteprima",
    previewAria: "Anteprima della fattura",
    offerTitle: "Caricare l'esempio {niche}?",
    offerText:
      "Sostituisce le voci e le note attuali; i dati della tua attività e del cliente restano.",
    offerLoad: "Carica l'esempio",
    offerKeep: "Tieni i miei",
    savedBlocked: "Non salvato: questo browser blocca l'archiviazione",
    savedOk: "Salvato solo in questo browser. Nessun altro può vederlo.",
    newInvoice: "Nuova fattura",
    newInvoiceTitle: "Tiene i dati della tua attività, svuota cliente e voci",
    clearAll: "Cancella tutto",
    clearConfirm:
      "Cancellare tutto? Rimuove da questo browser i dati della tua attività, il cliente e le voci.",
    templateLabel: "Modello",
    browseTemplates: "Sfoglia i modelli",
    subtotal: "Imponibile",
    discount: "Sconto",
    tax: "IVA",
    taxIncluded: " (inclusa)",
    total: "Totale",

    setupTitle: "Impostazioni della fattura",
    setupHint: "Modello, lingua e valuta",
    change: "Cambia",
    invoiceLanguage: "Lingua della fattura",
    currency: "Valuta",
    dateFormat: "Formato della data",

    detailsTitle: "Dati della fattura",
    detailsHint: "Numero, date e quando vuoi essere pagato",
    invoiceNumber: "Numero fattura",
    invoiceNumberHint: "Usa una numerazione progressiva, ad es. 1/2026, 2/2026",
    issueDate: "Data di emissione",
    dueDate: "Scadenza",
    paymentTerms: "Termini di pagamento",
    paymentTermsPlaceholder: "es. Bonifico a 30 giorni data fattura",

    businessTitle: "La tua attività",
    businessHint: "Chi emette la fattura",
    businessName: "Nome o ragione sociale",
    email: "Email",
    phone: "Telefono",
    address: "Indirizzo",
    postalCode: "CAP",
    city: "Città",
    country: "Paese",
    taxId: "Partita IVA",
    taxIdPlaceholder: "es. IT12345678901",
    registration: "Codice fiscale / REA",
    registrationPlaceholder: "es. codice fiscale, REA",
    bankDetails: "Coordinate bancarie",
    bankName: "Banca",
    iban: "IBAN / numero di conto",
    swift: "SWIFT / BIC",

    clientTitle: "Intestata a",
    clientHint: "Il cliente a cui fatturi",
    clientName: "Nome del cliente o dell'azienda",
    contactPerson: "Referente",
    clientTaxHint: "Partita IVA o codice fiscale del cliente",

    itemsTitle: "Voci",
    itemsHint: "Cosa stai fatturando, fino a {max} righe",
    addLine: "Aggiungi riga",
    itemsLimit: "È il limite della versione gratuita. Con l'app Invoicor puoi aggiungerne di più.",
    line: "Riga {line}",
    moveUp: "Sposta in su la riga {line}",
    moveDown: "Sposta in giù la riga {line}",
    removeLine: "Elimina la riga {line}",
    item: "Descrizione",
    itemPlaceholder: "es. Sostituzione caldaia a condensazione",
    qty: "Q.tà",
    price: "Prezzo",
    details: "Dettagli (facoltativi)",
    detailsPlaceholder: "Compare su una riga a parte, sotto la voce",
    amount: "Importo",

    taxTitle: "IVA e sconto",
    taxHint: "Un'unica aliquota per tutta la fattura",
    taxRate: "Aliquota IVA",
    taxInclusive: "I prezzi includono già l'IVA",
    discountNone: "Nessuno sconto",
    discountPercent: "Percentuale (%)",
    discountFixed: "Importo fisso",
    discountPct: "Sconto %",
    discountAmount: "Importo dello sconto",

    notesTitle: "Note",
    notesHint: "Un ringraziamento, la garanzia o altre indicazioni",

    payTitle: "Link di pagamento online",
    payHint: "Facoltativo. Il cliente paga direttamente te, mai tramite noi",
    payLabel: "Il tuo link di pagamento",
    payFieldHint:
      "Il tuo link PayPal, Stripe o di un altro servizio. Compare come pulsante “Paga online”.",
    payError: "Il link deve iniziare con https://",

    logo: "Logo (facoltativo)",
    logoAlt: "Il tuo logo",
    logoRemove: "Rimuovi",
    logoUpload: "Carica il logo",
    logoHint: "PNG o JPG, fino a 500 KB. Sostituisce il nome in alto.",
    logoErrType: "Usa un'immagine PNG o JPG.",
    logoErrSize: "Il logo non deve superare i 500 KB.",
    logoErrRead: "Non è stato possibile leggere l'immagine.",

    creating: "Sto creando il PDF…",
    download: "Scarica il PDF",
    downloadNote: "Gratis. In fondo al PDF c'è una piccola riga “Created with invoicor.com”.",
    downloadNeedsItem: "Aggiungi almeno una riga con una descrizione per scaricare.",
    pdfError:
      "Questo browser non è riuscito a creare il PDF. Riprova o usa un altro browser. Il modulo è salvato.",
    ready: "Pronta",
    doneTitle: "La tua fattura è scaricata",
    doneText: "Trovi {file} nella cartella Download.",
    downloadAgain: "Scarica di nuovo",
    createAnother: "Creane un'altra",
    appTitle: "La prossima volta, inviala dal telefono.",
    appText:
      "L'app Invoicor salva questo cliente e le tue voci, conserva ogni fattura con il suo stato ed è senza filigrana. {n} fatture gratis.",
    fileName: "fattura",

    previewFrame: "Anteprima della fattura",
    previewError:
      "Non è stato possibile caricare l'anteprima. Controlla la connessione; il modulo è salvato.",
    overflowTitle: "Non sta più in una sola pagina.",
    overflowText:
      "La parte finale della fattura (note, coordinate bancarie) verrebbe tagliata. Accorcia i dettagli delle voci o usa meno righe.",

    pickerTitle: "Scegli un modello",
    pickerCount: "{free} gratis qui · tutti i {all} nell'app",
    close: "Chiudi",
    free: "Gratis",
    inApp: "Nell'app",
    lockedAria: "{name}: disponibile nell'app Invoicor",
    thumbTitle: "Modello {name}",
  },

  defaults: {
    invoiceNumber: "1/2026",
    paymentTerms: "Bonifico a 30 giorni data fattura",
    notes: "Grazie per la fiducia.",
  },

  page: {
    meta: {
      title: "Crea fattura online gratis, fac simile in PDF | Invoicor",
      description:
        "Crea una fattura online gratis, senza registrazione: scegli un modello e scarica il PDF. Utile come proforma, copia di cortesia o per clienti esteri.",
    },
    home: "Home",
    crumb: "Crea fattura",
    eyebrow: "Gratis · senza registrazione",
    h1: "Crea una fattura online gratis",
    lead: "Compila i dati, scegli un modello e scarica un PDF professionale. Gratis e senza account. In Italia la fattura fiscale passa dallo SDI: questo PDF ti serve come proforma, copia di cortesia o per i clienti all'estero.",

    howEyebrow: "Come funziona",
    howTitle: "Come creare una fattura in 3 passi",
    howDescription: "Crea una fattura professionale online e scaricala in PDF.",
    steps: [
      {
        name: "Inserisci la tua attività e il cliente",
        text: "Scrivi nome, indirizzo e partita IVA della tua attività, poi i dati del cliente. Aggiungi il logo, se ce l'hai.",
      },
      {
        name: "Aggiungi voci, IVA e sconto",
        text: "Elenca cosa hai fatto o venduto, con quantità e prezzo. Imposta un'aliquota IVA e, se vuoi, uno sconto: i totali si calcolano da soli.",
      },
      {
        name: "Scegli un modello e scarica il PDF",
        text: "Scegli uno dei 21 modelli gratuiti, controlla l'anteprima e scarica la fattura in PDF.",
      },
    ],

    mustEyebrow: "Checklist",
    mustTitle: "Cosa deve contenere una fattura in Italia",
    mustIntro:
      "L'art. 21 del DPR 633/1972 elenca i dati obbligatori. Il generatore ha un campo per ciascuno; per i casi particolari chiedi al tuo commercialista.",
    mustHave: [
      "Un numero progressivo che identifica la fattura in modo univoco (ad es. 1/2026)",
      "La data di emissione",
      "Nome o ragione sociale, indirizzo e partita IVA di chi emette la fattura",
      "Nome o ragione sociale e indirizzo del cliente",
      "La partita IVA del cliente o, se è un privato, il suo codice fiscale",
      "Natura, qualità e quantità dei beni o dei servizi",
      "L'imponibile, l'aliquota IVA e l'importo dell'imposta",
      "Il totale da pagare, con termini e modalità di pagamento",
      "Per la fattura elettronica: il codice destinatario o la PEC del cliente",
    ],
    mustNote:
      "Importante: in Italia quasi tutte le fatture verso clienti italiani, aziende o privati, devono essere fatture elettroniche trasmesse tramite il Sistema di Interscambio (SDI), dal 2024 anche in regime forfettario. Il PDF di questo generatore non sostituisce la fattura elettronica. Usalo come copia di cortesia, come fattura proforma o preventivo, oppure per clienti all'estero (anche lì ci sono regole e comunicazioni allo SDI da rispettare: verifica con il tuo commercialista).",

    typesEyebrow: "Le basi",
    typesTitle: "Fattura, proforma o ricevuta?",
    types: [
      {
        title: "Proforma o preventivo",
        text: "Prima del lavoro o del pagamento: quanto costerà. Non ha valore fiscale.",
      },
      {
        title: "Fattura",
        text: "Il documento fiscale dell'operazione, con la scadenza del pagamento. In Italia, di norma, elettronica via SDI.",
      },
      { title: "Ricevuta", text: "Dopo il pagamento: la conferma che hai ricevuto i soldi." },
    ],
    typesNote:
      "Questo generatore crea fatture in PDF. Se lo usi come proforma, scrivilo nelle note, ad esempio “Documento proforma, non valido ai fini fiscali”.",

    termsEyebrow: "Farsi pagare",
    termsTitle: "Termini di pagamento per incassare in tempo",
    termsText:
      "I termini di pagamento dicono al cliente entro quando pagare. Tra aziende, se non è concordato altro, il D.Lgs. 231/2002 prevede 30 giorni; per accordo si arriva di norma fino a 60, e in caso di ritardo maturano gli interessi di mora. Con i privati “a vista” o “a ricevimento fattura” va bene per i piccoli lavori. Qualunque termine scegli, scrivi la data di scadenza in fattura, rendi facile pagare con IBAN o link di pagamento e conserva il numero della fattura. Termini chiari e una scadenza precisa sono il modo più semplice per non dover rincorrere i pagamenti.",

    tipsEyebrow: "Buone abitudini",
    tipsTitle: "Numerazione, invio e solleciti",
    tips: [
      {
        title: "Numera le fatture in un'unica sequenza",
        text: "Usa un numero progressivo, ad esempio 1/2026, 2/2026, senza salti e senza mai riutilizzarlo. La numerazione può ripartire da 1 ogni anno. Così ogni fattura si ritrova subito quando la chiede il cliente o il commercialista.",
      },
      {
        title: "Inviala il giorno stesso",
        text: "Le fatture inviate subito dopo il lavoro si incassano prima. Manda il PDF via email o messaggio come copia di cortesia e scrivi nel testo il totale e la scadenza. La fattura elettronica va comunque trasmessa allo SDI, di norma entro 12 giorni dall'operazione.",
      },
      {
        title: "Sollecita con gentilezza, e presto",
        text: "Se la scadenza è passata, manda un breve promemoria cordiale con la fattura allegata. Spesso il cliente se n'è solo dimenticato. Conserva una copia di ogni fattura inviata, così sai sempre cosa resta da incassare.",
      },
    ],

    vsEyebrow: "A te la scelta",
    vsTitle: "Questo generatore o l'app Invoicor?",
    vsIntro:
      "Entrambi creano le stesse fatture professionali con gli stessi modelli. Il generatore è perfetto per una fattura ogni tanto; l'app è per chi fattura ogni settimana.",
    vsCaption: "Generatore di fatture gratuito a confronto con l'app Invoicor",
    vsGenerator: "Generatore",
    vsApp: "App",
    compare: [
      ["Prezzo", "Gratis", "{n} fatture gratis, poi un piano"],
      ["Filigrana", "Piccola riga “Created with invoicor.com”", "Nessuna"],
      ["Modelli", "21 gratis", "Tutti i 31 (21 gratis, gli altri con un piano)"],
      ["Righe per fattura", "Fino a 10", "Fino a 50 (Pro)"],
      ["Clienti e voci salvati", "Solo in questo browser", "Sì, nel tuo account"],
      ["Storico e stato delle fatture", "No", "Bozza, inviata, pagata, scaduta"],
      ["Dove", "Qualsiasi browser", "iPhone e iPad"],
    ] as Array<[string, string, string]>,

    moreEyebrow: "Modelli e guide",
    moreTitle: "Fatture per il tuo tipo di lavoro",
    moreBefore:
      "Il generatore ha 21 modelli gratuiti. Per sapere cosa scrivere in fattura nel tuo settore, guarda i nostri",
    moreLink: "modelli di fattura e guide",
    moreAfter: ", oppure la guida per il tuo settore:",
    moreEnglishNote: "Per ora queste guide sono in inglese.",
    useCases: [
      { href: "/industries/plumbers-hvac", label: "Idraulici e termotecnici" },
      { href: "/industries/electricians", label: "Elettricisti" },
      { href: "/industries/freelance-designers", label: "Designer freelance" },
      { href: "/industries/photographers-videographers", label: "Fotografi e videomaker" },
      { href: "/industries/consultants-coaches", label: "Consulenti e coach" },
      { href: "/industries/cleaning-services", label: "Imprese di pulizia" },
    ],

    faqEyebrow: "Domande frequenti",
    faqTitle: "Crea fattura online: domande",
    faqs: [
      {
        question: "Il generatore è davvero gratis? Devo registrarmi?",
        answer:
          "Sì, è gratis e non serve nessun account: compili il modulo e scarichi il PDF. In fondo a ogni PDF c'è una piccola riga “Created with invoicor.com”. Se preferisci senza, l'app Invoicor per iPhone non ha filigrana e le prime {n} fatture sono gratis.",
      },
      {
        question: "Il PDF vale come fattura in Italia?",
        answer:
          "Per la maggior parte delle vendite in Italia, no. Le fatture verso clienti italiani, aziende e privati, vanno emesse come fattura elettronica tramite il Sistema di Interscambio (SDI), dal 2024 anche in regime forfettario. Il PDF puoi usarlo come copia di cortesia da mandare al cliente, come proforma o preventivo, oppure per clienti all'estero; la fattura elettronica va emessa con un programma collegato allo SDI. Se la tua attività non è in Italia, il PDF va bene. Nel dubbio, chiedi al tuo commercialista.",
      },
      {
        question: "Conservate la mia fattura?",
        answer:
          "No. L'anteprima e il PDF vengono creati direttamente nel tuo browser, quindi quello che scrivi non lascia il tuo dispositivo. La bozza resta salvata solo in questo browser, così puoi chiudere la scheda e riprendere più tardi; “Cancella tutto” la elimina.",
      },
      {
        question: "Quali valute e lingue posso usare?",
        answer:
          "38 valute e 11 lingue per la fattura. Le etichette (Fattura, Quantità, Totale e così via) vengono tradotte nella lingua che scegli.",
      },
      {
        question: "Posso aggiungere il mio logo?",
        answer: "Sì. Carica un PNG o JPG fino a 500 KB e comparirà in alto nella fattura.",
      },
      {
        question: "Quante righe posso aggiungere?",
        answer:
          "Fino a 10 per fattura, come nel piano gratuito dell'app Invoicor. I piani a pagamento dell'app ne permettono di più.",
      },
      {
        question: "Posso aggiungere IVA e sconto?",
        answer:
          "Sì. Imposta un'unica aliquota IVA per la fattura, da aggiungere ai prezzi o già inclusa, e uno sconto facoltativo in percentuale o a importo fisso. Imponibile, IVA e totale si calcolano da soli.",
      },
      {
        question: "Il cliente può pagare online?",
        answer:
          "Aggiungi il tuo link di pagamento (ad esempio PayPal, Stripe o Wise) e il tuo IBAN: vengono stampati sulla fattura. Il cliente paga direttamente te. Invoicor non elabora pagamenti e non trattiene commissioni.",
      },
      {
        question: "Posso modificare il PDF dopo averlo scaricato?",
        answer:
          "Un PDF non è fatto per essere modificato. Cambia il modulo e scaricane uno nuovo: la bozza è ancora lì. Per conservare ogni fattura con il suo stato e reinviarla più tardi, usa l'app Invoicor.",
      },
      {
        question: "Posso copiare il testo dal PDF?",
        answer:
          "No. Il PDF viene creato nel browser come immagine nitida della fattura, quindi il testo non si può selezionare né cercare. Il link di pagamento e gli altri link funzionano comunque. L'app Invoicor crea PDF con testo selezionabile.",
      },
    ],
  },
};
