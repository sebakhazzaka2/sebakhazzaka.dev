/**
 * Única fuente de verdad de los proyectos: alimenta las cards de la landing,
 * ambos case studies, sitemap.ts y la metadata de cada ruta.
 *
 * Contenido volcado de docs/content-review.md (aprobado). Copy verificado
 * contra los repos reales — no contra el placeholder genérico de Stitch.
 */

export type ProjectStatus = "live" | "development";

export type Decision = {
  icon: "box" | "alert-triangle" | "server";
  tag: string;
  title: string;
  description: string;
  /** Alternativa que se descartó — el detalle que muestra criterio, no solo la elección. */
  alternativeDiscarded?: string;
  /** Variante DEBT_LOGGED del diseño de Stitch: deuda técnica documentada. */
  debtLogged?: boolean;
  resolvedIn?: { label: string; href: string };
};

export type ResultStat = {
  label: string;
  value: string;
  variant?: "default" | "accent" | "warn";
};

export type ProjectImage = {
  src: string;
  alt: string;
  /** true si es una vista previa de diseño, no una captura de producción. */
  isPlaceholder?: boolean;
};

export type Project = {
  slug: string;
  status: ProjectStatus;
  statusLabel: string;
  title: string;
  tagline: string;
  /** Descripción de negocio en una línea, para la card de landing. */
  oneLiner: string;
  metaLine: string;
  stack: string[];
  beforeAfterImpact: {
    before: string;
    after: string;
    impact: string;
  };
  problem: string;
  solution: string;
  decisions: Decision[];
  results: ResultStat[];
  learnings: string;
  heroImage: ProjectImage;
  /** Capturas adicionales, ej. panel admin — no se muestran en la card, solo en el case study. */
  screenshots?: ProjectImage[];
  links: {
    repo: string;
    live?: string;
    roadmap: string;
  };
};

