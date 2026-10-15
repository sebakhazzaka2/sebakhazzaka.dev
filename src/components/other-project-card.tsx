import { ExternalLink } from "lucide-react";

import { MonoTag } from "@/components/mono-tag";
import type { OtherProject } from "@/content/projects";

export function OtherProjectCard({ project }: { project: OtherProject }) {
  return (
    <div className="flex h-full flex-col gap-4 border border-border-slate bg-[#111111] p-8 transition-colors hover:border-[#444444]">
      <p className="font-mono-label text-mono-label uppercase tracking-widest text-text-muted">
        {project.kind}
      </p>
      <h3 className="font-headline-md text-headline-md text-text-primary">
        {project.title}
      </h3>
      <p className="flex-grow font-body-md text-body-md text-text-secondary">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <MonoTag key={tech}>{tech}</MonoTag>
        ))}
      </div>
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-mono-code text-mono-code text-status-blue underline decoration-status-blue/30 transition-colors hover:text-text-primary"
      >
        {project.hrefLabel}
        <ExternalLink aria-hidden="true" className="size-4" />
      </a>
    </div>
  );
}
