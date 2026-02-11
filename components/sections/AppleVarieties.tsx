'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Modal from '@/components/ui/Modal';
import {
  appleVarieties,
  appleVarietiesDescription,
} from '@/data/appleVarieties';

export default function AppleVarieties() {
  const [selectedVariety, setSelectedVariety] = useState<number | null>(null);
  const selected = appleVarieties.find((v) => v.id === selectedVariety);

  return (
    <Section id="odmiany">
      <SectionHeader title="Odmiany jabłek" />

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {appleVarieties.map((variety, i) => (
          <motion.button
            key={variety.id}
            onClick={() => setSelectedVariety(variety.id)}
            className="group relative aspect-square overflow-hidden rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src={variety.image}
              alt={variety.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            />
            {/* Stronger bottom gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p
                className="font-heading text-base font-semibold text-white md:text-lg"
                style={{
                  textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                }}
              >
                {variety.name}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Description Text */}
      <motion.div
        className="mx-auto mt-14 max-w-[65ch] space-y-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {appleVarietiesDescription.map((text, i) => (
          <p
            key={i}
            className="text-center text-base leading-[1.8] text-muted-600 md:text-lg md:leading-[1.8]"
          >
            {text}
          </p>
        ))}
      </motion.div>

      {/* Fullscreen Modal */}
      <Modal
        isOpen={selectedVariety !== null}
        onClose={() => setSelectedVariety(null)}
      >
        {selected && (
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-[70vh] w-[85vw] max-w-4xl overflow-hidden rounded-xl sm:w-[70vw]">
              <Image
                src={selected.image}
                alt={selected.name}
                fill
                className="object-contain"
                sizes="85vw"
              />
            </div>
            <p className="font-heading text-xl font-semibold text-white md:text-2xl">
              {selected.name}
            </p>
          </div>
        )}
      </Modal>
    </Section>
  );
}
