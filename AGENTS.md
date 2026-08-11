# AGENTS.md

## Contexto de trabajo

Este repositorio contiene un portfolio profesional.

Antes de realizar cambios, revisar:

- `CLAUDE.md` → contexto técnico y reglas específicas del proyecto.
- `projects.md` → objetivo, usuarios, tecnologías y alcance.
- `/docs` → documentación adicional y decisiones del proyecto.
- Referencias visuales de Stitch → fuente principal para la implementación de UI.

---

## Forma de trabajo

Antes de implementar cambios importantes:

1. Analizar el contexto existente.
2. Revisar documentación relacionada.
3. Proponer un plan cuando la tarea tenga múltiples pasos.
4. Implementar de forma incremental.
5. Verificar el resultado antes de finalizar.

---

## Desarrollo

Priorizar:

- Código simple y mantenible.
- Componentes reutilizables cuando aporten valor.
- Buenas prácticas de React y Next.js.
- Performance y experiencia de usuario.
- Diseño responsive.
- Accesibilidad.

Evitar:

- Sobreingeniería.
- Dependencias innecesarias.
- Abstracciones prematuras.
- Duplicación de lógica.
- Soluciones difíciles de mantener.

---

## UI y diseño

Las referencias visuales generadas en Stitch son la fuente de verdad para la interfaz.

Al implementar:

- Mantener estructura, jerarquía y estilo visual.
- Respetar tipografías, espaciados y composición.
- Adaptar correctamente a móvil.
- Crear componentes consistentes.
- No modificar decisiones visuales importantes sin analizar el impacto.

---

## Calidad

Antes de terminar una tarea:

- Verificar que el proyecto compile.
- Revisar errores de consola.
- Confirmar comportamiento responsive.
- Eliminar código muerto.
- Mantener consistencia con el código existente.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
