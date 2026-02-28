import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/kontakt/ContactForm";
import { ContactDetails, ContactMap } from "@/components/kontakt/ContactInfo";
import { heroBlur } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kontakt | Sady Celmerów",
  description:
    "Skontaktuj się z Sadami Celmerów. Adres: ul. Obornicka 18, 55-100 Trzebnica. Sprzedaż jabłek, soków i przetworów. Telefon, e-mail, formularz kontaktowy.",
  alternates: { canonical: "https://sadycelmerow.pl/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <PageHero imageSrc="/images/hero/hero-kontakt.jpg" alt="Kontakt z Sadami Celmerów — sad jesienią" blurDataURL={heroBlur["/images/hero/hero-kontakt.jpg"]} objectPosition="50% 25%" />

      <section className="section-padding bg-cream-50">
        <SectionHeading>Skontaktuj się z nami!</SectionHeading>

        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-center text-lg font-semibold tracking-tight text-sage-700">
              Dane kontaktowe
            </h3>
            <ContactDetails />
            <div className="mt-8">
              <ContactMap />
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold tracking-tight text-sage-700">
              Formularz kontaktowy
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
