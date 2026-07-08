/**
 * Gallery — Vakatis Guest Relation
 * Design: Sol & Mar Editorial — galería masonry con lightbox
 * TODAS las imágenes son ÚNICAS y no se repiten en ninguna otra sección del sitio
 */
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    src: "/manus-storage/gallery-sunset-port_602ccebf.jpg",
    alt: "Puerto Banús al atardecer",
    label: "Puerto Banús",
    size: "large",
  },
  {
    id: 2,
    src: "/manus-storage/gallery-cliff-view_094476ef.jpg",
    alt: "Mirador costero cerca de Marbella",
    label: "Miradores",
    size: "medium",
  },
  {
    id: 3,
    src: "/manus-storage/gallery-villa-pool_c41b7e4f.jpg",
    alt: "Villa de lujo con piscina infinita",
    label: "Villas de Lujo",
    size: "medium",
  },
  {
    id: 4,
    src: "/manus-storage/gallery-old-town-malaga_8fe74737.jpg",
    alt: "Centro histórico de Málaga",
    label: "Málaga Centro",
    size: "large",
  },
  {
    id: 5,
    src: "/manus-storage/gallery-flamenco_33c548bd.jpg",
    alt: "Flamenco andaluz en Málaga",
    label: "Flamenco",
    size: "medium",
  },
  {
    id: 6,
    src: "/manus-storage/gallery-golf-course_6b80e09a.jpg",
    alt: "Campos de golf en Costa del Sol",
    label: "Golf",
    size: "medium",
  },
  {
    id: 7,
    src: "/manus-storage/gallery-underwater-coral_fcb3da2e.jpg",
    alt: "Vida marina del Mediterráneo",
    label: "Vida Marina",
    size: "medium",
  },
  {
    id: 8,
    src: "/manus-storage/gallery-market-atarte_0f15a62e.jpg",
    alt: "Mercado local en Málaga",
    label: "Mercados Locales",
    size: "medium",
  },
  {
    id: 9,
    src: "/manus-storage/gallery-water-sports_f1d26a43.jpg",
    alt: "Deportes acuáticos en Costa del Sol",
    label: "Deportes Acuáticos",
    size: "large",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (id: number) => setLightbox(id);
  const closeLightbox = () => setLightbox(null);
  const currentItem = galleryItems.find((i) => i.id === lightbox);

  return (
    <section id="galeria" className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="gold-line w-12" />
            <span className="font-body text-sm tracking-widest uppercase text-[oklch(0.42_0.13_240)] font-semibold">
              Galería
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(0.18_0.05_240)] max-w-lg leading-tight">
              Momentos que
              <span className="italic text-[oklch(0.42_0.13_240)]"> perduran</span>
            </h2>
            <p className="font-body text-[oklch(0.52_0.04_240)] max-w-sm leading-relaxed">
              Cada imagen cuenta una historia. Estas son algunas de las experiencias que te esperan en Costa del Sol.
            </p>
          </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid relative group overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openLightbox(item.id)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  item.size === "large" ? "h-72 md:h-80" : "h-48 md:h-56"
                }`}
              />
              <div className="absolute inset-0 bg-[oklch(0.18_0.05_240/0)] group-hover:bg-[oklch(0.18_0.05_240/0.5)] transition-all duration-300 rounded-xl flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                  <ZoomIn size={28} className="text-white" />
                  <span className="font-body text-white font-semibold text-sm">{item.label}</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[oklch(0.18_0.05_240/0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl">
                <span className="font-body text-white text-sm font-medium">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && currentItem && (
        <div
          className="fixed inset-0 z-50 bg-[oklch(0.05_0.02_240/0.95)] backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentItem.src}
              alt={currentItem.alt}
              className="w-full h-full object-contain rounded-xl max-h-[80vh]"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[oklch(0.18_0.05_240/0.8)] to-transparent rounded-b-xl">
              <p className="font-display text-white text-xl font-bold">{currentItem.label}</p>
            </div>
            <button
              onClick={closeLightbox}
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/40 transition-colors"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
