'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { Droplets, Apple, Leaf, Palette, FlaskConical } from 'lucide-react';

const qualities = [
  { icon: Droplets, text: '100% tłoczony sok z jabłek' },
  { icon: Apple, text: 'bez dodatku cukru' },
  { icon: FlaskConical, text: 'bez konserwantów' },
  { icon: Palette, text: 'bez barwników' },
  { icon: Leaf, text: 'ze specjalnie dobranych odmian' },
];

const descriptions = [
  'Nasze soki produkowane są ze staranne dobranych odmian. Najczęściej tłoczeniem zajmujemy się bezpośrednio po zerwaniu owoców, dzięki czemu uzyskujemy bardzo wysoką jakość oraz odpowiednią wydajność. Do produkcji nie wykorzystujemy żadnych wspomagaczy.',
  'Do soków nie dodajemy ani cukru, ani wody, ani żadnych konserwantów. Aby zachowały one trwałość, stosujemy łagodną pasteryzację w 82 stopniach Celsjusza.',
  'Nasze produkty sprzedajemy w szklanych butelkach 0,33 l i 0,75 l, a także w kartonach 3 i 5 l. Technologia Bag-in- Box (woreczek w pudełku) sprawia, że soki zachowują długotrwałą świeżość i zdatność do spożycia.',
];

export default function WhyOurJuices() {
  return (
    <Section id="dlaczego" className="bg-primary-50/50">
      <SectionHeader title="Dlaczego nasze soki są takie dobre?" />

      {/* Quality Badges */}
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {qualities.map((q, i) => {
          const Icon = q.icon;
          return (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 text-center shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <Icon size={24} />
              </div>
              <p className="text-sm font-medium leading-tight text-muted-700">
                {q.text}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Description */}
      <motion.div
        className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2 md:items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/images/leaf.jpg"
            alt="Naturalne jabłka"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="space-y-4">
          {descriptions.map((text, i) => (
            <p key={i} className="text-base leading-relaxed text-muted-600">
              {text}
            </p>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
