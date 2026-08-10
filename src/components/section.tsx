import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  /** Ancla para la navegación del header. */
  id?: string;
  className?: string;
};

export function Section({ children, id, className }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      {children}
    </section>
  );
}

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Encabezado de sección de la landing, en [BRACKET_STYLE] como el diseño de
 * Stitch. Los corchetes son decorativos: se agregan acá y no en el contenido,
 * para que el texto quede limpio en el outline del documento.
 */
export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "font-headline-md text-headline-md text-text-primary mb-12 border-b border-border-slate pb-4",
        className,
      )}
    >
      <span aria-hidden="true" className="text-text-muted">
        [
      </span>
      {children}
      <span aria-hidden="true" className="text-text-muted">
        ]
      </span>
    </h2>
  );
}

/**
 * Encabezado de subsección para los case studies: mono, uppercase y discreto,
 * para que no compita con el h1 de la página.
 */
export function SubHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "font-mono-label text-mono-label text-text-muted uppercase tracking-widest",
        className,
      )}
    >
      {children}
    </h2>
  );
}
