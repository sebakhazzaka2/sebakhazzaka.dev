/**
 * Categorías reales del stack, verificadas contra el uso efectivo en
 * consultorio-odontologico y Frontpet (READMEs + pnpm-lock.yaml / pom.xml),
 * no contra el stack inventado de Stitch (Go, Rust, Kubernetes, WebGL).
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
      "JWT (cookies HttpOnly)",
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
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui",
      "TanStack Query",
    ],
  },
  {
    title: "Testing y calidad",
    items: ["JUnit 5", "Testcontainers", "ESLint", "Prettier", "WCAG / WAVE"],
  },
  {
    title: "DevOps e infraestructura",
    items: [
      "Docker",
      "GitHub Actions",
      "Caddy",
      "Coolify",
      "Hetzner",
      "Cloudflare",
    ],
  },
  {
    title: "Datos",
    items: ["PostgreSQL 16", "MySQL 8", "Diseño de esquemas (3FN)", "UUID v7"],
  },
  {
    title: "Proceso",
    items: [
      "ADRs (Architecture Decision Records)",
      "PR-based delivery",
      "Conventional Commits",
      "Squash merge",
      "Roadmaps con presupuesto de horas",
    ],
  },
];
