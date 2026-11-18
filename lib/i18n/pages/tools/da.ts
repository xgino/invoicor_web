import type { ToolsDict } from "./en";

/** The free tools, Danish (Denmark). "du", as on the Danish home page and generator. */
export const da: ToolsDict = {
  common: {
    navLabel: "Gratis værktøjer",
    home: "Forside",
    eyebrow: "Gratis værktøj · ingen tilmelding",
    howEyebrow: "Sådan virker det",
    howTitle: "Regnestykket forklaret",
    faqEyebrow: "Spørgsmål",
    faqTitle: "Spørgsmål om værktøjet",
    moreTools: "Flere gratis værktøjer",
    closing: {
      title: "Fakturerer du hver uge?",
      gradient: "Gør det i appen.",
      text: "Gemte kunder og varer, hver faktura med sin status og en pæn pdf fra din iPhone. {n} fakturaer gratis.",
    },
    currency: "Valuta",
  },

  hub: {
    meta: {
      title: "Gratis værktøjer: fakturagenerator og beregnere | Invoicor",
      description:
        "Gratis værktøjer til freelancere og små virksomheder: lav faktura gratis, momsberegner, timeberegner og beregn din timepris. Ingen tilmelding.",
    },
    crumb: "Gratis værktøjer",
    eyebrow: "Gratis · ingen tilmelding · intet at installere",
    title: "Gratis værktøjer, så du får dine penge",
    subtitle:
      "Lav en faktura, få momsen rigtig, læg dine timer sammen, og find en timepris, der betaler regningerne. Det hele kører i din browser.",
    closing: {
      title: "Det hele på din iPhone.",
      gradient: "{n} fakturaer gratis.",
      text: "Gemte kunder og varer, moms og total regnet ud for dig, og hver faktura med sin status.",
    },
  },

  tools: {
    generator: {
      name: "Lav faktura gratis",
      short: "Udfyld en faktura online, og hent den som pdf. 21 skabeloner, ingen tilmelding.",
    },
    vat: {
      name: "Momsberegner",
      short: "Læg moms til en pris, eller træk den fra, med standardsatserne for 19 lande.",
    },
    hours: {
      name: "Timeberegner",
      short: "Læg ugens vagter sammen, og lav 1:45 om til de 1,75 timer, fakturaen skal bruge.",
    },
    rate: {
      name: "Beregn timepris",
      short:
        "Regn baglæns fra den indkomst, du vil have, til den timepris og dagspris, du skal tage.",
    },
  },

  vat: {
    meta: {
      title: "Momsberegner: beregn moms online (gratis) | Invoicor",
      description:
        "Gratis momsberegner: beregn moms oven i en pris ekskl. moms, eller træk momsen ud af en pris inkl. moms. 25 % og satser for 19 lande.",
    },
    title: "Momsberegner",
    subtitle:
      "Beregn moms: læg 25 % moms til en pris ekskl. moms, eller træk momsen ud af en pris inkl. moms, med standardsatserne for 19 lande. Gratis, med det samme, og intet forlader din browser.",
    defaultCountry: "DK",
    ui: {
      label: "Momsberegner",
      modeAria: "Hvad er beløbet?",
      add: "Læg moms til (beløbet er ekskl. moms)",
      remove: "Træk moms fra (beløbet er inkl. moms)",
      amountNet: "Beløb ekskl. moms",
      amountGross: "Beløb inkl. moms",
      country: "Land (standardsats)",
      custom: "Egen sats",
      gst: "GST",
      rate: "Momssats",
      net: "Ekskl. moms",
      vatRow: "Moms {rate} %",
      gross: "Inkl. moms",
      cta: "Sæt det på en faktura",
      invoiceItem: "Vare eller ydelse",
    },
    sections: [
      {
        title: "Læg moms til (ekskl. til inkl. moms)",
        paragraphs: [
          "Moms = beløb ekskl. moms × sats ÷ 100, og prisen inkl. moms = beløbet + momsen. En opgave til 1.875,60 kr med 25 % moms giver 468,90 kr i moms og 2.344,50 kr i alt. Beløbene afrundes til hele øre, halve op, som på en faktura.",
        ],
      },
      {
        title: "Træk moms fra (inkl. til ekskl. moms)",
        paragraphs: [
          "Beløb ekskl. moms = beløb inkl. moms ÷ (1 + sats ÷ 100). Det er her, de fleste regner forkert: trækker du 25 % fra prisen inkl. moms, får du for lidt. 125 kr inkl. moms er 100 kr ekskl. moms, ikke 93,75 kr. Med 25 % moms udgør momsen altså 20 % af prisen inkl. moms.",
          "Brug det, når en leverandør opgiver en pris inkl. moms, eller når du sætter en pris til privatkunder og vil vide, hvor meget af den der er din.",
        ],
      },
      {
        title: "Standardsatser og momsfritagelse",
        paragraphs: [
          "Landelisten bruger hvert lands standardsats. I Danmark er momsen 25 % på næsten alt, men nogle ydelser er momsfritaget, og andre lande har ofte nedsatte satser for f.eks. fødevarer, bøger og transport. Er du i tvivl, så tjek Skattestyrelsens hjemmeside eller spørg din revisor, og skriv selv satsen ind.",
        ],
      },
    ],
    faqs: [
      {
        question: "Hvordan lægger jeg moms til en pris?",
        answer:
          "Gang prisen ekskl. moms med momssatsen, og læg resultatet til. For 100 kr med 25 % moms: 100 × 0,25 = 25 kr i moms, så prisen inkl. moms er 125 kr. Beregneren gør det for dig og afrunder til hele øre.",
      },
      {
        question: "Hvordan trækker jeg moms fra en pris inkl. moms?",
        answer:
          "Del prisen inkl. moms med 1 plus satsen, i stedet for at trække satsen fra. For 125 kr inkl. 25 % moms: 125 ÷ 1,25 = 100 kr ekskl. moms, og momsen er 25 kr. Trækker du 25 % fra 125 kr, får du 93,75 kr, og det er forkert.",
      },
      {
        question: "Hvilke momssatser har beregneren?",
        answer:
          "Standardsatserne for 16 europæiske lande og GST for Australien, Canada og New Zealand, pr. november 2026. Mange lande har også nedsatte satser for visse varer og ydelser; skriv selv satsen ind, hvis din er en anden.",
      },
      {
        question: "Skal priserne på fakturaen være med eller uden moms?",
        answer:
          "Erhvervskunder forventer som regel priser ekskl. moms med momsen lagt til nederst; privatkunder forventer den pris, de skal betale, inkl. moms. Uanset hvad skal en momsfaktura vise beløbet ekskl. moms, satsen, momsbeløbet og totalen. I Invoicor-appen og den gratis generator vælger du for hver faktura, om priserne er inkl. moms.",
      },
      {
        question: "Bliver det, jeg skriver, sendt til en server?",
        answer: "Nej. Beregneren kører helt i din browser.",
      },
    ],
  },

  hours: {
    meta: {
      title: "Timeberegner: beregn timer til fakturaen | Invoicor",
      description:
        "Gratis timeberegner: beregn timer fra start- og sluttider minus pauser, omregn timer og minutter til decimaltimer, og se, hvad du skal fakturere.",
    },
    title: "Timeberegner",
    subtitle:
      "Beregn timer for en hel uge: start- og sluttider minus pauser, totalen i timer og minutter og i decimaltimer, og hvad du skal fakturere med din timepris.",
    ui: {
      label: "Timeberegner",
      intro:
        "Tilføj hver dag, du har arbejdet: start, slut og den ubetalte pause. Så mange dage, du har brug for, en uge eller en hel måned.",
      date: "Dato",
      start: "Start",
      end: "Slut",
      break: "Pause (min)",
      hours: "Timer",
      remove: "Fjern",
      startAria: "{day} start",
      endAria: "{day} slut",
      breakAria: "{day} pause i minutter",
      removeAria: "Fjern {day}",
      addDay: "Tilføj en dag",
      addWeek: "Tilføj en uge",
      period: "{days} dage · {from} – {to}",
      rate: "Din timepris (valgfrit)",
      totalTime: "Arbejdstimer",
      decimal: "I decimaltimer (til fakturaen)",
      toInvoice: "Til fakturering",
      totalHours: "Timer i alt",
      calc: "{hours} timer × {rate}",
      convertTitle: "Hurtig omregning: timer og minutter ⇄ decimal",
      convertLabel: "Tid (1:45) eller decimal (1,75)",
      convertHint: "Skriv en tid som 1:45 eller et tal som 1,75",
      convertResult: "{time} = {hours} timer",
      cta: "Lav en faktura for disse timer",
      invoiceItem: "Arbejde {from} – {to}",
    },
    sections: [
      {
        title: "Arbejdstimer pr. dag",
        paragraphs: [
          "Timer = sluttid − starttid − pause. Fra 09:00 til 17:30 med 30 minutters pause er 8 timer. En vagt, der slutter efter midnat, tæller tiden hen over midnat med.",
        ],
      },
      {
        title: "Fra timer og minutter til decimal",
        paragraphs: [
          "På en faktura ganges timerne med en timepris, så du skal bruge decimaltimer: minutter ÷ 60. 15 minutter = 0,25, 30 = 0,5, 45 = 0,75. En uge på 38:45 er 38,75 timer.",
          "Med 500 kr i timen er 38,75 timer 19.375 kr. Skriver du 38,45, fakturerer du 19.225 kr og mister 150 kr.",
        ],
      },
      {
        title: "Timer på fakturaen",
        paragraphs: [
          "Brug én linje pr. type arbejde med decimaltimerne som antal og din timepris som pris, f.eks. „Arbejde på byggepladsen, 38,75 timer × 500 kr“. Skriv datoerne i linjens beskrivelse eller i noterne, så kunden kan holde dem op mod sine egne optegnelser.",
        ],
      },
    ],
    faqs: [
      {
        question: "Hvordan omregner jeg minutter til decimaltimer?",
        answer:
          "Del minutterne med 60. 45 minutter er 0,75 timer, så 1 time og 45 minutter er 1,75 timer. På fakturaen bruger du decimaltallet: 1,75 × din timepris.",
      },
      {
        question: "Hvorfor ikke skrive 1,45 for 1 time og 45 minutter?",
        answer:
          "Fordi 1,45 timer er 1 time og 27 minutter. At skrive klokkeslættet som decimaltal er den mest almindelige timefejl på fakturaer, og den underfakturerer hver eneste linje. Hurtig omregning under beregneren viser begge former.",
      },
      {
        question: "Virker den til nattevagter?",
        answer:
          "Ja. Er sluttiden tidligere end starttiden, regnes vagten som gående over midnat: 22:00 til 02:00 er 4 timer.",
      },
      {
        question: "Skal pauser med på fakturaen?",
        answer:
          "Normalt fakturerer du den tid, du faktisk har arbejdet, så ubetalte pauser tæller ikke med. Siger jeres aftale noget andet, så sæt pausen til 0.",
      },
      {
        question: "Bliver det, jeg skriver, sendt til en server?",
        answer: "Nej. Beregneren kører helt i din browser, og intet bliver gemt.",
      },
    ],
  },

  rate: {
    meta: {
      title: "Beregn timepris som freelancer (gratis) | Invoicor",
      description:
        "Beregn din timepris som freelancer: din mindste timepris og dagspris ud fra ønsket indkomst, skat, udgifter, fridage og fakturerbare timer. Gratis.",
    },
    title: "Beregn timepris",
    subtitle:
      "Regn baglæns fra den indkomst, du vil have tilbage, til den timepris og dagspris, du skal tage, med skat, udgifter, fri og de timer, du reelt kan fakturere.",
    defaults: { takeHome: "400000", tax: "40", costs: "50000", weeks: "8", hours: "25" },
    ui: {
      label: "Beregn timepris",
      earnTitle: "Hvad du vil tjene",
      payTitle: "Hvad det koster dig",
      billTitle: "Hvor meget du kan fakturere",
      periodAria: "Indtast beløb",
      perMonth: "Pr. måned",
      perYear: "Pr. år",
      takeHome: "Indkomst, du vil have tilbage",
      takeHomeHint: "Efter skat, ligesom en løn",
      tax: "Skat og AM-bidrag",
      taxHint: "Andel af overskuddet, du sætter til side",
      costs: "Udgifter til virksomheden",
      costsHint: "Forsikring, software, værktøj, revisor",
      weeks: "Uger om året, du ikke fakturerer",
      weeksHint: "Ferie, sygdom, stille uger",
      hours: "Fakturerbare timer pr. uge",
      hoursHint: "Kun betalt arbejde, ikke administration eller kørsel",
      total: "Din mindste timepris",
      day: "Dagspris (8 fakturerbare timer)",
      stepsTitle: "Sådan regnede vi",
      step1:
        "For at have {takeHome} tilbage om året skal du have {beforeTax} før skat ({tax} % sat til side).",
      step2:
        "Læg {costs} i udgifter til: du skal fakturere {revenue} om året, cirka {perMonth} om måneden.",
      step3: "Du kan fakturere {weeks} uger × {hours} timer = {billable} timer om året.",
      step4: "{revenue} ÷ {billable} timer = {hourly} i timen.",
      note: "Et minimum, ekskl. moms: det dækker din indkomst, skat og udgifter, intet andet. Skatten er en grov andel; din revisor kan give dig det rigtige tal.",
      invalid: "Angiv mindst én fakturerbar time pr. uge og færre end 52 ugers fri.",
      cta: "Lav en faktura med denne timepris",
      invoiceItem: "Arbejde efter timepris",
    },
    sections: [
      {
        title: "1. Fra udbetalt til overskud før skat",
        paragraphs: [
          "Overskud før skat = det, du vil have tilbage ÷ (1 − skatteandel). Vil du have 400.000 kr tilbage og sætter 40 % til side, skal du have et overskud før skat på ca. 666.667 kr.",
        ],
      },
      {
        title: "2. Læg dine udgifter til",
        paragraphs: [
          "Forsikring, software, udstyr, bil, revisor, telefon: alt, hvad det koster at drive virksomheden. Omsætning, du skal bruge = overskud før skat + udgifter.",
        ],
      },
      {
        title: "3. Del med de timer, du kan fakturere",
        paragraphs: [
          "Fakturerbare timer pr. år = (52 − ugers fri) × fakturerbare timer pr. uge. Timepris = omsætning ÷ fakturerbare timer. Dagsprisen regner med 8 fakturerbare timer.",
          "Eksempel: 666.667 + 50.000 = 716.667 kr om året, fordelt på 44 uger med 25 fakturerbare timer (1.100 timer), er ca. 651,52 kr i timen eller 5.212 kr om dagen.",
        ],
      },
    ],
    faqs: [
      {
        question: "Hvordan beregner jeg min timepris som freelancer?",
        answer:
          "Start med det, du vil have tilbage om året, læg den skat, du skal betale af det, og dine udgifter til, og del så med de timer, du reelt kan fakturere på et år. Beregneren gør præcis det og viser hvert trin.",
      },
      {
        question: "Hvor mange fakturerbare timer skal jeg regne med?",
        answer:
          "Færre, end du arbejder. Administration, tilbud, salg, kørsel og efteruddannelse kan ikke faktureres. Mange freelancere fakturerer 20 til 30 timer på en uge med 37–40 arbejdstimer; start med et tal, du faktisk har nået de seneste måneder.",
      },
      {
        question: "Hvorfor indgår ugers fri i beregningen?",
        answer:
          "Fordi du ikke tjener noget, når du holder ferie, er syg eller mellem to opgaver, men dine udgifter løber videre. Med 8 ugers fri skal årets indkomst komme fra 44 ugers arbejde.",
      },
      {
        question: "Er skatteprocenten præcis?",
        answer:
          "Det er en grov andel, du sætter til side, ikke en skatteberegning: den rigtige skat afhænger af AM-bidrag, kommuneskat, fradrag og topskat. Spørg din revisor om dit eget tal, og skriv det ind.",
      },
      {
        question: "Er det den timepris, jeg skal tage?",
        answer:
          "Det er dit minimum: den timepris, der dækker din indkomst, skat og udgifter. Hvad du tager, afhænger også af din erfaring, dit marked og værdien af arbejdet. Mange freelancere lægger en margin oveni.",
      },
    ],
  },
};
