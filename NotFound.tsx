/**
 * Hero — Vakatis Guest Relation
 * Design: Sol & Mar Editorial — imagen a pantalla completa, texto en tercio inferior izquierdo
 * Gradiente oscuro en la parte inferior para legibilidad del texto
 */
import { ChevronDown, Star } from "lucide-react";

const WHATSAPP_URL = "https://w.app/p2fix0";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/manus-storage/hero-costa-del-sol_3cc46e41.jpg')`,
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.18_0.05_240/0.5)] via-transparent to-[oklch(0.18_0.05_240/0.85)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.05_240/0.6)] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24">
        <div className="container">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-4 opacity-0 animate-fade-in">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="oklch(0.72 0.12 75)" className="text-[oklch(0.72_0.12_75)]" />
                ))}
              </div>
              <span className="text-white/80 font-body text-sm tracking-widest uppercase">
                Costa del Sol · España
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight hero-text-shadow mb-4 opacity-0 animate-fade-in-up delay-100">
              Vive Costa del Sol
              <br />
              <span className="italic text-[oklch(0.85_0.12_75)]">como nunca antes</span>
            </h1>

            {/* Subheading */}
            <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed mb-8 max-w-xl opacity-0 animate-fade-in-up delay-200">
              Experiencias exclusivas de lujo en el corazón del Mediterráneo. 
              Desde botes VIP hasta excursiones únicas — todo a tu medida.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up delay-300">
              <a
                href="#actividades"
                className="px-8 py-4 rounded-full btn-gold font-body font-semibold text-base shadow-xl"
              >
                Explorar actividades
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border-2 border-white/60 text-white font-body font-semibold text-base hover:bg-white/10 transition-all duration-200"
              >
                Contactar por WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/20 opacity-0 animate-fade-in delay-500">
              {[
                { value: "500+", label: "Clientes satisfechos" },
                { value: "15+", label: "Actividades exclusivas" },
                { value: "5★", label: "Valoración media" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-mono-price text-2xl font-bold text-[oklch(0.85_0.12_75)]">
                    {stat.value}
                  </div>
                  <div className="font-body text-white/70 text-sm mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-in delay-600">
        <a href="#actividades" className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors">
          <span className="font-body text-xs tracking-widest uppercase">Descubrir</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
