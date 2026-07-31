import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
});

export const metadata: Metadata = {
  title: "AURUM — Digital Atelier",
  description:
    "Aurum is a digital atelier crafting identities, products and experiences for brands that refuse to be ordinary.",
  openGraph: {
    title: "AURUM — Digital Atelier",
    description:
      "We craft digital experiences that feel inevitable.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${plex.variable}`}
    >
      <body className="grain bg-ink font-sans text-bone antialiased">
        {children}
      </body>
    </html>
  );
}
