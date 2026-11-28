import type { TrustDict } from "./en";

/** About and Contact (P10, P11), Italian (Italy). Informal "tu", as on the Italian help center and home page. */
export const it: TrustDict = {
  home: "Home",
  country: "Paesi Bassi",
  about: {
    meta: {
      title: "Chi siamo: l'app di fatturazione onesta | Invoicor",
      description:
        "Chi fa Invoicor e in cosa crede: un inizio gratis, zero commissioni sui tuoi soldi, persone vere che leggono ogni messaggio e dati su server in Germania.",
    },
    crumb: "Chi siamo",
    eyebrow: "Chi è Invoicor",
    title: "L'app di fatturazione onesta",
    subtitle:
      "Invoicor aiuta freelance e piccole imprese a inviare una fattura professionale in pochi secondi, nella lingua e nella valuta del cliente, senza paywall nascosti e senza commissioni sui loro soldi.",
    whyEyebrow: "Perché esiste",
    whyTitle: "Fare fatture non dovrebbe rubarti la serata",
    whyText:
      "Chi invia fatture è quasi sempre idraulico, addetto alle pulizie, designer o consulente, non commercialista. Finisci un lavoro, il cliente chiede la fattura, e gli strumenti a disposizione sono un documento vuoto oppure un software di contabilità pensato per un ufficio amministrativo. Invoicor sta nel mezzo: i campi che l'amministrazione del cliente si aspetta, compilati con quello che hai salvato l'ultima volta, e un PDF pulito da inviare prima di andartene.",
    whyText2:
      "Nelle recensioni delle app di fatturazione tornano sempre le stesse lamentele: un piano “gratuito” che in realtà è una prova, nessuna persona con cui parlare e pagamenti elaborati dall'app che trattengono i tuoi soldi. Invoicor è fatto per evitare tutte e tre.",
    principlesEyebrow: "In cosa crediamo",
    principlesTitle: "Quattro promesse che possiamo mantenere",
    principles: [
      {
        title: "Davvero gratis per iniziare",
        text: "{n} fatture vere nell'app, senza filigrana e senza abbonamento. Vedi cosa ottieni prima di pagare qualsiasi cosa.",
      },
      {
        title: "Non tocchiamo mai i tuoi soldi",
        text: "Invoicor non è un servizio di pagamento. Il cliente paga direttamente te, tramite la tua banca o un link di pagamento che aggiungi tu, e non tratteniamo nulla su nessun pagamento.",
      },
      {
        title: "Persone vere leggono ogni messaggio",
        text: "Il feedback dall'app e le email arrivano al team, non a un bot. La risposta può richiedere qualche giorno, e preferiamo dirlo piuttosto che promettere un'ora che non possiamo garantire.",
      },
      {
        title: "I tuoi dati restano nell'UE",
        text: "Account e fatture sono conservati su server in Germania e trattati nel rispetto del GDPR. Se elimini l'account, i tuoi dati vengono rimossi dai nostri server entro 30 giorni, tranne quello che la legge ci obbliga a conservare.",
      },
    ],
    whatEyebrow: "Cosa fa e cosa no",
    whatTitle: "Così lo sai prima di scaricarla",
    doesTitle: "Invoicor fa",
    does: [
      "Una fattura professionale sul tuo iPhone in pochi secondi, con il PDF da condividere via email, iMessage o WhatsApp",
      "31 modelli di fattura e il tuo logo",
      "Fatture in 11 lingue e 38 valute, per i clienti all'estero",
      "Clienti e prodotti salvati, e un tocco per duplicare la fattura del mese scorso",
      "Un generatore di fatture gratuito su questo sito, senza bisogno di account",
    ],
    doesntTitle: "Invoicor non fa (ancora)",
    doesnt: [
      "Preventivi",
      "Fatture ricorrenti o programmate, né promemoria ai clienti",
      "Elaborazione dei pagamenti (aggiungi il tuo link di pagamento)",
      "Funzionamento offline: serve una connessione a internet",
      "Android, per ora (sta arrivando: vedi la pagina Android)",
    ],
    screensNote: "Le schermate dell'app sono in inglese; le fatture sono disponibili in 11 lingue.",
    whoEyebrow: "Chi c'è dietro",
    whoTitle: "Gestito dai {country}",
    whoText:
      "Invoicor è un'attività gestita dai {country}. Questi sono i suoi dati; i termini e l'informativa sulla privacy spiegano cosa si applica quando usi l'app.",
    contactButton: "Contattaci",
    helpButton: "Aiuto e domande frequenti",
    ctaTitle: "Invia la tua prossima fattura",
    ctaGradient: "in pochi secondi.",
    ctaText: "{n} fatture gratis, senza filigrana e senza abbonamento.",
  },
  contact: {
    meta: {
      title: "Contatti: feedback, domande e bug | Invoicor",
      description:
        "Scrivi al team di Invoicor dall'app (Settings, Send Feedback) o via email. Una persona legge ogni messaggio; la risposta può richiedere qualche giorno.",
    },
    crumb: "Contatti",
    eyebrow: "Contatti",
    title: "Parla con chi fa Invoicor",
    subtitle:
      "Domande, bug o idee: una persona del team legge ogni messaggio. La risposta può richiedere qualche giorno, quindi per una risposta veloce il centro assistenza può essere più rapido.",
    waysHidden: "Come contattarci",
    app: {
      title: "Dall'app",
      before: "Vai in",
      path: "Settings → Support → Send Feedback",
      middle:
        "e scegli bug, richiesta di funzionalità o domanda. Il modello del tuo iPhone e la versione dell'app vengono aggiunti in automatico, e",
      submissions: "My Submissions",
      after: "mostra a che punto è ogni messaggio: nuovo, visto, in lavorazione o risolto.",
    },
    email: {
      title: "Via email",
      before: "Scrivi a",
      after:
        "per qualsiasi cosa: se non riesci ad accedere, per richieste sulla privacy, collaborazioni o stampa.",
    },
    help: {
      title: "Aiuto e domande frequenti",
      before:
        "La maggior parte delle domande su modelli, valute, imposte e piani trova risposta nel",
      link: "centro assistenza",
      after: ", a qualsiasi ora.",
    },
    noPhone:
      "Non c'è una linea telefonica né una chat dal vivo: per iscritto possiamo controllare il tuo account e risponderti come si deve.",
    topicsEyebrow: "Prima di scrivere",
    topicsTitle: "La risposta giusta al primo colpo",
    topics: [
      {
        title: "Un bug o un PDF che non va",
        text: "Spiega cosa hai toccato, cosa ti aspettavi e cosa è successo, e il numero della fattura se riguarda una fattura sola. Uno screenshot aiuta (allegalo a un'email).",
      },
      {
        title: "Abbonamenti, rimborsi e disdetta",
        text: "I piani si acquistano tramite Apple, quindi pagamenti e rimborsi li gestisce Apple. Puoi disdire quando vuoi sul tuo iPhone in Impostazioni → [il tuo nome] → Abbonamenti. Se qualcosa non ti torna, ti aiutiamo volentieri.",
      },
      {
        title: "I tuoi dati e la privacy",
        text: "Chiedi via email una copia dei tuoi dati o la loro cancellazione; puoi anche eliminare l'account dall'app. L'informativa sulla privacy spiega i tuoi diritti secondo il GDPR.",
      },
      {
        title: "Affiliati e partner",
        text: "Il programma di affiliazione ha una sua pagina, con come funziona e come iscriversi. Per altre collaborazioni, scrivici.",
      },
    ],
    related: "Vedi anche:",
    relatedLinks: {
      privacy: "informativa sulla privacy (in inglese)",
      terms: "termini (in inglese)",
      affiliate: "programma di affiliazione (in inglese)",
      about: "chi siamo",
    },
    companyEyebrow: "Dati dell'attività",
    companyTitle: "A chi stai scrivendo",
    ctaTitle: "Non l'hai ancora provato?",
    ctaGradient: "Inizia gratis.",
    ctaText: "{n} fatture gratis, senza filigrana e senza abbonamento.",
  },
  company: {
    business: "Attività",
    basedIn: "Sede",
    kvk: "KvK (Camera di commercio dei Paesi Bassi)",
    vat: "Partita IVA",
    data: "Dati",
    dataValue: "Server in Germania (UE), trattati nel rispetto del GDPR",
    email: "Email",
    countryName: "Paesi Bassi",
  },
};
