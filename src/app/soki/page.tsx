import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import JuiceSelector from "@/components/soki/JuiceSelector";
import WhySection from "@/components/soki/WhySection";

export const metadata: Metadata = {
  title: "Nasze Soki — Naturalne Soki Jabłkowe",
  description:
    "Naturalne soki jabłkowe tłoczone z owoców z sadów Celmerów. 7 unikalnych smaków, 100% owoców, bez cukru, konserwantów i barwników. Sprawdź naszą ofertę!",
  alternates: { canonical: "https://sadycelmerow.pl/soki" },
};

export default function SokiPage() {
  return (
    <>
      <PageHero imageSrc="/images/hero/big-photo2.jpg" alt="Naturalne soki jabłkowe z Sadów Celmerów" />

      <section className="section-padding bg-cream-50">
        <SectionHeading>Nasze soki</SectionHeading>
        <JuiceSelector />
      </section>

      <WhySection />
    </>
  );
}
