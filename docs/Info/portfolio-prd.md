# Portfolio — Documento de Requisitos
### Sebastián Khazzaka · v1.0 · 05/08/2026

**Tipo de documento:** Product Requirements Document (PRD)
**Entrada:** Auditoría v2 + prototipo `portfolio.html` + `github-profile-README.md` + `cv-correcciones.md` + `linkedin-contenido.md`
**Perspectiva:** Senior Software Engineer + Recruiter técnico
**Lo que este documento NO es:** código. Es la especificación desde la que se escribe el código.

---

## 1. Veredicto ejecutivo

El prototipo generado en la sesión anterior es un buen punto de partida de diseño pero **no puede desplegarse tal cual**. Tiene 6 bugs técnicos reales, 4 decisiones de arquitectura que contradicen el stack que el portfolio pretende demostrar, y le faltan las dos piezas de contenido que más importan según la auditoría: los case studies.

Desde el ángulo del recruiter técnico: el prototipo actual dice "desarrollé con Next.js 16" en el CV y entrega un `.html` estático. Eso es exactamente el tipo de inconsistencia que busco cuando desconfío de un candidato.

Desde el ángulo del Senior Engineer: el HTML tiene IDs duplicados, mezcla inline styles con clases, no tiene hamburger menu funcional, y la fuente Inter está declarada pero no importada. Son errores de código junior en un portfolio que pretende demostrar criterio de semi-senior.

**Decisión arquitectónica obligatoria antes de escribir una línea:** el portfolio tiene que estar construido en Next.js 16 + App Router + TypeScript + Tailwind 4. No como ejercicio académico sino porque si no, el portfolio en sí mismo es evidencia en contra del CV que dice dominarlo.

---

## 2. Hallazgos: bugs e inconsistencias en el prototipo actual

Estos problemas deben corregirse antes de construir. No son preferencias de estilo.

### 2.1 Bugs técnicos reales

**Bug #1 — ID duplicado en `#prueba`**
El `<section>` tiene `id="prueba"` y la `<div>` interna también tiene `id="prueba"`. HTML válido prohíbe IDs duplicados. Los navegadores resuelven esto de forma inconsistente y los lectores de pantalla lo descartan. La CSS de `#prueba` se aplica a ambos elementos, causando comportamiento visual no determinista.

**Bug #2 — Fuente Inter no importada**
`font-family: 'Inter', system-ui` cae directamente a `system-ui` porque Inter no tiene `@import` ni `<link>`. En Chrome/macOS el fallback se parece a Inter y el problema es invisible en dev, pero en Windows el resultado es diferente. En Next.js esto se resuelve con `next/font/google` sin costo de layout shift.

**Bug #3 — Nav colapsado en mobile**
A 320px los 4 items del nav (`Proyectos`, `Stack`, `Proceso`, `Contacto`) se comprimen o desbordan. No hay breakpoint ni hamburger menu. El audit requiere breakpoints en 320/768/1024/1440 — este diseño falla en 320px.

**Bug #4 — `section:first-of-type` en conflicto**
La regla `section:first-of-type { padding-top: 8rem; }` y el `#hero { padding-top: 9rem; }` existen simultáneamente. El `#hero` tiene `style="max-width:900px"` inline, mientras que todos los demás `section` tienen `max-width` en la hoja de estilo. Los inline styles rompen la consistencia y harán que cualquier futura edición sea un juego de precedencia de especificidad.

**Bug #5 — `<code>` dentro de `<em>` en las evidence cards**
El bloque de Flyway tiene `<code>` dentro de texto itálico. El resultado visual es inconsistente entre navegadores y la intención semántica es ambigua.

**Bug #6 — `rel="noopener"` sin `rel="noreferrer"`**
Los links externos usan solo `rel="noopener"`. La práctica actual (y la que usan los linters de 2026) es `rel="noopener noreferrer"`. Pequeño pero es exactamente el tipo de detalle que un revisor técnico detecta.

### 2.2 Inconsistencias de contenido

**Inconsistencia #1 — Email diferente en README vs portfolio**
El `github-profile-README.md` usa `khazzaka2008@hotmail.com` (el viejo); el `portfolio.html` usa `sebastian.khazzaka@gmail.com` (el nuevo que aún no existe). Antes de publicar nada, la dirección profesional tiene que existir y ser la misma en todos los canales.

**Inconsistencia #2 — Dominio ficticio en JSON-LD**
`"url": "https://sebakhazzaka.dev"` aparece en el JSON-LD. El dominio no fue comprado. Si el portfolio se publica en Vercel antes de comprar el dominio, el schema structured data apunta a una URL inexistente, lo que penaliza SEO.

