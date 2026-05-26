"use client";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { STORE_ITEMS, WHATSAPP_NUMBER, type StoreItem } from "@/lib/data";
import { MessageCircle, Package, ShoppingBag, Shirt } from "lucide-react";

type StoreTab = "all" | "beer" | "pack" | "merch";

const itemGradients: Record<string, string> = {
  "beer-honey": "from-yellow-600 via-amber-400 to-yellow-300",
  "beer-electric": "from-yellow-400 via-orange-400 to-pink-500",
  "beer-banana": "from-amber-700 via-yellow-600 to-amber-400",
  "pack-tropical": "from-purple-700 via-orange-500 to-yellow-400",
  "pack-discovery": "from-[#3F6B2A] via-[#D9A320] to-[#E86A17]",
  "merch-glass": "from-slate-700 via-slate-500 to-slate-400",
  "merch-shirt": "from-[#1D3515] via-[#3F6B2A] to-[#D9A320]",
  "merch-stickers": "from-[#A92118] via-[#E86A17] to-[#D9A320]",
};

const itemEmojis: Record<string, string> = {
  "beer-honey": "🍯",
  "beer-electric": "⚡",
  "beer-banana": "🍌",
  "pack-tropical": "🌴",
  "pack-discovery": "🎁",
  "merch-glass": "🍺",
  "merch-shirt": "👕",
  "merch-stickers": "🎨",
};

function StoreCard({ item }: { item: StoreItem }) {
  const { lang, t } = useLang();
  const gradient = itemGradients[item.image] || "from-[#D9A320] to-[#E86A17]";
  const emoji = itemEmojis[item.image] || "🍺";

  const waMessage = encodeURIComponent(
    lang === "es"
      ? `Hola! Me interesa: ${t(item.name)}. ¿Cómo puedo pedirlo?`
      : `Hi! I'm interested in: ${t(item.name)}. How can I order it?`
  );
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

  return (
    <div className="glass-card rounded-2xl overflow-hidden card-glow flex flex-col">
      {/* Visual */}
      <div className={`relative bg-gradient-to-br ${gradient} h-44 flex items-center justify-center overflow-hidden`}>
        {item.badge && (
          <div className="absolute top-3 right-3">
            <span className="badge-limited text-xs px-2.5 py-1 rounded-full">
              {t(item.badge)}
            </span>
          </div>
        )}
        <div className="text-7xl">{emoji}</div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#1A1E26] to-transparent" />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3
            className="font-display text-xl text-[#F2E3C6]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {t(item.name)}
          </h3>
          <div className="text-right">
            {item.originalPrice && (
              <p className="text-xs text-[#F2E3C6]/30 line-through">${item.originalPrice}</p>
            )}
            <p className="text-[#D9A320] font-bold text-lg">${item.price}</p>
          </div>
        </div>

        <p className="text-[#F2E3C6]/60 text-sm leading-relaxed flex-1 mb-4">
          {t(item.description)}
        </p>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-xl hover:bg-[#20c05b] transition-all text-sm"
        >
          <MessageCircle size={16} />
          {lang === "es" ? "Pedir por WhatsApp" : "Order on WhatsApp"}
        </a>
      </div>
    </div>
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

  const filtered = tab === "all" ? STORE_ITEMS : STORE_ITEMS.filter((i) => i.type === tab);

  const waInquiry = encodeURIComponent(
    lang === "es"
      ? "Hola! Quiero saber sobre los productos de Tucán Brewery."
      : "Hi! I'd like to know about Tucán Brewery products."
  );

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-[#D9A320] text-xs uppercase tracking-widest mb-4">Tucán Brewery</p>
          <h1
            className="text-6xl sm:text-8xl font-display text-[#F2E3C6]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {lang === "es" ? "Tienda" : "Shop"}
          </h1>
          <p className="text-[#F2E3C6]/50 mt-3 max-w-md mx-auto">
            {lang === "es"
              ? "Cervezas, packs y merch. Los pedidos se hacen por WhatsApp — rápido, directo y humano."
              : "Beers, packs and merch. Orders placed via WhatsApp — quick, direct and human."}
          </p>
        </div>

        {/* WhatsApp CTA banner */}
        <div className="mb-10 p-5 rounded-2xl bg-[#1D2415] border border-[#25D366]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center">
              <MessageCircle size={20} className="text-[#25D366]" />
            </div>
            <p className="text-[#F2E3C6]/70 text-sm">
              {lang === "es"
                ? "¿Tienes preguntas? Escríbenos directo por WhatsApp."
                : "Have questions? Message us directly on WhatsApp."}
            </p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waInquiry}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white font-bold px-6 py-2.5 rounded-full text-sm hover:bg-[#20c05b] transition-colors whitespace-nowrap"
          >
            {lang === "es" ? "Chatear ahora" : "Chat now"}
          </a>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((t) => (
            <button
              key={t.value}
              onClick={() => setTab(t.value)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                tab === t.value
                  ? "bg-[#D9A320] text-[#0D0F14]"
                  : "border border-[#D9A320]/20 text-[#F2E3C6]/60 hover:border-[#D9A320]/50"
              }`}
            >
              {typeof t.icon === "string" ? t.icon : t.icon}
              {lang === "es" ? t.es : t.en}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filtered.map((item) => (
            <StoreCard key={item.id} item={item} />
          ))}
        </div>

        {/* Pre-sale banner */}
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 text-center bg-gradient-to-br from-[#1D3515] to-[#0D0F14] border border-[#D9A320]/20">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#D9A320]/5 blur-3xl" />
          <span className="badge-limited text-sm px-4 py-1.5 rounded-full inline-block mb-6">
            {lang === "es" ? "Preventa exclusiva" : "Exclusive pre-sale"}
          </span>
          <h2
            className="text-4xl sm:text-5xl font-display text-[#F2E3C6] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {lang === "es"
              ? "Reserva el próximo lote"
              : "Reserve the next batch"}
          </h2>
          <p className="text-[#F2E3C6]/60 mb-8 max-w-md mx-auto">
            {lang === "es"
              ? "Suscríbete para recibir acceso prioritario a los próximos lotes antes de que se agoten."
              : "Subscribe to get priority access to upcoming batches before they sell out."}
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lang === "es" ? "Quiero estar en la lista de preventa de Tucán Brewery" : "I want to be on the Tucán Brewery pre-sale list")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D9A320] text-[#0D0F14] font-bold px-8 py-4 rounded-full hover:bg-[#E86A17] transition-all"
          >
            <MessageCircle size={18} />
            {lang === "es" ? "Quiero acceso prioritario" : "I want priority access"}
          </a>
        </div>
      </div>
    </div>
  );
}
