'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Send,
  ExternalLink,
} from 'lucide-react';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=51.30645606825139,17.0502723849336&z=15&output=embed';
const MAP_DIRECTIONS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=ul.+Obornicka+18,+55-100+Trzebnica';

const inputClasses =
  'w-full rounded-lg border border-muted-200 bg-white px-4 py-3 text-muted-800 placeholder:text-muted-400 transition-all duration-200 hover:border-muted-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // UI only for now — no backend
  };

  return (
    <>
      {/* Full-width image divider */}
      <div className="relative h-64 w-full overflow-hidden md:h-80 lg:h-96">
        <Image
          src="/images/big-photo4.jpg"
          alt="Sady Celmerów"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <Section id="kontakt">
        <SectionHeader title="Skontaktuj się z nami!" />

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 font-heading text-xl font-semibold text-primary-700">
              Formularz kontaktowy
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Imię i nazwisko"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={inputClasses}
              />
              <input
                type="email"
                placeholder="Twój email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={inputClasses}
              />
              <textarea
                placeholder="Wiadomość"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={`${inputClasses} resize-none`}
              />
              <Button type="submit" className="w-full gap-2">
                <Send size={18} />
                Wyślij
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col justify-center space-y-6 lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div>
              <h3 className="font-heading text-lg font-semibold text-primary-700">
                Szymon Celmer
              </h3>
              <a
                href="tel:+48667599922"
                className="mt-1 flex items-center gap-2 text-muted-600 transition-colors hover:text-primary-500"
              >
                <Phone size={16} strokeWidth={1.75} />
                667 599 922
              </a>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-primary-700">
                Jakub Celmer
              </h3>
              <a
                href="tel:+48609273078"
                className="mt-1 flex items-center gap-2 text-muted-600 transition-colors hover:text-primary-500"
              >
                <Phone size={16} strokeWidth={1.75} />
                609 273 078
              </a>
            </div>

            <div className="flex items-start gap-2 text-muted-600">
              <MapPin
                size={16}
                strokeWidth={1.75}
                className="mt-1 flex-shrink-0"
              />
              <span>
                ul. Obornicka 18
                <br />
                55-100 Trzebnica
              </span>
            </div>

            <a
              href="mailto:sady.celmerow@gmail.com"
              className="flex items-center gap-2 text-muted-600 transition-colors hover:text-primary-500"
            >
              <Mail size={16} strokeWidth={1.75} />
              sady.celmerow@gmail.com
            </a>

            <a
              href="https://facebook.com/sady.celmerow"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-600 transition-colors hover:text-primary-500"
            >
              <Facebook size={16} strokeWidth={1.75} />
              facebook.com/sady.celmerow
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            className="md:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="mb-4 font-heading text-xl font-semibold text-primary-700">
              Mapa
            </h3>
            <div className="overflow-hidden rounded-xl shadow-md">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja Sady Celmerów"
              />
            </div>
            <a
              href={MAP_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex"
            >
              <Button variant="outline" size="sm" className="gap-2">
                <ExternalLink size={16} />
                Wyznacz trasę
              </Button>
            </a>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
