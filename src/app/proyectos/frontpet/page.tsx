import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudy } from "@/components/case-study/case-study";
import { getProject } from "@/content/projects";
import { buildMetadata } from "@/lib/metadata";

const project = getProject("frontpet");

export const metadata: Metadata = project
  ? buildMetadata({
      title: project.title,
      description: project.oneLiner,
      path: "/proyectos/frontpet",
      image: "/proyectos/frontpet/opengraph-image",
    })
  : {};

export default function FrontpetPage() {
  if (!project) notFound();
  return <CaseStudy project={project} />;
}
