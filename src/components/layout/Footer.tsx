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
  ExternalLink,
} from "lucide-react";
import { siteConfig, navLinks } from "@/lib/data";

const navIcons: Record<string, React.ReactNode> = {
  "/": <Home size={13} />,
  "/soki": <GlassWater size={13} />,
  "/odmiany": <Apple size={13} />,
  "/galeria": <Images size={13} />,
  "/kontakt": <Mail size={13} />,
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
            <p className="text-center text-sm font-bold text-white">Sady Celmerów</p>
            <p className="mt-1 text-center text-xs leading-relaxed text-cream-300">
              {siteConfig.tagline}
              <br />
              {siteConfig.taglineSub}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-cream-300">
              Nawigacja
            </h4>
            <ul className="space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-xs text-cream-200 transition-colors hover:text-white"
                  >
                    <span className="text-sage-400">{navIcons[link.href]}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-cream-300">
              Kontakt
            </h4>
            <div className="space-y-1.5 text-xs">
              {siteConfig.contacts.map((c) => (
                <div key={c.name} className="flex items-center gap-2">
                  <Phone size={13} className="text-sage-400" />
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
                <MapPin size={13} className="text-sage-400" />
                <span>
                  {siteConfig.address.street}, {siteConfig.address.city}
                </span>
              </div>
            </div>
          </div>

          {/* Email + Social */}
          <div>
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-cream-300">
              Napisz do nas
            </h4>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-sage-400" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Facebook size={13} className="text-sage-400" />
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
        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-sage-700/50 pt-4 text-[10px] text-cream-300 sm:flex-row">
          <span>
            &copy; {year} {siteConfig.name}. Wszelkie prawa zastrzeżone.
          </span>
          <span className="flex items-center gap-1">
            Realizacja:{" "}
            <a
              href="https://www.dendigital.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-cream-200 transition-colors hover:text-white"
            >
              DEN Digital
              <ExternalLink size={10} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