**Inconsistencia #3 — LinkedIn URL inferida**
`https://linkedin.com/in/sebastian-khazzaka` es un slug inferido, no confirmado. Una URL de LinkedIn incorrecta en el portfolio es embarazoso.

**Inconsistencia #4 — Evidence fabricada en "Cómo trabajo"**
Las citas de las evidence cards ("ADR 012 — UUID v7 para entidades públicas vs CUID vs ULID...", los nombres de archivos Flyway) son ejemplos sintéticos, no extraídos de los repos reales. Un recruiter técnico que abre el repositorio y busca `ADR 012` o `V2__add_tenant_id.sql` y no los encuentra destruye completamente la credibilidad del portfolio. Esta sección necesita citas y rutas de archivo verificadas contra los repos reales.

**Inconsistencia #5 — El portfolio se contradice con el CV**
El footer dice "Construido con HTML + Tailwind" en un portfolio que afirma dominar Next.js 16. Un Engineering Manager que lo note cerrará la tab. El portfolio tiene que ser el primer y mejor ejemplo del stack que declara.

### 2.3 Contenido prometido que no existe

**Faltante #1 — Case studies** (impacto crítico)
La auditoría especifica `/proyectos/consultorio` y `/proyectos/frontpet` con estructura: `problema → solución → decisiones clave → resultados → qué aprendí`. El prototipo tiene tarjetas que llevan al GitHub, no a case studies. Esto es el contenido más diferenciador del portfolio y está completamente ausente.

**Faltante #2 — Sección "Sobre mí"**
La auditoría propone `/sobre-mi`. El prototipo no tiene esta página ni sección dedicada. El hero actúa parcialmente como bio pero no hay espacio para la narrativa completa: de dónde viene, qué construyó, a dónde va.

**Faltante #3 — Descarga de CVs**
La auditoría propone `/cv` con los 3 PDFs. El prototipo dice "pedilo por email o LinkedIn" — exactamente lo que no debe decir. Cada clic que no completa la acción es un candidato perdido.

**Faltante #4 — Foto de perfil**
No hay imagen del autor en ningún archivo generado. En el mercado LATAM, los portfolios sin foto son estadísticamente menos contactados. Es un campo vacío que el recruiter nota.

**Faltante #5 — Screenshot del sistema live**
La auditoría dice: "Screenshot del sistema live + 'Cliente activo desde mayo 2026'". El proof banner tiene texto pero no imagen. La imagen convierte mejor que el texto.

**Faltante #6 — Analytics**
La auditoría menciona Plausible. Sin analytics no sabés cuántos recruiters visitan el portfolio ni qué secciones leen.

**Faltante #7 — Open Graph image**
Las metas incluyen `og:title` y `og:description` pero no `og:image`. Cuando alguien comparte el link en Slack, LinkedIn o WhatsApp, aparece sin preview visual. Esto destruye el CTR de shares.

---

## 3. Decisiones de arquitectura

### 3.1 Stack — No negociable

| Capa | Tecnología | Justificación |
|---|---|---|
| Framework | **Next.js 16 (App Router)** | Declarado en el CV. El portfolio lo valida o lo invalida. |
| Lenguaje | **TypeScript strict** | Declarado en el CV. Inconsistente usarlo en Frontpet pero no aquí. |
| Estilos | **Tailwind CSS 4** | Declarado en el CV. CDN en producción es inaceptable. |
| Componentes | **shadcn/ui** | Declarado en el CV. Reutiliza lo que ya sabés de Frontpet. |
| Animaciones | **Framer Motion** | Declarado en el CV. `@media prefers-reduced-motion` obligatorio. |
| Deploy | **Vercel** | Especificado en la auditoría. Integración nativa con GitHub. |
| Analytics | **Plausible** | Especificado en la auditoría. Privacy-first, sin cookies. |
| Fuentes | **`next/font/google` (Inter)** | Zero layout shift, no fetches en runtime. |
| Imágenes | **`next/image`** | WebP automático, lazy load, placeholder blur. |

**Por qué no HTML estático:** el portfolio tiene múltiples rutas (landing, case studies, sobre-mi, cv), necesita metadata dinámica por ruta, y tiene que demostrar App Router. Un `.html` no puede hacer ninguna de esas cosas.

### 3.2 Estructura de rutas (App Router)

