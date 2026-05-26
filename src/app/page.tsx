"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, FlaskConical, Star, ChevronDown } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import BeerCard from "@/components/BeerCard";
import { BEERS } from "@/lib/data";

const featuredBeers = BEERS.filter((b) =>
  ["chuzo-honey", "besito-electrico", "mora-colada", "banana-bread-ale"].includes(b.id)
);

function AnimatedCounter({ to, duration = 1500 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let start = 0;
      const step = to / (duration / 16);
      const interval = setInterval(() => {
        start += step;
        if (start >= to) { setCount(to); clearInterval(interval); }
        else setCount(Math.floor(start));
      }, 16);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function HomePage() {
  const { lang, t } = useLang();

  const heroText = {
    es: {
      eyebrow: "Panamá · Micro-lotes limitados",
      h1a: "Cervezas artesanales",
      h1b: "tropicales.",
      sub: "Micro-lotes limitados hechos en Panamá. Cada batch es único. Algunos nunca volverán.",
      cta1: "Ver cervezas",
      cta2: "Comprar ahora",
      scroll: "Descubrir",
    },
    en: {
      eyebrow: "Panama · Limited micro-batches",
      h1a: "Tropical craft",
      h1b: "beers.",
      sub: "Limited micro-batches made in Panama. Each batch is unique. Some will never return.",
      cta1: "See beers",
      cta2: "Shop now",
      scroll: "Discover",
    },
  };

  const copy = heroText[lang];

  const manifestoText = {
    es: [
      "En Tucán Brewery no hacemos cerveza para llenar estantes.",
      "Hacemos cerveza porque hay sabores que merecen existir aunque sea una sola vez.",
      "Cada lote nace de una idea, una obsesión o una mezcla que probablemente nadie pidió… pero que nosotros necesitábamos probar.",
      "Buscamos crear experiencias: tropicales, intensas, raras, memorables y vivas.",
      "Trabajamos en micro-lotes porque creemos que lo artesanal de verdad debe sentirse humano, imperfecto y limitado.",
    ],
    en: [
      "At Tucán Brewery we don't make beer to fill shelves.",
      "We make beer because there are flavors that deserve to exist even if just once.",
      "Every batch is born from an idea, an obsession or a mix nobody asked for… but that we needed to try.",
      "We seek to create experiences: tropical, intense, rare, memorable and alive.",
      "We work in micro-batches because we believe true craftsmanship must feel human, imperfect and limited.",
    ],
  };

  const stats = [
    { value: 8, label: { es: "Batches producidos", en: "Batches produced" }, suffix: "" },
    { value: 320, label: { es: "Botellas en total", en: "Total bottles" }, suffix: "+" },
    { value: 3, label: { es: "Cervezas activas", en: "Active beers" }, suffix: "" },
    { value: 100, label: { es: "% Artesanal", en: "% Craft" }, suffix: "%" },
  ];

  return (
    <div>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558642891-54be180ea339?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0F14]/95 via-[#0D0F14]/80 to-[#1D3515]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-transparent to-transparent" />

        {/* Floating tropical elements */}
        <div className="absolute top-20 right-10 text-5xl opacity-20 leaf-sway">🌴</div>
        <div className="absolute bottom-40 left-10 text-4xl opacity-15 leaf-sway" style={{ animationDelay: "1s" }}>🍃</div>
        <div className="absolute top-40 left-20 text-3xl opacity-10 animate-float">🌺</div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 border border-[#D9A320]/40 bg-[#D9A320]/10 px-4 py-1.5 rounded-full mb-6">
            <Leaf size={14} className="text-[#3F6B2A]" />
            <span className="text-xs font-medium text-[#D9A320] tracking-widest uppercase">
              {copy.eyebrow}
            </span>
          </div>

          {/* H1 */}
          <h1 className="mb-6">
            <span
              className="block text-5xl sm:text-7xl lg:text-9xl font-display text-[#F2E3C6] leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {copy.h1a}
            </span>
            <span
              className="block text-6xl sm:text-8xl lg:text-[10rem] font-display text-shimmer leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {copy.h1b}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#F2E3C6]/70 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            {copy.sub}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/cervezas"
              className="group flex items-center justify-center gap-2 bg-[#D9A320] text-[#0D0F14] font-bold px-8 py-4 rounded-full hover:bg-[#E86A17] hover:shadow-xl hover:shadow-[#D9A320]/30 transition-all text-base"
            >
              {copy.cta1}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/tienda"
              className="flex items-center justify-center gap-2 border-2 border-[#D9A320]/50 text-[#F2E3C6] font-semibold px-8 py-4 rounded-full hover:border-[#D9A320] hover:bg-[#D9A320]/10 transition-all text-base"
            >
              {copy.cta2}
            </Link>
          </div>

          {/* Batch badge */}
          <div className="inline-flex items-center gap-2 bg-[#A92118]/20 border border-[#A92118]/40 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#A92118] animate-pulse" />
            <span className="text-sm text-[#F2E3C6]/80">
              {lang === "es"
                ? "Lote Activo: Lichi Rosada 008 — Solo 32 botellas"
                : "Active Batch: Lichi Rosada 008 — Only 32 bottles"}
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#F2E3C6]/30 animate-bounce">
          <span className="text-xs tracking-widest uppercase">{copy.scroll}</span>
          <ChevronDown size={20} />
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────────────────── */}
      <section className="bg-[#171A20] border-y border-[#D9A320]/15 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label.es} className="text-center">
              <p
                className="text-4xl sm:text-5xl font-display text-gold-gradient mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <AnimatedCounter to={s.value} />
                {s.suffix}
              </p>
              <p className="text-xs text-[#F2E3C6]/40 uppercase tracking-wider">
                {t(s.label)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── MANIFIESTO ───────────────────────────────────────────────── */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559526642-c3f001ea68ee?w=1200&q=60')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F14] via-transparent to-[#0D0F14]" />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="divider-gold mb-10" />

          <FlaskConical size={32} className="mx-auto text-[#D9A320] mb-6 opacity-60" />

          <div className="space-y-5">
            {manifestoText[lang].map((line, i) => (
              <p
                key={i}
                className={`text-lg sm:text-xl leading-relaxed ${
                  i === 0
                    ? "text-[#F2E3C6] font-semibold text-2xl sm:text-3xl"
                    : i === 1
                    ? "text-gold-gradient font-display text-2xl sm:text-3xl"
                    : "text-[#F2E3C6]/70"
                }`}
                style={i <= 1 ? { fontFamily: "'Bebas Neue', sans-serif" } : {}}
              >
                {line}
              </p>
            ))}
          </div>

          <div className="divider-gold mt-10" />
        </div>
      </section>

      {/* ─── CERVEZAS DESTACADAS ──────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#D9A320] text-xs uppercase tracking-widest font-semibold">
              {lang === "es" ? "Lotes actuales" : "Current batches"}
            </span>
            <h2
              className="text-5xl sm:text-6xl font-display text-[#F2E3C6] mt-2"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {lang === "es" ? "Cervezas destacadas" : "Featured Beers"}
            </h2>
            <p className="text-[#F2E3C6]/50 mt-3 max-w-md mx-auto">
              {lang === "es"
                ? "Micro-lotes artesanales. Limitados. Algunos desaparecerán para siempre."
                : "Craft micro-batches. Limited. Some will disappear forever."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBeers.map((beer) => (
              <BeerCard key={beer.id} beer={beer} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/cervezas"
              className="inline-flex items-center gap-2 border border-[#D9A320]/40 text-[#D9A320] px-6 py-3 rounded-full hover:bg-[#D9A320] hover:text-[#0D0F14] transition-all font-semibold"
            >
              {lang === "es" ? "Ver catálogo completo" : "View full catalog"}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BATCH TIMELINE ───────────────────────────────────────────── */}
      <section className="py-16 bg-[#171A20] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2
              className="text-4xl sm:text-5xl font-display text-[#D9A320]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {lang === "es" ? "Línea de tiempo de lotes" : "Batch Timeline"}
            </h2>
            <p className="text-[#F2E3C6]/40 mt-2 text-sm">
              {lang === "es" ? "La historia embotellada de Tucán Brewery." : "The bottled history of Tucán Brewery."}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {BEERS.concat().sort((a, b) => a.batch - b.batch).map((beer) => (
              <Link key={beer.id} href={`/cervezas/${beer.id}`}>
                <div
                  className={`glass-card rounded-xl px-4 py-3 flex items-center gap-3 hover:border-[#D9A320]/40 transition-all group cursor-pointer ${
                    beer.availability === "never-again" ? "opacity-60" : ""
                  }`}
                >
                  <span className="badge-batch text-xs px-2 py-0.5 rounded-full">
                    #{beer.batchCode}
                  </span>
                  <span className="text-lg">{beer.emoji}</span>
                  <div>
                    <p className="text-sm font-semibold text-[#F2E3C6] group-hover:text-[#D9A320] transition-colors">
                      {beer.name}
                    </p>
                    <p className="text-xs text-[#F2E3C6]/30">{beer.productionDate}</p>
                  </div>
                  {beer.availability === "never-again" && (
                    <span className="text-xs text-[#A92118] font-semibold">
                      R.I.P
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HISTORIA PREVIEW ─────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#D9A320] text-xs uppercase tracking-widest font-semibold">
              {lang === "es" ? "Nuestra historia" : "Our story"}
            </span>
            <h2
              className="text-5xl sm:text-6xl font-display text-[#F2E3C6] mt-2 mb-6 leading-tight"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {lang === "es" ? "Nació mucho antes de existir como marca." : "Born long before becoming a brand."}
            </h2>
            <p className="text-[#F2E3C6]/60 leading-relaxed mb-4">
              {lang === "es"
                ? "Todo empezó en Bélgica, con una tesis universitaria y una obsesión por los sabores que no existen todavía. Mafe y Lisandro convirtieron la curiosidad en cerveza artesanal panameña."
                : "It all started in Belgium, with a university thesis and an obsession for flavors that don't exist yet. Mafe and Lisandro turned curiosity into Panamanian craft beer."}
            </p>
            <p className="text-[#F2E3C6]/60 leading-relaxed mb-8">
              {lang === "es"
                ? "El nombre viene de algo muy personal y muy tropical. Un chiste familiar que se convirtió en el símbolo perfecto de lo que queremos crear."
                : "The name comes from something very personal and very tropical. A family joke that became the perfect symbol of what we want to create."}
            </p>
            <Link
              href="/historia"
              className="inline-flex items-center gap-2 text-[#D9A320] font-semibold hover:text-[#E86A17] transition-colors"
            >
              {lang === "es" ? "Leer historia completa" : "Read full story"}
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1559526642-c3f001ea68ee?w=400&q=80"
                alt="Brewing"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[3/4] mt-8">
              <img
                src="https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=400&q=80"
                alt="Craft beer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALORES ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#171A20] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl sm:text-5xl font-display text-[#F2E3C6]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {lang === "es" ? "Lo que nos mueve" : "What drives us"}
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🎨", title: { es: "Creatividad", en: "Creativity" }, desc: { es: "No repetir lo mismo de siempre.", en: "Never repeat what's been done." } },
              { icon: "🤲", title: { es: "Artesanal", en: "Craft" }, desc: { es: "Hecho en pequeños lotes, manualmente.", en: "Made by hand, in small batches." } },
              { icon: "🌴", title: { es: "Tropical", en: "Tropical" }, desc: { es: "Inspirado en Panamá, frutas y calor.", en: "Inspired by Panama, fruit and heat." } },
              { icon: "🔬", title: { es: "Experimental", en: "Experimental" }, desc: { es: "Cada cerveza puede sorprender.", en: "Every beer can surprise." } },
            ].map((v) => (
              <div key={v.title.es} className="glass-card rounded-2xl p-6 text-center card-glow">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3
                  className="font-display text-2xl text-[#D9A320] mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {t(v.title)}
                </h3>
                <p className="text-[#F2E3C6]/50 text-sm">{t(v.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER ───────────────────────────────────────────────── */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1D3515] via-[#3F6B2A]/20 to-[#1D3515]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#D9A320]/5 blur-3xl" />

        <div className="relative max-w-2xl mx-auto text-center">
          <Star size={28} className="mx-auto text-[#D9A320] mb-4" />
          <h2
            className="text-5xl sm:text-6xl font-display text-[#F2E3C6] mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {lang === "es" ? "Entérate primero." : "Be first to know."}
          </h2>
          <p className="text-[#F2E3C6]/60 mb-8 text-lg">
            {lang === "es"
              ? "Nuevos drops, preventas, sabores secretos y eventos. Antes que nadie."
              : "New drops, pre-sales, secret flavors and events. Before anyone else."}
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder={lang === "es" ? "tu@correo.com" : "your@email.com"}
              className="flex-1 bg-[#0D0F14]/80 border border-[#D9A320]/30 text-[#F2E3C6] px-5 py-3.5 rounded-full focus:outline-none focus:border-[#D9A320] placeholder-[#F2E3C6]/20"
            />
            <button
              type="submit"
              className="bg-[#D9A320] text-[#0D0F14] font-bold px-7 py-3.5 rounded-full hover:bg-[#E86A17] transition-colors whitespace-nowrap"
            >
              {lang === "es" ? "Unirme" : "Join"}
            </button>
          </form>

          <p className="text-[#F2E3C6]/20 text-xs mt-4">
            {lang === "es" ? "Sin spam. Solo cerveza." : "No spam. Just beer."}
          </p>
        </div>
      </section>
    </div>
  );
}
