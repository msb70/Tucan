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
}export function BeerCanVisual({ beer }: { beer: Beer }) {
  // Map each beer to its stunning custom photographic or matching image
  const beerImages: Record<string, string> = {
    "mora-colada": "/mora_colada.png",
    "chuzo-honey": "/chuzo_honey.png",
    "besito-electrico": "/besito_electrico.png",
    "banana-bread-ale": "/brew_process.png",
    "mangonazo": "/beer_glass.png",
    "birramisu": "/manifesto_bg.png",
    "la-murciana": "/craft_beer.png",
    "lichi-rosada": "/beer_bottles.png",
  };

  const imgSrc = beerImages[beer.id] ?? "/beer_glass.png";

  return (
    <div className="relative h-full w-full min-h-64 overflow-hidden bg-[#0A0D10]">
      <Image
        src={imgSrc}
        alt={beer.fullName}
        fill
        sizes="(min-width: 1024px) 25vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Subtle overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E]/80 via-transparent to-transparent" />
    </div>
  );
}

export function StoreProductVisual({ item }: { item: StoreItem }) {
  // Map store items to their stunning photographic images
  const itemImages: Record<string, string> = {
    "beer-honey": "/chuzo_honey.png",
    "beer-electric": "/besito_electrico.png",
    "beer-banana": "/brew_process.png",
    "pack-tropical": "/beer_bottles.png",
    "pack-discovery": "/beer_bottles.png",
    "merch-glass": "/beer_glass.png",
  };

  const image = itemImages[item.image] ?? "/beer_glass.png";
  const isShirt = item.image === "merch-shirt";
  const isSticker = item.image === "merch-stickers";

  if (isShirt) {
    return (
      <div className="relative h-64 overflow-hidden bg-[#10151A]">
        <Image src="/logo.jpg" alt={item.name.es} fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#101510] to-[#3f6b2a] opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-48 w-48 transition-transform duration-500 hover:scale-105">
            <Image src="/logo.jpg" alt="Camisa Tucán Brewery" fill className="object-contain shadow-2xl rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  if (isSticker) {
    return (
      <div className="relative h-64 overflow-hidden bg-[#10151A]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#a92118] to-[#d9a320] opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center gap-4">
          {["rotate-[-10deg]", "rotate-[8deg]", "rotate-[-4deg]"].map((rotation, idx) => (
            <div key={rotation} className={`relative h-24 w-24 rounded-2xl border-4 border-white bg-[#F2E3C6] shadow-2xl ${rotation} transition-transform duration-300 hover:scale-110`}>
              <Image src="/logo.jpg" alt="Sticker Tucán Brewery" fill sizes="96px" className="object-cover p-2" />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded bg-[#080A0E] px-2.5 py-1 text-[0.56rem] font-bold uppercase tracking-[0.16em] text-[#D9A320] shadow-md">
                {idx === 0 ? "Logo" : idx === 1 ? "Batch" : "Tropical"}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // For beers, packs and glassware, show the gorgeous full-bleed photographic image
  return (
    <div className="relative h-64 overflow-hidden bg-[#0A0D10]">
      <Image
        src={image}
        alt={item.name.es}
        fill
        sizes="(min-width: 1024px) 25vw, 100vw"
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E]/80 via-transparent to-transparent" />
    </div>
  );
}
