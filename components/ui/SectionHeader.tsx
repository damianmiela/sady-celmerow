'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export default function SectionHeader({
  title,
  className = '',
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`mb-12 text-center ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className="section-title">{title}</h2>
      <div className="section-divider" />
    </motion.div>
  );
}
