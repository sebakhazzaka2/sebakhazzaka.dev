"use client";

import type { ReactNode } from "react";

/**
 * Envoltorio del hero con un realce de fondo: grilla de hairlines a baja
 * opacidad con un resplandor radial que sigue al cursor. El listener vive en
 * el contenedor (nunca bloquea clicks); la grilla decorativa es
 * `pointer-events-none` y sólo actualiza dos custom properties por
 * pointermove — cero re-render de React. No es un cursor custom ni parallax
 * (la auditoría los prohíbe explícitamente). Se apaga en touch (chequeo de
 * `pointerType`) y en prefers-reduced-motion vía CSS, no vía rama de JS.
 */
export function HeroGrid({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative"
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        event.currentTarget.style.setProperty("--hero-glow-x", `${x}%`);
        event.currentTarget.style.setProperty("--hero-glow-y", `${y}%`);
      }}
    >
      <div
        aria-hidden="true"
        data-motion
        className="pointer-events-none absolute inset-0 -z-10 hidden opacity-[0.12] [background-image:linear-gradient(to_right,var(--color-border-slate)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border-slate)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(560px_circle_at_var(--hero-glow-x,50%)_var(--hero-glow-y,0%),black,transparent)] sm:block"
      />
      {children}
    </div>
  );
}
