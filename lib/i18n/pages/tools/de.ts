import type { ToolsDict } from "./en";

/**
 * The free tools' text, German (for Germany; also read in Austria and Switzerland). Polite "Sie",
 * like the home page and the generator. Examples use the German standard rate (19 %), euros and
 * German number formatting (1.234,50).
 */
export const de: ToolsDict = {
  common: {
    navLabel: "Kostenlose Tools",
    home: "Startseite",
    eyebrow: "Kostenloses Tool · ohne Anmeldung",
    howEyebrow: "So funktioniert's",
    howTitle: "Die Rechnung dahinter, einfach erklärt",
    faqEyebrow: "FAQ",
    faqTitle: "Fragen zu diesem Tool",
    moreTools: "Weitere kostenlose Tools",
    closing: {
      title: "Jede Woche Rechnungen schreiben?",
      gradient: "Machen Sie es in der App.",
      text: "Gespeicherte Kunden und Artikel, jede Rechnung mit ihrem Status und ein sauberes PDF direkt vom iPhone. {n} Rechnungen kostenlos.",
    },
    currency: "Währung",
  },

  hub: {
    meta: {
      title: "Kostenlose Tools: Rechnung, MwSt-Rechner & mehr | Invoicor",
      description:
        "Kostenlose Tools für Selbstständige: Rechnung online erstellen, Mehrwertsteuer berechnen, Stunden addieren und den Stundensatz als Freiberufler berechnen.",
    },
    crumb: "Kostenlose Tools",
    eyebrow: "Kostenlos · ohne Anmeldung · nichts zu installieren",
    title: "Kostenlose Tools, damit Sie bezahlt werden",
    subtitle:
      "Rechnung erstellen, Mehrwertsteuer richtig berechnen, Stunden zusammenrechnen und einen Stundensatz festlegen, der Ihre Kosten deckt. Alles läuft in Ihrem Browser.",
    closing: {
      title: "Alles davon auf Ihrem iPhone.",
      gradient: "{n} Rechnungen kostenlos.",
      text: "Gespeicherte Kunden und Artikel, Steuer und Summen automatisch berechnet und jede Rechnung mit ihrem Status.",
    },
  },

  tools: {
    generator: {
      name: "Rechnung erstellen",
      short: "Rechnung online ausfüllen und als PDF herunterladen. 21 Vorlagen, ohne Anmeldung.",
    },
    vat: {
      name: "MwSt-Rechner",
      short:
        "Mehrwertsteuer auf einen Preis aufschlagen oder herausrechnen, mit den Regelsätzen von 19 Ländern.",
    },
    hours: {
      name: "Stundenrechner",
      short:
        "Eine Woche Arbeitszeiten addieren und aus 1:45 die 1,75 Stunden machen, die Ihre Rechnung braucht.",
    },
    rate: {
      name: "Stundensatz-Rechner",
      short: "Vom gewünschten Einkommen zurück zum Stunden- und Tagessatz, den Sie brauchen.",
    },
  },

  vat: {
    meta: {
      title: "MwSt-Rechner: Mehrwertsteuer berechnen, kostenlos | Invoicor",
      description:
        "Mehrwertsteuer berechnen: MwSt. auf den Nettobetrag aufschlagen oder aus dem Brutto herausrechnen. 19 % und Regelsätze von 19 Ländern, sofort, kostenlos.",
    },
    title: "MwSt-Rechner",
    subtitle:
      "Mehrwertsteuer berechnen: auf einen Nettopreis aufschlagen oder aus einem Bruttopreis herausrechnen, mit den Regelsätzen von 19 Ländern. Sofort, kostenlos, und nichts verlässt Ihren Browser.",
    defaultCountry: "DE",
    ui: {
      label: "MwSt-Rechner",
      modeAria: "Was ist der Betrag?",
      add: "MwSt. aufschlagen (Betrag ist netto)",
      remove: "MwSt. herausrechnen (Betrag ist brutto)",
      amountNet: "Betrag ohne MwSt.",
      amountGross: "Betrag inkl. MwSt.",
      country: "Land (Regelsatz)",
      custom: "Eigener Steuersatz",
      gst: "GST",
      rate: "MwSt-Satz",
      net: "Netto (ohne MwSt.)",
      vatRow: "MwSt. {rate} %",
      gross: "Brutto (inkl. MwSt.)",
      cta: "Auf eine Rechnung übernehmen",
      invoiceItem: "Produkt oder Dienstleistung",
    },
    sections: [
      {
        title: "MwSt. aufschlagen (netto zu brutto)",
        paragraphs: [
          "MwSt. = Netto × Steuersatz ÷ 100, und Brutto = Netto + MwSt. Ein Auftrag über 478,50 € mit 19 % MwSt. hat 90,92 € MwSt. und einen Gesamtbetrag von 569,42 €. Gerundet wird auf den Cent, kaufmännisch, wie auf Rechnungen üblich.",
        ],
      },
      {
        title: "MwSt. herausrechnen (brutto zu netto)",
        paragraphs: [
          "Netto = Brutto ÷ (1 + Steuersatz ÷ 100). Hier passieren die meisten Fehler: Wer den Steuersatz einfach vom Bruttobetrag abzieht, kommt auf zu wenig. Bei 19 % MwSt. sind 119 € brutto 100 € netto, nicht 96,39 €.",
          "Das brauchen Sie, wenn ein Lieferant einen Preis inklusive MwSt. nennt oder wenn Sie einen Endkundenpreis festlegen und wissen wollen, welcher Teil davon Ihnen bleibt.",
        ],
      },
      {
        title: "Regelsatz und ermäßigter Steuersatz",
        paragraphs: [
          "Die Länderliste nutzt jeweils den Regelsatz. Für Lebensmittel, Bücher, Nahverkehr und manche Leistungen gilt oft ein niedrigerer Satz, in Deutschland 7 %, und manche Umsätze sind steuerfrei. Im Zweifel prüfen Sie die Angaben Ihres Finanzamts oder fragen Ihren Steuerberater und tragen den Steuersatz selbst ein.",
        ],
      },
    ],
    faqs: [
      {
        question: "Wie schlage ich die Mehrwertsteuer auf einen Preis auf?",
        answer:
          "Multiplizieren Sie den Nettopreis mit dem Steuersatz und addieren Sie das Ergebnis. Für 100 € bei 19 % MwSt.: 100 × 0,19 = 19 € MwSt., der Bruttopreis ist also 119 €. Der Rechner erledigt das für Sie und rundet auf den Cent.",
      },
      {
        question: "Wie rechne ich die Mehrwertsteuer aus einem Bruttopreis heraus?",
        answer:
          "Teilen Sie den Bruttopreis durch 1 plus Steuersatz, statt den Steuersatz abzuziehen. Für 119 € inklusive 19 % MwSt.: 119 ÷ 1,19 = 100 € netto, die MwSt. beträgt 19 €. Zieht man 19 % von 119 € ab, kommt man auf 96,39 €, und das ist falsch.",
      },
      {
        question: "Welche Steuersätze enthält der Rechner?",
        answer:
          "Die Regelsätze von 16 europäischen Ländern und die GST von Australien, Kanada und Neuseeland, Stand November 2026. Viele Länder haben für bestimmte Waren und Leistungen ermäßigte Sätze, in Deutschland 7 %; weicht Ihr Satz ab, tragen Sie ihn einfach selbst ein.",
      },
      {
        question: "Sollte meine Rechnung Preise mit oder ohne MwSt. zeigen?",
        answer:
          "Geschäftskunden erwarten meist Nettopreise mit der MwSt. am Ende; Privatkunden erwarten den Preis, den sie tatsächlich zahlen, also inklusive MwSt. In beiden Fällen gehören auf die Rechnung der Nettobetrag, der Steuersatz, der Steuerbetrag und der Gesamtbetrag. In der Invoicor-App und im kostenlosen Generator legen Sie pro Rechnung fest, ob die Preise die Steuer bereits enthalten.",
      },
      {
        question: "Wird etwas, das ich eingebe, an einen Server gesendet?",
        answer: "Nein. Der Rechner läuft vollständig in Ihrem Browser.",
      },
    ],
  },

  hours: {
    meta: {
      title: "Stundenrechner: Arbeitsstunden für die Rechnung | Invoicor",
      description:
        "Kostenloser Stundenrechner: Arbeitszeiten minus Pausen addieren, Stunden und Minuten in Dezimalstunden umrechnen und sehen, was Sie in Rechnung stellen.",
    },
    title: "Stundenrechner",
    subtitle:
      "Addieren Sie eine Woche Beginn- und Endzeiten abzüglich Pausen, erhalten Sie die Summe in Stunden und Minuten und in Dezimalstunden und sehen Sie, was Sie zu Ihrem Stundensatz abrechnen.",
    ui: {
      label: "Stundenrechner",
      intro:
        "Tragen Sie jeden Arbeitstag ein: Beginn, Ende und die unbezahlte Pause. So viele Tage, wie Sie brauchen, eine Woche oder einen ganzen Monat.",
      date: "Datum",
      start: "Beginn",
      end: "Ende",
      break: "Pause (Min.)",
      hours: "Stunden",
      remove: "Entfernen",
      startAria: "{day} Beginn",
      endAria: "{day} Ende",
      breakAria: "{day} Pause in Minuten",
      removeAria: "{day} entfernen",
      addDay: "Tag hinzufügen",
      addWeek: "Woche hinzufügen",
      period: "{days} Tage · {from} – {to}",
      rate: "Ihr Stundensatz (optional)",
      totalTime: "Gearbeitete Stunden",
      decimal: "In Dezimalstunden (für die Rechnung)",
      toInvoice: "In Rechnung zu stellen",
      totalHours: "Stunden gesamt",
      calc: "{hours} Stunden × {rate}",
      convertTitle: "Schnell umrechnen: Stunden und Minuten ⇄ Dezimal",
      convertLabel: "Zeit (1:45) oder Dezimalzahl (1,75)",
      convertHint: "Geben Sie eine Zeit wie 1:45 oder eine Zahl wie 1,75 ein",
      convertResult: "{time} = {hours} Stunden",
      cta: "Rechnung für diese Stunden erstellen",
      invoiceItem: "Leistungen {from} – {to}",
    },
    sections: [
      {
        title: "Arbeitsstunden pro Tag",
        paragraphs: [
          "Stunden = Ende − Beginn − Pause. Von 09:00 bis 17:30 mit 30 Minuten Pause sind 8 Stunden. Eine Schicht, die nach Mitternacht endet, wird über Mitternacht hinweg gezählt.",
        ],
      },
      {
        title: "Von Stunden und Minuten zu Dezimalstunden",
        paragraphs: [
          "Auf Rechnungen werden Stunden mit einem Satz multipliziert, deshalb brauchen Sie Dezimalstunden: Minuten ÷ 60. 15 Minuten = 0,25, 30 = 0,5, 45 = 0,75. Eine Woche mit 38:45 sind 38,75 Stunden.",
          "Bei 80 € pro Stunde ergeben 38,75 Stunden 3.100 €. Wer 38,45 schreibt, rechnet nur 3.076 € ab und verschenkt 24 €.",
        ],
      },
      {
        title: "Stunden auf die Rechnung bringen",
        paragraphs: [
          "Nutzen Sie eine Position pro Art der Arbeit, mit den Dezimalstunden als Menge und Ihrem Stundensatz als Preis, zum Beispiel „Montagearbeiten, 38,75 Std. × 80 €“. Ergänzen Sie die Daten in der Positionsbeschreibung oder in den Notizen, damit Ihr Kunde sie mit seinen eigenen Aufzeichnungen abgleichen kann.",
        ],
      },
    ],
    faqs: [
      {
        question: "Wie rechne ich Minuten in Dezimalstunden um?",
        answer:
          "Teilen Sie die Minuten durch 60. 45 Minuten sind 0,75 Stunden, 1 Stunde 45 Minuten also 1,75 Stunden. Auf der Rechnung verwenden Sie die Dezimalzahl: 1,75 × Ihr Stundensatz.",
      },
      {
        question: "Warum nicht 1,45 für 1 Stunde 45 Minuten schreiben?",
        answer:
          "Weil 1,45 Stunden 1 Stunde und 27 Minuten sind. Die Uhrzeit als Dezimalzahl zu schreiben ist der häufigste Stundenfehler auf Rechnungen, und er rechnet jede Position zu niedrig ab. Der Schnellumrechner unter dem Rechner zeigt beide Schreibweisen.",
      },
      {
        question: "Funktioniert das auch für Nachtschichten?",
        answer:
          "Ja. Liegt das Ende vor dem Beginn, wird die Schicht als über Mitternacht laufend gezählt: 22:00 bis 02:00 sind 4 Stunden.",
      },
      {
        question: "Gehören Pausen auf die Rechnung?",
        answer:
          "In der Regel rechnen Sie die tatsächlich gearbeitete Zeit ab, unbezahlte Pausen bleiben also draußen. Ist mit Ihrem Kunden etwas anderes vereinbart, setzen Sie die Pause auf 0.",
      },
      {
        question: "Wird etwas, das ich eingebe, an einen Server gesendet?",
        answer:
          "Nein. Der Rechner läuft vollständig in Ihrem Browser, und nichts wird gespeichert.",
      },
    ],
  },

  rate: {
    meta: {
      title: "Stundensatz berechnen als Freiberufler | Invoicor",
      description:
        "Stundensatz berechnen als Freiberufler: Mindest-Stunden- und Tagessatz aus Wunscheinkommen, Steuern, Kosten, Urlaub und abrechenbaren Stunden. Kostenlos.",
    },
    title: "Stundensatz-Rechner",
    subtitle:
      "Rechnen Sie vom Einkommen, das Ihnen bleiben soll, zurück zum Stunden- und Tagessatz, den Sie brauchen, mit Steuern, Betriebskosten, freien Wochen und realistischen abrechenbaren Stunden.",
    defaults: { takeHome: "45000", tax: "35", costs: "8000", weeks: "8", hours: "25" },
    ui: {
      label: "Stundensatz-Rechner",
      earnTitle: "Was Sie verdienen möchten",
      payTitle: "Was es Sie kostet",
      billTitle: "Wie viel Sie abrechnen können",
      periodAria: "Beträge eingeben",
      perMonth: "Pro Monat",
      perYear: "Pro Jahr",
      takeHome: "Einkommen, das Ihnen bleiben soll",
      takeHomeHint: "Nach Einkommensteuer, wie ein Gehalt",
      tax: "Steuern und Sozialabgaben",
      taxHint: "Anteil vom Gewinn, den Sie zurücklegen",
      costs: "Betriebskosten",
      costsHint: "Versicherungen, Software, Arbeitsmittel, Steuerberater",
      weeks: "Wochen ohne Abrechnung pro Jahr",
      weeksHint: "Urlaub, Krankheit, ruhige Wochen",
      hours: "Abrechenbare Stunden pro Woche",
      hoursHint: "Nur bezahlte Arbeit, keine Verwaltung oder Fahrtzeit",
      total: "Ihr Mindest-Stundensatz",
      day: "Tagessatz (8 abrechenbare Stunden)",
      stepsTitle: "So kommen wir darauf",
      step1:
        "Damit Ihnen {takeHome} im Jahr bleiben, brauchen Sie {beforeTax} vor Steuern ({tax} % zurückgelegt).",
      step2:
        "Dazu {costs} Betriebskosten: Sie müssen {revenue} im Jahr in Rechnung stellen, etwa {perMonth} im Monat.",
      step3: "Sie können {weeks} Wochen × {hours} Stunden = {billable} Stunden im Jahr abrechnen.",
      step4: "{revenue} ÷ {billable} Stunden = {hourly} pro Stunde.",
      note: "Ein Minimum, ohne MwSt.: Er deckt Ihr Einkommen, Steuern und Kosten, mehr nicht. Der Steueranteil ist eine grobe Schätzung; die echte Zahl kennt Ihr Steuerberater.",
      invalid:
        "Geben Sie mindestens eine abrechenbare Stunde pro Woche und weniger als 52 freie Wochen ein.",
      cta: "Rechnung mit diesem Stundensatz erstellen",
      invoiceItem: "Leistungen nach Stundensatz",
    },
    sections: [
      {
        title: "1. Vom Nettoeinkommen zum Gewinn vor Steuern",
        paragraphs: [
          "Gewinn vor Steuern = Nettoeinkommen ÷ (1 − Steueranteil). Damit Ihnen 45.000 € bleiben, wenn Sie 35 % zurücklegen, brauchen Sie rund 69.231 € Gewinn vor Steuern.",
        ],
      },
      {
        title: "2. Betriebskosten addieren",
        paragraphs: [
          "Versicherungen, Software, Ausstattung, Fahrzeug, Steuerberater, Telefon: alles, was Sie für den Betrieb Ihres Geschäfts bezahlen. Nötiger Umsatz = Gewinn vor Steuern + Kosten.",
        ],
      },
      {
        title: "3. Durch die abrechenbaren Stunden teilen",
        paragraphs: [
          "Abrechenbare Stunden pro Jahr = (52 − freie Wochen) × abrechenbare Stunden pro Woche. Stundensatz = Umsatz ÷ abrechenbare Stunden. Der Tagessatz geht von 8 abrechenbaren Stunden aus.",
          "Beispiel: 69.231 € + 8.000 € = 77.231 € im Jahr, verteilt auf 44 Wochen mit je 25 abrechenbaren Stunden (1.100 Stunden), sind rund 70,21 € pro Stunde oder 562 € pro Tag.",
        ],
      },
    ],
    faqs: [
      {
        question: "Wie berechne ich meinen Stundensatz als Freiberufler?",
        answer:
          "Gehen Sie von dem aus, was Ihnen pro Jahr bleiben soll, rechnen Sie die Steuern und Abgaben darauf und Ihre Betriebskosten hinzu und teilen Sie das durch die Stunden, die Sie im Jahr tatsächlich abrechnen können. Genau das macht der Rechner und zeigt jeden Schritt.",
      },
      {
        question: "Wie viele abrechenbare Stunden sollte ich ansetzen?",
        answer:
          "Weniger, als Sie arbeiten. Verwaltung, Angebote, Akquise, Fahrten und Weiterbildung sind nicht abrechenbar. Viele Freiberufler rechnen in einer 40-Stunden-Woche 20 bis 30 Stunden ab; nehmen Sie eine Zahl, die Sie in den letzten Monaten wirklich erreicht haben.",
      },
      {
        question: "Warum zählen freie Wochen mit?",
        answer:
          "Weil Sie im Urlaub, bei Krankheit oder zwischen Projekten nichts verdienen, Ihre Kosten aber weiterlaufen. Bei 8 freien Wochen muss Ihr Jahreseinkommen aus 44 Arbeitswochen kommen.",
      },
      {
        question: "Ist der Steuersatz genau?",
        answer:
          "Es ist ein grober Anteil, den Sie zurücklegen, keine Steuerberechnung: Die echte Einkommensteuer hängt von Ihrer Situation, Abzügen und dem Steuertarif ab, dazu kommen Kranken- und Pflegeversicherung und Altersvorsorge. Fragen Sie Ihren Steuerberater nach Ihrer eigenen Zahl und tragen Sie sie ein.",
      },
      {
        question: "Ist das der Stundensatz, den ich verlangen sollte?",
        answer:
          "Es ist Ihr Minimum: der Satz, der Ihr Einkommen, Steuern und Kosten deckt. Was Sie verlangen, hängt auch von Ihrer Erfahrung, Ihrem Markt und dem Wert der Arbeit ab. Viele Freiberufler schlagen noch eine Marge darauf.",
      },
    ],
  },
};
