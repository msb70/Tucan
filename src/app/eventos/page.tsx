"use client";
import { useLang } from "@/context/LanguageContext";
import { EVENTS, WHATSAPP_NUMBER } from "@/lib/data";
import { Calendar, MapPin, Clock, MessageCircle, Tag } from "lucide-react";
import { motion } from "framer-motion";

const typeColors: Record<string, string> = {
  degustacion: "bg-[#D9A320]/20 text-[#D9A320] border-[#D9A320]/30",
  popup: "bg-[#E86A17]/20 text-[#E86A17] border-[#E86A17]/30",
  lanzamiento: "bg-[#A92118]/20 text-[#A92118] border-[#A92118]/30",
  colaboracion: "bg-purple-500/20 text-purple-400 border-purple-400/30",
  feria: "bg-[#3F6B2A]/20 text-[#3F6B2A] border-[#3F6B2A]/30",
};

const typeLabels: Record<string, { es: string; en: string }> = {
  degustacion: { es: "Degustación", en: "Tasting" },
  popup: { es: "Pop-Up", en: "Pop-Up" },
  lanzamiento: { es: "Lanzamiento", en: "Launch" },
  colaboracion: { es: "Colaboración", en: "Collaboration" },
  feria: { es: "Feria", en: "Fair" },
};

function formatDate(dateStr: string, lang: "es" | "en") {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString(lang === "es" ? "es-PA" : "en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function EventosPage() {
  const { lang, t } = useLang();

  return (
    <div className="pt-32 pb-44 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[#D9A320] text-xs uppercase tracking-[0.3em] font-semibold mb-4">Tucán Brewery</p>
          <h1
            className="text-6xl sm:text-8xl font-display text-[#F2E3C6] tracking-wide"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {lang === "es" ? "Eventos" : "Events"}
          </h1>
          <div className="divider-gold max-w-sm mx-auto mt-6 mb-6" />
          <p className="text-[#F2E3C6]/60 mt-4 max-w-xl mx-auto text-lg font-light leading-relaxed">
            {lang === "es"
              ? "Degustaciones, pop-ups, lanzamientos y colaboraciones. La marca vive en la calle."
              : "Tastings, pop-ups, launches and collaborations. The brand lives on the street."}
          </p>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-72 rounded-3xl overflow-hidden mb-24 border border-white/5 shadow-2xl group"
        >
          <img
            src="/beer_glass.png"
            alt="Events"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-[3s]"
          />
          <div className="absolute inset-0 bg-[#0D0F14]/85 bg-gradient-to-r from-[#0D0F14]/90 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <p
                className="text-4xl sm:text-5xl font-display text-[#D9A320] tracking-wide mb-3"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {lang === "es" ? "Encuéntranos en Panamá" : "Find us in Panama"}
              </p>
              <p className="text-[#F2E3C6]/75 text-lg font-light max-w-md mx-auto">
                {lang === "es"
                  ? "Cada evento es una oportunidad de probar cosas antes de que desaparezcan."
                  : "Each event is a chance to taste things before they disappear."}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Events list */}
        <div className="space-y-8 mb-24">
          {EVENTS.map((event, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              key={event.id}
              className="glass-card rounded-3xl p-8 card-glow border-white/5"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                {/* Date block */}
                <div className="shrink-0 w-24 text-center">
                  <div className="bg-[#D9A320] rounded-2xl p-4 shadow-lg shadow-[#D9A320]/10">
                    <p
                      className="font-display text-4xl text-[#0D0F14] leading-none mb-1"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {new Date(event.date + "T00:00:00").getDate()}
                    </p>
                    <p className="text-xs text-[#0D0F14]/85 uppercase font-bold tracking-wider">
                      {new Date(event.date + "T00:00:00").toLocaleDateString(
                        lang === "es" ? "es-PA" : "en-US",
                        { month: "short" }
                      )}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span
                      className={`text-xs px-3.5 py-1.5 rounded-full border font-bold uppercase tracking-wider ${typeColors[event.type]}`}
                    >
                      {typeLabels[event.type][lang]}
                    </span>
                    {event.freeEntry && (
                      <span className="text-xs px-3.5 py-1.5 rounded-full border bg-[#3F6B2A]/20 text-[#D9A320] border-[#3F6B2A]/30 font-bold uppercase tracking-wider">
                        {lang === "es" ? "Entrada gratuita" : "Free entry"}
                      </span>
                    )}
                    {event.price && !event.freeEntry && (
                      <span className="text-xs px-3.5 py-1.5 rounded-full border bg-[#5A3418]/30 text-[#D9A320] border-[#D9A320]/20 font-bold uppercase tracking-wider">
                        ${event.price}
                      </span>
                    )}
                  </div>

                  <h3
                    className="font-display text-3xl text-[#F2E3C6] mb-3 tracking-wide"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {t(event.title)}
                  </h3>

                  <p className="text-[#F2E3C6]/70 text-base font-light leading-relaxed mb-6">
                    {t(event.description)}
                  </p>

                  <div className="flex flex-wrap gap-5 text-sm text-[#F2E3C6]/40 font-light pt-4 border-t border-[#D9A320]/5">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-[#D9A320]" />
                      {formatDate(event.date, lang)}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-[#D9A320]" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-[#D9A320]" />
                      {t(event.location)}
                    </div>
                  </div>
                </div>

                {/* RSVP */}
                <div className="shrink-0 self-center sm:self-start">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      lang === "es"
                        ? `Hola! Quiero asistir al evento: ${t(event.title)}`
                        : `Hi! I want to attend the event: ${t(event.title)}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 px-6 rounded-2xl hover:bg-[#20c05b] hover:shadow-xl hover:shadow-[#25D366]/15 transition-all text-sm whitespace-nowrap uppercase tracking-wider"
                  >
                    <MessageCircle size={18} />
                    {lang === "es" ? "Me apunto" : "I'm in"}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collab CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-10 sm:p-14 rounded-3xl bg-[#171A20] border border-[#D9A320]/15 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-[#D9A320]/5 blur-2xl" />
          <Tag size={32} className="mx-auto text-[#D9A320] mb-6 animate-pulse" />
          <h2
            className="text-4xl font-display text-[#F2E3C6] mb-4 tracking-wide"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {lang === "es" ? "¿Quieres que Tucán esté en tu evento?" : "Want Tucán at your event?"}
          </h2>
          <p className="text-[#F2E3C6]/60 mb-8 max-w-lg mx-auto text-lg font-light leading-relaxed">
            {lang === "es"
              ? "Colaboramos con bares, restaurantes, ferias y eventos privados. Escríbenos."
              : "We collaborate with bars, restaurants, fairs and private events. Reach out."}
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              lang === "es"
                ? "Hola! Quiero hablar sobre una colaboración con Tucán Brewery para un evento."
                : "Hi! I'd like to discuss a collaboration with Tucán Brewery for an event."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D9A320] text-[#0D0F14] font-bold px-9 py-5 rounded-full hover:bg-[#E86A17] hover:shadow-2xl hover:shadow-[#D9A320]/25 transition-all text-sm uppercase tracking-wider"
          >
            <MessageCircle size={18} />
            {lang === "es" ? "Hablemos" : "Let's talk"}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
