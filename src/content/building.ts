/**
 * Roadmap público de lo que se está construyendo ahora. Es dirección, no
 * promesa: cada paso declara su estado real para no vender humo.
 */
export type BuildingStatus = "now" | "next" | "later";

export type BuildingStep = {
  number: string;
  status: BuildingStatus;
  title: string;
  description: string;
};

export const buildingIntro =
  "Tomar TurnosUy y Frontpet, y convertirlos en dos productos SaaS sobre una base tecnológica compartida con un agente comercial de IA integrado.";

export const buildingStatusLabel: Record<BuildingStatus, string> = {
  now: "AHORA",
  next: "SIGUIENTE",
  later: "DESPUÉS",
};

export const buildingTags = [
  "Agentes de IA",
  "SaaS multi-tenant",
  "WhatsApp",
  "TurnosUy",
  "Frontpet",
];

export const buildingSteps: BuildingStep[] = [
  {
    number: "01",
    status: "now",
    title: "Ingeniería inversa de referentes",
    description:
      "Estudiar una app líder por producto (funcionalidades, arquitectura, UX) y complementar con repos open source de licencia permisiva.",
  },
  {
    number: "02",
    status: "next",
    title: "Agente comercial de IA",
    description:
      "Núcleo común adaptado a cada producto: responder consultas, captar clientes, gestionar turnos y ventas, y recuperar oportunidades.",
  },
  {
    number: "03",
    status: "next",
    title: "Integración con datos reales",
    description:
      "Conectar el agente a TurnosUy y Frontpet para operar sobre turnos, catálogo y pedidos reales, no sobre un demo.",
  },
  {
    number: "04",
    status: "later",
    title: "SaaS multi-tenant",
    description:
      "Web y subdominio propios por negocio, con opción de dominio personalizado. Frontpet ya tiene el modelo de datos preparado (ADR 002).",
  },
  {
    number: "05",
    status: "later",
    title: "Plataforma central",
    description:
      "Login único, gestión de suscripción y acceso a las apps y agentes de cada cliente.",
  },
];
