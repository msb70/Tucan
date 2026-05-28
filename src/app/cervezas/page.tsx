"use client";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import BeerCard from "@/components/BeerCard";
import { BEERS, EXTINCT_BEERS, type Availability } from "@/lib/data";
import { Skull } from "lucide-react";

type FilterType = "all" | Availability;

export default function CervezasPage() {
  const { lang } = useLang();
  const [filter, setFilter] = useState<FilterType>("all");

  const filters: { value: FilterType; es: string; en: string }[] = [
    { value: "all", es: "Todas", en: "All" },
    { value: "available", es: "Disponibles", en: "Available" },
    { value: "last-bottles", es: "Últimas botellas", en: "Last bottles" },
    { value: "sold-out", es: "Agotadas", en: "Sold out" },
    { value: "never-again", es: "Extintas", en: "Extinct" },
  ];

  const filtered = filter === "all" ? BEERS : BEERS.filter((b) => b.availability === filter);

  return (
    <div className="route-page min-h-screen bg-[#080A0E]">
      {/* Header */}
      <section className="route-pad border-b border-[#F2E3C6]/10 bg-[#11151A] py-16 md:py-20">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="section-label">Tucán Brewery</span>
            <h1 className="font-display text-6xl leading-none text-[#F7E9C9] sm:text-7xl lg:text-8xl">
              {lang === "es" ? "Catálogo" : "Catalog"}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#F2E3C6]/66">
              {lang === "es"
                ? "Cada cerveza es un micro-lote artesanal. Edición limitada, experimental y con un carácter único que desafía lo ordinario."
                : "Each beer is a craft micro-batch. Limited edition, experimental and with a unique character that challenges the ordinary."}
            </p>
          </div>
          <div className="inline-flex items-center gap-3 bg-[#A92118]/10 border border-[#A92118]/30 px-6 py-4 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A92118] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#A92118]"></span>
            </span>
            <span className="text-sm font-semibold tracking-wide text-[#F2E3C6]/90">
              {lang === "es"
                ? "Lote activo: Lichi Rosada 008"
                : "Active batch: Lichi Rosada 008"}
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="route-pad py-16 md:py-24">
        <div className="mx-auto max-w-[1500px]">
          {/* Filters */}
          <div className="mb-16 flex flex-wrap justify-center gap-3 border-b border-[#F2E3C6]/05 pb-10">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`border px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                  filter === f.value
                    ? "border-[#D9A320] bg-[#D9A320] text-[#080A0E] shadow-[0_4px_20px_rgba(217,163,32,0.25)]"
                    : "border-[#F2E3C6]/10 bg-[#0D1015] text-[#F2E3C6]/60 hover:border-[#D9A320]/40 hover:text-[#D9A320]"
                }`}
              >
                {lang === "es" ? f.es : f.en}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((beer) => (
              <BeerCard key={beer.id} beer={beer} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 border border-dashed border-[#F2E3C6]/10 bg-[#0D1015]/40 rounded-lg max-w-lg mx-auto">
              <p className="text-5xl mb-4">🍺</p>
              <p className="text-lg text-[#F2E3C6]/50">
                {lang === "es" ? "No hay cervezas en esta categoría." : "No beers in this category."}
              </p>
            </div>
          )}

          {/* Cervezas extintas */}
          <div className="mt-32 border-t border-[#F2E3C6]/10 pt-20">
            <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
              <div className="flex items-center gap-3 mb-4">
                <Skull size={28} className="text-[#8C6539]" />
                <h2 className="text-4xl md:text-5xl font-display text-[#8C6539]">
                  {lang === "es" ? "Cervezas extintas" : "Extinct Beers"}
                </h2>
                <Skull size={28} className="text-[#8C6539]" />
              </div>
              <p className="text-[#F2E3C6]/40 text-base leading-relaxed">
                {lang === "es"
                  ? "Estas recetas ya no existen. Solo quedan en la memoria y en el lore de la marca."
                  : "These recipes no longer exist. They only live in memory and brand lore."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {EXTINCT_BEERS.map((beer) => (
                <div
                  key={beer.id}
                  className="bg-[#0D1015] border border-[#F2E3C6]/07 p-6 transition-all duration-300 hover:border-[#8C6539]/30 group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${beer.gradient} flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-105 shadow-lg`}>
                      {beer.emoji}
                    </div>
                    <div>
                      <p className="font-semibold text-lg text-[#F2E3C6]/70 line-through tracking-tight group-hover:text-[#F2E3C6]/90 transition-colors">{beer.fullName}</p>
                      <p className="text-xs text-[#F2E3C6]/30 font-medium uppercase tracking-wider">{beer.style}</p>
                      <p className="text-xs font-bold text-[#A92118]/80 mt-1 uppercase tracking-widest">
                        {lang === "es" ? "Nunca volverá — R.I.P" : "Never again — R.I.P"}
                      </p>
                    </div>
                  </div>
                  {beer.tagline && (
                    <p className="text-xs text-[#F2E3C6]/30 italic mt-4 border-t border-[#F2E3C6]/05 pt-3 leading-relaxed">
                      “{beer.tagline[lang]}”
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
