import type { HelpDict } from "./en";

/** Help center, Swedish (Sweden). "du", as on the Swedish home page. App labels stay in English (the app's screens are English). */
export const sv: HelpDict = {
  meta: {
    title: "Hjälp och vanliga frågor | Invoicor",
    description:
      "Svar på vanliga frågor om Invoicor: skapa fakturor, mallar, valutor, moms, skicka och följa upp, prenumerationer och dina uppgifter.",
  },
  home: "Start",
  crumb: "Hjälp",
  toc: "På den här sidan",
  eyebrow: "Support",
  title: "Hjälpcenter",
  subtitle:
    "Allt du behöver veta om Invoicor. Hittar du inte svaret? Riktiga människor läser varje meddelande.",
  contactTitle: "Har du fortfarande en fråga?",
  contactText:
    "Skicka ett meddelande direkt i appen eller mejla oss. Riktiga människor läser varje meddelande; det kan ta några dagar innan du får svar.",
  sections: [
    {
      id: "getting-started",
      title: "Kom igång",
      items: [
        {
          q: "Hur skapar jag min första faktura?",
          a: "Öppna Invoicor och tryck på +-knappen på fliken ”Invoices” (Fakturor). Välj en kund (eller lägg till en ny), lägg till dina rader och tryck på ”Preview Invoice” (Förhandsgranska faktura). Fakturan skapas som en pdf som du kan dela via e-post, WhatsApp, AirDrop eller vilken annan app som helst.",
        },
        {
          q: "Måste jag lägga upp en företagsprofil först?",
          a: "Ja. Innan du skapar din första faktura ber Invoicor dig att fylla i dina företagsuppgifter (företagsnamn, adress, logga, bankuppgifter). Det tar bara en minut, och uppgifterna återanvänds på varje faktura du skapar.",
        },
        {
          q: "Är Invoicor gratis?",
          a: "Ja. Du kan skapa upp till 3 fakturor gratis, utan tidsgräns och utan prenumeration. Gratisfakturorna har tillgång till gratismallarna, pdf-export, kundregister och statusuppföljning. Appen sätter ingen vattenstämpel, oavsett plan.",
        },
        {
          q: "Vilka enheter stöds?",
          a: "Invoicor fungerar på iPhone och iPad med iOS eller iPadOS 17.6 eller senare. Det finns ingen webbversion än; du når dina uppgifter via appen. Appens skärmar är på engelska tills vidare, men fakturorna kan vara på svenska och 10 andra språk.",
        },
      ],
    },
    {
      id: "creating-invoices",
      title: "Skapa fakturor",
      items: [
        {
          q: "Kan jag lägga till min företagslogga på fakturorna?",
          a: "Ja. Gå till din företagsprofil och tryck på ”Upload Logo” (Ladda upp logga). Invoicor stöder formaten PNG, JPG, SVG och WebP. Loggan syns på varje faktura du skickar, och genomskinlighet i PNG behålls.",
        },
        {
          q: "Hur fungerar mallarna?",
          a: "Invoicor har 31 professionellt designade fakturamallar: 21 är gratis, 8 ingår i Starter och 2 i Pro. Högre planer innehåller alla mallar från de lägre. Du kan välja en standardmall i din företagsprofil eller en annan mall för varje faktura.",
        },
        {
          q: "Kan jag fakturera i olika valutor?",
          a: "Ja. Invoicor stöder 38 valutor, bland annat USD, EUR, GBP, JPY, CHF, CAD, AUD, INR och BRL. Välj en standardvaluta i din företagsprofil eller ändra den per faktura.",
        },
        {
          q: "Kan jag skicka fakturor på kundens språk?",
          a: "Ja. Invoicor stöder 11 fakturaspråk. Alla rubriker på fakturan (artikel, antal, totalt osv.) översätts automatiskt. Välj ett standardspråk i din företagsprofil eller välj per faktura.",
        },
        {
          q: "Hur fungerar momsberäkningen?",
          a: "Ange din momssats i företagsprofilen (t.ex. 25 % moms i Sverige). Invoicor räknar automatiskt ut momsen på varje faktura. Du väljer om priserna ska vara inklusive eller exklusive moms, och du kan ändra momssatsen per faktura.",
        },
        {
          q: "Kan jag lägga till rabatt på en faktura?",
          a: "Ja. Du kan ge rabatt i procent eller med ett fast belopp på vilken faktura som helst. Rabatten visas som en egen rad bland summorna.",
        },
        {
          q: "Hur många rader får en faktura ha?",
          a: "Det beror på din plan: upp till 10 rader per faktura med Free, 25 med Starter och 50 med Pro.",
        },
      ],
    },
    {
      id: "sending-tracking",
      title: "Skicka och följa upp",
      items: [
        {
          q: "Hur skickar jag en faktura?",
          a: "Tryck på ”Share” (Dela) på fakturans detaljvy. Fakturan skapas som en pdf och du kan skicka den via e-post, WhatsApp, AirDrop, Meddelanden eller vilken annan delningsapp som helst på din iPhone.",
        },
        {
          q: "Vad betyder fakturastatusarna?",
          a: "Draft (Utkast): sparad men inte skickad än, du kan fortfarande redigera den. Sent (Skickad): delad med kunden och låst för redigering. Paid (Betald): kunden har betalat, markerad av dig. Overdue (Förfallen): förfallodagen har passerat och fakturan är fortfarande obetald. Cancelled (Makulerad): annullerad och inte längre aktiv.",
          list: [
            ["Draft (Utkast)", "sparad men inte skickad än, du kan fortfarande redigera den."],
            ["Sent (Skickad)", "delad med kunden och låst för redigering."],
            ["Paid (Betald)", "kunden har betalat, markerad av dig."],
            [
              "Overdue (Förfallen)",
              "förfallodagen har passerat och fakturan är fortfarande obetald.",
            ],
            ["Cancelled (Makulerad)", "annullerad och inte längre aktiv."],
          ],
        },
        {
          q: "Kan jag ändra en faktura efter att jag har skickat den?",
          a: "Nej. När en faktura är markerad som ”Sent” låses den för att bevara det juridiska underlaget. Behöver du ändra något kopierar du fakturan, redigerar kopian och skickar den uppdaterade versionen.",
        },
        {
          q: "Kan jag kopiera en faktura?",
          a: "Ja. Tryck på knappen ”Copy” (Kopiera) på fakturans detaljvy. Då skapas ett nytt utkast med samma kund, rader och inställningar. Praktiskt för återkommande uppdrag.",
        },
      ],
    },
    {
      id: "account-billing",
      title: "Konto och betalning",
      items: [
        {
          q: "Hur fungerar prenumerationerna?",
          a: "Invoicor har planerna Starter och Pro, som betalas per månad eller per år via Apples App Store. All betalning sköts av Apple – vi ser eller sparar aldrig dina betalningsuppgifter. Du hanterar eller avslutar din prenumeration på din iPhone under Inställningar → [ditt namn] → Prenumerationer.",
        },
        {
          q: "Behöver jag ett kort för gratisperioden?",
          a: "Inte för gratisplanen: dina första 3 fakturor kräver varken prenumeration eller betalning. Gratisperioderna för Starter och Pro går via Apple: du startar dem med ditt Apple-ID, som behöver en betalningsmetod. Avslutar du innan gratisperioden tar slut betalar du ingenting. Invoicor ser aldrig ditt kort.",
        },
        {
          q: "Kan jag avsluta min prenumeration?",
          a: "Ja, när som helst. Gå till Inställningar på din iPhone → [ditt namn] → Prenumerationer → Invoicor → Avbryt prenumeration. Din plan gäller till slutet av den aktuella betalningsperioden, och du debiteras inte igen.",
        },
        {
          q: "Vad händer om jag går ner till Free?",
          a: "Dina befintliga fakturor, kunder och uppgifter finns kvar, och du kan fortfarande visa, dela och följa upp varje faktura du har skapat. Gratisplanen omfattar 3 fakturor totalt, så har du redan skapat 3 eller fler behöver du en plan igen för att skapa nya.",
        },
        {
          q: "Hur raderar jag mitt konto?",
          a: "Gå till Settings (Inställningar) i appen och tryck på ”Delete Account” (Radera konto). Då tas ditt konto och alla tillhörande uppgifter bort permanent från våra servrar. Det går inte att ångra.",
        },
      ],
    },
    {
      id: "multiple-businesses",
      title: "Flera företag",
      items: [
        {
          q: "Kan jag hantera flera företag?",
          a: "Ja. Med Pro kan du skapa upp till 3 separata företagsprofiler, var och en med eget företagsnamn, logga, adress och bankuppgifter. Du växlar mellan dem när du skapar en faktura.",
        },
        {
          q: "Hur väljer jag en standardprofil för företaget?",
          a: "Gå till avsnittet ”Business” på fliken ”Library” (Bibliotek). Tryck länge på en profil och välj ”Set as Default” (Ange som standard). Standardprofilen är förvald när du skapar en ny faktura.",
        },
      ],
    },
    {
      id: "data-privacy",
      title: "Data och integritet",
      items: [
        {
          q: "Var lagras mina uppgifter?",
          a: "Dina konto- och fakturauppgifter lagras på servrar i Tyskland, inom Europeiska unionen, enligt GDPR. Webbstatistiken på invoicor.com (Google Analytics och PostHog, amerikanska tjänster) körs bara om du godkänner cookies.",
        },
        {
          q: "Hur skyddar ni mina uppgifter?",
          a: "Med vedertagna skyddsåtgärder: all trafik mellan appen och våra servrar är krypterad (HTTPS), lösenord sparas hashade, inloggningen använder säkra token (eller Logga in med Apple eller Google), och åtkomsten till våra servrar i Tyskland är begränsad. Ingen onlinetjänst kan vara helt säker, men vi arbetar för att ingen ska komma åt dina uppgifter utan tillstånd.",
        },
        {
          q: "Säljer ni mina uppgifter?",
          a: "Nej. Vi säljer eller hyr aldrig ut dina eller dina kunders uppgifter. Vi delar bara det som behövs med de tjänster som driver Invoicor (vår hostingleverantör i Tyskland, Apple eller Google om du loggar in med dem, och vår prenumerationstjänst), och alla listas i vår integritetspolicy.",
          link: { text: "integritetspolicy", page: "privacy" },
        },
        {
          q: "Kan jag exportera mina uppgifter?",
          a: "Du kan när som helst exportera enskilda fakturor som pdf. För en fullständig export av dina uppgifter kontaktar du oss på {email}, så skickar vi dem i ett maskinläsbart format enligt GDPR.",
        },
      ],
    },
    {
      id: "safety",
      title: "Säkerhet och bedrägerier",
      items: [
        {
          q: "Jag har fått en faktura som är gjord med Invoicor. Är den äkta?",
          a: "Invoicor är verktyget som avsändaren använde för att göra fakturan; vi skriver inte fakturor, skickar dem inte åt någon och kontrollerar inte innehållet. Behandla den som vilken faktura som helst: kontrollera att du känner avsändaren, att du har beställt arbetet eller varorna och att beloppet stämmer innan du betalar.",
        },
        {
          q: "Hur betalar jag en faktura på ett säkert sätt?",
          a: "Kontrollera tre saker: avsändaren (ett företag du känner), beloppet (stämmer med det ni kom överens om) och betalningsuppgifterna (samma som företaget har använt tidigare). Om något verkar konstigt, kontakta avsändaren via ett telefonnummer eller en adress du redan har, inte uppgifterna på fakturan.",
        },
        {
          q: "Bankuppgifterna eller betalningslänken på en faktura har ändrats. Vad ska jag göra?",
          a: "Betala inte än. Ändrade betalningsuppgifter är det vanligaste fakturabedrägeriet. Ring avsändaren på ett nummer du redan har och bekräfta de nya uppgifterna med dem innan du betalar.",
        },
        {
          q: "Hanterar eller skyddar Invoicor betalningen?",
          a: "Nej. Invoicor är ingen betaltjänst eller betalningslösning: betalningar går direkt från kunden till avsändaren, via avsändarens egen betalningslänk eller bankuppgifter. Invoicor kan inte hålla inne, återföra eller återbetala en betalning. Det förklaras i avsnitt 5 i våra användarvillkor.",
          link: { text: "användarvillkor", page: "terms" },
        },
        {
          q: "Hur anmäler jag en misstänkt faktura som är gjord med Invoicor?",
          a: "Mejla {email} med fakturan och hur du fick den. Vi kan stänga av konton som skickar bedrägliga fakturor. Har du redan betalat till en bedragare, kontakta också din bank och polisen direkt.",
        },
      ],
    },
  ],
};
