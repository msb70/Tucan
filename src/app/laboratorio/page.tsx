"use client";

import { useState } from "react";
import Image from "next/image";
import { Atom, Beaker, BookOpen, FlaskConical, Microscope, Sparkles } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { LAB_ENTRIES, type LabEntry } from "@/lib/data";

type LabTab = "fermenting" | "testing" | "experiment" | "journal" | "all";

const statusIcons: Record<LabEntry["status"], React.ReactNode> = {
  fermenting: <FlaskConical size={15} />,
  testing: <Beaker size={15} />,
  experiment: <Atom size={15} />,
  journal: <BookOpen size={15} />,
};

const statusColors: Record<LabEntry["status"], string> = {
  fermenting: "text-green-300 border-green-300/35 bg-green-300/10",
  testing: "text-yellow-300 border-yellow-300/35 bg-yellow-300/10",
  experiment: "text-sky-300 border-sky-300/35 bg-sky-300/10",
  journal: "text-[#D9A320] border-[#D9A320]/35 bg-[#D9A320]/10",
};

const statusLabels: Record<LabEntry["status"], { es: string; en: string }> = {
  fermenting: { es: "En fermentación", en: "Fermenting" },
  testing: { es: "En pruebas", en: "Testing" },
  experiment: { es: "Experimento", en: "Experiment" },
  journal: { es: "Bitácora", en: "Journal" },
};

const projectShapes = [
  "polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)",
  "polygon(0 0, 88% 0, 100% 12%, 100% 100%, 0 100%)",
  "polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 10%)",
  "polygon(0 0, 100% 0, 100% 100%, 12% 100%, 0 88%)",
];

