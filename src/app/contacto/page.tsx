"use client";
import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import { WHATSAPP_NUMBER } from "@/lib/data";
import { MessageCircle, Mail, Send, MapPin } from "lucide-react";

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

export default function ContactoPage() {
  const { lang } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola! Me llamo ${form.name}.\n${form.subject ? "Asunto: " + form.subject + "\n" : ""}${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const contactChannels = [
    {
      icon: <InstagramIcon size={24} />,
      label: "Instagram",
      value: "@tucanbrewery",
      href: "https://instagram.com/tucanbrewery",
      color: "from-pink-500 to-purple-600",
    },
    {
      icon: <MessageCircle size={24} />,
      label: "WhatsApp",
      value: "+507 6999-9999",
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      color: "from-[#25D366] to-[#128C7E]",
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "hola@tucanbrewery.com",
      href: "mailto:hola@tucanbrewery.com",
      color: "from-[#D9A320] to-[#E86A17]",
    },
  ];

  const topics = {
    es: ["Quiero pedir cervezas", "Colaboración o evento", "Prensa o medios", "Hablar de cerveza rara"],
    en: ["I want to order beers", "Collaboration or event", "Press or media", "Talk about weird beer"],
  };

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
            {lang === "es" ? "Contacto" : "Contact"}
          </h1>
          <p className="text-[#F2E3C6]/50 mt-4 max-w-lg mx-auto text-lg italic">
            {lang === "es"
              ? '"¿Quieres colaborar, vender Tucán o simplemente hablar de cerveza rara? Escríbenos."'
              : '"Want to collaborate, carry Tucán or just talk about weird beer? Reach out."'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact channels */}
          <div>
            <h2
              className="text-3xl font-display text-[#D9A320] mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {lang === "es" ? "Cómo escribirnos" : "How to reach us"}
            </h2>

            <div className="space-y-4 mb-10">
              {contactChannels.map((ch) => (
                <a
                  key={ch.label}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-card rounded-2xl p-5 card-glow group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ch.color} flex items-center justify-center text-white`}>
                    {ch.icon}
                  </div>
                  <div>
                    <p className="text-xs text-[#F2E3C6]/30 uppercase tracking-wider">{ch.label}</p>
                    <p className="text-[#F2E3C6] font-medium group-hover:text-[#D9A320] transition-colors">
                      {ch.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={20} className="text-[#D9A320]" />
                <h3
                  className="font-display text-xl text-[#F2E3C6]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {lang === "es" ? "Dónde estamos" : "Where we are"}
                </h3>
              </div>
              <p className="text-[#F2E3C6]/60 text-sm">
                {lang === "es"
                  ? "Ciudad de Panamá, República de Panamá.\nMicro-cervecería artesanal. Visitas con cita previa."
                  : "Panama City, Republic of Panama.\nCraft micro-brewery. Visits by appointment."}
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2
              className="text-3xl font-display text-[#D9A320] mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {lang === "es" ? "Envíanos un mensaje" : "Send us a message"}
            </h2>

            {submitted ? (
              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🍺</div>
                <h3
                  className="text-3xl font-display text-[#D9A320] mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {lang === "es" ? "¡Cheers!" : "Cheers!"}
                </h3>
                <p className="text-[#F2E3C6]/60">
                  {lang === "es"
                    ? "Te redirigimos a WhatsApp. Respondemos rápido."
                    : "We redirected you to WhatsApp. We respond quickly."}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-[#D9A320] hover:text-[#E86A17] transition-colors"
                >
                  {lang === "es" ? "Enviar otro mensaje" : "Send another message"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#F2E3C6]/40 uppercase tracking-wider mb-1.5">
                      {lang === "es" ? "Nombre" : "Name"}
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#171A20] border border-[#D9A320]/20 text-[#F2E3C6] px-4 py-3 rounded-xl focus:outline-none focus:border-[#D9A320]/60 placeholder-[#F2E3C6]/20 text-sm"
                      placeholder={lang === "es" ? "Tu nombre" : "Your name"}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#F2E3C6]/40 uppercase tracking-wider mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#171A20] border border-[#D9A320]/20 text-[#F2E3C6] px-4 py-3 rounded-xl focus:outline-none focus:border-[#D9A320]/60 placeholder-[#F2E3C6]/20 text-sm"
                      placeholder="tu@correo.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#F2E3C6]/40 uppercase tracking-wider mb-1.5">
                    {lang === "es" ? "¿Sobre qué?" : "What about?"}
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {topics[lang].map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => setForm({ ...form, subject: topic })}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                          form.subject === topic
                            ? "bg-[#D9A320] text-[#0D0F14] border-[#D9A320]"
                            : "border-[#D9A320]/20 text-[#F2E3C6]/50 hover:border-[#D9A320]/50"
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#F2E3C6]/40 uppercase tracking-wider mb-1.5">
                    {lang === "es" ? "Mensaje" : "Message"}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#171A20] border border-[#D9A320]/20 text-[#F2E3C6] px-4 py-3 rounded-xl focus:outline-none focus:border-[#D9A320]/60 placeholder-[#F2E3C6]/20 text-sm resize-none"
                    placeholder={
                      lang === "es"
                        ? "Cuéntanos... ¿qué tienes en mente?"
                        : "Tell us... what's on your mind?"
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#20c05b] transition-all"
                >
                  <Send size={18} />
                  {lang === "es" ? "Enviar por WhatsApp" : "Send via WhatsApp"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
