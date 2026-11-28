import type { TrustDict } from "./en";

/**
 * About and Contact (P10, P11), Polish (Poland). Informal "Ty" (capitalised), as on the Polish help
 * and home pages. `country` is the nominative "Holandia" because it also stands alone after the
 * city in the business details, so the sentences that use it are built around the nominative.
 */
export const pl: TrustDict = {
  home: "Strona główna",
  country: "Holandii",
  about: {
    meta: {
      title: "O nas: uczciwa aplikacja do faktur | Invoicor",
      description:
        "Kto tworzy Invoicor i za czym stoi: darmowy start, zero prowizji od Twoich pieniędzy, ludzie czytający każdą wiadomość i dane na serwerach w Niemczech.",
    },
    crumb: "O nas",
    eyebrow: "O Invoicor",
    title: "Uczciwa aplikacja do faktur",
    subtitle:
      "Invoicor pomaga freelancerom i małym firmom wysłać profesjonalną fakturę w kilka sekund, w języku i walucie klienta, bez ukrytego paywalla i bez prowizji od ich pieniędzy.",
    whyEyebrow: "Po co powstał",
    whyTitle: "Fakturowanie nie powinno zjadać Ci wieczoru",
    whyText:
      "Większość osób wystawiających faktury to hydraulicy, firmy sprzątające, projektanci i konsultanci, a nie księgowi. Kończą zlecenie, klient prosi o fakturę, a do wyboru mają pusty dokument albo program księgowy stworzony dla działu finansów. Invoicor jest pośrodku: pola, których oczekuje księgowość klienta, uzupełnione tym, co zapisałeś ostatnio, i czysty PDF, który wysyłasz, zanim wyjdziesz.",
    whyText2:
      "W opiniach o aplikacjach do faktur w kółko powtarzają się te same skargi: „darmowy” plan, który okazuje się wersją próbną, brak człowieka, z którym można porozmawiać, i obsługa płatności, która przetrzymuje Twoje pieniądze. Invoicor powstał, żeby uniknąć wszystkich trzech.",
    principlesEyebrow: "Za czym stoimy",
    principlesTitle: "Cztery obietnice, których dotrzymamy",
    principles: [
      {
        title: "Naprawdę darmowy start",
        text: "{n} prawdziwe faktury w aplikacji, bez znaku wodnego i bez subskrypcji. Widzisz, co dostajesz, zanim cokolwiek zapłacisz.",
      },
      {
        title: "Nigdy nie dotykamy Twoich pieniędzy",
        text: "Invoicor nie jest operatorem płatności. Klient płaci bezpośrednio Tobie, przelewem na Twoje konto albo przez link do płatności, który sam dodajesz, a my nie bierzemy żadnej części żadnej płatności.",
      },
      {
        title: "Każdą wiadomość czytają ludzie",
        text: "Opinie z aplikacji i e-maile trafiają do zespołu, nie do bota. Odpowiedź może zająć kilka dni i wolimy to powiedzieć, niż obiecywać godzinę, której nie dotrzymamy.",
      },
      {
        title: "Twoje dane zostają w UE",
        text: "Konta i faktury są przechowywane na serwerach w Niemczech i przetwarzane zgodnie z RODO. Gdy usuniesz konto, Twoje dane znikną z naszych serwerów w ciągu 30 dni, poza tym, co musimy zachować z mocy prawa.",
      },
    ],
    whatEyebrow: "Co robi, a czego nie",
    whatTitle: "Żebyś wiedział przed pobraniem",
    doesTitle: "Invoicor potrafi",
    does: [
      "Wystawić profesjonalną fakturę na iPhonie w kilka sekund i udostępnić PDF e-mailem, przez iMessage lub WhatsApp",
      "31 szablonów faktur i Twoje własne logo",
      "Faktury w 11 językach i 38 walutach, dla klientów z zagranicy",
      "Zapisani klienci i produkty oraz jedno stuknięcie, by powielić fakturę z zeszłego miesiąca",
      "Darmowy generator faktur na tej stronie, bez zakładania konta",
    ],
    doesntTitle: "Invoicor (jeszcze) nie oferuje",
    doesnt: [
      "Ofert ani kosztorysów",
      "Faktur cyklicznych lub planowanych ani przypomnień dla klientów",
      "Obsługi płatności (dodajesz własny link do płatności)",
      "Pracy offline: potrzebuje połączenia z internetem",
      "Wersji na Androida (jest w drodze: zobacz stronę o Androidzie)",
    ],
    screensNote: "Ekrany aplikacji są po angielsku; faktury powstają w 11 językach.",
    whoEyebrow: "Kto za tym stoi",
    whoTitle: "Prowadzony z {country}",
    whoText:
      "Invoicor to firma prowadzona z {country}. Poniżej jej dane; regulamin i polityka prywatności mówią, co obowiązuje, gdy korzystasz z aplikacji.",
    contactButton: "Napisz do nas",
    helpButton: "Pomoc i FAQ",
    ctaTitle: "Wyślij kolejną fakturę",
    ctaGradient: "w kilka sekund.",
    ctaText: "{n} darmowe faktury, bez znaku wodnego i bez subskrypcji.",
  },
  contact: {
    meta: {
      title: "Kontakt: opinie, pytania i błędy | Invoicor",
      description:
        "Napisz do zespołu Invoicor z aplikacji (Settings, Send Feedback) lub e-mailem. Każdą wiadomość czyta człowiek; odpowiedź może zająć kilka dni.",
    },
    crumb: "Kontakt",
    eyebrow: "Kontakt",
    title: "Porozmawiaj z ludźmi, którzy tworzą Invoicor",
    subtitle:
      "Pytania, błędy czy pomysły: każdą wiadomość czyta ktoś z zespołu. Odpowiedź może zająć kilka dni, więc po szybką odpowiedź lepiej zajrzeć do Centrum pomocy.",
    waysHidden: "Jak się z nami skontaktować",
    app: {
      title: "W aplikacji",
      before: "Otwórz",
      path: "Settings → Support → Send Feedback",
      middle:
        "i wybierz błąd, prośbę o funkcję albo pytanie. Model iPhone’a i wersja aplikacji dodają się same, a w",
      submissions: "My Submissions",
      after: "widzisz status każdej wiadomości: nowa, przeczytana, w realizacji lub rozwiązana.",
    },
    email: {
      title: "E-mailem",
      before: "Napisz na",
      after:
        "w każdej sprawie: gdy nie możesz się zalogować, w sprawach prywatności, współpracy lub prasy.",
    },
    help: {
      title: "Pomoc i FAQ",
      before: "Na większość pytań o szablony, waluty, podatki i plany odpowiada",
      link: "Centrum pomocy",
      after: ", o każdej porze.",
    },
    noPhone:
      "Nie mamy infolinii ani czatu na żywo: dzięki wiadomościom pisemnym możemy sprawdzić Twoje konto i porządnie odpowiedzieć.",
    topicsEyebrow: "Zanim napiszesz",
    topicsTitle: "Właściwa odpowiedź za pierwszym razem",
    topics: [
      {
        title: "Błąd lub zepsuty PDF",
        text: "Napisz, co stuknąłeś, czego się spodziewałeś i co się stało, a jeśli chodzi o jedną fakturę, podaj jej numer. Zrzut ekranu pomaga (dołącz go do e-maila).",
      },
      {
        title: "Subskrypcje, zwroty i anulowanie",
        text: "Plany kupuje się przez Apple, więc płatnościami i zwrotami zajmuje się Apple. Anulujesz w każdej chwili w iPhonie: Ustawienia → [Twoje imię i nazwisko] → Subskrypcje. Jeśli coś wygląda nie tak, chętnie pomożemy.",
      },
      {
        title: "Twoje dane i prywatność",
        text: "O kopię danych lub ich usunięcie poproś e-mailem; konto możesz też usunąć w aplikacji. Polityka prywatności opisuje Twoje prawa wynikające z RODO.",
      },
      {
        title: "Afilianci i partnerzy",
        text: "Program partnerski ma własną stronę z opisem działania i zapisów. W sprawie innej współpracy napisz do nas e-mail.",
      },
    ],
    related: "Zobacz też:",
    relatedLinks: {
      privacy: "polityka prywatności (po angielsku)",
      terms: "regulamin (po angielsku)",
      affiliate: "program partnerski (po angielsku)",
      about: "o nas",
    },
    companyEyebrow: "Dane firmy",
    companyTitle: "Do kogo piszesz",
    ctaTitle: "Jeszcze nie próbowałeś?",
    ctaGradient: "Zacznij za darmo.",
    ctaText: "{n} darmowe faktury, bez znaku wodnego i bez subskrypcji.",
  },
  company: {
    business: "Firma",
    basedIn: "Siedziba",
    kvk: "KvK (numer w holenderskiej Izbie Handlowej)",
    vat: "Numer VAT",
    data: "Dane",
    dataValue: "Serwery w Niemczech (UE), przetwarzanie zgodne z RODO",
    email: "E-mail",
    countryName: "Holandia",
  },
};
