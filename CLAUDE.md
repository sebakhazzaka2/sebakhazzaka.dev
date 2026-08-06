# CLAUDE.md

## Proyecto

Portfolio profesional personal.

Este archivo contiene instrucciones específicas para trabajar en este repositorio.

Para contexto general consultar:

- `projects.md` → objetivo, usuarios, alcance y tecnologías.
- `AGENTS.md` → reglas generales de trabajo.
- `/docs` → documentación y decisiones del proyecto.

---

# Stack

Tecnologías principales:

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

Usar las capacidades nativas del stack antes de agregar nuevas herramientas.

No agregar librerías externas salvo que exista una necesidad clara.

---

# Arquitectura

Priorizar:

- Componentes reutilizables.
- Separación clara de responsabilidades.
- Código fácil de entender y mantener.
- Estructura preparada para crecimiento sin sobreingeniería.

Preferir:

- Server Components por defecto cuando aplique.
- Client Components únicamente cuando sean necesarios.
- TypeScript estricto.
- Componentes pequeños y enfocados.

---

# Estructura esperada

Mantener una organización clara:
src/
├── app/
├── components/
├── sections/
├── projects/
├── styles/
└── assets/

La estructura puede adaptarse si existe una razón técnica.

---

# Rutas principales

El portfolio tendrá:
/landing-page
Landing principal.

/about-me
Información profesional.

/frontpet
Caso de estudio FrontPet.

/consultorio
Caso de estudio Consultorio.

/cv
Caso de estudio Consultorio.

Currículum.

---

# Diseño

Las referencias generadas en Stitch son la fuente principal de diseño.

Al implementar una interfaz:

- Mantener fidelidad visual.
- Respetar jerarquías, espacios y composición.
- Crear componentes consistentes.
- Adaptar correctamente a responsive.
- Priorizar una experiencia profesional.

No reemplazar diseños existentes por soluciones genéricas.

---

# Estilos

Usar Tailwind CSS como sistema principal.

Mantener:

- Consistencia de espaciados.
- Tokens reutilizables cuando sea necesario.
- Tipografía coherente.
- Diseño limpio.

Evitar:

- CSS duplicado.
- Valores arbitrarios sin justificación.
- Soluciones difíciles de mantener.

---

# Contenido

La información de proyectos debe mantenerse separada de la lógica visual cuando sea posible.

Los casos de estudio deben priorizar:

- Problema.
- Solución.
- Tecnologías utilizadas.
- Decisiones técnicas.
- Resultado obtenido.

El contenido debe estar orientado a mostrar experiencia profesional.

---

# Performance

Prioridades:

- Buen Core Web Vitals.
- Imágenes optimizadas.
- Carga rápida.
- SEO correcto.
- Accesibilidad.

Evitar:

- Dependencias pesadas.
- JavaScript innecesario.
- Componentes client-side sin necesidad.

---

# Antes de implementar

Para cambios importantes:

1. Revisar documentación existente.
2. Entender la intención del diseño.
3. Crear un plan si la tarea tiene múltiples pasos.
4. Implementar.
5. Verificar build y comportamiento.

---

# Validación

Antes de finalizar:

Ejecutar:
npm run lint
npm run build

Confirmar:

- No hay errores TypeScript.
- No hay errores de consola.
- Responsive correcto.
- La interfaz mantiene el diseño esperado.

---

# Git

Usar commits claros:

Formato:
tipo(alcance): descripción (EN INGLES)

Ejemplos:
feat(home): create hero section
feat(projects): add FrontPet case study
fix(ui): improve mobile navigation
docs: update documentation