export const projects: Project[] = [
  {
    slug: "consultorio",
    status: "live",
    statusLabel: "Live",
    title: "Consultorio Odontológico",
    tagline: "B2B SaaS de gestión para profesionales de salud independientes",
    oneLiner:
      "Sistema de turnos y gestión clínica para consultorios que hoy trabajan a mano por WhatsApp y Excel.",
    metaLine: "48 commits · 25 PRs · En producción desde mayo 2026",
    stack: [
      "Java 17",
      "Spring Boot 3",
      "Angular 19",
      "MySQL 8",
      "Docker",
      "GitHub Actions",
      "Caddy",
      "Hetzner",
      "Sentry",
      "Uptime Kuma",
    ],
    beforeAfterImpact: {
      before: "Gestión de turnos manual por WhatsApp + cuaderno + Excel.",
      after:
        "Sistema web con agenda pública, historia clínica, tratamientos, pagos y deploy propio por cliente.",
      impact: "Cliente activo pagando desde mayo 2026.",
    },
    problem:
      "Profesionales independientes gestionando turnos sin sistema, sin historia clínica centralizada y sin cobrar de forma prolija — todo sobre WhatsApp, papel y planillas sueltas.",
    solution:
      "SaaS con una instancia Docker por cliente, branding y feature flags por variables de entorno, y un modelo comercial en 3 tiers (Local / Web / Web + WhatsApp) sobre una única base de código.",
    decisions: [
      {
        icon: "box",
        tag: "multitenancy",
        title: "Una instancia Docker por cliente",
        description:
          "Aísla datos y una falla de un cliente no afecta a otros, a costo de más operación por cliente nuevo.",
        alternativeDiscarded: "Multitenancy con una sola instancia compartida",
      },
      {
        icon: "alert-triangle",
        tag: "DEBT_LOGGED",
        title: "Deuda técnica documentada: JWT en localStorage",
        description:
          "Registrado como riesgo de seguridad conocido, con plan concreto de migración a cookie HttpOnly ya priorizado en el ROADMAP (P1, 1-1.5 días).",
        debtLogged: true,
        resolvedIn: { label: "Corregido en Frontpet", href: "/proyectos/frontpet" },
      },
      {
        icon: "server",
        tag: "VPS propio",
        title: "Deploy en Hetzner + Caddy",
        description:
          "Costo-eficiencia y control total del entorno de producción. Deploy vía git fetch + reset --hard en vez de git pull, para que un archivo tocado a mano en el server no rompa el pipeline.",
        alternativeDiscarded: "PaaS gestionado (Render / Heroku)",
      },
    ],
    results: [
      { label: "Cliente activo desde", value: "Mayo 2026", variant: "accent" },
      { label: "Migraciones", value: "9 versionadas" },
      { label: "Tiers comerciales", value: "3" },
    ],
    learnings:
      "Desplegar un sistema por-cliente en bare metal enseñó la importancia de la infraestructura declarativa y la automatización agresiva: cada paso manual en el onboarding de un cliente nuevo era un punto de falla potencial que terminó scripteado. La caché de assets también reveló que Spring Security agrega no-store a toda respuesta por default — moverla a la capa de proxy (Caddy) resolvió un carrusel que se trababa sin tocar el backend.",
    heroImage: {
      src: "/projects/consultorio/landing.png",
      alt: "Landing pública de neodentalmaster.turnosuy.com en producción",
    },
    screenshots: [
      {
        src: "/projects/consultorio/admin.png",
        alt: "Panel admin del consultorio: agenda, historia clínica y tratamientos, en producción",
      },
    ],
    links: {
      repo: "https://github.com/sebakhazzaka2/consultorio-odontologico",
      live: "https://neodentalmaster.turnosuy.com",
      roadmap:
        "https://github.com/sebakhazzaka2/consultorio-odontologico/blob/main/ROADMAP.md",
    },
  },
  {
    slug: "frontpet",
    status: "development",
    statusLabel: "En desarrollo",
    title: "Frontpet",
    tagline:
      "Plataforma comercial para un petshop local, con base lista para escalar a SaaS multi-tenant",
    oneLiner:
      "Catálogo con pedidos por WhatsApp y agenda de baño/tosa para un petshop, construido con arquitectura lista para atender más negocios del rubro.",
    metaLine: "24 ADRs · +30 PRs · Hito de cobro: 05/09/2026",
    stack: [
      "Java 21",
      "Spring Boot 3",
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui",
      "PostgreSQL 16",
      "Testcontainers",
      "Coolify",
      "Caddy",
      "Cloudflare (DNS/CDN/R2)",
      "Plausible",
    ],
    beforeAfterImpact: {
      before: "Propuesta comercial del negocio sin ningún sistema — pedidos y turnos informales.",
      after:
        "SaaS en desarrollo activo, modelo de datos multi-tenant-ready operado hoy en single-tenant.",
      impact:
        "Hito de cobro firmado contra valor entregado real (tienda vendiendo online), para el 05/09/2026.",
    },
    problem:
      "Un petshop necesita vender catálogo online, recibir pedidos por WhatsApp y ofrecer turnos de baño/tosa, sin tener ningún sistema propio.",
    solution:
      "Monorepo Spring Boot + Next.js con módulos por dominio (tenant, identity, catalog, booking, orders, notifications), diseñado para que sumar un segundo negocio no implique reescritura.",
    decisions: [
      {
        icon: "box",
        tag: "ADR 002",
        title: "Multi-tenant ready, single-tenant en operación",
        description:
          "tenant_id en toda tabla del dominio desde el día uno, con un @TenantFilter global de Hibernate — sin construir infraestructura operativa multi-tenant (sin subdominios, sin signup, sin panel super-admin) hasta que haga falta.",
        alternativeDiscarded:
          "Single-tenant sin preparación, o multi-tenant operativo completo en el MVP1",
      },
      {
        icon: "alert-triangle",
        tag: "ADR 004",
        title: "Auth JWT en cookie HttpOnly desde el inicio",
        description:
          "A diferencia del consultorio, que arrancó con JWT en localStorage y lo está migrando: acá se aplicó la lección desde el primer commit.",
        alternativeDiscarded: "JWT en localStorage (como en Consultorio)",
      },
      {
        icon: "server",
        tag: "Testing",
        title: "Testcontainers sobre mocks",
        description:
          "Tests de integración contra Postgres real (AbstractIntegrationTest.java + ~10 tests), no contra un mock de repositorio.",
        alternativeDiscarded: "Mocks o H2 in-memory",
      },
    ],
    results: [
      { label: "Módulos por dominio", value: "6" },
      { label: "Tests de integración", value: "~10 (Postgres real)" },
      { label: "Auth", value: "JWT en cookie HttpOnly", variant: "accent" },
    ],
    learnings:
      "El Sprint 5 (booking backend) corrió un 40% por encima de lo estimado, y quedó registrado en el ROADMAP con el detalle del desvío en vez de promediarlo hacia abajo. El re-baseo del plan (17/07/2026), cuando el Sprint 6 salió ~2x subestimado, se documentó con la misma lógica: separar el hito de cobro de la entrega final para que un desvío de estimación no ponga en riesgo el pago.",
    heroImage: {
      src: "/projects/frontpet/design-preview.png",
      alt: "Vista previa de diseño del case study de Frontpet — no es una captura de producción",
      isPlaceholder: true,
    },
    links: {
      repo: "https://github.com/sebakhazzaka2/Frontpet",
      roadmap: "https://github.com/sebakhazzaka2/Frontpet/blob/main/ROADMAP.md",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
