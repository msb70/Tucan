"use client";
import Image from "next/image";
import Link from "next/link";
import { Beer, getAvailabilityLabel, getAvailabilityColor } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";
import BottleCounter from "./BottleCounter";

interface BeerCardProps {
  beer: Beer;
  featured?: boolean;
}

const cardImages: Record<string, string> = {
  "chuzo-honey": "/beer_glass.png",
  "besito-electrico": "/craft_beer.png",
  "mora-colada": "/beer_bottles.png",
  "banana-bread-ale": "/brew_process.png",
};

export default function BeerCard({ beer, featured = false }: BeerCardProps) {
  const { lang, t } = useLang();
  const availLabel = getAvailabilityLabel(beer.availability, lang);
  const availColor = getAvailabilityColor(beer.availability);
  const image = cardImages[beer.id] ?? "/beer_glass.png";

  return (
    <Link href={`/cervezas/${beer.id}`} className="block h-full">
      <div
        className={`card-glow glass-card h-full overflow-hidden rounded-lg cursor-pointer group ${
          featured ? "h-full" : ""
        }`}
      >
        <div className="relative h-64 overflow-hidden bg-[#11151A]">
          <Image
            src={image}
            alt={beer.fullName}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${beer.gradient} opacity-28 mix-blend-overlay`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-[#0D0F14]/14 to-transparent" />

          <div className="absolute top-3 left-3">
            <span className="badge-batch rounded px-2.5 py-1 text-xs font-bold">
              Batch #{beer.batchCode}
            </span>
          </div>

          {(beer.availability === "last-bottles" || beer.availability === "never-again") && (
            <div className="absolute top-3 right-3">
              <span className="badge-limited rounded px-2.5 py-1 text-xs">
                {beer.availability === "never-again"
                  ? lang === "es" ? "Extintas" : "Extinct"
                  : lang === "es" ? "¡Últimas!" : "Last ones!"}
              </span>
            </div>
          )}

          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D9A320]">
              {beer.style}
            </p>
          </div>
        </div>

        <div className="flex min-h-[280px] flex-col p-5">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3
                className="font-display text-3xl leading-none text-[#F2E3C6] transition-colors group-hover:text-[#D9A320]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {beer.fullName}
              </h3>
            </div>
            <p className="text-[#D9A320] font-bold text-lg">${beer.price}</p>
          </div>

          <p className="text-[#F2E3C6]/60 text-sm leading-relaxed mb-4 line-clamp-2">
            {t(beer.tagline)}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {beer.sensoryProfile.map((s) => (
              <span
                key={s}
                className="rounded border border-[#D9A320]/20 px-2.5 py-0.5 text-xs text-[#D9A320]/70"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center justify-between text-xs">
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

          {beer.availability === "last-bottles" && beer.remainingBottles > 0 && (
            <div className="mt-3">
              <BottleCounter remaining={beer.remainingBottles} total={beer.totalBottles} lang={lang} />
            </div>
          )}

          <div className="mt-4 pt-4 border-t border-[#D9A320]/10">
            <span className="text-xs font-semibold text-[#D9A320] transition-colors group-hover:text-[#E86A17] uppercase tracking-wider">
              {lang === "es" ? "Ver cerveza →" : "View beer →"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