```
app/
  layout.tsx          ← RootLayout: nav, footer, analytics, fonts
  page.tsx            ← Landing: Hero + Prueba + Proyectos + Stack + Cómo trabajo + Contacto
  sobre-mi/
    page.tsx          ← Bio extendida + foto + timeline
  proyectos/
    consultorio/
      page.tsx        ← Case study: Consultorio Odontológico
    frontpet/
      page.tsx        ← Case study: Frontpet
  cv/
    page.tsx          ← Descarga de CVs (ES/EN/PT)
  not-found.tsx       ← 404 personalizado
  sitemap.ts          ← Sitemap dinámico
  robots.ts           ← robots.txt
```

### 3.3 i18n — Decisión diferida pero planificada

El portfolio es actualmente en español. El mercado objetivo incluye Brasil (PT) y potencialmente EN. Implementar i18n completo desde el inicio agrega complejidad significativa.

**Recomendación:** lanzar en ES. Planificar la estructura para que `next-intl` pueda agregarse después sin reescribir componentes. No usar strings hardcodeados en componentes — centralizarlos desde el inicio en un objeto de configuración aunque no haya traducción aún.

### 3.4 Modo oscuro

shadcn/ui + Tailwind 4 soportan dark mode nativamente. El prototipo es dark-only. Implementar un toggle dark/light usando `next-themes` da una demostración práctica del stack que no cuesta mucho tiempo.

---

## 4. Especificación de páginas

### 4.1 Landing (`/`)

La landing es una single page con 6 secciones. Cada sección es un componente independiente.

#### Sección 1: Hero

**Propósito:** captura de atención en 5 segundos. Debe responder: quién sos, qué hacés, por qué importa.

**Contenido requerido:**
- Badge/chip: `Full-Stack Developer · ES · PT · EN`
- H1: requiere revisión. "Código documentado, decisiones trazables" es bueno pero abstracto para un primer impacto. Considerar alternativa que combine la diferenciación con prueba concreta: el H1 puede ser creativo pero el subtítulo debe ser inequívoco.
- Subtítulo: `Java 21 · Spring Boot · Next.js 16 · React 19` + la frase de los dos clientes
- 3 CTAs: `Ver proyectos` (primario, scroll), `GitHub` (outline), `Contacto` (outline)

**Lo que NO debe estar en el hero:** la lista de skills, descripción de proyectos, stack completo.

**Animaciones:** fade-up escalonado. `prefers-reduced-motion: reduce` → sin animación, contenido visible inmediatamente.

**Requisitos técnicos:** el H1 debe ser indexable (no imagen, no canvas). El subtítulo contiene keywords ATS relevantes.

#### Sección 2: Prueba social

**Propósito:** establecer credibilidad antes de que el visitante llegue a los proyectos. Un recruiter técnico que duda se detiene aquí o rebota.

**Contenido requerido:**
- Badge `● LIVE` (verde, con pulso CSS para llamar la atención)
- Link verificable a `neodentalmaster.turnosuy.com`
- Screenshot del sistema (ver requisitos de imágenes, §6)
- Texto exacto: *"Sistema en producción desde mayo 2026. Cliente activo pagando."*
- Segunda línea: *"Segundo proyecto: propuesta comercial firmada, hito de cobro septiembre 2026."*

**Lo que esta sección NO es:** una sección de proyectos. Es una señal de credibilidad, breve y verificable.

#### Sección 3: Proyectos

**Propósito:** mostrar los dos repos. NO son case studies aquí — son entradas al case study.

**Contenido requerido por tarjeta:**
- Nombre del proyecto con link a la página de case study (no al GitHub directamente)
- Status badge (Live / En desarrollo)
- Descripción de una línea orientada a negocio, no a tecnología
- Stack chips (máximo 8 — forzar priorización)
- Métricas reales verificables: commits, PRs, ADRs para Frontpet
- Link secundario al GitHub repo

**Decisión de diseño:** las tarjetas linkean a `/proyectos/consultorio` y `/proyectos/frontpet`, no a GitHub. GitHub es el CTA secundario. Si el recruiter va directo al GitHub sin leer el case study, perdiste la narrativa.

#### Sección 4: Stack técnico

Esta sección existe principalmente para ATS y búsqueda. Los visitantes humanos la escanean; los bots de búsqueda la indexan.

**Estructura requerida:** 6 categorías (Backend, Frontend, Testing, DevOps, Proceso, Idiomas). Ver bloque de skills en `cv-correcciones.md` como fuente de verdad.

**Decisión de diseño:** los items del stack no deben ser solo texto. Usar logos SVG para las tecnologías principales (Java, Spring Boot, Next.js, React, TypeScript, PostgreSQL, Docker) mejora el escaneo visual. Solo usar logos que existan en Simple Icons o similar — no crear logos propios.

