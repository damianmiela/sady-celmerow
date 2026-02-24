import Image from "next/image";

interface PageHeroProps {
  imageSrc: string;
  alt: string;
}

export default function PageHero({ imageSrc, alt }: PageHeroProps) {
  return (
    <section className="relative h-[32vh] min-h-[220px] overflow-hidden md:h-[40vh]">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/30" />
    </section>
  );
}
