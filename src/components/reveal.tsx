"use client";

import { LazyMotion, domAnimation, m } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Retraso en segundos, para escalonar elementos de una misma grilla. */
  delay?: number;
  className?: string;
};

/**
 * Único wrapper de animación del sitio: fade-up al entrar en viewport.
 *
 * `domAnimation` en vez del bundle completo de motion (~5KB vs ~35KB). Todo lo
 * que anima pasa por acá, así ningún otro componente importa motion y el resto
 * del árbol sigue siendo Server Components.
 *
 * El respeto a `prefers-reduced-motion` (y el fallback sin JS) se resuelve por
 * CSS sobre `[data-reveal]` en globals.css, no con una rama en JS: así no hay
 * diferencia entre lo que renderiza el server y lo que hidrata el cliente.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        data-reveal
        className={className}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
