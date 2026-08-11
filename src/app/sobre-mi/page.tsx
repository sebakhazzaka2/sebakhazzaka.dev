import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SubHeading } from "@/components/section";
import { about } from "@/content/about";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Sobre mí",
  description: `Quién es ${site.name} — de dónde viene, qué lo mueve y cómo trabaja con clientes.`,
  path: "/sobre-mi",
});

export default function SobreMiPage() {
  return (
    <div className="mx-auto w-full max-w-[800px] px-margin-mobile py-12 pt-32 md:px-margin-desktop md:py-24">
      <div className="mb-16 flex flex-col items-start gap-8 border-b border-border-slate pb-16 sm:flex-row sm:items-center">
        <div className="relative size-32 shrink-0 overflow-hidden rounded-full border border-border-slate sm:size-40">
          <Image
            src={about.photo.src}
            alt={about.photo.alt}
            fill
            sizes="160px"
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-2">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-text-primary md:font-headline-lg md:text-headline-lg">
            {site.name}
          </h1>
          <p className="font-mono-label text-mono-label uppercase tracking-widest text-status-blue">
            {site.role}
          </p>
          <p className="font-mono-code text-mono-code text-text-muted">{about.location}</p>
          <p className="font-mono-code text-mono-code text-text-muted">{about.languages}</p>
        </div>
      </div>

      <div className="space-y-16">
        <section className="space-y-4">
          <SubHeading>Cómo empecé</SubHeading>
          <p className="max-w-[65ch] font-body-lg text-body-lg leading-relaxed text-text-secondary">
            {about.comoEmpece}
          </p>
        </section>

        <section className="space-y-4">
          <SubHeading>Lo que me mueve</SubHeading>
          <p className="max-w-[65ch] font-body-lg text-body-lg leading-relaxed text-text-secondary">
            {about.loQueMeMueve}
          </p>
        </section>

        <section className="space-y-4">
          <SubHeading>Certificaciones</SubHeading>
          <ul className="space-y-4">
            {about.certifications.map((cert) => (
              <li
                key={cert.title}
                className="flex flex-col gap-4 border border-border-slate bg-surface-container-lowest p-4 sm:flex-row"
              >
                <div className="relative h-40 w-28 shrink-0 overflow-hidden border border-border-slate bg-white">
                  <object
                    data={`${cert.fileHref}#toolbar=0&navpanes=0&view=FitH`}
                    type="application/pdf"
                    aria-label={`Vista previa de ${cert.title}`}
                    className="pointer-events-none size-full"
                  />
                  <a
                    href={cert.fileHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir certificado completo: ${cert.title}`}
                    className="absolute inset-0"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <span className="font-body-md text-body-md text-text-primary">
                      {cert.title}
                    </span>
                    <span className="font-mono-code text-mono-code text-text-muted">
                      {cert.date}
                    </span>
                  </div>
                  <p className="font-mono-code text-mono-code text-text-muted">
                    {cert.issuer} — {cert.detail}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                    <a
                      href={cert.fileHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono-code text-mono-code text-status-blue underline decoration-status-blue/30 transition-colors hover:text-text-primary"
                    >
                      Ver certificado →
                    </a>
                    {cert.verifyHref && (
                      <a
                        href={cert.verifyHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono-code text-mono-code text-status-blue underline decoration-status-blue/30 transition-colors hover:text-text-primary"
                      >
                        Verificar →
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4 border-l-2 border-border-slate py-2 pl-6">
          <SubHeading>Cómo trabajo con otros</SubHeading>
          <p className="max-w-[65ch] font-body-lg text-body-lg leading-relaxed text-text-secondary">
            {about.comoTrabajoConOtros}
          </p>
        </section>

        <section className="space-y-4">
          <SubHeading>Fuera del código</SubHeading>
          <p className="max-w-[65ch] font-body-lg text-body-lg leading-relaxed text-text-secondary">
            {about.fueraDelCodigo}
          </p>
        </section>
      </div>

      <div className="mt-16 flex flex-wrap gap-4 border-t border-border-slate pt-12">
        <Link
          href="/#proyectos"
          className="inline-flex items-center gap-2 bg-cta px-6 py-3 font-mono-label text-mono-label text-white transition-opacity hover:opacity-90"
        >
          Ver proyectos
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
        <Link
          href="/cv"
          className="inline-flex items-center gap-2 border border-border-slate bg-surface-container-lowest px-6 py-3 font-mono-label text-mono-label text-text-primary transition-colors hover:bg-surface-container"
        >
          Ver CV
        </Link>
        <a
          href={`mailto:${site.links.email}`}
          className="inline-flex items-center gap-2 border border-border-slate bg-surface-container-lowest px-6 py-3 font-mono-label text-mono-label text-text-primary transition-colors hover:bg-surface-container"
        >
          Contacto
        </a>
      </div>
    </div>
  );
}
