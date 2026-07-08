/**
 * Activities — Vakatis Guest Relation
 * Design: Sol & Mar Editorial — cuadrícula editorial asimétrica de actividades
 * Filtros por categoría, tarjetas con imagen a sangre y overlay de gradiente
 * SIN precios — los clientes consultan por WhatsApp
 */
import { useState } from "react";
import { MessageCircle, Clock, Users, Star } from "lucide-react";
import ReserveFormButton from "@/components/ReserveFormButton";
import { getBookingLink } from "@/lib/bookingLinks";

const categories = ["Todas", "Mar", "Aventura", "Lujo", "Bienestar", "Gastronomía", "Traslados"];

const activities = [
  {
    id: 1,
    title: "Bote VIP con Bebidas y Frutas",
    category: "Mar",
    image: "/manus-storage/boat-vip_d37d4aa9.jpg",
    duration: "4-8 horas",
    group: "2-12 personas",
    rating: 5.0,
    description: "Navega por las aguas cristalinas del Mediterráneo a bordo de un lujoso bote privado. Incluye bebidas premium, frutas tropicales y servicio personalizado.",
    badge: "Más popular",
    badgeColor: "bg-[oklch(0.72_0.12_75)] text-[oklch(0.18_0.05_240)]",
  },
  {
    id: 2,
    title: "Excursión de Delfines",
    category: "Mar",
    image: "/manus-storage/dolphins_8685f6b7.jpg",
    duration: "3 horas",
    group: "Hasta 20 personas",
    rating: 4.9,
    description: "Una experiencia mágica para avistar delfines en su hábitat natural en el Estrecho de Gibraltar. Salida desde Puerto Banús o Marbella.",
    badge: "Imperdible",
    badgeColor: "bg-blue-500 text-white",
  },
  {
    id: 3,
    title: "Parapente con Lancha",
    category: "Aventura",
    image: "/manus-storage/paragliding_a9af5148.jpg",
    duration: "2 horas",
    group: "1-4 personas",
    rating: 4.8,
    description: "Vuela sobre las playas de Costa del Sol en parapente y luego disfruta de un paseo en lancha. La combinación perfecta de adrenalina y relax.",
    badge: "Adrenalina",
    badgeColor: "bg-orange-500 text-white",
  },
  {
    id: 4,
    title: "Caminito del Rey",
    category: "Aventura",
    image: "/manus-storage/caminito-del-rey_eaec08bc.jpg",
    duration: "5 horas",
    group: "Hasta 15 personas",
    rating: 4.9,
    description: "Recorre el famoso Caminito del Rey en Málaga, una pasarela espectacular sobre el desfiladero de los Gaitanes. Incluye traslado y guía.",
    badge: "Patrimonio",
    badgeColor: "bg-green-600 text-white",
  },
  {
    id: 5,
    title: "Alquiler de Autos de Lujo",
    category: "Lujo",
    image: "/manus-storage/luxury-cars_b7c5c4ac.jpg",
    duration: "Por día",
    group: "1-4 personas",
    rating: 5.0,
    description: "Ferrari, Porsche, BMW, Range Rover Sport. Recorre Costa del Sol al volante del auto de tus sueños con seguro completo incluido.",
    badge: "Exclusivo",
    badgeColor: "bg-[oklch(0.72_0.12_75)] text-[oklch(0.18_0.05_240)]",
  },
  {
    id: 6,
    title: "Masajes a Domicilio",
    category: "Bienestar",
    image: "/manus-storage/massage_581b07eb.jpg",
    duration: "60-120 min",
    group: "1-4 personas",
    rating: 5.0,
    description: "Terapeuta profesional a domicilio o en tu villa. Masaje relajante, deportivo o de tejido profundo. Disponible todos los días.",
    badge: "Relajación",
    badgeColor: "bg-purple-500 text-white",
  },
  {
    id: 7,
    title: "Restaurante Trocadero",
    category: "Gastronomía",
    image: "/manus-storage/restaurant-trocadero_6e45e642.jpg",
    duration: "2-3 horas",
    group: "2-20 personas",
    rating: 4.8,
    description: "Reserva en el icónico Restaurante Trocadero en primera línea de playa. Cocina mediterránea de autor con vistas al mar.",
    badge: "Gastronomía",
    badgeColor: "bg-red-500 text-white",
  },
  {
    id: 8,
    title: "Acuario en Costa del Sol",
    category: "Aventura",
    image: "/manus-storage/aquarium_5becfa68.jpg",
    duration: "2-3 horas",
    group: "Familiar",
    rating: 4.7,
    description: "Descubre la vida marina del Mediterráneo en el Acuario de Málaga. Perfecto para familias y amantes del océano.",
    badge: "Familiar",
    badgeColor: "bg-cyan-500 text-white",
  },
  {
    id: 9,
    title: "Buggies y Cuatriciclos",
    category: "Aventura",
    image: "/manus-storage/buggy-atv_2a7b59b2.jpg",
    duration: "2-4 horas",
    group: "2-8 personas",
    rating: 4.8,
    description: "Aventura off-road por los paisajes más espectaculares de la serranía malagueña. Ruta guiada con equipamiento completo.",
    badge: "Off-road",
    badgeColor: "bg-amber-600 text-white",
  },
  {
    id: 10,
    title: "Transfer Costa del Sol",
    category: "Traslados",
    image: "/manus-storage/transfer_96c3a132.jpg",
    duration: "Según destino",
    group: "1-8 personas",
    rating: 5.0,
    description: "Traslados privados en vehículos de lujo por toda la zona de Costa del Sol. Aeropuerto, hotel, eventos. Disponible 24/7.",
    badge: "24/7",
    badgeColor: "bg-slate-600 text-white",
  },
];

