# Portfolio Visual Redesign — sebakhazzaka.dev

## Context

El portfolio ya tiene lo más difícil: contenido real y verificable (dos sistemas, un cliente pagando
desde mayo 2026, 24 ADRs, permalinks pinneados a SHAs, deuda técnica documentada). Ese contenido no
se toca.

El problema es de **presentación**: el sitio se lee como documentación técnica bien escrita, no como
el portfolio de alguien que construye producto. Diagnóstico concreto de la implementación actual:

1. **No hay jerarquía tipográfica.** El token más grande es `headline-lg` = 48px, y el h1 del hero
   dice literalmente "Sebastián Khazzaka". No hay una afirmación fuerte, y todo el sitio vive entre
   16px y 48px. Nada domina, entonces nada se recuerda.
2. **Un solo ritmo visual.** Absolutamente todo es una caja con `border border-border-slate`. Hero,
   proyectos, evidencia, CTAs, stack, case studies: mismo peso, mismo borde, misma densidad. El ojo
   no encuentra dónde parar.
3. **Los proyectos no se sienten como productos.** Dos cards simétricas de 48px de alto de imagen,
   idénticas entre sí, en una grilla 2×1. Son la parte más importante del portfolio y ocupan la
   mitad del peso visual que deberían.
4. **La imagen de Frontpet está rota.** `public/projects/frontpet/design-preview.png` mide
   **42×512 px reales** y se renderiza en un contenedor `aspect-video` (~28× de upscale). Es lo
   primero que ve un recruiter en ese case study.
5. **Una sola animación en todo el sitio** (`Reveal`, fade-up), aplicada uniformemente a cada bloque,
   lo cual la vuelve invisible como intención de diseño.
