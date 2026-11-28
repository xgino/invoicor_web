import type { TrustDict } from "./en";

/** About and Contact (P10, P11), Dutch (Netherlands). Informal "je", like help/nl.ts. App labels stay English. */
export const nl: TrustDict = {
  home: "Home",
  country: "Nederland",
  about: {
    meta: {
      title: "Over Invoicor: de eerlijke factuur-app | Invoicor",
      description:
        "Wie Invoicor maakt en waar het voor staat: gratis beginnen, geen kosten op je geld, echte mensen lezen elk bericht en je gegevens staan in Duitsland.",
    },
    crumb: "Over ons",
    eyebrow: "Over Invoicor",
    title: "De eerlijke factuur-app",
    subtitle:
      "Met Invoicor sturen zzp'ers en kleine bedrijven binnen een paar seconden een professionele factuur, in de taal en valuta van hun klant, zonder verborgen betaalmuur en zonder kosten op hun geld.",
    whyEyebrow: "Waarom het bestaat",
    whyTitle: "Factureren hoort je avond niet op te slokken",
    whyText:
      "De meeste mensen die facturen sturen zijn loodgieters, schoonmakers, ontwerpers en adviseurs, geen boekhouders. Ze ronden een klus af, de klant vraagt om de factuur, en de keuze is een leeg document of boekhoudsoftware die gemaakt is voor een financiële afdeling. Invoicor zit daartussen: de velden die de administratie van je klant verwacht, ingevuld met wat je de vorige keer hebt opgeslagen, en een nette pdf die je verstuurt voordat je weggaat.",
    whyText2:
      "In reviews van factuur-apps komen steeds dezelfde klachten terug: een “gratis” abonnement dat een proefperiode blijkt te zijn, geen mens om mee te praten, en een betaaldienst die je geld vasthoudt. Invoicor is gemaakt om alle drie te vermijden.",
    principlesEyebrow: "Waar we voor staan",
    principlesTitle: "Vier beloftes die we kunnen nakomen",
    principles: [
      {
        title: "Eerlijk gratis beginnen",
        text: "{n} echte facturen in de app, zonder watermerk en zonder abonnement. Je ziet wat je krijgt voordat je iets betaalt.",
      },
      {
        title: "We komen nooit aan je geld",
        text: "Invoicor is geen betaaldienst. Je klant betaalt jou rechtstreeks, via je bank of een betaallink die je zelf toevoegt, en wij houden van geen enkele betaling iets in.",
      },
      {
        title: "Echte mensen lezen elk bericht",
        text: "Feedback uit de app en e-mail komen bij het team terecht, niet bij een bot. Een antwoord kan een paar dagen duren, en dat zeggen we liever eerlijk dan dat we een uur beloven dat we niet waarmaken.",
      },
      {
        title: "Je gegevens blijven in de EU",
        text: "Accounts en facturen staan op servers in Duitsland en worden verwerkt volgens de AVG. Verwijder je je account, dan halen we je gegevens binnen 30 dagen van onze servers, behalve wat we wettelijk moeten bewaren.",
      },
    ],
    whatEyebrow: "Wat het wel en niet doet",
    whatTitle: "Zodat je het weet voordat je downloadt",
    doesTitle: "Invoicor doet",
    does: [
      "Binnen een paar seconden een professionele factuur maken op je iPhone en de pdf delen via e-mail, iMessage of WhatsApp",
      "31 factuurtemplates en je eigen logo",
      "Facturen in 11 talen en 38 valuta, voor klanten in het buitenland",
      "Opgeslagen klanten en producten, en met één tik de factuur van vorige maand dupliceren",
      "Een gratis factuurgenerator op deze website, zonder account",
    ],
    doesntTitle: "Invoicor doet (nog) niet",
    doesnt: [
      "Offertes",
      "Terugkerende of ingeplande facturen, of herinneringen aan je klanten",
      "Betalingen verwerken (je voegt je eigen betaallink toe)",
      "Offline werken: de app heeft een internetverbinding nodig",
      "Android (dat komt eraan: zie de Android-pagina)",
    ],
    screensNote: "De schermen van de app zijn in het Engels; de facturen zijn er in 11 talen.",
    whoEyebrow: "Wie erachter zit",
    whoTitle: "Gerund vanuit {country}",
    whoText:
      "Invoicor is een bedrijf dat vanuit {country} wordt gerund. Hieronder staan de gegevens; de voorwaarden en het privacybeleid zeggen wat er geldt als je de app gebruikt.",
    contactButton: "Neem contact op",
    helpButton: "Help en FAQ",
    ctaTitle: "Stuur je volgende factuur",
    ctaGradient: "in een paar seconden.",
    ctaText: "{n} gratis facturen, geen watermerk, geen abonnement nodig.",
  },
  contact: {
    meta: {
      title: "Contact met Invoicor: feedback, vragen, bugs | Invoicor",
      description:
        "Bereik het Invoicor-team vanuit de app (Settings, Send Feedback) of per e-mail. Een mens leest elk bericht; een antwoord kan een paar dagen duren.",
    },
    crumb: "Contact",
    eyebrow: "Contact",
    title: "Praat met de mensen die Invoicor maken",
    subtitle:
      "Vragen, bugs of ideeën: iemand van het team leest elk bericht. Een antwoord kan een paar dagen duren, dus voor een snel antwoord is het helpcentrum vaak sneller.",
    waysHidden: "Zo bereik je ons",
    app: {
      title: "In de app",
      before: "Ga naar",
      path: "Settings → Support → Send Feedback",
      middle:
        "en kies een bug, een functieverzoek of een vraag. Je iPhone-model en appversie worden automatisch toegevoegd, en onder",
      submissions: "My Submissions",
      after: "zie je waar elk bericht staat: nieuw, gezien, in behandeling of opgelost.",
    },
    email: {
      title: "Per e-mail",
      before: "Mail naar",
      after:
        "voor alles: als je niet kunt inloggen, voor privacyverzoeken, samenwerkingen of pers.",
    },
    help: {
      title: "Help en FAQ",
      before:
        "De meeste vragen over templates, valuta, btw en abonnementen worden beantwoord in het",
      link: "helpcentrum",
      after: ", altijd beschikbaar.",
    },
    noPhone:
      "Er is geen telefoonlijn of livechat: als je schrijft, kunnen we je account bekijken en je goed antwoorden.",
    topicsEyebrow: "Voordat je schrijft",
    topicsTitle: "In één keer het juiste antwoord",
    topics: [
      {
        title: "Een bug of een kapotte pdf",
        text: "Vertel waar je op tikte, wat je verwachtte en wat er gebeurde, en het factuurnummer als het om één factuur gaat. Een screenshot helpt (stuur die mee in een e-mail).",
      },
      {
        title: "Abonnementen, terugbetalingen en opzeggen",
        text: "Abonnementen koop je via Apple, dus Apple regelt betalingen en terugbetalingen. Opzeggen kan altijd op je iPhone via Instellingen → [je naam] → Abonnementen. Klopt er iets niet, dan helpen we je graag.",
      },
      {
        title: "Je gegevens en privacy",
        text: "Vraag per e-mail om een kopie van je gegevens of om verwijdering; je kunt je account ook in de app verwijderen. Het privacybeleid legt je rechten onder de AVG uit.",
      },
      {
        title: "Affiliates en partners",
        text: "Het affiliateprogramma heeft een eigen pagina die uitlegt hoe het werkt en hoe je je aanmeldt. Voor andere samenwerkingen kun je ons mailen.",
      },
    ],
    related: "Zie ook:",
    relatedLinks: {
      privacy: "privacybeleid (Engels)",
      terms: "voorwaarden (Engels)",
      affiliate: "affiliateprogramma (Engels)",
      about: "over Invoicor",
    },
    companyEyebrow: "Bedrijfsgegevens",
    companyTitle: "Aan wie je schrijft",
    ctaTitle: "Nog niet geprobeerd?",
    ctaGradient: "Begin gratis.",
    ctaText: "{n} gratis facturen, geen watermerk, geen abonnement nodig.",
  },
  company: {
    business: "Bedrijf",
    basedIn: "Gevestigd in",
    kvk: "KvK-nummer",
    vat: "Btw-nummer",
    data: "Gegevens",
    dataValue: "Servers in Duitsland (EU), verwerkt volgens de AVG",
    email: "E-mail",
    countryName: "Nederland",
  },
};