**Advertencia:** no listar tecnologías que no aparecen en los repos. Cada item del stack es una pregunta potencial en una entrevista técnica.

#### Sección 5: Cómo trabajo

Esta es la sección más diferenciadora del portfolio. Ningún junior competidor la tiene. Se mantiene con las 4 tarjetas de evidencia pero con un cambio crítico: **las citas y rutas de archivo deben ser reales**.

**Las 4 tarjetas — especificación de contenido:**

**Tarjeta 1 — ADRs**
- Título: "Documento las decisiones, no solo el código."
- Cuerpo: el número real de ADRs en Frontpet (verificar contra el repo — el audit dice "al menos hasta ADR 017")
- Evidence: citar el título real de un ADR del repo, con la ruta real. Ejemplo format: `docs/decisions/ADR-012-*.md`
- CTA interno: link al directorio `docs/decisions/` del repo (se abre en nueva tab)

**Tarjeta 2 — Migraciones**
- Título: "Ninguna migración aplicada a mano en producción."
- Evidence: los nombres reales de los archivos de migración en ambos repos. Si la convención es `V1__init.sql`, citar el primer y último archivo real.
- Citar la ruta real en el repo.

**Tarjeta 3 — Deuda documentada y corregida**
- Título: "Corrijo lo que documento como deuda."
- Evidence: la frase exacta del README del consultorio y la frase exacta del CLAUDE.md de Frontpet. Ambas citadas con sus fuentes y links.
- Esta es la historia más poderosa. Merece el mayor espacio visual.

**Tarjeta 4 — Estimación**
- Título: "Estimo, mido y corrijo el error."
- Evidence: el dato exacto del ROADMAP (19h estimado, 26.5h real, qué causó el desvío). Link al ROADMAP.
- Este dato es verificable. Si el recruiter va al ROADMAP y el número está ahí, la credibilidad sube exponencialmente.

#### Sección 6: Contacto

**Contenido requerido:**
- Párrafo: disponibilidad + mercado + idiomas + CPF
- Email (profesional, debe existir antes de publicar)
- LinkedIn (slug verificado)
- GitHub
- Indicación de tiempo de respuesta esperado (ej: "respondo en menos de 24h")

**Decisión pendiente (ver §8):** ¿formulario de contacto o solo links? Un formulario convierte mejor pero requiere un endpoint (Resend, Formspree, o API route de Next.js). Definir antes de construir.

---

### 4.2 Case Study: Consultorio Odontológico (`/proyectos/consultorio`)

**Propósito:** transformar un GitHub repo en una narrativa de ingeniería que un EM puede leer en 5 minutos y concluir "sabe entregar".

**Estructura obligatoria:**

```
1. Header
   - Nombre del proyecto
   - Status: Live desde mayo 2026
   - Link al sistema + link al repo
   - Stack chips (completo para esta página)

2. El problema
   Una clínica odontológica en Uruguay manejaba turnos por WhatsApp.
   [Cuantificar si hay datos: X pacientes, X turnos/semana]
   Qué dolía, qué tenía que resolver.

3. La solución
   Qué se construyó exactamente. Módulos, funcionalidades.
   Screenshot del sistema (obligatorio).

4. Decisiones técnicas clave (3-5 decisiones, no más)
   Cada decisión con formato:
   - Qué se decidió
   - Por qué (trade-offs considerados)
   - Alternativa descartada
   Ejemplo: "Una instancia Docker por cliente vs multitenancy: el cálculo que hice"

5. Resultados
   - Métricas reales: uptime, tiempo de respuesta, [clientes, turnos gestionados si hay datos]
   - Estado actual del cliente
   - Deuda técnica documentada (el JWT en localStorage) — demostrar honestidad

6. Qué aprendí
   Lo que cambiaría. Lo que aplicaste en el siguiente proyecto.
   La historia del JWT → cookie HttpOnly va aquí, no en el landing.
```

**Requisitos de contenido:**
- Mínimo 1 screenshot del sistema en producción (captura real, no mockup)
- Mínimo 1 diagrama de arquitectura (puede ser simple: frontend → backend → DB → infra)
- Links verificables a commits o PRs representativos

**Longitud objetivo:** lectura de 4-6 minutos. No más.

---

### 4.3 Case Study: Frontpet (`/proyectos/frontpet`)

**Misma estructura que el consultorio, con variaciones:**

