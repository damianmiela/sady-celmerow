'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden md:h-screen"
    >
      {/* Background Image */}
      <Image
        src="/images/big-photo1.jpg"
        alt="Sady Celmerów"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 px-4 text-center">
        <motion.h1
          className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Rodzinne Gospodarstwo
          <br />
          Sadownicze
        </motion.h1>

        <motion.p
          className="mt-4 font-heading text-xl text-white/90 sm:text-2xl md:mt-6 md:text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          ze wzgórz Trzebnickich
        </motion.p>

        <motion.div
          className="mt-6 h-px w-24 mx-auto bg-white/50 md:mt-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#soki"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/60 transition-colors hover:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-label="Przewiń w dół"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.a>
    </section>
  );
}
