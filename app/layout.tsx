import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sady Celmerów — Rodzinne Gospodarstwo Sadownicze',
  description:
    'Sady Celmerów — rodzinne gospodarstwo sadownicze ze wzgórz Trzebnickich. Najlepsze jabłka i naturalne soki tłoczone bez dodatku cukru i konserwantów.',
  keywords: [
    'jabłka',
    'sady',
    'Celmerów',
    'owoce',
    'sok jabłkowy',
    'Trzebnica',
    'gospodarstwo sadownicze',
    'soki tłoczone',
  ],
  authors: [{ name: 'Sady Celmerów' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  metadataBase: new URL('https://sadycelmerow.pl'),
  openGraph: {
    title: 'Sady Celmerów — Rodzinne Gospodarstwo Sadownicze',
    description:
      'Rodzinne gospodarstwo sadownicze ze wzgórz Trzebnickich. Naturalne soki i najlepsze jabłka.',
    url: 'https://sadycelmerow.pl',
    siteName: 'Sady Celmerów',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/big-photo1.jpg',
        width: 1200,
        height: 630,
        alt: 'Sady Celmerów',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sady Celmerów — Rodzinne Gospodarstwo Sadownicze',
    description:
      'Rodzinne gospodarstwo sadownicze ze wzgórz Trzebnickich. Naturalne soki i najlepsze jabłka.',
    images: ['/images/big-photo1.jpg'],
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
    <html lang="pl" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen font-body antialiased">{children}</body>
    </html>
  );
}
