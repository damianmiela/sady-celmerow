"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SalesMap from "@/components/odwiedz-nas/SalesMap";
import Lightbox from "@/components/ui/Lightbox";
import { siteConfig } from "@/lib/data";

const jablkobraniePhotos = [
  { src: "/images/gallery/jablkobranie-glowne.jpg", thumb: "/images/gallery/jablkobranie-glowne-thumb.jpg", alt: "Jabłkobranie u Celmerów — zbiory" },
  { src: "/images/gallery/jablkobranie-01.jpg", thumb: "/images/gallery/jablkobranie-01-thumb.jpg", alt: "Jabłkobranie — letni sad" },
  { src: "/images/gallery/jablkobranie-02.jpg", thumb: "/images/gallery/jablkobranie-02-thumb.jpg", alt: "Jabłkobranie — kosze pełne jabłek" },
  { src: "/images/gallery/jablkobranie-03.jpg", thumb: "/images/gallery/jablkobranie-03-thumb.jpg", alt: "Jabłkobranie — rodzinna zabawa" },
  { src: "/images/gallery/jablkobranie-04.jpg", thumb: "/images/gallery/jablkobranie-04-thumb.jpg", alt: "Jabłkobranie — zbiory październikowe" },
  { src: "/images/gallery/jablkobranie-05.jpg", thumb: "/images/gallery/jablkobranie-05-thumb.jpg", alt: "Jabłkobranie — degustacja" },
  { src: "/images/gallery/jablkobranie-06.jpg", thumb: "/images/gallery/jablkobranie-06-thumb.jpg", alt: "Jabłkobranie — jabłka na drzewach" },
  { src: "/images/gallery/jablkobranie-07.jpg", thumb: "/images/gallery/jablkobranie-07-thumb.jpg", alt: "Jabłkobranie — wiosenne przygotowania" },
  { src: "/images/gallery/jablkobranie-08.jpg", thumb: "/images/gallery/jablkobranie-08-thumb.jpg", alt: "Jabłkobranie — sad pełen jabłek" },
  { src: "/images/gallery/jablkobranie-09.jpg", thumb: "/images/gallery/jablkobranie-09-thumb.jpg", alt: "Jabłkobranie — dojrzałe owoce" },
  { src: "/images/gallery/jablkobranie-10.jpg", thumb: "/images/gallery/jablkobranie-10-thumb.jpg", alt: "Jabłkobranie — zachód słońca" },
  { src: "/images/gallery/jablkobranie-11.jpg", thumb: "/images/gallery/jablkobranie-11-thumb.jpg", alt: "Jabłkobranie — świeżo zebrane jabłka" },
  { src: "/images/gallery/jablkobranie-12.jpg", thumb: "/images/gallery/jablkobranie-12-thumb.jpg", alt: "Jabłkobranie — ostatnie zbiory" },
  { src: "/images/gallery/jablkobranie-plakat.jpg", thumb: "/images/gallery/jablkobranie-plakat-thumb.jpg", alt: "Jabłkobranie — plakat wydarzenia" },
];

const lightboxImages = jablkobraniePhotos.map((p) => ({
  src: p.src,
  alt: p.alt,
}));

