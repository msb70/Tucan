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
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back */}
        <Link
          href="/cervezas"
          className="inline-flex items-center gap-2 text-[#F2E3C6]/40 hover:text-[#D9A320] transition-colors mb-8 text-sm"
        >
          <ArrowLeft size={16} />
          {lang === "es" ? "Volver al catálogo" : "Back to catalog"}
        </Link>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Visual */}
          <div className={`rounded-3xl bg-gradient-to-br ${beer.gradient} aspect-square flex items-center justify-center relative overflow-hidden`}>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-black/20 blur-2xl" />
            </div>
            <div className="text-[160px] animate-float drop-shadow-2xl">{beer.emoji}</div>

            {/* Badges */}
            <div className="absolute top-6 left-6">
              <span className="badge-batch text-sm px-3 py-1.5 rounded-full font-bold">
                Batch #{beer.batchCode}
              </span>
            </div>

            {beer.availability === "never-again" && (
              <div className="absolute top-6 right-6">
                <span className="badge-limited text-sm px-3 py-1.5 rounded-full">
                  R.I.P
                </span>
              </div>
            )}
            {beer.availability === "last-bottles" && (
              <div className="absolute top-6 right-6">
                <span className="badge-limited text-sm px-3 py-1.5 rounded-full animate-pulse">
                  {lang === "es" ? "¡Últimas!" : "Last ones!"}
                </span>
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <p className="text-[#D9A320] text-xs uppercase tracking-widest mb-2">{beer.style}</p>
            <h1
              className="text-5xl sm:text-6xl font-display text-[#F2E3C6] mb-2"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {beer.fullName}
            </h1>

            <p className="text-[#F2E3C6]/60 text-lg italic mb-6">{t(beer.tagline)}</p>

            {/* Story */}
            <div className="mb-6 p-5 rounded-xl bg-[#171A20] border-l-4 border-[#D9A320]">
              <p className="text-[#F2E3C6]/80 leading-relaxed">{t(beer.story)}</p>
            </div>

            {/* Sensory */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-[#F2E3C6]/30 mb-3">
                {lang === "es" ? "Perfil sensorial" : "Sensory profile"}
              </p>
              <div className="flex flex-wrap gap-2">
                {beer.sensoryProfile.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full border border-[#D9A320]/30 text-[#D9A320]/80 text-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Flavor notes */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-[#F2E3C6]/30 mb-3">
                {lang === "es" ? "Notas de sabor" : "Flavor notes"}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {beer.flavorNotes[lang].map((note) => (
                  <div key={note} className="flex items-center gap-2 text-sm text-[#F2E3C6]/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9A320]" />
                    {note}
                  </div>
                ))}
              </div>
            </div>

            {/* Tech specs */}
            <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-[#171A20]">
              {[
                { label: "ABV", value: `${beer.abv}%` },
                { label: "IBU", value: `${beer.ibu}` },
                { label: lang === "es" ? "Tamaño" : "Size", value: beer.size },
              ].map((spec) => (
                <div key={spec.label} className="text-center">
                  <p className="text-xs text-[#F2E3C6]/30 uppercase tracking-wider">{spec.label}</p>
                  <p
                    className="font-display text-xl text-[#D9A320]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Availability + counter */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-widest text-[#F2E3C6]/30">
                  {lang === "es" ? "Disponibilidad" : "Availability"}
                </span>
                <span className={`font-semibold text-sm ${availColor}`}>{availLabel}</span>
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
            <div className="flex flex-col sm:flex-row gap-3">
              {canOrder ? (
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#20c05b] transition-all"
                >
                  <MessageCircle size={20} />
                  {lang === "es" ? `Pedir por WhatsApp · $${beer.price}` : `Order on WhatsApp · $${beer.price}`}
                </a>
              ) : (
                <div className="flex-1 flex items-center justify-center gap-2 bg-[#171A20] text-[#F2E3C6]/30 font-bold py-4 rounded-xl border border-[#F2E3C6]/10 cursor-not-allowed">
                  {availLabel}
                </div>
              )}
              <Link
                href="/cervezas"
                className="flex items-center justify-center gap-2 border border-[#D9A320]/30 text-[#D9A320] px-6 py-4 rounded-xl hover:bg-[#D9A320]/10 transition-all"
              >
                {lang === "es" ? "Ver más" : "See more"}
              </Link>
            </div>

            {/* Ingredients */}
            <div className="mt-6 p-4 rounded-xl bg-[#0D0F14]">
              <p className="text-xs uppercase tracking-widest text-[#F2E3C6]/30 mb-3">
                {lang === "es" ? "Ingredientes" : "Ingredients"}
              </p>
              <div className="flex flex-wrap gap-2">
                {beer.ingredients[lang].map((ing) => (
                  <span
                    key={ing}
                    className="text-xs px-2.5 py-1 rounded-full bg-[#1D3515] text-[#3F6B2A]"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other beers */}
        <div className="border-t border-[#D9A320]/15 pt-16">
          <h2
            className="text-4xl font-display text-[#F2E3C6] mb-8"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {lang === "es" ? "También te puede gustar" : "You might also like"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherBeers.map((b) => (
              <Link key={b.id} href={`/cervezas/${b.id}`}>
                <div className="glass-card rounded-2xl p-4 flex items-center gap-4 card-glow">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${b.gradient} flex items-center justify-center text-2xl shrink-0`}>
                    {b.emoji}
                  </div>
                  <div>
                    <p className="font-semibold text-[#F2E3C6] text-sm">{b.fullName}</p>
                    <p className="text-xs text-[#F2E3C6]/40">{b.style}</p>
                    <p className="text-xs text-[#D9A320] mt-1">${b.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
