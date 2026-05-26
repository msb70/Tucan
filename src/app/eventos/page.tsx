"use client";
import { useLang } from "@/context/LanguageContext";
import { EVENTS, WHATSAPP_NUMBER } from "@/lib/data";
import { Calendar, MapPin, Clock, MessageCircle, Tag } from "lucide-react";

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
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#D9A320] text-xs uppercase tracking-widest mb-4">Tucán Brewery</p>
          <h1
            className="text-6xl sm:text-8xl font-display text-[#F2E3C6]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {lang === "es" ? "Eventos" : "Events"}
          </h1>
          <p className="text-[#F2E3C6]/50 mt-4 max-w-lg mx-auto">
            {lang === "es"
              ? "Degustaciones, pop-ups, lanzamientos y colaboraciones. La marca vive en la calle."
              : "Tastings, pop-ups, launches and collaborations. The brand lives on the street."}
          </p>
        </div>

        {/* Hero */}
        <div className="relative h-52 rounded-3xl overflow-hidden mb-16">
          <img
            src="https://images.unsplash.com/photo-1527090526205-beaac8dc3c62?w=1200&q=80"
            alt="Events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0D0F14]/80" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <p
                className="text-4xl font-display text-[#D9A320]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {lang === "es" ? "Encuéntranos en Panamá" : "Find us in Panama"}
              </p>
              <p className="text-[#F2E3C6]/60 mt-2">
                {lang === "es"
                  ? "Cada evento es una oportunidad de probar cosas antes de que desaparezcan."
                  : "Each event is a chance to taste things before they disappear."}
              </p>
            </div>
          </div>
        </div>

        {/* Events list */}
        <div className="space-y-6 mb-20">
          {EVENTS.map((event) => (
            <div key={event.id} className="glass-card rounded-2xl p-6 card-glow">
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                {/* Date block */}
                <div className="shrink-0 w-20 text-center">
                  <div className="bg-[#D9A320] rounded-xl p-3">
                    <p
                      className="font-display text-3xl text-[#0D0F14] leading-none"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {new Date(event.date + "T00:00:00").getDate()}
                    </p>
                    <p className="text-xs text-[#0D0F14]/70 uppercase font-semibold">
                      {new Date(event.date + "T00:00:00").toLocaleDateString(
                        lang === "es" ? "es-PA" : "en-US",
                        { month: "short" }
                      )}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={`text-xs px-3 py-1 rounded-full border font-medium ${typeColors[event.type]}`}
                    >
                      {typeLabels[event.type][lang]}
                    </span>
                    {event.freeEntry && (
                      <span className="text-xs px-3 py-1 rounded-full border bg-[#3F6B2A]/20 text-[#3F6B2A] border-[#3F6B2A]/30 font-medium">
                        {lang === "es" ? "Entrada gratuita" : "Free entry"}
                      </span>
                    )}
                    {event.price && !event.freeEntry && (
                      <span className="text-xs px-3 py-1 rounded-full border bg-[#5A3418]/30 text-[#D9A320] border-[#D9A320]/20 font-medium">
                        ${event.price}
                      </span>
                    )}
                  </div>

                  <h3
                    className="font-display text-2xl text-[#F2E3C6] mb-2"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {t(event.title)}
                  </h3>

                  <p className="text-[#F2E3C6]/60 text-sm leading-relaxed mb-4">
                    {t(event.description)}
                  </p>

                  <div className="flex flex-wrap gap-4 text-xs text-[#F2E3C6]/40">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {formatDate(event.date, lang)}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {t(event.location)}
                    </div>
                  </div>
                </div>

                {/* RSVP */}
                <div className="shrink-0">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      lang === "es"
                        ? `Hola! Quiero asistir al evento: ${t(event.title)}`
                        : `Hi! I want to attend the event: ${t(event.title)}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] text-white font-semibold py-2.5 px-5 rounded-xl hover:bg-[#20c05b] transition-all text-sm whitespace-nowrap"
                  >
                    <MessageCircle size={16} />
                    {lang === "es" ? "Me apunto" : "I'm in"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collab CTA */}
        <div className="p-8 rounded-3xl bg-[#171A20] border border-[#D9A320]/15 text-center">
          <Tag size={28} className="mx-auto text-[#D9A320] mb-4" />
          <h2
            className="text-3xl font-display text-[#F2E3C6] mb-3"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {lang === "es" ? "¿Quieres que Tucán esté en tu evento?" : "Want Tucán at your event?"}
          </h2>
          <p className="text-[#F2E3C6]/50 mb-6 max-w-md mx-auto">
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
            className="inline-flex items-center gap-2 bg-[#D9A320] text-[#0D0F14] font-bold px-8 py-4 rounded-full hover:bg-[#E86A17] transition-all"
          >
            <MessageCircle size={18} />
            {lang === "es" ? "Hablemos" : "Let's talk"}
          </a>
        </div>
      </div>
    </div>
  );
}
