/**
 * Las 4 evidence cards de "Cómo trabajo" — la sección más diferenciadora del
 * portfolio. Cada cita es textual y tiene permalink a la línea exacta que la
 * confirma, fijado a un commit (no a `main`, para que no se rompa si el repo
 * avanza). Regla del plan: si un dato no se verifica, no se publica.
 */
export type Evidence = {
  icon: "file-text" | "database" | "shield-check" | "clock";
  number: string;
  title: string;
  description: string;
  quote: string;
  source: string;
  permalink: string;
};

export const evidence: Evidence[] = [
  {
    icon: "file-text",
    number: "01",
    title: "DOCUMENTO_DECISIONES",
    description:
      "Documento las decisiones, no solo el código. Cada decisión de arquitectura tiene su contexto, sus alternativas descartadas y su plan de migración.",
    quote:
      "Multi-tenant ready en el modelo de datos, single-tenant en la operación. [...] Alternativa descartada: modelar todo single-tenant y retrofitear después (costo altísimo) o construir toda la infraestructura multi-tenant en el MVP1 (duplica tiempo sin valor).",
    source: "Frontpet — docs/decisions/002-multi-tenant.md",
    permalink:
      "https://github.com/sebakhazzaka2/Frontpet/blob/cfd15a2d9a48747dd96b4be4df1ecf5e05ca3af9/docs/decisions/002-multi-tenant.md",
  },
  {
    icon: "database",
    number: "02",
    title: "MIGRACIONES_VERSIONADAS",
    description:
      "Ninguna migración aplicada a mano en producción. Flyway versionado desde el día uno en los dos proyectos, cada cambio de esquema con su propio commit.",
    quote:
      "V1__baseline_schema.sql → V9__add_google_event_id_to_citas.sql — 9 migraciones versionadas, ninguna aplicada directo sobre la base de producción.",
    source: "Consultorio Odontológico — backend/src/main/resources/db/migration",
    permalink:
      "https://github.com/sebakhazzaka2/consultorio-odontologico/tree/9151cc85dd7992974feed53979e9e81b76b648b9/backend/src/main/resources/db/migration",
  },
  {
    icon: "shield-check",
    number: "03",
    title: "CORRIJO_LA_DEUDA",
    description:
      "Corrijo lo que documento como deuda. En el consultorio el JWT quedó en localStorage y lo registré como riesgo conocido. En Frontpet arranca en cookie HttpOnly desde el primer commit.",
    quote:
      "Security (S3): JWT in localStorage → HttpOnly cookie, rate limit on login, strict CSP, admin action audit log.",
    source: "consultorio-odontologico — README.md",
    permalink:
      "https://github.com/sebakhazzaka2/consultorio-odontologico/blob/9151cc85dd7992974feed53979e9e81b76b648b9/README.md#L66",
  },
  {
    icon: "clock",
    number: "04",
    title: "ESTIMO_MIDO_CORRIJO",
    description:
      "Estimo, mido y corrijo. Presupuesté 19 horas para el backend de booking. Me llevó 26,5. Está registrado en el ROADMAP con la razón del desvío, no escondido.",
    quote: "corrió ~26,5 hs vs 19 estimadas (+40%). Ver Registro de decisiones de plan",
    source: "Frontpet — ROADMAP.md, Sprint 5",
    permalink:
      "https://github.com/sebakhazzaka2/Frontpet/blob/cfd15a2d9a48747dd96b4be4df1ecf5e05ca3af9/ROADMAP.md#L415",
  },
];
