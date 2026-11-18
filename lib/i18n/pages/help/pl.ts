import type { HelpDict } from "./en";

/**
 * Help center, Polish, written for Poland. Informal "Ty" (capitalised), as on the Polish home.
 * The app's own screens are in English, so app labels stay in English in „…” quotes.
 */
export const pl: HelpDict = {
  meta: {
    title: "Pomoc i najczęstsze pytania | Invoicor",
    description:
      "Odpowiedzi na najczęstsze pytania o Invoicor: wystawianie faktur, wzory, waluty, VAT, wysyłka i statusy, subskrypcje oraz Twoje dane.",
  },
  home: "Strona główna",
  crumb: "Pomoc",
  toc: "Na tej stronie",
  eyebrow: "Wsparcie",
  title: "Centrum pomocy",
  subtitle:
    "Wszystko, co warto wiedzieć o Invoicor. Nie ma tu Twojej odpowiedzi? Każdą wiadomość czytają prawdziwi ludzie.",
  contactTitle: "Masz jeszcze pytanie?",
  contactText:
    "Napisz do nas z aplikacji albo e-mailem. Każdą wiadomość czytają prawdziwi ludzie; odpowiedź może zająć kilka dni.",
  sections: [
    {
      id: "getting-started",
      title: "Pierwsze kroki",
      items: [
        {
          q: "Jak wystawić pierwszą fakturę?",
          a: "Otwórz Invoicor i na karcie „Invoices” (Faktury) stuknij przycisk +. Wybierz klienta (albo dodaj nowego), dodaj pozycje i stuknij „Preview Invoice” (podgląd faktury). Faktura powstaje jako PDF, który możesz wysłać e-mailem, przez WhatsApp, AirDrop lub dowolną inną aplikację.",
        },
        {
          q: "Czy najpierw muszę uzupełnić profil firmy?",
          a: "Tak. Przed pierwszą fakturą Invoicor poprosi Cię o dane firmy (nazwa, adres, logo, dane bankowe). To zajmuje minutę, a dane trafiają potem na każdą fakturę, którą wystawisz.",
        },
        {
          q: "Czy Invoicor jest darmowy?",
          a: "Tak. Możesz wystawić do 3 faktur za darmo, bez limitu czasu i bez subskrypcji. Darmowe faktury obejmują darmowe wzory, eksport do PDF, zarządzanie klientami i śledzenie statusów. W aplikacji nie ma znaku wodnego, w żadnym planie.",
        },
        {
          q: "Na jakich urządzeniach działa Invoicor?",
          a: "Invoicor działa na iPhonie i iPadzie z iOS lub iPadOS 17.6 lub nowszym. Wersji przeglądarkowej jeszcze nie ma; do swoich danych masz dostęp przez aplikację. Ekrany aplikacji są na razie po angielsku, ale faktury możesz wystawiać po polsku i w 10 innych językach.",
        },
      ],
    },
    {
      id: "creating-invoices",
      title: "Wystawianie faktur",
      items: [
        {
          q: "Czy mogę dodać logo firmy do faktur?",
          a: "Tak. Przejdź do profilu firmy i stuknij „Upload Logo” (prześlij logo). Invoicor obsługuje formaty PNG, JPG, SVG i WebP. Logo pojawi się na każdej wysłanej fakturze. Przezroczystość PNG zostaje zachowana.",
        },
        {
          q: "Jak działają wzory faktur?",
          a: "Invoicor ma 31 profesjonalnie zaprojektowanych wzorów faktur: 21 jest darmowych, 8 jest w planie Starter, a 2 w planie Pro. Wyższe plany zawierają wszystkie wzory z niższych. Domyślny wzór ustawisz w profilu firmy, a dla każdej faktury możesz wybrać inny.",
        },
        {
          q: "Czy mogę wystawiać faktury w różnych walutach?",
          a: "Tak. Invoicor obsługuje 38 walut, w tym USD, EUR, GBP, JPY, CHF, CAD, AUD, INR i BRL. Domyślną walutę ustawisz w profilu firmy albo zmienisz ją dla konkretnej faktury.",
        },
        {
          q: "Czy mogę wysyłać faktury w języku klienta?",
          a: "Tak. Invoicor obsługuje 11 języków faktur. Wszystkie etykiety na fakturze (pozycja, ilość, suma itd.) są tłumaczone automatycznie. Domyślny język ustawisz w profilu firmy albo wybierzesz go dla każdej faktury.",
        },
        {
          q: "Jak działa naliczanie podatku?",
          a: "Ustaw stawkę podatku w profilu firmy (np. 23% VAT w Polsce). Invoicor sam nalicza podatek na każdej fakturze. Możesz wybrać ceny brutto (z podatkiem) albo netto (bez podatku). Stawkę możesz też zmienić dla pojedynczej faktury.",
        },
        {
          q: "Czy mogę dodać rabat do faktury?",
          a: "Tak. Do każdej faktury możesz dodać rabat procentowy albo kwotowy. Rabat jest widoczny jako osobna linia w podsumowaniu.",
        },
        {
          q: "Ile pozycji może mieć jedna faktura?",
          a: "To zależy od planu: do 10 pozycji na fakturze w planie Free, 25 w planie Starter i 50 w planie Pro.",
        },
      ],
    },
    {
      id: "sending-tracking",
      title: "Wysyłka i statusy",
      items: [
        {
          q: "Jak wysłać fakturę?",
          a: "Na ekranie szczegółów faktury stuknij „Share” (udostępnij). Faktura powstaje jako PDF, który możesz wysłać e-mailem, przez WhatsApp, AirDrop, Wiadomości lub dowolną inną aplikację do udostępniania na iPhonie.",
        },
        {
          q: "Co oznaczają statusy faktur?",
          a: "Draft (szkic): zapisana, ale jeszcze niewysłana, nadal możesz ją edytować. Sent (wysłana): udostępniona klientowi, zablokowana do edycji. Paid (zapłacona): klient zapłacił, a Ty to oznaczasz. Overdue (po terminie): termin płatności minął, nadal niezapłacona. Cancelled (anulowana): unieważniona, już nieaktywna.",
          list: [
            ["Draft (szkic)", "zapisana, ale jeszcze niewysłana, nadal możesz ją edytować."],
            ["Sent (wysłana)", "udostępniona klientowi, zablokowana do edycji."],
            ["Paid (zapłacona)", "klient zapłacił, a Ty to oznaczasz."],
            ["Overdue (po terminie)", "termin płatności minął, nadal niezapłacona."],
            ["Cancelled (anulowana)", "unieważniona, już nieaktywna."],
          ] as Array<[string, string]>,
        },
        {
          q: "Czy mogę edytować fakturę po wysłaniu?",
          a: "Nie. Gdy faktura ma status „Sent” (wysłana), zostaje zablokowana, żeby zachować jej zapis jako dokumentu. Jeśli chcesz coś zmienić, zduplikuj fakturę, popraw kopię i wyślij nową wersję.",
        },
        {
          q: "Czy mogę zduplikować fakturę?",
          a: "Tak. Na ekranie szczegółów faktury stuknij przycisk „Copy” (kopiuj). Powstaje nowy szkic z tym samym klientem, pozycjami i ustawieniami. Przydaje się przy powtarzających się zleceniach.",
        },
      ],
    },
    {
      id: "account-billing",
      title: "Konto i płatności",
      items: [
        {
          q: "Jak działają subskrypcje?",
          a: "Invoicor oferuje plany Starter i Pro, płatne miesięcznie lub rocznie przez Apple App Store. Wszystkimi płatnościami zajmuje się Apple: nigdy nie widzimy ani nie przechowujemy Twoich danych płatniczych. Subskrypcją zarządzasz lub ją anulujesz w iPhonie: Ustawienia → [Twoje imię i nazwisko] → Subskrypcje.",
        },
        {
          q: "Czy do darmowego okresu próbnego potrzebuję karty?",
          a: "Nie do planu darmowego: pierwsze 3 faktury nie wymagają subskrypcji ani płatności. Darmowe okresy próbne planów Starter i Pro działają przez Apple: zaczynasz je swoim Apple ID, które wymaga metody płatności. Anuluj przed końcem okresu próbnego, a nic nie zapłacisz. Invoicor nigdy nie widzi Twojej karty.",
        },
        {
          q: "Czy mogę anulować subskrypcję?",
          a: "Tak, w każdej chwili. W iPhonie otwórz Ustawienia → [Twoje imię i nazwisko] → Subskrypcje → Invoicor → Anuluj subskrypcję. Plan pozostaje aktywny do końca bieżącego okresu rozliczeniowego. Kolejnej opłaty już nie będzie.",
        },
        {
          q: "Co się stanie, gdy przejdę na plan Free?",
          a: "Twoje dotychczasowe faktury, klienci i dane zostają bez zmian, a każdą wystawioną fakturę nadal możesz przeglądać, udostępniać i śledzić. Plan darmowy obejmuje łącznie 3 faktury, więc jeśli masz już 3 lub więcej, do wystawienia nowych znów potrzebujesz planu.",
        },
        {
          q: "Jak usunąć konto?",
          a: "Otwórz Settings (ustawienia) w aplikacji i stuknij „Delete Account” (usuń konto). Twoje konto i wszystkie powiązane dane zostaną trwale usunięte z naszych serwerów. Tego nie da się cofnąć.",
        },
      ],
    },
    {
      id: "multiple-businesses",
      title: "Kilka firm",
      items: [
        {
          q: "Czy mogę prowadzić kilka firm?",
          a: "Tak. W planie Pro możesz utworzyć do 3 osobnych profili firmy, każdy z własną nazwą, logo, adresem i danymi bankowymi. Przełączasz się między nimi przy wystawianiu faktury.",
        },
        {
          q: "Jak ustawić domyślny profil firmy?",
          a: "Na karcie „Library” (biblioteka) przejdź do sekcji „Business” (firma). Przytrzymaj profil i wybierz „Set as Default” (ustaw jako domyślny). Domyślny profil jest wybrany od razu, gdy tworzysz nową fakturę.",
        },
      ],
    },
    {
      id: "data-privacy",
      title: "Dane i prywatność",
      items: [
        {
          q: "Gdzie są przechowywane moje dane?",
          a: "Dane Twojego konta i faktur są przechowywane na serwerach w Niemczech, w Unii Europejskiej, zgodnie z RODO. Analityka strony invoicor.com (Google Analytics i PostHog, usługi z USA) działa tylko wtedy, gdy zaakceptujesz pliki cookie.",
        },
        {
          q: "Jak chronicie moje dane?",
          a: "Standardowymi środkami ochrony: każde połączenie między aplikacją a naszymi serwerami jest szyfrowane (HTTPS), hasła są przechowywane w postaci zahaszowanej, logowanie korzysta z bezpiecznych tokenów (albo z logowania przez Apple lub Google), a dostęp do naszych serwerów w Niemczech jest ograniczony. Żadna usługa online nie jest w pełni bezpieczna, ale dbamy o to, by nikt nie uzyskał dostępu do Twoich danych bez pozwolenia.",
        },
        {
          q: "Czy sprzedajecie moje dane?",
          a: "Nie. Nigdy nie sprzedajemy ani nie wynajmujemy Twoich danych ani danych Twoich klientów. Przekazujemy tylko to, co niezbędne, usługom, dzięki którym działa Invoicor (naszemu dostawcy hostingu w Niemczech, Apple lub Google, jeśli logujesz się przez nie, oraz naszej usłudze subskrypcji). Każdą z nich wymieniamy w naszej Polityce prywatności.",
          link: { text: "Polityce prywatności", page: "privacy" as const },
        },
        {
          q: "Czy mogę wyeksportować swoje dane?",
          a: "Pojedyncze faktury możesz w każdej chwili wyeksportować jako PDF. Jeśli chcesz pełny eksport danych, napisz do nas na {email}, a przekażemy Ci dane w formacie do odczytu maszynowego, zgodnie z wymogami RODO.",
        },
      ],
    },
    {
      id: "safety",
      title: "Bezpieczeństwo i oszustwa",
      items: [
        {
          q: "Mam fakturę wystawioną w Invoicor. Czy jest prawdziwa?",
          a: "Invoicor to narzędzie, którego nadawca użył do wystawienia faktury; nie piszemy faktur, nie wysyłamy ich w niczyim imieniu i nie sprawdzamy ich treści. Traktuj ją jak każdą inną fakturę: zanim zapłacisz, sprawdź, czy znasz nadawcę, czy usługa lub towar były przez Ciebie zamówione i czy kwota się zgadza.",
        },
        {
          q: "Jak bezpiecznie zapłacić fakturę?",
          a: "Sprawdź trzy rzeczy: nadawcę (firma, którą znasz), kwotę (zgodna z tym, na co się umówiliście) i dane do płatności (takie same jak te, których ta firma używała wcześniej). Jeśli coś wygląda nietypowo, skontaktuj się z nadawcą przez numer telefonu lub adres, który już znasz, a nie przez dane z faktury.",
        },
        {
          q: "Na fakturze zmienił się numer konta albo link do płatności. Co robić?",
          a: "Na razie nie płać. Zmienione dane do płatności to najczęstsze oszustwo na fakturę. Zadzwoń do nadawcy na numer, który już masz, i potwierdź z nim nowe dane, zanim zapłacisz.",
        },
        {
          q: "Czy Invoicor obsługuje lub zabezpiecza płatność?",
          a: "Nie. Invoicor nie jest usługą ani bramką płatniczą: płatności trafiają bezpośrednio od klienta do nadawcy, przez jego własny link do płatności lub dane bankowe. Invoicor nie może wstrzymać, cofnąć ani zwrócić płatności. Wyjaśnia to punkt 5 naszego Regulaminu.",
          link: { text: "Regulaminu", page: "terms" as const },
        },
        {
          q: "Jak zgłosić podejrzaną fakturę wystawioną w Invoicor?",
          a: "Napisz na {email}, dołącz fakturę i napisz, w jaki sposób do Ciebie dotarła. Możemy zawiesić konta, z których wysyłane są fałszywe faktury. Jeśli pieniądze trafiły już do oszusta, od razu skontaktuj się też ze swoim bankiem i z policją.",
        },
      ],
    },
  ],
};
