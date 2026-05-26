"use client";
import { useLang } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const photos = [
  { src: "/brew_process.png", alt: "Brewing process" },
  { src: "/craft_beer.png", alt: "Craft beer" },
  { src: "/beer_bottles.png", alt: "Beer bottles" },
  { src: "/beer_glass.png", alt: "Beer glass" },
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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-32">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] scale-105"
          style={{ backgroundImage: "url('/manifesto_bg.png')" }}
        />
        <div className="absolute inset-0 bg-[#0D0F14]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <p className="text-[#D9A320] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Tucán Brewery</p>
          <h1
            className="text-6xl sm:text-9xl font-display text-[#F2E3C6] tracking-wide"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {copy.title}
          </h1>
          <div className="divider-gold max-w-xs mx-auto my-6" />
          <p className="text-[#F2E3C6]/75 text-xl sm:text-2xl mt-4 max-w-2xl mx-auto italic font-light leading-relaxed">
            {copy.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Story text */}
      <section className="py-36 md:py-48 px-4 max-w-[1400px] mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {copy.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: Math.min(i * 0.1, 0.3) }}
                className={`leading-relaxed text-lg sm:text-xl font-light ${
                  i === 0 ? "text-2xl text-[#F2E3C6] font-medium leading-relaxed" : "text-[#F2E3C6]/75"
                }`}
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Dream callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 p-10 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1D3515]/60 to-[#3F6B2A]/20 border border-[#3F6B2A]/40 text-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#D9A320]/5 blur-2xl" />
            <h3
              className="text-4xl font-display text-[#D9A320] mb-4 tracking-wide"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {copy.dreamTitle}
            </h3>
            <p className="text-[#F2E3C6]/90 text-xl italic font-light">{copy.dreamText}</p>
          </motion.div>
        </div>
      </section>

      {/* Photo grid — Behind the brewing */}
      <section className="py-36 md:py-48 px-4 bg-[#171A20] border-y border-[#D9A320]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[#D9A320] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Behind the scenes</span>
            <h2
              className="text-5xl sm:text-7xl font-display text-[#F2E3C6] tracking-wide"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {lang === "es" ? "Detrás del barril" : "Behind the brewing"}
            </h2>
            <div className="divider-gold max-w-sm mx-auto mt-5 mb-5" />
            <p className="text-[#F2E3C6]/50 mt-4 text-lg font-light">
              {lang === "es" ? "El proceso real, sin filtros." : "The real process, unfiltered."}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-3xl overflow-hidden shadow-2xl border border-white/5 relative group ${
                  i === 0 || i === 3 ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-sm font-semibold text-[#F2E3C6] tracking-wide uppercase">{photo.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro-batch concepts */}
      <section className="py-36 md:py-48 px-4 max-w-[1400px] mx-auto">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-block text-[#D9A320] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Esencia artesanal</span>
            <h2
              className="text-5xl sm:text-7xl font-display text-[#D9A320] tracking-wide"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {lang === "es" ? "El concepto de micro-lotes" : "The micro-batch concept"}
            </h2>
            <div className="divider-gold max-w-sm mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {concepts[lang].map((c, idx) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-2xl p-8 card-glow text-center border-white/5"
              >
                <div className="text-5xl mb-6 animate-float" style={{ animationDuration: '6s', animationDelay: `${idx * 0.4}s` }}>{c.icon}</div>
                <h3
                  className="font-display text-2xl text-[#D9A320] mb-3 tracking-wide"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {c.title}
                </h3>
                <p className="text-[#F2E3C6]/60 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center bg-gradient-to-t from-black/30 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/cervezas"
            className="group inline-flex items-center gap-3 bg-[#D9A320] text-[#0D0F14] font-bold px-9 py-5 rounded-full hover:bg-[#E86A17] hover:shadow-2xl hover:shadow-[#D9A320]/25 transition-all text-sm uppercase tracking-wider"
          >
            {lang === "es" ? "Explorar las cervezas" : "Explore the beers"}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
