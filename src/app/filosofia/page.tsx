"use client";
import { useLang } from "@/context/LanguageContext";

export default function FilosofiaPage() {
  const { lang } = useLang();

  const content = {
    es: {
      title: "Filosofía",
      vision: {
        label: "Visión",
        text: "Convertir la cerveza artesanal panameña en algo atrevido, tropical y memorable.",
      },
      mision: {
        label: "Misión",
        text: "Crear cervezas pequeñas, creativas y llenas de personalidad usando ingredientes inesperados y procesos artesanales.",
      },
      values: [
        { icon: "🎨", title: "Creatividad", desc: "No repetir lo mismo de siempre. Cada batch es una pregunta sin respuesta hasta que lo probamos." },
        { icon: "🤲", title: "Artesanal de verdad", desc: "Hecho en pequeños lotes, manualmente, con intención. No hay línea de producción." },
        { icon: "🌴", title: "Tropical", desc: "Inspirado en Panamá, sus frutas, su calor, sus noches y su espíritu único." },
        { icon: "🔬", title: "Experimental", desc: "Cada cerveza puede sorprender. A nosotros también nos sorprende a veces." },
        { icon: "💧", title: "Limitado", desc: "Los micro-lotes crean escasez real. No es marketing. Es nuestra forma de trabajar." },
        { icon: "❤️", title: "Con alma", desc: "Cada botella tiene una historia detrás. Queremos que la sientas cuando la tomas." },
      ],
    },
    en: {
      title: "Philosophy",
      vision: {
        label: "Vision",
        text: "Turn Panamanian craft beer into something bold, tropical and memorable.",
      },
      mision: {
        label: "Mission",
        text: "Create small, creative beers full of personality using unexpected ingredients and artisanal processes.",
      },
      values: [
        { icon: "🎨", title: "Creativity", desc: "Never repeat the same thing. Each batch is a question without an answer until we taste it." },
        { icon: "🤲", title: "Truly handcrafted", desc: "Made in small batches, by hand, with intention. No production line." },
        { icon: "🌴", title: "Tropical", desc: "Inspired by Panama, its fruits, its heat, its nights and its unique spirit." },
        { icon: "🔬", title: "Experimental", desc: "Every beer can surprise. Sometimes it surprises us too." },
        { icon: "💧", title: "Limited", desc: "Micro-batches create real scarcity. It's not marketing. It's how we work." },
        { icon: "❤️", title: "With soul", desc: "Every bottle has a story behind it. We want you to feel it when you drink it." },
      ],
    },
  };

  const copy = content[lang];

  return (
    <div className="pt-24 pb-28 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#D9A320] text-xs uppercase tracking-widest mb-4">Tucán Brewery</p>
          <h1
            className="text-7xl sm:text-9xl font-display text-[#F2E3C6]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {copy.title}
          </h1>
          <div className="divider-gold mt-8" />
        </div>

        {/* Vision + Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[copy.vision, copy.mision].map((item) => (
            <div key={item.label} className="glass-card rounded-2xl p-8 card-glow">
              <span
                className="text-xs font-semibold text-[#D9A320] uppercase tracking-widest"
              >
                {item.label}
              </span>
              <p
                className="text-2xl sm:text-3xl font-display text-[#F2E3C6] mt-3 leading-snug"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="text-center mb-10">
          <h2
            className="text-5xl font-display text-[#D9A320]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {lang === "es" ? "Valores" : "Values"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.values.map((v) => (
            <div key={v.title} className="glass-card rounded-2xl p-6 card-glow">
              <div className="text-4xl mb-4">{v.icon}</div>
              <h3
                className="font-display text-2xl text-[#D9A320] mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {v.title}
              </h3>
              <p className="text-[#F2E3C6]/60 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-20 text-center">
          <div className="divider-gold mb-10" />
          <blockquote
            className="text-3xl sm:text-5xl font-display text-shimmer italic"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {lang === "es"
              ? '"Tucán Brewery no es producción masiva. Es experimentación tropical embotellada."'
              : '"Tucán Brewery is not mass production. It\'s bottled tropical experimentation."'}
          </blockquote>
        </div>
      </div>
    </div>
  );
}
