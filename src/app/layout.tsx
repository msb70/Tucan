import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tucán Brewery — Natures Beer · Panama",
  description:
    "Cervezas artesanales tropicales. Micro-lotes limitados hechos en Panamá. Cada batch es único. Algunos nunca volverán.",
  openGraph: {
    title: "Tucán Brewery — Natures Beer · Panama",
    description: "Craft tropical beers. Limited micro-batches made in Panama.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#0D0F14] text-[#F2E3C6]">
        <LanguageProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
