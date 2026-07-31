import type { Metadata, Viewport } from 'next';
import { Archivo, Fraunces, Inter } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-archivo',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shadinota — Join the Bangladesh Armed Forces',
  description:
    'Bangladesh Army, Navy and Air Force. One country. One duty. Your call to serve begins here — recruitment, eligibility, and the road to your commission.',
  keywords: [
    'Bangladesh Army recruitment',
    'Bangladesh Navy recruitment',
    'Bangladesh Air Force recruitment',
    'BMA long course',
    'join Bangladesh armed forces',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_BD',
    title: 'Shadinota — Join the Bangladesh Armed Forces',
    description:
      'Bangladesh Army, Navy and Air Force. One country. One duty. Your call to serve begins here.',
  },
};

export const viewport: Viewport = {
  themeColor: '#07130e',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${fraunces.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
