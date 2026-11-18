/**
 * The free invoice generator's text, German (for Germany; also read in Austria and Switzerland).
 * Same shape as `en.ts`. The checklist follows § 14 Abs. 4 UStG, and the E-Rechnung note matches
 * the statement on the German home page (`lib/i18n/pages/home/de.ts`).
 */
import type { GeneratorDict } from "./en";

export const de: GeneratorDict = {
  ui: {
    viewAria: "Ansicht des Generators",
    tabForm: "Formular",
    tabPreview: "Vorschau",
    previewAria: "Vorschau der Rechnung",
    offerTitle: "Beispiel „{niche}“ laden?",
    offerText: "Ersetzt Ihre aktuellen Positionen und Notizen; Ihre Firma und Ihr Kunde bleiben.",
    offerLoad: "Beispiel laden",
    offerKeep: "Meine behalten",
    savedBlocked: "Nicht gespeichert: Dieser Browser blockiert die Speicherung",
    savedOk: "Nur in diesem Browser gespeichert. Niemand sonst kann es sehen.",
    newInvoice: "Neue Rechnung",
    newInvoiceTitle: "Behält Ihre Firmendaten, leert Kunde und Positionen",
    clearAll: "Alles löschen",
    clearConfirm:
      "Alles löschen? Damit werden Ihre Firmendaten, der Kunde und alle Positionen aus diesem Browser entfernt.",
    templateLabel: "Vorlage",
    browseTemplates: "Vorlagen ansehen",
    subtotal: "Zwischensumme",
    discount: "Rabatt",
    tax: "MwSt.",
    taxIncluded: " (enthalten)",
    total: "Gesamtbetrag",

    setupTitle: "Rechnung einrichten",
    setupHint: "Design, Sprache und Währung",
    change: "Ändern",
    invoiceLanguage: "Rechnungssprache",
    currency: "Währung",
    dateFormat: "Datumsformat",

    detailsTitle: "Rechnungsdaten",
    detailsHint: "Nummer, Datum und wann Sie Ihr Geld erwarten",
    invoiceNumber: "Rechnungsnummer",
    invoiceNumberHint: "Fortlaufend und einmalig, z. B. RE-0001, RE-0002",
    issueDate: "Rechnungsdatum",
    dueDate: "Fällig am",
    paymentTerms: "Zahlungsbedingungen",
    paymentTermsPlaceholder: "z. B. Zahlbar innerhalb von 14 Tagen ohne Abzug",

    businessTitle: "Ihre Firma",
    businessHint: "Von wem die Rechnung kommt",
    businessName: "Firmenname",
    email: "E-Mail",
    phone: "Telefon",
    address: "Straße und Hausnummer",
    postalCode: "PLZ",
    city: "Ort",
    country: "Land",
    taxId: "USt-IdNr. / Steuernummer",
    taxIdPlaceholder: "z. B. DE123456789",
    registration: "Registernummer",
    registrationPlaceholder: "z. B. HRB 12345, Amtsgericht München",
    bankDetails: "Bankverbindung",
    bankName: "Bank",
    iban: "IBAN / Kontonummer",
    swift: "BIC / SWIFT",

    clientTitle: "Rechnung an",
    clientHint: "Wem Sie die Rechnung stellen",
    clientName: "Kunde oder Firma",
    contactPerson: "Ansprechpartner",
    clientTaxHint: "Bei Geschäftskunden in der EU erforderlich",

    itemsTitle: "Positionen",
    itemsHint: "Was Sie berechnen, bis zu {max} Zeilen",
    addLine: "Zeile hinzufügen",
    itemsLimit:
      "Das ist die kostenlose Grenze. In der Invoicor-App können Sie mehr Zeilen anlegen.",
    line: "Zeile {line}",
    moveUp: "Zeile {line} nach oben",
    moveDown: "Zeile {line} nach unten",
    removeLine: "Zeile {line} entfernen",
    item: "Leistung",
    itemPlaceholder: "z. B. Austausch Heizkörperventil",
    qty: "Menge",
    price: "Preis",
    details: "Details (optional)",
    detailsPlaceholder: "Erscheint in einer eigenen Zeile unter der Leistung",
    amount: "Betrag",

    taxTitle: "Steuer & Rabatt",
    taxHint: "Ein Steuersatz für die ganze Rechnung",
    taxRate: "Steuersatz",
    taxInclusive: "Preise enthalten bereits die MwSt.",
    discountNone: "Kein Rabatt",
    discountPercent: "Prozent (%)",
    discountFixed: "Fester Betrag",
    discountPct: "Rabatt in %",
    discountAmount: "Rabattbetrag",

    notesTitle: "Notizen",
    notesHint: "Ein Dankeschön, Leistungszeitraum, Steuerhinweise oder Sonstiges",

    payTitle: "Link zur Online-Zahlung",
    payHint: "Optional. Ihr Kunde zahlt direkt an Sie, nie über uns",
    payLabel: "Ihr Zahlungslink",
    payFieldHint:
      "Ihr eigener PayPal-, Stripe- oder anderer Link. Er erscheint als Schaltfläche „Online bezahlen“.",
    payError: "Der Link muss mit https:// beginnen",

    logo: "Logo (optional)",
    logoAlt: "Ihr Logo",
    logoRemove: "Entfernen",
    logoUpload: "Logo hochladen",
    logoHint: "PNG oder JPG, bis 500 KB. Ersetzt den Namen oben auf der Rechnung.",
    logoErrType: "Bitte ein PNG- oder JPG-Bild verwenden.",
    logoErrSize: "Das Logo darf höchstens 500 KB groß sein.",
    logoErrRead: "Dieses Bild konnte nicht gelesen werden.",

    creating: "Ihr PDF wird erstellt…",
    download: "PDF herunterladen",
    downloadNote: "Kostenlos. Unten im PDF steht klein „Created with invoicor.com“.",
    downloadNeedsItem:
      "Fügen Sie mindestens eine Zeile mit Beschreibung hinzu, um herunterzuladen.",
    pdfError:
      "Dieser Browser konnte das PDF nicht erstellen. Bitte versuchen Sie es erneut oder nutzen Sie einen anderen Browser. Ihr Formular ist gespeichert.",
    ready: "Fertig",
    doneTitle: "Ihre Rechnung ist heruntergeladen",
    doneText: "Sie finden {file} in Ihrem Download-Ordner.",
    downloadAgain: "Erneut herunterladen",
    createAnother: "Weitere Rechnung erstellen",
    appTitle: "Beim nächsten Mal direkt vom Smartphone senden.",
    appText:
      "Die Invoicor-App speichert diesen Kunden und Ihre Leistungen, behält jede Rechnung mit ihrem Status und hat kein Wasserzeichen. {n} Rechnungen kostenlos.",
    fileName: "rechnung",

    previewFrame: "Vorschau der Rechnung",
    previewError:
      "Die Vorschau konnte nicht geladen werden. Prüfen Sie Ihre Verbindung; Ihr Formular ist gespeichert.",
    overflowTitle: "Das passt nicht mehr auf eine Seite.",
    overflowText:
      "Der untere Teil der Rechnung (Notizen, Bankverbindung) würde abgeschnitten. Kürzen Sie die Details oder verwenden Sie weniger Zeilen.",

    pickerTitle: "Vorlage wählen",
    pickerCount: "{free} kostenlos hier · alle {all} in der App",
    close: "Schließen",
    free: "Kostenlos",
    inApp: "In der App",
    lockedAria: "{name}: in der Invoicor-App verfügbar",
    thumbTitle: "Vorlage {name}",
  },

  defaults: {
    invoiceNumber: "RE-0001",
    paymentTerms: "Zahlbar innerhalb von 14 Tagen ohne Abzug",
    notes: "Vielen Dank für Ihren Auftrag und die gute Zusammenarbeit.",
  },

  page: {
    meta: {
      title: "Rechnung erstellen kostenlos: Vorlage & PDF | Invoicor",
      description:
        "Rechnung online kostenlos schreiben: Rechnungsvorlage wählen, Positionen eintragen, als PDF herunterladen. Ohne Anmeldung, 21 Vorlagen.",
    },
    home: "Startseite",
    crumb: "Rechnung erstellen",
    eyebrow: "Kostenlos · ohne Anmeldung",
    h1: "Rechnung kostenlos online erstellen",
    lead: "Tragen Sie Ihre Daten ein, wählen Sie eine Vorlage und laden Sie eine professionelle PDF-Rechnung herunter. Kostenlos, ohne Konto, in 38 Währungen und 11 Sprachen.",

    howEyebrow: "So funktioniert es",
    howTitle: "Rechnung schreiben in 3 Schritten",
    howDescription: "Eine professionelle Rechnung online erstellen und als PDF herunterladen.",
    steps: [
      {
        name: "Ihre Firma und Ihren Kunden eintragen",
        text: "Geben Sie Firmenname, Anschrift und Steuernummer oder USt-IdNr. ein, dann den Empfänger der Rechnung. Fügen Sie Ihr Logo hinzu, wenn Sie eines haben.",
      },
      {
        name: "Positionen, Steuer und Rabatt hinzufügen",
        text: "Listen Sie auf, was Sie geleistet oder verkauft haben, mit Menge und Preis. Legen Sie einen Steuersatz und optional einen Rabatt fest; die Summen rechnen sich von selbst.",
      },
      {
        name: "Vorlage wählen und PDF herunterladen",
        text: "Wählen Sie eine von 21 kostenlosen Vorlagen, prüfen Sie die Live-Vorschau und laden Sie Ihre Rechnung als PDF herunter.",
      },
    ],

    mustEyebrow: "Checkliste",
    mustTitle: "Pflichtangaben einer Rechnung nach § 14 UStG",
    mustIntro:
      "In Deutschland legt § 14 Abs. 4 UStG fest, was auf eine Rechnung gehört. Für fast alles hat der Generator ein Feld; das Leistungsdatum und Hinweise zur Steuerbefreiung tragen Sie in den Details oder in den Notizen ein.",
    mustHave: [
      "Vollständiger Name und Anschrift von Ihnen als Rechnungssteller",
      "Vollständiger Name und Anschrift Ihres Kunden",
      "Ihre Steuernummer oder Ihre Umsatzsteuer-Identifikationsnummer (USt-IdNr.)",
      "Das Ausstellungsdatum der Rechnung",
      "Eine fortlaufende, einmalig vergebene Rechnungsnummer",
      "Menge und genaue Bezeichnung der gelieferten Waren oder Art und Umfang der Leistung",
      "Den Zeitpunkt der Lieferung oder Leistung (Leistungsdatum oder -zeitraum)",
      "Das Entgelt, aufgeschlüsselt nach Steuersätzen, und jede im Voraus vereinbarte Minderung wie Rabatte",
      "Den Steuersatz und den Steuerbetrag oder einen Hinweis auf die Steuerbefreiung",
    ],
    mustNote:
      "Kleinunternehmer nach § 19 UStG weisen keine Umsatzsteuer aus: Steuersatz auf 0 % setzen und in die Notizen schreiben, z. B. „Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.“ Für Kleinbetragsrechnungen bis 250 € brutto reichen weniger Angaben (Name und Anschrift des Ausstellers, Datum, Menge und Art der Leistung, Bruttobetrag und Steuersatz). Zur E-Rechnung: Zwischen Unternehmen in Deutschland müssen Sie seit 2025 E-Rechnungen empfangen können, das Ausstellen wird schrittweise bis 2028 Pflicht. Dieser Generator erstellt PDF-Rechnungen, keine E-Rechnungen im Format XRechnung oder ZUGFeRD. Für Privatkunden ist das ohne Einschränkung möglich, an Geschäftskunden während der Übergangszeit mit deren Zustimmung. Im Zweifel fragen Sie Ihren Steuerberater.",

    typesEyebrow: "Die Grundlagen",
    typesTitle: "Rechnung, Quittung oder Angebot?",
    types: [
      {
        title: "Angebot / Kostenvoranschlag",
        text: "Vor dem Auftrag: was es voraussichtlich kostet. Keine Zahlungsaufforderung.",
      },
      {
        title: "Rechnung",
        text: "Nach dem Auftrag (oder vorher, bei einer Anzahlung): eine Zahlungsaufforderung mit Fälligkeitsdatum.",
      },
      { title: "Quittung", text: "Nach der Zahlung: der Nachweis, dass das Geld eingegangen ist." },
    ],
    typesNote:
      "Dieser Generator erstellt Rechnungen. Viele Betriebe schicken dieselbe Rechnung mit dem Vermerk „Bezahlt“ als Beleg, sobald das Geld da ist.",

    termsEyebrow: "Pünktlich bezahlt werden",
    termsTitle: "Zahlungsbedingungen, die funktionieren",
    termsText:
      "Die Zahlungsbedingungen sagen Ihrem Kunden, bis wann er zahlen soll. „Zahlbar sofort ohne Abzug“ passt zu kleinen Aufträgen und Einmalkunden. Bei Geschäftskunden sind 14 oder 30 Tage üblich, manchmal mit Skonto bei schneller Zahlung. Schreiben Sie das konkrete Fälligkeitsdatum auf die Rechnung und machen Sie das Bezahlen mit Bankverbindung oder Zahlungslink einfach. Gut zu wissen: Nach § 286 Abs. 3 BGB kommt ein Kunde spätestens 30 Tage nach Fälligkeit und Zugang der Rechnung in Verzug; bei Privatkunden nur, wenn die Rechnung darauf hinweist. Klare Bedingungen und ein klares Datum ersparen Ihnen das Hinterherlaufen.",

    tipsEyebrow: "Gute Gewohnheiten",
    tipsTitle: "Nummerieren, versenden, nachfassen",
    tips: [
      {
        title: "Rechnungen in einer einfachen Reihe nummerieren",
        text: "Verwenden Sie eine fortlaufende Nummer wie RE-0001, RE-0002 und vergeben Sie keine Nummer doppelt. Das verlangt das Umsatzsteuergesetz, und Sie finden jede Rechnung sofort wieder, wenn Kunde oder Steuerberater nachfragen.",
      },
      {
        title: "Noch am selben Tag versenden",
        text: "Rechnungen, die direkt nach dem Auftrag kommen, werden schneller bezahlt. Schicken Sie das PDF per E-Mail oder Nachricht und nennen Sie Betrag und Fälligkeitsdatum gleich im Text, damit Ihr Kunde sie sieht, ohne die Datei zu öffnen.",
      },
      {
        title: "Freundlich und früh erinnern",
        text: "Ist das Fälligkeitsdatum verstrichen, senden Sie eine kurze, höfliche Zahlungserinnerung mit der Rechnung im Anhang. Die meisten verspäteten Zahlungen sind schlicht vergessen. Bewahren Sie jede Rechnung auf; das ist ohnehin gesetzlich vorgeschrieben, und so wissen Sie immer, was noch offen ist.",
      },
    ],

    vsEyebrow: "Ihre Wahl",
    vsTitle: "Dieser Generator oder die Invoicor-App?",
    vsIntro:
      "Beide erstellen dieselben professionellen Rechnungen mit denselben Vorlagen. Der Generator ist ideal für eine einzelne Rechnung, die App für alle, die jede Woche Rechnungen schreiben.",
    vsCaption: "Kostenloser Rechnungsgenerator im Vergleich mit der Invoicor-App",
    vsGenerator: "Generator",
    vsApp: "App",
    compare: [
      ["Preis", "Kostenlos", "{n} Rechnungen kostenlos, danach ein Tarif"],
      ["Wasserzeichen", "Kleine Zeile „Created with invoicor.com“", "Keines"],
      ["Vorlagen", "21 kostenlos", "Alle 31 (21 kostenlos, der Rest je nach Tarif)"],
      ["Positionen", "Bis zu 10", "Bis zu 50 (Pro)"],
      ["Gespeicherte Kunden und Leistungen", "Nur in diesem Browser", "Ja, in Ihrem Konto"],
      ["Rechnungsverlauf und Status", "Nein", "Entwurf, gesendet, bezahlt, überfällig"],
      ["Wo", "In jedem Browser", "iPhone und iPad"],
    ],

    moreEyebrow: "Vorlagen & Ratgeber",
    moreTitle: "Rechnungen für Ihre Branche",
    moreBefore:
      "Der Generator bietet 21 kostenlose Vorlagen. Was in Ihrem Gewerk auf eine Rechnung gehört, lesen Sie in unseren",
    moreLink: "Rechnungsvorlagen und Ratgebern",
    moreAfter: " oder im Ratgeber für Ihre Branche:",
    moreEnglishNote: "Diese Ratgeber gibt es vorerst nur auf Englisch.",
    useCases: [
      { href: "/industries/plumbers-hvac", label: "Sanitär & Heizung" },
      { href: "/industries/electricians", label: "Elektriker" },
      { href: "/industries/freelance-designers", label: "Freiberufliche Designer" },
      { href: "/industries/photographers-videographers", label: "Fotografen" },
      { href: "/industries/consultants-coaches", label: "Berater & Coaches" },
      { href: "/industries/cleaning-services", label: "Reinigungsdienste" },
    ],

    faqEyebrow: "FAQ",
    faqTitle: "Rechnung kostenlos erstellen: häufige Fragen",
    faqs: [
      {
        question: "Ist dieser Rechnungsgenerator wirklich kostenlos?",
        answer:
          "Ja. Rechnungen erstellen und herunterladen ist hier kostenlos und ohne Konto möglich. Jedes PDF trägt unten eine kleine Zeile „Created with invoicor.com“. Wenn Sie ganz ohne diese Zeile arbeiten möchten: Die Invoicor-App für das iPhone hat kein Wasserzeichen, und die ersten {n} Rechnungen sind kostenlos.",
      },
      {
        question: "Muss ich mich anmelden?",
        answer:
          "Nein. Formular ausfüllen, PDF herunterladen, fertig. Ihr Entwurf bleibt in Ihrem eigenen Browser, Sie können den Tab also schließen und später auf demselben Gerät weitermachen.",
      },
      {
        question: "Speichern Sie meine Rechnung?",
        answer:
          "Nein. Vorschau und PDF entstehen direkt in Ihrem Browser, Ihre Eingaben verlassen Ihr Gerät also nicht. Ihr Entwurf wird nur in diesem Browser gespeichert; „Alles löschen“ entfernt ihn.",
      },
      {
        question: "Welche Währungen und Sprachen kann ich verwenden?",
        answer:
          "38 Währungen und 11 Rechnungssprachen. Die Beschriftungen der Rechnung (Rechnung, Menge, Gesamtbetrag usw.) erscheinen in der Sprache, die Sie wählen.",
      },
      {
        question: "Kann ich mein Logo hinzufügen?",
        answer:
          "Ja. Laden Sie ein PNG oder JPG mit bis zu 500 KB hoch, dann erscheint es oben auf der Rechnung.",
      },
      {
        question: "Wie viele Positionen kann ich anlegen?",
        answer:
          "Bis zu 10 pro Rechnung, so viele wie im kostenlosen Tarif der Invoicor-App. Die kostenpflichtigen Tarife der App erlauben mehr.",
      },
      {
        question: "Kann ich Mehrwertsteuer und Rabatt angeben?",
        answer:
          "Ja. Legen Sie einen Steuersatz für die Rechnung fest, aufgeschlagen oder bereits in Ihren Preisen enthalten, und optional einen Rabatt in Prozent oder als festen Betrag. Zwischensumme, Steuer und Gesamtbetrag werden für Sie berechnet. Brauchen Sie 19 % und 7 % auf einer Rechnung, erstellen Sie zwei Rechnungen.",
      },
      {
        question: "Kann mein Kunde online bezahlen?",
        answer:
          "Fügen Sie Ihren eigenen Zahlungslink (zum Beispiel von PayPal oder Stripe) und Ihre Bankverbindung hinzu; beides steht auf der Rechnung. Ihr Kunde zahlt direkt an Sie. Invoicor wickelt keine Zahlungen ab und nimmt keine Gebühr.",
      },
      {
        question: "Kann ich das PDF nach dem Herunterladen bearbeiten?",
        answer:
          "Ein PDF ist nicht zum Bearbeiten gedacht. Ändern Sie das Formular und laden Sie ein neues herunter; Ihr Entwurf ist noch da. Wenn Sie jede Rechnung mit Status behalten und später erneut senden möchten, nutzen Sie die Invoicor-App.",
      },
      {
        question: "Kann ich Text aus dem PDF kopieren?",
        answer:
          "Nein. Das PDF entsteht in Ihrem Browser als scharfes Bild der Rechnung, sein Text lässt sich daher nicht markieren oder durchsuchen. Ihr Zahlungslink und die anderen Links funktionieren trotzdem. Die Invoicor-App erstellt PDFs mit markierbarem Text.",
      },
    ],
  },
};
