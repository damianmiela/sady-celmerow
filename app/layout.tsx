import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sady Celmerów – Najlepsze jabłka z serca Polski',
  description:
    'Sady Celmerów – tradycyjne polskie jabłka najwyższej jakości. Świeże owoce prosto z sadu.',
  keywords: ['jabłka', 'sady', 'Celmerów', 'owoce', 'sok jabłkowy', 'Polska'],
  authors: [{ name: 'Sady Celmerów' }],
  openGraph: {
    title: 'Sady Celmerów – Najlepsze jabłka z serca Polski',
    description:
      'Tradycyjne polskie jabłka najwyższej jakości. Świeże owoce prosto z sadu.',
    url: 'https://sadycelmerow.pl',
    siteName: 'Sady Celmerów',
    locale: 'pl_PL',
    type: 'website',
    // images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sady Celmerów – Najlepsze jabłka z serca Polski',
    description:
      'Tradycyjne polskie jabłka najwyższej jakości. Świeże owoce prosto z sadu.',
    // images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
