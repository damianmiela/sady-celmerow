import type { Metadata } from "next";
import { Lato, Lora } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const lato = Lato({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sady Celmerów | Rodzinne Gospodarstwo Sadownicze ze wzgórz Trzebnickich",
    template: "%s | Sady Celmerów",
  },
  description:
    "Rodzinne gospodarstwo sadownicze ze wzgórz Trzebnickich. Uprawiamy jabłka, tłoczymy naturalne soki i wytwarzamy przetwory owocowe. Sprzedaż bezpośrednia w Trzebnicy.",
  keywords: [
    "sady celmerów",
    "jabłka trzebnica",
    "sok jabłkowy naturalny",
    "gospodarstwo sadownicze",
    "sprzedaż jabłek",
    "naturalne soki",
    "trzebnica",
    "sadownictwo",
    "przetwory owocowe",
    "jabłka dolnośląskie",
    "sad rodzinny",
    "integrowana produkcja",
    "owoce ze wzgórz trzebnickich",
  ],
  openGraph: {
    title: "Sady Celmerów | Rodzinne Gospodarstwo Sadownicze ze wzgórz Trzebnickich",
    description:
      "Rodzinne gospodarstwo sadownicze ze wzgórz Trzebnickich. Jabłka, naturalne soki tłoczone i przetwory owocowe. Zapraszamy!",
    type: "website",
    locale: "pl_PL",
    siteName: "Sady Celmerów",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://sadycelmerow.pl",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://sadycelmerow.pl"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${lato.variable} ${lora.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
