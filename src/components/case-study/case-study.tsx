import { ArrowLeft, ArrowRight, Code, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { BeforeAfterImpact } from "@/components/before-after-impact";
import { DecisionCard } from "@/components/case-study/decision-card";
import { ResultStat } from "@/components/case-study/result-stat";
import { MonoTag } from "@/components/mono-tag";
import { StatusPill } from "@/components/status-pill";
import { SubHeading } from "@/components/section";
import { projects, type Project } from "@/content/projects";

type CaseStudyProps = {
  project: Project;
};

export function CaseStudy({ project }: CaseStudyProps) {
  const otherProject = projects.find((p) => p.slug !== project.slug);

  return (
    <div className="mx-auto w-full max-w-[1200px] space-y-section-gap px-margin-mobile py-12 pt-32 md:px-margin-desktop md:py-24">
      <div>
        <Link
          href="/#proyectos"
          className="group inline-flex items-center gap-2 font-mono-label text-mono-label text-text-secondary transition-colors hover:text-text-primary"
        >
          <ArrowLeft
            aria-hidden="true"
            className="size-4 transition-transform group-hover:-translate-x-1"
          />
          VOLVER_A_PROYECTOS
        </Link>
      </div>

      {/* Header */}
      <section className="space-y-8">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <StatusPill
              label={project.statusLabel}
              variant={project.status === "live" ? "live" : "development"}
            />
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-text-primary md:font-headline-lg md:text-headline-lg">
            {project.title}
          </h1>
          <p className="font-mono-code text-mono-code text-text-muted">
            {project.metaLine}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <MonoTag key={tech} className="border border-border-slate">
              {tech}
            </MonoTag>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-4 sm:flex-row">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-cta px-6 py-3 font-mono-label text-mono-label text-white transition-opacity hover:opacity-90"
            >
              Ver sistema
              <ExternalLink aria-hidden="true" className="size-4" />
            </a>
          )}
          <a
            href={project.links.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border-slate bg-surface-container-lowest px-6 py-3 font-mono-label text-mono-label text-text-primary transition-colors hover:bg-surface-container"
          >
            Ver repo
            <Code aria-hidden="true" className="size-4" />
          </a>
        </div>

        <div className="relative mt-12 aspect-video overflow-hidden rounded-lg border border-border-slate">
          <Image
            src={project.heroImage.src}
            alt={project.heroImage.alt}
            fill
            sizes="(min-width: 1200px) 1200px, 100vw"
            className="object-cover object-top"
            priority
          />
          {project.heroImage.isPlaceholder && (
            <span className="absolute right-3 top-3 bg-background/90 px-3 py-1.5 font-mono-code text-xs text-text-muted">
              Vista previa de diseño, no producción
            </span>
          )}
        </div>

        {project.screenshots && project.screenshots.length > 0 && (
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            {project.screenshots.map((screenshot) => (
              <div
                key={screenshot.src}
                className="relative aspect-video overflow-hidden rounded-lg border border-border-slate"
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        )}
      </section>

      <BeforeAfterImpact data={project.beforeAfterImpact} />

      {/* Problem & Solution */}
      <section className="grid grid-cols-1 gap-gutter md:grid-cols-2">
        <div className="space-y-4">
          <SubHeading>El problema</SubHeading>
          <p className="max-w-[65ch] font-body-md text-body-md text-text-secondary">
            {project.problem}
          </p>
        </div>
        <div className="space-y-4">
          <SubHeading>La solución</SubHeading>
          <p className="max-w-[65ch] font-body-md text-body-md text-text-secondary">
            {project.solution}
          </p>
        </div>
      </section>

      {/* Technical Decisions */}
      <section className="space-y-8">
        <SubHeading className="border-b border-border-slate pb-4">
          Decisiones técnicas
        </SubHeading>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {project.decisions.map((decision) => (
            <DecisionCard key={decision.title} decision={decision} />
          ))}
        </div>
        {project.links.adrs && (
          <a
            href={project.links.adrs}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono-label text-mono-label text-status-blue transition-colors hover:text-text-primary"
          >
            Ver todos los ADRs
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        )}
      </section>

      {/* Results */}
      <section className="space-y-8 border-t border-border-slate pt-12">
        <h2 className="font-headline-md text-headline-md text-text-primary">
          Resultados
        </h2>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border-slate bg-border-slate sm:grid-cols-3">
          {project.results.map((stat) => (
            <ResultStat key={stat.label} stat={stat} />
          ))}
        </div>
      </section>

      {/* Learnings */}
      <section className="max-w-[800px] space-y-6 border-l-2 border-border-slate py-4 pl-6">
        <SubHeading>Post-mortem / Aprendizajes</SubHeading>
        <p className="max-w-[65ch] font-body-lg text-body-lg text-text-secondary">
          {project.learnings}
        </p>
      </section>

      {/* Next project */}
      {otherProject && (
        <section className="border-t border-border-slate pt-16">
          <Link
            href={`/proyectos/${otherProject.slug}`}
            className="group flex items-center justify-between gap-4 border border-border-slate bg-surface-container-lowest p-8 transition-colors hover:bg-surface-container-low"
          >
            <div className="space-y-1">
              <span className="font-mono-label text-mono-label text-text-muted">
                Siguiente caso de estudio
              </span>
              <h3 className="font-headline-md text-headline-md text-text-primary transition-colors group-hover:text-status-blue">
                {otherProject.title}
              </h3>
            </div>
            <ArrowRight
              aria-hidden="true"
              className="size-8 text-text-muted transition-colors group-hover:text-status-blue"
            />
          </Link>
        </section>
      )}
    </div>
  );
}
