import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import InfiniteMarquee from "@/components/home/InfiniteMarquee";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sady Celmerów",
  description:
    "Rodzinne gospodarstwo sadownicze ze wzgórz Trzebnickich. Uprawa jabłek, produkcja naturalnych soków tłoczonych i przetworów owocowych.",
  url: "https://sadycelmerow.pl",
  telephone: "+48 667 599 922",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Obornicka 18",
    addressLocality: "Trzebnica",
    postalCode: "55-100",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.3097,
    longitude: 17.0617,
  },
  image: "https://sadycelmerow.pl/images/logo-512.png",
  sameAs: ["https://www.facebook.com/sadycelmerow"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
  priceRange: "$$",
};

export default function Home() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <AboutSection />
      <InfiniteMarquee />
    </>
  );
}
