import Link from "next/link";
import Image from "next/image";
import {
  Home,
  GlassWater,
  Apple,
  Images,
  Phone,
  MapPin,
  Mail,
  Facebook,
  Scale,
} from "lucide-react";
import { siteConfig, navLinks } from "@/lib/data";

const navIcons: Record<string, React.ReactNode> = {
  "/": <Home size={15} />,
  "/soki": <GlassWater size={15} />,
  "/odmiany": <Apple size={15} />,
  "/galeria": <Images size={15} />,
  "/kontakt": <Mail size={15} />,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-sage-800 to-sage-900 text-cream-200">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand + Logo — centered */}
          <div className="flex flex-col items-center justify-center sm:col-span-2 md:col-span-1">
            <Image
              src="/images/logo-512.png"
              alt="Sady Celmerów"
              width={420}
              height={156}
              className="mb-3 h-36 w-auto brightness-110"
            />
            <p className="text-center text-base font-bold text-white">Sady Celmerów</p>
            <p className="mt-1 text-center text-sm leading-relaxed text-cream-300">
              {siteConfig.tagline}
              <br />
              {siteConfig.taglineSub}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-cream-300">
              Nawigacja
            </h4>
            <ul className="space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-cream-200 transition-colors hover:text-white"
                  >
                    <span className="text-sage-400">{navIcons[link.href]}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="border-t border-sage-700/50 pt-1.5">
                <Link
                  href="/informacje-prawne"
                  className="flex items-center gap-2 text-sm text-cream-300/70 transition-colors hover:text-white"
                >
                  <span className="text-sage-500"><Scale size={15} /></span>
                  Informacje prawne
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-cream-300">
              Kontakt
            </h4>
            <div className="space-y-1.5 text-sm">
              {siteConfig.contacts.map((c) => (
                <div key={c.name} className="flex items-center gap-2">
                  <Phone size={15} className="text-sage-400" />
                  <span>
                    {c.name}:{" "}
                    <a
                      href={`tel:${c.phone.replace(/\s/g, "")}`}
                      className="transition-colors hover:text-white"
                    >
                      {c.phone}
                    </a>
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-sage-400" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.city}
                </span>
              </div>
            </div>
          </div>

          {/* Email + Social */}
          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-cream-300">
              Napisz do nas
            </h4>
            <div className="space-y-1.5 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-sage-400" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Facebook size={15} className="text-sage-400" />
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  facebook.com/sady.celmerow
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-sage-700/50 pt-4 text-xs text-cream-300 sm:flex-row">
          <span>
            &copy; {year} {siteConfig.name}. Wszelkie prawa zastrzeżone.
          </span>
          <span className="flex items-center gap-1.5">
            Realizacja:{" "}
            <a
              href="https://www.dendigital.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/dendigital-logo.png"
                alt="DEN Digital"
                width={80}
                height={40}
                className="h-[40px] w-auto"
              />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
