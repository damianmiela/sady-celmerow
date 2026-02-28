import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import OdwiedzNasContent from "@/components/odwiedz-nas/OdwiedzNasContent";

export const metadata: Metadata = {
  title: "Odwiedź nas | Sady Celmerów",
  description:
    "Jabłkobranie, Bazar Smakoszy we Wrocławiu i punkty sprzedaży soków i jabłek z Sadów Celmerów. Sprawdź, gdzie nas spotkasz!",
  alternates: { canonical: "https://sadycelmerow.pl/odwiedz-nas" },
};

export default function OdwiedzNasPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero/big-photo1.jpg"
        alt="Odwiedź Sady Celmerów"
      />
      <OdwiedzNasContent />
    </>
  );
}
