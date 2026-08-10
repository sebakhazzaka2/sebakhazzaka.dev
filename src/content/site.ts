/**
 * Fuente única de verdad para datos del sitio.
 * Cambiar el email acá lo cambia en header, footer, JSON-LD y /cv a la vez.
 */
export const site = {
  name: "Sebastián Khazzaka",
  shortName: "SK.",
  role: "Full-Stack Developer",
  tagline: "Java · Spring Boot · Next.js",
  domain: "sebakhazzaka.dev",
  locale: "es",
  availability: "Disponible para roles full-stack",
  links: {
    github: "https://github.com/sebakhazzaka2",
    linkedin: "https://linkedin.com/in/sebastian-khazzaka",
    email: "khazzaka2008@hotmail.com",
  },
} as const;

export const navLinks = [
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#stack", label: "Stack" },
  { href: "/#como-trabajo", label: "Cómo trabajo" },
  { href: "/cv", label: "CV" },
] as const;
