"use client";

import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import Lightbox from "@/components/ui/Lightbox";

const images = [
  { src: "/images/gallery/czerwone-jablka.jpg", alt: "Czerwone jabłka" },
  {
    src: "/images/gallery/produkty-wystawa.jpg",
    alt: "Produkty Sady Celmerów",
  },
  {
    src: "/images/gallery/pszczola-na-kwiecie.jpg",
    alt: "Pszczoła na kwiecie",
  },
  { src: "/images/hero/big-photo3.jpg", alt: "Sad jabłoniowy" },
  { src: "/images/gallery/sad-jablonie.jpg", alt: "Jabłonie w sadzie" },
  { src: "/images/gallery/ptasie-gniazdo.jpg", alt: "Ptasie gniazdo" },
  { src: "/images/odmiany/topaz.jpg", alt: "Jabłko Topaz" },
  { src: "/images/gallery/sarenka-w-sadzie.jpg", alt: "Sarenka w sadzie" },
];

export default function InfiniteMarquee() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const allImages = useMemo(() => [...images, ...images], []);

  const handlePrev = useCallback(() => {
    setLightboxIndex((i) => (i <= 0 ? images.length - 1 : i - 1));
  }, []);

  const handleNext = useCallback(() => {
    setLightboxIndex((i) => (i >= images.length - 1 ? 0 : i + 1));
  }, []);

  return (
    <section className="overflow-hidden bg-sage-800 py-8">
      <div className="animate-marquee flex w-max gap-4">
        {allImages.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            onClick={() => setLightboxIndex(i % images.length)}
            aria-label={`Otwórz zdjęcie: ${img.alt}`}
            className="relative h-48 w-72 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl md:h-56 md:w-80"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="320px"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors hover:bg-black/0" />
          </button>
        ))}
      </div>

      <Lightbox
        images={images}
        currentIndex={lightboxIndex}
        isOpen={lightboxIndex >= 0}
        onClose={() => setLightboxIndex(-1)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
