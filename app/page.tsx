'use client';

import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-stone-900 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-stone-100 sm:text-5xl md:text-6xl">
          Sady Celmerów
        </h1>
        <div className="mt-4 h-px w-24 mx-auto bg-green-600" />
        <p className="mt-6 text-lg text-stone-400 sm:text-xl">
          Strona w przygotowaniu
        </p>
      </motion.div>
    </main>
  );
}
