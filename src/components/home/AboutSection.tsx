"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { aboutText } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="o-nas" className="section-padding bg-cream-50">
      <SectionHeading>O nas</SectionHeading>

      <div className="mx-auto max-w-3xl">
        <AnimatedSection className="space-y-5">
          {aboutText.map((text, i) => (
            <p key={i} className="text-center text-base leading-relaxed text-neutral-600">
              {text}
            </p>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
