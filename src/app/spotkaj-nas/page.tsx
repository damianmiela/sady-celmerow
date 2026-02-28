import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SpotkajNasContent from "@/components/odwiedz-nas/OdwiedzNasContent";
import { heroBlur } from "@/lib/data";

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
        imageSrc="/images/hero/hero-spotkaj-nas.jpg"
        alt="Spotkaj Sady Celmerów"
        blurDataURL={heroBlur["/images/hero/hero-spotkaj-nas.jpg"]}
        objectPosition="center"
      />
      <SpotkajNasContent />
    </>
  );
}
