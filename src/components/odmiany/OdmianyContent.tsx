"use client";

import { useState, useCallback } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AppleCard from "@/components/odmiany/AppleCard";
import Lightbox from "@/components/ui/Lightbox";
import { appleVarieties, varietiesText } from "@/lib/data";

export default function OdmianyContent() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const lightboxImages = appleVarieties.map((v) => ({
    src: v.image,
    alt: v.name,
  }));

  const handlePrev = useCallback(() => {
    setLightboxIndex((i) => (i <= 0 ? appleVarieties.length - 1 : i - 1));
  }, []);

  const handleNext = useCallback(() => {
    setLightboxIndex((i) => (i >= appleVarieties.length - 1 ? 0 : i + 1));
  }, []);

  return (
    <>
      <section className="section-padding bg-cream-50">
        <SectionHeading>Odmiany jabłek</SectionHeading>

        <div className="mx-auto mb-14 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {appleVarieties.map((variety, i) => (
            <AppleCard
              key={variety.name}
              variety={variety}
              index={i}
              onClick={() => setLightboxIndex(i)}
            />
          ))}
        </div>

        <AnimatedSection className="mx-auto max-w-3xl space-y-5">
          {varietiesText.map((text, i) => (
            <p key={i} className="text-center leading-relaxed text-neutral-600">
              {text}
            </p>
          ))}
        </AnimatedSection>
      </section>

      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxIndex >= 0}
        onClose={() => setLightboxIndex(-1)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}
