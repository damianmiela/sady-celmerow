"use client";

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
  return (
    <section className="relative overflow-hidden bg-sage-900 pt-20 min-[820px]:pt-28">
      <div
        className="relative mx-auto max-w-[1920px]"
        style={{ height: "clamp(10rem, calc(100vw * 430 / 1920), 430px)" }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1920px) 100vw, 1920px"
          placeholder={blurDataURL ? "blur" : undefined}
          blurDataURL={blurDataURL}
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-6 bg-gradient-to-r from-sage-900 to-transparent opacity-0 min-[1920px]:opacity-100" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-6 bg-gradient-to-l from-sage-900 to-transparent opacity-0 min-[1920px]:opacity-100" />
      </div>
    </section>
  );
}
