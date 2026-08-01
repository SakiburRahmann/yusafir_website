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
  title: 'Agaami — AI ISSB Preparation for Bangladesh',
  description:
    'Practice every stage of the ISSB selection — psychological tests, group tasks, and interviews — and get evaluated by AI. Built for Bangladesh. Train like you are already there.',
  keywords: [
    'ISSB preparation',
    'ISSB practice platform',
    'Bangladesh ISSB',
    'ISSB AI',
    'word association test',
    'sentence completion test',
    'ISSB interview practice',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_BD',
    title: 'Agaami — AI ISSB Preparation',
    description:
      'Practice every stage of ISSB selection and get evaluated by AI. Built for Bangladesh.',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0e0b',
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