**Contexto especial:** este proyecto está en desarrollo. El case study debe ser honesto sobre eso. El EM que lo lea y vea honestidad sobre el estado del proyecto confía más, no menos.

**Secciones adicionales o modificadas:**

En lugar de "Resultados" (no hay producción aún): **"Proceso y progreso"**
- Sprint actual vs ROADMAP
- El análisis de estimación: 19h → 26.5h (incluir aquí el dato real del ROADMAP)
- Qué queda para MVP1

**Decisiones técnicas clave para este case study (mínimo):**
- Arquitectura por feature vs por capa — por qué se cambió respecto al consultorio
- UUID v7 para entidades públicas: el razonamiento
- Testcontainers sobre mocks: por qué cambia la calidad de los tests
- Multi-tenant ready en MVP1 single-tenant: la decisión de diseño

**El ADR como artefacto de ingeniería:**
En esta página, los ADRs merecen su propia subsección. No listar los 17 — elegir 3 representativos y mostrar el formato: contexto, decisión, consecuencias, alternativas. Esto es lo que diferencia a Sebastián de cualquier otro junior.

---

### 4.4 Sobre mí (`/sobre-mi`)

**Propósito:** la narrativa humana. El CV dice qué hizo; esta página dice quién es.

**Estructura:**
```
1. Foto + datos básicos
   Foto profesional (no selfie, no foto de WhatsApp).
   Nombre, rol, ubicación, idiomas.

2. El contexto
   Estudiante de Licenciatura en Sistemas en Uruguay.
   Empecé a programar [cuándo, por qué].
   [Sin mencionar que la carrera empezó tarde — la auditoría lo dice explícitamente]

3. Lo que me mueve
   No "me apasiona la tecnología" — eso lo dice todo el mundo.
   Específico: "me obsesiona la consistencia entre lo que digo que voy a entregar y lo que entrego"
   o algo igualmente concreto y verificable.

4. Cómo trabajo (resumen, diferente al de la landing)
   Más personal, menos lista. Un párrafo, no 4 tarjetas.

5. Fuera del código
   Una línea. Auténtico. No "me gusta aprender nuevas tecnologías".

6. CTAs
   → Ver proyectos
   → Descargar CV
   → Contacto
```

**Lo que NO va aquí:** el stack completo (ya está en el landing). La lista de skills (ya está en el landing). La historia del JWT (va en el case study).

---

### 4.5 CVs (`/cv`)

**Propósito:** descarga directa sin fricción.

**Estructura:**
```
3 cards, una por idioma:
  [🇺🇾] Español — CV Profesional
  [🇺🇸] English — Professional Resume
  [🇧🇷] Português — Currículo Profissional

Cada card:
  - Nombre del archivo
  - Botón "Descargar PDF"
  - Fecha de última actualización
  - Indicación ATS-friendly vs visual (si aplica)
```

**Requisitos técnicos:**
- Los PDFs se hospedan como archivos estáticos en `public/cv/`
- Los nombres de archivo deben incluir el nombre: `sebastian-khazzaka-cv-es.pdf`
- Configurar `Content-Disposition: attachment` para forzar descarga
- No bloquear indexación de la página (pero los PDFs pueden tener `X-Robots-Tag: noindex`)

---

## 5. Requisitos técnicos no funcionales

### 5.1 Performance

| Métrica | Target | Herramienta de verificación |
|---|---|---|
| Lighthouse Performance | ≥ 95 | `lighthouse` CLI o Chrome DevTools |
| Lighthouse Accessibility | ≥ 95 | idem |
| Lighthouse SEO | 100 | idem |
| LCP (Largest Contentful Paint) | < 2.5s | Core Web Vitals |
| CLS (Cumulative Layout Shift) | < 0.1 | Core Web Vitals |
| FID / INP | < 200ms | Core Web Vitals |

**Las acciones de Next.js que hacen esto alcanzable:**
- `next/image` para todas las imágenes: convierte a WebP, lazy load, placeholder blur
- `next/font` para Inter: elimina el request externo y el layout shift
- `loading="eager"` solo en la imagen hero (la que está above the fold)
- Framer Motion con `lazy` import y `AnimatePresence` solo cuando hay animaciones de salida

### 5.2 Accesibilidad

| Requisito | Estándar |
|---|---|
| Contraste de color | WCAG 2.1 AA (ratio ≥ 4.5:1 para texto normal, ≥ 3:1 para texto grande) |
| Navegación por teclado | Tab order lógico, focus visible, skip-to-content link |
| Screen reader | Landmarks semánticos (`<main>`, `<nav>`, `<footer>`), `aria-label` en nav |
| Imágenes | `alt` descriptivo en todas las imágenes contenido; `alt=""` en decorativas |
| Animaciones | `@media (prefers-reduced-motion: reduce)` desactiva todas las animaciones |
| Formulario (si existe) | Labels asociados, error messages con `role="alert"` |

