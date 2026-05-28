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
    <div className="route-page route-pad bg-[#080A0E] pb-28">
      <div className="mx-auto max-w-[1500px]">
        {/* Header */}
        <div className="mb-14 border-b border-[#F2E3C6]/10 bg-[#11151A] px-5 py-12 text-center sm:px-8">
          <p className="text-[#D9A320] text-xs uppercase tracking-widest mb-4">Tucán Brewery</p>
          <h1
            className="text-6xl sm:text-7xl font-display text-[#F2E3C6]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {lang === "es" ? "Catálogo de cervezas" : "Beer Catalog"}
          </h1>
          <p className="text-[#F2E3C6]/50 mt-4 max-w-lg mx-auto">
            {lang === "es"
              ? "Cada cerveza es un micro-lote artesanal. Limitado. Experimental. Algunos desaparecerán para siempre."
              : "Each beer is a craft micro-batch. Limited. Experimental. Some will disappear forever."}
          </p>

          {/* Active batch banner */}
          <div className="inline-flex items-center gap-2 mt-6 bg-[#A92118]/16 border border-[#A92118]/40 px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-[#A92118] animate-pulse" />
            <span className="text-sm text-[#F2E3C6]/80">
              {lang === "es"
                ? "Lote activo: Lichi Rosada 008 — 32 botellas disponibles"
                : "Active batch: Lichi Rosada 008 — 32 bottles available"}
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`border px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] transition-all ${
                filter === f.value
                  ? "border-[#D9A320] bg-[#D9A320] text-[#0D0F14]"
                  : "border-[#D9A320]/20 text-[#F2E3C6]/60 hover:border-[#D9A320]/50 hover:text-[#D9A320]"
              }`}
            >
              {lang === "es" ? f.es : f.en}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((beer) => (
            <BeerCard key={beer.id} beer={beer} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🍺</p>
            <p className="text-[#F2E3C6]/40">
              {lang === "es" ? "No hay cervezas en esta categoría." : "No beers in this category."}
            </p>
          </div>
        )}

        {/* Cervezas extintas */}
        <div className="mt-20">
          <div className="divider-gold mb-10" />
          <div className="flex items-center gap-3 justify-center mb-8">
            <Skull size={24} className="text-[#5A3418]" />
            <h2
              className="text-4xl font-display text-[#5A3418]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {lang === "es" ? "Cervezas extintas" : "Extinct Beers"}
            </h2>
            <Skull size={24} className="text-[#5A3418]" />
          </div>
          <p className="text-center text-[#F2E3C6]/30 mb-8 text-sm">
            {lang === "es"
              ? "Estas recetas ya no existen. Solo quedan en la memoria y en el lore de la marca."
              : "These recipes no longer exist. They only live in memory and brand lore."}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            {EXTINCT_BEERS.map((beer) => (
              <div
                key={beer.id}
                className={`bg-[#0D1015] border border-[#F2E3C6]/07 p-5 opacity-50 flex items-center gap-4 w-full sm:w-auto`}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${beer.gradient} flex items-center justify-center text-2xl`}>
                  {beer.emoji}
                </div>
                <div>
                  <p className="font-semibold text-[#F2E3C6]/70 line-through text-sm">{beer.fullName}</p>
                  <p className="text-xs text-[#F2E3C6]/30">{beer.style}</p>
                  <p className="text-xs text-[#A92118] mt-1">
                    {lang === "es" ? "Nunca volverá — R.I.P" : "Never again — R.I.P"}
                  </p>
                  {beer.tagline && (
                    <p className="text-xs text-[#F2E3C6]/20 italic mt-0.5">
                      {beer.tagline[lang]}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
