"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Beer, Camera, MapPin, Sparkles } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export default function HistoriaPage() {
  const { lang } = useLang();

  const copy = {
    es: {
      title: "Nuestra Historia",
      subtitle: "Una marca panameña que empezó en un viaje cervecero por Bélgica.",
      paragraphs: [
        "Todo empezó cuando Mafe viajó a Bélgica con su papá y descubrió que la cerveza podía ser mucho más que una bebida. En cada tour aparecían historias, fermentaciones, abadías, estilos raros, vasos distintos y una forma de vivir la cerveza con ritual, paciencia y oficio.",
        "Años después, mientras estudiaba Nutrición y Ciencia y Tecnología de los Alimentos, esa memoria volvió al laboratorio. Su primera cerveza experimental no fue perfecta, pero abrió la puerta correcta: probar ingredientes inesperados y convertir la curiosidad en método.",
        "La tesis universitaria terminó convirtiéndose en Mangonazo, una cerveza artesanal panameña que mezclaba técnica con fruta local. Ese fue el punto de partida real de Tucán Brewery: micro-lotes con identidad tropical, recetas que nacen de una obsesión y una marca pensada para sorprender.",
        "Lisandro se sumó al proyecto y juntos empezaron a construir una cervecería que no quiere llenar anaqueles con lo mismo de siempre. Tucán busca crear experiencias embotelladas: sabores intensos, raros, vivos y memorables.",
        "El nombre viene de algo íntimo y tropical. El tucán empezó como un chiste familiar, pero terminó siendo el símbolo perfecto: color, curiosidad, carácter y una conexión directa con Panamá.",
      ],
      dreamTitle: "El sueño",
      dreamText: "Un espacio tropical, vivo y experimental donde cada visita se sienta como descubrir una cerveza que no existía ayer.",
    },
    en: {
      title: "Our Story",
      subtitle: "A Panamanian brand that started with a beer trip through Belgium.",
      paragraphs: [
        "It started when Mafe traveled to Belgium with her dad and discovered beer could be much more than a drink. Every tour revealed stories, fermentations, abbeys, rare styles, distinct glassware and a way of experiencing beer with ritual, patience and craft.",
        "Years later, while studying Nutrition and Food Science and Technology, that memory returned to the lab. Her first experimental beer was not perfect, but it opened the right door: testing unexpected ingredients and turning curiosity into method.",
        "Her university thesis became Mangonazo, a Panamanian craft beer that mixed technique with local fruit. That was the true beginning of Tucán Brewery: micro-batches with tropical identity, recipes born from obsession and a brand built to surprise.",
        "Lisandro joined the project and together they started building a brewery that does not want to fill shelves with the same thing forever. Tucán creates bottled experiences: intense, strange, alive and memorable flavors.",
        "The name comes from something intimate and tropical. The toucan started as a family joke, but became the perfect symbol: color, curiosity, character and a direct connection to Panama.",
      ],
      dreamTitle: "The Dream",
      dreamText: "A tropical, alive and experimental space where every visit feels like discovering a beer that did not exist yesterday.",
    },
  }[lang];

  const timeline = [
    { value: "BE", label: lang === "es" ? "Inspiración en Bélgica" : "Belgium inspiration" },
    { value: "001", label: "Mangonazo thesis batch" },
    { value: "008", label: lang === "es" ? "Micro-lotes tropicales" : "Tropical micro-batches" },
  ];

  return (
    <div className="route-page bg-[#080A0E]">
      <section className="route-pad relative overflow-hidden pb-24 pt-12">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#11151A_0%,#080A0E_78%)]" />
        <div className="relative mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="max-w-3xl lg:pl-8">
            <span className="section-label">Tucán Brewery</span>
            <h1 className="font-display text-6xl leading-none text-[#F7E9C9] sm:text-7xl lg:text-8xl">
              {copy.title}
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#F2E3C6]/72">
              {copy.subtitle}
            </p>
            <div className="mt-10 grid grid-cols-3 gap-px bg-[#F2E3C6]/12">
              {timeline.map((item) => (
                <div key={item.value} className="bg-[#101419] p-5">
                  <p className="font-display text-4xl text-[#D9A320]">{item.value}</p>
                  <p className="mt-2 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-[#F2E3C6]/48">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[620px] overflow-hidden border border-[#F2E3C6]/10 shadow-[0_30px_100px_rgba(0,0,0,0.52)]">
            <Image
              src="/beer_bottles.png"
              alt="Tour de cerveza inspirado en Bélgica"
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,14,0.04),rgba(8,10,14,0.82)),radial-gradient(circle_at_50%_25%,rgba(217,163,32,0.25),transparent_36%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-md border border-[#D9A320]/40 bg-[#080A0E]/70 p-5 backdrop-blur-xl">
                <div className="mb-3 flex items-center gap-2 text-[#D9A320]">
                  <Camera size={18} />
                  <span className="text-xs font-bold uppercase tracking-[0.22em]">
                    {lang === "es" ? "Tours cerveceros · Bélgica" : "Beer tours · Belgium"}
                  </span>
                </div>
                <p className="text-sm leading-7 text-[#F2E3C6]/76">
                  {lang === "es"
                    ? "La cultura cervecera belga fue el primer chispazo: tours, catas, tradición y una forma más profunda de mirar cada vaso."
                    : "Belgian beer culture was the first spark: tours, tastings, tradition and a deeper way to look at every glass."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="route-pad py-24 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="lg:sticky lg:top-32 lg:h-fit">
            <div className="border border-[#D9A320]/20 bg-[#11151A] p-8">
              <Beer className="mb-6 text-[#D9A320]" size={32} />
              <h2 className="font-display text-5xl leading-none text-[#F7E9C9]">
                {copy.dreamTitle}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#F2E3C6]/68">
                {copy.dreamText}
              </p>
            </div>
          </aside>

          <article className="max-w-5xl">
            <div className="columns-1 gap-16 xl:columns-2">
              {copy.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`mb-8 break-inside-avoid text-justify leading-9 ${
                    index === 0
                      ? "text-xl font-medium text-[#F7E9C9]"
                      : "text-lg font-light text-[#F2E3C6]/72"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-16 grid gap-5 md:grid-cols-3">
              {[
                { icon: Sparkles, title: "Micro-lotes", text: lang === "es" ? "Recetas pequeñas, numeradas y con historia propia." : "Small, numbered recipes with their own story." },
                { icon: MapPin, title: "Panamá", text: lang === "es" ? "Fruta local, calor tropical y espíritu experimental." : "Local fruit, tropical heat and experimental spirit." },
                { icon: Beer, title: "Experiencia", text: lang === "es" ? "No solo beber: recordar el sabor." : "Not just drinking: remembering the flavor." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="border border-[#F2E3C6]/10 bg-[#11151A] p-6">
                    <Icon className="mb-4 text-[#D9A320]" size={24} />
                    <h3 className="font-display text-3xl text-[#F7E9C9]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#F2E3C6]/58">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </section>

      <section className="px-5 pb-28 text-center sm:px-8 lg:px-12">
        <Link
          href="/cervezas"
          className="group inline-flex items-center gap-3 bg-[#D9A320] px-9 py-5 text-xs font-bold uppercase tracking-[0.22em] text-[#080A0E] hover:bg-[#F5C542]"
        >
          {lang === "es" ? "Explorar las cervezas" : "Explore the beers"}
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </section>
    </div>
  );
}
