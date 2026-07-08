/**
 * WhyUs — Vakatis Guest Relation
 * Design: Sol & Mar Editorial — sección de propuesta de valor
 * Ubicado justo después del formulario de reservas
 */
import { Shield, Clock, Award, UserCheck, Languages, Trophy } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Seguridad garantizada",
    description: "Todas nuestras actividades cumplen con los más altos estándares de seguridad. Personal certificado y equipamiento de primera calidad.",
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description: "Estamos disponibles todos los días del año. Reserve con antelación o en el último momento — siempre encontraremos una solución.",
  },
  {
    icon: Award,
    title: "Experiencias premium",
    description: "Seleccionamos solo lo mejor de Costa del Sol. Cada actividad es cuidadosamente elegida para superar tus expectativas.",
  },
  {
    icon: UserCheck,
    title: "Servicio personalizado",
    description: "Tu experiencia es única. Adaptamos cada actividad a tus necesidades, preferencias y presupuesto.",
  },
  {
    icon: Languages,
    title: "Atención multilingüe",
    description: "Nuestro equipo habla español, inglés, francés y árabe. Comunicación clara y fluida sin barreras.",
  },
  {
    icon: Trophy,
    title: "Líderes en Costa del Sol",
    description: "Años de experiencia en el sector turístico de lujo nos avalan. Más de 500 clientes satisfechos nos recomiendan.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-[oklch(0.97_0.01_220)]">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="gold-line w-12" />
            <span className="font-body text-sm tracking-widest uppercase text-[oklch(0.42_0.13_240)] font-semibold">
              Por qué elegirnos
            </span>
            <div className="gold-line w-12" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(0.18_0.05_240)] leading-tight mb-4">
            La diferencia
            <span className="italic text-[oklch(0.42_0.13_240)]"> Vakatis</span>
          </h2>
          <p className="font-body text-[oklch(0.52_0.04_240)] text-lg leading-relaxed">
            No somos una agencia de viajes convencional. Somos tus anfitriones en Costa del Sol, 
            comprometidos con hacer de tu estancia una experiencia inolvidable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-[oklch(0.88_0.02_220)] hover:border-[oklch(0.72_0.12_75/0.3)]"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[oklch(0.93_0.02_220)] flex items-center justify-center mb-4 group-hover:bg-[oklch(0.42_0.13_240)] transition-colors duration-300">
                <feature.icon size={22} className="text-[oklch(0.42_0.13_240)] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-bold text-[oklch(0.18_0.05_240)] mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-[oklch(0.52_0.04_240)] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="vakatis-gradient rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Clientes felices" },
              { value: "15+", label: "Actividades únicas" },
              { value: "5★", label: "Valoración media" },
              { value: "24/7", label: "Disponibilidad" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-white/60 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
