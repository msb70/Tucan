"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const navLinks = {
  es: [
    { href: "/", label: "Inicio" },
    { href: "/cervezas", label: "Cervezas" },
    { href: "/historia", label: "Historia" },
    { href: "/laboratorio", label: "El Laboratorio" },
    { href: "/tienda", label: "Tienda" },
    { href: "/eventos", label: "Eventos" },
    { href: "/contacto", label: "Contacto" },
  ],
  en: [
    { href: "/", label: "Home" },
    { href: "/cervezas", label: "Beers" },
    { href: "/historia", label: "Our Story" },
    { href: "/laboratorio", label: "The Lab" },
    { href: "/tienda", label: "Shop" },
    { href: "/eventos", label: "Events" },
    { href: "/contacto", label: "Contact" },
  ],
};

export default function Navigation() {
  const { lang, setLang } = useLang();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = navLinks[lang];
  const isHome = pathname === "/";
  const solidHeader = scrolled || !isHome || menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solidHeader
          ? "bg-[#0A0D10]/94 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.48)] border-b border-[#D9A320]/25"
          : "bg-gradient-to-b from-[#080A0E]/72 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/logo.jpg"
                alt="Tucán Brewery"
                fill
                sizes="48px"
                className="object-contain rounded-full"
              />
            </div>
            <div className="hidden sm:block">
              <span
                className="font-display text-xl md:text-2xl text-gold"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Tucán Brewery
              </span>
              <p className="text-xs text-[#D9A320]/60 -mt-1 tracking-widest uppercase">
                Natures Beer · Panama
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium relative group transition-colors ${
                  pathname === link.href
                    ? "text-[#D9A320]"
                    : "text-[#F2E3C6]/80 hover:text-[#D9A320]"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#D9A320] transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "es" ? "en" : "es")}
              className="text-xs font-semibold border border-[#D9A320]/40 text-[#D9A320] hover:bg-[#D9A320] hover:text-[#0D0F14] px-3 py-1.5 uppercase tracking-[0.12em] transition-all"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>

            {/* CTA button */}
            <Link
              href="/tienda"
              className="hidden sm:block text-xs font-bold bg-[#D9A320] text-[#0D0F14] px-5 py-2 uppercase tracking-[0.14em] hover:bg-[#E86A17] transition-all"
            >
              {lang === "es" ? "Comprar" : "Shop"}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-[#F2E3C6] p-2"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0D0F14]/98 backdrop-blur-xl border-t border-[#D9A320]/20">
          <div className="px-4 py-6 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-[#F2E3C6]/80 hover:text-[#D9A320] hover:bg-[#D9A320]/5 transition-colors font-medium border-b border-[#F2E3C6]/05"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/tienda"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center bg-[#D9A320] text-[#0D0F14] font-bold py-3 uppercase tracking-[0.16em] text-sm hover:bg-[#E86A17] transition-colors"
              >
                {lang === "es" ? "Ir a la Tienda" : "Go to Shop"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
