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
    items: ["Java 17 / 21", "Spring Boot 3", "Spring Security", "JPA / Hibernate", "Flyway"],
  },
  {
    title: "Frontend",
    items: ["Next.js 16", "React 19", "Angular 19", "Tailwind CSS 4"],
  },
  {
    title: "Testing y calidad",
    items: ["JUnit 5", "Testcontainers"],
  },
  {
    title: "DevOps e infraestructura",
    items: ["Docker", "GitHub Actions", "Hetzner"],
  },
  {
    title: "Datos",
    items: ["PostgreSQL 16", "UUID v7"],
  },
  {
    title: "Proceso",
    items: ["ADRs (Architecture Decision Records)"],
  },
];
