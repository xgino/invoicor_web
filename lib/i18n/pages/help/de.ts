import type { HelpDict } from "./en";

/** Help center, German (DE). Polite "Sie", like the German home page. App labels stay English. */
export const de: HelpDict = {
  meta: {
    title: "Hilfe und häufige Fragen | Invoicor",
    description:
      "Antworten rund um Invoicor: Rechnungen erstellen, Vorlagen, Währungen, Steuern, Senden und Status, Abos und Ihre Daten.",
  },
  home: "Startseite",
  crumb: "Hilfe",
  toc: "Auf dieser Seite",
  eyebrow: "Support",
  title: "Hilfe",
  subtitle:
    "Alles, was Sie über Invoicor wissen müssen. Keine Antwort gefunden? Jede Nachricht wird von echten Menschen gelesen.",
  contactTitle: "Noch eine Frage?",
  contactText:
    "Schreiben Sie uns direkt aus der App oder per E-Mail. Jede Nachricht wird von echten Menschen gelesen; eine Antwort kann ein paar Tage dauern.",
  sections: [
    {
      id: "getting-started",
      title: "Erste Schritte",
      items: [
        {
          q: "Wie erstelle ich meine erste Rechnung?",
          a: "Öffnen Sie Invoicor und tippen Sie im Tab „Invoices“ (Rechnungen) auf die Taste +. Wählen Sie einen Kunden (oder legen Sie einen neuen an), fügen Sie Ihre Positionen hinzu und tippen Sie auf „Preview Invoice“ (Rechnungsvorschau). Ihre Rechnung wird als PDF erstellt, das Sie per E-Mail, WhatsApp, AirDrop oder jede andere App teilen können.",
        },
        {
          q: "Muss ich zuerst ein Firmenprofil anlegen?",
          a: "Ja. Bevor Sie Ihre erste Rechnung erstellen, fragt Invoicor nach Ihren Firmendaten (Firmenname, Adresse, Logo, Bankverbindung). Das dauert nur eine Minute, und die Angaben werden auf jeder Rechnung wiederverwendet.",
        },
        {
          q: "Ist Invoicor kostenlos?",
          a: "Ja. Sie können bis zu 3 Rechnungen kostenlos erstellen, ohne Zeitlimit und ohne Abo. Kostenlose Rechnungen umfassen die kostenlosen Vorlagen, den PDF-Export, die Kundenverwaltung und die Statusverfolgung. In der App gibt es in keinem Tarif ein Wasserzeichen.",
        },
        {
          q: "Welche Geräte werden unterstützt?",
          a: "Invoicor läuft auf iPhone und iPad mit iOS oder iPadOS 17.6 oder neuer. Eine Web-Version gibt es noch nicht; Ihre Daten erreichen Sie über die App. Die Bildschirme der App sind vorerst auf Englisch, Ihre Rechnungen können aber auf Deutsch und in 10 weiteren Sprachen erstellt werden.",
        },
      ],
    },
    {
      id: "creating-invoices",
      title: "Rechnungen erstellen",
      items: [
        {
          q: "Kann ich mein Firmenlogo auf Rechnungen setzen?",
          a: "Ja. Öffnen Sie Ihr Firmenprofil und tippen Sie auf „Upload Logo“ (Logo hochladen). Invoicor unterstützt die Formate PNG, JPG, SVG und WebP. Ihr Logo erscheint auf jeder Rechnung, die Sie senden. Die Transparenz von PNG-Dateien bleibt erhalten.",
        },
        {
          q: "Wie funktionieren die Vorlagen?",
          a: "Invoicor enthält 31 professionell gestaltete Rechnungsvorlagen: 21 sind kostenlos, 8 gibt es mit Starter und 2 mit Pro. Höhere Tarife enthalten alle Vorlagen der niedrigeren. Sie können in Ihrem Firmenprofil eine Standardvorlage festlegen oder für jede Rechnung eine andere wählen.",
        },
        {
          q: "Kann ich in verschiedenen Währungen abrechnen?",
          a: "Ja. Invoicor unterstützt 38 Währungen, darunter USD, EUR, GBP, JPY, CHF, CAD, AUD, INR und BRL. Legen Sie in Ihrem Firmenprofil eine Standardwährung fest oder ändern Sie sie pro Rechnung.",
        },
        {
          q: "Kann ich Rechnungen in der Sprache meines Kunden senden?",
          a: "Ja. Invoicor unterstützt 11 Rechnungssprachen. Alle Beschriftungen auf der Rechnung (Position, Menge, Gesamtbetrag usw.) werden automatisch übersetzt. Legen Sie in Ihrem Firmenprofil eine Standardsprache fest oder wählen Sie sie pro Rechnung.",
        },
        {
          q: "Wie funktioniert die Steuerberechnung?",
          a: "Legen Sie Ihren Steuersatz in Ihrem Firmenprofil fest (z. B. 19 % Umsatzsteuer in Deutschland). Invoicor berechnet die Steuer auf jeder Rechnung automatisch. Sie können zwischen Brutto- und Nettopreisen wählen. Den Steuersatz können Sie auch pro Rechnung ändern.",
        },
        {
          q: "Kann ich Rabatte auf eine Rechnung geben?",
          a: "Ja. Sie können auf jede Rechnung einen prozentualen Rabatt oder einen festen Betrag gewähren. Der Rabatt erscheint als eigene Zeile bei den Summen.",
        },
        {
          q: "Wie viele Positionen passen auf eine Rechnung?",
          a: "Das hängt von Ihrem Tarif ab: bis zu 10 Positionen pro Rechnung mit Free, 25 mit Starter und 50 mit Pro.",
        },
      ],
    },
    {
      id: "sending-tracking",
      title: "Senden und Status",
      items: [
        {
          q: "Wie sende ich eine Rechnung?",
          a: "Tippen Sie in der Detailansicht der Rechnung auf „Share“ (Teilen). Ihre Rechnung wird als PDF erstellt, und Sie können sie per E-Mail, WhatsApp, AirDrop, Nachrichten oder jede andere App zum Teilen auf Ihrem iPhone senden.",
        },
        {
          q: "Was bedeuten die Rechnungsstatus?",
          a: "Draft (Entwurf): gespeichert, aber noch nicht gesendet, Sie können sie noch bearbeiten. Sent (Gesendet): mit Ihrem Kunden geteilt, für Änderungen gesperrt. Paid (Bezahlt): der Kunde hat bezahlt, von Ihnen markiert. Overdue (Überfällig): Fälligkeitsdatum überschritten, noch nicht bezahlt. Cancelled (Storniert): ungültig gemacht, nicht mehr aktiv.",
          list: [
            [
              "Draft (Entwurf)",
              "gespeichert, aber noch nicht gesendet, Sie können sie noch bearbeiten.",
            ],
            ["Sent (Gesendet)", "mit Ihrem Kunden geteilt, für Änderungen gesperrt."],
            ["Paid (Bezahlt)", "der Kunde hat bezahlt, von Ihnen markiert."],
            ["Overdue (Überfällig)", "Fälligkeitsdatum überschritten, noch nicht bezahlt."],
            ["Cancelled (Storniert)", "ungültig gemacht, nicht mehr aktiv."],
          ],
        },
        {
          q: "Kann ich eine Rechnung nach dem Senden bearbeiten?",
          a: "Nein. Sobald eine Rechnung als „Sent“ (Gesendet) markiert ist, wird sie gesperrt, damit der rechtliche Nachweis erhalten bleibt. Wenn Sie etwas ändern müssen, duplizieren Sie die Rechnung, bearbeiten Sie die Kopie und senden Sie die aktualisierte Fassung.",
        },
        {
          q: "Kann ich eine Rechnung duplizieren?",
          a: "Ja. Tippen Sie in der Detailansicht der Rechnung auf „Copy“ (Kopieren). So entsteht ein neuer Entwurf mit demselben Kunden, denselben Positionen und Einstellungen. Praktisch für wiederkehrende Aufträge.",
        },
      ],
    },
    {
      id: "account-billing",
      title: "Konto und Abrechnung",
      items: [
        {
          q: "Wie funktionieren die Abos?",
          a: "Invoicor bietet die Tarife Starter und Pro, monatlich oder jährlich abgerechnet über den Apple App Store. Die gesamte Abrechnung übernimmt Apple – wir sehen und speichern Ihre Zahlungsdaten nie. Sie können Ihr Abo in den Einstellungen Ihres iPhones verwalten oder kündigen: Einstellungen → [Ihr Name] → Abonnements.",
        },
        {
          q: "Brauche ich für die kostenlose Testphase eine Karte?",
          a: "Nicht für den kostenlosen Tarif: Ihre ersten 3 Rechnungen brauchen kein Abo und keine Zahlung. Die kostenlosen Testphasen von Starter und Pro laufen über Apple: Sie starten sie mit Ihrer Apple-ID, für die eine Zahlungsmethode hinterlegt sein muss. Kündigen Sie vor dem Ende der Testphase, zahlen Sie nichts. Invoicor sieht Ihre Karte nie.",
        },
        {
          q: "Kann ich mein Abo kündigen?",
          a: "Ja, jederzeit. Öffnen Sie auf Ihrem iPhone Einstellungen → [Ihr Name] → Abonnements → Invoicor → Abonnement kündigen. Ihr Tarif bleibt bis zum Ende des laufenden Abrechnungszeitraums aktiv. Danach wird Ihnen nichts mehr berechnet.",
        },
        {
          q: "Was passiert, wenn ich zu Free wechsle?",
          a: "Ihre bestehenden Rechnungen, Kunden und Daten bleiben erhalten, und Sie können jede Rechnung, die Sie erstellt haben, weiterhin ansehen, teilen und verfolgen. Der kostenlose Tarif umfasst insgesamt 3 Rechnungen. Wenn Sie also schon 3 oder mehr erstellt haben, brauchen Sie für neue wieder einen Tarif.",
        },
        {
          q: "Wie lösche ich mein Konto?",
          a: "Öffnen Sie in der App die Einstellungen („Settings“) und tippen Sie auf „Delete Account“ (Konto löschen). Damit werden Ihr Konto und alle zugehörigen Daten dauerhaft von unseren Servern entfernt. Das lässt sich nicht rückgängig machen.",
        },
      ],
    },
    {
      id: "multiple-businesses",
      title: "Mehrere Firmen",
      items: [
        {
          q: "Kann ich mehrere Firmen verwalten?",
          a: "Ja. Mit dem Pro-Tarif können Sie bis zu 3 getrennte Firmenprofile anlegen, jedes mit eigenem Firmennamen, Logo, eigener Adresse und Bankverbindung. Beim Erstellen einer Rechnung wechseln Sie zwischen ihnen.",
        },
        {
          q: "Wie lege ich ein Standard-Firmenprofil fest?",
          a: "Öffnen Sie im Tab „Library“ (Bibliothek) den Bereich „Business“ (Firma). Halten Sie ein Profil gedrückt und wählen Sie „Set as Default“ (Als Standard festlegen). Das Standardprofil ist beim Erstellen einer neuen Rechnung vorausgewählt.",
        },
      ],
    },
    {
      id: "data-privacy",
      title: "Daten und Datenschutz",
      items: [
        {
          q: "Wo werden meine Daten gespeichert?",
          a: "Ihre Konto- und Rechnungsdaten werden auf Servern in Deutschland gespeichert, in der Europäischen Union, unter der DSGVO. Die Website-Analyse auf invoicor.com (Google Analytics und PostHog, US-Dienste) läuft nur, wenn Sie Cookies zustimmen.",
        },
        {
          q: "Wie schützen Sie meine Daten?",
          a: "Mit üblichen Schutzmaßnahmen: Jede Verbindung zwischen der App und unseren Servern ist verschlüsselt (HTTPS), Passwörter werden gehasht gespeichert, die Anmeldung nutzt sichere Tokens (oder „Mit Apple anmelden“ bzw. Google), und der Zugriff auf unsere Server in Deutschland ist beschränkt. Kein Online-Dienst ist vollkommen sicher, aber wir arbeiten daran, Ihre Daten vor unbefugtem Zugriff zu schützen.",
        },
        {
          q: "Verkaufen Sie meine Daten?",
          a: "Nein. Wir verkaufen oder vermieten Ihre Daten oder die Daten Ihrer Kunden nie. Wir geben nur das weiter, was die Dienste brauchen, mit denen Invoicor läuft (unser Hosting-Anbieter in Deutschland, Apple oder Google, wenn Sie sich damit anmelden, und unser Abo-Dienst), die alle in unserer Datenschutzerklärung aufgeführt sind.",
          link: { text: "Datenschutzerklärung", page: "privacy" as const },
        },
        {
          q: "Kann ich meine Daten exportieren?",
          a: "Einzelne Rechnungen können Sie jederzeit als PDF exportieren. Für einen vollständigen Datenexport schreiben Sie uns an {email}, und wir stellen Ihnen Ihre Daten in einem maschinenlesbaren Format bereit, wie es die DSGVO verlangt.",
        },
      ],
    },
    {
      id: "safety",
      title: "Sicherheit und Betrug",
      items: [
        {
          q: "Ich habe eine mit Invoicor erstellte Rechnung erhalten. Ist sie echt?",
          a: "Invoicor ist das Werkzeug, mit dem der Absender die Rechnung erstellt hat; wir schreiben keine Rechnungen, senden nicht im Namen anderer und prüfen den Inhalt nicht. Behandeln Sie sie wie jede andere Rechnung: Prüfen Sie vor dem Bezahlen, ob Sie den Absender kennen, ob Sie die Leistung oder Ware bestellt haben und ob der Betrag stimmt.",
        },
        {
          q: "Wie bezahle ich eine Rechnung sicher?",
          a: "Prüfen Sie drei Dinge: den Absender (ein Unternehmen, das Sie kennen), den Betrag (passt zu dem, was Sie vereinbart haben) und die Zahlungsdaten (stimmen mit denen überein, die dieses Unternehmen bisher verwendet hat). Wenn Ihnen etwas ungewöhnlich vorkommt, kontaktieren Sie den Absender über eine Telefonnummer oder Adresse, die Sie bereits kennen, nicht über die Angaben auf der Rechnung.",
        },
        {
          q: "Die Bankverbindung oder der Zahlungslink auf einer Rechnung hat sich geändert. Was soll ich tun?",
          a: "Zahlen Sie noch nicht. Geänderte Zahlungsdaten sind der häufigste Rechnungsbetrug. Rufen Sie den Absender unter einer Nummer an, die Sie bereits haben, und bestätigen Sie die neuen Angaben mit ihm, bevor Sie zahlen.",
        },
        {
          q: "Wickelt Invoicor die Zahlung ab oder sichert sie ab?",
          a: "Nein. Invoicor ist kein Zahlungsdienst und kein Zahlungs-Gateway: Zahlungen gehen direkt vom Kunden an den Absender, über dessen eigenen Zahlungslink oder dessen Bankverbindung. Invoicor kann eine Zahlung weder zurückhalten noch rückgängig machen oder erstatten. Unsere Nutzungsbedingungen erklären das in Abschnitt 5.",
          link: { text: "Nutzungsbedingungen", page: "terms" as const },
        },
        {
          q: "Wie melde ich eine verdächtige Rechnung, die mit Invoicor erstellt wurde?",
          a: "Schreiben Sie an {email} und schicken Sie die Rechnung mit, zusammen mit der Information, wie Sie sie erhalten haben. Wir können Konten sperren, die betrügerische Rechnungen versenden. Wenn Sie bereits an einen Betrüger gezahlt haben, wenden Sie sich außerdem sofort an Ihre Bank und die Polizei.",
        },
      ],
    },
  ],
};
