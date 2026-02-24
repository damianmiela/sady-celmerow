import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function ContactForm() {
  return (
    <div className="rounded-2xl border border-cream-300 bg-cream-100 p-8 text-center">
      <p className="font-serif text-xl font-bold text-sage-700">
        Formularz wkrótce dostępny
      </p>
      <p className="mx-auto mt-3 max-w-md text-neutral-600">
        Formularz kontaktowy jest w przygotowaniu. W&nbsp;międzyczasie prosimy
        o&nbsp;kontakt telefoniczny lub mailowy:
      </p>
      <div className="mt-6 space-y-2">
        {siteConfig.contacts.map((c) => (
          <a
            key={c.name}
            href={`tel:${c.phone.replace(/\s/g, "")}`}
            className="mx-auto flex items-center justify-center gap-2 text-sage-600 transition-colors hover:text-sage-800"
          >
            <Phone size={16} />
            <span className="font-medium">
              {c.name}: {c.phone}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
