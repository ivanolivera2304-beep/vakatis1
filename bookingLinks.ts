/**
 * Booking — Vakatis Guest Relation
 * Design: Sol & Mar Editorial — sección de reservas con fondo azul marino y formulario
 * Integración directa con WhatsApp https://w.app/p2fix0
 */
import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, Send } from "lucide-react";
import { FORMSUBMIT_URL, getBookingLink } from "@/lib/bookingLinks";

const WHATSAPP_URL = "https://w.app/p2fix0";

const activityOptions = [
  "Bote VIP con Bebidas y Frutas",
  "Excursión de Delfines",
  "Parapente con Lancha",
  "Buggies y Cuatriciclos",
  "Caminito del Rey",
  "Restaurante Trocadero",
  "Masajes a Domicilio",
  "Alquiler de Autos de Lujo",
  "Transfer Costa del Sol",
  "Acuario en Costa del Sol",
  "Otra actividad / Consulta general",
];

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    activity: "",
    date: "",
    guests: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = encodeURIComponent(
      `¡Hola Vakatis! Me gustaría reservar:\n\n` +
      `👤 Nombre: ${form.name}\n` +
      `📧 Email: ${form.email}\n` +
      `📱 Teléfono: ${form.phone}\n` +
      `🎯 Actividad: ${form.activity}\n` +
      `📅 Fecha deseada: ${form.date}\n` +
      `👥 Personas: ${form.guests}\n` +
      `💬 Mensaje: ${form.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="reservas" className="py-20 md:py-28 vakatis-gradient">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="gold-line w-12" />
              <span className="font-body text-sm tracking-widest uppercase text-[oklch(0.72_0.12_75)] font-semibold">
                Reservas
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Reserva tu
              <br />
              <span className="italic text-[oklch(0.85_0.12_75)]">experiencia perfecta</span>
            </h2>
            <p className="font-body text-white/75 text-lg leading-relaxed mb-8">
              Completa el formulario y te contactaremos en menos de 2 horas para confirmar tu reserva. 
              También puedes escribirnos directamente por WhatsApp.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {[
                { icon: MessageCircle, label: "WhatsApp", value: "Disponible 24/7", href: WHATSAPP_URL },
                { icon: Phone, label: "Teléfono", value: "+34 636 85 26 84", href: "tel:+34636852684" },
                { icon: Mail, label: "Email", value: "info@vakatis.com", href: "mailto:info@vakatis.com" },
                { icon: MapPin, label: "Zona", value: "Costa del Sol, España", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[oklch(0.72_0.12_75)] transition-colors duration-200">
                    <item.icon size={18} className="text-[oklch(0.72_0.12_75)] group-hover:text-[oklch(0.18_0.05_240)]" />
                  </div>
                  <div>
                    <div className="font-body text-white/50 text-xs uppercase tracking-wide">{item.label}</div>
                    <div className="font-body text-white font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-body font-semibold text-base shadow-xl hover:bg-[#1da851] transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Consultar por WhatsApp
            </a>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
            <h3 className="font-display text-2xl font-bold text-[oklch(0.18_0.05_240)] mb-6">
              Solicitar reserva
            </h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-green-600" />
                </div>
                <h4 className="font-display text-xl font-bold text-[oklch(0.18_0.05_240)] mb-2">
                  ¡Solicitud enviada!
                </h4>
                <p className="font-body text-[oklch(0.52_0.04_240)]">
                  Recibimos la solicitud y se abrirá el enlace correspondiente para continuar la reserva.
                </p>
              </div>
            ) : (
              <form action={FORMSUBMIT_URL} method="POST" target="_blank" onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="_subject" value={`Nueva solicitud de reserva: ${form.activity || "Consulta general"}`} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={getBookingLink(form.activity)} />
                <input type="hidden" name="Enlace de reserva/contacto" value={getBookingLink(form.activity)} />
                <input type="hidden" name="Origen" value="Formulario principal del sitio web Vakatis Guest Relations" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm font-medium text-[oklch(0.35_0.05_240)] mb-1.5 block">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl border border-[oklch(0.88_0.02_220)] font-body text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.42_0.13_240)] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-[oklch(0.35_0.05_240)] mb-1.5 block">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                      className="w-full px-4 py-3 rounded-xl border border-[oklch(0.88_0.02_220)] font-body text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.42_0.13_240)] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-sm font-medium text-[oklch(0.35_0.05_240)] mb-1.5 block">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-[oklch(0.88_0.02_220)] font-body text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.42_0.13_240)] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="font-body text-sm font-medium text-[oklch(0.35_0.05_240)] mb-1.5 block">
                    Actividad de interés *
                  </label>
                  <select
                    name="activity"
                    required
                    value={form.activity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[oklch(0.88_0.02_220)] font-body text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.42_0.13_240)] focus:border-transparent transition-all bg-white"
                  >
                    <option value="" disabled>Selecciona una actividad</option>
                    {activityOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm font-medium text-[oklch(0.35_0.05_240)] mb-1.5 block">
                      Fecha deseada
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[oklch(0.88_0.02_220)] font-body text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.42_0.13_240)] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-[oklch(0.35_0.05_240)] mb-1.5 block">
                      N.º de personas
                    </label>
                    <input
                      type="number"
                      name="guests"
                      min="1"
                      max="50"
                      value={form.guests}
                      onChange={handleChange}
                      placeholder="1"
                      className="w-full px-4 py-3 rounded-xl border border-[oklch(0.88_0.02_220)] font-body text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.42_0.13_240)] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-sm font-medium text-[oklch(0.35_0.05_240)] mb-1.5 block">
                    Mensaje adicional
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos más sobre lo que buscas..."
                    className="w-full px-4 py-3 rounded-xl border border-[oklch(0.88_0.02_220)] font-body text-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.42_0.13_240)] focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl btn-primary font-body font-semibold text-base flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle size={18} />
                  Enviar solicitud
                </button>

                <p className="font-body text-[oklch(0.65_0.04_240)] text-xs text-center">
                  Al enviar, recibiremos una alerta por email y se abrirá el enlace de reserva o contacto correspondiente.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
