import { ArrowRight } from "lucide-react";
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

      <Section id="stack" className="mb-section-gap">
        <SectionHeading>CORE_STACK</SectionHeading>
        <Reveal>
          <StackSection />
        </Reveal>
      </Section>

      <Section className="mb-section-gap">
        <Reveal>
          <Link
            href="/cv"
            className="inline-flex items-center gap-2 font-mono-label text-mono-label text-status-blue transition-colors hover:text-text-primary"
          >
            Ver CV completo
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </Reveal>
      </Section>
    </div>
  );
}
