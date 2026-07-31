import type { Metadata, Viewport } from "next";
import { Archivo, Fraunces, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "HALCYON — Creative Studio",
  description:
    "Halcyon is a creative studio crafting digital experiences that feel like film — every scroll a scene.",
  openGraph: {
    title: "HALCYON — Creative Studio",
    description:
      "We make the internet feel alive. Film-like websites, art direction and digital craft.",
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
      className={`${archivo.variable} ${fraunces.variable} ${inter.variable}`}
    >
      <body className="grain bg-ink font-sans text-bone antialiased">
        {children}
      </body>
    </html>
  );
}
