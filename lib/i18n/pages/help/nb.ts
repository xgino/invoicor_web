/**
 * The help center's text, Norwegian Bokmål, written for Norway (ROADMAP HL3). "du". Same shape as
 * `en.ts`. The app's screens are in English, so button and tab names stay in English in «».
 */
import type { HelpDict } from "./en";

export const nb: HelpDict = {
  meta: {
    title: "Hjelp og vanlige spørsmål | Invoicor",
    description:
      "Svar på vanlige spørsmål om Invoicor: lage fakturaer, maler, valutaer, mva, sending og oppfølging, abonnementer og dataene dine.",
  },
  home: "Hjem",
  crumb: "Hjelp",
  toc: "På denne siden",
  eyebrow: "Kundestøtte",
  title: "Hjelpesenter",
  subtitle:
    "Alt du trenger å vite om Invoicor. Finner du ikke svaret? Ekte mennesker leser hver melding.",
  contactTitle: "Har du fortsatt et spørsmål?",
  contactText:
    "Send oss en melding fra appen, eller send oss en e-post. Ekte mennesker leser hver melding; det kan ta noen dager før du får svar.",
  sections: [
    {
      id: "getting-started",
      title: "Kom i gang",
      items: [
        {
          q: "Hvordan lager jeg min første faktura?",
          a: "Åpne Invoicor og trykk på +-knappen i fanen «Invoices» (Fakturaer). Velg en kunde (eller opprett en ny), legg til varelinjene og trykk på «Preview Invoice» (Forhåndsvis faktura). Fakturaen lages som en PDF som du kan dele på e-post, WhatsApp, AirDrop eller i en hvilken som helst annen app.",
        },
        {
          q: "Må jeg sette opp en firmaprofil først?",
          a: "Ja. Før du lager din første faktura, ber Invoicor deg legge inn firmaopplysningene dine (firmanavn, adresse, logo, bankopplysninger). Det tar bare et minutt, og opplysningene brukes på nytt på hver faktura du lager.",
        },
        {
          q: "Er Invoicor gratis?",
          a: "Ja. Du kan lage opptil 3 fakturaer gratis, uten tidsbegrensning og uten abonnement. Gratisfakturaene inkluderer gratismalene, PDF-eksport, kundehåndtering og statusoppfølging. Det er ikke noe vannmerke i appen, uansett abonnement.",
        },
        {
          q: "Hvilke enheter støttes?",
          a: "Invoicor fungerer på iPhone og iPad med iOS eller iPadOS 17.6 eller nyere. Det finnes ingen nettversjon ennå; du bruker dataene dine gjennom appen. Selve appen er foreløpig på engelsk, men fakturaene kan lages på norsk og 10 andre språk.",
        },
      ],
    },
    {
      id: "creating-invoices",
      title: "Lage fakturaer",
      items: [
        {
          q: "Kan jeg legge til firmalogoen min på fakturaene?",
          a: "Ja. Gå til firmaprofilen din og trykk på «Upload Logo» (Last opp logo). Invoicor støtter PNG, JPG, SVG og WebP. Logoen vises på hver faktura du sender. Gjennomsiktighet i PNG-filer bevares.",
        },
        {
          q: "Hvordan fungerer malene?",
          a: "Invoicor har 31 profesjonelt designede fakturamaler: 21 er gratis, 8 følger med Starter og 2 med Pro. Høyere abonnementer inkluderer alle malene fra de lavere. Du kan velge en standardmal i firmaprofilen eller en annen mal for hver faktura.",
        },
        {
          q: "Kan jeg fakturere i forskjellige valutaer?",
          a: "Ja. Invoicor støtter 38 valutaer, blant annet NOK, EUR, USD, GBP, SEK, DKK, CHF, JPY og CAD. Velg en standardvaluta i firmaprofilen eller endre den per faktura.",
        },
        {
          q: "Kan jeg sende fakturaer på kundens språk?",
          a: "Ja. Invoicor støtter 11 fakturaspråk. Alle tekstene på fakturaen (vare, antall, totalt osv.) oversettes automatisk. Velg et standardspråk i firmaprofilen eller velg per faktura.",
        },
        {
          q: "Hvordan beregnes mva?",
          a: "Legg inn mva-satsen din i firmaprofilen (f.eks. 25 % for norsk merverdiavgift). Invoicor beregner mva automatisk på hver faktura. Du kan velge om prisene er inkludert eller ekskludert mva. Du kan også endre satsen for hver enkelt faktura.",
        },
        {
          q: "Kan jeg gi rabatt på en faktura?",
          a: "Ja. Du kan gi rabatt i prosent eller som et fast beløp på hvilken som helst faktura. Rabatten vises som en egen linje i summeringen.",
        },
        {
          q: "Hvor mange varelinjer kan en faktura ha?",
          a: "Det avhenger av abonnementet: opptil 10 varelinjer per faktura med Gratis, 25 med Starter og 50 med Pro.",
        },
      ],
    },
    {
      id: "sending-tracking",
      title: "Sending og oppfølging",
      items: [
        {
          q: "Hvordan sender jeg en faktura?",
          a: "Åpne fakturaen og trykk på «Share» (Del). Fakturaen lages som en PDF, og du kan sende den på e-post, WhatsApp, AirDrop, Meldinger eller med en hvilken som helst annen delingsapp på iPhonen.",
        },
        {
          q: "Hva betyr fakturastatusene?",
          a: "Draft (Utkast) – lagret, men ikke sendt ennå, du kan fortsatt redigere den. Sent (Sendt) – delt med kunden, låst for redigering. Paid (Betalt) – kunden har betalt, markert av deg. Overdue (Forfalt) – forfallsdatoen er passert, fortsatt ubetalt. Cancelled (Kansellert) – annullert, ikke lenger aktiv.",
          list: [
            ["Draft (Utkast)", "lagret, men ikke sendt ennå, du kan fortsatt redigere den."],
            ["Sent (Sendt)", "delt med kunden, låst for redigering."],
            ["Paid (Betalt)", "kunden har betalt, markert av deg."],
            ["Overdue (Forfalt)", "forfallsdatoen er passert, fortsatt ubetalt."],
            ["Cancelled (Kansellert)", "annullert, ikke lenger aktiv."],
          ] as Array<[string, string]>,
        },
        {
          q: "Kan jeg endre en faktura etter at den er sendt?",
          a: "Nei. Når en faktura er markert som «Sent» (Sendt), låses den for å bevare den juridiske dokumentasjonen. Må du gjøre endringer, dupliserer du fakturaen, redigerer kopien og sender den oppdaterte versjonen.",
        },
        {
          q: "Kan jeg duplisere en faktura?",
          a: "Ja. Åpne fakturaen og trykk på knappen «Copy» (Kopier). Da lages et nytt utkast med samme kunde, varelinjer og innstillinger. Nyttig for arbeid som går igjen.",
        },
      ],
    },
    {
      id: "account-billing",
      title: "Konto og betaling",
      items: [
        {
          q: "Hvordan fungerer abonnementene?",
          a: "Invoicor har abonnementene Starter og Pro, som betales månedlig eller årlig gjennom Apple App Store. All betaling håndteres av Apple – vi ser eller lagrer aldri betalingsopplysningene dine. Du kan administrere eller si opp abonnementet i Innstillinger på iPhonen → [navnet ditt] → Abonnementer.",
        },
        {
          q: "Trenger jeg et kort for gratis prøveperiode?",
          a: "Ikke for gratisabonnementet: de første 3 fakturaene dine krever verken abonnement eller betaling. Gratis prøveperioder av Starter og Pro går gjennom Apple: du starter dem med Apple-ID-en din, som må ha en betalingsmåte. Sier du opp før prøveperioden er over, betaler du ingenting. Invoicor ser aldri kortet ditt.",
        },
        {
          q: "Kan jeg si opp abonnementet?",
          a: "Ja, når som helst. Gå til Innstillinger på iPhonen → [navnet ditt] → Abonnementer → Invoicor → Si opp abonnement. Abonnementet er aktivt ut inneværende betalingsperiode. Du blir ikke belastet igjen.",
        },
        {
          q: "Hva skjer hvis jeg går ned til Gratis?",
          a: "Fakturaene, kundene og dataene dine blir liggende, og du kan fortsatt se, dele og følge opp alle fakturaene du har laget. Gratisabonnementet inneholder 3 fakturaer totalt, så har du allerede laget 3 eller flere, trenger du et abonnement igjen for å lage nye.",
        },
        {
          q: "Hvordan sletter jeg kontoen min?",
          a: "Gå til «Settings» (Innstillinger) i appen og trykk på «Delete Account» (Slett konto). Dette fjerner kontoen din og alle tilhørende data permanent fra serverne våre. Handlingen kan ikke angres.",
        },
      ],
    },
    {
      id: "multiple-businesses",
      title: "Flere firmaer",
      items: [
        {
          q: "Kan jeg administrere flere firmaer?",
          a: "Ja. Med Pro kan du opprette opptil 3 separate firmaprofiler, hver med eget firmanavn, egen logo, adresse og egne bankopplysninger. Bytt mellom dem når du lager en faktura.",
        },
        {
          q: "Hvordan velger jeg en standard firmaprofil?",
          a: "Gå til delen «Business» (Firma) i fanen «Library» (Bibliotek). Trykk og hold på en profil og velg «Set as Default» (Angi som standard). Standardprofilen er forhåndsvalgt når du lager en ny faktura.",
        },
      ],
    },
    {
      id: "data-privacy",
      title: "Data og personvern",
      items: [
        {
          q: "Hvor lagres dataene mine?",
          a: "Konto- og fakturadataene dine lagres på servere i Tyskland, i EU, under GDPR (personvernforordningen). Nettstedsanalyse på invoicor.com (Google Analytics og PostHog, amerikanske tjenester) kjøres bare hvis du godtar informasjonskapsler.",
        },
        {
          q: "Hvordan beskytter dere dataene mine?",
          a: "Med vanlige sikkerhetstiltak: all kommunikasjon mellom appen og serverne våre er kryptert (HTTPS), passord lagres hashet, innlogging bruker sikre tokener (eller Logg på med Apple eller Google), og tilgangen til serverne våre i Tyskland er begrenset. Ingen nettjeneste kan være helt sikker, men vi jobber for at ingen skal få tilgang til dataene dine uten tillatelse.",
        },
        {
          q: "Selger dere dataene mine?",
          a: "Nei. Vi selger eller leier aldri ut dine data eller kundenes data. Vi deler bare det som trengs med tjenestene som driver Invoicor (vertsleverandøren vår i Tyskland, Apple eller Google hvis du logger på med dem, og abonnementstjenesten vår), som alle står oppført i personvernerklæringen vår.",
          link: { text: "personvernerklæringen", page: "privacy" as const },
        },
        {
          q: "Kan jeg eksportere dataene mine?",
          a: "Du kan når som helst eksportere enkeltfakturaer som PDF. For en full dataeksport kan du kontakte oss på {email}, så gir vi deg dataene dine i et maskinlesbart format, slik GDPR krever.",
        },
      ],
    },
    {
      id: "safety",
      title: "Sikkerhet og svindel",
      items: [
        {
          q: "Jeg har fått en faktura laget med Invoicor. Er den ekte?",
          a: "Invoicor er verktøyet avsenderen brukte til å lage fakturaen; vi skriver ikke fakturaer, sender ikke på vegne av noen og kontrollerer ikke innholdet. Behandle den som en hvilken som helst faktura: sjekk at du kjenner avsenderen, at du har bestilt arbeidet eller varene, og at beløpet stemmer før du betaler.",
        },
        {
          q: "Hvordan betaler jeg en faktura trygt?",
          a: "Sjekk tre ting: avsenderen (et firma du kjenner), beløpet (det dere ble enige om) og betalingsopplysningene (de samme som firmaet har brukt før). Er noe uvanlig, kontakter du avsenderen på et telefonnummer eller en adresse du allerede kjenner, ikke opplysningene på fakturaen.",
        },
        {
          q: "Kontonummeret eller betalingslenken på en faktura er endret. Hva gjør jeg?",
          a: "Ikke betal ennå. Endrede betalingsopplysninger er den vanligste formen for fakturasvindel. Ring avsenderen på et nummer du allerede har, og bekreft de nye opplysningene med dem før du betaler.",
        },
        {
          q: "Håndterer eller beskytter Invoicor betalingen?",
          a: "Nei. Invoicor er ingen betalingstjeneste eller betalingsløsning: betalingene går direkte fra kunden til avsenderen, via avsenderens egen betalingslenke eller bankopplysninger. Invoicor kan ikke holde tilbake, reversere eller refundere en betaling. Dette står forklart i punkt 5 i vilkårene for bruk.",
          link: { text: "vilkårene for bruk", page: "terms" as const },
        },
        {
          q: "Hvordan rapporterer jeg en mistenkelig faktura laget med Invoicor?",
          a: "Send en e-post til {email} med fakturaen og hvordan du mottok den. Vi kan stenge kontoer som sender falske fakturaer. Har du allerede betalt en svindler, må du også kontakte banken din og politiet med en gang.",
        },
      ],
    },
  ],
};
