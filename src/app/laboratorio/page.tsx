"use client";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { LAB_ENTRIES, type LabEntry } from "@/lib/data";
import { FlaskConical, BookOpen, Beaker, Atom } from "lucide-react";
import { motion } from "framer-motion";

type LabTab = "fermenting" | "testing" | "experiment" | "journal" | "all";

const statusIcons: Record<LabEntry["status"], React.ReactNode> = {
  fermenting: <FlaskConical size={16} />,
  testing: <Beaker size={16} />,
  experiment: <Atom size={16} />,
  journal: <BookOpen size={16} />,
};

const statusColors: Record<LabEntry["status"], string> = {
  fermenting: "text-green-400 border-green-400/30 bg-green-400/10",
  testing: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
  experiment: "text-blue-400 border-blue-400/30 bg-blue-400/10",
  journal: "text-[#D9A320] border-[#D9A320]/30 bg-[#D9A320]/10",
};

const statusLabels: Record<LabEntry["status"], { es: string; en: string }> = {
  fermenting: { es: "En fermentación", en: "Fermenting" },
  testing: { es: "En pruebas", en: "Testing" },
  experiment: { es: "Experimento", en: "Experiment" },
  journal: { es: "Bitácora", en: "Journal" },
};

export default function LaboratorioPage() {
  const { lang, t } = useLang();
  const [activeTab, setActiveTab] = useState<LabTab>("all");

  const tabs: { value: LabTab; es: string; en: string }[] = [
    { value: "all", es: "Todo", en: "All" },
    { value: "fermenting", es: "En fermentación", en: "Fermenting" },
    { value: "testing", es: "En pruebas", en: "Testing" },
    { value: "experiment", es: "Experimentos", en: "Experiments" },
    { value: "journal", es: "Bitácora", en: "Journal" },
  ];

  const filtered = activeTab === "all"
    ? LAB_ENTRIES
    : LAB_ENTRIES.filter((e) => e.status === activeTab);

  return (
    <div className="pt-32 pb-44 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="text-[#D9A320] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Tucán Brewery</p>
          <h1
            className="text-6xl sm:text-8xl font-display text-[#F2E3C6] tracking-wide"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {lang === "es" ? "El Laboratorio" : "The Laboratory"}
          </h1>
          <div className="divider-gold max-w-sm mx-auto mt-6 mb-6" />
          <p className="text-[#F2E3C6]/60 mt-4 max-w-xl mx-auto text-lg font-light">
            {lang === "es"
              ? "Experimentos en proceso, ingredientes locos, recetas fallidas y entradas del diario del brewer."
              : "Experiments in progress, wild ingredients, failed recipes and brewer's diary entries."}
          </p>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-96 rounded-3xl overflow-hidden mb-24 border border-white/5 shadow-2xl group"
        >
          <img
            src="/beer_bottles.png"
            alt="Laboratory"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-[3s]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F14]/95 via-[#0D0F14]/75 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 sm:px-16">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 bg-[#A92118]/20 border border-[#A92118]/40 px-4.5 py-1.5 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-[#e74c3c] animate-pulse" />
                <span className="text-xs font-semibold text-[#D9A320] tracking-widest uppercase">
                  {lang === "es" ? "Experimento activo" : "Active experiment"}
                </span>
              </span>
              <p
                className="text-4xl sm:text-5xl font-display text-[#F2E3C6] leading-none mb-3"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {lang === "es" ? "Proyecto Piña Ghost 🍍🌶️" : "Piña Ghost Project 🍍🌶️"}
              </p>
              <p className="text-[#F2E3C6]/70 text-lg font-light leading-relaxed">
                {lang === "es"
                  ? "Piña + Ghost pepper. En fermentación activa desde Noviembre. El picante más tropical de Panamá."
                  : "Pineapple + Ghost pepper. Actively fermenting since November. The most tropical spice in Panama."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2.5 mb-12 justify-center"
        >
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase transition-all ${
                activeTab === tab.value
                  ? "bg-[#D9A320] text-[#0D0F14] shadow-lg shadow-[#D9A320]/20"
                  : "border border-[#D9A320]/25 text-[#F2E3C6]/65 hover:border-[#D9A320] hover:text-[#D9A320] backdrop-blur-sm"
              }`}
            >
              {tab.value !== "all" && statusIcons[tab.value as LabEntry["status"]]}
              {lang === "es" ? tab.es : tab.en}
            </button>
          ))}
        </motion.div>

        {/* Entries grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filtered.map((entry, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              key={entry.id}
              className="glass-card rounded-2xl p-8 card-glow border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl animate-float" style={{ animationDuration: '4s' }}>{entry.emoji}</div>
                    <div>
                      <h3
                        className="font-display text-2xl text-[#F2E3C6] tracking-wide"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {t(entry.title)}
                      </h3>
                      <p className="text-xs text-[#F2E3C6]/30 uppercase tracking-widest mt-0.5">{entry.date}</p>
                    </div>
                  </div>
                  <span
                    className={`flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-full border font-bold uppercase tracking-wider ${statusColors[entry.status]}`}
                  >
                    {statusIcons[entry.status]}
                    {statusLabels[entry.status][lang]}
                  </span>
                </div>

                <p className="text-[#F2E3C6]/75 text-base leading-relaxed mb-6 font-light">
                  {t(entry.description)}
                </p>
              </div>

              {entry.ingredients && (
                <div className="pt-4 border-t border-[#D9A320]/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#F2E3C6]/35 mb-3 font-semibold">
                    {lang === "es" ? "Ingredientes clave" : "Key ingredients"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {entry.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="text-xs px-3.5 py-1 rounded-full bg-[#1D3515]/50 text-[#D9A320] border border-[#3F6B2A]/30 font-medium"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🧪</p>
            <p className="text-[#F2E3C6]/40 text-lg">
              {lang === "es" ? "No hay experimentos en esta categoría." : "No experiments in this category."}
            </p>
          </div>
        )}

        {/* Coming soon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 p-10 sm:p-14 rounded-3xl bg-[#171A20] border border-dashed border-[#D9A320]/25 text-center relative overflow-hidden"
        >
          <p className="text-5xl mb-4 animate-float">📸</p>
          <h3
            className="text-4xl font-display text-[#D9A320] mb-4 tracking-wide"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {lang === "es" ? "Fotos del laboratorio próximamente" : "Lab photos coming soon"}
          </h3>
          <p className="text-[#F2E3C6]/60 text-base max-w-lg mx-auto font-light leading-relaxed">
            {lang === "es"
              ? "Estamos documentando activamente el proceso. Pronto verás las fotos reales de nuestro laboratorio artesanal y de fermentación en Panamá."
              : "We're actively documenting the process. Soon you'll see real photos of our craft and fermentation laboratory in Panama."}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
