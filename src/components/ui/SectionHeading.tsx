"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-10 text-center md:mb-14 ${className}`}
    >
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="hidden h-px min-w-8 flex-1 origin-right bg-gradient-to-r from-transparent to-sage-300 sm:block"
        />
        <h2 className="min-w-0 text-2xl font-semibold tracking-tight text-sage-700 sm:text-3xl md:text-4xl">
          {children}
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="hidden h-px min-w-8 flex-1 origin-left bg-gradient-to-l from-transparent to-sage-300 sm:block"
        />
      </div>
    </motion.div>
  );
}
