import type { ToolsDict } from "./en";

/**
 * The free tools, Dutch (written for the Netherlands). Informal "je", as on the Dutch home page
 * and generator. Examples use 21% btw, the decimal comma and euros.
 */
export const nl: ToolsDict = {
  common: {
    navLabel: "Gratis tools",
    home: "Home",
    eyebrow: "Gratis tool · zonder account",
    howEyebrow: "Zo werkt het",
    howTitle: "De berekening, in gewone woorden",
    faqEyebrow: "Veelgestelde vragen",
    faqTitle: "Vragen over deze tool",
    moreTools: "Meer gratis tools",
    closing: {
      title: "Elke week facturen maken?",
      gradient: "Doe het in de app.",
      text: "Opgeslagen klanten en producten, elke factuur met zijn status en een strakke pdf vanaf je iPhone. {n} facturen gratis.",
    },
    currency: "Valuta",
  },

  hub: {
    meta: {
      title: "Gratis tools voor zzp'ers: factuur en btw | Invoicor",
      description:
        "Gratis tools voor zzp'ers en ondernemers: online een factuur maken, btw berekenen, uren berekenen en je uurtarief berekenen. Zonder account.",
    },
    crumb: "Gratis tools",
    eyebrow: "Gratis · zonder account · niets te installeren",
    title: "Gratis tools om betaald te krijgen",
    subtitle:
      "Maak een factuur, reken de btw goed uit, tel je uren op en bepaal een uurtarief waarmee je je rekeningen betaalt. Alles werkt in je browser.",
    closing: {
      title: "Alles op je iPhone.",
      gradient: "{n} facturen gratis.",
      text: "Opgeslagen klanten en producten, btw en totalen voor je uitgerekend, en elke factuur met zijn status.",
    },
  },

  tools: {
    generator: {
      name: "Gratis factuur maken",
      short: "Vul online een factuur in en download een pdf. 21 templates, zonder account.",
    },
    vat: {
      name: "Btw berekenen",
      short: "Tel btw op bij een prijs of haal hem eraf, met de standaardtarieven van 19 landen.",
    },
    hours: {
      name: "Uren berekenen",
      short: "Tel een week aan diensten op en maak van 1:45 de 1,75 uur die op je factuur hoort.",
    },
    rate: {
      name: "Uurtarief berekenen",
      short:
        "Reken terug van het inkomen dat je wilt naar het uur- en dagtarief dat je nodig hebt.",
    },
  },

  vat: {
    meta: {
      title: "Btw berekenen: btw erbij of eraf (gratis) | Invoicor",
      description:
        "Btw berekenen in één stap: tel 21% of 9% btw op bij een bedrag exclusief btw of haal de btw uit een bedrag inclusief btw. Gratis en direct.",
    },
    title: "Btw berekenen",
    subtitle:
      "Tel btw op bij een bedrag exclusief btw of haal hem uit een bedrag inclusief btw, met de standaardtarieven van 19 landen. Direct, gratis, en er verlaat niets je browser.",
    defaultCountry: "NL",
    ui: {
      label: "Btw-calculator",
      modeAria: "Wat voor bedrag is het?",
      add: "Btw erbij (bedrag is exclusief)",
      remove: "Btw eraf (bedrag is inclusief)",
      amountNet: "Bedrag exclusief btw",
      amountGross: "Bedrag inclusief btw",
      country: "Land (standaardtarief)",
      custom: "Eigen tarief",
      gst: "GST",
      rate: "Btw-tarief",
      net: "Exclusief btw",
      vatRow: "Btw {rate}%",
      gross: "Inclusief btw",
      cta: "Zet dit op een factuur",
      invoiceItem: "Product of dienst",
    },
    sections: [
      {
        title: "Btw erbij (exclusief naar inclusief)",
        paragraphs: [
          "btw = bedrag exclusief × tarief ÷ 100, en inclusief = exclusief + btw. Een klus van € 478,50 met 21% btw heeft € 100,49 btw en een totaal van € 578,99. Bedragen worden afgerond op hele centen, naar boven bij een halve cent, zoals op facturen.",
        ],
      },
      {
        title: "Btw eraf (inclusief naar exclusief)",
        paragraphs: [
          "exclusief = inclusief ÷ (1 + tarief ÷ 100). Hier gaat het het vaakst mis: het tarief van het bedrag inclusief btw aftrekken geeft te weinig. Bij 21% btw is € 121 inclusief € 100 exclusief, niet € 95,59.",
          "Gebruik dit als een leverancier een prijs inclusief btw noemt, of als je een consumentenprijs bepaalt en wilt weten welk deel daarvan voor jou is.",
        ],
      },
      {
        title: "Standaardtarief en verlaagd tarief",
        paragraphs: [
          "De landenlijst gebruikt het standaardtarief van elk land; in Nederland is dat 21%. Voor onder meer eten en drinken, boeken en medicijnen geldt het verlaagde tarief van 9%, en sommige diensten zijn vrijgesteld. Twijfel je, kijk dan op de site van de Belastingdienst of vraag het je boekhouder, en typ het tarief zelf in.",
        ],
      },
    ],
    faqs: [
      {
        question: "Hoe tel ik btw op bij een prijs?",
        answer:
          "Vermenigvuldig het bedrag exclusief btw met het tarief en tel de uitkomst erbij op. Voor € 100 met 21% btw: 100 × 0,21 = € 21 btw, dus inclusief btw is het € 121. De calculator doet dit voor je en rondt af op de cent.",
      },
      {
        question: "Hoe haal ik de btw uit een bedrag inclusief btw?",
        answer:
          "Deel het bedrag door 1 plus het tarief, in plaats van het tarief eraf te trekken. Voor € 121 inclusief 21% btw: 121 ÷ 1,21 = € 100 exclusief, en de btw is € 21. 21% van € 121 aftrekken geeft € 95,59, en dat klopt niet.",
      },
      {
        question: "Welke btw-tarieven staan in de calculator?",
        answer:
          "De standaardtarieven van 16 Europese landen en de GST van Australië, Canada en Nieuw-Zeeland, zoals ze gelden in november 2026. Veel landen hebben ook verlaagde tarieven voor bepaalde producten en diensten, zoals 9% in Nederland; typ zelf een ander tarief in als dat voor jou geldt.",
      },
      {
        question: "Zet ik prijzen op mijn factuur inclusief of exclusief btw?",
        answer:
          "Zakelijke klanten verwachten meestal prijzen exclusief btw, met de btw onderaan erbij; particulieren verwachten de prijs die ze betalen, inclusief btw. Hoe dan ook moet een factuur het bedrag exclusief btw, het btw-tarief, het btw-bedrag en het totaal tonen. In de Invoicor-app en de gratis generator kies je per factuur of je prijzen inclusief btw zijn.",
      },
      {
        question: "Wordt wat ik typ naar een server gestuurd?",
        answer: "Nee. De calculator werkt helemaal in je browser.",
      },
    ],
  },

  hours: {
    meta: {
      title: "Uren berekenen: werkuren optellen voor je factuur | Invoicor",
      description:
        "Uren berekenen: tel begin- en eindtijden min pauze op, reken uren en minuten om naar decimale uren en zie wat je factureert tegen je uurtarief.",
    },
    title: "Uren berekenen",
    subtitle:
      "Tel een week aan begin- en eindtijden min pauzes op, zie het totaal in uren en minuten en in decimale uren, en wat je factureert tegen je uurtarief.",
    ui: {
      label: "Urencalculator",
      intro:
        "Voeg elke dag toe dat je hebt gewerkt: begin, eind en de onbetaalde pauze. Zoveel dagen als je nodig hebt, een week of een hele maand.",
      date: "Datum",
      start: "Begin",
      end: "Eind",
      break: "Pauze (min)",
      hours: "Uren",
      remove: "Verwijderen",
      startAria: "{day} begin",
      endAria: "{day} eind",
      breakAria: "{day} pauze in minuten",
      removeAria: "{day} verwijderen",
      addDay: "Dag toevoegen",
      addWeek: "Week toevoegen",
      period: "{days} dagen · {from} – {to}",
      rate: "Je uurtarief (optioneel)",
      totalTime: "Gewerkte uren",
      decimal: "In decimale uren (voor de factuur)",
      toInvoice: "Te factureren",
      totalHours: "Totaal uren",
      calc: "{hours} uur × {rate}",
      convertTitle: "Snel omrekenen: uren en minuten ⇄ decimaal",
      convertLabel: "Tijd (1:45) of decimaal (1,75)",
      convertHint: "Typ een tijd zoals 1:45 of een getal zoals 1,75",
      convertResult: "{time} = {hours} uur",
      cta: "Maak een factuur voor deze uren",
      invoiceItem: "Werkzaamheden {from} – {to}",
    },
    sections: [
      {
        title: "Gewerkte uren per dag",
        paragraphs: [
          "Uren = eindtijd − begintijd − pauze. Van 09:00 tot 17:30 met een halfuur pauze is 8 uur. Een dienst die na middernacht eindigt, telt de tijd over middernacht heen mee.",
        ],
      },
      {
        title: "Van uren en minuten naar decimaal",
        paragraphs: [
          "Op een factuur vermenigvuldig je uren met een tarief, dus heb je decimale uren nodig: minuten ÷ 60. 15 minuten = 0,25, 30 = 0,5, 45 = 0,75. Een week van 38:45 is 38,75 uur.",
          "Bij € 60 per uur is 38,75 uur € 2.325. Schrijf je 38,45, dan factureer je € 2.307 en loop je € 18 mis.",
        ],
      },
      {
        title: "Uren op een factuur zetten",
        paragraphs: [
          "Gebruik één regel per soort werk, met de decimale uren als aantal en je uurtarief als prijs, bijvoorbeeld „Werkzaamheden op locatie, 38,75 uur × € 60”. Zet de datums in de omschrijving of de notities, zodat je klant ze naast zijn eigen administratie kan leggen.",
        ],
      },
    ],
    faqs: [
      {
        question: "Hoe reken ik minuten om naar decimale uren?",
        answer:
          "Deel de minuten door 60. 45 minuten is 0,75 uur, dus 1 uur en 45 minuten is 1,75 uur. Gebruik op je factuur het decimale getal: 1,75 × je uurtarief.",
      },
      {
        question: "Waarom niet 1,45 voor 1 uur en 45 minuten?",
        answer:
          "Omdat 1,45 uur 1 uur en 27 minuten is. De kloktijd als decimaal getal opschrijven is de meest gemaakte urenfout op facturen, en je factureert er elke regel te weinig door. De omrekenaar onder de calculator laat beide vormen zien.",
      },
      {
        question: "Werkt het ook voor nachtdiensten?",
        answer:
          "Ja. Is de eindtijd eerder dan de begintijd, dan loopt de dienst door na middernacht: 22:00 tot 02:00 is 4 uur.",
      },
      {
        question: "Horen pauzes op de factuur?",
        answer:
          "Normaal factureer je de tijd die je echt gewerkt hebt, dus onbetaalde pauzes laat je weg. Staat er in je afspraak iets anders, zet de pauze dan op 0.",
      },
      {
        question: "Wordt wat ik typ naar een server gestuurd?",
        answer: "Nee. De calculator werkt helemaal in je browser en er wordt niets bewaard.",
      },
    ],
  },

  rate: {
    meta: {
      title: "Uurtarief berekenen als zzp'er (gratis) | Invoicor",
      description:
        "Uurtarief berekenen als zzp'er: je minimale uur- en dagtarief op basis van je gewenste inkomen, belasting, bedrijfskosten, vrije weken en declarabele uren.",
    },
    title: "Uurtarief berekenen",
    subtitle:
      "Reken als zzp'er terug van het inkomen dat je wilt overhouden naar het uur- en dagtarief dat je nodig hebt, met belasting, bedrijfskosten, vrije weken en echte declarabele uren.",
    defaults: { takeHome: "45000", tax: "35", costs: "6000", weeks: "8", hours: "25" },
    ui: {
      label: "Uurtariefcalculator",
      earnTitle: "Wat je wilt verdienen",
      payTitle: "Wat het je kost",
      billTitle: "Hoeveel je kunt factureren",
      periodAria: "Bedragen invullen",
      perMonth: "Per maand",
      perYear: "Per jaar",
      takeHome: "Inkomen dat je wilt overhouden",
      takeHomeHint: "Na inkomstenbelasting, zoals een salaris",
      tax: "Belasting en premies",
      taxHint: "Deel van je winst dat je opzij zet",
      costs: "Bedrijfskosten",
      costsHint: "Verzekeringen, software, gereedschap, boekhouder",
      weeks: "Weken per jaar dat je niet factureert",
      weeksHint: "Vakantie, ziekte, rustige weken",
      hours: "Declarabele uren per week",
      hoursHint: "Alleen betaald werk, geen administratie of reistijd",
      total: "Je minimale uurtarief",
      day: "Dagtarief (8 declarabele uren)",
      stepsTitle: "Zo komen we erop",
      step1:
        "Om {takeHome} per jaar over te houden, heb je {beforeTax} voor belasting nodig ({tax}% opzij gezet).",
      step2:
        "Tel {costs} bedrijfskosten erbij op: je moet {revenue} per jaar factureren, ongeveer {perMonth} per maand.",
      step3: "Je kunt {weeks} weken × {hours} uur = {billable} uur per jaar factureren.",
      step4: "{revenue} ÷ {billable} uur = {hourly} per uur.",
      note: "Een minimum, exclusief btw: het dekt je inkomen, belasting en kosten, meer niet. De belasting is een grove schatting; je boekhouder kan je het echte percentage geven.",
      invalid: "Vul minstens één declarabel uur per week in en minder dan 52 vrije weken.",
      cta: "Maak een factuur met dit tarief",
      invoiceItem: "Werkzaamheden op uurbasis",
    },
    sections: [
      {
        title: "1. Van netto inkomen naar winst voor belasting",
        paragraphs: [
          "winst voor belasting = netto inkomen ÷ (1 − belastingdeel). Wil je € 45.000 overhouden en zet je 35% opzij, dan heb je ongeveer € 69.231 winst voor belasting nodig.",
        ],
      },
      {
        title: "2. Tel je bedrijfskosten erbij",
        paragraphs: [
          "Verzekeringen, software, apparatuur, een bus of auto, je boekhouder, je telefoon: alles wat je betaalt om je bedrijf te runnen. Omzet die je nodig hebt = winst voor belasting + kosten.",
        ],
      },
      {
        title: "3. Deel door de uren die je kunt factureren",
        paragraphs: [
          "declarabele uren per jaar = (52 − vrije weken) × declarabele uren per week. Uurtarief = omzet ÷ declarabele uren. Het dagtarief gaat uit van 8 declarabele uren.",
          "Voorbeeld: € 69.231 + € 6.000 = € 75.231 per jaar, verdeeld over 44 weken van 25 declarabele uren (1.100 uur), is ongeveer € 68,39 per uur, of € 547 per dag.",
        ],
      },
    ],
    faqs: [
      {
        question: "Hoe bereken ik mijn uurtarief als zzp'er?",
        answer:
          "Begin bij wat je per jaar wilt overhouden, tel de belasting die je daarover betaalt en je bedrijfskosten erbij, en deel door de uren die je in een jaar echt kunt factureren. De calculator doet precies dat en laat elke stap zien.",
      },
      {
        question: "Hoeveel declarabele uren moet ik rekenen?",
        answer:
          "Minder dan je werkt. Administratie, offertes, acquisitie, reistijd en bijscholing kun je niet factureren. Veel zzp'ers factureren 20 tot 30 uur in een werkweek van 40 uur; begin met een aantal dat je de afgelopen maanden echt hebt gehaald.",
      },
      {
        question: "Waarom tellen vrije weken mee?",
        answer:
          "Omdat je niets verdient als je op vakantie bent, ziek bent of tussen twee opdrachten zit, terwijl je kosten doorlopen. Met 8 vrije weken moet je jaarinkomen uit 44 weken werk komen.",
      },
      {
        question: "Klopt het belastingpercentage?",
        answer:
          "Het is een grove schatting van wat je opzij zet, geen belastingberekening: je echte inkomstenbelasting hangt af van je situatie, aftrekposten en schijven. Vraag je boekhouder naar jouw percentage en vul dat in.",
      },
      {
        question: "Is dit het tarief dat ik moet vragen?",
        answer:
          "Het is je minimum: het tarief dat je inkomen, belasting en kosten dekt. Wat je vraagt, hangt ook af van je ervaring, je markt en de waarde van het werk. Veel zzp'ers zetten er nog een marge bovenop.",
      },
    ],
  },
};
