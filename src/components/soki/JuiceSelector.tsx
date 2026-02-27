"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Expand } from "lucide-react";
import { juices } from "@/lib/data";
import { cn } from "@/lib/utils";
import Lightbox from "@/components/ui/Lightbox";

export default function JuiceSelector() {
  const [activeId, setActiveId] = useState(juices[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const heroRef = useRef<HTMLButtonElement>(null);
  const active = juices.find((j) => j.id === activeId) ?? juices[0];

  const activeIndex = juices.findIndex((j) => j.id === activeId);

  const lightboxImages = juices.map((j) => ({
    src: j.image,
    alt: j.name,
  }));

  const selectJuice = useCallback((id: number) => {
    setActiveId(id);
    if (window.innerWidth < 768) {
      heroRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

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
            ref={heroRef}
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

        {/* Mobile: vertical card list */}
        <div className="mt-8 flex flex-col gap-2 md:hidden">
          {juices.map((juice) => (
            <button
              key={juice.id}
              onClick={() => selectJuice(juice.id)}
              className={cn(
                "flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all",
                activeId === juice.id
                  ? "border-sage-400 bg-sage-50 ring-1 ring-sage-400"
                  : "border-sage-200/40 bg-white hover:border-sage-300/60 hover:bg-cream-100",
              )}
            >
              <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={juice.imageMini}
                  alt={juice.shortName}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <span
                className={cn(
                  "text-sm font-medium",
                  activeId === juice.id ? "text-sage-700" : "text-neutral-600",
                )}
              >
                {juice.shortName}
              </span>
            </button>
          ))}
        </div>

        {/* Desktop: thumbnail grid */}
        <div className="mt-10 hidden flex-wrap justify-center gap-4 md:flex">
          {juices.map((juice) => (
            <button
              key={juice.id}
              onClick={() => setActiveId(juice.id)}
              className={cn(
                "group flex h-[10rem] w-28 flex-col items-center justify-start gap-2 rounded-xl border border-sage-200/40 p-2 transition-all",
                activeId === juice.id
                  ? "bg-sage-50 ring-2 ring-sage-400"
                  : "hover:bg-cream-200 hover:border-sage-300/60",
              )}
            >
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
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
                  "line-clamp-2 text-sm font-medium leading-tight",
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