**Verificación:** WAVE tool limpio. La auditoría lo requiere explícitamente porque el CV lista WCAG como skill — fallar en el propio portfolio es peor que no listarlo.

### 5.3 SEO

| Elemento | Requisito |
|---|---|
| `<title>` | Único por página, < 60 chars |
| `<meta name="description">` | Único por página, < 160 chars |
| Open Graph | `og:title`, `og:description`, `og:image` (1200×630px), `og:url`, `og:type` |
| Twitter Card | `twitter:card: summary_large_image` |
| JSON-LD | `Person` en el root layout; `WebPage` en cada página |
| Sitemap | `app/sitemap.ts` generado automáticamente |
| Robots | `app/robots.ts` con permiso de indexación total |
| URLs canónicas | `alternates.canonical` en cada página |
| Idioma | `<html lang="es">` en el root layout |

**Prerequisito bloqueante:** el dominio debe existir antes de configurar metadata absoluta. Sin dominio, usar URL relativas y agregar las absolutas después.

### 5.4 Seguridad

| Header | Valor recomendado |
|---|---|
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | deshabilitar APIs no usadas |

En Vercel: configurar en `next.config.ts` con `headers()`. 5 minutos de trabajo, aparece en Lighthouse como punto de security.

---

## 6. Requisitos de contenido y assets

### 6.1 Imágenes requeridas (lista completa)

| Asset | Uso | Dimensiones mínimas | Formato |
|---|---|---|---|
| `og-image.png` | Open Graph share preview | 1200×630 | PNG (puede generarse con `@vercel/og`) |
| `screenshot-consultorio.png` | Proof banner + case study | 1280×800 | PNG o WebP |
| `screenshot-frontpet.png` | Case study Frontpet | 1280×800 | PNG o WebP |
| `foto-perfil.jpg` | Página "Sobre mí" | 400×400 mínimo | JPG (rostro, fondo neutro) |
| `favicon.ico` + `icon.png` | Tab del navegador | 32×32 + 180×180 | ICO + PNG |

**Para el screenshot del consultorio:** el sistema está live. Tomar capturas de la pantalla principal (dashboard o lista de turnos), con datos reales o datos de ejemplo visibles. Una pantalla con datos reales convierte mejor que un mockup vacío.

**Para el Open Graph image:** se puede generar programáticamente con `@vercel/og` sin crear un asset estático. Recomendado porque permite personalizar el og:image por página (cada case study tiene su propio preview).

### 6.2 Evidence real para "Cómo trabajo"

Antes de escribir el código de la sección "Cómo trabajo", extraer del repo:

**Para Tarjeta 1 (ADRs):**
- Número exacto de ADRs (verificar el último número en `docs/decisions/`)
- Título real del ADR más representativo
- Ruta exacta en el repo

**Para Tarjeta 2 (Flyway):**
- Nombre del primer archivo de migración en consultorio
- Nombre del primer archivo de migración en Frontpet
- Nombre del último archivo de migración en Frontpet
- Rutas exactas

**Para Tarjeta 3 (JWT):**
- Frase exacta del README del consultorio (copy-paste literal)
- Frase exacta del CLAUDE.md de Frontpet (copy-paste literal)
- Links a las líneas exactas (GitHub permalink)

**Para Tarjeta 4 (Estimación):**
- Número exacto de horas estimadas (audit dice 19h)
- Número exacto de horas reales (audit dice 26.5h)
- Cita del ROADMAP con el análisis de slack
- Link al ROADMAP

**Criterio de aceptación:** un recruiter técnico debe poder hacer clic en cualquier cita de "Cómo trabajo" y llegar exactamente al lugar en el repo que lo confirma. Si no puede, la sección pierde su propósito.

### 6.3 Decisiones de copy pendientes

Estas requieren decisión de Sebastián antes de implementar:

**Copy #1 — H1 del hero**
El prototipo usa "Código documentado, decisiones trazables." Es bueno como headline de diferenciación pero abstracto. Alternativa concreta: "Dos clientes con contrato. 17 ADRs. Un portfolio que no miente." Es más agresivo pero más memorable. Decidir el tono antes de construir.

