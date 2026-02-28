"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SalesMap from "@/components/odwiedz-nas/SalesMap";

export default function OdwiedzNasContent() {
  return (
    <>
      {/* ── Jabłkobranie ─────────────────────────────────── */}
      <section className="section-padding bg-cream-50">
        <SectionHeading>Jabłkobranie</SectionHeading>

        <div className="mx-auto max-w-5xl">
          <AnimatedSection className="mx-auto mb-10 max-w-3xl space-y-5">
            <p className="text-center leading-relaxed text-neutral-600">
              Co roku, jesienią, otwieramy nasze sady dla wszystkich jabłkożerców
              i zapraszamy na{" "}
              <span className="font-semibold text-sage-700">Jabłkobranie u Celmerów</span>!
              To wyjątkowe wydarzenie, podczas którego każdy może sam zerwać
              jabłka prosto z drzewa w cenach niższych niż sklepowe.
            </p>
            <p className="text-center leading-relaxed text-neutral-600">
              W Sadzie Pod Wieżą, przy drodze 340 w stronę Obornik Śląskich,
              czekają na Was dorodne jabłka kilku odmian: Rubin, Red Jonaprince,
              Gloster we wrześniu oraz Golden Delicious, Topaz, Rubinola
              i Rubinstar w październiku. Przybywajcie tłumnie!
            </p>
            <p className="text-center leading-relaxed text-neutral-600">
              Na miejscu organizujemy ognisko, leżaczki i soczek dla spragnionych.
              Weźcie ze sobą jakieś przekąski, pojemniki na owoce i dobre buty —
              czekamy od 10:00 do 17:00. To świetna przygoda zarówno dla
              maluchów, jak i dużych smakoszy!
            </p>
          </AnimatedSection>

          <div className="grid gap-5 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl shadow-md"
            >
              <Image
                src="/images/gallery/produkty-w-sadzie.jpg"
                alt="Produkty w sadzie podczas Jabłkobrania"
                width={600}
                height={400}
                className="h-64 w-full object-cover sm:h-72"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="overflow-hidden rounded-2xl shadow-md"
            >
              <Image
                src="/images/gallery/produkty-wystawa.jpg"
                alt="Wystawa produktów na Jabłkobraniu"
                width={600}
                height={400}
                className="h-64 w-full object-cover sm:h-72"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Bazar Smakoszy ───────────────────────────────── */}
      <section className="section-padding bg-white">
        <SectionHeading>Bazar Smakoszy</SectionHeading>

        <div className="mx-auto max-w-5xl">
          <AnimatedSection className="mx-auto mb-10 max-w-3xl space-y-5">
            <p className="text-center leading-relaxed text-neutral-600">
              W każdy weekend wyruszamy do{" "}
              <span className="font-semibold text-sage-700">Wrocławia</span>,
              gdzie na bazarze rozkładamy nasze stoisko pełne jabłek, soków
              i&nbsp;innych pyszności prosto z naszych sadów.
            </p>
            <p className="text-center leading-relaxed text-neutral-600">
              Znajdziecie u nas świeże jabłka kilku odmian, tłoczone soki
              jabłkowe bez cukru i konserwantów, a także sezonowe przysmaki.
              Zapraszamy serdecznie — pogadamy, podegustujemy i doradzimy,
              która odmiana będzie dla Was najlepsza!
            </p>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-md overflow-hidden rounded-2xl shadow-md"
          >
            <Image
              src="/images/gallery/sok-jablkowy-produkt.jpg"
              alt="Sok jabłkowy z Sadów Celmerów na bazarze"
              width={600}
              height={400}
              className="h-72 w-full object-cover"
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

        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl shadow-md">
          <SalesMap />
        </div>
      </section>
    </>
  );
}
