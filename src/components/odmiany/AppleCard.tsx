"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { AppleVariety } from "@/lib/data";

interface AppleCardProps {
  variety: AppleVariety;
  index: number;
  onClick: () => void;
}

export default function AppleCard({ variety, index, onClick }: AppleCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      onClick={onClick}
      className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={variety.image}
          alt={variety.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="px-3 py-3">
        <h3 className="text-sm font-semibold tracking-wide text-sage-700 md:text-base">
          {variety.name}
        </h3>
      </div>
    </motion.button>
  );
}