export default function SpotkajNasContent() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const handlePrev = useCallback(() => {
    setLightboxIndex((i) =>
      i <= 0 ? jablkobraniePhotos.length - 1 : i - 1,
    );
  }, []);

  const handleNext = useCallback(() => {
    setLightboxIndex((i) =>
      i >= jablkobraniePhotos.length - 1 ? 0 : i + 1,
    );
  }, []);

  return (
    <>
      {/* ── Jabłkobranie ─────────────────────────────────── */}
      <section className="section-padding bg-cream-50">
        <SectionHeading>Jabłkobranie</SectionHeading>

        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <AnimatedSection className="flex-1 space-y-5">
              <p className="leading-relaxed text-neutral-600">
                Co roku, jesienią, otwieramy nasze sady dla wszystkich
                jabłkożerców i zapraszamy na{" "}
                <span className="font-semibold text-sage-700">
                  Jabłkobranie u Celmerów
                </span>
                ! To wyjątkowe wydarzenie, podczas którego każdy może sam zerwać
                jabłka prosto z drzewa w cenach niższych niż sklepowe.
              </p>
              <p className="leading-relaxed text-neutral-600">
                W Sadzie Pod Wieżą, przy drodze 340 w stronę Obornik Śląskich,
                czekają na Was dorodne jabłka kilku odmian. Na miejscu
                organizujemy ognisko, leżaczki i soczek dla spragnionych.
                Weźcie ze sobą jakieś przekąski, pojemniki na owoce i dobre
                buty. To świetna przygoda zarówno dla maluchów, jak i dorosłych!
              </p>
              <p className="leading-relaxed text-neutral-600">
                Szczegóły i terminy tegorocznego Jabłkobrania ogłaszamy na
                naszym{" "}
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-sage-700 underline decoration-sage-300 underline-offset-2 hover:text-sage-800"
                >
                  <Facebook size={16} />
                  Facebooku
                </a>
                {" "}— śledźcie nas, żeby niczego nie przegapić!
              </p>
            </AnimatedSection>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5 }}
              className="w-full flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl shadow-md md:w-[45%]"
              onClick={() => setLightboxIndex(0)}
            >
              <Image
                src="/images/gallery/jablkobranie-glowne.jpg"
                alt="Jabłkobranie u Celmerów — główne zdjęcie"
                width={800}
                height={600}
                className="h-64 w-full object-cover sm:h-80"
              />
            </motion.div>
          </div>

          {/* Mini gallery */}
          <div className="mt-8 grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-7">
            {jablkobraniePhotos.slice(1).map((photo, i) => (
              <motion.button
                key={photo.src}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.04, 0.5) }}
                onClick={() => setLightboxIndex(i + 1)}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-sm transition-shadow hover:shadow-md"
              >
                <Image
                  src={photo.thumb}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 14vw"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bazar Smakoszy ───────────────────────────────── */}
      <section className="section-padding bg-white">
        <SectionHeading>Bazar Smakoszy</SectionHeading>

        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8 md:flex-row-reverse md:gap-12">
            <AnimatedSection className="flex-1 space-y-5">
              <p className="leading-relaxed text-neutral-600">
                W każdy weekend wyruszamy do{" "}
                <span className="font-semibold text-sage-700">Wrocławia</span>,
                gdzie na bazarze rozkładamy nasze stoisko pełne jabłek, soków
                i&nbsp;innych pyszności prosto z naszych sadów.
              </p>
              <p className="leading-relaxed text-neutral-600">
                Znajdziecie u nas świeże jabłka kilku odmian, tłoczone soki
                jabłkowe bez cukru i konserwantów, a także sezonowe przysmaki.
                Zapraszamy serdecznie — pogadamy, podegustujemy i doradzimy,
                która odmiana będzie dla Was najlepsza!
              </p>
            </AnimatedSection>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5 }}
              className="w-full flex-shrink-0 overflow-hidden rounded-2xl shadow-md md:w-[45%]"
            >
              <Image
                src="/images/gallery/bazar-smakoszy-01.jpg"
                alt="Bazar Smakoszy we Wrocławiu"
                width={600}
                height={400}
                className="h-64 w-full object-cover sm:h-80"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-6 max-w-md overflow-hidden rounded-2xl shadow-md"
          >
            <Image
              src="/images/gallery/bazar-smakoszy-02.jpg"
              alt="Stoisko Sadów Celmerów na bazarze"
              width={600}
              height={400}
              className="h-56 w-full object-cover sm:h-64"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Gdzie sprzedajemy ────────────────────────────── */}
      <section className="section-padding bg-cream-50">
        <SectionHeading>Gdzie kupić nasze produkty?</SectionHeading>

        <AnimatedSection className="mx-auto mb-10 max-w-3xl">
          <p className="text-center leading-relaxed text-neutral-600">
            Nasze jabłka i soki dostępne są w wybranych punktach sprzedaży.
            Kliknij na pinezkę, aby zobaczyć szczegóły. Jeśli chciałbyś
            sprzedawać nasze produkty — skontaktuj się z nami!
          </p>
        </AnimatedSection>

        <div className="relative z-0 mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-md">
          <SalesMap />
        </div>
      </section>

      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxIndex >= 0}
        onClose={() => setLightboxIndex(-1)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}