**Copy #2 — Foto de perfil**
Existe o hay que sacarla. Si no existe, el desarrollo de `/sobre-mi` debe planificarse con un placeholder y la foto como deuda de contenido.

**Copy #3 — Estado de disponibilidad**
¿Full-time únicamente? ¿Acepta freelance mientras busca empleo full-time? El portfolio debe decirlo explícitamente. "Disponible para roles full-stack o backend Java" dice el qué pero no el modo.

**Copy #4 — Formulario de contacto**
¿Sí o no? Si sí: ¿qué backend? Opciones:
- Resend (más control, requiere API key)
- Formspree (más rápido, menos control)
- Server Action de Next.js + Resend (demuestra el stack)

La opción "Server Action + Resend" es la más correcta para el portfolio porque demuestra conocimiento de Server Actions (feature central de App Router) y es verificable como habilidad.

---

## 7. Analytics y monitoreo

### 7.1 Plausible

Configurar Plausible Analytics (self-hosted o cloud, según preferencia).

**Eventos a trackear más allá del pageview:**
- `cv_download` (con propiedad `language: es|en|pt`)
- `github_click` (con propiedad `project: consultorio|frontpet|profile`)
- `linkedin_click`
- `contact_email_click`
- `case_study_read` (time-on-page threshold de 60s en las páginas de case study)

Estos eventos permiten saber qué funciona: si el CV en PT se descarga más, hay señal de que el mercado brasilero responde. Si los case studies tienen < 30s de tiempo, no se están leyendo.

### 7.2 Uptime

Para el sistema live del consultorio ya usás Uptime Kuma (mencionado en la auditoría). Para el portfolio en Vercel: Vercel tiene alertas de deploy automáticas. Suficiente.

---

## 8. Decisiones abiertas (requieren respuesta antes de implementar)

Estas preguntas no tienen respuesta en el material disponible. El desarrollo no puede avanzar sin ellas.

| # | Pregunta | Impacto | Deadline sugerido |
|---|---|---|---|
| D1 | ¿Cuál es el dominio definitivo? (`sebakhazzaka.dev`, otro) | Alto — bloquea metadata absoluta, JSON-LD, canonical URLs | Antes de empezar |
| D2 | ¿Cuál es el email profesional definitivo? | Alto — aparece en todos los canales | Antes de empezar |
| D3 | ¿Cuál es el slug real de LinkedIn? | Alto — link roto en el portfolio es peor que no tenerlo | Antes de empezar |
| D4 | ¿Hay foto de perfil disponible o hay que tomarla? | Medio — bloquea `/sobre-mi` | Antes de empezar |
| D5 | ¿Formulario de contacto o solo links? | Medio — cambia la arquitectura de la página de contacto | Antes de empezar |
| D6 | ¿El portfolio es monolingüe (ES) o multilingüe? | Medio — cambia la estructura de archivos (i18n desde el inicio) | Antes de empezar |
| D7 | ¿Cuándo se puede tomar el screenshot del consultorio? | Medio — bloquea la sección de prueba social | Sprint 1 |
| D8 | ¿Qué ADR real usar como ejemplo en la tarjeta? | Bajo — requiere leer el repo | Sprint 1 |
| D9 | ¿Claro/oscuro o solo oscuro? | Bajo — 30min de trabajo con next-themes | Sprint 1 |

---

## 9. Plan de implementación sugerido

Este no es el plan de la auditoría (ese cubre todos los canales). Este es específicamente el plan de construcción del portfolio.

### Sprint 0 — Prerequisitos (antes de escribir código)
- [ ] Comprar dominio (D1)
- [ ] Crear email profesional (D2)
- [ ] Verificar slug de LinkedIn (D3)
- [ ] Tomar o conseguir foto de perfil (D4)
- [ ] Resolver D5, D6, D9
- [ ] Extraer la evidence real de los repos (§6.2) — 1 hora

### Sprint 1 — Fundación (estimación: 4-6h)
- [ ] `npx create-next-app@latest --typescript --tailwind --app --src-dir`
- [ ] Configurar shadcn/ui, Framer Motion, next/font, next/image
- [ ] Configurar `next.config.ts`: headers de seguridad, rewrites, redirects
- [ ] RootLayout: nav + footer + metadatos base
- [ ] Paleta de colores en CSS variables (ya definida en el prototipo, migrar a Tailwind config)
- [ ] Componentes base: Button, Badge, Tag, Card, SectionHeader

