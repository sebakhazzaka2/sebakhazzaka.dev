import type { Metadata } from "next";

import { site } from "@/content/site";

/**
 * metadataBase: NEXT_PUBLIC_SITE_URL primero (dominio real cuando esté
 * comprado), Vercel URL como fallback en preview/deploys sin dominio propio,
 * localhost en dev. Nunca bloquea el build por falta de una variable.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `https://${site.domain}`);

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
