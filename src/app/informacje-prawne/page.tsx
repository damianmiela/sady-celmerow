import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Informacje prawne | Sady Celmerów",
  description:
    "Informacje prawne, dane firmy oraz polityka prywatności Sadów Celmerów w Trzebnicy.",
  alternates: { canonical: "https://sadycelmerow.pl/informacje-prawne" },
  robots: { index: false, follow: true },
};

export default function InformacjePrawnePage() {
  return (
    <div className="bg-cream-50 pt-24 md:pt-32">
      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 md:pb-24">
        <section className="mb-16">
          <SectionHeading>Dane firmy</SectionHeading>

          <div className="space-y-1 text-neutral-700">
            <p className="font-semibold">Sady Celmerów</p>
            <p>ul. Obornicka 18</p>
            <p>55-100 Trzebnica</p>
            <p>woj. dolnośląskie, Polska</p>
          </div>

          <div className="mt-6 space-y-1 text-neutral-700">
            <p>
              <span className="font-medium text-neutral-500">NIP:</span>{" "}
              915 174 33 82
            </p>
            <p>
              <span className="font-medium text-neutral-500">REGON:</span>{" "}
              360247724
            </p>
          </div>

          <div className="mt-6 space-y-1 text-neutral-700">
            <p>
              <span className="font-medium text-neutral-500">Telefon:</span>{" "}
              <a
                href="tel:667599922"
                className="underline decoration-sage-300 underline-offset-2 hover:text-sage-700"
              >
                667 599 922
              </a>{" "}
              (Szymon Celmer)
            </p>
            <p>
              <span className="font-medium text-neutral-500">Telefon:</span>{" "}
              <a
                href="tel:609273078"
                className="underline decoration-sage-300 underline-offset-2 hover:text-sage-700"
              >
                609 273 078
              </a>{" "}
              (Jakub Celmer)
            </p>
            <p>
              <span className="font-medium text-neutral-500">E-mail:</span>{" "}
              <a
                href="mailto:sady.celmerow@gmail.com"
                className="underline decoration-sage-300 underline-offset-2 hover:text-sage-700"
              >
                sady.celmerow@gmail.com
              </a>
            </p>
          </div>
        </section>

        <section>
          <SectionHeading>Polityka prywatności</SectionHeading>

          <div className="space-y-6 text-sm leading-relaxed text-neutral-600">
            <div>
              <h3 className="mb-2 text-base font-semibold text-neutral-800">
                1. Administrator danych
              </h3>
              <p>
                Administratorem danych osobowych jest Sady Celmerów z siedzibą
                przy ul. Obornickiej 18, 55-100 Trzebnica. Kontakt z
                administratorem możliwy jest pod adresem e-mail:{" "}
                <a
                  href="mailto:sady.celmerow@gmail.com"
                  className="text-sage-600 underline decoration-sage-300 underline-offset-2 hover:text-sage-800"
                >
                  sady.celmerow@gmail.com
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-neutral-800">
                2. Zakres zbieranych danych
              </h3>
              <p>
                Za pośrednictwem formularza kontaktowego na stronie zbieramy
                następujące dane osobowe:
              </p>
              <ul className="ml-5 mt-2 list-disc space-y-1">
                <li>Imię i nazwisko</li>
                <li>Adres e-mail</li>
                <li>Treść wiadomości</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-neutral-800">
                3. Cel przetwarzania danych
              </h3>
              <p>
                Dane osobowe przetwarzane są wyłącznie w celu udzielenia
                odpowiedzi na przesłane zapytanie kontaktowe. Podstawą prawną
                przetwarzania jest art. 6 ust. 1 lit. f RODO — prawnie
                uzasadniony interes administratora, polegający na obsłudze
                zapytań kierowanych za pośrednictwem formularza kontaktowego.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-neutral-800">
                4. Okres przechowywania danych
              </h3>
              <p>
                Dane osobowe przechowywane są przez okres niezbędny do
                realizacji celu, w jakim zostały zebrane, nie dłużej niż 12
                miesięcy od ostatniego kontaktu.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-neutral-800">
                5. Prawa użytkownika
              </h3>
              <p>Każda osoba, której dane dotyczą, ma prawo do:</p>
              <ul className="ml-5 mt-2 list-disc space-y-1">
                <li>dostępu do swoich danych osobowych,</li>
                <li>sprostowania (poprawiania) danych,</li>
                <li>
                  usunięcia danych (&bdquo;prawo do bycia zapomnianym&rdquo;),
                </li>
                <li>ograniczenia przetwarzania,</li>
                <li>wniesienia sprzeciwu wobec przetwarzania,</li>
                <li>
                  wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych
                  (PUODO).
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-neutral-800">
                6. Udostępnianie danych
              </h3>
              <p>
                Dane osobowe nie są udostępniane podmiotom trzecim, z wyjątkiem
                dostawcy usług poczty elektronicznej (Gmail/Google), który
                przetwarza wiadomości e-mail w ramach świadczenia usługi.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-neutral-800">
                7. Pliki cookies
              </h3>
              <p>
                Strona internetowa nie wykorzystuje plików cookies ani żadnych
                technologii śledzących. Nie stosujemy narzędzi analitycznych ani
                reklamowych.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-neutral-800">
                8. Bezpieczeństwo danych
              </h3>
              <p>
                Stosujemy odpowiednie środki techniczne i organizacyjne w celu
                ochrony danych osobowych, w tym szyfrowanie transmisji danych
                (SSL/TLS).
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
