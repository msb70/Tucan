"use client";
import Link from "next/link";
import { Beer, getAvailabilityLabel, getAvailabilityColor } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";
import BottleCounter from "./BottleCounter";

interface BeerCardProps {
  beer: Beer;
  featured?: boolean;
}

export default function BeerCard({ beer, featured = false }: BeerCardProps) {
  const { lang, t } = useLang();
  const availLabel = getAvailabilityLabel(beer.availability, lang);
  const availColor = getAvailabilityColor(beer.availability);

  return (
    <Link href={`/cervezas/${beer.id}`}>
      <div
        className={`card-glow glass-card rounded-2xl overflow-hidden cursor-pointer group ${
          featured ? "h-full" : ""
        }`}
      >
        {/* Beer visual header */}
        <div className={`relative bg-gradient-to-br ${beer.gradient} h-48 flex items-center justify-center overflow-hidden`}>
          {/* Decorative blobs */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/20 blur-xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-black/20 blur-xl" />
          </div>

          {/* Batch badge */}
          <div className="absolute top-3 left-3">
            <span className="badge-batch text-xs px-2.5 py-1 rounded-full font-bold">
              Batch #{beer.batchCode}
            </span>
          </div>

          {/* Limited badge */}
          {(beer.availability === "last-bottles" || beer.availability === "never-again") && (
            <div className="absolute top-3 right-3">
              <span className="badge-limited text-xs px-2.5 py-1 rounded-full">
                {beer.availability === "never-again"
                  ? lang === "es" ? "Extintas" : "Extinct"
                  : lang === "es" ? "¡Últimas!" : "Last ones!"}
              </span>
            </div>
          )}

          {/* Beer emoji / icon */}
          <div className="text-7xl animate-float drop-shadow-2xl">{beer.emoji}</div>

          {/* Foam effect at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#1A1E26] to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3
                className="font-display text-xl text-[#F2E3C6] group-hover:text-[#D9A320] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {beer.fullName}
              </h3>
              <p className="text-xs text-[#F2E3C6]/40 uppercase tracking-wider">{beer.style}</p>
            </div>
            <p className="text-[#D9A320] font-bold text-lg">${beer.price}</p>
          </div>

          <p className="text-[#F2E3C6]/60 text-sm leading-relaxed mb-4 line-clamp-2">
            {t(beer.tagline)}
          </p>

          {/* Sensory pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {beer.sensoryProfile.map((s) => (
              <span
                key={s}
                className="text-xs px-2.5 py-0.5 rounded-full border border-[#D9A320]/20 text-[#D9A320]/70"
              >
                {s}
              </span>
            ))}
          </div>

          {/* Stats row */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex gap-4">
              <span className="text-[#F2E3C6]/40">
                ABV <span className="text-[#F2E3C6]">{beer.abv}%</span>
              </span>
              <span className="text-[#F2E3C6]/40">
                IBU <span className="text-[#F2E3C6]">{beer.ibu}</span>
              </span>
            </div>
            <span className={`font-semibold ${availColor}`}>{availLabel}</span>
          </div>

          {/* Bottle counter for limited */}
          {beer.availability === "last-bottles" && beer.remainingBottles > 0 && (
            <div className="mt-3">
              <BottleCounter remaining={beer.remainingBottles} total={beer.totalBottles} lang={lang} />
            </div>
          )}

          {/* CTA */}
          <div className="mt-4 pt-4 border-t border-[#D9A320]/10">
            <span className="text-xs font-semibold text-[#D9A320] group-hover:text-[#E86A17] transition-colors uppercase tracking-wider">
              {lang === "es" ? "Ver cerveza →" : "View beer →"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
