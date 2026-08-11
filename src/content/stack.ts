/**
 * Categorías reales del stack, verificadas contra los README de
 * consultorio-odontologico y Frontpet — no contra el stack inventado de
 * Stitch (Go, Rust, Kubernetes, WebGL). Backups/Kuma/logs vienen de la
 * sección "actual" del README del consultorio, no del roadmap; Sentry
 * confirmado como implementado (el README público quedó desactualizado).
 */
export type StackCategory = {
  title: string;
  items: string[];
};

export const stackCategories: StackCategory[] = [
  {
    title: "Backend",
    items: [
      "Java 17 / 21",
      "Spring Boot 3",
      "Spring Security",
      "JPA / Hibernate",
      "Flyway",
      "Maven",
    ],
  },
  {
    title: "Frontend",
    items: [
      "Next.js 16",
      "React 19",
      "Angular 19",
      "Angular Material",
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui",
      "JavaScript / HTML / CSS",
    ],
  },
  {
    title: "Testing y calidad",
    items: ["JUnit 5", "Testcontainers"],
  },
  {
    title: "Datos",
    items: ["PostgreSQL 16", "MySQL 8", "UUID v7"],
  },
  {
    title: "DevOps e infraestructura",
    items: [
      "Docker / Docker Compose",
      "GitHub Actions",
      "GHCR",
      "Caddy",
      "Coolify",
      "Hetzner",
      "Cloudflare (DNS / CDN / R2)",
    ],
  },
  {
    title: "Observabilidad",
    items: ["Sentry", "Uptime Kuma", "Backups automatizados", "Logs centralizados"],
  },
  {
    title: "Analytics",
    items: ["Plausible", "Meta Pixel"],
  },
  {
    title: "Proceso",
    items: [
      "ADRs (Architecture Decision Records)",
      "Metodología ágil / Scrum",
      "Roadmaps con presupuesto de horas",
      "Prototipado antes de construir (mockups de UI)",
      "Desarrollo asistido por LLM (Claude Code)",
    ],
  },
];
