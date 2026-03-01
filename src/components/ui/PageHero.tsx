"use client";

import { useState } from "react";
import Image from "next/image";

interface PageHeroProps {
  imageSrc: string;
  alt: string;
  blurDataURL?: string;
}

export default function PageHero({
  imageSrc,
  alt,
  blurDataURL,
}: PageHeroProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden pt-20 md:pt-28">
        <div className="relative aspect-[1920/430] min-h-[10rem]">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className={`object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
            priority
            sizes="100vw"
            placeholder={blurDataURL ? "blur" : undefined}
            blurDataURL={blurDataURL}
            onLoad={() => setLoaded(true)}
          />

          {!loaded && (
            <div className="absolute inset-0 animate-pulse bg-sage-200" />
          )}
        </div>

        <div className="absolute inset-0 bg-black/30" />
      </section>

      {!loaded && (
        <div
          className="fixed inset-x-0 bottom-0 z-30 bg-cream-50"
          style={{ top: "min(calc(100vw * 430 / 1920 + 5rem), calc(100vh - 100px))" }}
        />
      )}
    </>
  );
}
