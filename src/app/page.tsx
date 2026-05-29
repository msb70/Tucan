"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Beaker,
  Beer,
  BottleWine,
  ChevronDown,
  Flame,
  Leaf,
  Sparkles,
} from "lucide-react";
import BeerCard from "@/components/BeerCard";
import { useLang } from "@/context/LanguageContext";
import { BEERS } from "@/lib/data";

const featuredBeers = BEERS.filter((b) =>
  ["chuzo-honey", "besito-electrico", "mora-colada", "banana-bread-ale"].includes(b.id)
);

function AnimatedCounter({ to, duration = 1500 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      let start = 0;
      const step = to / (duration / 16);
      const interval = window.setInterval(() => {
        start += step;
        if (start >= to) {
          setCount(to);
          window.clearInterval(interval);
          return;
        }
        setCount(Math.floor(start));
      }, 16);
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function HomePage() {
  const { lang, t } = useLang();

  const heroText = {
    es: {
      eyebrow: "Panama · Micro-lotes tropicales",
      h1a: "Tucan",
      h1b: "Brewery",
      sub: "Cervezas artesanales de fruta, calor y obsesión. Batches pequeños, sabores vivos y drops que no se repiten.",
      cta1: "Ver cervezas",
      cta2: "Comprar ahora",
      scroll: "Descubrir",
    },
    en: {
      eyebrow: "Panama · Tropical micro-batches",
      h1a: "Tucan",
      h1b: "Brewery",
      sub: "Craft beers made of fruit, heat and obsession. Small batches, living flavors and drops that do not repeat.",
      cta1: "See beers",
      cta2: "Shop now",
      scroll: "Discover",
    },
  };

  const manifestoText = {
    es: [
      "No hacemos cerveza para llenar estantes.",
      "Creamos sabores que merecen existir aunque sea una sola vez.",
      "Cada lote nace de una idea rara, una fruta tropical o una mezcla que necesitábamos probar.",
    ],
    en: [
      "We do not brew beer to fill shelves.",
      "We create flavors that deserve to exist, even if only once.",
      "Every batch starts with a strange idea, a tropical fruit or a mix we needed to taste.",
    ],
  };

  const stats = [
    { value: 8, label: { es: "Batches producidos", en: "Batches produced" }, suffix: "" },
    { value: 320, label: { es: "Botellas en total", en: "Total bottles" }, suffix: "+" },
    { value: 3, label: { es: "Cervezas activas", en: "Active beers" }, suffix: "" },
    { value: 100, label: { es: "Artesanal", en: "Craft" }, suffix: "%" },
  ];

  const values = [
    {
      icon: Flame,
      title: { es: "Intensidad", en: "Intensity" },
      desc: { es: "Sabores tropicales con carácter, acidez y final memorable.", en: "Tropical flavors with character, acidity and a memorable finish." },
    },
    {
      icon: BottleWine,
      title: { es: "Micro-lotes", en: "Micro-batches" },
      desc: { es: "Pocas botellas, control manual y recetas que evolucionan.", en: "Few bottles, manual control and recipes that evolve." },
    },
    {
      icon: Leaf,
      title: { es: "Panamá", en: "Panama" },
      desc: { es: "Fruta, humedad, selva y atardecer dentro de cada batch.", en: "Fruit, humidity, jungle and sunset inside every batch." },
    },
    {
      icon: Beaker,
      title: { es: "Laboratorio", en: "Lab" },
      desc: { es: "Cerveza experimental sin perder balance ni oficio.", en: "Experimental beer without losing balance or craft." },
    },
  ];

  const copy = heroText[lang];

  return (
    <div className="overflow-hidden bg-[#FAF8F5] text-[#1D1F22] selection:bg-[#E91E8C] selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] overflow-hidden bg-[#FAF8F5] flex items-center">
        {/* Ambient abstract glows representing exotic tropical flavors */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] right-[5%] w-[450px] h-[450px] rounded-full bg-[#E91E8C]/08 blur-[100px] animate-pulse-glow" style={{ animationDuration: "8s" }} />
          <div className="absolute bottom-[15%] left-[10%] w-[380px] h-[380px] rounded-full bg-[#F5A623]/10 blur-[80px] animate-pulse-glow" style={{ animationDuration: "6s" }} />
        </div>
        
        <div className="relative z-10 w-full mx-auto max-w-[1500px] px-6 sm:px-12 lg:px-24 py-32 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            {/* Sophisticated light badge */}
            <div className="mb-8 inline-flex items-center gap-3 border border-[#1E3D14]/15 bg-white/60 px-5.5 py-2.5 text-xs font-bold uppercase tracking-[0.24em] text-[#1E3D14] backdrop-blur-xl shadow-sm">
              <Sparkles size={14} className="text-[#E91E8C]" />
              {copy.eyebrow}
            </div>

            <h1 className="font-display text-[4.65rem] leading-[0.82] text-[#1D1F22] tracking-tight sm:text-[8rem] lg:text-[9rem] xl:text-[10rem]">
              <span className="block">{copy.h1a}</span>
              <span className="block text-[#E91E8C] tracking-wide">{copy.h1b}</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#1D1F22]/70 sm:text-2xl">
              {copy.sub}
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/cervezas"
                className="group inline-flex items-center justify-center gap-3 bg-[#E91E8C] px-8 py-4.5 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_12px_40px_rgba(233,30,140,0.25)] hover:bg-[#c81373]"
              >
                {copy.cta1}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/tienda"
                className="inline-flex items-center justify-center gap-3 border border-[#1D1F22]/15 bg-white/40 px-8 py-4.5 text-sm font-bold uppercase tracking-[0.18em] text-[#1D1F22] backdrop-blur-xl hover:border-[#E91E8C] hover:text-[#E91E8C]"
              >
                {copy.cta2}
              </Link>
            </div>

            <div className="mt-14 inline-flex max-w-full items-center gap-3 border border-[#E91E8C]/15 bg-white/70 px-6 py-4.5 text-sm text-[#1D1F22]/80 backdrop-blur-xl shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E91E8C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E91E8C]"></span>
              </span>
              <span className="font-semibold tracking-wide">
                {lang === "es"
                  ? "Lote activo: Lichi Rosada 008 · solo 32 botellas"
                  : "Active batch: Lichi Rosada 008 · only 32 bottles"}
              </span>
            </div>
          </div>

          {/* Premium Bottle Showcase */}
          <div className="relative aspect-square w-full max-w-[500px] lg:max-w-full mx-auto flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E91E8C]/05 via-transparent to-[#F5A623]/08 rounded-full blur-3xl" />
            <div className="relative w-4/5 h-4/5 animate-float">
              <Image
                src="/besito_electrico.png"
                alt="Tucán Brewery Premium Bottle Showcase"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 80vw"
                className="object-contain drop-shadow-[0_35px_50px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 border-y border-[#1D1F22]/08 bg-white/85 backdrop-blur-md">
        <div className="mx-auto max-w-[1500px] px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
            {stats.map((s, i) => (
              <div
                key={s.label.es}
                className={`flex items-baseline gap-2.5 py-4 ${
                  i > 0 ? "md:pl-8 md:border-l border-[#1D1F22]/08" : ""
                }`}
              >
                <span className="font-display text-4xl text-[#E91E8C] sm:text-5xl">
                  <AnimatedCounter to={s.value} />
                  {s.suffix}
                </span>
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#1D1F22]/45">
                  {t(s.label)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative px-6 py-24 sm:px-12 md:py-32 lg:px-24 bg-[#FAF8F5]">
        <div className="relative mx-auto max-w-[1500px] grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="relative aspect-[4/5] min-h-[500px] overflow-hidden border border-[#1D1F22]/08 rounded shadow-[0_20px_50px_rgba(29,31,34,0.06)] bg-white p-4">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/manifesto_bg.png"
                alt="Proceso artesanal de cerveza tropical"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="lg:pl-10">
            <span className="section-label text-[#E91E8C]">{lang === "es" ? "Filosofía" : "Philosophy"}</span>
            <div className="space-y-8">
              {manifestoText[lang].map((line, i) => (
                <p
                  key={line}
                  className={
                    i === 0
                      ? "font-display text-5xl leading-[0.95] text-[#1D1F22] sm:text-6xl lg:text-7xl"
                      : i === 1
                        ? "font-display text-4xl leading-tight text-[#E91E8C] sm:text-5xl lg:text-6xl"
                        : "max-w-2xl text-lg leading-relaxed text-[#1D1F22]/60"
                  }
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* "Cervezas con presencia" Section */}
      <section className="relative px-6 py-24 sm:px-12 md:py-32 lg:px-24 bg-[#FAF8F5] border-t border-[#1D1F22]/05">
        <div className="relative mx-auto max-w-[1500px]">
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <span className="section-label text-[#E91E8C]">{lang === "es" ? "Drops actuales" : "Current drops"}</span>
              <h2 className="font-display max-w-4xl text-6xl leading-none text-[#1D1F22] sm:text-8xl">
                {lang === "es" ? "Cervezas con presencia." : "Beers with presence."}
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-[#1D1F22]/55">
              {lang === "es"
                ? "Una selección de micro-lotes con identidad propia: miel, maracuyá, mora, coco y recetas que se beben como una escena."
                : "A selection of micro-batches with their own identity: honey, passion fruit, blackberry, coconut and recipes that drink like a scene."}
            </p>
          </div>

          {/* Grid utilizing the custom full-bleed bottle cards on clean light backgrounds */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredBeers.map((beer) => (
              <div key={beer.id} className="light-sand-card overflow-hidden rounded-lg">
                <BeerCard beer={beer} />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/cervezas"
              className="group inline-flex items-center gap-3 border border-[#1D1F22]/15 bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#1D1F22] shadow-sm hover:border-[#E91E8C] hover:text-[#E91E8C]"
            >
              {lang === "es" ? "Ver catálogo completo" : "View full catalog"}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="relative px-6 py-24 sm:px-12 md:py-32 lg:px-24 bg-[#FAF8F5] border-t border-[#1D1F22]/05">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <span className="section-label text-[#E91E8C]">{lang === "es" ? "Nuestra historia" : "Our story"}</span>
              <h2 className="font-display text-6xl leading-none text-[#1D1F22] sm:text-8xl">
                {lang === "es" ? "Nació de una tesis. Creció como obsesión." : "Born from a thesis. Built as an obsession."}
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-[#1D1F22]/60">
                {lang === "es"
                  ? "Todo empezó en Bélgica, con una investigación universitaria y la idea de convertir frutas panameñas en cerveza. Mafe y Lisandro transformaron esa curiosidad en una marca de batches pequeños, tropicales y difíciles de olvidar."
                  : "It started in Belgium, with university research and the idea of turning Panamanian fruit into beer. Mafe and Lisandro turned that curiosity into a brand of small, tropical and hard-to-forget batches."}
              </p>
              <Link
                href="/historia"
                className="mt-9 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#E91E8C] hover:text-[#c81373]"
              >
                {lang === "es" ? "Leer historia completa" : "Read full story"}
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-5 gap-4">
              <div className="relative col-span-3 min-h-[500px] overflow-hidden border border-[#1D1F22]/08 rounded shadow-md">
                <Image src="/brew_process.png" alt="Proceso de brewing artesanal" fill sizes="(min-width: 1024px) 36vw, 60vw" className="object-cover" />
              </div>
              <div className="relative col-span-2 mt-16 min-h-[400px] overflow-hidden border border-[#1D1F22]/08 rounded shadow-md">
                <Image src="/mora_colada.png" alt="Cerveza artesanal servida" fill sizes="(min-width: 1024px) 24vw, 40vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essence Section */}
      <section className="border-y border-[#1D1F22]/08 bg-[#FAF8F5] px-6 py-24 sm:px-12 md:py-32 lg:px-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-14 max-w-3xl">
            <span className="section-label text-[#E91E8C]">{lang === "es" ? "Esencia" : "Essence"}</span>
            <h2 className="font-display text-6xl leading-none text-[#1D1F22] sm:text-8xl">
              {lang === "es" ? "Lo que mueve cada lote." : "What moves every batch."}
            </h2>
          </div>

          <div className="grid grid-cols-1 border border-[#1D1F22]/08 md:grid-cols-2 bg-white">
            {values.map((value, i) => (
              <div
                key={value.title.es}
                className={`p-10 transition-colors hover:bg-[#FAF8F5] ${
                  i % 2 === 0 ? "md:border-r border-[#1D1F22]/08" : ""
                } ${
                  i < 2 ? "border-b border-[#1D1F22]/08" : ""
                }`}
              >
                <p className="font-display text-[5.5rem] leading-none text-[#E91E8C]/10 mb-5 -ml-1">
                  0{i + 1}
                </p>
                <h3 className="font-display text-3xl text-[#1D1F22] -mt-4">{t(value.title)}</h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#1D1F22]/50">{t(value.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative px-6 py-24 sm:px-12 md:py-36 lg:px-24">
        <div className="absolute inset-0 bg-[#FAF8F5]" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <Image
            src="/chuzo_honey.png"
            alt="Copa de cerveza artesanal cinematográfica"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="relative mx-auto max-w-[1500px]">
          <div className="max-w-2xl">
            <Beer size={34} className="mb-7 text-[#E91E8C]" />
            <h2 className="font-display text-6xl leading-none text-[#1D1F22] sm:text-8xl">
              {lang === "es" ? "Entérate antes del próximo drop." : "Know before the next drop."}
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-[#1D1F22]/60">
              {lang === "es"
                ? "Preventas, sabores secretos y eventos. Solo lo important, directo al correo."
                : "Pre-sales, secret flavors and events. Only what matters, straight to your inbox."}
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder={lang === "es" ? "tu@correo.com" : "your@email.com"}
                className="min-h-14 flex-1 border border-[#1D1F22]/15 bg-white px-5 text-sm text-[#1D1F22] outline-none placeholder:text-[#1D1F22]/30 focus:border-[#E91E8C] rounded"
              />
              <button
                type="submit"
                className="min-h-14 bg-[#E91E8C] px-8 text-xs font-bold uppercase tracking-[0.22em] text-white hover:bg-[#c81373] shadow-sm rounded"
              >
                {lang === "es" ? "Unirme" : "Join"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
