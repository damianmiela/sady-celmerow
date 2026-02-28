"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { galleryPhotos } from "@/lib/data";
import Lightbox from "@/components/ui/Lightbox";

const lightboxImages = galleryPhotos.map((p) => ({
  src: p.src,
  alt: p.alt,
}));

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [selectedSnap, setSelectedSnap] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedSnap(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const handlePrev = useCallback(() => {
    setLightboxIndex((i) => (i <= 0 ? galleryPhotos.length - 1 : i - 1));
  }, []);

  const handleNext = useCallback(() => {
    setLightboxIndex((i) => (i >= galleryPhotos.length - 1 ? 0 : i + 1));
  }, []);

  return (
    <>
      {/* Featured carousel */}
      <div className="mx-auto mb-10 max-w-5xl md:mb-14">
        <div className="group relative overflow-hidden rounded-2xl">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {galleryPhotos.map((photo, i) => (
                <div key={photo.src} className="min-w-0 flex-[0_0_100%]">
                  <button
                    onClick={() => setLightboxIndex(i)}
                    className="relative block aspect-[16/9] w-full cursor-pointer sm:aspect-[2/1]"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      priority={i === 0}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-4 pt-12">
                      <p className="text-sm font-medium text-white/90 sm:text-base">
                        {photo.alt}
                      </p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            aria-label="Poprzednie zdjęcie"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 opacity-0 shadow-md backdrop-blur-sm transition-opacity group-hover:opacity-100"
          >
            <ChevronLeft size={20} className="text-sage-700" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Następne zdjęcie"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 opacity-0 shadow-md backdrop-blur-sm transition-opacity group-hover:opacity-100"
          >
            <ChevronRight size={20} className="text-sage-700" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {galleryPhotos.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Zdjęcie ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === selectedSnap
                    ? "w-6 bg-white"
                    : "w-1.5 bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnail grid */}
      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-6">
        {galleryPhotos.map((photo, i) => (
          <motion.button
            key={photo.src}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.6) }}
            onClick={() => setLightboxIndex(i)}
            className={`group relative aspect-square overflow-hidden rounded-lg transition-all ${
              i === selectedSnap
                ? "ring-2 ring-sage-500 ring-offset-2 ring-offset-cream-50"
                : "hover:ring-1 hover:ring-sage-300 hover:ring-offset-1 hover:ring-offset-cream-50"
            }`}
          >
            <Image
              src={photo.thumb}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 16vw"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
          </motion.button>
        ))}
      </div>

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
