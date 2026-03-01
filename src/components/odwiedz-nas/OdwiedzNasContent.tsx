"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, MapPin, Clock, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SalesMap from "@/components/odwiedz-nas/SalesMap";
import Lightbox from "@/components/ui/Lightbox";
import { siteConfig } from "@/lib/data";

const jablkobraniePhotos = [
  { src: "/images/gallery/jablkobranie-glowne.jpg", thumb: "/images/gallery/jablkobranie-glowne-thumb.jpg", alt: "Pieczenie kiełbasek na ognisku podczas Jabłkobrania u Celmerów" },
  { src: "/images/gallery/jablkobranie-01.jpg", thumb: "/images/gallery/jablkobranie-01-thumb.jpg", alt: "Skrzynka zielonych jabłek na wózku między letnimi rzędami sadu" },
  { src: "/images/gallery/jablkobranie-02.jpg", thumb: "/images/gallery/jablkobranie-02-thumb.jpg", alt: "Stoisko z butelkami soków jabłkowych podczas Jabłkobrania" },
  { src: "/images/gallery/jablkobranie-03.jpg", thumb: "/images/gallery/jablkobranie-03-thumb.jpg", alt: "Goście Jabłkobrania przybywają — samochody przy polnej drodze do sadu" },
  { src: "/images/gallery/jablkobranie-04.jpg", thumb: "/images/gallery/jablkobranie-04-thumb.jpg", alt: "Kredowa tablica Jabłkobranie z jabłuszkami wskazująca drogę do sadu" },
  { src: "/images/gallery/jablkobranie-05.jpg", thumb: "/images/gallery/jablkobranie-05-thumb.jpg", alt: "Plakat Jabłkobrania u Celmerów z terminami i odmianami jabłek" },
  { src: "/images/gallery/jablkobranie-06.jpg", thumb: "/images/gallery/jablkobranie-06-thumb.jpg", alt: "Kartony soków jabłkowych Sady Celmerów na stoisku Jabłkobrania" },
  { src: "/images/gallery/jablkobranie-07.jpg", thumb: "/images/gallery/jablkobranie-07-thumb.jpg", alt: "Stoisko Sadów Celmerów z banerem i jabłkami na targach" },
  { src: "/images/gallery/jablkobranie-08.jpg", thumb: "/images/gallery/jablkobranie-08-thumb.jpg", alt: "Goście Jabłkobrania odpoczywają przy ognisku w sadzie" },
  { src: "/images/gallery/jablkobranie-09.jpg", thumb: "/images/gallery/jablkobranie-09-thumb.jpg", alt: "Rodziny z dziećmi zbierają jabłka do taczek na Jabłkobraniu" },
  { src: "/images/gallery/jablkobranie-10.jpg", thumb: "/images/gallery/jablkobranie-10-thumb.jpg", alt: "Obraz jabłek na sztaludze — plenerowe malowanie podczas Jabłkobrania" },
  { src: "/images/gallery/jablkobranie-11.jpg", thumb: "/images/gallery/jablkobranie-11-thumb.jpg", alt: "Pełna skrzynia zielonych jabłek Golden Delicious między rzędami sadu" },
  { src: "/images/gallery/jablkobranie-12.jpg", thumb: "/images/gallery/jablkobranie-12-thumb.jpg", alt: "Taczka z torbą jabłek na jesiennej alei sadu — Jabłkobranie" },
  { src: "/images/gallery/jablkobranie-plakat.jpg", thumb: "/images/gallery/jablkobranie-plakat-thumb.jpg", alt: "Miniaturowy ogródek — dekoracja przy drzewach podczas Jabłkobrania" },
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
                alt="Pieczenie kiełbasek na ognisku podczas Jabłkobrania u Celmerów"
                width={800}
                height={600}
                className="h-64 w-full object-cover sm:h-80"
              />
            </motion.div>
          </div>

          {/* Mini gallery */}
          <div className="mt-8 grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-7">
            {[...jablkobraniePhotos.slice(1), jablkobraniePhotos[0]].map((photo) => (
              <motion.button
                key={photo.src}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 }}
                onClick={() => setLightboxIndex(jablkobraniePhotos.indexOf(photo))}
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
                W każdy weekend wyruszamy na{" "}
                <a
                  href="https://bazarsmakoszy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-sage-700 underline decoration-sage-300 underline-offset-2 hover:text-sage-800"
                >
                  Wrocławski Bazar Smakoszy
                  <ExternalLink size={14} />
                </a>
                {" "}— unikatowe miejsce, gdzie prawdziwi smakosze znajdą
                najlepsze lokalne produkty. Na naszym stoisku czekają świeże
                jabłka kilku odmian, tłoczone soki jabłkowe bez cukru
                i&nbsp;konserwantów, chipsy jabłkowe oraz sezonowe przysmaki
                prosto ze wzgórz Trzebnickich.
              </p>
              <p className="leading-relaxed text-neutral-600">
                Na bazarze oprócz nas znajdziecie ekologiczne warzywa, owoce,
                sery, wędliny, świeże pieczywo i wiele innych lokalnych
                specjałów. To idealne miejsce na weekendowe zakupy, degustację
                i&nbsp;rozmowę z producentami. Wpadajcie — chętnie doradzimy,
                która odmiana będzie dla Was najlepsza!
              </p>

              <div className="mt-4 space-y-2 rounded-xl bg-cream-50 p-4">
                <div className="flex items-start gap-2 text-sm text-neutral-600">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-sage-600" />
                  <span>
                    <span className="font-semibold text-sage-700">ul. Paczkowska 26, Wrocław</span>
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm text-neutral-600">
                  <Clock size={16} className="mt-0.5 flex-shrink-0 text-sage-600" />
                  <span>
                    Sobota: <span className="font-medium">9:00–13:00</span>
                    {" · "}Niedziela: <span className="font-medium">10:00–14:00</span>
                  </span>
                </div>
              </div>
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
                alt="Stoisko z owocami, sokami i przetworami na Wrocławskim Bazarze Smakoszy"
                width={600}
                height={400}
                className="h-64 w-full object-cover sm:h-80"
              />
            </motion.div>
          </div>

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
