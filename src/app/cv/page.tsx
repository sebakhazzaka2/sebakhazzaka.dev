import type { Metadata } from "next";

import { CvCard } from "@/components/cv-card";
import { cvOptions } from "@/content/cv";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "CV",
  description: `Currículum de ${site.name} — ${site.role}. Disponible en español, inglés y portugués, versión visual y ATS.`,
  path: "/cv",
});

export default function CvPage() {
  return (
    <div className="mx-auto w-full max-w-[1000px] px-margin-mobile py-12 pt-32 md:px-margin-desktop md:py-24">
      <div className="mb-16 border-b border-border-slate pb-8">
        <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-text-primary md:font-headline-lg md:text-headline-lg">
          Currículum Vitae
        </h1>
        <p className="mt-4 max-w-[65ch] font-body-lg text-body-lg text-text-secondary">
          Disponible en tres idiomas. Versión ATS y visual por idioma.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {cvOptions.map((cv) => (
          <CvCard key={cv.language} cv={cv} />
        ))}
      </div>
    </div>
  );
}
