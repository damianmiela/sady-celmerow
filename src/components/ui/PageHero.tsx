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
      <section className="relative overflow-hidden bg-sage-900 pt-20 md:pt-28">
        <div
          className="relative mx-auto max-w-[1920px] overflow-hidden"
          style={{ aspectRatio: "1920/430", minHeight: "10rem" }}
        >
          <Image
            src={imageSrc}
            alt={alt}
            width={1920}
            height={430}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
            priority
            sizes="(max-width: 1920px) 100vw, 1920px"
            placeholder={blurDataURL ? "blur" : undefined}
            blurDataURL={blurDataURL}
            onLoad={() => setLoaded(true)}
          />

          {!loaded && (
            <div className="absolute inset-0 animate-pulse bg-sage-900" />
          )}

          <div className="absolute inset-0 bg-black/30" />

          <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-6 bg-gradient-to-r from-sage-900 to-transparent opacity-0 min-[1920px]:opacity-100" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-6 bg-gradient-to-l from-sage-900 to-transparent opacity-0 min-[1920px]:opacity-100" />
        </div>
      </section>

      {!loaded && (
        <div
          className="fixed inset-x-0 bottom-0 z-30 bg-sage-900"
          style={{ top: "min(calc(min(100vw, 1920px) * 430 / 1920 + 5rem), calc(100vh - 100px))" }}
        />
      )}
    </>
  );
}
