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
    <div className="overflow-hidden bg-[#080A0E]">
      <section className="relative min-h-[100svh] overflow-hidden">
        <Image
          src="/beer_glass.png"
          alt="Cerveza artesanal tropical en la selva"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[52%_45%] scale-[1.05]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_42%,rgba(217,163,32,0.3),transparent_34%),linear-gradient(90deg,rgba(8,10,14,0.58)_0%,rgba(8,10,14,0.36)_46%,rgba(8,10,14,0.04)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#080A0E] via-[#080A0E]/72 to-transparent" />

        <div className="relative z-10 flex min-h-[100svh] w-full items-center pb-24 pl-6 pr-5 pt-32 sm:pl-12 sm:pr-8 lg:pl-24 lg:pr-10">
          <div className="max-w-3xl" style={{ marginLeft: "clamp(1.5rem, 6vw, 6.5rem)" }}>
            <div className="mb-8 inline-flex items-center gap-3 border border-[#D9A320]/40 bg-[#080A0E]/46 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#F5C542] backdrop-blur-xl">
              <Sparkles size={15} />
              {copy.eyebrow}
            </div>

            <h1 className="font-display text-[4.65rem] leading-[0.8] text-[#F7E9C9] drop-shadow-[0_18px_40px_rgba(0,0,0,0.65)] sm:text-[8rem] lg:text-[9rem] xl:text-[10rem]">
              <span className="block">{copy.h1a}</span>
              <span className="block text-[#D9A320]">{copy.h1b}</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#F2E3C6]/78 sm:text-2xl sm:leading-10">
              {copy.sub}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/cervezas"
                className="group inline-flex items-center justify-center gap-3 bg-[#D9A320] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#080A0E] shadow-[0_24px_70px_rgba(217,163,32,0.25)] hover:bg-[#F5C542]"
              >
                {copy.cta1}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/tienda"
                className="inline-flex items-center justify-center gap-3 border border-[#F2E3C6]/28 bg-[#080A0E]/36 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#F2E3C6] backdrop-blur-xl hover:border-[#D9A320] hover:text-[#D9A320]"
              >
                {copy.cta2}
              </Link>
            </div>

            <div className="mt-12 inline-flex max-w-full items-center gap-3 border border-[#A92118]/45 bg-[#080A0E]/58 px-5 py-4 text-sm text-[#F2E3C6]/82 backdrop-blur-xl">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#e74c3c] shadow-[0_0_22px_rgba(231,76,60,0.8)]" />
              <span>
                {lang === "es"
                  ? "Lote activo: Lichi Rosada 008 · solo 32 botellas"
                  : "Active batch: Lichi Rosada 008 · only 32 bottles"}
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[#F2E3C6]/45">
          <span className="text-[0.65rem] uppercase tracking-[0.32em]">{copy.scroll}</span>
          <ChevronDown size={20} />
        </div>
      </section>

      <section className="relative z-20 border-y border-[#D9A320]/18 bg-[#0D1015]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-wrap">
            {stats.map((s, i) => (
              <div
                key={s.label.es}
                className={`flex items-baseline gap-2.5 py-5 pr-8 ${
                  i > 0 ? "pl-8 border-l border-[#F2E3C6]/10" : ""
                }`}
              >
                <span className="font-display text-3xl text-[#D9A320] sm:text-4xl">
                  <AnimatedCounter to={s.value} />
                  {s.suffix}
                </span>
                <span className="text-[0.67rem] font-semibold uppercase tracking-[0.22em] text-[#F2E3C6]/38">
                  {t(s.label)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 py-28 sm:px-8 md:py-40 lg:px-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#080A0E_0%,#11151A_48%,#080A0E_100%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="relative min-h-[520px] overflow-hidden border border-[#F2E3C6]/10">
            <Image
              src="/manifesto_bg.png"
              alt="Proceso artesanal de cerveza tropical"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E]/88 via-transparent to-[#080A0E]/12" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="max-w-sm text-sm uppercase tracking-[0.26em] text-[#F5C542]">
                {lang === "es" ? "Manifiesto líquido" : "Liquid manifesto"}
              </p>
            </div>
          </div>

          <div className="lg:pl-10">
            <span className="section-label">{lang === "es" ? "Filosofía" : "Philosophy"}</span>
            <div className="space-y-8">
              {manifestoText[lang].map((line, i) => (
                <p
                  key={line}
                  className={
                    i === 0
                      ? "font-display text-5xl leading-[0.95] text-[#F7E9C9] sm:text-7xl"
                      : i === 1
                        ? "font-display text-4xl leading-tight text-[#D9A320] sm:text-6xl"
                        : "max-w-2xl text-xl leading-9 text-[#F2E3C6]/68"
                  }
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-5 py-28 sm:px-8 md:py-40 lg:px-10">
        <div className="absolute inset-0 opacity-45">
          <Image
            src="/beer_bottles.png"
            alt="Botellas artesanales con frutas tropicales"
            fill
            sizes="100vw"
            className="object-cover object-[50%_30%]"
          />
          <div className="absolute inset-0 bg-[#080A0E]/82" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <span className="section-label">{lang === "es" ? "Drops actuales" : "Current drops"}</span>
              <h2 className="font-display max-w-4xl text-6xl leading-none text-[#F7E9C9] sm:text-8xl">
                {lang === "es" ? "Cervezas con presencia." : "Beers with presence."}
              </h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-[#F2E3C6]/64">
              {lang === "es"
                ? "Una selección de micro-lotes con identidad propia: miel, maracuyá, mora, coco y recetas que se beben como una escena."
                : "A selection of micro-batches with their own identity: honey, passion fruit, blackberry, coconut and recipes that drink like a scene."}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {featuredBeers.map((beer) => (
              <div key={beer.id}>
                <BeerCard beer={beer} />
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/cervezas"
              className="group inline-flex items-center gap-3 border border-[#D9A320]/44 bg-[#080A0E]/58 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#D9A320] backdrop-blur-xl hover:bg-[#D9A320] hover:text-[#080A0E]"
            >
              {lang === "es" ? "Ver catálogo completo" : "View full catalog"}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative px-5 py-28 sm:px-8 md:py-40 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <span className="section-label">{lang === "es" ? "Nuestra historia" : "Our story"}</span>
              <h2 className="font-display text-6xl leading-none text-[#F7E9C9] sm:text-8xl">
                {lang === "es" ? "Nació de una tesis. Creció como obsesión." : "Born from a thesis. Built as an obsession."}
              </h2>
              <p className="mt-8 text-lg leading-9 text-[#F2E3C6]/68">
                {lang === "es"
                  ? "Todo empezó en Bélgica, con una investigación universitaria y la idea de convertir frutas panameñas en cerveza. Mafe y Lisandro transformaron esa curiosidad en una marca de batches pequeños, tropicales y difíciles de olvidar."
                  : "It started in Belgium, with university research and the idea of turning Panamanian fruit into beer. Mafe and Lisandro turned that curiosity into a brand of small, tropical and hard-to-forget batches."}
              </p>
              <Link
                href="/historia"
                className="mt-9 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#D9A320] hover:text-[#F5C542]"
              >
                {lang === "es" ? "Leer historia completa" : "Read full story"}
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-5 gap-4">
              <div className="relative col-span-3 min-h-[520px] overflow-hidden border border-[#F2E3C6]/10">
                <Image src="/brew_process.png" alt="Proceso de brewing artesanal" fill sizes="(min-width: 1024px) 36vw, 60vw" className="object-cover" />
              </div>
              <div className="relative col-span-2 mt-16 min-h-[420px] overflow-hidden border border-[#F2E3C6]/10">
                <Image src="/craft_beer.png" alt="Cerveza artesanal servida" fill sizes="(min-width: 1024px) 24vw, 40vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#F2E3C6]/10 bg-[#11151A] px-5 py-24 sm:px-8 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <span className="section-label">{lang === "es" ? "Esencia" : "Essence"}</span>
            <h2 className="font-display text-6xl leading-none text-[#F7E9C9] sm:text-8xl">
              {lang === "es" ? "Lo que mueve cada lote." : "What moves every batch."}
            </h2>
          </div>

          <div className="grid grid-cols-1 border border-[#F2E3C6]/10 md:grid-cols-2">
            {values.map((value, i) => (
              <div
                key={value.title.es}
                className={`p-10 transition-colors hover:bg-[#13181F] ${
                  i % 2 === 0 ? "md:border-r border-[#F2E3C6]/10" : ""
                } ${
                  i < 2 ? "border-b border-[#F2E3C6]/10" : ""
                }`}
              >
                <p className="font-display text-[5.5rem] leading-none text-[#D9A320]/14 mb-5 -ml-1">
                  0{i + 1}
                </p>
                <h3 className="font-display text-3xl text-[#F7E9C9] -mt-4">{t(value.title)}</h3>
                <p className="mt-4 max-w-xs text-sm leading-7 text-[#F2E3C6]/55">{t(value.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 py-28 sm:px-8 md:py-40 lg:px-10">
        <Image
          src="/beer_glass.png"
          alt="Copa de cerveza artesanal cinematográfica"
          fill
          sizes="100vw"
          className="object-cover object-[52%_44%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,14,0.96),rgba(8,10,14,0.78),rgba(8,10,14,0.4))]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <Beer size={34} className="mb-7 text-[#D9A320]" />
            <h2 className="font-display text-6xl leading-none text-[#F7E9C9] sm:text-8xl">
              {lang === "es" ? "Entérate antes del próximo drop." : "Know before the next drop."}
            </h2>
            <p className="mt-6 text-xl leading-9 text-[#F2E3C6]/70">
              {lang === "es"
                ? "Preventas, sabores secretos y eventos. Solo lo importante, directo al correo."
                : "Pre-sales, secret flavors and events. Only what matters, straight to your inbox."}
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder={lang === "es" ? "tu@correo.com" : "your@email.com"}
                className="min-h-14 flex-1 border border-[#F2E3C6]/16 bg-[#080A0E]/70 px-5 text-sm text-[#F2E3C6] outline-none backdrop-blur-xl placeholder:text-[#F2E3C6]/30 focus:border-[#D9A320]"
              />
              <button
                type="submit"
                className="min-h-14 bg-[#D9A320] px-8 text-xs font-bold uppercase tracking-[0.22em] text-[#080A0E] hover:bg-[#F5C542]"
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
