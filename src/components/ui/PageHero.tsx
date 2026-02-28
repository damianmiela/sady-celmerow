"use client";

import { useState } from "react";
import Image from "next/image";

interface PageHeroProps {
  imageSrc: string;
  alt: string;
  blurDataURL?: string;
  objectPosition?: string;
}

export default function PageHero({
  imageSrc,
  alt,
  blurDataURL,
  objectPosition = "center",
}: PageHeroProps) {
  const [loaded, setLoaded] = useState(false);
  const needsNavOffset = objectPosition === "top";

  return (
    <>
      <section
        className={
          needsNavOffset
            ? "relative h-[calc(32vh+5rem)] min-h-[300px] overflow-hidden md:h-[calc(40vh+7rem)]"
            : "relative h-[32vh] min-h-[220px] overflow-hidden md:h-[40vh]"
        }
      >
        {/* Image container - offset below navbar when showing top of image */}
        <div
          className={`absolute inset-x-0 bottom-0 ${needsNavOffset ? "top-20 md:top-28" : "top-0"}`}
        >
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className={`object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
            style={{ objectPosition }}
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
          style={{ top: "min(32vh, calc(100vh - 220px))" }}
        />
      )}
    </>
  );
}
