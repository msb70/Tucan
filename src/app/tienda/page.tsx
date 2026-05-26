"use client";

import { useState } from "react";
import { Check, MessageCircle, Package, Search, Shirt, ShoppingBag, Star, Truck } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { STORE_ITEMS, WHATSAPP_NUMBER, type StoreItem } from "@/lib/data";
import { StoreProductVisual } from "@/components/ProductVisual";

type StoreTab = "all" | "beer" | "pack" | "merch";

const reviews: Record<string, { rating: number; count: number; quote: { es: string; en: string } }> = {
  "chuzo-honey-single": { rating: 4.8, count: 37, quote: { es: "Suave, fresca y perfecta para repetir.", en: "Smooth, fresh and easy to repeat." } },
  "besito-single": { rating: 4.9, count: 29, quote: { es: "Ácida, tropical y con final eléctrico.", en: "Sour, tropical and electric finish." } },
  "banana-single": { rating: 4.7, count: 24, quote: { es: "Huele a pan de banana real.", en: "Smells like real banana bread." } },
  "tropical-sour-pack": { rating: 4.9, count: 42, quote: { es: "El pack más divertido para probar.", en: "The most fun tasting pack." } },
  "discovery-pack": { rating: 5.0, count: 51, quote: { es: "Ideal para conocer la marca completa.", en: "Ideal to discover the full brand." } },
  "vaso-pinta": { rating: 4.6, count: 18, quote: { es: "Pesado, bonito y se siente premium.", en: "Heavy, beautiful and premium." } },
  "camisa-tucan": { rating: 4.8, count: 33, quote: { es: "El logo se ve brutal en negro y verde.", en: "The logo looks great in black and green." } },
  "sticker-pack": { rating: 4.7, count: 21, quote: { es: "Buenos colores y resistente al agua.", en: "Great colors and water resistant." } },
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5 text-[#F5C542]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={14} className={index < Math.round(rating) ? "fill-current" : "opacity-35"} />
      ))}
    </div>
  );
}

