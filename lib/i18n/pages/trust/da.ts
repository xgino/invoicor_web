import type { TrustDict } from "./en";

/** About and Contact (P10, P11), Danish (Denmark). "du", as on the Danish help page; "pdf" in lower case; app screen names stay in English. */
export const da: TrustDict = {
  home: "Forside",
  country: "Nederlandene",
  about: {
    meta: {
      title: "Om Invoicor: den ærlige faktura-app | Invoicor",
      description:
        "Hvem der laver Invoicor, og hvad vi står for: gratis start, ingen gebyrer på dine penge, rigtige mennesker bag hver besked og data på servere i Tyskland.",
    },
    crumb: "Om os",
    eyebrow: "Om Invoicor",
    title: "Den ærlige faktura-app",
    subtitle:
      "Invoicor hjælper freelancere og små virksomheder med at sende en professionel faktura på få sekunder, på kundens sprog og i kundens valuta, uden skjult betalingsmur og uden gebyrer på deres penge.",
    whyEyebrow: "Hvorfor den findes",
    whyTitle: "Fakturering skal ikke æde din aften",
    whyText:
      "De fleste, der sender fakturaer, er VVS-folk, rengøringsfolk, designere og konsulenter, ikke bogholdere. De bliver færdige med en opgave, kunden beder om fakturaen, og værktøjerne er enten et tomt dokument eller et regnskabsprogram bygget til en økonomiafdeling. Invoicor ligger midt imellem: de felter, kundens bogholderi forventer, udfyldt med det, du gemte sidst, og en pæn pdf, du sender, før du går.",
    whyText2:
      "De samme klager går igen og igen i anmeldelser af faktura-apps: et “gratis” abonnement, der viser sig at være en prøveperiode, intet menneske at tale med og betalingsløsninger, der holder dine penge tilbage. Invoicor er bygget til at undgå alle tre.",
    principlesEyebrow: "Det står vi for",
    principlesTitle: "Fire løfter, vi kan holde",
    principles: [
      {
        title: "Ærligt gratis at starte",
        text: "{n} rigtige fakturaer i appen, uden vandmærke og uden abonnement. Du ser, hvad du får, før du betaler noget.",
      },
      {
        title: "Vi rører aldrig dine penge",
        text: "Invoicor er ikke en betalingsformidler. Din kunde betaler dig direkte, via din bank eller et betalingslink, du selv tilføjer, og vi tager ingen andel af nogen betaling.",
      },
      {
        title: "Rigtige mennesker læser hver besked",
        text: "Feedback fra appen og e-mails når frem til teamet, ikke en bot. Svar kan tage et par dage, og det siger vi hellere ærligt end at love en time, vi ikke kan holde.",
      },
      {
        title: "Dine data bliver i EU",
        text: "Konti og fakturaer gemmes på servere i Tyskland og behandles under GDPR. Sletter du din konto, fjernes dine data fra vores servere inden for 30 dage, undtagen det, loven kræver, at vi gemmer.",
      },
    ],
    whatEyebrow: "Hvad den kan, og ikke kan",
    whatTitle: "Så du ved det, før du downloader",
    doesTitle: "Invoicor kan",
    does: [
      "Lave en professionel faktura på din iPhone på få sekunder og dele pdf'en via e-mail, iMessage eller WhatsApp",
      "31 fakturaskabeloner og dit eget logo",
      "Fakturaer på 11 sprog og i 38 valutaer, til kunder i udlandet",
      "Gemte kunder og produkter, og ét tryk for at kopiere sidste måneds faktura",
      "En gratis fakturagenerator her på hjemmesiden, uden konto",
    ],
    doesntTitle: "Invoicor kan ikke (endnu)",
    doesnt: [
      "Tilbud eller overslag",
      "Tilbagevendende eller planlagte fakturaer eller rykkere til dine kunder",
      "Modtage betalinger (du tilføjer dit eget betalingslink)",
      "Virke offline: appen kræver internetforbindelse",
      "Android endnu (den er på vej: se Android-siden)",
    ],
    screensNote: "Selve appens skærme er på engelsk; fakturaerne findes på 11 sprog.",
    whoEyebrow: "Hvem står bag",
    whoTitle: "Drevet fra {country}",
    whoText:
      "Invoicor er en virksomhed, der drives fra {country}. Her er oplysningerne; vilkårene og privatlivspolitikken beskriver, hvad der gælder, når du bruger appen.",
    contactButton: "Kontakt os",
    helpButton: "Hjælp og ofte stillede spørgsmål",
    ctaTitle: "Send din næste faktura",
    ctaGradient: "på få sekunder.",
    ctaText: "{n} gratis fakturaer, intet vandmærke, intet abonnement nødvendigt.",
  },
  contact: {
    meta: {
      title: "Kontakt Invoicor: feedback, spørgsmål, fejl | Invoicor",
      description:
        "Kontakt Invoicor-teamet fra appen (Settings, Send Feedback) eller via e-mail. Et menneske læser hver besked; svar kan tage et par dage.",
    },
    crumb: "Kontakt",
    eyebrow: "Kontakt",
    title: "Tal med dem, der laver Invoicor",
    subtitle:
      "Spørgsmål, fejl eller idéer: en person i teamet læser hver besked. Svar kan tage et par dage, så hvis du har brug for et hurtigt svar, er hjælpecentret måske hurtigere.",
    waysHidden: "Sådan kontakter du os",
    app: {
      title: "I appen",
      before: "Gå til",
      path: "Settings → Support → Send Feedback",
      middle:
        "og vælg en fejl, et ønske om en funktion eller et spørgsmål. Din iPhone-model og appversion tilføjes automatisk, og under",
      submissions: "My Submissions",
      after: "kan du se, hvor hver besked er: ny, set, i gang eller løst.",
    },
    email: {
      title: "Via e-mail",
      before: "Skriv til",
      after:
        "om hvad som helst: når du ikke kan logge ind, ved henvendelser om dine data, samarbejder eller presse.",
    },
    help: {
      title: "Hjælp og ofte stillede spørgsmål",
      before: "De fleste spørgsmål om skabeloner, valutaer, moms og abonnementer er besvaret i",
      link: "hjælpecentret",
      after: ", når som helst.",
    },
    noPhone:
      "Der er ingen telefonlinje eller livechat: når du skriver, kan vi kigge på din konto og svare ordentligt.",
    topicsEyebrow: "Før du skriver",
    topicsTitle: "Få det rigtige svar første gang",
    topics: [
      {
        title: "En fejl eller en pdf, der ikke virker",
        text: "Skriv, hvad du trykkede på, hvad du forventede, og hvad der skete, og fakturanummeret, hvis det handler om én faktura. Et skærmbillede hjælper (vedhæft det i en e-mail).",
      },
      {
        title: "Abonnementer, refusioner og opsigelse",
        text: "Abonnementer købes via Apple, så Apple håndterer betalinger og refusioner. Opsig når som helst på din iPhone under Indstillinger → [dit navn] → Abonnementer. Vi hjælper gerne, hvis noget ser forkert ud.",
      },
      {
        title: "Dine data og dit privatliv",
        text: "Bed om en kopi af dine data eller om sletning via e-mail; du kan også slette din konto i appen. Privatlivspolitikken forklarer dine rettigheder under GDPR.",
      },
      {
        title: "Affiliates og partnere",
        text: "Affiliateprogrammet har sin egen side om, hvordan det fungerer, og hvordan du tilmelder dig. Skriv til os om andre samarbejder.",
      },
    ],
    related: "Relateret:",
    relatedLinks: {
      privacy: "privatlivspolitik (på engelsk)",
      terms: "vilkår (på engelsk)",
      affiliate: "affiliateprogram (på engelsk)",
      about: "om Invoicor",
    },
    companyEyebrow: "Virksomhedsoplysninger",
    companyTitle: "Hvem du skriver til",
    ctaTitle: "Har du ikke prøvet den endnu?",
    ctaGradient: "Kom gratis i gang.",
    ctaText: "{n} gratis fakturaer, intet vandmærke, intet abonnement nødvendigt.",
  },
  company: {
    business: "Virksomhed",
    basedIn: "Hjemsted",
    kvk: "KvK-nummer (det nederlandske handelskammer)",
    vat: "Momsnummer",
    data: "Data",
    dataValue: "Servere i Tyskland (EU), behandles under GDPR",
    email: "E-mail",
    countryName: "Nederlandene",
  },
};
