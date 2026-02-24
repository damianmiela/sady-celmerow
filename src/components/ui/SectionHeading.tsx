"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [textWidth, setTextWidth] = useState(200);

  useEffect(() => {
    if (headingRef.current) {
      setTextWidth(headingRef.current.offsetWidth);
    }
  }, [children]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-10 text-center md:mb-14 ${className}`}
    >
      <h2
        ref={headingRef}
        className="inline-block text-3xl font-semibold tracking-tight text-sage-700 md:text-4xl"
      >
        {children}
      </h2>
      {/* Animated divider — slides side to side across the heading width */}
      <div
        className="relative mx-auto mt-4 h-0.5"
        style={{ width: textWidth }}
      >
        <div
          className="heading-divider absolute top-0 h-full w-12 rounded-full bg-sage-500"
          style={
            {
              "--track-width": `${textWidth}px`,
            } as React.CSSProperties
          }
        />
      </div>
    </motion.div>
  );
}
