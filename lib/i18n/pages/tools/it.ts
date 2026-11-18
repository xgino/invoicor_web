import type { ToolsDict } from "./en";

/**
 * Free tools, Italian (Italy). Informal "tu", as on the Italian home and generator pages. IVA at
 * the Italian standard rate (22%), numbers written the Italian way (1.234,50 €). The rate
 * example is a partita IVA freelancer; tax is a rough share, never a forfettario calculation.
 */
export const it: ToolsDict = {
  common: {
    navLabel: "Strumenti gratuiti",
    home: "Home",
    eyebrow: "Strumento gratuito · senza registrazione",
    howEyebrow: "Come funziona",
    howTitle: "Il calcolo, spiegato semplice",
    faqEyebrow: "Domande frequenti",
    faqTitle: "Domande su questo strumento",
    moreTools: "Altri strumenti gratuiti",
    closing: {
      title: "Fatturi ogni settimana?",
      gradient: "Fallo con l'app.",
      text: "Clienti e prodotti salvati, ogni fattura con il suo stato e un PDF pulito dal tuo iPhone. {n} fatture gratis.",
    },
    currency: "Valuta",
  },

  hub: {
    meta: {
      title: "Strumenti gratuiti: fattura, calcolo IVA e ore | Invoicor",
      description:
        "Strumenti gratuiti per freelance e partite IVA: crea fattura online, calcolo IVA e scorporo, calcolo ore lavorate e calcolo della tariffa oraria.",
    },
    crumb: "Strumenti gratuiti",
    eyebrow: "Gratis · senza registrazione · niente da installare",
    title: "Strumenti gratuiti per farti pagare",
    subtitle:
      "Prepara una fattura, calcola e scorpora l'IVA, somma le ore lavorate e trova una tariffa che copra le tue spese. Tutto funziona nel tuo browser.",
    closing: {
      title: "Tutto questo, sul tuo iPhone.",
      gradient: "{n} fatture gratis.",
      text: "Clienti e prodotti salvati, IVA e totali calcolati per te e ogni fattura con il suo stato.",
    },
  },

  tools: {
    generator: {
      name: "Crea fattura",
      short:
        "Compila una fattura online e scarica il PDF, come proforma o copia di cortesia. 21 modelli, senza registrazione.",
    },
    vat: {
      name: "Calcolo IVA",
      short: "Aggiungi l'IVA a un prezzo o scorporala, con le aliquote ordinarie di 19 Paesi.",
    },
    hours: {
      name: "Calcolo ore lavorate",
      short:
        "Somma i turni della settimana e trasforma 1:45 nelle 1,75 ore che servono in fattura.",
    },
    rate: {
      name: "Calcolo tariffa oraria",
      short: "Parti dal reddito che vuoi e trova la tariffa oraria e giornaliera che ti serve.",
    },
  },

  vat: {
    meta: {
      title: "Calcolo IVA online: aggiungi o scorpora l'IVA | Invoicor",
      description:
        "Calcolo IVA gratis: aggiungi l'IVA al 22% all'imponibile o fai lo scorporo IVA da un prezzo lordo. Aliquote di 19 Paesi, risultato immediato.",
    },
    title: "Calcolo IVA e scorporo",
    subtitle:
      "Aggiungi l'IVA a un imponibile o scorporala da un prezzo IVA inclusa, con le aliquote ordinarie di 19 Paesi. Immediato, gratuito, e nulla esce dal tuo browser.",
    defaultCountry: "IT",
    ui: {
      label: "Calcolo IVA",
      modeAria: "Che importo hai?",
      add: "Aggiungi IVA (importo senza IVA)",
      remove: "Scorpora IVA (importo IVA inclusa)",
      amountNet: "Importo senza IVA",
      amountGross: "Importo IVA inclusa",
      country: "Paese (aliquota ordinaria)",
      custom: "Aliquota personalizzata",
      gst: "GST",
      rate: "Aliquota IVA",
      net: "Imponibile (senza IVA)",
      vatRow: "IVA {rate}%",
      gross: "Totale (IVA inclusa)",
      cta: "Metti questo importo in fattura",
      invoiceItem: "Prodotto o servizio",
    },
    sections: [
      {
        title: "Aggiungere l'IVA (dall'imponibile al totale)",
        paragraphs: [
          "IVA = imponibile × aliquota ÷ 100, e totale = imponibile + IVA. Un lavoro da 478,50 € con IVA al 22% ha 105,27 € di IVA e un totale di 583,77 €. Gli importi sono arrotondati al centesimo, per eccesso da 0,5 in su, come in fattura.",
        ],
      },
      {
        title: "Scorporo IVA (dal prezzo IVA inclusa all'imponibile)",
        paragraphs: [
          "imponibile = prezzo IVA inclusa ÷ (1 + aliquota ÷ 100). È il passaggio che si sbaglia più spesso: togliere il 22% dal prezzo lordo dà un imponibile troppo basso. Con IVA al 22%, 122 € IVA inclusa sono 100 € di imponibile, non 95,16 €.",
          "Ti serve quando un fornitore ti dà un prezzo IVA inclusa, o quando fissi un prezzo al pubblico e vuoi sapere quanto resta a te.",
        ],
      },
      {
        title: "Aliquota ordinaria e aliquote ridotte",
        paragraphs: [
          "L'elenco dei Paesi usa l'aliquota ordinaria di ciascuno. In Italia è il 22%, ma alcuni beni e servizi hanno aliquote ridotte del 10%, 5% o 4%, altri sono esenti, e chi è in regime forfettario non addebita l'IVA. Nel dubbio, controlla sul sito dell'Agenzia delle Entrate o chiedi al tuo commercialista, poi inserisci tu l'aliquota.",
        ],
      },
    ],
    faqs: [
      {
        question: "Come si aggiunge l'IVA a un prezzo?",
        answer:
          "Moltiplica l'imponibile per l'aliquota IVA e somma il risultato. Per 100 € con IVA al 22%: 100 × 0,22 = 22 € di IVA, quindi il totale è 122 €. Il calcolatore lo fa per te e arrotonda al centesimo.",
      },
      {
        question: "Come si fa lo scorporo IVA da un prezzo IVA inclusa?",
        answer:
          "Dividi il prezzo per 1 più l'aliquota, invece di sottrarre la percentuale. Per 122 € IVA inclusa al 22%: 122 ÷ 1,22 = 100 € di imponibile, e l'IVA è 22 €. Togliere il 22% da 122 darebbe 95,16 €, che è sbagliato.",
      },
      {
        question: "Quali aliquote IVA include il calcolatore?",
        answer:
          "Le aliquote ordinarie di 16 Paesi europei e la GST di Australia, Canada e Nuova Zelanda, aggiornate a novembre 2026. In Italia ci sono anche le aliquote ridotte del 10%, 5% e 4% per alcuni beni e servizi: se la tua è diversa, inseriscila tu.",
      },
      {
        question: "In fattura metto i prezzi con o senza IVA?",
        answer:
          "I clienti business di solito si aspettano prezzi senza IVA, con l'IVA aggiunta in fondo; i privati si aspettano il prezzo che pagano, IVA inclusa. In ogni caso la fattura deve riportare l'imponibile, l'aliquota, l'importo dell'IVA e il totale. Nell'app Invoicor e nel generatore gratuito scegli per ogni fattura se i prezzi includono l'IVA.",
      },
      {
        question: "Quello che scrivo viene inviato a un server?",
        answer: "No. Il calcolatore funziona interamente nel tuo browser.",
      },
    ],
  },

  hours: {
    meta: {
      title: "Calcolo ore lavorate online, da ore a decimali | Invoicor",
      description:
        "Calcolo ore lavorate gratis: somma orari di inizio e fine meno le pause, converti ore e minuti in ore decimali e scopri quanto fatturare.",
    },
    title: "Calcolo ore lavorate",
    subtitle:
      "Somma una settimana di orari di inizio e fine meno le pause, ottieni il totale in ore e minuti e in ore decimali, e scopri quanto fatturare alla tua tariffa.",
    ui: {
      label: "Calcolo ore lavorate",
      intro:
        "Aggiungi ogni giorno lavorato: inizio, fine e la pausa non pagata. Tutti i giorni che ti servono, una settimana o un mese intero.",
      date: "Data",
      start: "Inizio",
      end: "Fine",
      break: "Pausa (min)",
      hours: "Ore",
      remove: "Elimina",
      startAria: "{day} inizio",
      endAria: "{day} fine",
      breakAria: "{day} pausa in minuti",
      removeAria: "Elimina {day}",
      addDay: "Aggiungi un giorno",
      addWeek: "Aggiungi una settimana",
      period: "{days} giorni · {from} – {to}",
      rate: "La tua tariffa oraria (facoltativa)",
      totalTime: "Ore lavorate",
      decimal: "In ore decimali (per la fattura)",
      toInvoice: "Da fatturare",
      totalHours: "Ore totali",
      calc: "{hours} ore × {rate}",
      convertTitle: "Conversione rapida: ore e minuti ⇄ decimali",
      convertLabel: "Orario (1:45) o decimale (1,75)",
      convertHint: "Scrivi un orario come 1:45 o un numero come 1,75",
      convertResult: "{time} = {hours} ore",
      cta: "Crea una fattura per queste ore",
      invoiceItem: "Prestazione dal {from} al {to}",
    },
    sections: [
      {
        title: "Ore lavorate al giorno",
        paragraphs: [
          "Ore = orario di fine − orario di inizio − pausa. Dalle 09:00 alle 17:30 con 30 minuti di pausa fanno 8 ore. Un turno che finisce dopo mezzanotte conta anche le ore oltre la mezzanotte.",
        ],
      },
      {
        title: "Da ore e minuti a ore decimali",
        paragraphs: [
          "In fattura le ore si moltiplicano per la tariffa, quindi servono le ore decimali: minuti ÷ 60. 15 minuti = 0,25, 30 = 0,5, 45 = 0,75. Una settimana di 38:45 sono 38,75 ore.",
          "A 50 € l'ora, 38,75 ore sono 1.937,50 €. Scriverle come 38,45 fatturerebbe 1.922,50 € e ti farebbe perdere 15 €.",
        ],
      },
      {
        title: "Le ore in fattura",
        paragraphs: [
          "Usa una riga per ogni tipo di lavoro, con le ore decimali come quantità e la tariffa oraria come prezzo, ad esempio “Lavori in cantiere, 38,75 ore × 50 €”. Aggiungi le date nella descrizione della riga o nelle note, così il cliente può confrontarle con i suoi registri.",
        ],
      },
    ],
    faqs: [
      {
        question: "Come si convertono i minuti in ore decimali?",
        answer:
          "Dividi i minuti per 60. 45 minuti sono 0,75 ore, quindi 1 ora e 45 minuti sono 1,75 ore. In fattura usa il numero decimale: 1,75 × la tua tariffa oraria.",
      },
      {
        question: "Perché non scrivere 1,45 per 1 ora e 45 minuti?",
        answer:
          "Perché 1,45 ore sono 1 ora e 27 minuti. Scrivere l'orario come se fosse un decimale è l'errore più comune sulle ore in fattura, e ogni riga risulta sottofatturata. Il convertitore sotto il calcolatore mostra entrambe le forme.",
      },
      {
        question: "Funziona anche per i turni di notte?",
        answer:
          "Sì. Se l'orario di fine è prima di quello di inizio, il turno viene contato oltre la mezzanotte: dalle 22:00 alle 02:00 sono 4 ore.",
      },
      {
        question: "Le pause vanno in fattura?",
        answer:
          "Di solito fatturi il tempo effettivamente lavorato, quindi le pause non retribuite restano fuori. Se il tuo accordo prevede altro, imposta la pausa a 0.",
      },
      {
        question: "Quello che scrivo viene inviato a un server?",
        answer: "No. Il calcolatore funziona interamente nel tuo browser e non salva nulla.",
      },
    ],
  },

  rate: {
    meta: {
      title: "Calcolo tariffa oraria freelance e partita IVA | Invoicor",
      description:
        "Calcola la tariffa oraria e giornaliera minima da freelance o partita IVA, partendo dal reddito che vuoi, tasse, costi, ferie e ore fatturabili.",
    },
    title: "Calcolo tariffa oraria",
    subtitle:
      "Parti dal reddito netto che vuoi tenere e arriva alla tariffa oraria e giornaliera che ti serve, con tasse, contributi, costi, ferie e ore davvero fatturabili.",
    defaults: { takeHome: "30000", tax: "35", costs: "4000", weeks: "7", hours: "25" },
    ui: {
      label: "Calcolo tariffa oraria",
      earnTitle: "Quanto vuoi guadagnare",
      payTitle: "Quanto ti costa",
      billTitle: "Quanto puoi fatturare",
      periodAria: "Inserisci gli importi",
      perMonth: "Al mese",
      perYear: "All'anno",
      takeHome: "Reddito netto che vuoi",
      takeHomeHint: "Dopo tasse e contributi, come uno stipendio",
      tax: "Tasse e contributi",
      taxHint: "Quota dell'utile che metti da parte",
      costs: "Costi dell'attività",
      costsHint: "Assicurazione, software, attrezzatura, commercialista",
      weeks: "Settimane all'anno senza fatturare",
      weeksHint: "Ferie, malattia, periodi di calma",
      hours: "Ore fatturabili a settimana",
      hoursHint: "Solo lavoro pagato, non amministrazione o spostamenti",
      total: "La tua tariffa oraria minima",
      day: "Tariffa giornaliera (8 ore fatturabili)",
      stepsTitle: "Come ci arriviamo",
      step1:
        "Per avere {takeHome} netti all'anno ti servono {beforeTax} prima delle tasse ({tax}% messo da parte).",
      step2:
        "Aggiungi {costs} di costi: devi fatturare {revenue} all'anno, circa {perMonth} al mese.",
      step3: "Puoi fatturare {weeks} settimane × {hours} ore = {billable} ore all'anno.",
      step4: "{revenue} ÷ {billable} ore = {hourly} l'ora.",
      note: "È un minimo, IVA esclusa: copre reddito, tasse e costi, niente di più. La quota di tasse è una stima; il tuo commercialista può darti la cifra reale.",
      invalid: "Inserisci almeno un'ora fatturabile a settimana e meno di 52 settimane di pausa.",
      cta: "Crea una fattura con questa tariffa",
      invoiceItem: "Prestazione a tariffa oraria",
    },
    sections: [
      {
        title: "1. Dal netto all'utile prima delle tasse",
        paragraphs: [
          "utile prima delle tasse = netto ÷ (1 − quota di tasse). Per tenere 30.000 € mettendo da parte il 35%, ti servono circa 46.154 € di utile prima delle tasse.",
        ],
      },
      {
        title: "2. Aggiungi i costi dell'attività",
        paragraphs: [
          "Assicurazione, software, attrezzatura, auto, commercialista, telefono: tutto quello che paghi per mandare avanti l'attività. Fatturato che ti serve = utile prima delle tasse + costi.",
        ],
      },
      {
        title: "3. Dividi per le ore che puoi fatturare",
        paragraphs: [
          "ore fatturabili all'anno = (52 − settimane di pausa) × ore fatturabili a settimana. Tariffa oraria = fatturato ÷ ore fatturabili. La tariffa giornaliera considera 8 ore fatturabili.",
          "Esempio: 46.154 € + 4.000 € = 50.154 € all'anno, su 45 settimane da 25 ore fatturabili (1.125 ore), fanno circa 44,58 € l'ora, o 357 € al giorno.",
        ],
      },
    ],
    faqs: [
      {
        question: "Come si calcola la tariffa oraria da freelance?",
        answer:
          "Parti da quanto vuoi tenere all'anno, aggiungi le tasse e i contributi che pagherai e i costi dell'attività, poi dividi per le ore che riesci davvero a fatturare in un anno. Il calcolatore fa esattamente questo e ti mostra ogni passaggio.",
      },
      {
        question: "Quante ore fatturabili devo contare?",
        answer:
          "Meno di quelle che lavori. Amministrazione, preventivi, ricerca clienti, spostamenti e formazione non si fatturano. Molti freelance fatturano dalle 20 alle 30 ore su una settimana di 40; parti da un numero che hai davvero raggiunto negli ultimi mesi.",
      },
      {
        question: "Perché le settimane di pausa entrano nel calcolo?",
        answer:
          "Perché in ferie, in malattia o tra un progetto e l'altro non guadagni, ma i costi continuano. Con 7 settimane di pausa, il reddito dell'anno deve arrivare da 45 settimane di lavoro.",
      },
      {
        question: "La percentuale di tasse è precisa?",
        answer:
          "È una quota che metti da parte, non un calcolo delle tasse: quanto paghi davvero dipende dal tuo regime (ordinario o forfettario), dai contributi INPS, dalle deduzioni e dagli scaglioni. Chiedi al tuo commercialista la tua percentuale e inseriscila.",
      },
      {
        question: "È questa la tariffa che devo chiedere?",
        answer:
          "È la tua tariffa minima: quella che copre reddito, tasse e costi. Quanto chiedi dipende anche dalla tua esperienza, dal tuo mercato e dal valore del lavoro. Molti freelance aggiungono un margine.",
      },
    ],
  },
};
