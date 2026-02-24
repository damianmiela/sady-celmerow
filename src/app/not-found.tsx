import Link from "next/link";
import { TreePine } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <TreePine size={64} className="mb-6 text-sage-400" />
      <h1 className="font-serif text-5xl font-bold text-sage-700">404</h1>
      <p className="mt-3 text-lg text-neutral-600">
        Strona, której szukasz, nie istnieje.
      </p>
      <p className="mt-1 text-neutral-500">
        Możliwe, że adres jest nieprawidłowy lub strona została przeniesiona.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-sage-500 px-8 py-3 font-medium text-white shadow transition-all hover:bg-sage-600 hover:shadow-md"
      >
        Wróć na stronę główną
      </Link>
    </div>
  );
}
