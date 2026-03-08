"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy"
    >
      {/* Background image */}
      <Image
        src="/portada.jpeg"
        alt="Esteban Sánchez Asesores — Oficina"
        fill
        className="object-cover object-[center_top] sm:object-[center_top]"
        priority
        quality={85}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/85 via-navy/80 to-navy-light/75" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/80 backdrop-blur-sm">
            Asesoría integral de confianza
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Tu Asesoría Integral:
          <br />
          <span className="text-gold">Contable, Fiscal y Laboral</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl"
        >
          Nos ocupamos de todas las gestiones y optimizamos tus impuestos para que
          tú te enfoques en lo que de verdad importa:{" "}
          <strong className="text-white/90">hacer crecer tu negocio.</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wider text-navy shadow-xl shadow-gold/20 transition-colors duration-300 hover:bg-amber-400"
          >
            Pide tu presupuesto sin compromiso
          </motion.a>
          <motion.a
            href="#servicios"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white/90 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
          >
            Descubre nuestros servicios
          </motion.a>
        </motion.div>
      </div>


    </section>
  );
}
