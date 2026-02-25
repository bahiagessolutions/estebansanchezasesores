"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "34697519178";
  const message = encodeURIComponent(
    "Hola, me gustaría solicitar información sobre vuestros servicios de asesoría."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.4, ease: "backOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-green-600/30 transition-shadow hover:shadow-2xl hover:shadow-green-600/40"
    >
      {/* WhatsApp official icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-7 w-7"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.052 9.38L1.056 31.2l6.06-1.94A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.336 22.594c-.39 1.1-1.932 2.014-3.164 2.28-.844.18-1.944.322-5.652-1.216-4.746-1.966-7.8-6.778-8.036-7.094-.228-.316-1.912-2.548-1.912-4.86s1.212-3.448 1.642-3.922c.39-.432.912-.556 1.18-.556.148 0 .282.008.402.014.43.018.646.044.93.72.354.846 1.218 2.968 1.324 3.184.108.216.216.508.068.794-.14.294-.264.476-.48.73-.216.254-.424.448-.64.722-.196.24-.416.496-.172.93.244.428 1.084 1.788 2.328 2.896 1.6 1.424 2.912 1.882 3.396 2.078.352.142.77.108 1.022-.156.32-.34.714-.902 1.116-1.458.286-.396.648-.446 1.04-.298.398.142 2.514 1.186 2.944 1.402.43.216.716.322.822.502.104.178.104 1.04-.288 2.14v-.032Z" />
      </svg>

      {/* Pulse ring */}
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
    </motion.a>
  );
}
