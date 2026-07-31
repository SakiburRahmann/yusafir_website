import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Join Bangladesh Armed Forces — Army, Navy, Air Force',
  description: 'Official recruitment portal for Bangladesh Army, Navy, and Air Force. Check eligibility, apply online, download admit cards, and track your application.',
  keywords: ['Bangladesh Army recruitment', 'Bangladesh Navy recruitment', 'Bangladesh Air Force recruitment', 'join armed forces Bangladesh', 'military jobs Bangladesh'],
  authors: [{ name: 'Bangladesh Armed Forces' }],
  creator: 'Bangladesh Armed Forces',
  publisher: 'Bangladesh Armed Forces',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_BD',
    url: 'https://joinbangladeshforces.gov.bd',
    title: 'Join Bangladesh Armed Forces — Army, Navy, Air Force',
    description: 'Official recruitment portal for Bangladesh Army, Navy, and Air Force.',
    siteName: 'Bangladesh Armed Forces Recruitment',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join Bangladesh Armed Forces',
    description: 'Official recruitment portal for Bangladesh Army, Navy, and Air Force.',
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: '#006747',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-pattern min-h-screen">
        {children}
      </body>
    </html>
  );
}