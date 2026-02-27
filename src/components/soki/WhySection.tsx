"use client";

import { Apple, Leaf, FlaskConical } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyText } from "@/lib/data";

/* Custom sugar cube SVG — lucide doesn't have one */
function SugarCubeOff({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* cube */}
      <rect x="4" y="8" width="10" height="10" rx="1.5" />
      <path d="M14 8l4-4h-10l-4 4" />
      <path d="M18 4v10l-4 4" />
      {/* diagonal strike-through */}
      <line x1="2" y1="22" x2="22" y2="2" strokeWidth="2" />
    </svg>
  );
}

/* Custom "no colorants" icon — paint drop with strike-through */
function NoColorants({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* paint/dye drop */}
      <path d="M12 2C12 2 6 9.5 6 14a6 6 0 0 0 12 0C18 9.5 12 2 12 2z" />
      {/* diagonal strike-through */}
      <line x1="2" y1="22" x2="22" y2="2" strokeWidth="2" />
    </svg>
  );
}

const qualities = [
  {
    text: "100% tłoczony sok z jabłek",
    icon: Apple,
    customIcon: null,
  },
  {
    text: "bez dodatku cukru",
    icon: null,
    customIcon: "sugar" as const,
  },
  {
    text: "bez konserwantów",
    icon: FlaskConical,
    customIcon: null,
  },
  {
    text: "bez barwników",
    icon: null,
    customIcon: "colorant" as const,
  },
  {
    text: "ze specjalnie dobranych odmian",
    icon: Leaf,
    customIcon: null,
  },
];

export default function WhySection() {
  return (
    <section className="section-padding bg-cream-100">
      <SectionHeading>Dlaczego nasze soki są takie dobre?</SectionHeading>

      {/* Mobile: vertical card list */}
      <div className="mx-auto mb-14 flex max-w-md flex-col gap-2 min-[930px]:hidden">
        {qualities.map((q, i) => {
          const Icon = q.icon;
          return (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="flex items-center gap-3 rounded-xl border border-sage-200/40 bg-white px-3 py-2.5 shadow-sm">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sage-50 text-sage-500">
                  {q.customIcon === "sugar" ? (
                    <SugarCubeOff size={22} />
                  ) : q.customIcon === "colorant" ? (
                    <NoColorants size={22} />
                  ) : (
                    Icon && <Icon size={22} />
                  )}
                </div>
                <span className="text-sm font-medium text-sage-700">
                  {q.text}
                </span>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Desktop: 5-column grid */}
      <div className="mx-auto mb-14 hidden max-w-4xl grid-cols-5 gap-4 min-[930px]:grid">
        {qualities.map((q, i) => {
          const Icon = q.icon;
          return (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="group flex h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-sage-200/60 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage-50 text-sage-500 transition-colors group-hover:bg-sage-100">
                  {q.customIcon === "sugar" ? (
                    <SugarCubeOff size={26} />
                  ) : q.customIcon === "colorant" ? (
                    <NoColorants size={26} />
                  ) : (
                    Icon && <Icon size={26} />
                  )}
                </div>
                <span className="text-xs font-medium leading-snug text-sage-700">
                  {q.text}
                </span>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Text */}
      <AnimatedSection className="mx-auto max-w-3xl space-y-4">
        {whyText.map((text, i) => (
          <p key={i} className="text-center leading-relaxed text-neutral-600">
            {text}
          </p>
        ))}
      </AnimatedSection>
    </section>
  );
}
