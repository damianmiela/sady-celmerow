"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Apple } from "lucide-react";
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
      onClick={variety.placeholder ? undefined : onClick}
      className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg"
    >
      <div className="relative aspect-square overflow-hidden">
        {variety.placeholder ? (
          <div className="flex h-full w-full items-center justify-center bg-sage-100">
            <Apple size={64} className="text-sage-300" strokeWidth={1.2} />
          </div>
        ) : (
          <Image
            src={variety.thumb}
            alt={variety.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 50vw, 33vw"
          />
        )}
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
