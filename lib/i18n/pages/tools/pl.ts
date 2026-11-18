import type { ToolsDict } from "./en";

/** Free tools, Polish. Informal "Ty" (capitalised), like home/pl.ts; gender-neutral headings. */
export const pl: ToolsDict = {
  common: {
    navLabel: "Darmowe narzędzia",
    home: "Strona główna",
    eyebrow: "Darmowe narzędzie · bez rejestracji",
    howEyebrow: "Jak to działa",
    howTitle: "Obliczenia, prostymi słowami",
    faqEyebrow: "FAQ",
    faqTitle: "Pytania o to narzędzie",
    moreTools: "Więcej darmowych narzędzi",
    closing: {
      title: "Faktury co tydzień?",
      gradient: "Wystawiaj je w aplikacji.",
      text: "Zapisani klienci i pozycje, każda faktura ze swoim statusem i czysty PDF prosto z iPhone'a. {n} faktury za darmo.",
    },
    currency: "Waluta",
  },

  hub: {
    meta: {
      title: "Darmowe narzędzia: generator faktur i kalkulatory | Invoicor",
      description:
        "Darmowe narzędzia dla freelancerów i małych firm: generator faktur online, kalkulator VAT netto brutto, kalkulator godzin pracy i stawki godzinowej.",
    },
    crumb: "Darmowe narzędzia",
    eyebrow: "Za darmo · bez rejestracji · bez instalacji",
    title: "Darmowe narzędzia, żeby dostać zapłatę",
    subtitle:
      "Wystaw fakturę, policz VAT netto i brutto, zsumuj godziny pracy i ustal stawkę, która pokryje Twoje rachunki. Wszystko działa w Twojej przeglądarce.",
    closing: {
      title: "Wszystko to na Twoim iPhonie.",
      gradient: "{n} faktury za darmo.",
      text: "Zapisani klienci i pozycje, VAT i sumy liczone za Ciebie, a każda faktura ze swoim statusem.",
    },
  },

  tools: {
    generator: {
      name: "Wystaw fakturę online",
      short: "Wypełnij fakturę online i pobierz PDF. 21 wzorów, bez rejestracji.",
    },
    vat: {
      name: "Kalkulator VAT",
      short:
        "Dolicz VAT do ceny netto albo wylicz netto z brutto, ze stawkami podstawowymi 19 krajów.",
    },
    hours: {
      name: "Kalkulator godzin pracy",
      short: "Zsumuj tydzień pracy i zamień 1:45 na 1,75 godz., których potrzebuje faktura.",
    },
    rate: {
      name: "Kalkulator stawki godzinowej",
      short:
        "Policz od dochodu, który chcesz zachować, do potrzebnej stawki godzinowej i dziennej.",
    },
  },

  vat: {
    meta: {
      title: "Kalkulator VAT online: netto brutto za darmo | Invoicor",
      description:
        "Darmowy kalkulator VAT: przelicz netto na brutto i brutto na netto. Stawka 23% i stawki podstawowe 19 krajów, wynik od razu, bez instalacji.",
    },
    title: "Kalkulator VAT netto brutto",
    subtitle:
      "Dolicz VAT do ceny netto albo wylicz netto z kwoty brutto, ze stawką 23% lub stawkami podstawowymi 19 krajów. Od razu, za darmo, a nic nie opuszcza Twojej przeglądarki.",
    defaultCountry: "PL",
    ui: {
      label: "Kalkulator VAT",
      modeAria: "Jaka to kwota?",
      add: "Dolicz VAT (kwota netto)",
      remove: "Wylicz VAT (kwota brutto)",
      amountNet: "Kwota netto (bez VAT)",
      amountGross: "Kwota brutto (z VAT)",
      country: "Kraj (stawka podstawowa)",
      custom: "Własna stawka",
      gst: "GST",
      rate: "Stawka VAT",
      net: "Netto (bez VAT)",
      vatRow: "VAT {rate}%",
      gross: "Brutto (z VAT)",
      cta: "Wystaw z tym fakturę",
      invoiceItem: "Towar lub usługa",
    },
    sections: [
      {
        title: "Doliczanie VAT (z netto na brutto)",
        paragraphs: [
          "VAT = netto × stawka ÷ 100, a brutto = netto + VAT. Usługa za 478,50 zł netto z VAT 23% to 110,06 zł VAT i 588,56 zł brutto. Kwoty zaokrąglamy do grosza, od połowy w górę, tak jak na fakturze.",
        ],
      },
      {
        title: "Wyliczanie VAT (z brutto na netto)",
        paragraphs: [
          "netto = brutto ÷ (1 + stawka ÷ 100). Tu najczęściej pojawia się błąd: odjęcie stawki od kwoty brutto daje za mało. Przy VAT 23% kwota 123 zł brutto to 100 zł netto, a nie 94,71 zł.",
          "Przyda się, gdy dostawca podaje cenę z VAT albo gdy ustalasz cenę dla klienta prywatnego i chcesz wiedzieć, ile z niej zostaje dla Ciebie.",
        ],
      },
      {
        title: "Stawka podstawowa i stawki obniżone",
        paragraphs: [
          "Lista krajów zawiera stawki podstawowe. W Polsce to 23%, a obok niej są stawki obniżone 8% i 5% dla części towarów i usług; niektóre usługi są zwolnione z VAT. W razie wątpliwości sprawdź na stronie Krajowej Informacji Skarbowej albo zapytaj księgową, a potem wpisz własną stawkę.",
        ],
      },
    ],
    faqs: [
      {
        question: "Jak doliczyć VAT do ceny netto?",
        answer:
          "Pomnóż cenę netto przez stawkę VAT i dodaj wynik. Dla 100 zł przy VAT 23%: 100 × 0,23 = 23 zł VAT, więc cena brutto to 123 zł. Kalkulator zrobi to za Ciebie i zaokrągli do grosza.",
      },
      {
        question: "Jak wyliczyć netto z kwoty brutto?",
        answer:
          "Podziel kwotę brutto przez 1 plus stawka, zamiast odejmować stawkę. Dla 123 zł z VAT 23%: 123 ÷ 1,23 = 100 zł netto, a VAT to 23 zł. Odjęcie 23% od 123 zł dałoby 94,71 zł, a to błąd.",
      },
      {
        question: "Jakie stawki VAT zawiera kalkulator?",
        answer:
          "Stawki podstawowe 16 krajów europejskich oraz GST Australii, Kanady i Nowej Zelandii, według stanu na listopad 2026 r. Wiele krajów ma też stawki obniżone dla części towarów i usług (w Polsce 8% i 5%); jeśli Twoja stawka jest inna, wpisz własną.",
      },
      {
        question: "Czy na fakturze podawać ceny netto czy brutto?",
        answer:
          "Firmy zwykle oczekują cen netto z VAT doliczonym na dole, a klienci prywatni ceny, którą płacą, czyli brutto. W obu przypadkach faktura VAT powinna pokazywać wartość netto, stawkę, kwotę VAT i kwotę brutto. W aplikacji Invoicor i darmowym generatorze wybierasz przy każdej fakturze, czy ceny zawierają VAT. Pamiętaj, że faktury VAT między firmami w Polsce wystawia się w KSeF, a PDF nie jest e-fakturą.",
      },
      {
        question: "Czy to, co wpisuję, trafia na serwer?",
        answer: "Nie. Kalkulator działa w całości w Twojej przeglądarce.",
      },
    ],
  },

  hours: {
    meta: {
      title: "Kalkulator godzin pracy do faktury (za darmo) | Invoicor",
      description:
        "Darmowy kalkulator godzin pracy: zsumuj godziny od–do minus przerwy, zamień godziny i minuty na liczbę dziesiętną i zobacz kwotę do faktury.",
    },
    title: "Kalkulator godzin pracy",
    subtitle:
      "Zsumuj tydzień godzin rozpoczęcia i zakończenia minus przerwy, zobacz wynik w godzinach i minutach oraz dziesiętnie, i sprawdź, ile zafakturować przy Twojej stawce.",
    ui: {
      label: "Kalkulator godzin pracy",
      intro:
        "Dodaj każdy dzień pracy: początek, koniec i nieodpłatną przerwę. Tyle dni, ile potrzebujesz – tydzień albo cały miesiąc.",
      date: "Data",
      start: "Od",
      end: "Do",
      break: "Przerwa (min)",
      hours: "Godziny",
      remove: "Usuń",
      startAria: "{day}, początek",
      endAria: "{day}, koniec",
      breakAria: "{day}, przerwa w minutach",
      removeAria: "Usuń: {day}",
      addDay: "Dodaj dzień",
      addWeek: "Dodaj tydzień",
      period: "Dni: {days} · {from} – {to}",
      rate: "Twoja stawka godzinowa (opcjonalnie)",
      totalTime: "Przepracowane godziny",
      decimal: "W godzinach dziesiętnych (na fakturę)",
      toInvoice: "Do zafakturowania",
      totalHours: "Suma godzin",
      calc: "{hours} godz. × {rate}",
      convertTitle: "Szybka zamiana: godziny i minuty ⇄ liczba dziesiętna",
      convertLabel: "Czas (1:45) lub liczba dziesiętna (1,75)",
      convertHint: "Wpisz czas, np. 1:45, albo liczbę, np. 1,75",
      convertResult: "{time} = {hours} godz.",
      cta: "Wystaw fakturę za te godziny",
      invoiceItem: "Usługi {from} – {to}",
    },
    sections: [
      {
        title: "Godziny pracy w ciągu dnia",
        paragraphs: [
          "Godziny = koniec − początek − przerwa. Od 9:00 do 17:30 z 30-minutową przerwą to 8 godzin. Zmiana, która kończy się po północy, liczy się przez północ.",
        ],
      },
      {
        title: "Z godzin i minut na liczbę dziesiętną",
        paragraphs: [
          "Na fakturze godziny mnoży się przez stawkę, więc potrzebne są godziny dziesiętne: minuty ÷ 60. 15 minut = 0,25, 30 = 0,5, 45 = 0,75. Tydzień 38:45 to 38,75 godz.",
          "Przy stawce 100 zł za godzinę 38,75 godz. to 3875 zł. Wpisanie 38,45 dałoby 3845 zł, czyli 30 zł mniej.",
        ],
      },
      {
        title: "Godziny na fakturze",
        paragraphs: [
          "Użyj jednej pozycji na każdy rodzaj pracy: godziny dziesiętne jako ilość, stawka godzinowa jako cena, np. „Prace na budowie, 38,75 godz. × 100 zł”. Dodaj daty w opisie pozycji albo w uwagach, żeby klient mógł porównać je ze swoimi zapisami.",
        ],
      },
    ],
    faqs: [
      {
        question: "Jak zamienić minuty na godziny dziesiętne?",
        answer:
          "Podziel minuty przez 60. 45 minut to 0,75 godz., więc 1 godzina 45 minut to 1,75 godz. Na fakturze użyj liczby dziesiętnej: 1,75 × Twoja stawka godzinowa.",
      },
      {
        question: "Dlaczego nie wpisać 1,45 za 1 godzinę 45 minut?",
        answer:
          "Bo 1,45 godz. to 1 godzina i 27 minut. Zapisanie czasu z zegara jako liczby dziesiętnej to najczęstszy błąd w godzinach na fakturach i zaniża każdą pozycję. Szybka zamiana pod kalkulatorem pokazuje obie formy.",
      },
      {
        question: "Czy działa dla zmian nocnych?",
        answer:
          "Tak. Jeśli koniec jest wcześniej niż początek, zmiana liczy się przez północ: od 22:00 do 2:00 to 4 godziny.",
      },
      {
        question: "Czy przerwy wpisywać na fakturę?",
        answer:
          "Zwykle fakturuje się czas faktycznej pracy, więc nieopłacone przerwy się pomija. Jeśli umowa z klientem mówi inaczej, ustaw przerwę na 0.",
      },
      {
        question: "Czy to, co wpisuję, trafia na serwer?",
        answer: "Nie. Kalkulator działa w całości w Twojej przeglądarce i nic nie jest zapisywane.",
      },
    ],
  },

  rate: {
    meta: {
      title: "Kalkulator stawki godzinowej: freelancer i B2B | Invoicor",
      description:
        "Policz minimalną stawkę godzinową i dzienną na B2B lub jako freelancer: z dochodu, który chcesz mieć, podatku, ZUS, kosztów, urlopu i godzin.",
    },
    title: "Kalkulator stawki godzinowej",
    subtitle:
      "Policz od dochodu, który chcesz mieć na rękę, do stawki godzinowej i dziennej, jakiej potrzebujesz na B2B lub jako freelancer, z podatkiem, ZUS, kosztami, urlopem i realnymi godzinami do zafakturowania.",
    defaults: { takeHome: "120000", tax: "25", costs: "15000", weeks: "7", hours: "25" },
    ui: {
      label: "Kalkulator stawki godzinowej",
      earnTitle: "Ile chcesz zarabiać",
      payTitle: "Ile Cię to kosztuje",
      billTitle: "Ile możesz zafakturować",
      periodAria: "Wpisz kwoty",
      perMonth: "Miesięcznie",
      perYear: "Rocznie",
      takeHome: "Dochód na rękę",
      takeHomeHint: "Po podatku i składkach, jak pensja",
      tax: "Podatek i składki (ZUS, zdrowotna)",
      taxHint: "Część zysku, którą odkładasz",
      costs: "Koszty firmy",
      costsHint: "Ubezpieczenie, programy, sprzęt, księgowa",
      weeks: "Tygodnie bez fakturowania w roku",
      weeksHint: "Urlop, choroba, przestoje",
      hours: "Godziny do zafakturowania w tygodniu",
      hoursHint: "Tylko płatna praca, bez administracji i dojazdów",
      total: "Twoja minimalna stawka godzinowa",
      day: "Stawka dzienna (8 godzin do zafakturowania)",
      stepsTitle: "Jak to policzyliśmy",
      step1:
        "Żeby zostało Ci {takeHome} rocznie, potrzebujesz {beforeTax} przed podatkiem (odkładasz {tax}%).",
      step2:
        "Dodaj {costs} kosztów firmy: musisz zafakturować {revenue} rocznie, około {perMonth} miesięcznie.",
      step3: "Możesz fakturować {weeks} tyg. × {hours} godz. = {billable} godz. rocznie.",
      step4: "{revenue} ÷ {billable} godz. = {hourly} za godzinę.",
      note: "To minimum, netto (bez VAT): pokrywa Twój dochód, podatek, składki i koszty, nic ponad to. Podatek to przybliżony udział; dokładną liczbę poda Ci księgowa.",
      invalid:
        "Wpisz co najmniej jedną godzinę do zafakturowania w tygodniu i mniej niż 52 tygodnie wolnego.",
      cta: "Wystaw fakturę z tą stawką",
      invoiceItem: "Usługi rozliczane godzinowo",
    },
    sections: [
      {
        title: "1. Od dochodu na rękę do zysku przed podatkiem",
        paragraphs: [
          "zysk przed podatkiem = dochód na rękę ÷ (1 − udział podatku i składek). Żeby zachować 120 000 zł, odkładając 25%, potrzebujesz 160 000 zł zysku przed podatkiem.",
        ],
      },
      {
        title: "2. Dodaj koszty firmy",
        paragraphs: [
          "Ubezpieczenie, programy, sprzęt, samochód, księgowa, telefon: wszystko, za co płacisz, żeby prowadzić firmę. Potrzebny przychód = zysk przed podatkiem + koszty.",
        ],
      },
      {
        title: "3. Podziel przez godziny, które możesz zafakturować",
        paragraphs: [
          "godziny do zafakturowania w roku = (52 − tygodnie wolnego) × godziny do zafakturowania w tygodniu. Stawka godzinowa = przychód ÷ godziny do zafakturowania. Stawka dzienna zakłada 8 godzin do zafakturowania.",
          "Przykład: 160 000 zł + 15 000 zł = 175 000 zł rocznie, rozłożone na 45 tygodni po 25 godzin (1125 godzin), to ok. 155,56 zł za godzinę, czyli ok. 1244 zł dziennie.",
        ],
      },
    ],
    faqs: [
      {
        question: "Jak obliczyć stawkę godzinową na B2B?",
        answer:
          "Zacznij od tego, ile chcesz zachować w roku, dodaj podatek i składki, które od tego zapłacisz, oraz koszty firmy, a potem podziel przez godziny, które naprawdę zafakturujesz w ciągu roku. Kalkulator robi dokładnie to i pokazuje każdy krok.",
      },
      {
        question: "Ile godzin do zafakturowania przyjąć?",
        answer:
          "Mniej, niż pracujesz. Administracja, wyceny, sprzedaż, dojazdy i nauka nie są płatne. Wielu freelancerów fakturuje 20 do 30 godzin w 40-godzinnym tygodniu; zacznij od liczby, którą naprawdę udało Ci się osiągnąć w ostatnich miesiącach.",
      },
      {
        question: "Dlaczego tygodnie wolnego są częścią obliczenia?",
        answer:
          "Bo na urlopie, w czasie choroby albo między projektami nie zarabiasz, a koszty i ZUS biegną dalej. Przy 7 tygodniach wolnego roczny dochód musi pochodzić z 45 tygodni pracy.",
      },
      {
        question: "Czy procent podatku jest dokładny?",
        answer:
          "To przybliżony udział, który odkładasz, a nie wyliczenie podatku: prawdziwa kwota zależy od formy opodatkowania (skala, liniowy, ryczałt), składek ZUS i ulg. Zapytaj księgową o swoją liczbę i wpisz ją.",
      },
      {
        question: "Czy tyle powinna wynosić moja stawka?",
        answer:
          "To Twoje minimum: stawka, która pokrywa dochód, podatek, składki i koszty. Ile bierzesz, zależy też od doświadczenia, rynku i wartości pracy. Wielu freelancerów dolicza do tego marżę.",
      },
    ],
  },
};
