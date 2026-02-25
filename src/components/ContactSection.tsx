"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const serviceOptions = [
  "Asesoría Fiscal",
  "Asesoría Contable",
  "Asesoría Laboral",
  "Trámites Especiales",
  "Jurídico Mercantil",
  "Inspecciones Tributarias",
  "Declaración de la Renta",
  "Otro",
];

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  mensaje: string;
  honeypot: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [validationError, setValidationError] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationError) setValidationError("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) return;

    // Validate: require nombre + (email OR telefono)
    if (!formData.nombre.trim()) {
      setValidationError("Por favor, introduce tu nombre.");
      return;
    }
    if (!formData.email.trim() && !formData.telefono.trim()) {
      setValidationError(
        "Por favor, introduce al menos un email o un teléfono para que podamos contactarte."
      );
      return;
    }

    // Validate email format if provided
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setValidationError("Por favor, introduce un email válido.");
      return;
    }

    setStatus("sending");

    // Simulate sending
    setTimeout(() => {
      setStatus("success");
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        servicio: "",
        mensaje: "",
        honeypot: "",
      });
    }, 1500);
  };

  return (
    <section id="contacto" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold">
            Contacto
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Hablemos de tu proyecto
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-medium">
            Primera consulta gratuita y sin compromiso. Cuéntanos qué necesitas
            y te proponemos la mejor solución.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Contact info column */}
          <AnimatedSection className="lg:col-span-2" direction="left">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pearl text-navy">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">Email</p>
                  <a
                    href="mailto:estebansanchezasesores@gmail.com"
                    className="mt-1 text-sm text-slate-medium transition-colors hover:text-navy"
                  >
                    estebansanchezasesores@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pearl text-navy">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">Teléfono</p>
                  <a
                    href="tel:+34697519178"
                    className="mt-1 text-sm text-slate-medium transition-colors hover:text-navy"
                  >
                    697 519 178
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pearl text-navy">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">Dirección</p>
                  <a
                    href="https://maps.google.com/?q=Esteban+S%C3%A1nchez+Asesores,+Tr.%C2%AA+Alameda+de+Solano,+C.+Duelas,+11130+Chiclana+de+la+Frontera,+C%C3%A1diz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-slate-medium transition-colors hover:text-navy"
                  >
                    Tr.ª Alameda de Solano, C. Duelas
                    <br />
                    11130 Chiclana de la Frontera, Cádiz
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pearl text-navy">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">Horario</p>
                  <div className="mt-1 text-sm text-slate-medium space-y-0.5">
                    <p>Lunes: 9:00 – 14:30 / 16:00 – 19:00</p>
                    <p>Martes a Jueves: 9:00 – 14:00 / 16:00 – 19:00</p>
                    <p>Viernes: 9:00 – 14:00</p>
                    <p>Sábados y Domingos: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <iframe
                title="Ubicación de Esteban Sánchez Asesores"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3226.5!2d-6.1447872!3d36.4255331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEsteban+S%C3%A1nchez+Asesores!5e0!3m2!1ses!2ses!4v1700000000000"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </AnimatedSection>

          {/* Form column */}
          <AnimatedSection className="lg:col-span-3" direction="right">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg shadow-navy/5 sm:p-10"
              noValidate
            >
              {/* Honeypot */}
              <div className="honeypot-field" aria-hidden="true">
                <label htmlFor="honeypot">No rellenar</label>
                <input
                  type="text"
                  id="honeypot"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="space-y-6">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="nombre"
                    className="mb-2 block text-sm font-semibold text-navy"
                  >
                    Nombre completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-pearl px-4 py-3 text-sm text-navy outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/10"
                    placeholder="Ej: María García López"
                  />
                </div>

                {/* Email & Phone row */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-navy"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-pearl px-4 py-3 text-sm text-navy outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/10"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefono"
                      className="mb-2 block text-sm font-semibold text-navy"
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-pearl px-4 py-3 text-sm text-navy outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/10"
                      placeholder="697 519 178"
                    />
                  </div>
                </div>

                <p className="flex items-center gap-1.5 text-xs text-slate-medium">
                  <AlertCircle className="h-3.5 w-3.5" />
                  Introduce al menos un email o teléfono para que podamos
                  contactarte.
                </p>

                {/* Service select */}
                <div>
                  <label
                    htmlFor="servicio"
                    className="mb-2 block text-sm font-semibold text-navy"
                  >
                    Servicio de interés
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-pearl px-4 py-3 text-sm text-navy outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/10"
                  >
                    <option value="">Selecciona un servicio</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="mensaje"
                    className="mb-2 block text-sm font-semibold text-navy"
                  >
                    Mensaje{" "}
                    <span className="font-normal text-slate-medium">
                      (opcional)
                    </span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-gray-200 bg-pearl px-4 py-3 text-sm text-navy outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/10"
                    placeholder="Cuéntanos brevemente en qué podemos ayudarte..."
                  />
                </div>

                {/* Validation error */}
                {validationError && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {validationError}
                  </motion.p>
                )}

                {/* Success message */}
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
                  >
                    <CheckCircle className="h-4 w-4 shrink-0" />
                    ¡Mensaje enviado! Te contactaremos lo antes posible.
                  </motion.p>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-navy/25 transition-colors duration-300 hover:bg-navy-light disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Enviar mensaje
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
