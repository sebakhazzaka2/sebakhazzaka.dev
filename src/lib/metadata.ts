import type { Metadata } from "next";

import { site } from "@/content/site";

/**
 * metadataBase, en orden:
 * 1. NEXT_PUBLIC_SITE_URL — dominio real, cuando esté comprado y configurado.
 * 2. VERCEL_PROJECT_PRODUCTION_URL — el alias estable de producción de Vercel
 *    (ej. sebakhazzaka-dev.vercel.app). A diferencia de VERCEL_URL, no cambia
 *    en cada deploy — VERCEL_URL apunta a la URL única de ESE deployment
 *    puntual, así que usarlo acá rompería sitemap/robots/canonical/OG cada
 *    vez que se hace un deploy nuevo.
 * 3. El dominio hardcodeado en content/site.ts, para dev local sin ninguna
 *    variable seteada.
 * Nunca bloquea el build por falta de una variable.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined) ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ??
  `https://${site.domain}`;

type BuildMetadataInput = {
  /** Sin el sufijo del sitio — se agrega acá. Mantener bajo ~60 caracteres. */
  title: string;
  /** Bajo ~160 caracteres. */
  description: string;
  /** Ruta relativa, ej. "/proyectos/consultorio". "/" para la home. */
  path: string;
  /** Ruta a una imagen OG específica; por default usa la del root. */
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  image = "/opengraph-image",
}: BuildMetadataInput): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const fullTitle = path === "/" ? title : `${title} — ${site.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "es_UY",
      type: "website",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
