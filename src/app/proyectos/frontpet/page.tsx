import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudy } from "@/components/case-study/case-study";
import { getProject } from "@/content/projects";

const project = getProject("frontpet");

export const metadata: Metadata = project
  ? {
      title: `${project.title} — Case Study`,
      description: project.oneLiner,
    }
  : {};

export default function FrontpetPage() {
  if (!project) notFound();
  return <CaseStudy project={project} />;
}
