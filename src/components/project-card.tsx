import { ArrowRight, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { MonoTag } from "@/components/mono-tag";
import { StatusPill } from "@/components/status-pill";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex h-full flex-col border border-border-slate bg-[#111111] transition-colors hover:border-[#444444]">
      <div className="relative h-48 w-full border-b border-border-slate">
        <Image
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top"
        />
        {project.heroImage.isPlaceholder && (
          <span className="absolute right-2 top-2 bg-background/90 px-2 py-1 font-mono-code text-[11px] text-text-muted">
            Vista previa de diseño, no producción
          </span>
        )}
        <div className="absolute left-3 top-3">
          <StatusPill
            label={project.statusLabel}
            variant={project.status === "live" ? "live" : "development"}
          />
        </div>
      </div>

      <div className="flex flex-grow flex-col p-8">
        <h3 className="mb-2 font-headline-md text-headline-md text-text-primary">
          {project.title}
        </h3>
        <p className="mb-6 flex-grow font-body-md text-body-md text-text-secondary">
          {project.oneLiner}
        </p>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <MonoTag key={tech}>{tech}</MonoTag>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link
            href={`/proyectos/${project.slug}`}
            className="inline-flex items-center gap-2 bg-cta px-4 py-2 font-mono-label text-mono-label text-white transition-opacity hover:opacity-90"
          >
            Ver case study
            <ArrowRight aria-hidden="true" className="size-[18px]" />
          </Link>
          {project.links.demo && (
            <a
              href={project.links.demo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-code text-mono-code text-status-blue underline decoration-status-blue/30 transition-colors hover:text-text-primary"
            >
              Probar demo →
            </a>
          )}
          <a
            href={project.links.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-code text-mono-code text-text-muted underline decoration-status-blue/30 transition-colors hover:text-primary"
          >
            Ver en GitHub →
          </a>
        </div>
        {project.links.demo && (
          <p className="mt-3 flex items-start gap-1.5 font-mono-code text-[11px] leading-snug text-text-muted">
            <Info aria-hidden="true" className="mt-0.5 size-3.5 shrink-0" />
            {project.links.demo.note.es}
          </p>
        )}
      </div>
    </div>
  );
}