export default function Activities() {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeCategory === "Todas"
    ? activities
    : activities.filter((a) => a.category === activeCategory);

  return (
    <section id="actividades" className="py-20 md:py-28 bg-[oklch(0.99_0.002_240)]">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line w-12" />
            <span className="font-body text-sm tracking-widest uppercase text-[oklch(0.42_0.13_240)] font-semibold">
              Nuestras Actividades
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(0.18_0.05_240)] max-w-lg leading-tight">
              Experiencias únicas en
              <span className="italic text-[oklch(0.42_0.13_240)]"> Costa del Sol</span>
            </h2>
            <p className="font-body text-[oklch(0.52_0.04_240)] max-w-sm leading-relaxed">
              Cada actividad está cuidadosamente seleccionada para ofrecerte lo mejor del Mediterráneo.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[oklch(0.42_0.13_240)] text-white shadow-md"
                  : "bg-white text-[oklch(0.42_0.13_240)] border border-[oklch(0.88_0.02_220)] hover:border-[oklch(0.42_0.13_240)] hover:bg-[oklch(0.93_0.02_220)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((activity, index) => (
            <div
              key={activity.id}
              className="activity-card group"
              style={{ animationDelay: `${index * 60}ms` }}
              onMouseEnter={() => setHoveredId(activity.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden rounded-t-xl">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="card-overlay rounded-t-xl" />

                {/* Badge */}
                <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold font-body ${activity.badgeColor}`}>
                  {activity.badge}
                </span>

                {/* Rating */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Star size={11} fill="#C9A84C" className="text-[#C9A84C]" />
                  <span className="font-mono-price text-xs font-bold text-[oklch(0.18_0.05_240)]">
                    {activity.rating}
                  </span>
                </div>

                {/* Overlay content on hover */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
                    hoveredId === activity.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <p className="font-body text-white/90 text-sm leading-relaxed line-clamp-2">
                    {activity.description}
                  </p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-[oklch(0.18_0.05_240)] mb-2 leading-snug">
                  {activity.title}
                </h3>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-[oklch(0.52_0.04_240)]">
                    <Clock size={13} />
                    <span className="font-body text-xs">{activity.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[oklch(0.52_0.04_240)]">
                    <Users size={13} />
                    <span className="font-body text-xs">{activity.group}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[oklch(0.88_0.02_220)]">
                  <div>
                    <span className="font-body text-sm font-medium text-[oklch(0.42_0.13_240)]">
                      Consultar disponibilidad
                    </span>
                  </div>
                  <ReserveFormButton
                    service={activity.title}
                    link={getBookingLink(activity.title)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[oklch(0.42_0.13_240)] text-white font-body text-sm font-semibold hover:bg-[oklch(0.35_0.12_240)] transition-all duration-200 hover:shadow-lg"
                  >
                    <MessageCircle size={14} />
                    Reservar
                  </ReserveFormButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