function StoreCard({ item }: { item: StoreItem }) {
  const { lang, t } = useLang();
  const review = reviews[item.id] ?? reviews["chuzo-honey-single"];
  const waMessage = encodeURIComponent(
    lang === "es"
      ? `Hola! Me interesa: ${t(item.name)}. ¿Cómo puedo pedirlo?`
      : `Hi! I'm interested in: ${t(item.name)}. How can I order it?`
  );

  return (
    <article className="flex h-full flex-col overflow-hidden border border-[#F2E3C6]/10 bg-[#11151A] shadow-[0_18px_60px_rgba(0,0,0,0.32)] transition-transform hover:-translate-y-1 hover:border-[#D9A320]/45">
      <StoreProductVisual item={item} />
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl leading-tight text-[#F7E9C9] sm:text-3xl">
              {t(item.name)}
            </h3>
            <div className="mt-2 flex items-center gap-2">
              <Stars rating={review.rating} />
              <span className="text-xs font-semibold text-[#F2E3C6]/52">
                {review.rating.toFixed(1)} ({review.count})
              </span>
            </div>
          </div>
          <div className="text-right">
            {item.originalPrice && <p className="text-xs text-[#F2E3C6]/32 line-through">${item.originalPrice}</p>}
            <p className="text-2xl font-bold text-[#D9A320]">${item.price}</p>
          </div>
        </div>

        <p className="mb-4 line-clamp-3 text-sm leading-7 text-[#F2E3C6]/62">
          {t(item.description)}
        </p>

        {item.image === "merch-shirt" && (
          <div className="mb-4 flex items-center gap-2">
            {["#11151A", "#F2E3C6", "#3F6B2A", "#A92118"].map((color) => (
              <span key={color} className="h-5 w-5 rounded-full border border-[#F2E3C6]/35" style={{ background: color }} />
            ))}
            <span className="ml-2 text-xs text-[#F2E3C6]/48">{lang === "es" ? "4 colores" : "4 colors"}</span>
          </div>
        )}

        {item.image === "merch-stickers" && (
          <div className="mb-4 flex flex-wrap gap-2">
            {["Logo", "Batch 005", "Tropical", "Sour", "Lab"].map((label) => (
              <span key={label} className="border border-[#D9A320]/25 px-2.5 py-1 text-[0.64rem] font-bold uppercase tracking-[0.14em] text-[#D9A320]">
                {label}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto border-t border-[#F2E3C6]/10 pt-4">
          <blockquote className="mb-4 text-sm italic leading-6 text-[#F2E3C6]/55">
            “{review.quote[lang]}”
          </blockquote>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center justify-center gap-2 bg-[#25D366] px-4 text-sm font-bold text-white hover:bg-[#20c05b]"
          >
            <MessageCircle size={16} />
            {lang === "es" ? "Pedir por WhatsApp" : "Order on WhatsApp"}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function TiendaPage() {
  const { lang } = useLang();
  const [tab, setTab] = useState<StoreTab>("all");

  const tabs = [
    { value: "all" as const, icon: <ShoppingBag size={16} />, es: "Todo", en: "All" },
    { value: "beer" as const, icon: "🍺", es: "Cervezas", en: "Beers" },
    { value: "pack" as const, icon: <Package size={16} />, es: "Packs", en: "Packs" },
    { value: "merch" as const, icon: <Shirt size={16} />, es: "Merch", en: "Merch" },
  ];

  const filtered = tab === "all" ? STORE_ITEMS : STORE_ITEMS.filter((item) => item.type === tab);
  const waInquiry = encodeURIComponent(
    lang === "es"
      ? "Hola! Quiero saber sobre los productos de Tucán Brewery."
      : "Hi! I'd like to know about Tucán Brewery products."
  );

  return (
    <div className="route-page min-h-screen bg-[#080A0E]">
      <section className="route-pad border-b border-[#F2E3C6]/10 bg-[#11151A] py-12">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <span className="section-label">Tucán Marketplace</span>
            <h1 className="font-display text-6xl leading-none text-[#F7E9C9] sm:text-7xl">
              {lang === "es" ? "Tienda" : "Shop"}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#F2E3C6]/66">
              {lang === "es"
                ? "Cervezas, packs y merch con compra directa por WhatsApp. Formato rápido, ordenado y fácil de comparar."
                : "Beers, packs and merch with direct WhatsApp ordering. Fast, organized and easy to compare."}
            </p>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waInquiry}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] px-7 py-4 text-sm font-bold text-white hover:bg-[#20c05b]"
          >
            <MessageCircle size={18} />
            {lang === "es" ? "Chatear ahora" : "Chat now"}
          </a>
        </div>
      </section>

      <section className="route-pad py-10">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit border border-[#F2E3C6]/10 bg-[#11151A] p-5 lg:sticky lg:top-28">
            <div className="mb-6 flex items-center gap-3 border-b border-[#F2E3C6]/10 pb-5">
              <Search className="text-[#D9A320]" size={20} />
              <div>
                <p className="font-bold text-[#F7E9C9]">{lang === "es" ? "Filtrar productos" : "Filter products"}</p>
                <p className="text-xs text-[#F2E3C6]/42">{filtered.length} {lang === "es" ? "resultados" : "results"}</p>
              </div>
            </div>

            <div className="space-y-2">
              {tabs.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setTab(item.value)}
                  className={`flex w-full items-center justify-between border px-4 py-3 text-left text-sm font-semibold ${
                    tab === item.value
                      ? "border-[#D9A320] bg-[#D9A320] text-[#080A0E]"
                      : "border-[#F2E3C6]/10 bg-[#080A0E] text-[#F2E3C6]/68 hover:border-[#D9A320] hover:text-[#D9A320]"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {typeof item.icon === "string" ? item.icon : item.icon}
                    {lang === "es" ? item.es : item.en}
                  </span>
                  <span>{item.value === "all" ? STORE_ITEMS.length : STORE_ITEMS.filter((product) => product.type === item.value).length}</span>
                </button>
              ))}
            </div>

            <div className="mt-7 space-y-3 border-t border-[#F2E3C6]/10 pt-6">
              {[
                lang === "es" ? "Pedidos por WhatsApp" : "WhatsApp ordering",
                lang === "es" ? "Entrega coordinada" : "Coordinated delivery",
                lang === "es" ? "Micro-lotes limitados" : "Limited micro-batches",
              ].map((text) => (
                <div key={text} className="flex items-center gap-3 text-sm text-[#F2E3C6]/62">
                  <Check size={16} className="text-[#25D366]" />
                  {text}
                </div>
              ))}
              <div className="flex items-center gap-3 pt-2 text-sm text-[#F2E3C6]/62">
                <Truck size={16} className="text-[#D9A320]" />
                {lang === "es" ? "Coordinamos delivery" : "Delivery coordinated"}
              </div>
            </div>
          </aside>

          <main>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <h2 className="store-section-title font-display text-[#F7E9C9]">
                {tab === "all"
                  ? lang === "es" ? "Todos los productos" : "All products"
                  : tabs.find((item) => item.value === tab)?.[lang]}
              </h2>
              <div className="border border-[#F2E3C6]/10 bg-[#11151A] px-4 py-2 text-sm text-[#F2E3C6]/58">
                {lang === "es" ? "Orden: recomendados" : "Sort: recommended"}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((item) => (
                <StoreCard key={item.id} item={item} />
              ))}
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