### Sprint 2 — Landing (estimación: 6-8h)
- [ ] Sección Hero con animaciones + prefers-reduced-motion
- [ ] Sección Prueba social con screenshot real
- [ ] Sección Proyectos (cards que linkean a case studies)
- [ ] Sección Stack con logos SVG
- [ ] Sección "Cómo trabajo" con evidence real verificada
- [ ] Sección Contacto (con la decisión de D5 implementada)
- [ ] Mobile nav (hamburger menu funcional)

### Sprint 3 — Case Studies (estimación: 8-10h, el más importante)
- [ ] Template compartido de case study
- [ ] `/proyectos/consultorio`: contenido completo según §4.2
- [ ] `/proyectos/frontpet`: contenido completo según §4.3
- [ ] Diagrama de arquitectura para cada proyecto (puede ser SVG inline)

### Sprint 4 — Páginas secundarias + deploy (estimación: 4-5h)
- [ ] `/sobre-mi` con foto real
- [ ] `/cv` con descarga de los 3 PDFs
- [ ] `sitemap.ts`, `robots.ts`, JSON-LD por página
- [ ] og:image con `@vercel/og`
- [ ] Plausible analytics integrado
- [ ] Deploy en Vercel con dominio propio
- [ ] Lighthouse 95+ verificado
- [ ] WAVE limpio verificado

**Tiempo total estimado: 22-29 horas.** La auditoría estimó 15-20h — eso no incluía los case studies con evidence real ni el i18n planning. Con los case studies bien hechos, 25h es el número realista.

---

## 10. Criterios de aceptación del portfolio completo

El portfolio está listo para publicar cuando:

- [ ] Lighthouse Performance ≥ 95 en desktop y mobile
- [ ] Lighthouse Accessibility ≥ 95
- [ ] Lighthouse SEO = 100
- [ ] WAVE: 0 errores, 0 alertas de contraste
- [ ] Dominio propio configurado con SSL
- [ ] Todos los links externos verificados (no 404s)
- [ ] Email profesional funcionando (test de recepción)
- [ ] CVs descargables desde `/cv`
- [ ] Screenshot real del consultorio visible
- [ ] Evidence de "Cómo trabajo" verificada contra los repos
- [ ] Mobile nav funcional en 320px
- [ ] `prefers-reduced-motion` desactiva animaciones
- [ ] OG preview visible en Slack y LinkedIn (verificar con og debugger)
- [ ] Plausible recibiendo eventos
- [ ] `og:image` 1200×630 generado

---

## 11. Fuera de alcance

Estas cosas NO deben implementarse en el portfolio para no demorar el lanzamiento:

- **Modo de idioma PT y EN** — puede hacerse en v2 después del lanzamiento
- **Blog** — la auditoría propone posts de LinkedIn, no un blog en el portfolio
- **CMS** — el contenido es estable; no se justifica la complejidad
- **Search** — un portfolio de 4-5 páginas no necesita búsqueda
- **Comentarios** — no aplica
- **Animaciones complejas tipo parallax o cursores custom** — la auditoría lo prohíbe explícitamente
- **Dark/light toggle** — nice to have, no blocker para el lanzamiento

---

## 12. Observaciones del Senior Engineer

*Estas observaciones van más allá de la auditoría y son criterio propio:*

**Sobre la narrativa técnica:**
La historia del JWT es genuinamente buena. Pero hay una historia igual de buena que nadie está contando: el cambio de arquitectura por capas (consultorio) a arquitectura por feature (Frontpet). Esa decisión, con su ADR, es exactamente lo que un Engineering Manager quiere ver. Merece una sección en el case study de Frontpet y una mención en el landing.

**Sobre la credibilidad del proceso:**
La sección "Cómo trabajo" es el corazón del portfolio, pero solo funciona si cada afirmación tiene un permalink verificable. Actualmente las citas son sintéticas. Verificar y reemplazar con evidencia real es la tarea de mayor impacto antes de escribir el código final.

**Sobre el timing:**
El portfolio debe estar live antes del hito de cobro de Frontpet (05/09/2026). Con los case studies de los dos proyectos, el portfolio se lanza con la evidencia completa y puede actualizarse el mismo día que FrontPet pase a producción para cambiar el badge de "En desarrollo" a "Live". Eso es un post de LinkedIn en sí mismo.

**Sobre la consistencia del stack:**
Si el portfolio está construido en Next.js 16, TypeScript, Tailwind 4 y shadcn/ui — exactamente el stack de Frontpet — entonces el portfolio no es un proyecto separado. Es un tercer ejemplo de que sabés usar ese stack. Mencionarlo en el footer: "Este portfolio fue construido con el mismo stack que Frontpet" con un link al repo del portfolio (que también debería ser público).