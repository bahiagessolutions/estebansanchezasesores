import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/logoHorizontal-white.svg"
              alt="Esteban Sánchez Asesores"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Tu asesoría integral de confianza en Chiclana de la Frontera.
              Ayudamos a autónomos y empresas de la Bahía de Cádiz a crecer
              con seguridad fiscal, laboral y contable.
            </p>
            {/* Social links */}
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61578304210929"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/60 transition-colors hover:bg-white/20 hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a
                href="https://www.instagram.com/estebansanchezasesores/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/60 transition-colors hover:bg-white/20 hover:text-white"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">
              Navegación
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#servicios", label: "Servicios" },
                { href: "#nosotros", label: "Nosotros" },
                { href: "#contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">
              Contacto
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:estebansanchezasesores@gmail.com" className="hover:text-white transition-colors">
                  estebansanchezasesores@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+34697519178" className="hover:text-white transition-colors">
                  697 519 178
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Tr.ª Alameda de Solano, C. Duelas, 11130 Chiclana de la Fra., Cádiz</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/40">
            &copy; {currentYear} Esteban Sánchez Asesores. Todos los derechos
            reservados. |{" "}
            <a href="/politica-de-privacidad" className="underline transition-colors hover:text-white/60">
              Política de Privacidad
            </a>{" "}
            |{" "}
            <a href="/aviso-legal" className="underline transition-colors hover:text-white/60">
              Aviso Legal
            </a>
          </p>
          <p className="mt-3 text-xs text-white/30">
            Desarrollado por{" "}
            <a
              href="https://wa.me/34613139737"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 underline decoration-white/20 underline-offset-2 transition-colors hover:text-white/70"
            >
              Sergio Real
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
