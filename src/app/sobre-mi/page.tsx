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
