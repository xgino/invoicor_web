import type { GeneratorDict } from "./en";

/**
 * Free generator, Polish, written for Poland. Informal "Ty" (capitalised), as on the Polish home.
 * Honest about KSeF: a PDF from the generator is not a KSeF e-faktura (same substance as home/pl).
 */
export const pl: GeneratorDict = {
  ui: {
    viewAria: "Widok generatora",
    tabForm: "Formularz",
    tabPreview: "Podgląd",
    previewAria: "Podgląd faktury",
    offerTitle: "Wczytać przykład: {niche}?",
    offerText: "Zastąpi obecne pozycje i uwagi; dane Twojej firmy i klienta zostaną.",
    offerLoad: "Wczytaj przykład",
    offerKeep: "Zostaw moje",
    savedBlocked: "Nie zapisano: ta przeglądarka blokuje zapis danych",
    savedOk: "Zapisano tylko w tej przeglądarce. Nikt inny tego nie widzi.",
    newInvoice: "Nowa faktura",
    newInvoiceTitle: "Zostawia dane Twojej firmy, czyści klienta i pozycje",
    clearAll: "Wyczyść wszystko",
    clearConfirm:
      "Wyczyścić wszystko? Dane Twojej firmy, klienta i pozycje zostaną usunięte z tej przeglądarki.",
    templateLabel: "Wzór",
    browseTemplates: "Przeglądaj wzory",
    subtotal: "Wartość netto",
    discount: "Rabat",
    tax: "VAT",
    taxIncluded: " (w cenie)",
    total: "Do zapłaty",

    setupTitle: "Ustawienia faktury",
    setupHint: "Wygląd, język i waluta",
    change: "Zmień",
    invoiceLanguage: "Język faktury",
    currency: "Waluta",
    dateFormat: "Format daty",

    detailsTitle: "Dane faktury",
    detailsHint: "Numer, daty i termin płatności",
    invoiceNumber: "Numer faktury",
    invoiceNumberHint: "Numeruj po kolei, np. FV/1/2026, FV/2/2026",
    issueDate: "Data wystawienia",
    dueDate: "Termin płatności",
    paymentTerms: "Warunki płatności",
    paymentTermsPlaceholder: "np. Przelew w ciągu 14 dni",

    businessTitle: "Twoja firma",
    businessHint: "Sprzedawca, czyli kto wystawia fakturę",
    businessName: "Nazwa firmy",
    email: "E-mail",
    phone: "Telefon",
    address: "Adres",
    postalCode: "Kod pocztowy",
    city: "Miejscowość",
    country: "Kraj",
    taxId: "NIP / numer VAT UE",
    taxIdPlaceholder: "np. PL1234567890",
    registration: "Numer rejestrowy",
    registrationPlaceholder: "np. REGON, KRS",
    bankDetails: "Dane do przelewu",
    bankName: "Nazwa banku",
    iban: "Numer rachunku / IBAN",
    swift: "SWIFT / BIC",

    clientTitle: "Nabywca",
    clientHint: "Komu wystawiasz fakturę",
    clientName: "Imię i nazwisko lub nazwa firmy",
    contactPerson: "Osoba kontaktowa",
    clientTaxHint: "Potrzebny dla klientów firmowych, także z innych krajów UE",

    itemsTitle: "Pozycje",
    itemsHint: "Za co wystawiasz fakturę, do {max} pozycji",
    addLine: "Dodaj pozycję",
    itemsLimit: "To limit darmowej wersji. W aplikacji Invoicor dodasz więcej.",
    line: "Pozycja {line}",
    moveUp: "Przesuń pozycję {line} w górę",
    moveDown: "Przesuń pozycję {line} w dół",
    removeLine: "Usuń pozycję {line}",
    item: "Nazwa towaru lub usługi",
    itemPlaceholder: "np. Wymiana baterii kuchennej",
    qty: "Ilość",
    price: "Cena",
    details: "Szczegóły (opcjonalnie)",
    detailsPlaceholder: "Pokażą się w osobnym wierszu pod pozycją",
    amount: "Wartość",

    taxTitle: "VAT i rabat",
    taxHint: "Jedna stawka VAT dla całej faktury",
    taxRate: "Stawka VAT",
    taxInclusive: "Ceny zawierają już VAT (brutto)",
    discountNone: "Bez rabatu",
    discountPercent: "Procentowy (%)",
    discountFixed: "Kwotowy",
    discountPct: "Rabat %",
    discountAmount: "Kwota rabatu",

    notesTitle: "Uwagi",
    notesHint: "Podziękowanie, warunki gwarancji lub cokolwiek innego",

    payTitle: "Link do płatności online",
    payHint: "Opcjonalnie. Klient płaci bezpośrednio Tobie, nigdy przez nas",
    payLabel: "Twój link do płatności",
    payFieldHint:
      "Twój własny link PayPal, Stripe lub inny. Pojawi się jako przycisk „Zapłać online”.",
    payError: "Link musi zaczynać się od https://",

    logo: "Logo (opcjonalnie)",
    logoAlt: "Twoje logo",
    logoRemove: "Usuń",
    logoUpload: "Dodaj logo",
    logoHint: "PNG lub JPG, do 500 KB. Zastąpi nazwę firmy u góry.",
    logoErrType: "Użyj obrazu PNG lub JPG.",
    logoErrSize: "Logo może mieć maksymalnie 500 KB.",
    logoErrRead: "Nie udało się odczytać tego obrazu.",

    creating: "Tworzę PDF…",
    download: "Pobierz PDF",
    downloadNote: "Za darmo. Na dole PDF-a jest mała linijka „Created with invoicor.com”.",
    downloadNeedsItem: "Dodaj co najmniej jedną pozycję z nazwą, aby pobrać fakturę.",
    pdfError:
      "Ta przeglądarka nie mogła utworzyć PDF-a. Spróbuj ponownie lub użyj innej przeglądarki. Formularz jest zapisany.",
    ready: "Gotowe",
    doneTitle: "Faktura jest pobrana",
    doneText: "Plik {file} znajdziesz w folderze Pobrane.",
    downloadAgain: "Pobierz ponownie",
    createAnother: "Wystaw kolejną",
    appTitle: "Następnym razem wyślij ją z telefonu.",
    appText:
      "Aplikacja Invoicor zapamięta tego klienta i Twoje pozycje, przechowa każdą fakturę z jej statusem i nie dodaje znaku wodnego. {n} faktury za darmo.",
    fileName: "faktura",

    previewFrame: "Podgląd faktury",
    previewError: "Nie udało się wczytać podglądu. Sprawdź połączenie; formularz jest zapisany.",
    overflowTitle: "Faktura nie mieści się już na jednej stronie.",
    overflowText:
      "Dół faktury (uwagi, dane do przelewu) zostałby ucięty. Skróć szczegóły pozycji albo użyj mniejszej liczby pozycji.",

    pickerTitle: "Wybierz wzór",
    pickerCount: "{free} za darmo tutaj · wszystkie {all} w aplikacji",
    close: "Zamknij",
    free: "Za darmo",
    inApp: "W aplikacji",
    lockedAria: "{name}: dostępny w aplikacji Invoicor",
    thumbTitle: "Wzór {name}",
  },

  defaults: {
    invoiceNumber: "FV/1/2026",
    paymentTerms: "Przelew w ciągu 14 dni",
    notes: "Dziękuję za współpracę.",
  },

  page: {
    meta: {
      title: "Wystaw fakturę online za darmo, PDF | Invoicor",
      description:
        "Faktura online za darmo: wybierz wzór faktury, dodaj pozycje i pobierz PDF. Bez rejestracji. Także faktura pro forma. 38 walut, 11 języków.",
    },
    home: "Strona główna",
    crumb: "Wystaw fakturę online",
    eyebrow: "Za darmo · bez rejestracji",
    h1: "Wystaw fakturę online za darmo",
    lead: "Uzupełnij dane, wybierz wzór i pobierz fakturę w PDF. Za darmo, bez zakładania konta, w 38 walutach i 11 językach. Uwaga: to nie jest e-faktura w KSeF. Sprawdzi się m.in. jako faktura pro forma lub dla klientów prywatnych.",

    howEyebrow: "Jak to działa",
    howTitle: "Jak wystawić fakturę w 3 krokach",
    howDescription: "Przygotuj profesjonalną fakturę online i pobierz ją jako PDF.",
    steps: [
      {
        name: "Dodaj swoją firmę i nabywcę",
        text: "Wpisz nazwę firmy, adres i NIP, a potem dane klienta. Jeśli masz logo, dodaj je.",
      },
      {
        name: "Dodaj pozycje, VAT i rabat",
        text: "Wypisz, co wykonano lub sprzedano, z ilością i ceną. Ustaw jedną stawkę VAT i ewentualny rabat; sumy policzą się same.",
      },
      {
        name: "Wybierz wzór i pobierz PDF",
        text: "Wybierz jeden z 21 darmowych wzorów faktury, sprawdź podgląd na żywo i pobierz fakturę jako PDF.",
      },
    ],

    mustEyebrow: "Lista kontrolna",
    mustTitle: "Co musi zawierać faktura VAT",
    mustIntro:
      "Elementy faktury VAT określa art. 106e ustawy o VAT. Najważniejsze z nich to poniższe; w generatorze wpiszesz każdy z nich.",
    mustHave: [
      "Datę wystawienia i kolejny numer faktury, nadany w ramach jednej lub kilku serii (np. FV/1/2026)",
      "Imiona i nazwiska lub nazwy sprzedawcy i nabywcy oraz ich adresy",
      "NIP sprzedawcy i NIP nabywcy (dla klienta z innego kraju UE: jego numer VAT UE)",
      "Datę sprzedaży lub wykonania usługi, jeśli różni się od daty wystawienia",
      "Nazwę (rodzaj) towaru lub usługi",
      "Miarę i ilość towarów lub zakres usług",
      "Cenę jednostkową netto i wartość sprzedaży netto",
      "Stawkę podatku i kwotę podatku",
      "Kwotę należności ogółem (do zapłaty)",
      "Termin i sposób płatności, np. numer rachunku: nie zawsze wymagane, ale ułatwia zapłatę",
    ],
    mustNote:
      "Ważne: od 2026 r. faktury VAT między firmami w Polsce wystawia się w Krajowym Systemie e-Faktur (KSeF): od 1 lutego 2026 r. największe firmy, od 1 kwietnia 2026 r. pozostałe, a najmniejsze od 2027 r. PDF z tego generatora nie jest e-fakturą w KSeF. Przyda się jako faktura pro forma, faktura dla klienta prywatnego (konsumenta) albo czytelna kopia do wysłania e-mailem. Jeśli korzystasz ze zwolnienia z VAT, podaj na fakturze podstawę prawną (np. art. 113 ust. 1 lub art. 43 ust. 1 ustawy o VAT). W razie wątpliwości zapytaj księgową.",

    typesEyebrow: "Podstawy",
    typesTitle: "Faktura, pro forma czy paragon?",
    types: [
      {
        title: "Faktura pro forma",
        text: "Przed pracą lub sprzedażą: oferta albo prośba o przedpłatę. Nie jest dokumentem księgowym.",
      },
      {
        title: "Faktura",
        text: "Po sprzedaży (lub przed nią, przy zaliczce): dokument sprzedaży z terminem płatności.",
      },
      { title: "Paragon", text: "Przy sprzedaży konsumentom: potwierdzenie z kasy fiskalnej." },
    ],
    typesNote:
      "Ten generator tworzy faktury w PDF. Na fakturze pro forma wpisz w uwagach, że jest to „pro forma”, i nadaj jej osobną numerację, np. PF/1/2026.",

    termsEyebrow: "Zapłata na czas",
    termsTitle: "Termin płatności, który działa",
    termsText:
      "Warunki płatności mówią klientowi, kiedy ma zapłacić. „Płatne przy odbiorze” albo przelew w 7 dni pasuje do małych zleceń i jednorazowych klientów. Dla firm typowe są 14 lub 30 dni. Między firmami termin dłuższy niż 60 dni wymaga wyraźnej umowy, a po terminie możesz naliczyć odsetki za opóźnienie. Cokolwiek wybierzesz, wpisz na fakturze konkretną datę płatności, podaj numer rachunku lub link do płatności i zachowaj numer faktury. Jasny termin to najprostszy sposób, by nie upominać się o pieniądze.",

    tipsEyebrow: "Dobre nawyki",
    tipsTitle: "Numeracja, wysyłka i przypomnienia",
    tips: [
      {
        title: "Numeruj faktury po kolei",
        text: "Używaj jednej prostej serii, np. FV/1/2026, FV/2/2026, i nigdy nie powtarzaj numeru. Przepisy wymagają kolejnej numeracji, a dzięki niej szybko znajdziesz każdą fakturę, gdy zapyta klient albo księgowa.",
      },
      {
        title: "Wyślij ją tego samego dnia",
        text: "Faktura wysłana zaraz po zleceniu szybciej zostaje opłacona. Wyślij PDF e-mailem lub komunikatorem i wpisz w wiadomości kwotę i termin płatności, żeby klient widział je bez otwierania pliku.",
      },
      {
        title: "Przypominaj uprzejmie i wcześnie",
        text: "Gdy minie termin, wyślij krótkie, życzliwe przypomnienie z fakturą w załączniku. Większość spóźnionych płatności to zwykłe zapomnienie. Zachowuj kopię każdej faktury, żeby zawsze wiedzieć, co jest jeszcze nieopłacone.",
      },
    ],

    vsEyebrow: "Twój wybór",
    vsTitle: "Ten generator czy aplikacja Invoicor?",
    vsIntro:
      "Oba tworzą te same profesjonalne faktury z tych samych wzorów. Generator sprawdzi się przy pojedynczej fakturze; aplikacja, gdy wystawiasz faktury co tydzień.",
    vsCaption: "Darmowy generator faktur w porównaniu z aplikacją Invoicor",
    vsGenerator: "Generator",
    vsApp: "Aplikacja",
    compare: [
      ["Cena", "Za darmo", "{n} faktury za darmo, potem plan"],
      ["Znak wodny", "Mała linijka „Created with invoicor.com”", "Brak"],
      ["Wzory", "21 za darmo", "Wszystkie 31 (21 za darmo, reszta w planach)"],
      ["Pozycje na fakturze", "Do 10", "Do 50 (Pro)"],
      ["Zapisani klienci i pozycje", "Tylko w tej przeglądarce", "Tak, na Twoim koncie"],
      ["Historia i status faktur", "Nie", "Szkic, wysłana, zapłacona, po terminie"],
      ["Gdzie", "Dowolna przeglądarka", "iPhone i iPad"],
    ],

    moreEyebrow: "Wzory i poradniki",
    moreTitle: "Faktury dla Twojej branży",
    moreBefore:
      "Generator ma 21 darmowych wzorów faktury. Co wpisać na fakturze w Twojej branży, sprawdzisz w naszych",
    moreLink: "wzorach faktur i poradnikach",
    moreAfter: " albo w poradniku dla Twojej branży:",
    moreEnglishNote: "Te poradniki są na razie dostępne po angielsku.",
    useCases: [
      { href: "/industries/plumbers-hvac", label: "Hydraulicy i instalatorzy" },
      { href: "/industries/electricians", label: "Elektrycy" },
      { href: "/industries/freelance-designers", label: "Graficy i projektanci" },
      { href: "/industries/photographers-videographers", label: "Fotografowie" },
      { href: "/industries/consultants-coaches", label: "Doradcy i coachowie" },
      { href: "/industries/cleaning-services", label: "Firmy sprzątające" },
    ],

    faqEyebrow: "FAQ",
    faqTitle: "Faktura online za darmo: pytania",
    faqs: [
      {
        question: "Czy ten generator faktur jest naprawdę darmowy?",
        answer:
          "Tak. Wystawianie i pobieranie faktur jest tu bezpłatne i nie wymaga konta. Na dole każdego PDF-a jest mała linijka „Created with invoicor.com”. Jeśli wolisz fakturę bez niej, aplikacja Invoicor na iPhone'a nie dodaje znaku wodnego, a pierwsze {n} faktury są za darmo.",
      },
      {
        question: "Czy PDF z generatora zastępuje e-fakturę w KSeF?",
        answer:
          "Nie. W Polsce faktury VAT między firmami (B2B) wystawia się w Krajowym Systemie e-Faktur: obowiązkowo od 1 lutego 2026 r. dla największych firm i od 1 kwietnia 2026 r. dla pozostałych, a dla najmniejszych od 2027 r. Ten generator tworzy PDF i nie jest połączony z KSeF. PDF przyda się jako faktura pro forma albo faktura dla klienta prywatnego (konsumenta). W razie wątpliwości zapytaj księgową.",
      },
      {
        question: "Czy muszę się rejestrować?",
        answer:
          "Nie. Wypełnij formularz i pobierz PDF. Wersja robocza zostaje w Twojej przeglądarce, więc możesz zamknąć kartę i wrócić później na tym samym urządzeniu.",
      },
      {
        question: "Czy przechowujecie moją fakturę?",
        answer:
          "Nie. Podgląd i PDF powstają w Twojej przeglądarce, więc to, co wpisujesz, nie opuszcza Twojego urządzenia. Wersja robocza jest zapisana tylko w tej przeglądarce; „Wyczyść wszystko” ją usuwa.",
      },
      {
        question: "Jakich walut i języków mogę użyć?",
        answer:
          "38 walut i 11 języków faktury. Etykiety na fakturze (Faktura, Ilość, Do zapłaty itd.) są tłumaczone na wybrany język, więc wystawisz fakturę np. po angielsku w euro.",
      },
      {
        question: "Czy mogę dodać logo?",
        answer: "Tak. Dodaj plik PNG lub JPG do 500 KB, a pojawi się u góry faktury.",
      },
      {
        question: "Ile pozycji mogę dodać?",
        answer:
          "Do 10 na fakturze, tyle samo co w darmowym planie aplikacji Invoicor. Płatne plany aplikacji pozwalają na więcej.",
      },
      {
        question: "Czy mogę dodać VAT i rabat?",
        answer:
          "Tak. Ustaw jedną stawkę VAT dla całej faktury, doliczaną do cen netto albo zawartą w cenach brutto, oraz opcjonalny rabat procentowy lub kwotowy. Wartość netto, VAT i kwota do zapłaty liczą się same. Jeśli korzystasz ze zwolnienia z VAT, wpisz podstawę prawną w uwagach.",
      },
      {
        question: "Czy klient może zapłacić online?",
        answer:
          "Dodaj własny link do płatności (np. z PayPal, Stripe lub Wise) i numer rachunku; pojawią się na fakturze. Klient płaci bezpośrednio Tobie, przelewem, linkiem albo np. BLIK-iem, jeśli Twój link to umożliwia. Invoicor nie obsługuje płatności i nie pobiera prowizji.",
      },
      {
        question: "Czy mogę edytować PDF lub skopiować z niego tekst?",
        answer:
          "PDF nie służy do edycji: zmień formularz i pobierz nowy, wersja robocza wciąż tam jest. PDF powstaje w przeglądarce jako ostry obraz faktury, więc tekstu nie da się zaznaczyć ani wyszukać; link do płatności i inne linki działają. Aplikacja Invoicor tworzy PDF-y z zaznaczalnym tekstem i przechowuje każdą fakturę z jej statusem.",
      },
    ],
  },
};
