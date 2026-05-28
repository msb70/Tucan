"use client";
import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import {
  BEERS,
  getAvailabilityLabel,
  getAvailabilityColor,
  WHATSAPP_NUMBER,
} from "@/lib/data";
import BottleCounter from "@/components/BottleCounter";

export default function BeerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { lang, t } = useLang();

  const beer = BEERS.find((b) => b.id === id);
  if (!beer) notFound();

  const availLabel = getAvailabilityLabel(beer.availability, lang);
  const availColor = getAvailabilityColor(beer.availability);

  const waMessage = encodeURIComponent(
    lang === "es"
      ? `Hola! Me interesa el ${beer.fullName}. ¿Está disponible?`
      : `Hi! I'm interested in ${beer.fullName}. Is it available?`
  );
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

  const canOrder = ["available", "last-bottles"].includes(beer.availability);

  const otherBeers = BEERS.filter((b) => b.id !== beer.id).slice(0, 3);

  return (
    <div className="route-page min-h-screen bg-[#080A0E]">
      <div className="route-pad py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Back */}
          <Link
            href="/cervezas"
            className="inline-flex items-center gap-2 text-[#F2E3C6]/50 hover:text-[#D9A320] transition-colors mb-12 text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={16} />
            {lang === "es" ? "Volver al catálogo" : "Back to catalog"}
          </Link>

          {/* Main content */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start mb-28">
            {/* Visual */}
            <div className={`bg-gradient-to-br ${beer.gradient} aspect-square flex items-center justify-center relative overflow-hidden border border-[#F2E3C6]/10 shadow-[0_30px_100px_rgba(0,0,0,0.52)] rounded-lg`}>
              <div className="absolute inset-0 opacity-25">
                <div className="absolute top-10 right-10 w-44 h-44 rounded-full bg-white/20 blur-3xl" />
                <div className="absolute bottom-10 left-10 w-36 h-36 rounded-full bg-black/30 blur-3xl" />
              </div>
              <div className="text-[180px] animate-float drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]">{beer.emoji}</div>

              {/* Badges */}
              <div className="absolute top-6 left-6">
                <span className="badge-batch text-xs px-3.5 py-2 font-bold uppercase tracking-wider rounded">
                  Batch #{beer.batchCode}
                </span>
              </div>

              {beer.availability === "never-again" && (
                <div className="absolute top-6 right-6">
                  <span className="badge-limited text-xs px-3.5 py-2 font-bold uppercase tracking-wider rounded bg-[#A92118] text-white">
                    R.I.P
                  </span>
                </div>
              )}
              {beer.availability === "last-bottles" && (
                <div className="absolute top-6 right-6">
                  <span className="badge-limited text-xs px-3.5 py-2 font-bold uppercase tracking-wider rounded animate-pulse">
                    {lang === "es" ? "¡Últimas!" : "Last ones!"}
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="lg:pl-4">
              <span className="section-label mb-4 inline-block">{beer.style}</span>
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-display text-[#F7E9C9] mb-4 leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {beer.fullName}
              </h1>

              <p className="text-[#F2E3C6]/70 text-xl italic leading-relaxed mb-8">{t(beer.tagline)}</p>

              {/* Story */}
              <div className="mb-8 p-6 bg-[#11151A] border border-[#F2E3C6]/10 shadow-md leading-relaxed">
                <p className="text-[#F2E3C6]/80 text-base">{t(beer.story)}</p>
              </div>

              {/* Technical specs grid */}
              <div className="grid grid-cols-3 gap-4 mb-8 p-5 bg-[#0D1015] border border-[#F2E3C6]/07 rounded">
                {[
                  { label: "ABV", value: `${beer.abv}%` },
                  { label: "IBU", value: `${beer.ibu}` },
                  { label: lang === "es" ? "Tamaño" : "Size", value: beer.size },
                ].map((spec) => (
                  <div key={spec.label} className="text-center">
                    <p className="text-xs text-[#F2E3C6]/40 uppercase tracking-wider mb-1">{spec.label}</p>
                    <p
                      className="font-display text-2xl text-[#D9A320]"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Sensory Profile */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-widest text-[#F2E3C6]/40 font-bold mb-3">
                  {lang === "es" ? "Perfil sensorial" : "Sensory profile"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {beer.sensoryProfile.map((s) => (
                    <span
                      key={s}
                      className="px-3.5 py-1.5 border border-[#D9A320]/30 bg-[#D9A320]/05 text-[#D9A320]/90 text-sm font-semibold rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Flavor notes */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-widest text-[#F2E3C6]/40 font-bold mb-3">
                  {lang === "es" ? "Notas de sabor" : "Flavor notes"}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {beer.flavorNotes[lang].map((note) => (
                    <div key={note} className="flex items-center gap-2.5 text-sm text-[#F2E3C6]/85 bg-[#11151A]/40 px-3 py-2 border border-[#F2E3C6]/05">
                      <span className="w-2 h-2 rounded-full bg-[#D9A320] shrink-0" />
                      {note}
                    </div>
                  ))}
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-8 p-5 bg-[#0D1015] border border-[#F2E3C6]/05">
                <p className="text-xs uppercase tracking-widest text-[#F2E3C6]/40 font-bold mb-3">
                  {lang === "es" ? "Ingredientes de Lote" : "Batch Ingredients"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {beer.ingredients[lang].map((ing) => (
                    <span
                      key={ing}
                      className="text-xs px-3 py-1.5 bg-[#3F6B2A]/10 border border-[#3F6B2A]/20 text-[#4fa036] font-semibold"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Availability + counter */}
              <div className="mb-8 border-t border-[#F2E3C6]/08 pt-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-widest text-[#F2E3C6]/40 font-bold">
                    {lang === "es" ? "Disponibilidad" : "Availability"}
                  </span>
                  <span className={`font-bold text-sm tracking-wide ${availColor}`}>{availLabel}</span>
                </div>
                {beer.availability === "last-bottles" && (
                  <BottleCounter
                    remaining={beer.remainingBottles}
                    total={beer.totalBottles}
                    lang={lang}
                    large
                  />
                )}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                {canOrder ? (
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-4 hover:bg-[#20c05b] transition-all uppercase tracking-[0.14em] text-sm shadow-[0_4px_20px_rgba(37,211,102,0.2)]"
                  >
                    <MessageCircle size={20} />
                    {lang === "es" ? `Pedir por WhatsApp · $${beer.price}` : `Order on WhatsApp · $${beer.price}`}
                  </a>
                ) : (
                  <div className="flex-1 flex items-center justify-center gap-2 bg-[#0D1015] text-[#F2E3C6]/30 font-bold py-4 border border-[#F2E3C6]/10 cursor-not-allowed text-sm uppercase tracking-[0.14em]">
                    {availLabel}
                  </div>
                )}
                <Link
                  href="/cervezas"
                  className="flex items-center justify-center gap-2 border border-[#D9A320]/30 text-[#D9A320] px-8 py-4 hover:bg-[#D9A320]/08 transition-all text-sm font-bold uppercase tracking-[0.14em]"
                >
                  {lang === "es" ? "Ver catálogo" : "View catalog"}
                </Link>
              </div>
            </div>
          </div>

          {/* Other beers */}
          <div className="border-t border-[#F2E3C6]/10 pt-20">
            <h2
              className="text-3xl md:text-4xl font-display text-[#F7E9C9] mb-10"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {lang === "es" ? "También te puede gustar" : "You might also like"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {otherBeers.map((b) => (
                <Link key={b.id} href={`/cervezas/${b.id}`}>
                  <div className="bg-[#11151A] border border-[#F2E3C6]/10 p-5 flex items-center gap-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D9A320]/40 group">
                    <div className={`w-16 h-16 bg-gradient-to-br ${b.gradient} flex items-center justify-center text-3xl shrink-0 shadow-lg rounded transition-transform duration-300 group-hover:scale-105`}>
                      {b.emoji}
                    </div>
                    <div>
                      <p className="font-bold text-[#F2E3C6] text-base group-hover:text-[#D9A320] transition-colors">{b.fullName}</p>
                      <p className="text-xs text-[#F2E3C6]/40 uppercase tracking-wider font-semibold mt-0.5">{b.style}</p>
                      <p className="text-sm font-bold text-[#D9A320] mt-1.5">${b.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
