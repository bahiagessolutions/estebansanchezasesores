"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[60] border-t border-gray-200 bg-white px-4 py-5 shadow-2xl shadow-navy/10 sm:px-6"
        >
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <p className="flex-1 text-sm leading-relaxed text-slate-600">
              Utilizamos cookies propias y de terceros para mejorar tu
              experiencia de navegación y analizar el tráfico. Puedes aceptar
              todas las cookies o rechazarlas. Más información en nuestra{" "}
              <a
                href="/politica-de-privacidad"
                className="font-medium text-navy underline underline-offset-2 hover:text-gold"
              >
                Política de Privacidad
              </a>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={reject}
                className="rounded-full border border-gray-300 px-5 py-2.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-gray-50"
              >
                Rechazar
              </button>
              <button
                onClick={accept}
                className="rounded-full bg-navy px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-navy-light"
              >
                Aceptar cookies
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
