import type { ContentDict } from "./en";

/**
 * Fixed text of the template and industry pages and their hubs, Polish, written for Poland.
 * Informal "Ty" (capitalised), as on the Polish home and help pages. The app's screens are in
 * English, so nothing here says the app is in Polish.
 */
export const pl: ContentDict = {
  home: "Strona główna",
  onThisPage: "Na tej stronie",
  updated: "Zaktualizowano",
  disclaimer:
    "Informacje ogólne, a nie porada podatkowa czy prawna. Szczegóły sprawdź z księgowym lub prawnikiem tam, gdzie prowadzisz działalność.",
  hubCta: "Wystaw kolejną fakturę",
  templateHub: {
    meta: {
      title: "Darmowe wzory faktur według branży | Invoicor",
      description:
        "Darmowe wzory faktur i poradniki dla branż: co umieścić na fakturze, przykładowe pozycje i błędy do uniknięcia. Wystawisz je w aplikacji Invoicor.",
    },
    crumb: "Wzory",
    eyebrow: "Darmowe wzory i poradniki",
    title: "Darmowe wzory faktur",
    subtitle:
      "Wzory faktur i poradniki dla Twojej branży lub rodzaju faktury (zaliczkowa, godzinowa, dla freelancera …): co dokładnie umieścić na fakturze, przykład z prawdziwymi pozycjami i błędy, przez które płatności się opóźniają.",
    groupTypes: "Rodzaje faktur",
    groupTrades: "Wzory według branży",
    cardType: "Rodzaj faktury",
    cardTrade: "Wzór i poradnik",
    cta: "Zobacz wzór",
    explainerTitle: "Jak korzystać z tych wzorów",
    explainer: [
      "Każdy poradnik pokazuje, co zawiera dobra faktura w danej branży lub danego rodzaju: dane, których oczekuje klient i jego księgowy, jak rozpisać robociznę i materiały oraz jak ująć zaliczki i podatek. Przykładowa faktura ma realistyczne pozycje, więc możesz przejąć jej układ do własnych zleceń.",
      "Każdy z nich odtworzysz w arkuszu kalkulacyjnym lub edytorze tekstu. Możesz też wystawić tę samą fakturę w aplikacji Invoicor: dane firmy, zapisani klienci i zapisane pozycje uzupełniają się same, sumy i podatek liczą się automatycznie, a czysty PDF wysyłasz z telefonu. Pierwsze {n} faktury są za darmo.",
    ],
  },
  template: {
    crumb: "Wzory",
    eyebrow: "Darmowy wzór i poradnik",
    use: "Użyj wzoru za darmo",
    app: "Wystaw w aplikacji",
    toc: {
      include: "Co umieścić",
      sample: "Przykład faktury",
      notes: "Uwagi",
      industryNotes: "Uwagi branżowe",
      mistakes: "Błędy do uniknięcia",
      formats: "Wyślij jako PDF",
      tip: "Dobra rada",
      faq: "FAQ",
    },
    eyebrows: {
      include: "Lista kontrolna",
      sample: "Przykład",
      notes: "Warto wiedzieć",
      mistakes: "Tego unikaj",
      formats: "Format",
      tip: "Dobra rada",
    },
    subtotal: "Suma częściowa",
    depositPaid: "Wpłacona zaliczka",
    tax: "VAT",
    balanceDue: "Do zapłaty",
    invoiceNotes: "Uwagi na fakturze:",
    fillExample: "Wypełnij ten przykład online",
    fillHint: "Za darmo, bez rejestracji. Zmień, co chcesz, i pobierz PDF.",
    mistakesTitle: "Najczęstsze błędy",
    formatsTitle: "Wyślij jako PDF",
    whyPdf: "Dlaczego PDF",
    pdfDefault:
      "PDF wygląda tak samo na każdym telefonie i komputerze, nie da się go przypadkiem zmienić i tego oczekują klienci oraz księgowi.",
    browserTitle: "Za darmo, w przeglądarce",
    browserText:
      "Otwórz ten wzór w darmowym generatorze: przykładowe pozycje są już wpisane. Zmień je, dodaj logo i pobierz PDF. Bez rejestracji.",
    openGenerator: "Otwórz generator",
    iphoneTitle: "Z iPhone'a",
    iphoneText:
      "Aplikacja Invoicor tworzy taki sam PDF i wysyła go e-mailem lub w wiadomości, a Twoi klienci i stałe pozycje są zapisane. {n} faktury za darmo.",
    getApp: "Pobierz aplikację",
    whyNotWord:
      "Dlaczego nie Word albo Excel? Każdy, kto je otworzy, może zmienić kwoty, a formuła może po cichu zepsuć sumę. Invoicor tworzy tylko pliki PDF.",
    appCardEyebrow: "Wystawiasz faktury co tydzień?",
    appCardText: "Zapisz klientów i stałe pozycje, a każdą fakturę wyślij z telefonu.",
    moreTemplates: "Więcej wzorów faktur",
    ctaGradient: "w kilka sekund.",
    ctaText:
      "Zapisani klienci i pozycje, automatyczne sumy i podatek oraz czysty PDF, który wyślesz z telefonu, zanim wyjdziesz od klienta.",
  },
  industryHub: {
    meta: {
      title: "Fakturowanie według branży | Invoicor",
      description:
        "Hydraulik, grafik na freelansie czy konsultant: zobacz, jak aplikacja mobilna Invoicor przyspiesza wystawianie faktur w Twojej branży.",
    },
    crumb: "Branże",
    eyebrow: "Branże",
    title: "Stworzony z myślą o Twojej pracy.",
    subtitle:
      "Każda branża fakturuje inaczej. Zobacz typowe błędy, pozycje na fakturze i kwestie podatkowe w Twojej pracy oraz to, jak radzi sobie z nimi Invoicor.",
    card: "Branża",
    cta: "Zobacz, jak to działa",
    explainerTitle: "Jedna aplikacja, tak jak fakturuje Twoja branża",
    explainer: [
      "Hydraulik fakturuje dojazd, robociznę i części. Grafik fakturuje zaliczkę i kolejne etapy. Firma sprzątająca co tydzień wystawia fakturę temu samemu klientowi. Każda strona branżowa opisuje błędy, przez które w danej branży płatności się opóźniają, najczęstsze pozycje, słowa, których oczekują klienci, i kwestie podatkowe do sprawdzenia.",
      "Invoicor działa tak samo dla wszystkich: raz zapisujesz klientów i pozycje, wybierasz wzór i wysyłasz czysty PDF z telefonu. {n} faktury są za darmo, a Invoicor nigdy nie pobiera prowizji od Twoich płatności.",
    ],
  },
  industry: {
    crumb: "Branże",
    start: "Zacznij za darmo na iOS",
    online: "Wystaw fakturę online za darmo",
    toc: {
      mistakes: "Błędy w fakturowaniu",
      features: "Jak pomaga Invoicor",
      scenario: "Przykład z życia",
      tip: "Rada eksperta",
      lineItems: "Typowe pozycje",
      glossary: "Słowniczek",
      tax: "Podatki i przepisy",
      faq: "FAQ",
    },
    eyebrows: {
      mistakes: "Co idzie nie tak",
      features: "Jak pomaga Invoicor",
      scenario: "Dzień w pracy",
      tip: "Rada eksperta",
      lineItems: "Pozycje",
      glossary: "Słowniczek",
      tax: "Podatki i przepisy",
    },
    scenarioTitle: "Przykład z życia",
    fromExperience: "Z doświadczenia",
    lineItemsIntro:
      "Zapisz je raz jako produkty w Invoicor i dodawaj do każdej faktury jednym stuknięciem.",
    whatToKnow: "Co warto wiedzieć",
    templatesEyebrow: "Darmowe wzory",
    templatesTitle: "Potrzebujesz jednej faktury od razu?",
    templatesCard: "Z wypełnionym przykładem i listą tego, co umieścić",
    moreIndustries: "Więcej branż",
    ctaGradient: "Wypróbuj za darmo.",
    ctaText:
      "Zapisani klienci i pozycje, automatyczne sumy i podatek oraz czysty PDF, który wyślesz z telefonu.",
  },
};
