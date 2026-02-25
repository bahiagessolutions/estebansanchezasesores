"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  Users,
  Rocket,
  Scale,
  Monitor,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface ServiceFeature {
  text: string;
  href?: string;
  highlight?: string;
}

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: ServiceFeature[];
}

const services: Service[] = [
  {
    icon: BarChart3,
    title: "Asesoría Fiscal",
    description:
      "Planificación y gestión fiscal proactiva. No nos limitamos a presentar tus modelos (IVA, IRPF, Sociedades). Estudiamos tu negocio para maximizar tu ahorro fiscal y te defendemos ante Hacienda.",
    features: [
      { text: "Liquidaciones trimestrales y anuales" },
      { text: "Planificación fiscal estratégica" },
      { text: "Defensa ante inspecciones y requerimientos de la AEAT" },
    ],
  },
  {
    icon: BookOpen,
    title: "Asesoría Contable y VERIFACTU",
    description:
      "Tu contabilidad al día y sin errores. Llevanza de libros, cuentas anuales y balances con informes claros. Además, te adaptamos al nuevo sistema VERIFACTU de facturación electrónica verificable.",
    features: [
      { text: "Contabilidad financiera y cuentas anuales" },
      { text: "Informes de gestión personalizados" },
      { text: "Implantación VERIFACTU y facturación electrónica" },
    ],
  },
  {
    icon: Users,
    title: "Asesoría Laboral",
    description:
      "Gestión integral de tu equipo: nóminas, seguros sociales, contratos, altas y bajas. Incluimos la implantación del control horario digital obligatorio para tu empresa.",
    features: [
      { text: "Nóminas, seguros sociales y convenios" },
      { text: "Gestión de contratos, altas, bajas e IT" },
      { text: "Control horario digital (obligatorio)" },
    ],
  },
  {
    icon: Scale,
    title: "Jurídico Mercantil y Trámites",
    description:
      "Seguridad jurídica y cumplimiento de la normativa mercantil. Constitución de sociedades, altas de autónomos en 24h, protocolo familiar y gestión de la Campaña de la Renta.",
    features: [
      { text: "Constitución de sociedades y alta de autónomos" },
      { text: "Protocolo familiar y derecho societario" },
      { text: "Campaña de Renta y Patrimonio" },
    ],
  },
  {
    icon: Rocket,
    title: "Trámites Especiales",
    description:
      "Constitución rápida de Sociedades Limitadas (SL), altas de autónomos en 24h y gestión experta de la Campaña de la Renta. Herencias, donaciones y gestiones ante cualquier organismo.",
    features: [
      { text: "Herencias, donaciones y sucesiones" },
      { text: "Gestiones ante organismos públicos" },
      { text: "Certificados y representación ante la Administración" },
    ],
  },
  {
    icon: Monitor,
    title: "Transformación Digital",
    description:
      "Modernizamos tu empresa: VERIFACTU, control horario digital, firma digital, gestión documental en la nube, páginas web profesionales, SEO y Google Business Profile.",
    features: [
      { text: "Firma digital y certificado electrónico" },
      {
        text: "Control horario digital con Tictacdicta — precios especiales",
        href: "https://tictacdicta.es",
      },
      { text: "Web profesional, SEO y Google Business" },
      { text: "Gestión documental sin papeles" },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Nuestros servicios
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Soluciones integrales para tu negocio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-medium">
            Ofrecemos un asesoramiento personalizado que va más allá del simple
            cumplimiento normativo. Impulsamos el crecimiento de tu empresa.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <motion.article
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px -12px rgba(15, 31, 61, 0.15)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow"
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-pearl text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                  <service.icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-navy">{service.title}</h3>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-medium">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-5 space-y-2 border-t border-gray-50 pt-5">
                  {service.features.map((feature) => (
                    <li
                      key={feature.text}
                      className="flex items-start gap-2 text-xs font-medium text-slate-dark"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {feature.href ? (
                        <a
                          href={feature.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-navy underline decoration-gold/50 underline-offset-2 transition-colors hover:text-gold"
                        >
                          {feature.text}
                        </a>
                      ) : (
                        feature.text
                      )}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
