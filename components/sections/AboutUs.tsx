'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';

const paragraphs = [
  'Nasze Gospodarstwo ma kilkudziesięcioletnią tradycję, którą kontynuuje już trzecie pokolenie sadowników. Pod koniec lat sześćdziesiątych Zdzisław Celmer założył jedno z pierwszych prywatnych gospodarstw sadowniczych w Trzebnicy wraz z nowoczesną bazą i chłodnią do przechowywania owoców.',
  'W naszych sadach ochrona chemiczna stosowana jest z umiarem. Od wielu lat bierzemy udział w programie Integrowanej Produkcji. Każdego roku przyznawany jest nam Certyfikat Integrowanej Produkcji, który gwarantuje, że nasze jabłka są regularnie badane na obecność pozostałości środków ochrony roślin. Jabłka są więc smaczne i zdrowe.',
];

function ParallaxBanner({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <div
      ref={ref}
      className="relative h-64 w-full overflow-hidden md:h-80 lg:h-96"
    >
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/25" />
    </div>
  );
}

export default function AboutUs() {
  return (
    <>
      {/* Full-width parallax image divider */}
      <ParallaxBanner src="/images/big-photo2.jpg" alt="Sady Celmerów" />

      <Section id="onas">
        <SectionHeader title="O nas" />

        <motion.div
          className="mx-auto max-w-[65ch] space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className="text-center text-base leading-[1.8] text-muted-600 md:text-lg md:leading-[1.85]"
            >
              {text}
            </p>
          ))}
        </motion.div>
      </Section>

      {/* Full-width parallax image divider */}
      <ParallaxBanner src="/images/big-photo3.jpg" alt="Sady Celmerów" />
    </>
  );
}
