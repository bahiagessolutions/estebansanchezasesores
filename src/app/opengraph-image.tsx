import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Esteban Sánchez Asesores — Asesoría Fiscal, Contable y Laboral en Chiclana de la Frontera";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0f1f3d 0%, #1a3158 60%, #0f1f3d 100%)",
          fontFamily: "Inter, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative gold accent line at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, transparent 0%, #c9a84c 30%, #c9a84c 70%, transparent 100%)",
          }}
        />

        {/* Subtle grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.04,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            padding: "0 80px",
            position: "relative",
          }}
        >
          {/* Monogram circle */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 100,
              height: 100,
              borderRadius: "50%",
              border: "3px solid #c9a84c",
              marginBottom: 8,
            }}
          >
            <span
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: "#c9a84c",
                letterSpacing: -2,
              }}
            >
              ES
            </span>
          </div>

          {/* Company name */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: -1,
                lineHeight: 1.1,
              }}
            >
              Esteban Sánchez
            </span>
            <span
              style={{
                fontSize: 30,
                fontWeight: 400,
                color: "#c9a84c",
                letterSpacing: 8,
                textTransform: "uppercase",
              }}
            >
              Asesores
            </span>
          </div>

          {/* Divider */}
          <div
            style={{
              width: 80,
              height: 2,
              background: "rgba(201, 168, 76, 0.5)",
              marginTop: 8,
              marginBottom: 8,
            }}
          />

          {/* Tagline */}
          <span
            style={{
              fontSize: 22,
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.75)",
              textAlign: "center",
              lineHeight: 1.5,
              maxWidth: 700,
            }}
          >
            Asesoría Fiscal, Contable y Laboral
          </span>

          {/* Location */}
          <span
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: "rgba(201, 168, 76, 0.7)",
              letterSpacing: 3,
              textTransform: "uppercase",
              marginTop: 4,
            }}
          >
            Chiclana de la Frontera · Cádiz
          </span>
        </div>

        {/* Decorative gold accent line at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, transparent 0%, #c9a84c 30%, #c9a84c 70%, transparent 100%)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
