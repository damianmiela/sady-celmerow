"use client";

import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import Lightbox from "@/components/ui/Lightbox";
import { galleryPhotos } from "@/lib/data";

export default function InfiniteMarquee() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const images = useMemo(
    () => galleryPhotos.map((p) => ({ src: p.src, alt: p.alt })),
    [],
  );
  const allImages = useMemo(() => [...images, ...images], [images]);

  const handlePrev = useCallback(() => {
    setLightboxIndex((i) => (i <= 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((i) => (i >= images.length - 1 ? 0 : i + 1));
  }, [images.length]);

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
