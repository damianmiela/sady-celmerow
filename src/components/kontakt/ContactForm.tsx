"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json.error || "Wystąpił nieoczekiwany błąd.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setErrorMsg("Nie udało się połączyć z serwerem. Sprawdź połączenie internetowe.");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-sage-200 bg-sage-50 p-8 text-center">
        <CheckCircle size={40} className="mx-auto text-sage-500" />
        <p className="mt-4 font-serif text-xl font-bold text-sage-700">
          Dziękujemy!
        </p>
        <p className="mt-2 text-neutral-600">
          Twoja wiadomość została wysłana. Odezwiemy się wkrótce.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-sage-600 transition-colors hover:text-sage-800"
        >
          Wyślij kolejną wiadomość
        </button>
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
          minLength={2}
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
          minLength={10}
          className="w-full resize-none rounded-lg border border-cream-300 bg-white px-4 py-3 text-neutral-800 transition-colors focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-400/20"
          placeholder="Treść wiadomości..."
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-sage-500 px-8 py-3 font-medium text-white shadow transition-all hover:bg-sage-600 hover:shadow-md active:scale-[0.98] disabled:opacity-60"
      >
        <Send size={18} />
        {status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
      </button>
    </form>
  );
}
