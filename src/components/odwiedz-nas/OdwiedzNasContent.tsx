"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SalesMap from "@/components/odwiedz-nas/SalesMap";
import { siteConfig } from "@/lib/data";

export default function SpotkajNasContent() {
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
              className="w-full flex-shrink-0 overflow-hidden rounded-2xl shadow-md md:w-[45%]"
            >
              <Image
                src="/images/gallery/produkty-w-sadzie.jpg"
                alt="Produkty w sadzie podczas Jabłkobrania"
                width={600}
                height={400}
                className="h-64 w-full object-cover sm:h-80"
              />
            </motion.div>
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
                src="/images/gallery/produkty-wystawa.jpg"
                alt="Wystawa produktów z Sadów Celmerów"
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
    </>
  );
}
