'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { juices } from '@/data/juices';

export default function Juices() {
  const [activeId, setActiveId] = useState(juices[0].id);
  const [imagesReady, setImagesReady] = useState(false);
  const preloadRef = useRef(false);
  const activeJuice = juices.find((j) => j.id === activeId) ?? juices[0];

  // Preload all juice images on mount to prevent flash on first switch
  useEffect(() => {
    if (preloadRef.current) return;
    preloadRef.current = true;

    let loaded = 0;
    const total = juices.length;

    juices.forEach((juice) => {
      const img = new window.Image();
      img.src = juice.image;
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded >= total) setImagesReady(true);
      };
    });

    // Fallback: mark ready after timeout even if some images fail
    const timer = setTimeout(() => setImagesReady(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section id="soki">
      <SectionHeader title="Nasze soki" />

      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        {/* Main Display */}
        <div className="flex flex-col gap-6 lg:flex-1">
          {/* Large Image — slightly reduced for earlier description visibility */}
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-muted-100 shadow-lg">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeJuice.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              >
                <Image
                  src={activeJuice.image}
                  alt={activeJuice.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority={activeJuice.id === juices[0].id}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Title + Description */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeJuice.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <h3 className="font-heading text-2xl font-bold text-primary-700 md:text-3xl">
                {activeJuice.name}
              </h3>
              <p className="prose-paragraph mt-3">
                <span className="font-semibold text-muted-800">
                  {activeJuice.name}
                </span>{' '}
                {activeJuice.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnails — right column */}
        <div className="lg:w-60 lg:flex-shrink-0">
          <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-x-visible lg:pb-0">
            {juices.map((juice) => (
              <button
                key={juice.id}
                onClick={() => setActiveId(juice.id)}
                className={`group flex flex-shrink-0 flex-col items-center gap-2 rounded-xl p-2 transition-all duration-200 lg:flex-row lg:gap-3 ${
                  activeId === juice.id
                    ? 'bg-primary-50 ring-2 ring-primary-400/60'
                    : 'hover:bg-muted-50 hover:shadow-sm'
                }`}
              >
                <div
                  className={`relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg transition-all duration-200 lg:h-12 lg:w-12 ${
                    activeId === juice.id
                      ? 'shadow-md ring-1 ring-primary-300'
                      : 'group-hover:shadow-sm'
                  }`}
                >
                  <Image
                    src={juice.thumbnail}
                    alt={juice.thumbnailLabel}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <span
                  className={`text-center text-xs font-medium transition-colors lg:text-left lg:text-sm ${
                    activeId === juice.id
                      ? 'text-primary-700'
                      : 'text-muted-500 group-hover:text-muted-700'
                  }`}
                >
                  {juice.thumbnailLabel}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hidden preload images to ensure browser cache is warm */}
      <div className="hidden" aria-hidden="true">
        {juices.map((juice) => (
          <Image
            key={juice.id}
            src={juice.image}
            alt=""
            width={1}
            height={1}
            unoptimized
          />
        ))}
      </div>
    </Section>
  );
}
