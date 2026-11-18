import type { HelpDict } from "./en";

/**
 * Help center, Italian (Italy). Informal "tu", as on the Italian home page. The app's screens are
 * in English, so app labels stay in English in quotes; iPhone settings paths as Italian iOS shows them.
 */
export const it: HelpDict = {
  meta: {
    title: "Centro assistenza e aiuto | Invoicor",
    description:
      "Risposte alle domande su Invoicor: creare fatture, modelli, valute, IVA, invio e stati, abbonamenti e i tuoi dati.",
  },
  home: "Home",
  crumb: "Aiuto",
  toc: "In questa pagina",
  eyebrow: "Assistenza",
  title: "Centro assistenza",
  subtitle:
    "Tutto quello che c'è da sapere su Invoicor. Non trovi la risposta? Ogni messaggio lo leggono persone vere.",
  contactTitle: "Hai ancora una domanda?",
  contactText:
    "Scrivici dall'app oppure via email. Ogni messaggio lo leggono persone vere; la risposta può richiedere qualche giorno.",
  sections: [
    {
      id: "getting-started",
      title: "Per iniziare",
      items: [
        {
          q: "Come creo la mia prima fattura?",
          a: "Apri Invoicor e tocca il pulsante + nella scheda “Invoices” (Fatture). Scegli un cliente (o creane uno nuovo), aggiungi le voci e tocca “Preview Invoice” (Anteprima fattura). La fattura viene creata in PDF e puoi condividerla via email, WhatsApp, AirDrop o qualsiasi altra app.",
        },
        {
          q: "Devo prima configurare un profilo aziendale?",
          a: "Sì. Prima della tua prima fattura, Invoicor ti chiede di inserire i dati della tua attività (ragione sociale, indirizzo, logo, coordinate bancarie). Ci vuole un minuto e i dati vengono riutilizzati su ogni fattura che crei.",
        },
        {
          q: "Invoicor è gratis?",
          a: "Sì. Puoi creare fino a 3 fatture gratis, senza limiti di tempo e senza abbonamento. Le fatture gratuite includono i modelli gratuiti, l'esportazione in PDF, la gestione dei clienti e il monitoraggio degli stati. Nell'app non c'è nessuna filigrana, con nessun piano.",
        },
        {
          q: "Su quali dispositivi funziona?",
          a: "Invoicor funziona su iPhone e iPad con iOS o iPadOS 17.6 o successivi. Una versione web non è ancora disponibile; ai tuoi dati accedi dall'app. Per ora le schermate dell'app sono in inglese, ma le fatture possono essere in italiano e in altre 10 lingue.",
        },
      ],
    },
    {
      id: "creating-invoices",
      title: "Creare fatture",
      items: [
        {
          q: "Posso aggiungere il logo della mia attività alle fatture?",
          a: "Sì. Vai al tuo profilo aziendale e tocca “Upload Logo” (Carica logo). Invoicor supporta i formati PNG, JPG, SVG e WebP. Il tuo logo compare su ogni fattura che invii. La trasparenza dei PNG viene mantenuta.",
        },
        {
          q: "Come funzionano i modelli?",
          a: "Invoicor include 31 modelli di fattura dal design professionale: 21 sono gratuiti, 8 arrivano con Starter e 2 con Pro. I piani superiori includono tutti i modelli dei piani inferiori. Puoi impostare un modello predefinito nel profilo aziendale o sceglierne uno diverso per ogni fattura.",
        },
        {
          q: "Posso fatturare in valute diverse?",
          a: "Sì. Invoicor supporta 38 valute, tra cui USD, EUR, GBP, JPY, CHF, CAD, AUD, INR e BRL. Imposta una valuta predefinita nel profilo aziendale o cambiala per ogni fattura.",
        },
        {
          q: "Posso inviare fatture nella lingua del mio cliente?",
          a: "Sì. Invoicor supporta 11 lingue per le fatture. Tutte le diciture della fattura (Descrizione, Quantità, Totale, ecc.) vengono tradotte automaticamente. Imposta una lingua predefinita nel profilo aziendale o sceglila per ogni fattura.",
        },
        {
          q: "Come funziona il calcolo dell'IVA?",
          a: "Imposta l'aliquota nel profilo aziendale (ad esempio 22% per l'IVA italiana). Invoicor calcola l'imposta automaticamente su ogni fattura. Puoi scegliere tra prezzi IVA inclusa e IVA esclusa, e puoi anche modificare l'aliquota per la singola fattura.",
        },
        {
          q: "Posso aggiungere sconti a una fattura?",
          a: "Sì. Puoi applicare a qualsiasi fattura uno sconto in percentuale o di importo fisso. Lo sconto compare come riga a parte nella sezione dei totali.",
        },
        {
          q: "Quante voci posso inserire al massimo in una fattura?",
          a: "Dipende dal piano: fino a 10 voci per fattura con Free, 25 con Starter e 50 con Pro.",
        },
      ],
    },
    {
      id: "sending-tracking",
      title: "Invio e stati",
      items: [
        {
          q: "Come invio una fattura?",
          a: "Dalla schermata di dettaglio della fattura, tocca “Share” (Condividi). La fattura viene creata in PDF e puoi inviarla via email, WhatsApp, AirDrop, Messaggi o qualsiasi altra app di condivisione sul tuo iPhone.",
        },
        {
          q: "Cosa significano gli stati delle fatture?",
          a: "Draft (Bozza): salvata ma non ancora inviata, puoi ancora modificarla. Sent (Inviata): condivisa con il cliente, non più modificabile. Paid (Pagata): il cliente ha pagato, l'hai segnata tu. Overdue (Scaduta): oltre la scadenza, ancora da pagare. Cancelled (Annullata): annullata, non più attiva.",
          list: [
            ["Draft (Bozza)", "salvata ma non ancora inviata, puoi ancora modificarla."],
            ["Sent (Inviata)", "condivisa con il cliente, non più modificabile."],
            ["Paid (Pagata)", "il cliente ha pagato, l'hai segnata tu."],
            ["Overdue (Scaduta)", "oltre la scadenza, ancora da pagare."],
            ["Cancelled (Annullata)", "annullata, non più attiva."],
          ] as Array<[string, string]>,
        },
        {
          q: "Posso modificare una fattura dopo averla inviata?",
          a: "No. Quando una fattura è segnata come “Sent” (Inviata), viene bloccata per conservarne il valore di documento. Se devi fare modifiche, duplica la fattura, modifica la copia e invia la versione aggiornata.",
        },
        {
          q: "Posso duplicare una fattura?",
          a: "Sì. Nella schermata di dettaglio della fattura, tocca il pulsante “Copy” (Copia). Si crea una nuova bozza con lo stesso cliente, le stesse voci e le stesse impostazioni. Comodo per i lavori che si ripetono.",
        },
      ],
    },
    {
      id: "account-billing",
      title: "Account e pagamenti",
      items: [
        {
          q: "Come funzionano gli abbonamenti?",
          a: "Invoicor offre i piani Starter e Pro, con pagamento mensile o annuale tramite l'App Store di Apple. Tutti i pagamenti sono gestiti da Apple: non vediamo né conserviamo mai i tuoi dati di pagamento. Puoi gestire o disdire l'abbonamento in Impostazioni → [il tuo nome] → Abbonamenti sul tuo iPhone.",
        },
        {
          q: "Serve una carta per la prova gratuita?",
          a: "Non per il piano gratuito: le tue prime 3 fatture non richiedono abbonamento né pagamento. Le prove gratuite di Starter e Pro passano da Apple: le avvii con il tuo ID Apple, che richiede un metodo di pagamento. Se disdici prima della fine della prova non paghi nulla. Invoicor non vede mai la tua carta.",
        },
        {
          q: "Posso disdire l'abbonamento?",
          a: "Sì, in qualsiasi momento. Sul tuo iPhone vai in Impostazioni → [il tuo nome] → Abbonamenti → Invoicor → Annulla abbonamento. Il piano resta attivo fino alla fine del periodo di fatturazione in corso e non ti verrà addebitato altro.",
        },
        {
          q: "Cosa succede se torno al piano Free?",
          a: "Le fatture, i clienti e i dati che hai restano intatti, e puoi ancora vedere, condividere e seguire ogni fattura che hai creato. Il piano gratuito include 3 fatture in totale: se ne hai già create 3 o più, per crearne di nuove ti servirà di nuovo un piano.",
        },
        {
          q: "Come elimino il mio account?",
          a: "Vai in Settings (Impostazioni) nell'app e tocca “Delete Account” (Elimina account). In questo modo il tuo account e tutti i dati collegati vengono eliminati definitivamente dai nostri server. L'operazione non si può annullare.",
        },
      ],
    },
    {
      id: "multiple-businesses",
      title: "Più attività",
      items: [
        {
          q: "Posso gestire più attività?",
          a: "Sì. Con il piano Pro puoi creare fino a 3 profili aziendali separati, ciascuno con ragione sociale, logo, indirizzo e coordinate bancarie propri. Passi dall'uno all'altro quando crei una fattura.",
        },
        {
          q: "Come imposto un profilo aziendale predefinito?",
          a: "Nella scheda “Library” (Libreria), vai alla sezione “Business” (Attività). Tieni premuto su un profilo e seleziona “Set as Default” (Imposta come predefinito). Il profilo predefinito viene preselezionato quando crei una nuova fattura.",
        },
      ],
    },
    {
      id: "data-privacy",
      title: "Dati e privacy",
      items: [
        {
          q: "Dove sono conservati i miei dati?",
          a: "I dati del tuo account e delle tue fatture sono conservati su server in Germania, nell'Unione europea, nel rispetto del GDPR. Le statistiche del sito invoicor.com (Google Analytics e PostHog, servizi statunitensi) si attivano solo se accetti i cookie.",
        },
        {
          q: "Come proteggete i miei dati?",
          a: "Con misure di protezione standard: ogni connessione tra l'app e i nostri server è cifrata (HTTPS), le password sono conservate in forma hash, l'accesso usa token sicuri (oppure Accedi con Apple o Google) e l'accesso ai nostri server in Germania è limitato. Nessun servizio online può essere sicuro al 100%, ma lavoriamo per evitare che qualcuno acceda ai tuoi dati senza autorizzazione.",
        },
        {
          q: "Vendete i miei dati?",
          a: "No. Non vendiamo né affittiamo mai i tuoi dati o quelli dei tuoi clienti. Condividiamo solo quello che serve con i servizi che fanno funzionare Invoicor (il nostro provider di hosting in Germania, Apple o Google se accedi con loro, e il nostro servizio per gli abbonamenti), tutti elencati nella nostra Informativa sulla privacy.",
          link: { text: "Informativa sulla privacy", page: "privacy" as const },
        },
        {
          q: "Posso esportare i miei dati?",
          a: "Puoi esportare in PDF le singole fatture in qualsiasi momento. Per un'esportazione completa dei dati, scrivici a {email} e ti forniremo i tuoi dati in un formato leggibile da una macchina, come previsto dal GDPR.",
        },
      ],
    },
    {
      id: "safety",
      title: "Sicurezza e truffe",
      items: [
        {
          q: "Ho ricevuto una fattura fatta con Invoicor. È autentica?",
          a: "Invoicor è lo strumento che il mittente ha usato per creare la fattura; non scriviamo le fatture, non le inviamo per conto di nessuno e non ne verifichiamo il contenuto. Trattala come qualsiasi fattura: prima di pagare, controlla di conoscere il mittente, di aver ordinato il lavoro o la merce e che l'importo sia corretto.",
        },
        {
          q: "Come pago una fattura in sicurezza?",
          a: "Controlla tre cose: il mittente (un'attività che conosci), l'importo (corrisponde a quanto concordato) e i dati di pagamento (corrispondono a quelli che quell'attività ha usato in passato). Se qualcosa non ti torna, contatta il mittente tramite un numero di telefono o un indirizzo che conosci già, non con i dati scritti sulla fattura.",
        },
        {
          q: "Le coordinate bancarie o il link di pagamento sulla fattura sono cambiati. Cosa faccio?",
          a: "Non pagare ancora. Il cambio dei dati di pagamento è la truffa sulle fatture più diffusa. Chiama il mittente a un numero che hai già e conferma con lui i nuovi dati prima di pagare.",
        },
        {
          q: "Invoicor gestisce o protegge il pagamento?",
          a: "No. Invoicor non è un servizio né un circuito di pagamento: i pagamenti vanno direttamente dal cliente al mittente, tramite il link di pagamento o le coordinate bancarie del mittente stesso. Invoicor non può trattenere, stornare o rimborsare un pagamento. I nostri Termini di servizio lo spiegano nella sezione 5.",
          link: { text: "Termini di servizio", page: "terms" as const },
        },
        {
          q: "Come segnalo una fattura sospetta fatta con Invoicor?",
          a: "Scrivi a {email} allegando la fattura e spiegando come l'hai ricevuta. Possiamo sospendere gli account che inviano fatture fraudolente. Se hai già pagato un truffatore, contatta subito anche la tua banca e le forze dell'ordine.",
        },
      ],
    },
  ],
};
