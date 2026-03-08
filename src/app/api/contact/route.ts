import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

interface ContactPayload {
  nombre?: string;
  email?: string;
  telefono?: string;
  servicio?: string;
  mensaje?: string;
  honeypot?: string;
}

const smtpEnvVars = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_TO_EMAIL",
] as const;

const resendEnvVars = [
  "RESEND_API_KEY",
  "CONTACT_TO_EMAIL",
  "CONTACT_FROM_EMAIL",
] as const;

function getMissingEnvVars(keys: readonly string[]) {
  return keys.filter((key) => !process.env[key]);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  const hasResend = Boolean(process.env.RESEND_API_KEY);
  const missingEnvVars = hasResend
    ? getMissingEnvVars(resendEnvVars)
    : getMissingEnvVars(smtpEnvVars);

  if (missingEnvVars.length > 0) {
    return NextResponse.json(
      {
        error:
          "Falta configurar el servidor de correo para procesar el formulario.",
        missingEnvVars,
      },
      { status: 500 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { error: "No se pudo leer la solicitud." },
      { status: 400 }
    );
  }

  const nombre = payload.nombre?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const telefono = payload.telefono?.trim() ?? "";
  const servicio = payload.servicio?.trim() ?? "No especificado";
  const mensaje = payload.mensaje?.trim() ?? "";
  const honeypot = payload.honeypot?.trim() ?? "";

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!nombre) {
    return NextResponse.json(
      { error: "El nombre es obligatorio." },
      { status: 400 }
    );
  }

  if (!email && !telefono) {
    return NextResponse.json(
      {
        error:
          "Debes indicar al menos un email o un teléfono para poder contactar.",
      },
      { status: 400 }
    );
  }

  if (email && !isValidEmail(email)) {
    return NextResponse.json(
      { error: "El email introducido no es válido." },
      { status: 400 }
    );
  }

  const fromName = process.env.CONTACT_FROM_NAME || "Web Esteban Sánchez Asesores";
  const fromAddress = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;
  const toAddress = process.env.CONTACT_TO_EMAIL as string;

  const subject = `Nuevo contacto web: ${nombre}`;
  const text = [
    "Nuevo mensaje desde el formulario web.",
    "",
    `Nombre: ${nombre}`,
    `Email: ${email || "No facilitado"}`,
    `Teléfono: ${telefono || "No facilitado"}`,
    `Servicio: ${servicio}`,
    "",
    "Mensaje:",
    mensaje || "Sin mensaje adicional.",
  ].join("\n");

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #0f1f3d; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">Nuevo mensaje desde la web</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email || "No facilitado"}</p>
      <p><strong>Teléfono:</strong> ${telefono || "No facilitado"}</p>
      <p><strong>Servicio:</strong> ${servicio}</p>
      <p><strong>Mensaje:</strong></p>
      <p style="white-space: pre-wrap;">${mensaje || "Sin mensaje adicional."}</p>
    </div>
  `;

  try {
    if (hasResend) {
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: `${fromName} <${fromAddress}>`,
        to: [toAddress],
        replyTo: email || undefined,
        subject,
        text,
        html,
      });
    } else {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `${fromName} <${fromAddress}>`,
        to: toAddress,
        replyTo: email || undefined,
        subject,
        text,
        html,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending contact email", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Inténtalo de nuevo más tarde." },
      { status: 500 }
    );
  }
}