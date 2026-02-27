"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews, type Review } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

const AVATAR_COLORS = [
  "bg-sage-500",
  "bg-bark-400",
  "bg-sage-600",
  "bg-bark-500",
  "bg-sage-400",
  "bg-bark-300",
  "bg-sage-700",
  "bg-bark-600",
];

function getAvatarColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function getInitial(name: string): string {
  return name.charAt(0).toUpperCase();
}

function getRelativeTime(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 30) return "niedawno";

  const diffMonths =
    (now.getFullYear() - date.getFullYear()) * 12 +
    (now.getMonth() - date.getMonth());

  if (diffMonths < 12) {
    if (diffMonths === 1) return "miesiąc temu";
    if (diffMonths < 5) return `${diffMonths} miesiące temu`;
    return `${diffMonths} miesięcy temu`;
  }

  const years = Math.floor(diffMonths / 12);
  if (years === 1) return "rok temu";
  if (years < 5) return `${years} lata temu`;
  return `${years} lat temu`;
}

function pickRandom(arr: Review[], count: number): Review[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className="fill-amber-400 text-amber-400"
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [selected, setSelected] = useState<Review[]>([]);

  useEffect(() => {
    setSelected(pickRandom(reviews, 4));
  }, []);

  if (selected.length === 0) return null;

  return (
    <section className="section-padding bg-cream-50">
      <div className="mx-auto max-w-7xl">
        <SectionHeading>Opinie naszych klientów</SectionHeading>
        <p className="-mt-6 mb-10 text-center text-neutral-500 md:-mt-10 md:mb-12">
          Sprawdź, co mówią o nas na{" "}
          <a
            href="https://maps.app.goo.gl/wqhpFznwqihPggFJ8"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sage-600 underline decoration-sage-300 underline-offset-2 transition-colors hover:text-sage-800"
          >
            Google Maps
          </a>
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {selected.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl border border-sage-200/40 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${getAvatarColor(review.name)}`}
                >
                  {getInitial(review.name)}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-base font-semibold text-neutral-800">
                    {review.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <StarRating />
                  </div>
                </div>
              </div>

              <p className="flex-1 text-[0.9rem] leading-relaxed text-neutral-600">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="mt-4 flex items-center gap-1.5 border-t border-cream-200 pt-3">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-neutral-400">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-xs text-neutral-400">
                  {getRelativeTime(review.date)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
