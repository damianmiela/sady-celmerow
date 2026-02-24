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
      <div className="inline-block">
        <h2 className="text-3xl font-semibold tracking-tight text-sage-700 md:text-4xl">
          {children}
        </h2>
        <div className="relative mt-4 h-0.5 w-full overflow-hidden">
          <div className="heading-divider absolute top-0 h-full w-12 rounded-full bg-sage-500" />
        </div>
      </div>
    </motion.div>
  );
}
