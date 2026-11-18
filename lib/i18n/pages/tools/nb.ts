/**
 * The free tools' text, Norwegian Bokmål, written for Norway (ROADMAP T1, HL2).
 * Same shape as `en.ts`. Examples use the Norwegian standard rate (25 % mva) and NOK.
 */
import type { ToolsDict } from "./en";

export const nb: ToolsDict = {
  common: {
    navLabel: "Gratis verktøy",
    home: "Hjem",
    eyebrow: "Gratis verktøy · uten registrering",
    howEyebrow: "Slik fungerer det",
    howTitle: "Utregningen, forklart enkelt",
    faqEyebrow: "Spørsmål og svar",
    faqTitle: "Spørsmål om dette verktøyet",
    moreTools: "Flere gratis verktøy",
    closing: {
      title: "Fakturerer du hver uke?",
      gradient: "Gjør det i appen.",
      text: "Lagrede kunder og varer, hver faktura med status og en ryddig PDF rett fra iPhonen. {n} fakturaer gratis.",
    },
    currency: "Valuta",
  },

  hub: {
    meta: {
      title: "Gratis verktøy: faktura, mva og timepris | Invoicor",
      description:
        "Gratis verktøy for frilansere og ENK: lag faktura på nett, mva-kalkulator, timekalkulator og beregn timepris. Uten registrering.",
    },
    crumb: "Gratis verktøy",
    eyebrow: "Gratis · uten registrering · ingenting å installere",
    title: "Gratis verktøy for å få betalt",
    subtitle:
      "Lag en faktura, regn ut mva riktig, summer timene dine og finn en timepris som dekker regningene. Alt kjører i nettleseren din.",
    closing: {
      title: "Alt sammen, på iPhonen.",
      gradient: "{n} fakturaer gratis.",
      text: "Lagrede kunder og varer, mva og sum regnet ut for deg, og hver faktura med status.",
    },
  },

  tools: {
    generator: {
      name: "Lag faktura gratis",
      short: "Fyll ut en faktura på nett og last ned PDF. 21 maler, uten registrering.",
    },
    vat: {
      name: "Mva-kalkulator",
      short: "Legg til eller trekk fra mva, med standardsatsene i 19 land.",
    },
    hours: {
      name: "Timekalkulator",
      short: "Summer en uke med arbeidstimer og gjør 1:45 om til de 1,75 timene fakturaen trenger.",
    },
    rate: {
      name: "Beregn timepris",
      short: "Regn deg baklengs fra inntekten du vil ha, til timeprisen og dagsprisen du trenger.",
    },
  },

  vat: {
    meta: {
      title: "Mva-kalkulator: regne ut mva på nett (gratis) | Invoicor",
      description:
        "Gratis mva-kalkulator: legg 25 % mva til en pris eller regn ut mva av et beløp inkl. mva. Standardsatser for 19 land, svar med en gang.",
    },
    title: "Mva-kalkulator",
    subtitle:
      "Regn ut mva: legg merverdiavgift til en pris eks. mva, eller trekk den ut av en pris inkl. mva, med standardsatsene i 19 land. Gratis, med en gang, og ingenting forlater nettleseren din.",
    defaultCountry: "NO",
    ui: {
      label: "Mva-kalkulator",
      modeAria: "Hva slags beløp er det?",
      add: "Legg til mva (beløpet er eks. mva)",
      remove: "Trekk ut mva (beløpet er inkl. mva)",
      amountNet: "Beløp eks. mva",
      amountGross: "Beløp inkl. mva",
      country: "Land (standardsats)",
      custom: "Egen sats",
      gst: "GST",
      rate: "Mva-sats",
      net: "Eks. mva",
      vatRow: "Mva {rate} %",
      gross: "Inkl. mva",
      cta: "Sett dette på en faktura",
      invoiceItem: "Vare eller tjeneste",
    },
    sections: [
      {
        title: "Legge til mva (eks. mva til inkl. mva)",
        paragraphs: [
          "Mva = beløp eks. mva × sats ÷ 100, og beløp inkl. mva = beløp eks. mva + mva. En jobb til 478,50 kr med 25 % mva gir 119,63 kr i mva og 598,13 kr totalt. Beløpene rundes av til nærmeste øre, med halve øre opp, slik fakturaer gjør.",
        ],
      },
      {
        title: "Trekke ut mva (inkl. mva til eks. mva)",
        paragraphs: [
          "Beløp eks. mva = beløp inkl. mva ÷ (1 + sats ÷ 100). Det er her de fleste regner feil: å trekke satsen fra beløpet inkl. mva gir for lite. Med 25 % mva er 125 kr inkl. mva 100 kr eks. mva, ikke 93,75 kr.",
          "Bruk dette når en leverandør oppgir en pris inkl. mva, eller når du setter en pris til privatkunder og vil vite hvor mye av den som er din.",
        ],
      },
      {
        title: "Standardsats og reduserte satser",
        paragraphs: [
          "Landlisten bruker standardsatsen i hvert land. Mat, persontransport, overnatting og enkelte tjenester har ofte lavere sats, og noen tjenester er unntatt fra mva. Er du i tvil, sjekk nettsidene til skattemyndighetene eller spør regnskapsføreren din, og skriv inn satsen selv.",
        ],
      },
    ],
    faqs: [
      {
        question: "Hvordan legger jeg mva til en pris?",
        answer:
          "Gang prisen eks. mva med mva-satsen og legg til resultatet. For 100 kr med 25 % mva: 100 × 0,25 = 25 kr i mva, så prisen inkl. mva er 125 kr. Kalkulatoren gjør dette for deg og runder av til nærmeste øre.",
      },
      {
        question: "Hvordan regner jeg ut mva av et beløp inkl. mva?",
        answer:
          "Del beløpet på 1 pluss satsen, i stedet for å trekke fra satsen. For 125 kr inkl. 25 % mva: 125 ÷ 1,25 = 100 kr eks. mva, og mva-en er 25 kr. Å trekke 25 % fra 125 kr gir 93,75 kr, og det er feil.",
      },
      {
        question: "Hvilke mva-satser har kalkulatoren?",
        answer:
          "Standardsatsene i 16 europeiske land og GST i Australia, Canada og New Zealand, per november 2026. I Norge er standardsatsen 25 %, med 15 % på næringsmidler og 12 % på blant annet persontransport og overnatting. Mange land har reduserte satser på enkelte varer og tjenester; skriv inn satsen selv hvis din er en annen.",
      },
      {
        question: "Skal fakturaen vise priser med eller uten mva?",
        answer:
          "Bedriftskunder forventer vanligvis priser eks. mva, med mva-en lagt til nederst; privatkunder forventer prisen de faktisk betaler, inkl. mva. Uansett skal en faktura med mva vise beløpet eks. mva, satsen, mva-beløpet og totalbeløpet. I Invoicor-appen og den gratis generatoren velger du per faktura om prisene er inkludert mva.",
      },
      {
        question: "Blir noe av det jeg skriver, sendt til en server?",
        answer: "Nei. Kalkulatoren kjører helt i nettleseren din.",
      },
    ],
  },

  hours: {
    meta: {
      title: "Timekalkulator: regne ut timer til fakturaen | Invoicor",
      description:
        "Gratis timekalkulator: regn ut timer fra start- og sluttid minus pauser, gjør timer og minutter om til desimaltimer og se hva du skal fakturere.",
    },
    title: "Timekalkulator",
    subtitle:
      "Regn ut timer for en hel uke med start- og sluttider minus pauser, få summen i timer og minutter og i desimaltimer, og se hva du skal fakturere med din timepris.",
    ui: {
      label: "Timekalkulator",
      intro:
        "Legg til hver dag du har jobbet: start, slutt og ubetalt pause. Så mange dager du trenger, en uke eller en hel måned.",
      date: "Dato",
      start: "Start",
      end: "Slutt",
      break: "Pause (min)",
      hours: "Timer",
      remove: "Fjern",
      startAria: "{day} start",
      endAria: "{day} slutt",
      breakAria: "{day} pause i minutter",
      removeAria: "Fjern {day}",
      addDay: "Legg til en dag",
      addWeek: "Legg til en uke",
      period: "{days} dager · {from} – {to}",
      rate: "Timeprisen din (valgfritt)",
      totalTime: "Arbeidede timer",
      decimal: "I desimaltimer (til fakturaen)",
      toInvoice: "Å fakturere",
      totalHours: "Timer totalt",
      calc: "{hours} timer × {rate}",
      convertTitle: "Rask omregning: timer og minutter ⇄ desimal",
      convertLabel: "Tid (1:45) eller desimal (1,75)",
      convertHint: "Skriv en tid som 1:45 eller et tall som 1,75",
      convertResult: "{time} = {hours} timer",
      cta: "Lag en faktura for disse timene",
      invoiceItem: "Arbeid {from} – {to}",
    },
    sections: [
      {
        title: "Arbeidstimer per dag",
        paragraphs: [
          "Timer = sluttid − starttid − pause. 09:00 til 17:30 med 30 minutters pause er 8 timer. Et skift som slutter etter midnatt, regnes med tiden over midnatt.",
        ],
      },
      {
        title: "Fra timer og minutter til desimal",
        paragraphs: [
          "På en faktura ganges timene med en timepris, så du trenger desimaltimer: minutter ÷ 60. 15 minutter = 0,25, 30 = 0,5, 45 = 0,75. En uke på 38:45 er 38,75 timer.",
          "Med 600 kr timen er 38,75 timer 23 250 kr. Skriver du 38,45, fakturerer du 23 070 kr og taper 180 kr.",
        ],
      },
      {
        title: "Timer på fakturaen",
        paragraphs: [
          "Bruk én linje per type arbeid, med desimaltimene som antall og timeprisen som pris, for eksempel «Arbeid på byggeplass, 38,75 timer × 600 kr». Skriv datoene i linjebeskrivelsen eller merknadene, så kunden kan sjekke dem mot sine egne notater.",
        ],
      },
    ],
    faqs: [
      {
        question: "Hvordan gjør jeg om minutter til desimaltimer?",
        answer:
          "Del minuttene på 60. 45 minutter er 0,75 timer, så 1 time og 45 minutter er 1,75 timer. Bruk desimaltallet på fakturaen: 1,75 × timeprisen din.",
      },
      {
        question: "Hvorfor ikke skrive 1,45 for 1 time og 45 minutter?",
        answer:
          "Fordi 1,45 timer er 1 time og 27 minutter. Å skrive klokkeslettet som desimaltall er den vanligste timefeilen på fakturaer, og du fakturerer for lite på hver linje. Hurtigomregneren under kalkulatoren viser begge formene.",
      },
      {
        question: "Fungerer den for nattskift?",
        answer:
          "Ja. Er sluttiden tidligere enn starttiden, regnes skiftet som om det går over midnatt: 22:00 til 02:00 er 4 timer.",
      },
      {
        question: "Skal pauser med på fakturaen?",
        answer:
          "Vanligvis fakturerer du tiden du faktisk har jobbet, så ubetalte pauser holdes utenfor. Står det noe annet i avtalen din, setter du pausen til 0.",
      },
      {
        question: "Blir noe av det jeg skriver, sendt til en server?",
        answer: "Nei. Kalkulatoren kjører helt i nettleseren din, og ingenting lagres.",
      },
    ],
  },

  rate: {
    meta: {
      title: "Beregn timepris som frilanser og ENK (gratis) | Invoicor",
      description:
        "Beregn minste timepris og dagspris som frilanser eller ENK ut fra ønsket inntekt, skatt, kostnader, fri og fakturerbare timer. Gratis.",
    },
    title: "Beregn timepris",
    subtitle:
      "Regn deg baklengs fra inntekten du vil sitte igjen med, til timeprisen og dagsprisen du trenger som frilanser eller ENK, med skatt, kostnader, fri og reelle fakturerbare timer.",
    defaults: { takeHome: "550000", tax: "35", costs: "60000", weeks: "7", hours: "25" },
    ui: {
      label: "Timepriskalkulator",
      earnTitle: "Hva du vil tjene",
      payTitle: "Hva det koster deg",
      billTitle: "Hvor mye du kan fakturere",
      periodAria: "Legg inn beløp",
      perMonth: "Per måned",
      perYear: "Per år",
      takeHome: "Inntekt du vil sitte igjen med",
      takeHomeHint: "Etter skatt, som en lønn",
      tax: "Skatt og trygdeavgift",
      taxHint: "Andel av overskuddet du setter av",
      costs: "Driftskostnader",
      costsHint: "Forsikring, programvare, utstyr, regnskapsfører",
      weeks: "Uker du ikke fakturerer per år",
      weeksHint: "Ferie, sykdom, rolige uker",
      hours: "Fakturerbare timer per uke",
      hoursHint: "Bare betalt arbeid, ikke administrasjon eller reise",
      total: "Din minste timepris",
      day: "Dagspris (8 fakturerbare timer)",
      stepsTitle: "Slik regnet vi",
      step1:
        "For å sitte igjen med {takeHome} i året trenger du {beforeTax} før skatt ({tax} % satt av).",
      step2:
        "Legg til {costs} i kostnader: du må fakturere {revenue} i året, rundt {perMonth} i måneden.",
      step3: "Du kan fakturere {weeks} uker × {hours} timer = {billable} timer i året.",
      step4: "{revenue} ÷ {billable} timer = {hourly} i timen.",
      note: "Et minimum, eks. mva: den dekker inntekten, skatten og kostnadene dine, ikke noe mer. Skatten er en grov andel; regnskapsføreren din kan gi deg det riktige tallet.",
      invalid: "Legg inn minst én fakturerbar time per uke og færre enn 52 uker fri.",
      cta: "Lag en faktura med denne timeprisen",
      invoiceItem: "Arbeid etter timepris",
    },
    sections: [
      {
        title: "1. Fra netto inntekt til overskudd før skatt",
        paragraphs: [
          "Overskudd før skatt = inntekt etter skatt ÷ (1 − skatteandel). For å sitte igjen med 550 000 kr når du setter av 35 %, trenger du rundt 846 154 kr i overskudd før skatt.",
        ],
      },
      {
        title: "2. Legg til driftskostnadene",
        paragraphs: [
          "Forsikring, programvare, utstyr, bil, regnskapsfører, mobil: alt du betaler for å drive firmaet. Omsetning du trenger = overskudd før skatt + kostnader.",
        ],
      },
      {
        title: "3. Del på timene du kan fakturere",
        paragraphs: [
          "Fakturerbare timer per år = (52 − uker fri) × fakturerbare timer per uke. Timepris = omsetning ÷ fakturerbare timer. Dagsprisen regner med 8 fakturerbare timer.",
          "Eksempel: 846 154 + 60 000 = 906 154 kr i året, fordelt på 45 uker med 25 fakturerbare timer (1 125 timer), gir rundt 805,47 kr timen, eller 6 444 kr dagen.",
        ],
      },
    ],
    faqs: [
      {
        question: "Hvordan beregner jeg timepris som frilanser?",
        answer:
          "Start med det du vil sitte igjen med i året, legg til skatten du betaler på det og driftskostnadene dine, og del på timene du faktisk kan fakturere i løpet av et år. Kalkulatoren gjør akkurat det og viser hvert steg.",
      },
      {
        question: "Hvor mange fakturerbare timer bør jeg regne med?",
        answer:
          "Færre enn du jobber. Administrasjon, tilbud, salg, reise og læring er ikke fakturerbart. Mange frilansere fakturerer 20 til 30 timer i en 40-timers uke; start med et tall du faktisk har klart de siste månedene.",
      },
      {
        question: "Hvorfor er uker fri med i utregningen?",
        answer:
          "Fordi du ikke tjener noe når du har ferie, er syk eller er mellom oppdrag, men kostnadene løper likevel. Med 7 uker fri må årsinntekten komme fra 45 uker med arbeid.",
      },
      {
        question: "Er skatteprosenten nøyaktig?",
        answer:
          "Det er en grov andel du setter av, ikke en skatteberegning: den faktiske skatten avhenger av fradrag, trinnskatt og trygdeavgift. Spør regnskapsføreren din om ditt eget tall og legg det inn.",
      },
      {
        question: "Er dette timeprisen jeg bør ta?",
        answer:
          "Det er minimumet ditt: timeprisen som dekker inntekten, skatten og kostnadene dine. Hva du tar, avhenger også av erfaringen din, markedet og verdien av arbeidet. Mange frilansere legger på en margin.",
      },
    ],
  },
};
