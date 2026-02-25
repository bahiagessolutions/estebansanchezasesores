"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

interface NavbarProps {
  solid?: boolean;
}

export default function Navbar({ solid = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(solid);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (solid) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [solid]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-navy/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group"
            aria-label="Inicio"
          >
            <Image
              src="/logoHorizontal.svg"
              alt="Esteban Sánchez Asesores"
              width={180}
              height={40}
              className={`h-10 w-auto transition-opacity duration-500 absolute ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
              priority
            />
            <Image
              src="/logoHorizontal-white.svg"
              alt="Esteban Sánchez Asesores"
              width={180}
              height={40}
              className={`h-10 w-auto transition-opacity duration-500 ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-gold ${
                  scrolled ? "text-slate-dark" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <motion.a
              href="tel:+34697519178"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-navy/25 transition-colors duration-300 hover:bg-navy-light"
            >
              <Phone className="h-4 w-4" />
              Llámanos
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-navy" : "text-white"
            }`}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={
            mobileOpen
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden md:hidden"
        >
          <div className="pb-6 pt-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-slate-dark hover:bg-pearl"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+34697519178"
              onClick={handleLinkClick}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              Llámanos
            </a>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
