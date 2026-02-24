"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // TODO: Connect to an actual email backend (e.g. Resend, SendGrid, or a custom API route)
    // For now this is a UI placeholder — no email is actually sent.
    setTimeout(() => setStatus("sent"), 1000);
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-sage-50 p-8 text-center">
        <p className="font-serif text-xl font-bold text-sage-700">Dziękujemy!</p>
        <p className="mt-2 text-neutral-600">
          Twoja wiadomość została wysłana. Odezwiemy się wkrótce.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="mb-1.5 block text-sm font-medium text-neutral-700"
        >
          Imię i nazwisko
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-cream-300 bg-white px-4 py-3 text-neutral-800 transition-colors focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-400/20"
          placeholder="Jan Kowalski"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-neutral-700"
        >
          Twój email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border border-cream-300 bg-white px-4 py-3 text-neutral-800 transition-colors focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-400/20"
          placeholder="jan@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-neutral-700"
        >
          Wiadomość
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-none rounded-lg border border-cream-300 bg-white px-4 py-3 text-neutral-800 transition-colors focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-400/20"
          placeholder="Treść wiadomości..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-sage-500 px-8 py-3 font-medium text-white shadow transition-all hover:bg-sage-600 hover:shadow-md disabled:opacity-60"
      >
        <Send size={18} />
        {status === "sending" ? "Wysyłanie..." : "Wyślij"}
      </button>
    </form>
  );
}
