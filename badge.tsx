/**
 * LuxuryServices — Vakatis Guest Relation
 * Design: Sol & Mar Editorial — sección de servicios premium con layout asimétrico
 * Destacar autos de lujo, transfer y restaurante Trocadero — SIN precios
 * Todas las imágenes son ÚNICAS y no se repiten en ninguna otra sección
 */
import { MessageCircle, ArrowRight } from "lucide-react";
import ReserveFormButton from "@/components/ReserveFormButton";
import { getBookingLink } from "@/lib/bookingLinks";

const luxuryServices = [
  {
    id: 1,
    title: "Flota de Autos de Lujo",
    subtitle: "Ferrari · Porsche · BMW · Range Rover Sport",
    description: "Conduce el auto de tus sueños por las carreteras más espectaculares de Costa del Sol. Nuestra flota premium incluye los modelos más icónicos del mundo, con seguro completo y asistencia 24/7.",
    image: "/manus-storage/luxury-cars_b7c5c4ac.jpg",
    features: ["Ferrari California / 488", "Porsche 911 / Cayenne", "BMW Serie 8 / M5", "Range Rover Sport SVR"],
    cta: "Ver disponibilidad",
    highlight: "Exclusivo",
  },
  {
    id: 2,
    title: "Transfer Premium",
    subtitle: "Aeropuerto · Hotel · Eventos · Excursiones",
    description: "Traslados privados en vehículos de lujo por toda la zona de Costa del Sol. Chófer profesional, puntualidad garantizada y máximo confort para ti y tu grupo.",
    image: "/manus-storage/transfer_96c3a132.jpg",
    features: ["Aeropuerto de Málaga", "Hoteles y villas", "Puerto Banús", "Toda Costa del Sol"],
    cta: "Reservar transfer",
    highlight: "Disponible 24/7",
  },
  {
    id: 3,
    title: "Gastronomía de Autor",
    subtitle: "Cena de lujo con vistas al Mediterráneo",
    description: "Experiencia gastronómica exclusiva con cocina mediterránea de autor, maridaje de vinos selectos y servicio personalizado en los mejores restaurantes de la zona.",
    image: "/manus-storage/service-luxury-dinner_71849e77.jpg",
    features: ["Menú degustación", "Maridaje de vinos", "Primera línea de playa", "Reserva VIP"],
    cta: "Reservar mesa",
    highlight: "Sin coste de reserva",
  },
];

export default function LuxuryServices() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line w-12" />
            <span className="font-body text-sm tracking-widest uppercase text-[oklch(0.42_0.13_240)] font-semibold">
              Servicios Premium
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(0.18_0.05_240)] max-w-lg leading-tight">
              Lujo sin
              <span className="italic text-[oklch(0.42_0.13_240)]"> compromisos</span>
            </h2>
            <p className="font-body text-[oklch(0.52_0.04_240)] max-w-sm leading-relaxed">
              Para quienes exigen lo mejor. Servicios exclusivos diseñados para hacer de tu estancia algo extraordinario.
            </p>
          </div>
        </div>

        {/* Services — Alternating Layout */}
        <div className="space-y-16 md:space-y-20">
          {luxuryServices.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-72 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.05_240/0.4)] to-transparent" />
                  {/* Highlight badge */}
                  <div className="absolute bottom-4 left-4 bg-[oklch(0.72_0.12_75)] text-[oklch(0.18_0.05_240)] px-4 py-2 rounded-full font-body text-sm font-bold">
                    {service.highlight}
                  </div>
                </div>
                {/* Decorative element */}
                <div className={`absolute -z-10 w-full h-full rounded-2xl bg-[oklch(0.93_0.02_220)] ${
                  index % 2 === 0 ? "top-4 left-4" : "top-4 right-4"
                }`} />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="font-body text-sm text-[oklch(0.42_0.13_240)] font-medium tracking-wide uppercase mb-2 block">
                  {service.subtitle}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-[oklch(0.18_0.05_240)] mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="font-body text-[oklch(0.52_0.04_240)] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.12_75)] flex-shrink-0" />
                      <span className="font-body text-sm text-[oklch(0.35_0.05_240)]">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <ReserveFormButton
                    service={service.title}
                    link={getBookingLink(service.title)}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full btn-primary font-body font-semibold text-sm"
                  >
                    <MessageCircle size={16} />
                    {service.cta}
                  </ReserveFormButton>
                  <a
                    href="#actividades"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[oklch(0.88_0.02_220)] text-[oklch(0.42_0.13_240)] font-body font-semibold text-sm hover:border-[oklch(0.42_0.13_240)] hover:bg-[oklch(0.93_0.02_220)] transition-all duration-200"
                  >
                    Ver más
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
