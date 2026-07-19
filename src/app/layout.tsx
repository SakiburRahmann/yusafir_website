import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yusafir Bangladesh — Study Abroad, Visa & Travel Consultancy",
  description:
    "Yusafir Bangladesh is a premier education and travel consultancy helping students, travellers, and medical-emergency cases reach global destinations with confidence.",
  keywords: [
    "Yusafir Bangladesh",
    "study abroad",
    "visa processing",
    "student recruitment",
    "travel visa Bangladesh",
    "medical visa",
    "university admission",
  ],
  authors: [{ name: "Yusafir Bangladesh" }],
  icons: {
    icon: "/yusafir-logo.jpg",
    apple: "/yusafir-logo.jpg",
  },
  openGraph: {
    title: "Yusafir Bangladesh",
    description:
      "Premier education & travel consultancy — study abroad, visa processing, and emergency medical visa support.",
    url: "https://yusafir.com",
    siteName: "Yusafir Bangladesh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yusafir Bangladesh",
    description:
      "Premier education & travel consultancy — study abroad, visa processing, and emergency medical visa support.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-brand selection:text-white`}
      >
        <div className="relative flex min-h-screen flex-col bg-background">
          <Navbar />
          <main className="relative flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
