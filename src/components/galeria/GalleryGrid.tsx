"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { galleryPhotos } from "@/lib/data";
import Lightbox from "@/components/ui/Lightbox";

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const lightboxImages = galleryPhotos.map((p) => ({
    src: p.src,
    alt: p.alt,
  }));

  const handlePrev = useCallback(() => {
    setLightboxIndex((i) => (i <= 0 ? galleryPhotos.length - 1 : i - 1));
  }, []);

  const handleNext = useCallback(() => {
    setLightboxIndex((i) => (i >= galleryPhotos.length - 1 ? 0 : i + 1));
  }, []);

  return (
    <>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {galleryPhotos.map((photo, i) => (
          <motion.button
            key={photo.src}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            onClick={() => setLightboxIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-xl"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent px-3 pb-3 pt-8 transition-transform group-hover:translate-y-0">
              <p className="text-xs font-medium text-white">{photo.alt}</p>
            </div>
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
