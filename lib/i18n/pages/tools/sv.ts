import type { ToolsDict } from "./en";

/** Free tools, Swedish (Sweden). "du", as on the Swedish home page and generator. */
export const sv: ToolsDict = {
  common: {
    navLabel: "Gratis verktyg",
    home: "Start",
    eyebrow: "Gratis verktyg · ingen registrering",
    howEyebrow: "Så funkar det",
    howTitle: "Uträkningen, enkelt förklarad",
    faqEyebrow: "Vanliga frågor",
    faqTitle: "Frågor om verktyget",
    moreTools: "Fler gratis verktyg",
    closing: {
      title: "Fakturerar du varje vecka?",
      gradient: "Gör det i appen.",
      text: "Sparade kunder och artiklar, varje faktura med sin status och en snygg pdf direkt från din iPhone. {n} fakturor gratis.",
    },
    currency: "Valuta",
  },

  hub: {
    meta: {
      title: "Gratis verktyg: faktura, momsräknare, timpris | Invoicor",
      description:
        "Gratis verktyg för frilansare och småföretag: skapa faktura online, momsräknare, räkna timmar och räkna ut timpris. Ingen registrering.",
    },
    crumb: "Gratis verktyg",
    eyebrow: "Gratis · ingen registrering · inget att installera",
    title: "Gratis verktyg för att få betalt",
    subtitle:
      "Skapa en faktura, räkna ut momsen rätt, summera dina timmar och sätt ett timpris som täcker dina kostnader. Allt körs i din webbläsare.",
    closing: {
      title: "Allt det här, i din iPhone.",
      gradient: "{n} fakturor gratis.",
      text: "Sparade kunder och artiklar, moms och summor uträknade åt dig, och varje faktura med sin status.",
    },
  },

  tools: {
    generator: {
      name: "Skapa faktura gratis",
      short: "Fyll i en faktura online och ladda ner en pdf. 21 mallar, ingen registrering.",
    },
    vat: {
      name: "Momsräknare",
      short: "Lägg på moms eller räkna bort den, med normalskattesatsen i 19 länder.",
    },
    hours: {
      name: "Timräknare",
      short: "Summera veckans arbetspass och gör om 1:45 till de 1,75 timmar fakturan behöver.",
    },
    rate: {
      name: "Räkna ut timpris",
      short: "Räkna baklänges från inkomsten du vill ha till timpriset och dagpriset du behöver.",
    },
  },

  vat: {
    meta: {
      title: "Momsräknare: räkna ut moms online gratis | Invoicor",
      description:
        "Gratis momsräknare: räkna ut moms, lägg på 25 % moms eller räkna bort momsen från ett pris inklusive moms. Satser för 19 länder, direkt i webbläsaren.",
    },
    title: "Momsräknare",
    subtitle:
      "Räkna ut moms: lägg på moms på ett pris exkl. moms eller räkna bort den från ett pris inkl. moms, med normalskattesatsen i 19 länder. Direkt, gratis, och inget lämnar din webbläsare.",
    defaultCountry: "SE",
    ui: {
      label: "Momsräknare",
      modeAria: "Vad är beloppet?",
      add: "Lägg på moms (beloppet är exkl. moms)",
      remove: "Räkna bort moms (beloppet är inkl. moms)",
      amountNet: "Belopp exkl. moms",
      amountGross: "Belopp inkl. moms",
      country: "Land (normalskattesats)",
      custom: "Egen momssats",
      gst: "GST",
      rate: "Momssats",
      net: "Exkl. moms",
      vatRow: "Moms {rate} %",
      gross: "Inkl. moms",
      cta: "Lägg det på en faktura",
      invoiceItem: "Vara eller tjänst",
    },
    sections: [
      {
        title: "Lägga på moms (exkl. till inkl. moms)",
        paragraphs: [
          "Moms = belopp exkl. moms × momssats ÷ 100, och belopp inkl. moms = belopp exkl. moms + moms. Ett jobb för 4 785,50 kr med 25 % moms ger 1 196,38 kr i moms och totalt 5 981,88 kr. Beloppen avrundas till hela ören, uppåt vid jämnt halvt, som på en faktura.",
        ],
      },
      {
        title: "Räkna bort moms (inkl. till exkl. moms)",
        paragraphs: [
          "Belopp exkl. moms = belopp inkl. moms ÷ (1 + momssats ÷ 100). Det är här de flesta räknar fel: drar du av momssatsen från beloppet inklusive moms blir det för lite. Vid 25 % moms är 1 250 kr inkl. moms 1 000 kr exkl. moms, inte 937,50 kr. Momsen är alltså 20 % av priset inklusive moms.",
          "Använd det när en leverantör anger pris inklusive moms, eller när du sätter ett pris till privatpersoner och vill veta hur mycket av det som är ditt.",
        ],
      },
      {
        title: "Normalskattesats och reducerade satser",
        paragraphs: [
          "Landslistan använder varje lands normalskattesats, i Sverige 25 %. Livsmedel, böcker, persontransporter och vissa tjänster har ofta en lägre momssats, och vissa tjänster är momsfria. Är du osäker, kolla på Skatteverkets webbplats eller fråga din redovisningskonsult, och skriv sedan in momssatsen själv.",
        ],
      },
    ],
    faqs: [
      {
        question: "Hur räknar jag ut moms på ett pris?",
        answer:
          "Multiplicera priset exkl. moms med momssatsen och lägg till resultatet. För 1 000 kr med 25 % moms: 1 000 × 0,25 = 250 kr i moms, så priset inkl. moms är 1 250 kr. Momsräknaren gör det åt dig och avrundar till hela ören.",
      },
      {
        question: "Hur räknar jag bort momsen från ett pris inklusive moms?",
        answer:
          "Dela priset inkl. moms med 1 plus momssatsen, i stället för att dra av momssatsen. För 1 250 kr inkl. 25 % moms: 1 250 ÷ 1,25 = 1 000 kr exkl. moms, och momsen är 250 kr. Att dra av 25 % från 1 250 kr ger 937,50 kr, och det är fel.",
      },
      {
        question: "Vilka momssatser finns i momsräknaren?",
        answer:
          "Normalskattesatserna i 16 europeiska länder och GST i Australien, Kanada och Nya Zeeland, per november 2026. Många länder har också reducerade satser för vissa varor och tjänster; i Sverige finns 12 % och 6 % utöver 25 %. Skriv in momssatsen själv om din är en annan.",
      },
      {
        question: "Ska fakturan visa priser med eller utan moms?",
        answer:
          "Företagskunder förväntar sig oftast priser exkl. moms med momsen tillagd längst ner; privatpersoner förväntar sig priset de betalar, inklusive moms. Oavsett vilket ska en faktura med moms visa beloppet exkl. moms, momssatsen, momsbeloppet och summan att betala. I Invoicor-appen och den gratis fakturageneratorn väljer du för varje faktura om priserna är inklusive moms.",
      },
      {
        question: "Skickas något jag skriver till en server?",
        answer: "Nej. Momsräknaren körs helt i din webbläsare.",
      },
    ],
  },

  hours: {
    meta: {
      title: "Räkna timmar: gratis timräknare för fakturan | Invoicor",
      description:
        "Räkna timmar gratis: summera start- och sluttider minus raster, gör om timmar och minuter till decimaltimmar och se vad du ska fakturera.",
    },
    title: "Timräknare",
    subtitle:
      "Räkna timmar för en hel vecka: start- och sluttider minus raster, totalen i timmar och minuter och i decimaltimmar, och vad du ska fakturera med ditt timpris.",
    ui: {
      label: "Timräknare",
      intro:
        "Lägg till varje dag du har jobbat: start, slut och obetald rast. Så många dagar du behöver, en vecka eller en hel månad.",
      date: "Datum",
      start: "Start",
      end: "Slut",
      break: "Rast (min)",
      hours: "Timmar",
      remove: "Ta bort",
      startAria: "{day} start",
      endAria: "{day} slut",
      breakAria: "{day} rast i minuter",
      removeAria: "Ta bort {day}",
      addDay: "Lägg till en dag",
      addWeek: "Lägg till en vecka",
      period: "{days} dagar · {from} – {to}",
      rate: "Ditt timpris (valfritt)",
      totalTime: "Arbetade timmar",
      decimal: "I decimaltimmar (för fakturan)",
      toInvoice: "Att fakturera",
      totalHours: "Timmar totalt",
      calc: "{hours} timmar × {rate}",
      convertTitle: "Snabbomvandling: timmar och minuter ⇄ decimal",
      convertLabel: "Tid (1:45) eller decimal (1,75)",
      convertHint: "Skriv en tid som 1:45 eller ett tal som 1,75",
      convertResult: "{time} = {hours} timmar",
      cta: "Skapa en faktura för de här timmarna",
      invoiceItem: "Arbete {from} – {to}",
    },
    sections: [
      {
        title: "Arbetade timmar per dag",
        paragraphs: [
          "Timmar = sluttid − starttid − rast. 09:00 till 17:30 med 30 minuters rast blir 8 timmar. Ett pass som slutar efter midnatt räknas över midnatt.",
        ],
      },
      {
        title: "Från timmar och minuter till decimaltimmar",
        paragraphs: [
          "En faktura multiplicerar timmar med ett timpris, så den behöver decimaltimmar: minuter ÷ 60. 15 minuter = 0,25, 30 = 0,5, 45 = 0,75. En vecka på 38:45 är 38,75 timmar.",
          "Med 750 kr i timmen blir 38,75 timmar 29 062,50 kr. Skriver du 38,45 fakturerar du 28 837,50 kr och tappar 225 kr.",
        ],
      },
      {
        title: "Timmar på fakturan",
        paragraphs: [
          "Använd en rad per typ av arbete, med decimaltimmarna som antal och ditt timpris som à-pris, till exempel ”Arbete på plats, 38,75 timmar × 750 kr”. Skriv datumen i radens beskrivning eller i anteckningarna, så kan kunden stämma av dem mot sina egna uppgifter.",
        ],
      },
    ],
    faqs: [
      {
        question: "Hur gör jag om minuter till decimaltimmar?",
        answer:
          "Dela minuterna med 60. 45 minuter är 0,75 timmar, så 1 timme och 45 minuter är 1,75 timmar. På fakturan använder du decimaltalet: 1,75 × ditt timpris.",
      },
      {
        question: "Varför inte skriva 1,45 för 1 timme och 45 minuter?",
        answer:
          "För att 1,45 timmar är 1 timme och 27 minuter. Att skriva klocktiden som ett decimaltal är det vanligaste timfelet på fakturor, och det underfakturerar varje rad. Snabbomvandlaren under timräknaren visar båda formerna.",
      },
      {
        question: "Fungerar det för nattpass?",
        answer:
          "Ja. Är sluttiden tidigare än starttiden räknas passet över midnatt: 22:00 till 02:00 är 4 timmar.",
      },
      {
        question: "Ska raster stå på fakturan?",
        answer:
          "Normalt fakturerar du tiden du faktiskt har arbetat, så obetalda raster räknas inte med. Säger ert avtal något annat sätter du rasten till 0.",
      },
      {
        question: "Skickas något jag skriver till en server?",
        answer: "Nej. Timräknaren körs helt i din webbläsare, och inget sparas.",
      },
    ],
  },

  rate: {
    meta: {
      title: "Räkna ut timpris som konsult och frilansare | Invoicor",
      description:
        "Räkna ut ditt lägsta timpris och dagpris som konsult eller frilansare utifrån önskad inkomst, skatt, kostnader, ledighet och debiterbara timmar. Gratis.",
    },
    title: "Räkna ut timpris",
    subtitle:
      "Räkna baklänges från inkomsten du vill behålla till timpriset och dagpriset du behöver som konsult eller frilansare, med skatt, företagets kostnader, ledighet och verkliga debiterbara timmar.",
    defaults: { takeHome: "420000", tax: "35", costs: "60000", weeks: "8", hours: "25" },
    ui: {
      label: "Räkna ut timpris",
      earnTitle: "Vad du vill tjäna",
      payTitle: "Vad det kostar dig",
      billTitle: "Hur mycket du kan fakturera",
      periodAria: "Ange belopp",
      perMonth: "Per månad",
      perYear: "Per år",
      takeHome: "Inkomst du vill behålla",
      takeHomeHint: "Efter inkomstskatt, som en lön",
      tax: "Skatt och egenavgifter",
      taxHint: "Andel av vinsten du sätter undan",
      costs: "Företagets kostnader",
      costsHint: "Försäkring, program, verktyg, redovisningskonsult",
      weeks: "Veckor per år du inte fakturerar",
      weeksHint: "Semester, sjukdagar, lugna veckor",
      hours: "Debiterbara timmar per vecka",
      hoursHint: "Bara betalt arbete, inte administration eller resor",
      total: "Ditt lägsta timpris",
      day: "Dagpris (8 debiterbara timmar)",
      stepsTitle: "Så räknade vi",
      step1:
        "För att behålla {takeHome} per år behöver du {beforeTax} före skatt ({tax} % undansatt).",
      step2:
        "Lägg till {costs} i kostnader: du behöver fakturera {revenue} per år, runt {perMonth} i månaden.",
      step3: "Du kan fakturera {weeks} veckor × {hours} timmar = {billable} timmar per år.",
      step4: "{revenue} ÷ {billable} timmar = {hourly} i timmen.",
      note: "Ett minimum, exkl. moms: det täcker din inkomst, skatt och kostnader, inget mer. Skatten är en grov andel; din redovisningskonsult kan ge dig den verkliga siffran.",
      invalid: "Lägg till minst en debiterbar timme per vecka och färre än 52 lediga veckor.",
      cta: "Skapa en faktura med det här timpriset",
      invoiceItem: "Arbete per timme",
    },
    sections: [
      {
        title: "1. Från inkomst efter skatt till vinst före skatt",
        paragraphs: [
          "Vinst före skatt = inkomst efter skatt ÷ (1 − skatteandel). För att behålla 420 000 kr när du sätter undan 35 % behöver du ungefär 646 154 kr i vinst före skatt.",
        ],
      },
      {
        title: "2. Lägg till företagets kostnader",
        paragraphs: [
          "Försäkring, program, utrustning, bil, redovisningskonsult, telefon: allt du betalar för att driva företaget. Omsättning du behöver = vinst före skatt + kostnader.",
        ],
      },
      {
        title: "3. Dela med timmarna du kan fakturera",
        paragraphs: [
          "Debiterbara timmar per år = (52 − lediga veckor) × debiterbara timmar per vecka. Timpris = omsättning ÷ debiterbara timmar. Dagpriset utgår från 8 debiterbara timmar.",
          "Exempel: 646 154 kr + 60 000 kr = 706 154 kr per år, fördelat på 44 veckor med 25 debiterbara timmar (1 100 timmar), blir ungefär 641,96 kr i timmen, eller 5 136 kr per dag.",
        ],
      },
    ],
    faqs: [
      {
        question: "Hur räknar jag ut mitt timpris som konsult eller frilansare?",
        answer:
          "Utgå från vad du vill behålla per år, lägg till skatten du betalar på det och företagets kostnader, och dela sedan med timmarna du faktiskt kan fakturera på ett år. Verktyget gör exakt det och visar varje steg.",
      },
      {
        question: "Hur många debiterbara timmar ska jag räkna med?",
        answer:
          "Färre än du arbetar. Administration, offerter, försäljning, resor och fortbildning går inte att fakturera. Många frilansare fakturerar 20 till 30 timmar av en 40-timmarsvecka; börja med en siffra du verkligen har klarat de senaste månaderna.",
      },
      {
        question: "Varför räknas lediga veckor med?",
        answer:
          "För att du inte tjänar något när du har semester, är sjuk eller mellan uppdrag, men kostnaderna löper på. Med 8 lediga veckor måste årsinkomsten komma från 44 veckors arbete.",
      },
      {
        question: "Stämmer skatteprocenten?",
        answer:
          "Det är en grov andel du sätter undan, inte en skatteberäkning: den verkliga skatten beror på din kommun, egenavgifter, avdrag och skiktgränser. Fråga din redovisningskonsult om din egen siffra och skriv in den.",
      },
      {
        question: "Är det här timpriset jag ska ta?",
        answer:
          "Det är ditt minimum: timpriset som täcker din inkomst, skatt och kostnader. Vad du tar betalt beror också på din erfarenhet, din marknad och värdet av arbetet. Många frilansare lägger på en marginal.",
      },
    ],
  },
};
