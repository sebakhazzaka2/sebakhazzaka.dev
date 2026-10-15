import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { StatusPill } from "@/components/status-pill";
import { projects } from "@/content/projects";

/**
 * Prueba social justo debajo del hero: un screenshot real por cada sistema en
 * producción, no una promesa. Muestra todos los proyectos "live".
 */
export function ProofBanner() {
  const liveProjects = projects.filter(
    (project) => project.status === "live" && project.links.live,
  );
  if (liveProjects.length === 0) return null;

  return (
    <div className="mb-12 space-y-6">
      {liveProjects.map((project) => (
        <section
          key={project.slug}
          className="flex flex-col items-center gap-8 border border-border-slate bg-[#1A1A1A] p-6 md:flex-row md:p-8"
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border-slate md:w-1/2">
            <Image
              src={project.heroImage.src}
              alt={project.heroImage.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>

          <div className="flex-grow space-y-4">
            <StatusPill label="LIVE" variant="live" />
            <div className="space-y-1">
              <p className="font-mono-label text-mono-label uppercase tracking-widest text-text-muted">
                {project.title}
              </p>
              <p className="font-body-md text-body-md text-text-primary">
                {project.beforeAfterImpact.impact}
              </p>
              <p className="font-body-md text-body-md text-text-secondary">
                {project.oneLiner}
              </p>
            </div>
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cta px-6 py-2 font-mono-label text-mono-label text-white transition-opacity hover:opacity-90"
            >
              Ver sistema
              <ExternalLink aria-hidden="true" className="size-[18px]" />
            </a>
          </div>
        </section>
      ))}
    </div>
  );
}
