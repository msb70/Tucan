"use client";

import Image from "next/image";
import { Beer, StoreItem } from "@/lib/data";

const visualImages: Record<string, string> = {
  "beer-honey": "/beer_glass.png",
  "beer-electric": "/craft_beer.png",
  "beer-banana": "/brew_process.png",
  "pack-tropical": "/beer_bottles.png",
  "pack-discovery": "/beer_bottles.png",
  "merch-glass": "/beer_glass.png",
  "merch-shirt": "/logo.jpg",
  "merch-stickers": "/logo.jpg",
};

const itemPalettes: Record<string, { from: string; to: string; accent: string; flavor: string }> = {
  "beer-honey": { from: "#f2b91b", to: "#f77818", accent: "#fff1b8", flavor: "Honey Session Ale" },
  "beer-electric": { from: "#ffd335", to: "#e12a7a", accent: "#fff7a8", flavor: "Passion Fruit Sour" },
  "beer-banana": { from: "#af6419", to: "#f4c548", accent: "#ffe5a3", flavor: "Banana Brown Ale" },
  "pack-tropical": { from: "#7f2cc5", to: "#f0ad20", accent: "#ffd7f5", flavor: "Tropical Sour Pack" },
  "pack-discovery": { from: "#275f2b", to: "#e86a17", accent: "#f8e6b3", flavor: "Discovery Pack" },
  "merch-glass": { from: "#26313d", to: "#8796a5", accent: "#e7f0f5", flavor: "Pint Glass" },
  "merch-shirt": { from: "#101510", to: "#3f6b2a", accent: "#f2e3c6", flavor: "Cotton Tee" },
  "merch-stickers": { from: "#a92118", to: "#d9a320", accent: "#fff0c6", flavor: "Vinyl Pack" },
};

function LabelLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className="relative h-8 w-8 overflow-hidden rounded-full border border-[#080A0E]/25 bg-[#080A0E]">
        <Image src="/logo.jpg" alt="Tucán Brewery logo" fill sizes="32px" className="object-cover" />
      </span>
      {!compact && (
        <span className="text-left font-display text-lg leading-none tracking-[0.08em] text-[#080A0E]">
          Tucán<br />Brewery
        </span>
      )}
    </div>
  );
}

export function BeerCanVisual({ beer }: { beer: Beer }) {
  return (
    <div className="relative h-full min-h-64 overflow-hidden bg-[#101419]">
      <div className={`absolute inset-0 bg-gradient-to-br ${beer.gradient} opacity-55`} />
      <Image
        src={beer.id === "besito-electrico" ? "/craft_beer.png" : beer.id === "mora-colada" ? "/beer_bottles.png" : "/beer_glass.png"}
        alt={beer.fullName}
        fill
        sizes="(min-width: 1024px) 25vw, 100vw"
        className="object-cover opacity-38 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E] via-transparent to-white/10" />
      <div className="absolute inset-x-7 bottom-7 top-7 flex items-center justify-center">
        <div className="relative flex h-full max-h-[260px] w-[46%] min-w-32 flex-col justify-between overflow-hidden rounded-[1.8rem] border border-white/40 bg-[#F2E3C6] px-4 py-5 text-center shadow-[0_28px_80px_rgba(0,0,0,0.58)]">
          <div className="absolute inset-x-0 top-0 h-10" style={{ background: beer.accentColor }} />
          <div className="relative mt-6">
            <LabelLogo />
          </div>
          <div className="relative">
            <p className="font-display text-3xl leading-none tracking-[0.03em] text-[#080A0E]">{beer.name}</p>
            <p className="mt-2 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-[#080A0E]/58">{beer.style}</p>
          </div>
          <div className="relative grid grid-cols-2 gap-2 border-t border-[#080A0E]/15 pt-3 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#080A0E]/70">
            <span>ABV {beer.abv}%</span>
            <span>#{beer.batchCode}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StoreProductVisual({ item }: { item: StoreItem }) {
  const palette = itemPalettes[item.image] ?? itemPalettes["beer-honey"];
  const image = visualImages[item.image] ?? "/beer_glass.png";
  const isShirt = item.image === "merch-shirt";
  const isSticker = item.image === "merch-stickers";
  const isPack = item.type === "pack";

  return (
    <div className="relative h-64 overflow-hidden bg-[#101419]">
      <Image src={image} alt={item.name.es} fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover opacity-45" />
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${palette.from}ee, ${palette.to}cc)` }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.38),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.06),rgba(8,10,14,0.72))]" />

      {isShirt ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-44 w-44 rounded-[2.8rem_2.8rem_1.4rem_1.4rem] border border-white/25 bg-[#11151A] shadow-2xl">
            <div className="absolute -left-10 top-10 h-24 w-16 rotate-12 rounded-xl bg-[#11151A] border border-white/15" />
            <div className="absolute -right-10 top-10 h-24 w-16 -rotate-12 rounded-xl bg-[#11151A] border border-white/15" />
            <div className="absolute left-1/2 top-4 h-9 w-20 -translate-x-1/2 rounded-b-full border-b border-white/25 bg-[#080A0E]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <span className="relative h-14 w-14 overflow-hidden rounded-full">
                <Image src="/logo.jpg" alt="Tucán Brewery logo" fill sizes="56px" className="object-cover" />
              </span>
              <p className="font-display text-2xl text-[#D9A320]">Tucán</p>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
            {["#11151A", "#F2E3C6", "#3F6B2A", "#A92118"].map((color) => (
              <span key={color} className="h-5 w-5 rounded-full border border-white/40" style={{ background: color }} />
            ))}
          </div>
        </div>
      ) : isSticker ? (
        <div className="absolute inset-0 flex items-center justify-center gap-4">
          {["rotate-[-10deg]", "rotate-[8deg]", "rotate-[-4deg]"].map((rotation, idx) => (
            <div key={rotation} className={`relative h-24 w-24 rounded-2xl border-4 border-white bg-[#F2E3C6] shadow-2xl ${rotation}`}>
              <Image src="/logo.jpg" alt="Sticker Tucán Brewery" fill sizes="96px" className="object-cover p-2" />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded bg-[#080A0E] px-2 py-1 text-[0.56rem] font-bold uppercase tracking-[0.16em] text-[#D9A320]">
                {idx === 0 ? "Logo" : idx === 1 ? "Batch" : "Tropical"}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center gap-4">
          {Array.from({ length: isPack ? 3 : 1 }).map((_, idx) => (
            <div
              key={idx}
              className="relative flex h-48 w-24 flex-col justify-between overflow-hidden rounded-[1.35rem] border border-white/40 bg-[#F2E3C6] px-3 py-4 text-center shadow-2xl"
              style={{ transform: `translateY(${idx % 2 ? 10 : 0}px) rotate(${(idx - 1) * 4}deg)` }}
            >
              <div className="absolute inset-x-0 top-0 h-8" style={{ background: idx === 1 ? palette.to : palette.from }} />
              <div className="relative mt-5"><LabelLogo compact /></div>
              <div className="relative">
                <p className="font-display text-xl leading-none text-[#080A0E]">{item.name.es.split(" ")[0]}</p>
                <p className="mt-2 text-[0.5rem] font-bold uppercase tracking-[0.16em] text-[#080A0E]/60">{palette.flavor}</p>
              </div>
              <p className="relative text-[0.52rem] font-black uppercase tracking-[0.12em]" style={{ color: palette.from }}>
                Nature&apos;s Beer
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