6. **Código duplicado**: el bloque de dos CTAs (`Sobre mí` / `CV`) está copiado literalmente dos
   veces en [page.tsx](src/app/page.tsx#L77-L189), ~110 líneas repetidas.
7. **No hay sección de contacto** en la landing. El CTA final es un link a `/cv`.

Resultado esperado: identidad visual fuerte, jerarquía clara, animaciones con propósito, proyectos
presentados como producto real — **sin perder ni un dato de credibilidad técnica y sin inventar nada**.

### Decisiones ya tomadas con el usuario

- **Frontpet:** se construye un panel diseñado con datos reales *y* queda listo el slot para el
  screenshot real cuando llegue. Ambos conviven.
- **Color:** azul `#3b82f6` se mantiene como acento único, pero se usa **mucho menos**. El contraste
  lo hacen tipografía y espacio. Vía Linear/Vercel.
- **Case studies:** se agrega sección de Arquitectura con diagrama SVG derivado **sólo** de
  decisiones ya documentadas. No se crean secciones sin contenido.

---

## Valor documentado en `docs/Info` que hoy NO está publicado

Revisando `Auditoria_Perfil_..._v2.md`, `portfolio-prd.md` y `content-review.md` aparece material
**ya verificado contra los repos** que el sitio no usa. Esto no es contenido nuevo: es contenido que
ya fue auditado y quedó afuera. Es la mayor oportunidad de la redesign, y encaja exactamente en las
secciones que se van a rehacer.

| # | Hecho documentado | Dónde está | Estado en el sitio |
|---|---|---|---|
| A | **Dos clientes con contrato, uno en producción** | Auditoría §3 #10 y §5 | ❌ La home dice "dos sistemas", que es más débil y más vago |
| B | **El arco del JWT entre proyectos** (deuda detectada en Consultorio → corregida en Frontpet) | Auditoría §1, ambas citas con permalink | ⚠️ Los dos extremos están, pero nadie los conecta |
| C | **Arquitectura por capa → por feature** entre proyecto 1 y 2 | Auditoría §5 y §12 | ❌ Ausente |
| D | **ROADMAP con presupuesto de horas y análisis de slack** | Auditoría §5 | ⚠️ Sólo se publica el 19h→26,5h |
| E | **UUID v7: el razonamiento**, no sólo el nombre | Auditoría §1, `content-review` #3 | ⚠️ Es un string suelto en el stack |
| F | Rate limiting en login y órdenes · Logback JSON desde el día uno · módulos consumidos por interfaz `*Service`, nunca por repositorio | Auditoría §1 | ❌ Ausente |
| G | Fecha exacta del cliente activo: **2026-05-11**; entrega final Frontpet **2026-09-30** | `content-review` | ⚠️ Sólo "mayo 2026" |

Además, el PRD pide explícitamente cosas que hoy faltan y que esta redesign ya iba a tocar:
**diagrama de arquitectura por case study** (§4.2, "mínimo 1"), **sección de contacto en la landing**
(§4.1.6) y **3 ADRs representativos mostrados con su formato** en el case study de Frontpet (§4.3).

**La cita que define la prioridad** (Auditoría §1, sobre el arco del JWT):

> "Arreglaste en el proyecto nuevo lo que identificaste como deuda en el viejo. Eso es aprendizaje
> demostrable entre proyectos, documentado, con fecha. Es exactamente lo que un Engineering Manager
> quiere ver y casi nunca puede verificar en un junior. **Esta historia debería estar en tu portfolio
> [...] Hoy no está en ningún lado.**"

Se implementa como el momento visual más fuerte de la landing después del hero (ver §6).

**Restricción heredada de la auditoría** (§7, "Requisitos no negociables"): *"Animaciones: sutiles.
Nada de parallax ni cursores custom."* El plan la respeta — la grilla del hero es un realce de fondo
de baja opacidad, no un cursor custom ni parallax, y se apaga en touch y en reduced-motion.

---

## Dirección visual

**Editorial Technical Dark.** Cuatro principios, aplicados en este orden de prioridad:

1. **La tipografía es el diseño.** Escala fluida que llega a ~112px en desktop. El salto entre
   display / heading / body / mono debe ser evidente a 3 metros de la pantalla.
2. **Un solo acento, usado con avaricia.** Azul sólo para: estado `live`, el dato clave de cada
   sección, y links. Todo lo demás es la escala de grises que ya existe.
3. **Hairline en vez de caja.** Se reemplaza la caja bordeada omnipresente por reglas de 1px,
   grillas `gap-px` y superficies elevadas. Menos bordes, más aire.
4. **Movimiento como jerarquía, no como decoración.** Se anima lo que entra por primera vez y lo que
   responde al cursor. Nada más. `prefers-reduced-motion` se respeta en el CSS existente.

Se **mantiene** deliberadamente: dark-only, radios de 2px (lectura técnica, no SaaS genérico), la
voz `MONO_UPPERCASE` de los labels, los brackets `[SECTION]`, y los comentarios WCAG de `globals.css`.

---

## Implementación

### 1. Sistema de diseño — `src/app/globals.css`

Extender el bloque `@theme` existente (no reescribirlo). Agregar:

- **Escala display fluida** con `clamp()`, que es lo que hoy falta:
  ```css
  --font-display-xl: var(--font-geist);
  --text-display-xl: clamp(2.75rem, 1.2rem + 7vw, 7rem);   /* 44px → 112px */
  --text-display-xl--line-height: 0.95;
  --text-display-xl--letter-spacing: -0.04em;
  --text-display-xl--font-weight: 700;
  ```
  Más `display-lg` (32→64px) para h1 de páginas internas y `display-md` (24→40px) para headings de
  sección. Esto **reemplaza** el par responsive `headline-lg-mobile md:headline-lg` que hoy obliga a
  escribir cuatro clases por título; los tokens viejos se conservan hasta migrar todos los usos.
- **Eyebrow token** (`--text-eyebrow`, 11–12px mono, `tracking: 0.18em`) para unificar los labels.
- **Tokens de movimiento**: `--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)` (el que ya usa
  `reveal.tsx` hardcodeado) y `--ease-out-quart`, para que todas las transiciones compartan curva.
- **Elevación**: `--color-surface-raised` y un `--shadow-raised` sutil, para separar tarjetas del
  fondo sin depender siempre de un borde.
- Regla `@media (prefers-reduced-motion)` existente: extender el selector a `[data-reveal]`
  **y** `[data-motion]` para cubrir las nuevas primitivas.

No agregar dependencias. `motion@13` ya está instalado.

### 2. Primitivas de animación — `src/components/motion/`

Hoy toda la animación es [reveal.tsx](src/components/reveal.tsx), un único `Reveal` con
`LazyMotion domAnimation strict`. Ese patrón es correcto (5KB vs 35KB, mantiene el resto del árbol
como Server Components) y **se conserva**. Se expande a un módulo con cuatro primitivas que comparten
el mismo `LazyMotion`:

- `Reveal` — se mantiene la API actual (`delay`, `className`) para no romper los ~15 usos existentes.
- `RevealLines` — stagger por línea/palabra, sólo para el titular del hero.
- `Stagger` + `StaggerItem` — reemplaza el patrón `delay={index * 0.1}` repetido en `page.tsx`, que
  hoy obliga a calcular el delay en cada call site.
- `Magnetic` — desplazamiento sutil hacia el cursor. **Sólo** en los dos CTAs primarios.

Regla: ninguna animación puede provocar layout shift. Solo `opacity` y `transform`.

### 3. Hero — `src/components/home/hero.tsx` (nuevo)

Extraer el hero de `page.tsx` a su propio componente. Composición editorial:

```
┌──────────────────────────────────────────────────────────┐
│ ● DISPONIBLE PARA ROLES FULL-STACK    MONTEVIDEO, UY     │  ← rail mono, hairline abajo
│                                                          │
│   Construyo sistemas                                     │  ← display-xl, ~112px
│   que están en                                           │
│   producción.                                            │  ← "producción" en blanco pleno
│                                                          │
│   Full-Stack Developer. Java · Spring Boot · Next.js.    │  ← body-lg, max-w-[52ch]
│   Dos clientes con contrato: uno en producción desde     │
│   mayo 2026, otro con hito de cobro para septiembre.     │
│                                                          │
│   [ VER_PROYECTOS ]   CONTACTO                           │
│                                                          │
├───────────────┬───────────────┬──────────────┬───────────┤  ← rail de métricas, gap-px
│ EN PRODUCCIÓN │ ADRs ESCRITOS │ MIGRACIONES  │ TESTS INT.│
│ desde may 2026│      24       │  9 versionadas│ ~10 (PG) │
└───────────────┴───────────────┴──────────────┴───────────┘
```

- Todos los números del rail salen de `content/projects.ts` y `content/evidence.ts` — **derivados, no
  escritos a mano**, para que no se desincronicen del contenido.
- El titular responde la pregunta "¿por qué sigo leyendo?" en la primera línea, en vez de abrir con
  el nombre. El nombre pasa a la línea de rol (sigue en el `<h1>` accesible + JSON-LD Person intacto).
- **"Dos clientes con contrato"** reemplaza a "dos sistemas reales" (hallazgo **A**). Es más fuerte,
  más específico y está documentado: cliente pagando desde 2026-05-11 + propuesta comercial firmada
  con hito de cobro 05/09/2026. La auditoría marca esta subestimación como el error #10, el más caro
  de todo el perfil.
- **Grilla técnica reactiva al mouse**: fondo de hairlines a muy baja opacidad con un gradiente
  radial que sigue al cursor vía CSS custom property. Client Component aislado
  (`hero-grid.tsx`), `pointer-events-none`, `hidden` bajo `prefers-reduced-motion` y en touch.
  Sólo actualiza dos custom properties — cero re-render de React.

### 4. Navbar — `src/components/layout/site-header.tsx`

- Estado de scroll: arranca sin borde y con fondo transparente; al pasar ~24px gana
  `bg-background/70 backdrop-blur-xl` + hairline inferior. Client Component mínimo que sólo togglea
  un `data-scrolled`; el resto del header sigue siendo Server Component.
- **Indicador de sección activa** con `IntersectionObserver` sobre `#proyectos`, `#como-trabajo`,
  `#stack`: subrayado animado con `layoutId` de motion.
- Mobile nav: [mobile-nav.tsx](src/components/layout/mobile-nav.tsx) hoy no tiene focus trap, ni
  cierre con `Escape`, ni bloqueo de scroll del body. Agregar los tres, más animación de entrada del
  panel. Es una corrección de accesibilidad, no cosmética.

### 5. Proyectos — la sección más importante

Reemplazar la grilla simétrica 2×1 por **feature rows a ancho completo, alternadas**, en
`src/components/home/project-feature.tsx` (nuevo; `project-card.tsx` queda deprecado):

```
┌──────────────────────────────────┬───────────────────────────────┐
│ ● EN PRODUCCIÓN                  │                               │
│                                  │      [ visual del proyecto ]  │
│ Consultorio Odontológico         │      scale sutil en hover     │
│                                  │      borde que se ilumina     │
│ B2B SaaS de gestión para         │                               │
│ profesionales de salud...        │                               │
│                                  │                               │
│ 48 commits · 25 PRs · may 2026   │                               │
│ Java 17 · Spring Boot · Angular  │                               │
│                                  │                               │
│ Ver case study →   Ver sistema ↗ │                               │
└──────────────────────────────────┴───────────────────────────────┘
                      (Frontpet invierte el orden)
```

- El visual es un componente `ProjectVisual` que decide qué renderizar:
  - Si hay screenshot real → imagen (Consultorio: `landing.png` / `admin.png`).
  - Si `heroImage.isPlaceholder` → **`ProjectSignature`**, un panel diseñado construido con datos
    reales del proyecto (estado, los 6 módulos de dominio, `24 ADRs`, `~10 tests`, `JWT HttpOnly`),
    en vez de escalar 28× una imagen de 42px.
- **`ProjectSignature` es un componente de primera clase, no un fallback temporal.** Cuando llegue el
  screenshot real de Frontpet, la firma se mantiene: pasa a acompañar al screenshot dentro del case
  study. Sumar el screenshot será agregar una entrada a `projects.ts` — sin tocar componentes.
- Reemplazar la imagen 42×512 no es opcional: hoy es el peor detalle visual del sitio.

### 6. "Cómo trabajo" — `src/components/home/how-i-work.tsx`

Los cuatro `EvidenceCard` pasan de grilla de cajas a **timeline editorial numerado**: número gigante
en display (`01`–`04`) a la izquierda con opacidad baja, contenido a la derecha, separados por
hairline. La cita real se mantiene y se refuerza visualmente como bloque mono sobre superficie
elevada, con el permalink al SHA visible como evidencia (no escondido detrás de un ícono).

Esta es la sección diferencial del portfolio; debe ser lo más memorable después del hero.

#### 6b. "Lo que cambié entre el proyecto uno y el dos" — sección nueva

`src/components/home/evolution.tsx` + `src/content/evolution.ts` (contenido nuevo, **todo ya
auditado en `docs/Info`, cero invención**). Materializa los hallazgos **B**, **C** y **F**.

Formato de dos columnas comparadas, Consultorio → Frontpet, con la flecha como elemento gráfico:

```
                CONSULTORIO  ──────────▶  FRONTPET
                (proyecto 1)              (proyecto 2)

  Auth          JWT en localStorage   →   JWT en cookie HttpOnly
                deuda declarada           desde el ADR 004
                                          ↳ ambos permalinks verificables

  Arquitectura  Por capa                  Por feature
                controller/service/repo → catalog · booking · identity · orders

  Testing       Tests de backend      →   JUnit 5 + Testcontainers
                                          (~10 tests contra Postgres real)

  Decisiones    Sección en el README  →   24 ADRs versionados
```

- Las dos citas del arco del JWT **ya existen con permalink** (`README.md#L66` del Consultorio y
  ADR 004 de Frontpet). Se muestran textuales, enfrentadas.
- El resto de las filas sale de la tabla comparativa de la Auditoría §5, verificada contra los repos.
- Es la respuesta directa a *"esta historia debería estar en tu portfolio [...] hoy no está en ningún
  lado"*. Un EM entiende en 5 segundos que hubo aprendizaje entre proyectos, con fecha y verificable.
- Va inmediatamente después de "Cómo trabajo": primero el proceso, después la prueba de que el
  proceso produce cambios reales.

### 7. Stack — `src/components/home/stack.tsx`

**Los 38 items se mantienen íntegros.** Cambia la agrupación y la presentación.

Agrupación a las 6 categorías que pediste (y que el PRD §4.1.4 también especifica): Backend ·
Frontend · Testing y calidad · Datos · DevOps e infraestructura · Proceso. Observabilidad (Sentry,
Uptime Kuma, backups, logs) y Analytics (Plausible, Meta Pixel) se absorben dentro de DevOps como
subgrupo — no se pierde ningún item, sólo dejan de ser dos columnas de 2-4 elementos que hoy
desbalancean la grilla.

Presentación: grilla de hairlines, título de categoría en mono con contador (`BACKEND / 6`), items
como chips de bajo contraste que ganan color en hover. Sin barras de progreso, sin porcentajes, sin
íconos decorativos.

**Una corrección de contenido**, no cosmética: el stack lista `Plausible` y `Meta Pixel`, pero no
hay ningún script de analytics en `src/`. Publicar una herramienta que no corre es exactamente la
clase de inconsistencia que la auditoría marca como destructora de credibilidad (§3). Opciones, a
decidir: instalar Plausible de verdad, o mover esos dos items a la lista de recomendaciones y
sacarlos del stack. **No los dejo publicados sin resolver.**

### 8. Contacto — `src/components/home/contact.tsx` (nuevo)

Hoy no existe. Cierre de la landing, a ancho completo, sobrio: una línea en display
(`¿Construimos algo?`), la línea de disponibilidad real de `site.ts`, y tres links grandes en
hairline rows — GitHub / LinkedIn / Email. Sin formulario.

Esto **elimina la duplicación**: los dos bloques CTA copiados en
[page.tsx](src/app/page.tsx#L77-L189) se reducen a un componente `NavCard` reutilizado una sola vez.

### 9. Case studies — `src/components/case-study/case-study.tsx`

Reestructurar en **espina narrativa numerada** con progreso visible, reusando toda la estructura de
datos actual de `projects.ts`:

```
01 EL PROBLEMA → 02 LA SOLUCIÓN → 03 ARQUITECTURA → 04 DECISIONES
→ 05 RESULTADOS → 06 APRENDIZAJES
```

- Header rediseñado: título en `display-lg`, `metaLine` como rail de métricas, CTAs claros.
- **`architecture-diagram.tsx` (nuevo)**: SVG inline, sin librería, un diagrama por proyecto,
  derivado **exclusivamente** de decisiones ya escritas:
  - *Consultorio*: `Hetzner VPS → Caddy → N contenedores Docker (uno por cliente)` — viene de la
    decisión "Una instancia Docker por cliente" ya publicada.
  - *Frontpet*: `Next.js → Spring Boot → tenant_id + @TenantFilter → PostgreSQL 16`, con los 6
    módulos de dominio — viene de ADR 002, ya publicada y linkeada.
  - Legible en ambos temas del sistema, con `<title>`/`<desc>` para accesibilidad, y scroll
    horizontal propio en mobile.
- `DecisionCard`: la variante `debtLogged` (deuda técnica documentada) debe **destacar**, no
  disimularse — es evidencia de criterio, no un defecto.
- `ResultStat`: número en display, label en mono.
- **Frontpet — bloque de ADRs** (PRD §4.3): en vez de sólo linkear el directorio, mostrar los 2 ADRs
  que ya tienen permalink (002 multi-tenant, 004 auth JWT) con su formato real —
  contexto / decisión / alternativa descartada — como artefacto de ingeniería. Ya tenemos el texto
  de ambos en `content-review.md` y en `evidence.ts`. Es el diferenciador que ningún junior tiene.
- **Enriquecer decisiones con lo ya auditado** (hallazgos **E** y **F**), agregando a
  `projects.ts` sólo hechos verificados: el razonamiento de UUID v7 (ordenable por tiempo, evita la
  fragmentación de índice de UUID v4 — `common/UuidV7.java`), rate limiting en login y órdenes,
  Logback JSON desde el día uno, y módulos consumidos por interfaz `*Service` y nunca por
  repositorio.
- **Consultorio**: agregar la fecha exacta (2026-05-11) y la decisión del deploy
  `git fetch + reset --hard` con su causa real documentada (un `Caddyfile` subido por `scp` sin
  commit rompía el `git pull` — `tasks/lessons.md`, 2026-06-11). Hoy la decisión está publicada pero
  sin la causa, que es la parte que demuestra diagnóstico.
- Se mantienen intactos: `BeforeAfterImpact`, permalinks, links a ADRs, badge de "vista previa de
  diseño", el bloque "siguiente caso de estudio".

### 10. `/sobre-mi`

Layout editorial a dos columnas: foto + datos (ubicación, idiomas, certificaciones) en un rail
sticky; los cuatro bloques de prosa (`comoEmpece`, `loQueMeMueve`, `comoTrabajoConOtros`,
`fueraDelCodigo`) con tipografía de lectura larga y más aire. Tono más humano que la home, como pediste.

**Corregir**: las certificaciones hoy se previsualizan con `<object type="application/pdf">`, que es
poco confiable en móviles (Safari iOS no lo renderiza). Reemplazar por filas hairline con emisor,
detalle, fecha, link de descarga y link de verificación cuando existe (NVIDIA lo tiene).

### 11. SEO y performance

- Agregar JSON-LD `WebSite` en el layout y `BreadcrumbList` en los case studies. El `Person` actual
  se mantiene.
- OG images (`opengraph-image.tsx` × 3): aplicar la nueva jerarquía tipográfica; hoy son texto plano
  en `sans-serif` sin marca.
- `next/image` con `sizes` correctos en los nuevos layouts. `priority` sólo en el visual del hero.
- La imagen de Consultorio es 1600×4658 y 3840×2160 — verificar que `sizes` evite servir el original.
- Sin dependencias nuevas. El bundle de cliente debe seguir siendo: primitivas de motion + header +
  mobile nav + grilla del hero. Nada más.

---

## Archivos

**Nuevos**
- `src/components/motion/index.tsx` — `Reveal`, `RevealLines`, `Stagger`, `StaggerItem`, `Magnetic`
- `src/components/home/{hero,hero-grid,project-feature,project-signature,how-i-work,evolution,stack,contact,nav-card}.tsx`
- `src/content/evolution.ts` — la comparación proyecto 1 → proyecto 2 (§6b), toda auditada
- `src/components/case-study/architecture-diagram.tsx`
- `src/components/layout/header-scroll.tsx`

**Modificados**
- `src/app/globals.css` — tokens display/eyebrow/easing/elevación
- `src/app/page.tsx` — composición con los nuevos componentes; elimina ~110 líneas duplicadas
- `src/app/sobre-mi/page.tsx` — layout editorial + fix de certificaciones
- `src/app/{cv,not-found}/page.tsx` — alinear a la nueva escala tipográfica
- `src/components/case-study/{case-study,decision-card,result-stat}.tsx`
- `src/components/layout/{site-header,site-footer,mobile-nav}.tsx`
- `src/components/{section,status-pill,mono-tag,evidence-card,before-after-impact}.tsx`
- `src/app/opengraph-image.tsx` + los dos de proyectos
- `src/content/projects.ts` — campos de presentación (slot para screenshot real de Frontpet, datos de
  la firma del proyecto) **+ los hechos ya auditados de `docs/Info` que hoy no están publicados**
  (UUID v7 razonado, rate limiting, Logback JSON, causa real del `reset --hard`, fecha 2026-05-11).
  Cada dato nuevo tiene que poder rastrearse a `docs/Info`. **Nada sin fuente.**
- `src/content/site.ts` — copy del hero ("dos clientes con contrato")
- `src/components/layout/site-footer.tsx` — agregar la línea que recomienda la Auditoría §12:
  *"Construido con el mismo stack que Frontpet"* + link al repo del portfolio. Convierte el sitio en
  un tercer ejemplo del stack declarado, en vez de un proyecto aparte.

**Deprecados tras la migración**: `src/components/project-card.tsx`, `src/components/reveal.tsx`
(re-exporta desde `motion/` durante la transición), `src/components/proof-banner.tsx` (su contenido
se absorbe en el hero y en la feature row de Consultorio).

---

## Verificación

1. `npm run lint` y `npm run build` — cero errores TypeScript, cero warnings nuevos.
2. `npm run dev` y revisar las 6 rutas: `/`, `/sobre-mi`, `/cv`, `/proyectos/consultorio`,
   `/proyectos/frontpet`, 404.
3. **Responsive real** en 1440 / 1280 / 1024 / 768 / 390 / 320: verificar que el `clamp()` del display
   no desborde en 320px, que el diagrama de arquitectura scrollee dentro de su contenedor, y que
   ninguna feature row provoque scroll horizontal del body.
4. `prefers-reduced-motion: reduce` activado en DevTools: nada se mueve, todo es visible, el
   `scroll-behavior` vuelve a `auto`.
5. Navegación por teclado completa: skip-link, focus visible en cada link, mobile nav cierra con
   `Escape` y devuelve el foco al botón.
6. Consola limpia — atención especial a hydration mismatches en los componentes de scroll.
7. Verificar que los links externos sigan vivos: repos, ADRs, permalinks a SHAs, live de Consultorio,
   verificación de NVIDIA, PDFs de CV y certificaciones.
8. Lighthouse en build de producción, objetivo >95 en las cuatro categorías.
9. **Pasada final como recruiter**: abrir `/` en frío y cronometrar si en 10 segundos queda claro
   quién es, qué hace, qué stack maneja y que hay software real en producción.

## Fuera de alcance — y los bloqueos que reporto, no relleno

No se inventan clientes, métricas, tecnologías ni resultados. Estos puntos están **abiertos en
`docs/Info` desde el 05/08/2026** y ninguno se puede resolver escribiendo código; van en el resumen
final como recomendaciones priorizadas:

| Bloqueo | Fuente | Por qué importa |
|---|---|---|
| **Email personal de hotmail** | PRD D2, Auditoría §4 | Está publicado en header, hero y footer. El PRD lo marca como bloqueante *antes de publicar*. |
| **Slug de LinkedIn inferido, sin confirmar** | PRD D3 | Un link roto a LinkedIn en el portfolio es peor que no tenerlo. |
| **Dominio `.dev` declarado pero no confirmado** | PRD D1 | El JSON-LD y los canonical apuntan a `sebakhazzaka.dev`. |
| **Plausible / Meta Pixel en el stack, sin implementar** | grep en `src/` | Ver §7. Se decide: implementar o sacar. |
| **Sin números de uso del negocio** (turnos, pacientes, uptime) | Auditoría, PRD §4.2 | El dato más valioso que falta. Sólo el cliente lo tiene. |
| **Sin testimonio del cliente del consultorio** | Auditoría §12 Track B | *"Gratis, alto impacto, nunca lo pensaste."* |
| **Sin screenshot real de Frontpet** | `content-review` | Mitigado con `ProjectSignature`, no resuelto. |
| **Modalidad de disponibilidad sin declarar** | PRD Copy #3 | Hoy dice "disponible para roles full-stack" pero no si acepta freelance, remoto o híbrido. |

También quedan fuera, por decisión del PRD §11: blog, CMS, formulario de contacto, i18n EN/PT, y
toggle claro/oscuro (el sitio sigue dark-only).
