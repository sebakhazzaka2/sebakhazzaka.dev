import { MonoTag } from "@/components/mono-tag";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { site } from "@/content/site";

/**
 * Placeholder de la landing: sólo verifica que el chrome y los primitivos de
 * layout compongan bien. Las 5 secciones reales entran en los pasos 5-7.
 */
export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-margin-mobile pb-section-gap md:px-margin-desktop">
      <Section className="mt-32 md:mt-48 mb-section-gap">
        <Reveal>
          <p className="font-mono-label text-mono-label uppercase tracking-widest text-status-blue">
            {site.role}
          </p>
          <h1 className="mt-6 max-w-3xl font-headline-lg-mobile text-headline-lg-mobile text-text-primary md:font-headline-lg md:text-headline-lg">
            {site.name}
          </h1>
          <p className="mt-6 max-w-[65ch] font-body-lg text-body-lg text-text-secondary">
            Sitio en construcción — el contenido real entra en los próximos
            pasos.
          </p>
        </Reveal>
      </Section>

      <Section id="stack">
        <SectionHeading>STACK</SectionHeading>
        <Reveal className="flex flex-wrap gap-2">
          {site.tagline.split(" · ").map((tech) => (
            <MonoTag key={tech}>{tech}</MonoTag>
          ))}
        </Reveal>
      </Section>
    </div>
  );
}
