import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "VANGUARD — Defense & Tactical Systems",
  description:
    "Vanguard builds precision systems for land, air and domain awareness. Engineered for those who protect the rest of us.",
  openGraph: {
    title: "VANGUARD — Defense & Tactical Systems",
    description: "Precision systems for land, air and domain awareness.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0e0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="grain bg-ink font-sans text-bone antialiased">
        {children}
      </body>
    </html>
  );
}
