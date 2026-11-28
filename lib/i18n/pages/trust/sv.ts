import type { TrustDict } from "./en";

/** About and Contact (P10, P11), Swedish (Sweden). "du", as on the Swedish help page; "pdf" in lower case; app screen names stay in English. */
export const sv: TrustDict = {
  home: "Start",
  country: "Nederländerna",
  about: {
    meta: {
      title: "Om Invoicor: den ärliga fakturaappen | Invoicor",
      description:
        "Vem som gör Invoicor och vad vi står för: gratis start, inga avgifter på dina pengar, riktiga människor som läser allt och data på servrar i Tyskland.",
    },
    crumb: "Om oss",
    eyebrow: "Om Invoicor",
    title: "Den ärliga fakturaappen",
    subtitle:
      "Invoicor hjälper frilansare och småföretag att skicka en professionell faktura på några sekunder, på kundens språk och i kundens valuta, utan dold betalvägg och utan avgifter på deras pengar.",
    whyEyebrow: "Varför den finns",
    whyTitle: "Fakturering ska inte äta upp din kväll",
    whyText:
      "De flesta som skickar fakturor är rörmokare, städare, designer och konsulter, inte redovisningsekonomer. De gör klart ett jobb, kunden ber om fakturan, och verktygen som finns är antingen ett tomt dokument eller ett bokföringsprogram byggt för en ekonomiavdelning. Invoicor är mittemellan: de fält som kundens ekonomiavdelning förväntar sig, ifyllda med det du sparade förra gången, och en snygg pdf som du skickar innan du går.",
    whyText2:
      "Samma klagomål dyker upp om och om igen i recensioner av fakturaappar: en ”gratis” plan som visar sig vara en provperiod, ingen människa att prata med och betalningstjänster som håller inne dina pengar. Invoicor är byggd för att undvika alla tre.",
    principlesEyebrow: "Det här står vi för",
    principlesTitle: "Fyra löften vi kan hålla",
    principles: [
      {
        title: "Ärligt gratis att börja",
        text: "{n} riktiga fakturor i appen, utan vattenstämpel och utan prenumeration. Du ser vad du får innan du betalar något.",
      },
      {
        title: "Vi rör aldrig dina pengar",
        text: "Invoicor är ingen betalningsförmedlare. Din kund betalar dig direkt, via din bank eller en betallänk som du själv lägger till, och vi tar ingen del av någon betalning.",
      },
      {
        title: "Riktiga människor läser varje meddelande",
        text: "Feedback från appen och mejl når teamet, inte en bot. Svar kan ta några dagar, och vi säger hellre det än lovar en timme vi inte kan hålla.",
      },
      {
        title: "Dina uppgifter stannar i EU",
        text: "Konton och fakturor lagras på servrar i Tyskland och hanteras enligt GDPR. Raderar du ditt konto tas dina uppgifter bort från våra servrar inom 30 dagar, utom det som lagen kräver att vi sparar.",
      },
    ],
    whatEyebrow: "Vad den gör, och inte gör",
    whatTitle: "Så att du vet innan du laddar ner",
    doesTitle: "Invoicor kan",
    does: [
      "Skapa en professionell faktura på din iPhone på några sekunder och dela pdf:en via mejl, iMessage eller WhatsApp",
      "31 fakturamallar och din egen logotyp",
      "Fakturor på 11 språk och i 38 valutor, för kunder utomlands",
      "Sparade kunder och produkter, och ett tryck för att kopiera förra månadens faktura",
      "En gratis fakturagenerator här på webbplatsen, inget konto behövs",
    ],
    doesntTitle: "Invoicor kan inte (än)",
    doesnt: [
      "Offerter eller kostnadsförslag",
      "Återkommande eller schemalagda fakturor, eller påminnelser till dina kunder",
      "Ta emot betalningar (du lägger till din egen betallänk)",
      "Fungera offline: appen behöver internetanslutning",
      "Android än (det är på väg: se Android-sidan)",
    ],
    screensNote: "Appens egna skärmar är på engelska; fakturorna finns på 11 språk.",
    whoEyebrow: "Vem som står bakom",
    whoTitle: "Drivs från {country}",
    whoText:
      "Invoicor är ett företag som drivs från {country}. Här är uppgifterna; villkoren och integritetspolicyn beskriver vad som gäller när du använder appen.",
    contactButton: "Kontakta oss",
    helpButton: "Hjälp och vanliga frågor",
    ctaTitle: "Skicka din nästa faktura",
    ctaGradient: "på några sekunder.",
    ctaText: "{n} gratis fakturor, ingen vattenstämpel, ingen prenumeration behövs.",
  },
  contact: {
    meta: {
      title: "Kontakta Invoicor: feedback, frågor, buggar | Invoicor",
      description:
        "Nå Invoicor-teamet från appen (Settings, Send Feedback) eller via mejl. En människa läser varje meddelande; svar kan ta några dagar.",
    },
    crumb: "Kontakt",
    eyebrow: "Kontakt",
    title: "Prata med människorna bakom Invoicor",
    subtitle:
      "Frågor, buggar eller idéer: någon i teamet läser varje meddelande. Svar kan ta några dagar, så vill du ha svar snabbt kan hjälpcentret gå fortare.",
    waysHidden: "Så når du oss",
    app: {
      title: "I appen",
      before: "Gå till",
      path: "Settings → Support → Send Feedback",
      middle:
        "och välj en bugg, ett önskemål om en funktion eller en fråga. Din iPhone-modell och appversion läggs till automatiskt, och under",
      submissions: "My Submissions",
      after: "ser du var varje meddelande befinner sig: nytt, sett, pågår eller löst.",
    },
    email: {
      title: "Via mejl",
      before: "Skriv till",
      after:
        "om vad som helst: när du inte kan logga in, för frågor om dina uppgifter, samarbeten eller press.",
    },
    help: {
      title: "Hjälp och vanliga frågor",
      before: "De flesta frågor om mallar, valutor, moms och planer besvaras i",
      link: "hjälpcentret",
      after: ", när som helst.",
    },
    noPhone:
      "Det finns ingen telefonlinje eller livechatt: när du skriver kan vi titta på ditt konto och svara ordentligt.",
    topicsEyebrow: "Innan du skriver",
    topicsTitle: "Få rätt svar direkt",
    topics: [
      {
        title: "En bugg eller en trasig pdf",
        text: "Berätta vad du tryckte på, vad du väntade dig och vad som hände, och fakturanumret om det gäller en viss faktura. En skärmbild hjälper (bifoga den i ett mejl).",
      },
      {
        title: "Prenumerationer, återbetalningar och uppsägning",
        text: "Planerna köps via Apple, så Apple sköter betalningar och återbetalningar. Avsluta när som helst på din iPhone under Inställningar → [ditt namn] → Prenumerationer. Vi hjälper gärna till om något ser fel ut.",
      },
      {
        title: "Dina uppgifter och din integritet",
        text: "Be om en kopia av dina uppgifter eller att de raderas via mejl; du kan också radera ditt konto i appen. Integritetspolicyn förklarar dina rättigheter enligt GDPR.",
      },
      {
        title: "Affiliates och partner",
        text: "Affiliateprogrammet har en egen sida om hur det fungerar och hur du anmäler dig. För andra samarbeten, mejla oss.",
      },
    ],
    related: "Relaterat:",
    relatedLinks: {
      privacy: "integritetspolicy (på engelska)",
      terms: "villkor (på engelska)",
      affiliate: "affiliateprogram (på engelska)",
      about: "om Invoicor",
    },
    companyEyebrow: "Företagsuppgifter",
    companyTitle: "Vem du skriver till",
    ctaTitle: "Inte testat än?",
    ctaGradient: "Kom igång gratis.",
    ctaText: "{n} gratis fakturor, ingen vattenstämpel, ingen prenumeration behövs.",
  },
  company: {
    business: "Företag",
    basedIn: "Säte",
    kvk: "KvK-nummer (nederländska handelskammaren)",
    vat: "Momsnummer",
    data: "Data",
    dataValue: "Servrar i Tyskland (EU), hanteras enligt GDPR",
    email: "Mejl",
    countryName: "Nederländerna",
  },
};
