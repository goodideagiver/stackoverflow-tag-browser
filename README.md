# Wyświetlanie tagów z stackoverflow API

[https://api.stackexchange.com/docs](https://api.stackexchange.com/docs)

[Punkty do zrealizowania](/docs/zadanie.md)

## Jak uruchomić aplikację

1. Sklonuj repozytorium
2. Zainstaluj zależności

```bash
npm install
```

3. Uruchom aplikację

```bash
npm start
```

## Jak uruchomić Storybooka

```bash
npm run storybook
```

## Moje rozwiązania

### Stronicowana tabela lub lista tagów wraz liczbą powiązanych postów (pole count)

Użyłem komponentu [Table](https://ant.design/components/table) z biblioteki ant design, który wyświetla tabelę. Ma ona API z takimi funkcjami jakie są wymagane w zadaniu i idealnie się wpasowuje w ten use case.

Tabela ma:

1. Sortowanie po kliknięciu w nagłówki name i count
2. Paginację, którą można zmieniać klikając w przyciski na dole tabeli, można też zmieniać ilość elementów na stronie oraz przeskakiwać do konkretnej strony
3. Stan ładowania

Powyższe załatwia podpunkty:

- liczba elementów na stronie konfigurowalna przez pole liczbowe nad tabelą/listą
- wybór pola i kierunku sortowania przez element UI własnego wyboru/projektu

### Wykorzystać gotową bibliotekę komponentów UI, np. MUI

Użyłem biblioteki ant design, ponieważ ma bardzo bogate API, które pozwala na łatwe dostosowanie komponentów do własnych potrzeb.

### Wykorzystać gotowe biblioteki do zarządzania stanem i pobierania danych (wybór wedle uznania, stosownie do stopnia komplikacji projektu i z myślą o jak najszybszej realizacji zadania)

Do przechowywania stanu postanowiłem podejść z użyciem React Router, ponieważ jest to najprostsze rozwiązanie, które pozwala na przechowywanie stanu aplikacji w URLu. W przypadku bardziej skomplikowanych aplikacji zdecydowałbym się na użycie innych metod jak: Zustand, Redux, tanstack query.

Dzięki React Routerowi mogę przechowywać stan aplikacji w URLu, co pozwala na łatwe udostępnianie linków do konkretnych stanów aplikacji, oraz można nawigować między stronami tabeli.

Do pobierania danych użyłem SWR hook, ponieważ jest bardzo prosty w użyciu i idealnie nadaje się do tego zadania. Podoba mi się w nim to, że w przypadku błędu pobierania danych, można łatwo obsłużyć błąd i wyświetlić odpowiedni komunikat oraz ponowne pobieranie danych po np. przywróceniu połączenia jest automatyczne. Zaimplementowałem też go w taki sposób, że można przeglądać wcześniej pobrane dane, np. jeśli podczas przeglądania dostaniemy błąd z powodu braku internetu, to możemy cofnąć się o jedną stronę i przeglądać stare dane.

### Przygotować odpowiednie stany dla etapu ładowania danych i błędów przy pobieraniu

Podczas ładowania danych tabela ma stan `loading` i wtedy pojawia się na niej animacja wskazująca na ładowanie.

W przypadku błędu pobierania danych, wyświetla się komunikat w prawym górnym rogu o błędzie, znika automatycznie po przywróceniu połączenia, albo zniknięciu błędu.

### Rozwiązanie opublikować w repozytorium GitHub

👍

### Całość powinna się uruchamiać wyłącznie po wykonaniu komend "npm ci", "npm start"

Można uruchomić aplikację za pomocą komendy `npm start`.

### Przygotować Storybook do prezentacji wykorzystanych komponentów składowych aplikacji

Nie zdążyłem przygotować konkretnego Storybooka, nie używałem go wcześniej. Wydaje mi się, że powinienem komponent `TagDisplayTable` przenieść do osobnego pliku i zrobić z niego osobny komponent, który bym przetestował w Storybooku w taki sposób, żeby można było zmieniać propsy i sprawdzać jak zachowuje się tabela w różnych przypadkach. Obecnie próbowałem zrobić mock hooka użytego w komponencie `TagDisplayTable`, ale nie udało mi się tego zrobić i czytałem w internecie, że raczej ludzi robili to jak opisałem wyżej.

### Rozmieszenie elementów

Zdaję sobie sprawę, że wykonałem zadanie w trochę inny sposób niż jest to opisane w wymaganiach.

> Liczba elementów na stronie konfigurowalna przez pole liczbowe **nad** tabelą/listą

U mnie wszystkie kontrolki znajdują się pod tabelą, bo w ant design w komponencie Table domyślnie te wszystkie opcje są już obsłużone, ale nie da się ich rozmieszczać dowolnie. Można je ukryć i samemu odwzorować te funkcjonalności, jest w antd dostępny komponent Pagination, a z wybieraniem ilości elementów na stronie zrobiłbym własny komponent Form, ale z uwagi, że otrzymanie zadania zbiegło się ze świętami, nie miałem czasu na zrobienie tego.
