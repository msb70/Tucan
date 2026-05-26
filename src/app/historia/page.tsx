"use client";
import { useLang } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const photos = [
  { src: "https://images.unsplash.com/photo-1559526642-c3f001ea68ee?w=600&q=80", alt: "Brewing process" },
  { src: "https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=600&q=80", alt: "Craft beer" },
  { src: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=80", alt: "Beer bottles" },
  { src: "https://images.unsplash.com/photo-1558642891-54be180ea339?w=600&q=80", alt: "Beer glass" },
];

export default function HistoriaPage() {
  const { lang } = useLang();

  const story = {
    es: {
      title: "Nuestra Historia",
      subtitle: "Tucán Brewery nació mucho antes de existir como marca.",
      paragraphs: [
        "Todo empezó hace unos años, cuando Mafe viajó a Bélgica con su papá y descubrió un mundo completamente diferente alrededor de la cerveza. No era solo una bebida: eran historias, ingredientes inesperados, estilos raros y experiencias que cambiaban con cada vaso.",
        "En ese momento, Mafe estudiaba Nutrición y también Ciencia y Tecnología de los Alimentos. Durante unas prácticas de laboratorio hizo su primera cerveza experimental — una mezcla con matcha y azúcar de coco que, honestamente, no salió muy bien… pero despertó algo mucho más importante: una obsesión por crear sabores nuevos.",
        "Tiempo después, esa curiosidad se convirtió en el tema de su tesis universitaria: el desarrollo de una cerveza artesanal en Panamá llamada Mangonazo. Ahí nació realmente el amor profundo por este mundo.",
        "Con el tiempo, Lisandro también se unió al proyecto y juntos empezaron a experimentar, probar ideas extrañas y crear cervezas que existían primero en la imaginación antes que en una botella.",
        "El nombre viene de algo muy personal y muy tropical al mismo tiempo. El tucán siempre estuvo presente como una especie de chiste familiar — por la 'nariz de tucán' que comparten Mafe, su papá y ahora también Lisandro — pero terminó convirtiéndose en el símbolo perfecto de lo que querían crear: algo colorido, tropical, curioso y lleno de personalidad.",
        "Porque eso es Tucán Brewery. Una cervecería artesanal inspirada completamente en Panamá: la selva, el calor, las frutas, la playa, los ingredientes locales y esa sensación tropical difícil de explicar pero imposible de olvidar.",
        "No hacemos producción masiva. Trabajamos en micro-lotes porque creemos que las mejores ideas no siempre nacen para durar para siempre. Cada cerveza es un experimento. Algunas saben exactamente como las imaginamos. Otras terminan siendo algo totalmente distinto. Y ahí también está la magia.",
        "Queremos que cada persona que pruebe una cerveza de Tucán Brewery piense: \"Wow… no esperaba que esto supiera así.\"",
        "Nuestro sueño es que algún día Tucán Brewery sea ese lugar al que la gente vaya a parkear, relajarse, rodearse de naturaleza y descubrir una cerveza nueva que jamás había probado antes.",
      ],
      dreamTitle: "El sueño",
      dreamText: "Un lugar tropical, experimental y vivo. Como Panamá.",
    },
    en: {
      title: "Our Story",
      subtitle: "Tucán Brewery was born long before it existed as a brand.",
      paragraphs: [
        "It all started a few years ago when Mafe traveled to Belgium with her dad and discovered a completely different world around beer. It wasn't just a drink — it was stories, unexpected ingredients, rare styles and experiences that changed with every glass.",
        "At that time, Mafe was studying Nutrition and also Food Science and Technology. During a lab practicum she made her first experimental beer — a blend with matcha and coconut sugar that, honestly, didn't go very well… but awakened something much more important: an obsession with creating new flavors.",
        "Later, that curiosity became the subject of her university thesis: the development of a craft beer in Panama called Mangonazo. That's where the deep love for this world was really born.",
        "Over time, Lisandro also joined the project and together they started experimenting, trying strange ideas and creating beers that existed first in imagination before in a bottle.",
        "The name comes from something very personal and very tropical at the same time. The toucan was always present as a kind of family joke — for the 'toucan nose' shared by Mafe, her dad and now Lisandro — but ended up becoming the perfect symbol of what they wanted to create: something colorful, tropical, curious and full of personality.",
        "Because that's Tucán Brewery. A craft brewery completely inspired by Panama: the jungle, the heat, the fruits, the beach, local ingredients and that tropical feeling that's hard to explain but impossible to forget.",
        "We don't do mass production. We work in micro-batches because we believe the best ideas don't always need to last forever. Each beer is an experiment. Some taste exactly as we imagined. Others end up being something completely different. And that's where the magic is too.",
        "We want every person who tries a Tucán Brewery beer to think: \"Wow… I didn't expect this to taste like this.\"",
        "Our dream is that someday Tucán Brewery will be that place where people come to park, relax, be surrounded by nature and discover a new beer they've never tried before.",
      ],
      dreamTitle: "The Dream",
      dreamText: "A tropical, experimental and alive place. Like Panama.",
    },
  };

  const copy = story[lang];

  const concepts = {
    es: [
      { icon: "🧪", title: "Micro-lotes experimentales", desc: "Cada cerveza es un experimento. Nunca producción masiva." },
      { icon: "💀", title: "Algunas nunca volverán", desc: "Cuando se acaba el lote, puede que desaparezca para siempre." },
      { icon: "🏆", title: "Casi coleccionable", desc: "Cada batch numerado es historia de la marca en botella." },
      { icon: "🌿", title: "Experiencias, no bebidas", desc: "Queremos que recuerdes cada cerveza que probaste." },
    ],
    en: [
      { icon: "🧪", title: "Experimental micro-batches", desc: "Every beer is an experiment. Never mass production." },
      { icon: "💀", title: "Some will never return", desc: "When the batch runs out, it might disappear forever." },
      { icon: "🏆", title: "Almost collectible", desc: "Each numbered batch is brand history in a bottle." },
      { icon: "🌿", title: "Experiences, not drinks", desc: "We want you to remember every beer you tried." },
    ],
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559526642-c3f001ea68ee?w=1200&q=70')" }}
        />
        <div className="absolute inset-0 bg-[#0D0F14]/85" />
        <div className="relative z-10 text-center px-4">
          <p className="text-[#D9A320] text-xs uppercase tracking-widest mb-4">Tucán Brewery</p>
          <h1
            className="text-6xl sm:text-8xl font-display text-[#F2E3C6]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {copy.title}
          </h1>
          <p className="text-[#F2E3C6]/60 text-xl mt-4 max-w-xl mx-auto italic">
            {copy.subtitle}
          </p>
        </div>
      </section>

      {/* Story text */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {copy.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`leading-relaxed ${
                  i === 0 ? "text-xl text-[#F2E3C6]/90 font-medium" : "text-[#F2E3C6]/70"
                }`}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Dream callout */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-[#1D3515] to-[#3F6B2A]/30 border border-[#3F6B2A]/40 text-center">
            <h3
              className="text-3xl font-display text-[#D9A320] mb-3"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {copy.dreamTitle}
            </h3>
            <p className="text-[#F2E3C6]/80 text-lg italic">{copy.dreamText}</p>
          </div>
        </div>
      </section>

      {/* Photo grid — Behind the brewing */}
      <section className="py-16 px-4 bg-[#171A20]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-4xl sm:text-5xl font-display text-[#F2E3C6]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {lang === "es" ? "Behind the brewing" : "Behind the brewing"}
            </h2>
            <p className="text-[#F2E3C6]/40 mt-2">
              {lang === "es" ? "El proceso real, sin filtros." : "The real process, unfiltered."}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {photos.map((photo, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden ${i === 0 || i === 3 ? "aspect-[3/4]" : "aspect-square"} group`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <p className="text-center text-[#F2E3C6]/30 text-sm mt-6">
            {lang === "es"
              ? "📸 Fotos del proceso artesanal — próximamente actualizadas con imágenes reales"
              : "📸 Brewing process photos — coming soon with real images"}
          </p>
        </div>
      </section>

      {/* Micro-batch concepts */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl sm:text-5xl font-display text-[#D9A320]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {lang === "es" ? "El concepto de micro-lotes" : "The micro-batch concept"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {concepts[lang].map((c) => (
              <div key={c.title} className="glass-card rounded-2xl p-6 card-glow text-center">
                <div className="text-5xl mb-4">{c.icon}</div>
                <h3
                  className="font-display text-xl text-[#D9A320] mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {c.title}
                </h3>
                <p className="text-[#F2E3C6]/50 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <Link
          href="/cervezas"
          className="inline-flex items-center gap-2 bg-[#D9A320] text-[#0D0F14] font-bold px-8 py-4 rounded-full hover:bg-[#E86A17] transition-all"
        >
          {lang === "es" ? "Explorar las cervezas" : "Explore the beers"}
          <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
