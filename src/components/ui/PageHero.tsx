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

  return (
    <section className="relative h-[32vh] min-h-[220px] overflow-hidden md:h-[40vh]">
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
      <div className="absolute inset-0 bg-black/30" />

      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-sage-200" />
      )}
    </section>
  );
}
