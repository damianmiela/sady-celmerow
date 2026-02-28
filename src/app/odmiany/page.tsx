import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import OdmianyContent from "@/components/odmiany/OdmianyContent";

export const metadata: Metadata = {
  title: "Odmiany jabłek | Sady Celmerów",
  description:
    "Poznaj 6 odmian jabłek uprawianych w Sadach Celmerów: Topaz, Rubinola, Golden Delicious, Rubin, Rubinstar i Red Jonaprince Select — specjalnie dobrane dla najlepszego smaku.",
  alternates: { canonical: "https://sadycelmerow.pl/odmiany" },
};

export default function OdmianyPage() {
  return (
    <>
      <PageHero imageSrc="/images/hero/hero-odmiany.jpg" alt="Odmiany jabłek uprawiane w Sadach Celmerów" />
      <OdmianyContent />
    </>
  );
}
