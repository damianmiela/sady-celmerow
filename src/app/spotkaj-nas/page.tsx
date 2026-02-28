import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SpotkajNasContent from "@/components/odwiedz-nas/OdwiedzNasContent";

export const metadata: Metadata = {
  title: "Spotkaj nas | Sady Celmerów",
  description:
    "Jabłkobranie, Bazar Smakoszy we Wrocławiu i punkty sprzedaży soków i jabłek z Sadów Celmerów. Sprawdź, gdzie nas spotkasz!",
  alternates: { canonical: "https://sadycelmerow.pl/spotkaj-nas" },
};

export default function SpotkajNasPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero/big-photo1.jpg"
        alt="Spotkaj Sady Celmerów"
      />
      <SpotkajNasContent />
    </>
  );
}
