"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Apple, Droplets, TreePine, Camera } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Nasze soki",
    description:
      "100% naturalne soki tłoczone z jabłek z naszych sadów — bez cukru, bez konserwantów.",
    href: "/soki",
    image: "/images/juice/jablko.jpg",
  },
  {
    icon: Apple,
    title: "Odmiany jabłek",
    description: "Uprawiamy 12 odmian jabłek, w tym rarytasy jak Topaz i Rubinola.",
    href: "/odmiany",
    image: "/images/odmiany/topaz.jpg",
  },
  {
    icon: TreePine,
    title: "O nas",
    description:
      "Rodzinne gospodarstwo z kilkudziesięcioletnią tradycją — już trzecie pokolenie sadowników.",
    href: "/o-nas",
    image: "/images/hero/big-photo3.jpg",
  },
  {
    icon: Camera,
    title: "Galeria",
    description:
      "Zajrzyj do naszego sadu — jabłonie, przyroda i piękno wzgórz Trzebnickich.",
    href: "/galeria",
    image: "/images/gallery/czerwone-jablka.jpg",
  },
];

export default function FeatureCards() {
  return (
    <section className="section-padding bg-cream-100">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={feature.href}
                className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <feature.icon size={24} className="text-white/90" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-sage-700">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {feature.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