function ProjectIllustration({ entry, index }: { entry: LabEntry; index: number }) {
  const hues = ["#d9a320", "#3f6b2a", "#e86a17", "#a92118", "#4aa6c9"];
  const primary = hues[index % hues.length];
  const secondary = hues[(index + 2) % hues.length];

  return (
    <div className="relative h-48 overflow-hidden bg-[#0D1115]">
      <div className="absolute inset-0 opacity-70" style={{ background: `radial-gradient(circle at 30% 20%, ${primary}55, transparent 35%), linear-gradient(135deg, ${primary}22, ${secondary}33)` }} />
      <div className="absolute left-8 top-8 h-28 w-20 rounded-b-3xl rounded-t-lg border-2 border-[#F2E3C6]/28 bg-[#F2E3C6]/8 backdrop-blur-md">
        <div className="absolute bottom-0 left-0 right-0 rounded-b-3xl" style={{ height: `${44 + index * 8}%`, background: `linear-gradient(180deg, ${primary}, ${secondary})` }} />
        <div className="absolute -top-7 left-1/2 h-8 w-8 -translate-x-1/2 rounded-t-lg border-2 border-b-0 border-[#F2E3C6]/28" />
      </div>
      <div className="absolute bottom-8 right-8 h-24 w-24 rounded-full border border-[#F2E3C6]/18 bg-[#080A0E]/62 shadow-2xl backdrop-blur-xl">
        <div className="absolute inset-5 rounded-full" style={{ background: `linear-gradient(135deg, ${secondary}, ${primary})` }} />
        <span className="absolute inset-0 flex items-center justify-center text-3xl">{entry.emoji}</span>
      </div>
      <div className="absolute left-36 top-10 h-1 w-28 rotate-12 bg-[#F2E3C6]/20" />
      <div className="absolute left-36 top-20 h-1 w-20 -rotate-6 bg-[#F2E3C6]/20" />
      <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[#F2E3C6]/36">
        <span>Batch R&D</span>
        <span>{entry.date}</span>
      </div>
    </div>
  );
}

export default function LaboratorioPage() {
  const { lang, t } = useLang();
  const [activeTab, setActiveTab] = useState<LabTab>("all");

  const tabs: { value: LabTab; es: string; en: string }[] = [
    { value: "all", es: "Todo", en: "All" },
    { value: "fermenting", es: "Fermentación", en: "Fermenting" },
    { value: "testing", es: "Pruebas", en: "Testing" },
    { value: "experiment", es: "Experimentos", en: "Experiments" },
    { value: "journal", es: "Bitácora", en: "Journal" },
  ];

  const filtered = activeTab === "all"
    ? LAB_ENTRIES
    : LAB_ENTRIES.filter((entry) => entry.status === activeTab);

  return (
    <div className="route-page bg-[#080A0E]">
      <section className="route-pad relative overflow-hidden pb-20 pt-12">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#11151A_0%,#080A0E_84%)]" />
        <div className="relative mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="lg:pl-8">
            <span className="section-label">Tucán R&D</span>
            <h1 className="font-display text-6xl leading-none text-[#F7E9C9] sm:text-7xl lg:text-8xl">
              {lang === "es" ? "El Laboratorio" : "The Laboratory"}
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#F2E3C6]/70">
              {lang === "es"
                ? "Un laboratorio cervecero pequeño, ordenado y obsesivo: recetas en prueba, ingredientes tropicales y notas reales de fermentación."
                : "A small, organized and obsessive beer lab: test recipes, tropical ingredients and real fermentation notes."}
            </p>
          </div>

          <div className="relative min-h-[560px] overflow-hidden border border-[#F2E3C6]/10 shadow-[0_30px_100px_rgba(0,0,0,0.52)]">
            <Image
              src="/brew_process.png"
              alt="Laboratorio pequeño de cerveza ordenado"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,14,0.78),rgba(8,10,14,0.2)),linear-gradient(180deg,rgba(8,10,14,0.05),rgba(8,10,14,0.86))]" />
            <div className="absolute bottom-8 left-8 max-w-lg border-l-2 border-[#D9A320] bg-[#080A0E]/72 p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-3 text-[#D9A320]">
                <Microscope size={24} />
                <span className="text-xs font-bold uppercase tracking-[0.24em]">
                  {lang === "es" ? "Micro-lab cervecero" : "Beer micro-lab"}
                </span>
              </div>
              <p className="text-base leading-8 text-[#F2E3C6]/76">
                {lang === "es"
                  ? "Cada proyecto se documenta desde la idea hasta la prueba final: temperatura, ingredientes, aroma, riesgo y resultado."
                  : "Every project is documented from idea to final test: temperature, ingredients, aroma, risk and result."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="route-pad py-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
            <div>
              <span className="section-label">{lang === "es" ? "Proyectos" : "Projects"}</span>
              <h2 className="font-display text-5xl leading-none text-[#F7E9C9] sm:text-6xl">
                {lang === "es" ? "Pipeline experimental" : "Experimental pipeline"}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`flex items-center gap-2 border px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] ${
                    activeTab === tab.value
                      ? "border-[#D9A320] bg-[#D9A320] text-[#080A0E]"
                      : "border-[#F2E3C6]/14 bg-[#11151A] text-[#F2E3C6]/62 hover:border-[#D9A320] hover:text-[#D9A320]"
                  }`}
                >
                  {tab.value !== "all" && statusIcons[tab.value as LabEntry["status"]]}
                  {lang === "es" ? tab.es : tab.en}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((entry, index) => (
              <article
                key={entry.id}
                className="group overflow-hidden border border-[#F2E3C6]/10 bg-[#11151A] shadow-[0_18px_70px_rgba(0,0,0,0.34)]"
                style={{ clipPath: projectShapes[index % projectShapes.length] }}
              >
                <ProjectIllustration entry={entry} index={index} />
                <div className="p-7">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-3xl leading-none text-[#F7E9C9] group-hover:text-[#D9A320]">
                        {t(entry.title)}
                      </h3>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#F2E3C6]/38">
                        {entry.date}
                      </p>
                    </div>
                    <span className={`flex shrink-0 items-center gap-1.5 border px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] ${statusColors[entry.status]}`}>
                      {statusIcons[entry.status]}
                      {statusLabels[entry.status][lang]}
                    </span>
                  </div>
                  <p className="min-h-24 text-base leading-8 text-[#F2E3C6]/68">
                    {t(entry.description)}
                  </p>
                  {entry.ingredients && (
                    <div className="mt-7 border-t border-[#F2E3C6]/10 pt-5">
                      <p className="mb-3 text-[0.66rem] font-bold uppercase tracking-[0.22em] text-[#D9A320]">
                        {lang === "es" ? "Ingredientes clave" : "Key ingredients"}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {entry.ingredients.map((ingredient) => (
                          <span key={ingredient} className="border border-[#3F6B2A]/40 bg-[#1D3515]/45 px-3 py-1 text-xs font-medium text-[#F2E3C6]/72">
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <Sparkles className="mx-auto mb-4 text-[#D9A320]" size={36} />
              <p className="text-lg text-[#F2E3C6]/48">
                {lang === "es" ? "No hay experimentos en esta categoría." : "No experiments in this category."}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
