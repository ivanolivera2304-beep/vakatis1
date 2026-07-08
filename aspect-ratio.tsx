/**
 * FeaturedCarousel — Vakatis Guest Relation
 * Design: Sol & Mar Editorial — carrusel editorial de experiencias destacadas
 * Fondo azul marino profundo, tarjetas grandes con imagen y texto superpuesto
 * Todas las imágenes son ÚNICAS y no se repiten en ninguna otra sección
 */
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowUp } from "lucide-react";
import ReserveFormButton from "@/components/ReserveFormButton";
import { getBookingLink } from "@/lib/bookingLinks";

const featured = [
  {
    id: 1,
    title: "Crucero al Atardecer",
    subtitle: "Navega bajo el cielo dorado del Mediterráneo",
    description: "Zarpa desde Puerto Banús en un yate de lujo al atardecer. Champagne, canapés gourmet y las mejores vistas de Costa del Sol mientras el sol se hunde en el mar.",
    image: "/manus-storage/carousel-sunset-cruise_79b11c17.jpg",
    tag: "Más exclusivo",
  },
  {
    id: 2,
    title: "Flota Premium",
    subtitle: "Autos de lujo · Transfer · Gastronomía",
    description: "Servicios exclusivos para quienes exigen lo mejor. Flota de autos deportivos, traslados privados con chófer y experiencias gastronómicas en los mejores restaurantes.",
    image: "/manus-storage/service-luxury-dinner_71849e77.jpg",
    tag: "Servicios Premium",
  },
];

export default function FeaturedCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating]);

  const prev = () => goTo((current - 1 + featured.length) % featured.length);
  const next = useCallback(() => goTo((current + 1) % featured.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const item = featured[current];

  return (
    <section id="experiencias" className="py-20 md:py-28 vakatis-gradient">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-line w-12" />
            <span className="font-body text-sm tracking-widest uppercase text-[oklch(0.72_0.12_75)] font-semibold">
              Experiencias Destacadas
            </span>
            <div className="gold-line w-12" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Lo mejor de Costa del Sol
            <br />
            <span className="italic text-[oklch(0.85_0.12_75)]">en un solo lugar</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Main Image */}
          <div className="relative h-[400px] md:h-[520px] lg:h-[600px]">
            <img
              key={item.id}
              src={item.image}
              alt={item.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.05_240/0.85)] via-[oklch(0.18_0.05_240/0.4)] to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.05_240/0.7)] via-transparent to-transparent" />

            {/* Content */}
            <div
              className={`absolute bottom-0 left-0 p-8 md:p-12 max-w-xl transition-all duration-400 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-[oklch(0.72_0.12_75)] text-[oklch(0.18_0.05_240)] font-body text-xs font-bold mb-4">
                {item.tag}
              </span>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-2 hero-text-shadow">
                {item.title}
              </h3>
              <p className="font-body text-[oklch(0.85_0.12_75)] text-base md:text-lg mb-3 font-medium">
                {item.subtitle}
              </p>
              <p className="font-body text-white/80 text-sm md:text-base leading-relaxed mb-6">
                {item.description}
              </p>
              <ReserveFormButton
                service={item.title === "Crucero al Atardecer" ? "Bote VIP con Bebidas y Frutas" : "Alquiler de Autos de Lujo"}
                link={getBookingLink(item.title === "Crucero al Atardecer" ? "Bote VIP con Bebidas y Frutas" : "Alquiler de Autos de Lujo")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full btn-gold font-body font-semibold text-sm shadow-xl"
              >
                <ArrowUp size={16} />
                Reservar ahora
              </ReserveFormButton>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110"
              aria-label="Siguiente"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 right-6 flex gap-2">
            {featured.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-8 h-2 bg-[oklch(0.72_0.12_75)]"
                    : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Ir a slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          {featured.map((item, i) => (
            <button
              key={item.id}
              onClick={() => goTo(i)}
              className={`relative h-16 md:h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                i === current
                  ? "ring-2 ring-[oklch(0.72_0.12_75)] ring-offset-2 ring-offset-[oklch(0.18_0.05_240)]"
                  : "opacity-60 hover:opacity-90"
              }`}
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[oklch(0.18_0.05_240/0.3)]" />
              <span className="absolute bottom-1 left-1 right-1 font-body text-white text-xs font-medium truncate text-center">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
