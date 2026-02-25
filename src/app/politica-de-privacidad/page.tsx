import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad | Esteban Sánchez Asesores",
  description:
    "Política de privacidad de Esteban Sánchez Asesores. Información sobre el tratamiento de datos personales conforme al RGPD.",
};

export default function PoliticaDePrivacidad() {
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
            Política de Privacidad
          </h1>
          <p className="mt-3 text-sm text-slate-medium">
            Última actualización: febrero de 2026
          </p>

          <div className="mt-12 space-y-10">
            {/* 1 */}
            <section>
              <h2 className="border-b border-gray-100 pb-3 text-lg font-bold text-navy">
                1. Responsable del tratamiento
              </h2>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-slate-dark">
                <li>
                  <strong className="font-semibold text-navy">Identidad:</strong>{" "}
                  Esteban Sánchez Asesores
                </li>
                <li>
                  <strong className="font-semibold text-navy">Dirección:</strong>{" "}
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
              </ul>
            </section>

            {/* 2 */}
            <section>
              <h2 className="border-b border-gray-100 pb-3 text-lg font-bold text-navy">
                2. Finalidad del tratamiento de datos
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-dark">
                En Esteban Sánchez Asesores tratamos la información que nos facilitan las personas interesadas con las siguientes finalidades:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-dark marker:text-gold">
                <li>Gestionar la relación comercial y los servicios de asesoría fiscal, contable, laboral y jurídico-mercantil contratados.</li>
                <li>Atender las solicitudes de información y consultas enviadas a través del formulario de contacto de la web.</li>
                <li>Enviar comunicaciones comerciales sobre nuestros servicios, siempre que el usuario haya prestado su consentimiento.</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="border-b border-gray-100 pb-3 text-lg font-bold text-navy">
                3. Base jurídica del tratamiento
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-dark">
                La base legal para el tratamiento de sus datos es el <strong className="font-semibold text-navy">consentimiento del interesado</strong> (art. 6.1.a RGPD) al enviar el formulario de contacto, así como la <strong className="font-semibold text-navy">ejecución de un contrato</strong> o relación precontractual (art. 6.1.b RGPD) cuando se trate de prestación de servicios de asesoría.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="border-b border-gray-100 pb-3 text-lg font-bold text-navy">
                4. Plazo de conservación de los datos
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-dark">
                Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o durante el tiempo necesario para cumplir con las obligaciones legales. Los datos de las consultas a través del formulario se conservarán durante un <strong className="font-semibold text-navy">máximo de 12 meses</strong> desde su recepción si no se formaliza relación comercial.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="border-b border-gray-100 pb-3 text-lg font-bold text-navy">
                5. Destinatarios de los datos
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-dark">
                Los datos <strong className="font-semibold text-navy">no se cederán a terceros</strong> salvo obligación legal. No se realizan transferencias internacionales de datos.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="border-b border-gray-100 pb-3 text-lg font-bold text-navy">
                6. Derechos del interesado
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-dark">
                Cualquier persona tiene derecho a obtener confirmación sobre si en Esteban Sánchez Asesores estamos tratando datos personales que le conciernan. Las personas interesadas tienen derecho a:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-dark marker:text-gold">
                <li><strong className="font-semibold text-navy">Acceder</strong> a sus datos personales.</li>
                <li>Solicitar la <strong className="font-semibold text-navy">rectificación</strong> de los datos inexactos o su <strong className="font-semibold text-navy">supresión</strong>.</li>
                <li>Solicitar la <strong className="font-semibold text-navy">limitación</strong> de su tratamiento.</li>
                <li><strong className="font-semibold text-navy">Oponerse</strong> al tratamiento.</li>
                <li>Solicitar la <strong className="font-semibold text-navy">portabilidad</strong> de los datos.</li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-slate-dark">
                Para ejercer estos derechos, puede dirigirse a{" "}
                <a href="mailto:estebansanchezasesores@gmail.com" className="font-semibold text-navy underline underline-offset-2 hover:text-gold">
                  estebansanchezasesores@gmail.com
                </a>{" "}
                adjuntando copia de su DNI o documento acreditativo de su identidad.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-dark">
                Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (
                <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="font-semibold text-navy underline underline-offset-2 hover:text-gold">
                  www.aepd.es
                </a>
                ).
              </p>
            </section>

            {/* 7 - Cookies */}
            <section>
              <h2 className="border-b border-gray-100 pb-3 text-lg font-bold text-navy">
                7. Cookies
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-dark">
                Este sitio web utiliza <strong className="font-semibold text-navy">cookies técnicas</strong> y de análisis. Las cookies técnicas son necesarias para el funcionamiento de la web, mientras que las de análisis nos permiten conocer el uso que hacen los visitantes del sitio para mejorar su experiencia.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-dark">
                El usuario puede aceptar o rechazar el uso de cookies no esenciales mediante el banner de cookies que se muestra al acceder al sitio. También puede configurar su navegador para bloquear o eliminar cookies.
              </p>
              {/* Cookie table */}
              <div className="mt-6 overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="px-4 py-3 font-semibold">Cookie</th>
                      <th className="px-4 py-3 font-semibold">Tipo</th>
                      <th className="px-4 py-3 font-semibold">Finalidad</th>
                      <th className="px-4 py-3 font-semibold">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-100 bg-pearl">
                      <td className="px-4 py-3 font-medium text-navy">cookie-consent</td>
                      <td className="px-4 py-3 text-slate-dark">Técnica</td>
                      <td className="px-4 py-3 text-slate-dark">Almacena la preferencia del usuario sobre cookies</td>
                      <td className="px-4 py-3 text-slate-dark">1 año</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 8 */}
            <section>
              <h2 className="border-b border-gray-100 pb-3 text-lg font-bold text-navy">
                8. Seguridad
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-dark">
                En Esteban Sánchez Asesores adoptamos las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="border-b border-gray-100 pb-3 text-lg font-bold text-navy">
                9. Modificaciones
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-dark">
                Esteban Sánchez Asesores se reserva el derecho de modificar la presente política de privacidad para adaptarla a novedades legislativas o jurisprudenciales. En dichos casos, se anunciará en esta página los cambios introducidos con razonable antelación a su puesta en práctica.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
