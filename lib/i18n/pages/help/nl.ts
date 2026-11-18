import type { HelpDict } from "./en";

/** Help center, Dutch (NL). Informal "je", as on the Dutch home page. App labels stay English. */
export const nl: HelpDict = {
  meta: {
    title: "Help en veelgestelde vragen | Invoicor",
    description:
      "Antwoorden op veelgestelde vragen over Invoicor: facturen maken, templates, valuta, btw, versturen en volgen, abonnementen en je gegevens.",
  },
  home: "Home",
  crumb: "Help",
  toc: "Op deze pagina",
  eyebrow: "Support",
  title: "Helpcentrum",
  subtitle:
    "Alles wat je over Invoicor wilt weten. Staat je antwoord er niet bij? Elk bericht wordt door echte mensen gelezen.",
  contactTitle: "Nog een vraag?",
  contactText:
    "Stuur ons een bericht vanuit de app, of mail ons. Elk bericht wordt door echte mensen gelezen; een antwoord kan een paar dagen duren.",
  sections: [
    {
      id: "getting-started",
      title: "Aan de slag",
      items: [
        {
          q: "Hoe maak ik mijn eerste factuur?",
          a: "Open Invoicor en tik op de +-knop in het tabblad “Invoices” (facturen). Kies een klant (of maak een nieuwe aan), voeg je regels toe en tik op “Preview Invoice” (voorbeeld bekijken). Je factuur wordt een pdf die je kunt delen via e-mail, WhatsApp, AirDrop of elke andere app.",
        },
        {
          q: "Moet ik eerst een bedrijfsprofiel aanmaken?",
          a: "Ja. Voordat je je eerste factuur maakt, vraagt Invoicor je om je bedrijfsgegevens in te vullen (bedrijfsnaam, adres, logo, bankgegevens). Dat kost maar een minuutje, en de gegevens worden op elke factuur opnieuw gebruikt.",
        },
        {
          q: "Is Invoicor gratis?",
          a: "Ja. Je kunt gratis tot 3 facturen maken, zonder tijdslimiet en zonder abonnement. Gratis facturen hebben de gratis templates, pdf-export, klantbeheer en statusoverzicht. Er staat nooit een watermerk in de app, bij geen enkel abonnement.",
        },
        {
          q: "Op welke apparaten werkt Invoicor?",
          a: "Invoicor werkt op iPhone en iPad met iOS of iPadOS 17.6 of nieuwer. Een webversie is er nog niet; je gegevens bekijk je via de app. De schermen van de app zijn voorlopig in het Engels, maar je facturen kunnen in het Nederlands en 10 andere talen.",
        },
      ],
    },
    {
      id: "creating-invoices",
      title: "Facturen maken",
      items: [
        {
          q: "Kan ik mijn bedrijfslogo op facturen zetten?",
          a: "Ja. Ga naar je bedrijfsprofiel en tik op “Upload Logo” (logo uploaden). Invoicor ondersteunt PNG, JPG, SVG en WebP. Je logo staat op elke factuur die je verstuurt. Transparantie in PNG blijft behouden.",
        },
        {
          q: "Hoe werken templates?",
          a: "Invoicor heeft 31 professioneel ontworpen factuurtemplates: 21 zijn gratis, 8 horen bij Starter en 2 bij Pro. Hogere abonnementen bevatten ook alle templates van de lagere. Je stelt een standaardtemplate in je bedrijfsprofiel in, of kiest per factuur een andere.",
        },
        {
          q: "Kan ik in verschillende valuta factureren?",
          a: "Ja. Invoicor ondersteunt 38 valuta, waaronder EUR, USD, GBP, JPY, CHF, CAD, AUD, INR en BRL. Stel een standaardvaluta in je bedrijfsprofiel in of wijzig hem per factuur.",
        },
        {
          q: "Kan ik facturen in de taal van mijn klant versturen?",
          a: "Ja. Invoicor ondersteunt 11 factuurtalen. Alle labels op de factuur (Omschrijving, Aantal, Totaal enzovoort) worden automatisch vertaald. Stel een standaardtaal in je bedrijfsprofiel in of kies per factuur.",
        },
        {
          q: "Hoe werkt de btw-berekening?",
          a: "Stel je btw-tarief in je bedrijfsprofiel in (bijvoorbeeld 21% btw in Nederland). Invoicor rekent de btw op elke factuur automatisch uit. Je kiest zelf of je prijzen inclusief of exclusief btw zijn. Je kunt het tarief ook per factuur aanpassen.",
        },
        {
          q: "Kan ik korting geven op een factuur?",
          a: "Ja. Je kunt op elke factuur een korting in procenten of een vast bedrag geven. De korting staat als aparte regel bij de totalen.",
        },
        {
          q: "Hoeveel regels kan een factuur maximaal hebben?",
          a: "Dat hangt af van je abonnement: tot 10 factuurregels per factuur bij Free, 25 bij Starter en 50 bij Pro.",
        },
      ],
    },
    {
      id: "sending-tracking",
      title: "Versturen en volgen",
      items: [
        {
          q: "Hoe verstuur ik een factuur?",
          a: "Tik in het detailscherm van de factuur op “Share” (delen). Je factuur wordt een pdf die je kunt versturen via e-mail, WhatsApp, AirDrop, Berichten of elke andere deel-app op je iPhone.",
        },
        {
          q: "Wat betekenen de factuurstatussen?",
          a: "Draft (concept): opgeslagen maar nog niet verstuurd, je kunt hem nog bewerken. Sent (verstuurd): gedeeld met je klant, niet meer te bewerken. Paid (betaald): de klant heeft betaald, door jou zo gemarkeerd. Overdue (te laat): de vervaldatum is verstreken, nog niet betaald. Cancelled (geannuleerd): vervallen, niet meer actief.",
          list: [
            ["Draft (concept)", "opgeslagen maar nog niet verstuurd, je kunt hem nog bewerken."],
            ["Sent (verstuurd)", "gedeeld met je klant, niet meer te bewerken."],
            ["Paid (betaald)", "de klant heeft betaald, door jou zo gemarkeerd."],
            ["Overdue (te laat)", "de vervaldatum is verstreken, nog niet betaald."],
            ["Cancelled (geannuleerd)", "vervallen, niet meer actief."],
          ],
        },
        {
          q: "Kan ik een factuur bewerken nadat ik hem heb verstuurd?",
          a: "Nee. Zodra een factuur op “Sent” (verstuurd) staat, is hij vergrendeld om het officiële document te bewaren. Moet er iets veranderen? Dupliceer de factuur, pas de kopie aan en verstuur de nieuwe versie.",
        },
        {
          q: "Kan ik een factuur dupliceren?",
          a: "Ja. Tik in het detailscherm van de factuur op “Copy” (kopiëren). Zo maak je een nieuw concept met dezelfde klant, regels en instellingen. Handig voor terugkerend werk.",
        },
      ],
    },
    {
      id: "account-billing",
      title: "Account en betalen",
      items: [
        {
          q: "Hoe werken abonnementen?",
          a: "Invoicor heeft een Starter- en een Pro-abonnement, per maand of per jaar af te rekenen via de Apple App Store. Alle betalingen lopen via Apple: wij zien je betaalgegevens nooit en slaan ze ook niet op. Je beheert of stopt je abonnement in de Instellingen van je iPhone: Instellingen → [je naam] → Abonnementen.",
        },
        {
          q: "Heb ik een betaalkaart nodig voor de gratis proefperiode?",
          a: "Niet voor het gratis abonnement: je eerste 3 facturen vragen geen abonnement en geen betaling. De gratis proefperiodes van Starter en Pro lopen via Apple: je start ze met je Apple ID, en daarvoor is een betaalmethode nodig. Zeg je op voordat de proefperiode afloopt, dan betaal je niets. Invoicor ziet je kaart nooit.",
        },
        {
          q: "Kan ik mijn abonnement opzeggen?",
          a: "Ja, wanneer je wilt. Ga op je iPhone naar Instellingen → [je naam] → Abonnementen → Invoicor → Annuleer abonnement. Je abonnement blijft actief tot het einde van de huidige periode. Daarna betaal je niets meer.",
        },
        {
          q: "Wat gebeurt er als ik terugga naar Free?",
          a: "Je bestaande facturen, klanten en gegevens blijven bewaard, en je kunt elke factuur die je hebt gemaakt nog bekijken, delen en volgen. Het gratis abonnement geeft 3 facturen in totaal. Heb je er al 3 of meer gemaakt, dan heb je weer een abonnement nodig om nieuwe te maken.",
        },
        {
          q: "Hoe verwijder ik mijn account?",
          a: "Ga in de app naar Settings (instellingen) en tik op “Delete Account” (account verwijderen). Daarmee worden je account en alle bijbehorende gegevens definitief van onze servers verwijderd. Dit kun je niet ongedaan maken.",
        },
      ],
    },
    {
      id: "multiple-businesses",
      title: "Meerdere bedrijven",
      items: [
        {
          q: "Kan ik meerdere bedrijven beheren?",
          a: "Ja. Met Pro maak je tot 3 aparte bedrijfsprofielen aan, elk met een eigen bedrijfsnaam, logo, adres en bankgegevens. Bij het maken van een factuur kies je welk bedrijf je gebruikt.",
        },
        {
          q: "Hoe stel ik een standaard bedrijfsprofiel in?",
          a: "Ga in het tabblad “Library” (bibliotheek) naar het onderdeel “Business” (bedrijf). Houd een profiel ingedrukt en kies “Set as Default” (als standaard instellen). Het standaardprofiel is al geselecteerd als je een nieuwe factuur maakt.",
        },
      ],
    },
    {
      id: "data-privacy",
      title: "Gegevens en privacy",
      items: [
        {
          q: "Waar worden mijn gegevens opgeslagen?",
          a: "Je account- en factuurgegevens staan op servers in Duitsland, in de Europese Unie, onder de AVG (GDPR). Website-analytics op invoicor.com (Google Analytics en PostHog, Amerikaanse diensten) draaien alleen als je cookies accepteert.",
        },
        {
          q: "Hoe beschermen jullie mijn gegevens?",
          a: "Met gangbare beveiligingsmaatregelen: elke verbinding tussen de app en onze servers is versleuteld (HTTPS), wachtwoorden worden gehasht opgeslagen, inloggen gaat met beveiligde tokens (of met Inloggen met Apple of Google), en de toegang tot onze servers in Duitsland is beperkt. Geen enkele online dienst is volledig veilig, maar we doen ons best om te voorkomen dat iemand zonder toestemming bij je gegevens komt.",
        },
        {
          q: "Verkopen jullie mijn gegevens?",
          a: "Nee. We verkopen of verhuren nooit jouw gegevens of die van je klanten. We delen alleen wat nodig is met de diensten waarop Invoicor draait (onze hostingprovider in Duitsland, Apple of Google als je daarmee inlogt, en onze abonnementsdienst). Ze staan allemaal in ons privacybeleid.",
          link: { text: "privacybeleid", page: "privacy" },
        },
        {
          q: "Kan ik mijn gegevens exporteren?",
          a: "Je kunt losse facturen altijd als pdf exporteren. Wil je al je gegevens? Mail ons op {email}, dan sturen we je gegevens in een machineleesbaar formaat, zoals de AVG voorschrijft.",
        },
      ],
    },
    {
      id: "safety",
      title: "Veiligheid en oplichting",
      items: [
        {
          q: "Ik heb een factuur ontvangen die met Invoicor is gemaakt. Is die echt?",
          a: "Invoicor is het programma waarmee de afzender de factuur heeft gemaakt; wij schrijven geen facturen, versturen ze niet namens iemand en controleren de inhoud niet. Behandel hem zoals elke factuur: controleer of je de afzender kent, of je het werk of de spullen echt hebt besteld en of het bedrag klopt voordat je betaalt.",
        },
        {
          q: "Hoe betaal ik een factuur veilig?",
          a: "Controleer drie dingen: de afzender (een bedrijf dat je kent), het bedrag (klopt met wat je hebt afgesproken) en de betaalgegevens (dezelfde als die dit bedrijf eerder gebruikte). Is er iets vreemd? Neem contact op met de afzender via een telefoonnummer of adres dat je al kende, niet via de gegevens op de factuur.",
        },
        {
          q: "Het rekeningnummer of de betaallink op een factuur is veranderd. Wat moet ik doen?",
          a: "Betaal nog niet. Gewijzigde betaalgegevens zijn de meest voorkomende factuurfraude. Bel de afzender op een nummer dat je al had en laat de nieuwe gegevens bevestigen voordat je betaalt.",
        },
        {
          q: "Regelt of beschermt Invoicor de betaling?",
          a: "Nee. Invoicor is geen betaaldienst of betaalplatform: betalingen gaan rechtstreeks van de klant naar de afzender, via de eigen betaallink of bankgegevens van de afzender. Invoicor kan een betaling niet vasthouden, terugdraaien of terugbetalen. Dit staat in artikel 5 van onze algemene voorwaarden.",
          link: { text: "algemene voorwaarden", page: "terms" },
        },
        {
          q: "Hoe meld ik een verdachte factuur die met Invoicor is gemaakt?",
          a: "Mail {email} met de factuur en hoe je hem hebt ontvangen. We kunnen accounts blokkeren die frauduleuze facturen versturen. Heb je al aan een oplichter betaald? Neem dan ook meteen contact op met je bank en de politie.",
        },
      ],
    },
  ],
};
