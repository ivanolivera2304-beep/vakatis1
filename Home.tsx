/**
 * Footer — Vakatis Guest Relation
 * Design: Sol & Mar Editorial — footer azul marino con logo, links y políticas
 */
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const WHATSAPP_URL = "https://w.app/p2fix0";

const activities = [
  "Bote VIP con Bebidas",
  "Excursión de Delfines",
  "Parapente con Lancha",
  "Caminito del Rey",
  "Alquiler Autos de Lujo",
  "Masajes a Domicilio",
  "Restaurante Trocadero",
  "Transfer Costa del Sol",
  "Acuario Costa del Sol",
  "Buggies y Cuatriciclos",
];

const policies = [
  { label: "Política de cancelación", href: "#" },
  { label: "Términos y condiciones", href: "#" },
  { label: "Política de privacidad", href: "#" },
  { label: "Aviso legal", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[oklch(0.12_0.04_240)]">
      {/* Main Footer */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src="/manus-storage/vakatis-logo_79e1e5f7.png"
              alt="Vakatis Guest Relation"
              className="h-14 w-auto object-contain mb-5"
            />
            <p className="font-body text-white/60 text-sm leading-relaxed mb-6">
              Tu puerta de entrada a las experiencias más exclusivas de Costa del Sol. 
              Lujo, aventura y bienestar en el corazón del Mediterráneo.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[oklch(0.72_0.12_75)] hover:text-[oklch(0.18_0.05_240)] transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[oklch(0.72_0.12_75)] hover:text-[oklch(0.18_0.05_240)] transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#25D366] hover:text-white transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Activities Column */}
          <div>
            <h4 className="font-display text-white font-bold text-lg mb-5">Actividades</h4>
            <ul className="space-y-2.5">
              {activities.map((act) => (
                <li key={act}>
                  <a
                    href="#actividades"
                    className="font-body text-white/55 text-sm hover:text-[oklch(0.72_0.12_75)] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[oklch(0.72_0.12_75)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {act}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies Column */}
          <div>
            <h4 className="font-display text-white font-bold text-lg mb-5">Información</h4>
            <ul className="space-y-2.5 mb-8">
              {policies.map((policy) => (
                <li key={policy.label}>
                  <a
                    href={policy.href}
                    className="font-body text-white/55 text-sm hover:text-[oklch(0.72_0.12_75)] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[oklch(0.72_0.12_75)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {policy.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Policy highlights */}
            <div className="space-y-3">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="font-body text-white/80 text-xs font-semibold mb-1">Cancelación gratuita</p>
                <p className="font-body text-white/50 text-xs">Hasta 24h antes de la actividad</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="font-body text-white/80 text-xs font-semibold mb-1">Pago seguro</p>
                <p className="font-body text-white/50 text-xs">Transferencia, tarjeta o efectivo</p>
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display text-white font-bold text-lg mb-5">Contacto</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[oklch(0.72_0.12_75)] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-white/80 text-sm font-medium">Costa del Sol</p>
                  <p className="font-body text-white/50 text-xs">Málaga, España</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-[oklch(0.72_0.12_75)] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-white/80 text-sm font-medium">+34 636 85 26 84</p>
                  <p className="font-body text-white/50 text-xs">Disponible 24/7</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[oklch(0.72_0.12_75)] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-white/80 text-sm font-medium">info@vakatis.com</p>
                  <p className="font-body text-white/50 text-xs">Respuesta en menos de 2h</p>
                </div>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-body text-sm font-semibold hover:bg-[#1da851] transition-all duration-200 w-full justify-center"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escríbenos ahora
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-white/40 text-xs text-center md:text-left">
            © 2024 Vakatis Guest Relation. Todos los derechos reservados.
          </p>
          <p className="font-body text-white/40 text-xs text-center">
            Costa del Sol, Málaga, España · Actividades turísticas de lujo
          </p>
          <div className="flex items-center gap-4">
            {policies.slice(0, 2).map((p) => (
              <a key={p.label} href={p.href} className="font-body text-white/40 text-xs hover:text-white/70 transition-colors">
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
