import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { site } from "@/content/site";
import { buildMetadata, siteUrl } from "@/lib/metadata";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...buildMetadata({
    title: `${site.name} — ${site.role}`,
    description:
      "Full-Stack Developer · Java + Spring Boot + Next.js. Sistemas reales en producción, decisiones documentadas.",
    path: "/",
  }),
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: siteUrl,
  sameAs: [site.links.github, site.links.linkedin],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={site.locale}
      className={`${geist.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        {/* Sin JS los reveals nunca animan: se muestran ya visibles en vez de quedar en opacity 0. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:bg-cta focus:px-4 focus:py-2 focus:font-mono-label focus:text-mono-label focus:text-white"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        {/* tabIndex=-1: sin esto el skip-link mueve el scroll pero no el foco DOM real, y varios lectores de pantalla no anuncian el salto. */}
        <main id="contenido" tabIndex={-1} className="flex flex-1 flex-col pt-16 outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
