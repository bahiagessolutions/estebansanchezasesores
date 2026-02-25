"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Globe, Eye, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

const reasons = [
  {
    icon: MessageCircle,
    title: "Trato directo y sin jerga",
    description:
      "Hablas directamente con tu asesor, sin intermediarios. Te explicamos todo en un lenguaje claro, sin tecnicismos innecesarios, para que entiendas cada decisión que afecta a tu negocio.",
  },
  {
    icon: Globe,
    title: "Gestión 100% online o presencial",
    description:
      "Tú eliges cómo prefieres trabajar. Nos adaptamos a ti con herramientas digitales seguras para gestionar todo a distancia, o te atendemos en persona en nuestra oficina.",
  },
  {
    icon: Eye,
    title: "Transparencia total en honorarios",
    description:
      "Sin sorpresas ni letra pequeña. Desde el primer día conoces exactamente qué incluyen nuestros servicios y cuánto cuestan. Honorarios claros y competitivos.",
  },
  {
    icon: Zap,
    title: "Agilidad en las respuestas",
    description:
      "Respondemos tus consultas en menos de 24 horas. Sabemos que el tiempo es dinero y que una duda fiscal no puede esperar una semana. Estamos cuando nos necesitas.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function WhyUsSection() {
  return (
    <section id="nosotros" className="bg-pearl py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            ¿Por qué elegirnos?
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Comprometidos con tu futuro
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-medium">
            No somos una asesoría más. Somos el socio estratégico que tu negocio
            necesita para crecer con seguridad y tranquilidad.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-8 sm:grid-cols-2"
        >
          {reasons.map((reason) => (
            <motion.div key={reason.title} variants={itemVariants}>
              <div className="flex h-full gap-5 rounded-2xl bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                  <reason.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-medium">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats bar */}
        <AnimatedSection className="mt-16" delay={0.3}>
          <div className="grid grid-cols-3 gap-6 rounded-2xl bg-navy p-8 text-center sm:p-12">
            <div>
              <p className="text-3xl font-bold text-gold sm:text-4xl">
                <AnimatedCounter target={100} prefix="+" />
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60">
                Clientes satisfechos
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gold sm:text-4xl">
                <AnimatedCounter target={5} prefix="+" />
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60">
                Años de experiencia
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gold sm:text-4xl">
                <span>&lt;</span><AnimatedCounter target={24} suffix="h" />
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60">
                Tiempo de respuesta
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
