import type { HelpDict } from "./en";

/** Help center, Danish (Denmark). "du", as on the Danish home page. App labels stay in English. */
export const da: HelpDict = {
  meta: {
    title: "Hjælp og ofte stillede spørgsmål | Invoicor",
    description:
      "Svar på de mest stillede spørgsmål om Invoicor: fakturaer, skabeloner, valutaer, moms, afsendelse og status, abonnementer og dine data.",
  },
  home: "Forside",
  crumb: "Hjælp",
  toc: "På denne side",
  eyebrow: "Support",
  title: "Hjælp",
  subtitle:
    "Alt, du skal vide om Invoicor. Finder du ikke dit svar? Rigtige mennesker læser hver eneste besked.",
  contactTitle: "Har du stadig et spørgsmål?",
  contactText:
    "Skriv til os inde fra appen, eller send os en e-mail. Rigtige mennesker læser hver besked; der kan gå et par dage, før du får svar.",
  sections: [
    {
      id: "getting-started",
      title: "Kom godt i gang",
      items: [
        {
          q: "Hvordan laver jeg min første faktura?",
          a: "Åbn Invoicor, og tryk på +-knappen på fanen “Invoices” (fakturaer). Vælg en kunde (eller opret en ny), tilføj dine linjer, og tryk på “Preview Invoice” (vis faktura). Fakturaen bliver lavet som en pdf, som du kan dele via e-mail, WhatsApp, AirDrop eller en hvilken som helst anden app.",
        },
        {
          q: "Skal jeg oprette en virksomhedsprofil først?",
          a: "Ja. Før du laver din første faktura, beder Invoicor dig om at tilføje dine virksomhedsoplysninger (firmanavn, adresse, logo, bankoplysninger). Det tager kun et minut, og oplysningerne bruges igen på hver faktura, du laver.",
        },
        {
          q: "Er Invoicor gratis?",
          a: "Ja. Du kan lave op til 3 fakturaer gratis, uden tidsbegrænsning og uden abonnement. Gratis fakturaer omfatter de gratis skabeloner, pdf-eksport, kundestyring og statusoverblik. Der er intet vandmærke i appen, uanset abonnement.",
        },
        {
          q: "Hvilke enheder understøttes?",
          a: "Invoicor kører på iPhone og iPad med iOS eller iPadOS 17.6 eller nyere. Der findes endnu ikke en webversion; du får adgang til dine data via appen. Appens skærme er indtil videre på engelsk, men dine fakturaer kan være på dansk og 10 andre sprog.",
        },
      ],
    },
    {
      id: "creating-invoices",
      title: "Lav fakturaer",
      items: [
        {
          q: "Kan jeg sætte mit firmalogo på fakturaerne?",
          a: "Ja. Gå til din virksomhedsprofil, og tryk på “Upload Logo” (upload logo). Invoicor understøtter PNG, JPG, SVG og WebP. Dit logo vises på hver faktura, du sender. Gennemsigtighed i PNG bevares.",
        },
        {
          q: "Hvordan fungerer skabelonerne?",
          a: "Invoicor har 31 professionelt designede fakturaskabeloner: 21 er gratis, 8 følger med Starter og 2 med Pro. De højere abonnementer indeholder alle skabeloner fra de lavere. Du kan vælge en standardskabelon i din virksomhedsprofil eller en anden skabelon til hver faktura.",
        },
        {
          q: "Kan jeg fakturere i forskellige valutaer?",
          a: "Ja. Invoicor understøtter 38 valutaer, blandt andet DKK, EUR, USD, GBP, SEK, NOK, CHF, JPY og INR. Vælg en standardvaluta i din virksomhedsprofil, eller skift den for hver faktura.",
        },
        {
          q: "Kan jeg sende fakturaer på min kundes sprog?",
          a: "Ja. Invoicor understøtter 11 fakturasprog. Alle betegnelser på fakturaen (Vare, Antal, I alt osv.) oversættes automatisk. Vælg et standardsprog i din virksomhedsprofil, eller vælg for hver faktura.",
        },
        {
          q: "Hvordan beregnes momsen?",
          a: "Angiv din momssats i din virksomhedsprofil (f.eks. 25 % dansk moms). Invoicor beregner automatisk momsen på hver faktura. Du kan vælge mellem priser inkl. moms og priser ekskl. moms. Du kan også ændre momssatsen for den enkelte faktura.",
        },
        {
          q: "Kan jeg give rabat på en faktura?",
          a: "Ja. Du kan give en rabat i procent eller et fast beløb på enhver faktura. Rabatten vises som en separat linje i totalerne.",
        },
        {
          q: "Hvor mange linjer kan en faktura have?",
          a: "Det afhænger af dit abonnement: op til 10 linjer pr. faktura med Free, 25 med Starter og 50 med Pro.",
        },
      ],
    },
    {
      id: "sending-tracking",
      title: "Afsendelse og status",
      items: [
        {
          q: "Hvordan sender jeg en faktura?",
          a: "Tryk på “Share” (del) på fakturaens detaljeskærm. Fakturaen bliver lavet som en pdf, og du kan sende den via e-mail, WhatsApp, AirDrop, Beskeder eller en hvilken som helst anden app til deling på din iPhone.",
        },
        {
          q: "Hvad betyder fakturastatusserne?",
          a: "Draft (kladde) — gemt, men ikke sendt endnu; du kan stadig redigere den. Sent (sendt) — delt med din kunde og låst for redigering. Paid (betalt) — kunden har betalt, markeret af dig. Overdue (forfalden) — forfaldsdatoen er overskredet, og den er stadig ikke betalt. Cancelled (annulleret) — annulleret og ikke længere aktiv.",
          list: [
            ["Draft (kladde)", "gemt, men ikke sendt endnu; du kan stadig redigere den."],
            ["Sent (sendt)", "delt med din kunde og låst for redigering."],
            ["Paid (betalt)", "kunden har betalt, markeret af dig."],
            ["Overdue (forfalden)", "forfaldsdatoen er overskredet, og den er stadig ikke betalt."],
            ["Cancelled (annulleret)", "annulleret og ikke længere aktiv."],
          ] as Array<[string, string]>,
        },
        {
          q: "Kan jeg redigere en faktura, efter den er sendt?",
          a: "Nej. Når en faktura er markeret som “Sent”, låses den, så den juridiske dokumentation bevares. Skal du ændre noget, så kopiér fakturaen, ret kopien, og send den opdaterede version.",
        },
        {
          q: "Kan jeg kopiere en faktura?",
          a: "Ja. Tryk på knappen “Copy” (kopiér) på fakturaens detaljeskærm. Så oprettes en ny kladde med samme kunde, linjer og indstillinger. Praktisk til tilbagevendende opgaver.",
        },
      ],
    },
    {
      id: "account-billing",
      title: "Konto og betaling",
      items: [
        {
          q: "Hvordan fungerer abonnementerne?",
          a: "Invoicor tilbyder abonnementerne Starter og Pro, som betales månedligt eller årligt via Apples App Store. Al betaling håndteres af Apple — vi ser eller gemmer aldrig dine betalingsoplysninger. Du kan administrere eller opsige dit abonnement på din iPhone under Indstillinger → [dit navn] → Abonnementer.",
        },
        {
          q: "Skal jeg bruge et kort til den gratis prøveperiode?",
          a: "Ikke til det gratis abonnement: dine første 3 fakturaer kræver hverken abonnement eller betaling. De gratis prøveperioder for Starter og Pro kører via Apple: du starter dem med dit Apple-id, som kræver en betalingsmetode. Opsiger du, før prøveperioden slutter, betaler du ingenting. Invoicor ser aldrig dit kort.",
        },
        {
          q: "Kan jeg opsige mit abonnement?",
          a: "Ja, når som helst. Gå til Indstillinger på din iPhone → [dit navn] → Abonnementer → Invoicor → Annuller abonnement. Dit abonnement er aktivt til slutningen af den nuværende betalingsperiode. Du bliver ikke trukket igen.",
        },
        {
          q: "Hvad sker der, hvis jeg skifter til Free?",
          a: "Dine eksisterende fakturaer, kunder og data forbliver uændrede, og du kan stadig se, dele og følge hver faktura, du har lavet. Det gratis abonnement omfatter 3 fakturaer i alt, så har du allerede lavet 3 eller flere, skal du have et abonnement igen for at lave nye.",
        },
        {
          q: "Hvordan sletter jeg min konto?",
          a: "Gå til Settings (indstillinger) i appen, og tryk på “Delete Account” (slet konto). Det fjerner permanent din konto og alle tilknyttede data fra vores servere. Handlingen kan ikke fortrydes.",
        },
      ],
    },
    {
      id: "multiple-businesses",
      title: "Flere virksomheder",
      items: [
        {
          q: "Kan jeg administrere flere virksomheder?",
          a: "Ja. Med Pro kan du oprette op til 3 separate virksomhedsprofiler, hver med sit eget firmanavn, logo, adresse og bankoplysninger. Skift mellem dem, når du laver en faktura.",
        },
        {
          q: "Hvordan vælger jeg en standardprofil?",
          a: "Gå til sektionen “Business” (virksomhed) på fanen “Library” (bibliotek). Tryk længe på en profil, og vælg “Set as Default” (angiv som standard). Standardprofilen er valgt på forhånd, når du laver en ny faktura.",
        },
      ],
    },
    {
      id: "data-privacy",
      title: "Data og privatliv",
      items: [
        {
          q: "Hvor bliver mine data gemt?",
          a: "Dine konto- og fakturadata gemmes på servere i Tyskland, i EU, under GDPR. Statistik på hjemmesiden invoicor.com (Google Analytics og PostHog, amerikanske tjenester) kører kun, hvis du accepterer cookies.",
        },
        {
          q: "Hvordan beskytter I mine data?",
          a: "Med almindelige sikkerhedsforanstaltninger: al forbindelse mellem appen og vores servere er krypteret (HTTPS), adgangskoder gemmes hashet, login sker med sikre tokens (eller med Log ind med Apple eller Google), og adgangen til vores servere i Tyskland er begrænset. Ingen onlinetjeneste kan være helt sikker, men vi arbejder for at forhindre, at dine data tilgås uden tilladelse.",
        },
        {
          q: "Sælger I mine data?",
          a: "Nej. Vi sælger eller udlejer aldrig dine data eller dine kunders data. Vi deler kun det nødvendige med de tjenester, der driver Invoicor (vores hostingudbyder i Tyskland, Apple eller Google, hvis du logger ind med dem, og vores abonnementstjeneste), som alle står i vores privatlivspolitik.",
          link: { text: "privatlivspolitik", page: "privacy" as const },
        },
        {
          q: "Kan jeg eksportere mine data?",
          a: "Du kan til enhver tid eksportere enkelte fakturaer som pdf. Vil du have en fuld eksport af dine data, så kontakt os på {email}, og vi sender dine data i et maskinlæsbart format, som GDPR kræver.",
        },
      ],
    },
    {
      id: "safety",
      title: "Sikkerhed og svindel",
      items: [
        {
          q: "Jeg har fået en faktura lavet med Invoicor. Er den ægte?",
          a: "Invoicor er det værktøj, afsenderen brugte til at lave fakturaen; vi skriver ikke fakturaer, sender ikke på andres vegne og kontrollerer ikke indholdet. Behandl den som enhver anden faktura: tjek, at du kender afsenderen, at du har bestilt arbejdet eller varerne, og at beløbet er korrekt, før du betaler.",
        },
        {
          q: "Hvordan betaler jeg en faktura sikkert?",
          a: "Tjek tre ting: afsenderen (en virksomhed, du kender), beløbet (svarer til det aftalte) og betalingsoplysningerne (de samme, som virksomheden har brugt før). Er der noget usædvanligt, så kontakt afsenderen via et telefonnummer eller en adresse, du allerede kender, ikke via oplysningerne på fakturaen.",
        },
        {
          q: "Bankoplysningerne eller betalingslinket på en faktura er ændret. Hvad gør jeg?",
          a: "Betal ikke endnu. Ændrede betalingsoplysninger er den mest almindelige fakturasvindel. Ring til afsenderen på et nummer, du allerede har, og bekræft de nye oplysninger med dem, før du betaler.",
        },
        {
          q: "Håndterer eller beskytter Invoicor betalingen?",
          a: "Nej. Invoicor er ikke en betalingstjeneste eller betalingsgateway: betalinger går direkte fra kunden til afsenderen via afsenderens eget betalingslink eller bankoplysninger. Invoicor kan ikke holde, tilbageføre eller refundere en betaling. Det står i afsnit 5 i vores servicevilkår.",
          link: { text: "servicevilkår", page: "terms" as const },
        },
        {
          q: "Hvordan anmelder jeg en mistænkelig faktura lavet med Invoicor?",
          a: "Send en e-mail til {email} med fakturaen og oplysninger om, hvordan du modtog den. Vi kan suspendere konti, der sender svigagtige fakturaer. Har du allerede betalt en svindler, så kontakt også din bank og politiet med det samme.",
        },
      ],
    },
  ],
};
