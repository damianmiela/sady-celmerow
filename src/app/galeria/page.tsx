import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryGrid from "@/components/galeria/GalleryGrid";

export const metadata: Metadata = {
  title: "Galeria Zdjęć — Sad, Jabłka i Przyroda",
  description:
    "Galeria zdjęć z Sadów Celmerów w Trzebnicy. Jabłonie, zbiory owoców, soki tłoczone, przyroda i piękno wzgórz Trzebnickich. Zobacz nasze gospodarstwo!",
  alternates: { canonical: "https://sadycelmerow.pl/galeria" },
};

export default function GaleriaPage() {
  return (
    <>
      <PageHero imageSrc="/images/gallery/czerwone-jablka.jpg" alt="Galeria zdjęć z Sadów Celmerów — czerwone jabłka" />

      <section className="section-padding bg-cream-50">
        <SectionHeading>Galeria zdjęć</SectionHeading>
        <GalleryGrid />
      </section>
    </>
  );
}
