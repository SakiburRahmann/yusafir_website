import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Linear — A better way to build products",
  description:
    "Linear is a purpose-built tool for planning and building products. It helps you focus on what matters most — shipping.",
  openGraph: {
    title: "Linear — A better way to build products",
    description:
      "Linear is a purpose-built tool for planning and building products.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0e0e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="bg-ink font-sans text-fore antialiased">{children}</body>
    </html>
  );
}
