import { ArrowRight, FileText, UserRound } from "lucide-react";
import Link from "next/link";

import { EvidenceCard } from "@/components/evidence-card";
import { ProjectCard } from "@/components/project-card";
import { ProofBanner } from "@/components/proof-banner";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { StackSection } from "@/components/stack-section";
import { evidence } from "@/content/evidence";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-margin-mobile pb-section-gap md:px-margin-desktop">
      {/* Hero — vende quién sos, el stack real y un CTA. Sin adjetivos. */}
      <Section className="mt-32 mb-section-gap md:mt-48">
        <Reveal>
          <div className="max-w-3xl">
            <p className="mb-6 font-mono-label text-mono-label uppercase tracking-widest text-status-blue">
              {site.role} · {site.tagline}
            </p>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-text-primary md:font-headline-lg md:text-headline-lg">
              {site.name}
            </h1>
            <p className="mt-6 max-w-[65ch] font-body-lg text-body-lg leading-relaxed text-text-secondary">
              Java + Spring Boot en el backend, Next.js y Angular en el
              frontend. Dos sistemas reales en producción y en desarrollo,
              con decisiones documentadas en cada uno.
            </p>
            <div className="mt-12 flex gap-4">
              <a
                href="#proyectos"
                className="bg-cta px-6 py-3 font-mono-label text-mono-label text-white transition-opacity hover:opacity-90"
              >
                VER_PROYECTOS
              </a>
              <a
                href={`mailto:${site.links.email}`}
                className="border border-border-slate bg-[#1A1A1A] px-6 py-3 font-mono-label text-mono-label text-text-primary transition-colors hover:border-[#444444]"
              >
                CONTACTO
              </a>
            </div>
          </div>
        </Reveal>
      </Section>

      <Reveal>
        <ProofBanner />
      </Reveal>

      <Section id="proyectos" className="mb-section-gap">
        <SectionHeading>SELECTED_PROJECTS</SectionHeading>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="como-trabajo" className="mb-section-gap">
        <SectionHeading>HOW_I_WORK</SectionHeading>
        <div className="grid grid-cols-1 gap-px bg-border-slate md:grid-cols-2">
          {evidence.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.08}>
              <EvidenceCard evidence={item} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Después de la evidencia, no antes: acá es donde alguien ya convencido busca saber quién sos. */}
      <Section className="mb-section-gap">
        <Reveal>
          <div className="grid grid-cols-2 gap-3 md:gap-gutter">
            <Link
              href="/sobre-mi"
              className="group flex items-center justify-between gap-2 border border-border-slate bg-surface-container-lowest p-4 transition-colors hover:border-status-blue/50 hover:bg-surface-container-low md:gap-4 md:p-8"
            >
              <div className="flex min-w-0 items-center gap-3 md:gap-4">
                <UserRound
                  aria-hidden="true"
                  className="size-5 shrink-0 text-text-muted transition-colors group-hover:text-status-blue md:size-8"
                />
                <div className="space-y-1">
                  <span className="hidden font-mono-label text-mono-label text-text-muted sm:block">
                    Más allá del código
                  </span>
                  <h3 className="font-body-md text-body-md text-text-primary transition-colors group-hover:text-status-blue md:font-headline-md md:text-headline-md">
                    Sobre mí
                  </h3>
                </div>
              </div>
              <ArrowRight
                aria-hidden="true"
                className="hidden size-6 shrink-0 text-text-muted transition-colors group-hover:text-status-blue sm:block"
              />
            </Link>
            <Link
              href="/cv"
              className="group flex items-center justify-between gap-2 border border-border-slate bg-surface-container-lowest p-4 transition-colors hover:border-status-blue/50 hover:bg-surface-container-low md:gap-4 md:p-8"
            >
              <div className="flex min-w-0 items-center gap-3 md:gap-4">
                <FileText
                  aria-hidden="true"
                  className="size-5 shrink-0 text-text-muted transition-colors group-hover:text-status-blue md:size-8"
                />
                <div className="space-y-1">
                  <span className="hidden font-mono-label text-mono-label text-text-muted sm:block">
                    ES · EN · PT
                  </span>
                  <h3 className="font-body-md text-body-md text-text-primary transition-colors group-hover:text-status-blue md:font-headline-md md:text-headline-md">
                    CV completo
                  </h3>
                </div>
              </div>
              <ArrowRight
                aria-hidden="true"
                className="hidden size-6 shrink-0 text-text-muted transition-colors group-hover:text-status-blue sm:block"
              />
            </Link>
          </div>
        </Reveal>
      </Section>

      <Section id="stack" className="mb-section-gap">
        <SectionHeading>CORE_STACK</SectionHeading>
        <Reveal>
          <StackSection />
        </Reveal>
      </Section>

      {/* Cierre para quien llegó hasta el final del stack sin convertir arriba. */}
      <Section className="mb-section-gap">
        <Reveal>
          <div className="grid grid-cols-2 gap-3 md:gap-gutter">
            <Link
              href="/sobre-mi"
              className="group flex items-center justify-between gap-2 border border-border-slate bg-surface-container-lowest p-4 transition-colors hover:border-status-blue/50 hover:bg-surface-container-low md:gap-4 md:p-8"
            >
              <div className="flex min-w-0 items-center gap-3 md:gap-4">
                <UserRound
                  aria-hidden="true"
                  className="size-5 shrink-0 text-text-muted transition-colors group-hover:text-status-blue md:size-8"
                />
                <div className="space-y-1">
                  <span className="hidden font-mono-label text-mono-label text-text-muted sm:block">
                    Antes de irte
                  </span>
                  <h3 className="font-body-md text-body-md text-text-primary transition-colors group-hover:text-status-blue md:font-headline-md md:text-headline-md">
                    ¿Quién soy?
                  </h3>
                </div>
              </div>
              <ArrowRight
                aria-hidden="true"
                className="hidden size-6 shrink-0 text-text-muted transition-colors group-hover:text-status-blue sm:block"
              />
            </Link>
            <Link
              href="/cv"
              className="group flex items-center justify-between gap-2 border border-border-slate bg-surface-container-lowest p-4 transition-colors hover:border-status-blue/50 hover:bg-surface-container-low md:gap-4 md:p-8"
            >
              <div className="flex min-w-0 items-center gap-3 md:gap-4">
                <FileText
                  aria-hidden="true"
                  className="size-5 shrink-0 text-text-muted transition-colors group-hover:text-status-blue md:size-8"
                />
                <div className="space-y-1">
                  <span className="hidden font-mono-label text-mono-label text-text-muted sm:block">
                    Antes de irte
                  </span>
                  <h3 className="font-body-md text-body-md text-text-primary transition-colors group-hover:text-status-blue md:font-headline-md md:text-headline-md">
                    Llevate el CV
                  </h3>
                </div>
              </div>
              <ArrowRight
                aria-hidden="true"
                className="hidden size-6 shrink-0 text-text-muted transition-colors group-hover:text-status-blue sm:block"
              />
            </Link>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
