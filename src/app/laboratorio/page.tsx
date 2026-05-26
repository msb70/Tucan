"use client";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { LAB_ENTRIES, type LabEntry } from "@/lib/data";
import { FlaskConical, BookOpen, Beaker, Atom } from "lucide-react";

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
    <div className="pt-24 pb-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#D9A320] text-xs uppercase tracking-widest mb-4">Tucán Brewery</p>
          <h1
            className="text-6xl sm:text-8xl font-display text-[#F2E3C6]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {lang === "es" ? "El Laboratorio" : "The Laboratory"}
          </h1>
          <p className="text-[#F2E3C6]/50 mt-4 max-w-lg mx-auto">
            {lang === "es"
              ? "Experimentos en proceso, ingredientes locos, recetas fallidas y entradas del diario del brewer."
              : "Experiments in progress, wild ingredients, failed recipes and brewer's diary entries."}
          </p>
        </div>

        {/* Hero image */}
        <div className="relative h-64 rounded-3xl overflow-hidden mb-16">
          <img
            src="https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=1200&q=80"
            alt="Laboratory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F14]/90 to-[#0D0F14]/50" />
          <div className="absolute inset-0 flex items-center px-10">
            <div>
              <p className="text-[#D9A320] font-semibold text-sm uppercase tracking-widest mb-2">
                {lang === "es" ? "Experimento activo" : "Active experiment"}
              </p>
              <p
                className="text-4xl font-display text-[#F2E3C6]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {lang === "es" ? "Proyecto Piña Ghost 🍍🌶️" : "Piña Ghost Project 🍍🌶️"}
              </p>
              <p className="text-[#F2E3C6]/50 mt-2">
                {lang === "es"
                  ? "Piña + Ghost pepper. En fermentación activa desde Noviembre."
                  : "Pineapple + Ghost pepper. Actively fermenting since November."}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.value
                  ? "bg-[#D9A320] text-[#0D0F14]"
                  : "border border-[#D9A320]/20 text-[#F2E3C6]/60 hover:border-[#D9A320]/50"
              }`}
            >
              {tab.value !== "all" && statusIcons[tab.value as LabEntry["status"]]}
              {lang === "es" ? tab.es : tab.en}
            </button>
          ))}
        </div>

        {/* Entries grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((entry) => (
            <div key={entry.id} className="glass-card rounded-2xl p-6 card-glow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{entry.emoji}</div>
                  <div>
                    <h3
                      className="font-display text-xl text-[#F2E3C6]"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {t(entry.title)}
                    </h3>
                    <p className="text-xs text-[#F2E3C6]/30">{entry.date}</p>
                  </div>
                </div>
                <span
                  className={`flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border font-medium ${statusColors[entry.status]}`}
                >
                  {statusIcons[entry.status]}
                  {statusLabels[entry.status][lang]}
                </span>
              </div>

              <p className="text-[#F2E3C6]/70 text-sm leading-relaxed mb-4">
                {t(entry.description)}
              </p>

              {entry.ingredients && (
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#F2E3C6]/30 mb-2">
                    {lang === "es" ? "Ingredientes clave" : "Key ingredients"}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {entry.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="text-xs px-2.5 py-0.5 rounded-full bg-[#1D3515] text-[#3F6B2A]"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Coming soon */}
        <div className="mt-16 p-8 rounded-3xl bg-[#171A20] border border-dashed border-[#D9A320]/20 text-center">
          <p className="text-5xl mb-4">📸</p>
          <h3
            className="text-3xl font-display text-[#D9A320] mb-3"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {lang === "es" ? "Fotos del laboratorio próximamente" : "Lab photos coming soon"}
          </h3>
          <p className="text-[#F2E3C6]/40 text-sm max-w-md mx-auto">
            {lang === "es"
              ? "Estamos documentando el proceso. Pronto verás las fotos reales del laboratorio artesanal de Tucán."
              : "We're documenting the process. Soon you'll see real photos of Tucán's craft laboratory."}
          </p>
        </div>
      </div>
    </div>
  );
}
