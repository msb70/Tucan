"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}
import { useLang } from "@/context/LanguageContext";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="bg-[#080A0E] border-t border-[#D9A320]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image src="/logo.jpg" alt="Tucán Brewery" fill sizes="48px" className="object-contain rounded-full" />
              </div>
              <div>
                <p className="font-display text-2xl text-gold" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  Tucán Brewery
                </p>
                <p className="text-xs text-[#D9A320]/60 tracking-widest uppercase">Natures Beer · Panama</p>
              </div>
            </div>
            <p className="text-[#F2E3C6]/50 text-sm leading-relaxed max-w-xs">
              {lang === "es"
                ? "Cervezas artesanales en micro-lotes. Inspiradas en Panamá, la noche, las frutas y la experimentación tropical."
                : "Craft beers in micro-batches. Inspired by Panama, the night, tropical fruits and experimentation."}
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/tucanbrewery"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#D9A320]/30 flex items-center justify-center text-[#D9A320] hover:bg-[#D9A320] hover:text-[#0D0F14] transition-all"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://wa.me/50763705338"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#D9A320]/30 flex items-center justify-center text-[#D9A320] hover:bg-[#D9A320] hover:text-[#0D0F14] transition-all"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="mailto:hola@tucanbrewery.com"
                className="w-10 h-10 rounded-full border border-[#D9A320]/30 flex items-center justify-center text-[#D9A320] hover:bg-[#D9A320] hover:text-[#0D0F14] transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-[#D9A320] text-lg mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              {lang === "es" ? "Explorar" : "Explore"}
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/cervezas", es: "Cervezas", en: "Beers" },
                { href: "/historia", es: "Nuestra Historia", en: "Our Story" },
                { href: "/filosofia", es: "Filosofía", en: "Philosophy" },
                { href: "/laboratorio", es: "El Laboratorio", en: "The Lab" },
                { href: "/eventos", es: "Eventos", en: "Events" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#F2E3C6]/50 hover:text-[#D9A320] text-sm transition-colors"
                  >
                    {lang === "es" ? link.es : link.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-[#D9A320] text-lg mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              {lang === "es" ? "Comunidad" : "Community"}
            </h4>
            <p className="text-[#F2E3C6]/50 text-sm mb-4">
              {lang === "es"
                ? "Entérate antes que nadie del próximo lote."
                : "Be the first to know about the next batch."}
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={lang === "es" ? "tu@correo.com" : "your@email.com"}
                className="bg-[#171A20] border border-[#D9A320]/20 text-[#F2E3C6] text-sm px-4 py-2.5 focus:outline-none focus:border-[#D9A320]/60 placeholder-[#F2E3C6]/20"
              />
              <button
                type="submit"
                className="bg-[#D9A320] text-[#0D0F14] font-bold text-xs py-2.5 px-4 uppercase tracking-[0.14em] hover:bg-[#E86A17] transition-colors"
              >
                {lang === "es" ? "Suscribirme" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        <div className="divider-gold mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#F2E3C6]/30 text-xs">
          <p>© 2024 Tucán Brewery. {lang === "es" ? "Hecho con obsesión en Panamá." : "Made with obsession in Panama."}</p>
          <p>{lang === "es" ? "Consúmase con responsabilidad. Solo para mayores de 18 años." : "Drink responsibly. For adults 18+ only."}</p>
        </div>
      </div>
    </footer>
  );
}
