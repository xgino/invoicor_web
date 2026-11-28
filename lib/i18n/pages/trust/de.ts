import type { TrustDict } from "./en";

/** About and Contact (P10, P11), German (Germany). Polite "Sie", like help/de.ts. App labels stay English. */
export const de: TrustDict = {
  home: "Startseite",
  country: "den Niederlanden",
  about: {
    meta: {
      title: "Über Invoicor: die ehrliche Rechnungs-App | Invoicor",
      description:
        "Wer Invoicor macht und wofür es steht: kostenloser Start, keine Gebühren auf Ihr Geld, echte Menschen lesen jede Nachricht, Daten in Deutschland.",
    },
    crumb: "Über uns",
    eyebrow: "Über Invoicor",
    title: "Die ehrliche Rechnungs-App",
    subtitle:
      "Mit Invoicor senden Selbstständige und kleine Unternehmen in Sekunden eine professionelle Rechnung, in der Sprache und Währung ihres Kunden, ohne versteckte Bezahlschranke und ohne Gebühren auf ihr Geld.",
    whyEyebrow: "Warum es Invoicor gibt",
    whyTitle: "Rechnungen sollten nicht Ihren Feierabend kosten",
    whyText:
      "Die meisten Menschen, die Rechnungen schreiben, sind Installateure, Reinigungskräfte, Designer und Berater, keine Buchhalter. Der Auftrag ist erledigt, der Kunde will die Rechnung, und zur Wahl stehen ein leeres Dokument oder eine Buchhaltungssoftware für eine ganze Finanzabteilung. Invoicor liegt dazwischen: die Angaben, die die Buchhaltung Ihres Kunden erwartet, ausgefüllt mit dem, was Sie beim letzten Mal gespeichert haben, und ein sauberes PDF, das Sie senden, bevor Sie gehen.",
    whyText2:
      "In Bewertungen von Rechnungs-Apps tauchen immer wieder dieselben Beschwerden auf: ein „kostenloser“ Tarif, der sich als Testphase entpuppt, kein Mensch als Ansprechpartner und eine Zahlungsabwicklung, die Ihr Geld zurückhält. Invoicor ist so gebaut, dass es alle drei vermeidet.",
    principlesEyebrow: "Wofür wir stehen",
    principlesTitle: "Vier Versprechen, die wir halten können",
    principles: [
      {
        title: "Ehrlich kostenlos zum Start",
        text: "{n} echte Rechnungen in der App, ohne Wasserzeichen und ohne Abo. Sie sehen, was Sie bekommen, bevor Sie etwas bezahlen.",
      },
      {
        title: "Wir fassen Ihr Geld nie an",
        text: "Invoicor ist kein Zahlungsdienstleister. Ihr Kunde bezahlt Sie direkt, per Überweisung auf Ihr Konto oder über einen Zahlungslink, den Sie selbst hinzufügen, und wir behalten von keiner Zahlung etwas ein.",
      },
      {
        title: "Echte Menschen lesen jede Nachricht",
        text: "Feedback aus der App und E-Mails landen beim Team, nicht bei einem Bot. Eine Antwort kann ein paar Tage dauern, und das sagen wir lieber offen, als eine Stunde zu versprechen, die wir nicht halten können.",
      },
      {
        title: "Ihre Daten bleiben in der EU",
        text: "Konten und Rechnungen werden auf Servern in Deutschland gespeichert und nach der DSGVO verarbeitet. Löschen Sie Ihr Konto, entfernen wir Ihre Daten innerhalb von 30 Tagen von unseren Servern, außer dem, was wir gesetzlich aufbewahren müssen.",
      },
    ],
    whatEyebrow: "Was es kann und was nicht",
    whatTitle: "Damit Sie es vor dem Download wissen",
    doesTitle: "Invoicor kann",
    does: [
      "In Sekunden eine professionelle Rechnung auf Ihrem iPhone erstellen und das PDF per E-Mail, iMessage oder WhatsApp teilen",
      "31 Rechnungsvorlagen und Ihr eigenes Logo",
      "Rechnungen in 11 Sprachen und 38 Währungen, für Kunden im Ausland",
      "Gespeicherte Kunden und Artikel, und mit einem Tippen die Rechnung vom letzten Monat duplizieren",
      "Ein kostenloser Rechnungsgenerator auf dieser Website, ohne Konto",
    ],
    doesntTitle: "Invoicor kann (noch) nicht",
    doesnt: [
      "Angebote oder Kostenvoranschläge",
      "Wiederkehrende oder geplante Rechnungen und Zahlungserinnerungen an Ihre Kunden",
      "Zahlungsabwicklung (Sie fügen Ihren eigenen Zahlungslink hinzu)",
      "Offline arbeiten: Die App braucht eine Internetverbindung",
      "Android (kommt bald: siehe die Android-Seite)",
    ],
    screensNote:
      "Die Bildschirme der App sind auf Englisch; die Rechnungen gibt es in 11 Sprachen.",
    whoEyebrow: "Wer dahintersteht",
    whoTitle: "Betrieben aus {country}",
    whoText:
      "Invoicor ist ein Unternehmen, das aus {country} betrieben wird. Hier sind seine Angaben; die Nutzungsbedingungen und die Datenschutzerklärung regeln, was gilt, wenn Sie die App nutzen.",
    contactButton: "Kontakt",
    helpButton: "Hilfe und FAQ",
    ctaTitle: "Senden Sie Ihre nächste Rechnung",
    ctaGradient: "in Sekunden.",
    ctaText: "{n} kostenlose Rechnungen, ohne Wasserzeichen, ohne Abo.",
  },
  contact: {
    meta: {
      title: "Kontakt: Feedback, Fragen, Fehler | Invoicor",
      description:
        "Erreichen Sie das Invoicor-Team in der App (Settings, Send Feedback) oder per E-Mail. Ein Mensch liest jede Nachricht; eine Antwort kann Tage dauern.",
    },
    crumb: "Kontakt",
    eyebrow: "Kontakt",
    title: "Schreiben Sie den Menschen hinter Invoicor",
    subtitle:
      "Fragen, Fehler oder Ideen: Jede Nachricht liest ein Mensch aus dem Team. Eine Antwort kann ein paar Tage dauern; für eine schnelle Antwort ist die Hilfe oft schneller.",
    waysHidden: "So erreichen Sie uns",
    app: {
      title: "In der App",
      before: "Öffnen Sie",
      path: "Settings → Support → Send Feedback",
      middle:
        "und wählen Sie einen Fehler, einen Funktionswunsch oder eine Frage. Ihr iPhone-Modell und die App-Version werden automatisch mitgeschickt, und unter",
      submissions: "My Submissions",
      after: "sehen Sie, wo jede Nachricht steht: neu, gelesen, in Bearbeitung oder erledigt.",
    },
    email: {
      title: "Per E-Mail",
      before: "Schreiben Sie an",
      after:
        "bei jedem Anliegen: wenn Sie sich nicht anmelden können, bei Datenschutzanfragen, Partnerschaften oder Presseanfragen.",
    },
    help: {
      title: "Hilfe und FAQ",
      before: "Die meisten Fragen zu Vorlagen, Währungen, Steuern und Tarifen beantwortet die",
      link: "Hilfe",
      after: ", jederzeit.",
    },
    noPhone:
      "Es gibt keine Telefonhotline und keinen Live-Chat: Schriftlich können wir uns Ihr Konto ansehen und richtig antworten.",
    topicsEyebrow: "Bevor Sie schreiben",
    topicsTitle: "Gleich beim ersten Mal die richtige Antwort",
    topics: [
      {
        title: "Ein Fehler oder ein fehlerhaftes PDF",
        text: "Schreiben Sie, worauf Sie getippt haben, was Sie erwartet haben und was passiert ist, und die Rechnungsnummer, wenn es um eine bestimmte Rechnung geht. Ein Screenshot hilft (hängen Sie ihn an eine E-Mail an).",
      },
      {
        title: "Abos, Erstattungen und Kündigung",
        text: "Tarife werden über Apple gekauft, daher wickelt Apple Zahlungen und Erstattungen ab. Kündigen können Sie jederzeit auf Ihrem iPhone unter Einstellungen → [Ihr Name] → Abonnements. Wenn etwas nicht stimmt, helfen wir gern.",
      },
      {
        title: "Ihre Daten und Datenschutz",
        text: "Eine Kopie Ihrer Daten oder deren Löschung können Sie per E-Mail anfordern; Ihr Konto können Sie auch in der App löschen. Die Datenschutzerklärung erläutert Ihre Rechte nach der DSGVO.",
      },
      {
        title: "Affiliates und Partner",
        text: "Das Affiliate-Programm hat eine eigene Seite, die erklärt, wie es funktioniert und wie Sie sich anmelden. Für andere Partnerschaften schreiben Sie uns eine E-Mail.",
      },
    ],
    related: "Siehe auch:",
    relatedLinks: {
      privacy: "Datenschutzerklärung (Englisch)",
      terms: "Nutzungsbedingungen (Englisch)",
      affiliate: "Affiliate-Programm (Englisch)",
      about: "Über Invoicor",
    },
    companyEyebrow: "Unternehmensangaben",
    companyTitle: "An wen Sie schreiben",
    ctaTitle: "Noch nicht ausprobiert?",
    ctaGradient: "Kostenlos starten.",
    ctaText: "{n} kostenlose Rechnungen, ohne Wasserzeichen, ohne Abo.",
  },
  company: {
    business: "Unternehmen",
    basedIn: "Sitz",
    kvk: "KvK-Nummer (niederländische Handelskammer)",
    vat: "USt-IdNr.",
    data: "Daten",
    dataValue: "Server in Deutschland (EU), verarbeitet nach der DSGVO",
    email: "E-Mail",
    countryName: "Niederlande",
  },
};
