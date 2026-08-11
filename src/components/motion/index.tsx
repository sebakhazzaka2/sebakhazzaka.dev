"use client";

import { LazyMotion, domAnimation, m } from "motion/react";
import type { ReactNode } from "react";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: ReactNode;
  /** Retraso en segundos, para escalonar elementos de una misma grilla. */
  delay?: number;
  className?: string;
};

/**
 * Fade-up al entrar en viewport. El respeto a `prefers-reduced-motion` (y el
 * fallback sin JS) se resuelve por CSS sobre `[data-reveal]` en globals.css,
 * no con una rama en JS: así no hay diferencia entre lo que renderiza el
 * server y lo que hidrata el cliente.
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
        transition={{ duration: 0.5, delay, ease: EASE_OUT_EXPO }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

type RevealLinesProps = {
  lines: string[];
  className?: string;
  lineClassName?: string;
};

/**
 * Stagger línea por línea, sólo para el titular del hero — el resto del
 * sitio sigue usando <Reveal> para no multiplicar primitivas sin necesidad.
 */
export function RevealLines({ lines, className, lineClassName }: RevealLinesProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      <div data-reveal className={className}>
        {lines.map((line, index) => (
          <div key={line} className="overflow-hidden">
            <m.div
              className={lineClassName}
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: EASE_OUT_EXPO,
              }}
            >
              {line}
            </m.div>
          </div>
        ))}
      </div>
    </LazyMotion>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  /** Segundos entre cada StaggerItem hijo. */
  step?: number;
};

/**
 * Reemplaza el patrón `delay={index * 0.1}` repetido en cada grilla: el
 * padre orquesta, los hijos sólo declaran la variante `item`.
 */
export function Stagger({ children, className, step = 0.08 }: StaggerProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        data-reveal
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: step } },
        }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <m.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: EASE_OUT_EXPO },
        },
      }}
    >
      {children}
    </m.div>
  );
}

type MagneticProps = {
  children: ReactNode;
  className?: string;
  /** Cuánto se desplaza hacia el cursor, en px. Sutil a propósito. */
  strength?: number;
};

/**
 * Desplazamiento sutil hacia el cursor. Sólo para los dos CTAs primarios —
 * no es un efecto para repetir en toda tarjeta clickeable.
 */
export function Magnetic({ children, className, strength = 8 }: MagneticProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        data-motion
        className={className}
        onPointerMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          const x = event.clientX - rect.left - rect.width / 2;
          const y = event.clientY - rect.top - rect.height / 2;
          event.currentTarget.style.setProperty(
            "--magnetic-x",
            `${(x / rect.width) * strength}px`,
          );
          event.currentTarget.style.setProperty(
            "--magnetic-y",
            `${(y / rect.height) * strength}px`,
          );
        }}
        onPointerLeave={(event) => {
          event.currentTarget.style.setProperty("--magnetic-x", "0px");
          event.currentTarget.style.setProperty("--magnetic-y", "0px");
        }}
        style={{
          transform: "translate(var(--magnetic-x, 0px), var(--magnetic-y, 0px))",
          transition: "transform 0.2s var(--ease-out-quart, ease-out)",
        }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
