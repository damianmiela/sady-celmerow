'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { juices } from '@/data/juices';

export default function Juices() {
  const [activeId, setActiveId] = useState(juices[0].id);
  const activeJuice = juices.find((j) => j.id === activeId) ?? juices[0];

  return (
    <Section id="soki">
      <SectionHeader title="Nasze soki" />

      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        {/* Main Display */}
        <div className="flex flex-col gap-6 lg:flex-1">
          {/* Large Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted-100 shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeJuice.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <Image
                  src={activeJuice.image}
                  alt={activeJuice.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Title + Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeJuice.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-heading text-2xl font-bold text-primary-700 md:text-3xl">
                {activeJuice.name}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-600 md:text-lg">
                <span className="font-semibold">{activeJuice.name}</span>{' '}
                {activeJuice.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnails */}
        <div className="lg:w-64 lg:flex-shrink-0">
          <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-x-visible lg:pb-0">
            {juices.map((juice) => (
              <button
                key={juice.id}
                onClick={() => setActiveId(juice.id)}
                className={`group flex flex-shrink-0 flex-col items-center gap-2 rounded-xl p-2 transition-all duration-200 lg:flex-row lg:gap-3 ${
                  activeId === juice.id
                    ? 'bg-primary-50 ring-2 ring-primary-500'
                    : 'hover:bg-muted-50'
                }`}
              >
                <div
                  className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg transition-transform duration-200 lg:h-14 lg:w-14 ${
                    activeId === juice.id
                      ? 'scale-105 shadow-md'
                      : 'group-hover:scale-105'
                  }`}
                >
                  <Image
                    src={juice.thumbnail}
                    alt={juice.thumbnailLabel}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <span
                  className={`text-center text-xs font-medium lg:text-left lg:text-sm ${
                    activeId === juice.id
                      ? 'text-primary-700'
                      : 'text-muted-500'
                  }`}
                >
                  {juice.thumbnailLabel}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
