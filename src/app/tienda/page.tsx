"use client";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { STORE_ITEMS, WHATSAPP_NUMBER, type StoreItem } from "@/lib/data";
import { MessageCircle, Package, ShoppingBag, Shirt } from "lucide-react";
import { motion } from "framer-motion";

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
    <div className="pt-32 pb-44 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#D9A320] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Tucán Brewery</p>
          <h1
            className="text-6xl sm:text-8xl font-display text-[#F2E3C6] tracking-wide"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {lang === "es" ? "Tienda" : "Shop"}
          </h1>
          <div className="divider-gold max-w-sm mx-auto mt-6 mb-6" />
          <p className="text-[#F2E3C6]/60 mt-3 max-w-lg mx-auto text-lg font-light leading-relaxed">
            {lang === "es"
              ? "Cervezas, packs y merch. Los pedidos se hacen por WhatsApp — rápido, directo y humano."
              : "Beers, packs and merch. Orders placed via WhatsApp — quick, direct and human."}
          </p>
        </motion.div>

        {/* WhatsApp CTA banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#1D2415]/80 border border-[#25D366]/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#25D366]/15 flex items-center justify-center animate-pulse">
              <MessageCircle size={24} className="text-[#25D366]" />
            </div>
            <div>
              <p className="text-[#F2E3C6] font-semibold text-lg">
                {lang === "es"
                  ? "¿Tienes preguntas sobre los lotes?"
                  : "Have questions about the batches?"}
              </p>
              <p className="text-[#F2E3C6]/60 text-sm font-light mt-0.5">
                {lang === "es"
                  ? "Escríbenos directo y coordinamos tu entrega en minutos."
                  : "Message us directly and we will coordinate your delivery in minutes."}
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waInquiry}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white font-bold px-8 py-3.5 rounded-full text-xs hover:bg-[#20c05b] hover:shadow-xl hover:shadow-[#25D366]/15 transition-all whitespace-nowrap uppercase tracking-wider"
          >
            {lang === "es" ? "Chatear ahora" : "Chat now"}
          </a>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2.5 mb-12 justify-center"
        >
          {tabs.map((t) => (
            <button
              key={t.value}
              onClick={() => setTab(t.value)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase transition-all ${
                tab === t.value
                  ? "bg-[#D9A320] text-[#0D0F14] shadow-lg shadow-[#D9A320]/20"
                  : "border border-[#D9A320]/25 text-[#F2E3C6]/65 hover:border-[#D9A320] hover:text-[#D9A320] backdrop-blur-sm"
              }`}
            >
              {typeof t.icon === "string" ? t.icon : t.icon}
              {lang === "es" ? t.es : t.en}
            </button>
          ))}
        </motion.div>

        {/* Products grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24"
        >
          {filtered.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-full"
            >
              <StoreCard item={item} />
            </motion.div>
          ))}
        </motion.div>

        {/* Pre-sale banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center bg-gradient-to-br from-[#1D3515]/60 to-[#0D0F14] border border-[#D9A320]/20 shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#D9A320]/5 blur-3xl opacity-60" />
          <span className="badge-limited text-xs px-5 py-2 rounded-full inline-block mb-6 shadow-md shadow-black/10">
            {lang === "es" ? "Preventa exclusiva" : "Exclusive pre-sale"}
          </span>
          <h2
            className="text-5xl sm:text-6xl font-display text-[#F2E3C6] mb-4 tracking-wide"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {lang === "es"
              ? "Reserva el próximo lote"
              : "Reserve the next batch"}
          </h2>
          <p className="text-[#F2E3C6]/75 mb-10 max-w-md mx-auto text-lg font-light leading-relaxed">
            {lang === "es"
              ? "Suscríbete para recibir acceso prioritario a los próximos lotes antes de que se agoten."
              : "Subscribe to get priority access to upcoming batches before they sell out."}
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lang === "es" ? "Quiero estar en la lista de preventa de Tucán Brewery" : "I want to be on the Tucán Brewery pre-sale list")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D9A320] text-[#0D0F14] font-bold px-9 py-5 rounded-full hover:bg-[#E86A17] hover:shadow-2xl hover:shadow-[#D9A320]/25 transition-all text-xs uppercase tracking-wider"
          >
            <MessageCircle size={18} />
            {lang === "es" ? "Quiero acceso prioritario" : "I want priority access"}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
