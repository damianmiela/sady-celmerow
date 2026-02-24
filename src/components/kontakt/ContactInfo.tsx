import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function ContactDetails() {
  return (
    <div className="space-y-4">
      {/* People — icon + name + number as one centered line each */}
      {siteConfig.contacts.map((contact) => (
        <div key={contact.name} className="flex items-center justify-center gap-2">
          <Phone size={18} className="text-sage-500" />
          <span className="font-semibold text-neutral-800">{contact.name}</span>
          <span className="text-sage-400">·</span>
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="text-sage-600 transition-colors hover:text-sage-700"
          >
            {contact.phone}
          </a>
        </div>
      ))}

      {/* Address */}
      <div className="flex items-center justify-center gap-2">
        <MapPin size={18} className="text-sage-500" />
        <span className="text-neutral-800">
          {siteConfig.address.street}, {siteConfig.address.city}
        </span>
      </div>

      {/* Email */}
      <div className="flex items-center justify-center gap-2">
        <Mail size={18} className="text-sage-500" />
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-sage-600 transition-colors hover:text-sage-700"
        >
          {siteConfig.email}
        </a>
      </div>

      {/* Facebook */}
      <div className="flex items-center justify-center gap-2">
        <Facebook size={18} className="text-sage-500" />
        <a
          href={siteConfig.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sage-600 transition-colors hover:text-sage-700"
        >
          facebook.com/sady.celmerow
        </a>
      </div>
    </div>
  );
}

export function ContactMap() {
  return (
    <div className="overflow-hidden rounded-xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.5!2d17.0612!3d51.3098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc216fced4ae1%3A0x1e4f6b2f1d5c6a0!2sObornicka%2018%2C%2055-100%20Trzebnica!5e0!3m2!1spl!2spl!4v1700000000000&hl=pl&language=pl"
        width="100%"
        height="320"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa — Sady Celmerów, ul. Obornicka 18, Trzebnica"
        className="rounded-xl"
      />
    </div>
  );
}

// Default export for backward compatibility
export default function ContactInfo() {
  return (
    <>
      <ContactDetails />
      <div className="mt-6">
        <ContactMap />
      </div>
    </>
  );
}
