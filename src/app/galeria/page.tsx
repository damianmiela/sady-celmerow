import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryGrid from "@/components/galeria/GalleryGrid";
import { heroBlur } from "@/lib/data";

export const metadata: Metadata = {
  title: "Galeria zdjęć | Sady Celmerów",
  description:
    "Galeria zdjęć z Sadów Celmerów w Trzebnicy. Jabłonie, zbiory owoców, soki tłoczone, przyroda i piękno wzgórz Trzebnickich. Zobacz nasze gospodarstwo!",
  alternates: { canonical: "https://sadycelmerow.pl/galeria" },
};

export default function GaleriaPage() {
  return (
    <>
      <PageHero imageSrc="/images/hero/hero-galeria.jpg" alt="Galeria zdjęć z Sadów Celmerów — kwitnące jabłonie" blurDataURL={heroBlur["/images/hero/hero-galeria.jpg"]} objectPosition="top" />

      <section className="section-padding bg-cream-50">
        <SectionHeading>Galeria zdjęć</SectionHeading>
        <GalleryGrid />
      </section>
    </>
  );
}
