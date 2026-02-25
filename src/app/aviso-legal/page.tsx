import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aviso Legal | Esteban Sánchez Asesores",
  description:
    "Aviso legal e información sobre las condiciones de uso del sitio web de Esteban Sánchez Asesores.",
};

export default function AvisoLegal() {
  return (
    <>
      <Navbar solid />
      <main className="bg-white pt-32 pb-24 sm:pt-40 sm:pb-32">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-pearl px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-gray-100"
          >
            <span>&larr;</span> Volver al inicio
          </Link>

          <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Aviso Legal
          </h1>
          <p className="mt-3 text-sm text-slate-medium">
            Última actualización: febrero de 2026
          </p>

          <div className="mt-12 space-y-10">
            {/* 1 */}
            <section>
              <h2 className="border-b border-gray-100 pb-3 text-lg font-bold text-navy">
                1. Datos identificativos
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-dark">
                En cumplimiento del deber de información recogido en el artículo 10 de la <strong className="font-semibold text-navy">Ley 34/2002, de 11 de julio</strong>, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), a continuación se reflejan los siguientes datos:
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-dark">
                <li>
                  <strong className="font-semibold text-navy">Titular:</strong>{" "}
                  Esteban Sánchez Asesores
                </li>
                <li>
                  <strong className="font-semibold text-navy">Domicilio:</strong>{" "}
                  Tr.ª Alameda de Solano, C. Duelas, 11130 Chiclana de la Frontera, Cádiz
                </li>
                <li>
                  <strong className="font-semibold text-navy">Teléfono:</strong>{" "}
                  697 519 178
                </li>
                <li>
                  <strong className="font-semibold text-navy">Email:</strong>{" "}
                  <a href="mailto:estebansanchezasesores@gmail.com" className="text-navy underline underline-offset-2 hover:text-gold">
                    estebansanchezasesores@gmail.com
                  </a>
                </li>
                <li>
                  <strong className="font-semibold text-navy">Sitio web:</strong>{" "}
                  <a href="https://estebansanchezasesores.com" className="text-navy underline underline-offset-2 hover:text-gold">
                    estebansanchezasesores.com
                  </a>
                </li>
              </ul>
            </section>

            {/* 2 */}
            <section>
              <h2 className="border-b border-gray-100 pb-3 text-lg font-bold text-navy">
                2. Objeto
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-dark">
                El presente aviso legal regula el uso y acceso al sitio web <strong className="font-semibold text-navy">estebansanchezasesores.com</strong> (en adelante, &quot;el sitio web&quot;), que Esteban Sánchez Asesores pone a disposición de los usuarios de Internet.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-dark">
                El acceso al sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este aviso legal.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="border-b border-gray-100 pb-3 text-lg font-bold text-navy">
                3. Propiedad intelectual e industrial
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-dark">
                Todos los contenidos del sitio web, incluyendo a título enunciativo pero no limitativo: textos, fotografías, gráficos, imágenes, iconos, tecnología, software, diseño gráfico, código fuente y logotipos son propiedad de <strong className="font-semibold text-navy">Esteban Sánchez Asesores</strong> o de terceros que han autorizado su uso, y están protegidos por las leyes de propiedad intelectual e industrial.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-dark">
                Queda <strong className="font-semibold text-navy">prohibida</strong> su reproducción, distribución, comunicación pública, transformación o cualquier otra actividad que se pueda realizar con los contenidos del sitio web sin autorización previa y por escrito de Esteban Sánchez Asesores.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="border-b border-gray-100 pb-3 text-lg font-bold text-navy">
                4. Condiciones de uso
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-dark">
                El usuario se compromete a:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-dark marker:text-gold">
                <li>Hacer un uso adecuado de los contenidos y servicios ofrecidos en el sitio web, absteniéndose de emplearlos para actividades ilícitas o contrarias a la buena fe.</li>
                <li>No realizar actividades que puedan dañar, inutilizar, sobrecargar o deteriorar el sitio web o impedir la normal utilización por parte de otros usuarios.</li>
                <li>No introducir programas, virus, macros o cualquier otro dispositivo lógico o secuencia de caracteres que causen o puedan causar alteraciones en los sistemas informáticos.</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="border-b border-gray-100 pb-3 text-lg font-bold text-navy">
                5. Exclusión de responsabilidad
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-dark">
                Esteban Sánchez Asesores no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse de:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-dark marker:text-gold">
                <li>La falta de disponibilidad, mantenimiento y efectivo funcionamiento del sitio web o de sus servicios y contenidos.</li>
                <li>La existencia de virus, programas maliciosos o lesivos en los contenidos.</li>
                <li>El uso ilícito, negligente, fraudulento o contrario al presente aviso legal.</li>
                <li>La falta de licitud, calidad, fiabilidad y utilidad de los contenidos prestados por terceros a través del sitio web.</li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="border-b border-gray-100 pb-3 text-lg font-bold text-navy">
                6. Enlaces a terceros
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-dark">
                El sitio web puede contener enlaces a páginas web de terceros. Esteban Sánchez Asesores <strong className="font-semibold text-navy">no asume ninguna responsabilidad</strong> por el contenido, informaciones o servicios que pudieran aparecer en dichos sitios, que se facilitan exclusivamente a título informativo y que en ningún caso implican relación alguna entre Esteban Sánchez Asesores y las personas o entidades titulares de tales contenidos.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="border-b border-gray-100 pb-3 text-lg font-bold text-navy">
                7. Protección de datos
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-dark">
                Para todo lo relacionado con el tratamiento de datos personales, consulte nuestra{" "}
                <Link href="/politica-de-privacidad" className="font-semibold text-navy underline underline-offset-2 hover:text-gold">
                  Política de Privacidad
                </Link>.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="border-b border-gray-100 pb-3 text-lg font-bold text-navy">
                8. Legislación aplicable y jurisdicción
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-dark">
                Para la resolución de cualquier controversia o conflicto derivado del presente aviso legal, será de aplicación la <strong className="font-semibold text-navy">legislación española</strong>, siendo competentes los <strong className="font-semibold text-navy">Juzgados y Tribunales de Cádiz</strong>.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
