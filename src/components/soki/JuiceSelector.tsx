"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Expand } from "lucide-react";
import { juices } from "@/lib/data";
import { cn } from "@/lib/utils";
import Lightbox from "@/components/ui/Lightbox";

export default function JuiceSelector() {
  const [activeId, setActiveId] = useState(juices[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const active = juices.find((j) => j.id === activeId) ?? juices[0];

  const activeIndex = juices.findIndex((j) => j.id === activeId);

  const lightboxImages = juices.map((j) => ({
    src: j.image,
    alt: j.name,
  }));

  const handlePrev = useCallback(() => {
    setActiveId((prev) => {
      const idx = juices.findIndex((j) => j.id === prev);
      const newIdx = idx <= 0 ? juices.length - 1 : idx - 1;
      return juices[newIdx].id;
    });
  }, []);

  const handleNext = useCallback(() => {
    setActiveId((prev) => {
      const idx = juices.findIndex((j) => j.id === prev);
      const newIdx = idx >= juices.length - 1 ? 0 : idx + 1;
      return juices[newIdx].id;
    });
  }, []);

  return (
    <>
      <div className="mx-auto max-w-6xl">
        {/* Main display */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          {/* Juice image — clickable for fullscreen */}
          <button
            onClick={() => setLightboxOpen(true)}
            className="group relative h-72 w-72 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl md:h-80 md:w-80"
            aria-label="Powiększ zdjęcie"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  className="object-cover"
                  sizes="320px"
                />
              </motion.div>
            </AnimatePresence>
            {/* Expand overlay on hover */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
              <Expand
                size={32}
                className="text-white opacity-0 drop-shadow-lg transition-opacity group-hover:opacity-100"
              />
            </div>
          </button>

          {/* Juice description */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-serif text-2xl font-bold text-sage-700 md:text-3xl">
                  {active.name}
                </h3>
                <p className="mt-4 leading-relaxed text-neutral-600">
                  {active.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Thumbnails — fixed height boxes */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
          {juices.map((juice) => (
            <button
              key={juice.id}
              onClick={() => setActiveId(juice.id)}
              className={cn(
                "group flex h-[10rem] w-24 flex-col items-center justify-start gap-2 rounded-xl border border-sage-200/40 p-2 transition-all md:w-28",
                activeId === juice.id
                  ? "bg-sage-50 ring-2 ring-sage-400"
                  : "hover:bg-cream-200 hover:border-sage-300/60",
              )}
            >
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg md:h-20 md:w-20">
                <Image
                  src={juice.imageMini}
                  alt={juice.shortName}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <span
                className={cn(
                  "line-clamp-2 text-xs font-medium leading-tight md:text-sm",
                  activeId === juice.id ? "text-sage-700" : "text-neutral-500",
                )}
              >
                {juice.shortName}
              </span>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        images={lightboxImages}
        currentIndex={activeIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}
