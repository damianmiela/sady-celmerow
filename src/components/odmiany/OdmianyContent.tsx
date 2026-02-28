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

        <AnimatedSection className="mx-auto mb-14 max-w-3xl space-y-5">
          {varietiesText.map((text, i) => (
            <p key={i} className="text-center leading-relaxed text-neutral-600">
              {text}
            </p>
          ))}
        </AnimatedSection>

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6">
          {appleVarieties.map((variety, i) => (
            <AppleCard
              key={variety.name}
              variety={variety}
              index={i}
              onClick={() => setLightboxIndex(i)}
            />
          ))}
        </div>
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
