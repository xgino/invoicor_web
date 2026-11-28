import type { TrustDict } from "./en";

/** About and Contact (P10, P11), Norwegian Bokmål (Norway). "du", as on the Norwegian help page; "PDF" in capitals as there; app screen names stay in English. */
export const nb: TrustDict = {
  home: "Hjem",
  country: "Nederland",
  about: {
    meta: {
      title: "Om Invoicor: den ærlige faktura-appen | Invoicor",
      description:
        "Hvem som lager Invoicor og hva vi står for: gratis start, ingen gebyrer på pengene dine, ekte mennesker som leser alt og data på servere i Tyskland.",
    },
    crumb: "Om oss",
    eyebrow: "Om Invoicor",
    title: "Den ærlige faktura-appen",
    subtitle:
      "Invoicor hjelper frilansere og små bedrifter med å sende en profesjonell faktura på sekunder, på kundens språk og i kundens valuta, uten skjult betalingsmur og uten gebyrer på pengene deres.",
    whyEyebrow: "Hvorfor den finnes",
    whyTitle: "Fakturering skal ikke spise opp kvelden din",
    whyText:
      "De fleste som sender fakturaer, er rørleggere, renholdere, designere og konsulenter, ikke regnskapsførere. De blir ferdige med en jobb, kunden ber om fakturaen, og verktøyene som finnes, er enten et tomt dokument eller et regnskapsprogram laget for en økonomiavdeling. Invoicor er midt imellom: feltene kundens regnskapsavdeling forventer, fylt ut med det du lagret sist, og en ryddig PDF du sender før du drar.",
    whyText2:
      "De samme klagene går igjen i anmeldelser av faktura-apper: et «gratis» abonnement som viser seg å være en prøveperiode, ingen mennesker å snakke med og betalingsløsninger som holder tilbake pengene dine. Invoicor er laget for å unngå alle tre.",
    principlesEyebrow: "Dette står vi for",
    principlesTitle: "Fire løfter vi kan holde",
    principles: [
      {
        title: "Ærlig gratis å starte",
        text: "{n} ekte fakturaer i appen, uten vannmerke og uten abonnement. Du ser hva du får før du betaler noe.",
      },
      {
        title: "Vi rører aldri pengene dine",
        text: "Invoicor er ikke en betalingsformidler. Kunden betaler deg direkte, via banken din eller en betalingslenke du legger til selv, og vi tar ingen andel av noen betaling.",
      },
      {
        title: "Ekte mennesker leser hver melding",
        text: "Tilbakemeldinger fra appen og e-post når frem til teamet, ikke en bot. Svar kan ta noen dager, og det sier vi heller enn å love en time vi ikke kan holde.",
      },
      {
        title: "Dataene dine blir i EU",
        text: "Kontoer og fakturaer lagres på servere i Tyskland og behandles etter GDPR (personvernforordningen). Sletter du kontoen, fjernes dataene dine fra serverne våre innen 30 dager, unntatt det loven krever at vi oppbevarer.",
      },
    ],
    whatEyebrow: "Hva den gjør, og ikke gjør",
    whatTitle: "Så du vet det før du laster ned",
    doesTitle: "Invoicor kan",
    does: [
      "Lage en profesjonell faktura på iPhonen din på sekunder og dele PDF-en via e-post, iMessage eller WhatsApp",
      "31 fakturamaler og din egen logo",
      "Fakturaer på 11 språk og i 38 valutaer, for kunder i utlandet",
      "Lagrede kunder og produkter, og ett trykk for å kopiere forrige måneds faktura",
      "En gratis fakturagenerator her på nettstedet, uten konto",
    ],
    doesntTitle: "Invoicor kan ikke (ennå)",
    doesnt: [
      "Tilbud eller overslag",
      "Gjentakende eller planlagte fakturaer, eller purringer til kundene dine",
      "Ta imot betalinger (du legger til din egen betalingslenke)",
      "Fungere uten nett: appen trenger internettforbindelse",
      "Android ennå (den er på vei: se Android-siden)",
    ],
    screensNote: "Selve appens skjermer er på engelsk; fakturaene finnes på 11 språk.",
    whoEyebrow: "Hvem står bak",
    whoTitle: "Drevet fra {country}",
    whoText:
      "Invoicor er en virksomhet som drives fra {country}. Her er opplysningene; vilkårene og personvernerklæringen sier hva som gjelder når du bruker appen.",
    contactButton: "Kontakt oss",
    helpButton: "Hjelp og vanlige spørsmål",
    ctaTitle: "Send din neste faktura",
    ctaGradient: "på sekunder.",
    ctaText: "{n} gratis fakturaer, uten vannmerke, uten abonnement.",
  },
  contact: {
    meta: {
      title: "Kontakt Invoicor: tilbakemelding, spørsmål, feil | Invoicor",
      description:
        "Nå Invoicor-teamet fra appen (Settings, Send Feedback) eller på e-post. Et menneske leser hver melding; svar kan ta noen dager.",
    },
    crumb: "Kontakt",
    eyebrow: "Kontakt",
    title: "Snakk med dem som lager Invoicor",
    subtitle:
      "Spørsmål, feil eller ideer: en person i teamet leser hver melding. Svar kan ta noen dager, så trenger du et raskt svar, kan hjelpesenteret være raskere.",
    waysHidden: "Slik når du oss",
    app: {
      title: "I appen",
      before: "Gå til",
      path: "Settings → Support → Send Feedback",
      middle:
        "og velg en feil, et ønske om en funksjon eller et spørsmål. iPhone-modellen og appversjonen legges til automatisk, og under",
      submissions: "My Submissions",
      after: "ser du hvor hver melding står: ny, sett, under arbeid eller løst.",
    },
    email: {
      title: "På e-post",
      before: "Skriv til",
      after:
        "om hva som helst: når du ikke kommer inn på kontoen, om personvern, samarbeid eller presse.",
    },
    help: {
      title: "Hjelp og vanlige spørsmål",
      before: "De fleste spørsmål om maler, valutaer, mva og abonnementer er besvart i",
      link: "hjelpesenteret",
      after: ", når som helst.",
    },
    noPhone:
      "Det finnes ingen telefonlinje eller livechat: når du skriver, kan vi se på kontoen din og svare ordentlig.",
    topicsEyebrow: "Før du skriver",
    topicsTitle: "Få riktig svar første gang",
    topics: [
      {
        title: "En feil eller en PDF som ikke fungerer",
        text: "Si hva du trykket på, hva du forventet og hva som skjedde, og fakturanummeret hvis det gjelder én faktura. Et skjermbilde hjelper (legg det ved en e-post).",
      },
      {
        title: "Abonnementer, refusjon og oppsigelse",
        text: "Abonnementene kjøpes gjennom Apple, så Apple håndterer betalinger og refusjoner. Si opp når som helst i Innstillinger på iPhonen → [navnet ditt] → Abonnementer. Vi hjelper gjerne hvis noe ser feil ut.",
      },
      {
        title: "Dataene dine og personvern",
        text: "Be om en kopi av dataene dine eller om sletting på e-post; du kan også slette kontoen din i appen. Personvernerklæringen forklarer rettighetene dine etter GDPR.",
      },
      {
        title: "Affiliates og partnere",
        text: "Affiliateprogrammet har sin egen side om hvordan det fungerer og hvordan du melder deg på. For annet samarbeid, send oss en e-post.",
      },
    ],
    related: "Relatert:",
    relatedLinks: {
      privacy: "personvernerklæring (på engelsk)",
      terms: "vilkår (på engelsk)",
      affiliate: "affiliateprogram (på engelsk)",
      about: "om Invoicor",
    },
    companyEyebrow: "Firmaopplysninger",
    companyTitle: "Hvem du skriver til",
    ctaTitle: "Ikke prøvd ennå?",
    ctaGradient: "Kom i gang gratis.",
    ctaText: "{n} gratis fakturaer, uten vannmerke, uten abonnement.",
  },
  company: {
    business: "Virksomhet",
    basedIn: "Sted",
    kvk: "KvK-nummer (det nederlandske handelskammeret)",
    vat: "Mva-nummer",
    data: "Data",
    dataValue: "Servere i Tyskland (EU), behandlet etter GDPR",
    email: "E-post",
    countryName: "Nederland",
  },
};
