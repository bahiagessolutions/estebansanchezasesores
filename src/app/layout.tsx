import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://estebansanchezasesores.com"
  ),
  title:
    "Esteban Sánchez Asesores | Asesoría Fiscal, Laboral y Contable en Chiclana de la Frontera",
  description:
    "Asesoría fiscal, contable, laboral y jurídico-mercantil en Chiclana de la Frontera y la Bahía de Cádiz. Servicios para autónomos, pymes y empresas: declaración de la renta, nóminas, IVA, constitución de sociedades, VERIFACTU y digitalización. Primera consulta gratuita.",
  keywords: [
    "asesoría fiscal Chiclana de la Frontera",
    "asesoría laboral Chiclana",
    "asesoría contable Cádiz",
    "gestoría Chiclana de la Frontera",
    "asesores fiscales Bahía de Cádiz",
    "asesoría Chiclana",
    "gestoría Cádiz",
    "gestión de nóminas Chiclana",
    "declaración de la renta Cádiz",
    "constitución de sociedades Chiclana",
    "alta autónomos Cádiz",
    "asesoría pymes Bahía de Cádiz",
    "VERIFACTU",
    "asesoría fiscal Cádiz",
    "asesoría laboral Cádiz",
    "IVA",
    "IRPF",
    "impuesto de sociedades",
    "Esteban Sánchez Asesores",
    "asesoría integral Chiclana",
    "herencias y donaciones Cádiz",
    "firma digital Chiclana",
  ],
  authors: [{ name: "Esteban Sánchez Asesores" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Esteban Sánchez Asesores | Asesoría en Chiclana de la Frontera",
    description:
      "Tu asesoría integral de confianza en Chiclana y la Bahía de Cádiz. Fiscal, laboral, contable y jurídico-mercantil. Primera consulta gratuita.",
    type: "website",
    locale: "es_ES",
    siteName: "Esteban Sánchez Asesores",
  },
  twitter: {
    card: "summary_large_image",
    title: "Esteban Sánchez Asesores | Asesoría en Chiclana de la Frontera",
    description:
      "Asesoría fiscal, contable y laboral en Chiclana de la Frontera y la Bahía de Cádiz. Primera consulta gratuita.",
  },
  alternates: {
    canonical: "https://estebansanchezasesores.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "ES-CA",
    "geo.placename": "Chiclana de la Frontera",
    "geo.position": "36.4255331;-6.1447872",
    "ICBM": "36.4255331, -6.1447872",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "Esteban Sánchez Asesores",
              image: "https://estebansanchezasesores.com/portada.jpeg",
              url: "https://estebansanchezasesores.com",
              telephone: "+34697519178",
              email: "estebansanchezasesores@gmail.com",
              description:
                "Asesoría fiscal, contable, laboral y jurídico-mercantil en Chiclana de la Frontera y la Bahía de Cádiz. Servicios para autónomos, pymes y empresas.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Tr.ª Alameda de Solano, C. Duelas",
                addressLocality: "Chiclana de la Frontera",
                addressRegion: "Cádiz",
                postalCode: "11130",
                addressCountry: "ES",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.4255331,
                longitude: -6.1447872,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Monday",
                  opens: "09:00",
                  closes: "14:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Monday",
                  opens: "16:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
                  opens: "09:00",
                  closes: "14:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
                  opens: "16:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Friday",
                  opens: "09:00",
                  closes: "14:00",
                },
              ],
              areaServed: [
                {
                  "@type": "City",
                  name: "Chiclana de la Frontera",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Bahía de Cádiz",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Provincia de Cádiz",
                },
              ],
              priceRange: "€€",
              serviceType: [
                "Asesoría Fiscal",
                "Asesoría Contable",
                "Asesoría Laboral",
                "Jurídico Mercantil",
                "Declaración de la Renta",
                "VERIFACTU",
                "Constitución de Sociedades",
                "Alta de Autónomos",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
