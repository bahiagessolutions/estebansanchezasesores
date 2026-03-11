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

type ContactField = keyof ContactPayload;

const allowedPayloadKeys: readonly ContactField[] = [
  "nombre",
  "email",
  "telefono",
  "servicio",
  "mensaje",
  "honeypot",
];

const fieldLimits: Record<ContactField, number> = {
  nombre: 120,
  email: 160,
  telefono: 40,
  servicio: 120,
  mensaje: 4000,
  honeypot: 120,
};

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const defaultRateLimitWindowMs = 10 * 60 * 1000;
const defaultRateLimitMax = 5;

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

function getPositiveInt(value: string | undefined, fallback: number) {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getClientIp(req: Request) {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

function isSameOriginRequest(req: Request) {
  const origin = req.headers.get("origin");
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host");

  if (!origin || !host) {
    return true;
  }

  try {
    const originUrl = new URL(origin);
    return originUrl.host === host;
  } catch {
    return false;
  }
}

function enforceRateLimit(req: Request) {
  const now = Date.now();
  const windowMs = getPositiveInt(
    process.env.CONTACT_RATE_LIMIT_WINDOW_MS,
    defaultRateLimitWindowMs
  );
  const maxRequests = getPositiveInt(
    process.env.CONTACT_RATE_LIMIT_MAX,
    defaultRateLimitMax
  );
  const clientIp = getClientIp(req);

  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }

  const current = rateLimitStore.get(clientIp);
  if (!current || current.resetAt <= now) {
    rateLimitStore.set(clientIp, { count: 1, resetAt: now + windowMs });
    return null;
  }

  if (current.count >= maxRequests) {
    const retryAfter = Math.max(1, Math.ceil((current.resetAt - now) / 1000));

    return NextResponse.json(
      { error: "Has realizado demasiados intentos. Inténtalo más tarde." },
      {
        status: 429,
        headers: {
          "Retry-After": String(retryAfter),
        },
      }
    );
  }

  current.count += 1;
  rateLimitStore.set(clientIp, current);

  return null;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function normalizeField(
  payload: Record<string, unknown>,
  field: ContactField
) {
  const value = payload[field];

  if (value === undefined || value === null) {
    return "";
  }

  if (typeof value !== "string") {
    throw new Error(`invalid:${field}`);
  }

  const trimmedValue = value.trim();
  if (trimmedValue.length > fieldLimits[field]) {
    throw new Error(`too_long:${field}`);
  }

  return trimmedValue;
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
      { error: "El formulario no está disponible temporalmente." },
      { status: 500 }
    );
  }

  if (req.headers.get("content-type")?.includes("application/json") !== true) {
    return NextResponse.json(
      { error: "Solicitud no válida." },
      { status: 415 }
    );
  }

  if (!isSameOriginRequest(req)) {
    return NextResponse.json(
      { error: "Solicitud no permitida." },
      { status: 403 }
    );
  }

  const rateLimitResponse = enforceRateLimit(req);
  if (rateLimitResponse) {
    return rateLimitResponse;
  }

  let rawPayload: unknown;

  try {
    rawPayload = await req.json();
  } catch {
    return NextResponse.json(
      { error: "No se pudo leer la solicitud." },
      { status: 400 }
    );
  }

  if (!isPlainObject(rawPayload)) {
    return NextResponse.json(
      { error: "Solicitud no válida." },
      { status: 400 }
    );
  }

  const unknownKeys = Object.keys(rawPayload).filter(
    (key) => !allowedPayloadKeys.includes(key as ContactField)
  );

  if (unknownKeys.length > 0) {
    return NextResponse.json(
      { error: "Solicitud no válida." },
      { status: 400 }
    );
  }

  let nombre = "";
  let email = "";
  let telefono = "";
  let servicio = "";
  let mensaje = "";
  let honeypot = "";

  try {
    nombre = normalizeField(rawPayload, "nombre");
    email = normalizeField(rawPayload, "email");
    telefono = normalizeField(rawPayload, "telefono");
    servicio = normalizeField(rawPayload, "servicio");
    mensaje = normalizeField(rawPayload, "mensaje");
    honeypot = normalizeField(rawPayload, "honeypot");
  } catch {
    return NextResponse.json(
      { error: "Solicitud no válida." },
      { status: 400 }
    );
  }

  servicio = servicio || "No especificado";

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
  const safeNombre = escapeHtml(nombre);
  const safeEmail = escapeHtml(email || "No facilitado");
  const safeTelefono = escapeHtml(telefono || "No facilitado");
  const safeServicio = escapeHtml(servicio);
  const safeMensaje = escapeHtml(mensaje || "Sin mensaje adicional.");

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
      <p><strong>Nombre:</strong> ${safeNombre}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Teléfono:</strong> ${safeTelefono}</p>
      <p><strong>Servicio:</strong> ${safeServicio}</p>
      <p><strong>Mensaje:</strong></p>
      <p style="white-space: pre-wrap;">${safeMensaje}</p>
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