"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error); // eslint-disable-line no-console
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-24 text-center md:pt-32">
      <h1 className="font-serif text-4xl font-bold text-sage-700">
        Ups, coś poszło nie tak
      </h1>
      <p className="mt-3 text-neutral-600">
        Przepraszamy za utrudnienia. Spróbuj odświeżyć stronę.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-sage-500 px-8 py-3 font-medium text-white shadow transition-all hover:bg-sage-600 hover:shadow-md"
      >
        Spróbuj ponownie
      </button>
    </div>
  );
}
