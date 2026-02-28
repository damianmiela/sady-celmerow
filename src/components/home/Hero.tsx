"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden">
      <Image
        src="/images/hero/big-photo1.jpg"
        alt="Sady Celmerów"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      <div className="relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/images/logo-512.png"
            alt="Sady Celmerów"
            width={420}
            height={180}
            className="mx-auto mb-8 h-60 w-auto drop-shadow-[0_8px_40px_rgba(0,0,0,0.75)] sm:h-[312px] md:h-96"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-3xl font-semibold text-white drop-shadow-lg sm:text-4xl md:text-5xl"
        >
          {siteConfig.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-3 text-lg text-cream-200 drop-shadow-md md:text-xl"
        >
          {siteConfig.taglineSub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10"
        >
          <Link
            href="/kontakt"
            className="rounded-full border-2 border-white/40 px-10 py-3 font-medium text-white backdrop-blur-sm transition-all hover:border-white/70 hover:bg-white/10"
          >
            Skontaktuj się z nami!
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={32} className="text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
