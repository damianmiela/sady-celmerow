import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import OdmianyContent from "@/components/odmiany/OdmianyContent";

export const metadata: Metadata = {
  title: "Odmiany Jabłek — Nasze Sady",
  description:
    "Poznaj odmiany jabłek uprawianych w Sadach Celmerów. Szampion, Ligol, Jonagold, Golden Delicious i inne — specjalnie dobrane dla najlepszego smaku.",
  alternates: { canonical: "https://sadycelmerow.pl/odmiany" },
};

export default function OdmianyPage() {
  return (
    <>
      <PageHero imageSrc="/images/hero/big-photo4.jpg" alt="Odmiany jabłek uprawiane w Sadach Celmerów" />
      <OdmianyContent />
    </>
  );
}
