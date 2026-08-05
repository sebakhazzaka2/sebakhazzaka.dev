# Auditoría de Perfil Profesional — Sebastián Khazzaka
### Versión 2 · Revisada con acceso al repositorio de FrontPet

**Fecha:** 5 de agosto de 2026
**Alcance:** LinkedIn · 6 CVs (3 visuales + 3 ATS) · GitHub (perfil + `consultorio-odontologico` + `Frontpet`)
**Cambios vs. v1:** revisión del repo de FrontPet, repos académicos ya archivados, recalificación al alza de GitHub y percentil competitivo

---

## Resumen ejecutivo de los cambios respecto a la v1

| Ítem | v1 | v2 | Motivo |
|---|---|---|---|
| Nota GitHub | 6.5 | **8.5** | FrontPet es un repo de calidad igual o superior al consultorio |
| Nivel técnico percibido | 7.5 | **8.5** | ADRs, Testcontainers, arquitectura modular por feature, UUID v7 |
| Percentil junior LATAM | Top 12-15% | **Top 6-8%** | Dos repos de nivel profesional, no uno |
| Empleabilidad | 6.5 | **7.0** | Sube el techo, pero el cuello de botella sigue siendo distribución |
| Inconsistencias detectadas | 6 | **11** | El repo de FrontPet reveló 5 más, todas en la dirección de *subestimarte* |

**El hallazgo principal de esta revisión:** tus CVs describen un FrontPet que es peor que el FrontPet real. Estás perdiendo evidencia por no actualizarlos.

---

## 1. Primera impresión — los primeros 30 segundos

### Qué veo ahora como recruiter técnico

En la v1 dije que el README del consultorio era tu mejor activo y que estaba enterrado. Eso sigue siendo cierto. Pero ahora tenés **dos** repos de ese nivel, y el segundo es en algunos aspectos mejor.

Lo que encontré en FrontPet:

- **ADRs numerados** (`docs/decisions/`, al menos hasta ADR 017) — documentación de decisiones arquitectónicas versionada
- **Testcontainers** para tests de integración — no "escribí unos tests", sino la herramienta que se usa en producción real
- **Packages por feature, no por capa** (`catalog`, `booking`, `identity`, `orders`) — decisión de diseño consciente
- **Módulos que se consumen por interfaz `*Service`, nunca por repositorio** — límites de módulo explícitos
- **UUID v7 para entidades públicas, BIGSERIAL para internas** — criterio, no default
- **Rate limiting** en login y órdenes
- **Logback con JSON output desde el día uno**
- Un `ROADMAP.md` con **presupuesto de horas, análisis de slack por bloque y gates por sprint**
- Versiones del frontend **verificadas contra `pnpm-lock.yaml`** con nota de mantenimiento
- Un archivo `next16-notes.md` documentando las trampas de la versión

### El detalle que más me impresionaría en una entrevista

El README del consultorio lista como deuda técnica conocida: *"JWT en localStorage → cookie HttpOnly"*.

El `CLAUDE.md` de FrontPet dice: *"Spring Security + JWT en cookies HttpOnly (**nunca localStorage**)"*.

**Arreglaste en el proyecto nuevo lo que identificaste como deuda en el viejo.** Eso es aprendizaje demostrable entre proyectos, documentado, con fecha. Es exactamente lo que un Engineering Manager quiere ver y casi nunca puede verificar en un junior.

Esta historia debería estar en tu portfolio, en tu LinkedIn y en la primera entrevista técnica que tengas. Hoy no está en ningún lado.

### Nivel aparente actualizado

| Canal | Nivel que proyecta |
|---|---|
| Repo `Frontpet` | **Semi-senior** en criterio de arquitectura y proceso |
| Repo `consultorio-odontologico` | **Semi-senior** en criterio, junior en volumen |
| CVs | Junior sólido |
| LinkedIn | Junior |

El gap entre tu GitHub y tu LinkedIn ahora es **más grande**, no menor. Tu código dice una cosa y tu perfil público dice otra, más chica.

---

## 2. LinkedIn

Sin cambios respecto a la v1 — sigue siendo el eslabón más débil por un margen amplio.

| Elemento | Estado | Diagnóstico |
|---|---|---|
| Headline | "Junior Full-Stack Developer \| ..." | ⚠️ Dice "Junior" |
| Contactos | 12 | ❌ **Problema estructural #1** |
| Featured | Vacío | ❌ Crítico |
| Experiencia | Sin el SaaS cargado | ❌ Crítico |
| Actividad | 0 impresiones / 7 días | ❌ Invisible al algoritmo |
| Apariciones en búsqueda | 1 | ❌ Consecuencia directa |

### Headline recomendado (actualizado)

```
Full-Stack Developer · Java 21 + Spring Boot + Next.js · SaaS in Production with Paying Client | ES · PT · EN
```

### Featured — ahora con 4 items

1. `neodentalmaster.turnosuy.com` (sitio live)
2. Repo `consultorio-odontologico`
3. Repo `Frontpet` ← nuevo, es tan fuerte como el primero
4. Portfolio (cuando exista)

### El post de LinkedIn que deberías escribir

Ahora tenés material para contenido técnico real, no genérico. Tres ideas concretas:

- *"Por qué en mi primer SaaS puse el JWT en localStorage y por qué en el segundo no"*
- *"Una instancia Docker por cliente en vez de multitenancy: el cálculo que hice"*
- *"Presupuesté 19 horas para el backend de booking. Me llevó 26,5. Qué aprendí del error de estimación"*

Ese tercero es especialmente bueno porque muestra honestidad sobre estimaciones — algo que los seniors valoran y los juniors nunca admiten. El dato está en tu propio ROADMAP.

---

## 3. Comparativa de los 6 CVs — inconsistencias

### 🔴 Errores que te perjudican (corregir antes de postular)

| # | Inconsistencia | Severidad | Detalle |
|---|---|---|---|
| 1 | **"paying clients" en plural** (ATS EN) | 🔴 Crítica | Dice *"two live SaaS products with paying clients"*. Uno está live, FrontPet está en desarrollo. **Aunque ahora tenés dos clientes con contrato, "two live products" sigue siendo falso.** |
| 2 | **FrontPet presentado como "live"** (ATS EN) | 🔴 Alta | ES y PT dicen correctamente "en desarrollo activo". El EN quedó sin actualizar. |
| 3 | **Nombre de la carrera** | 🔴 Alta | EN: *Computer Science* · ES: *Sistemas de Información* · PT: *Ciência da Computação*. Tres carreras distintas. |
| 4 | **Nivel de inglés** | 🔴 Alta | Visuales: *"Conversational Professional"* · ATS: *"Avanzado"*. B2 no es avanzado (avanzado = C1). |
| 5 | **README GitHub: "clientes pagos"** | 🟡 Media | Plural. Mismo problema que #1. |
| 6 | **Fecha de inicio de carrera** | 🟡 Media | Los CVs dicen 2024. Verificá que sea sostenible contra tu analítico. |

### 🟠 Errores que te subestiman (los nuevos, y son más caros)

Estos son los que descubrí al leer el repo. En todos los casos, **tu CV dice menos de lo que es cierto**.

| # | Lo que dice el CV | Lo que dice el repo | Costo |
|---|---|---|---|
| 7 | **"Next.js 14"** (en los 6 CVs) | `next` **16.2.6** pineado exacto, App Router, Turbopack | Un frontend te lee "Next 14" y piensa que estás dos versiones atrás. Estás en la última. |
| 8 | **Java 17** (implícito) | **Java 21** en FrontPet, Java 17 en consultorio | Java 21 es LTS actual. Decís menos de lo que usás. |
| 9 | **"Jest"** como skill de testing | **JUnit 5 + Testcontainers** (backend) | Testcontainers es una señal *mucho* más fuerte que Jest para un rol Java. No está en ningún CV. |
| 10 | **FrontPet como proyecto propio** | **Cliente piloto con propuesta comercial firmada** e hito de cobro (05/09/2026) | Tenés **dos clientes con contrato**, no uno. Tu CV dice uno. |
| 11 | Stack incompleto | Faltan: React 19, Tailwind 4, shadcn/ui, TanStack Query, Zod, react-hook-form, Framer Motion, Testcontainers, Lombok, Coolify, Cloudflare R2/CDN, pnpm, Plausible | ~12 keywords buscadas que no estás capturando |

> **El #10 es el más grave.** Estuviste tres semanas preocupado por si "SaaS con un cliente" era exagerado — y resulta que tenés dos clientes con contrato y tu CV solo declara uno. El problema era el opuesto al que pensabas.

### Nota sobre "multi-tenant" — corrección respecto a lo que iba a marcar

Iba a señalar como exageración que los CVs digan *"arquitecturada como SaaS multi-tenant"* cuando el README dice *"MVP1 es single-tenant"*.

**No es exageración.** El `CLAUDE.md` especifica: *"Multi-tenant ready: toda tabla del dominio lleva `tenant_id`"*, y existe un módulo `tenant/` con `CurrentTenant` fijo en MVP1. La expresión correcta y defendible es **"multi-tenant ready foundation, single-tenant en MVP1"** — que es literalmente lo que decís. Está bien como está.

### Bloque de skills corregido (para los 6 CVs)

```
Backend
  Java 17 / 21 · Spring Boot 3 · Spring Security · JWT (HttpOnly cookies)
  REST APIs · JPA / Hibernate · Maven · Lombok · Flyway
  PostgreSQL 16 · MySQL 8 · Diseño de esquemas (3NF) · UUID v7

Frontend
  Angular 19 · Angular Material · Next.js 16 (App Router) · React 19
  TypeScript (strict) · Tailwind CSS 4 · shadcn/ui · TanStack Query
  React Hook Form · Zod · Framer Motion · SCSS · HTML · CSS

Testing y calidad
  JUnit 5 · Testcontainers · Jest · Clean Code · DRY · SOLID
  ESLint · Prettier · Accesibilidad WCAG / WAVE

DevOps e infraestructura
  Docker · Docker Compose · GitHub Actions (CI/CD) · Caddy · Coolify
  Hetzner Cloud · Cloudflare (DNS/CDN/R2) · Linux · Bash · SSL/TLS · GHCR

Proceso
  Git · PR-based delivery · Conventional Commits · Squash merge
  ADRs (Architecture Decision Records) · Agile / Sprints · GitHub Projects
```

`ADRs` en la sección de proceso es un diferenciador enorme. Prácticamente ningún junior sabe qué es un ADR, mucho menos escribe 17.

---

## 4. Evaluación ATS

### Compatibilidad estimada

| ATS | Compatibilidad | Notas |
|---|---|---|
| Greenhouse | 92% | Sin problemas |
| Lever | 90% | Sin problemas |
| Workday | 85% | Header centrado puede confundir |
| SuccessFactors | 80% | Sensible a `·` y `—` |
| Taleo | 72% | El más frágil |
| Gupy (BR) | 88% | El PT ATS le encaja perfecto |

**Promedio: ~85%.** Bueno. Sube a ~90% aplicando los fixes de formato.

### Keywords faltantes — versión actualizada

Ahora que vi los repos, la lista es más larga y más específica. Todas estas las **usás realmente**:

| Categoría | Faltantes en el CV | Prioridad |
|---|---|---|
| Backend | `JPA`, `Hibernate`, `Spring Security`, `JWT`, `Flyway`, `Maven`, `Lombok`, `SOLID` | 🔴 Alta |
| Testing | `JUnit 5`, `Testcontainers`, `Integration Testing` | 🔴 Alta |
| Frontend | `React`, `React 19`, `Next.js 16`, `Tailwind CSS`, `TanStack Query`, `Zod`, `SSR`, `Server Components` | 🔴 Alta |
| DevOps | `Docker Compose`, `Cloudflare`, `Coolify`, `SSL/TLS`, `Bash scripting`, `GHCR` | 🟠 Media |
| Datos | `SQL`, `PostgreSQL 16`, `Query Optimization`, `Database Migrations` | 🟠 Media |
| Proceso | `Code Review`, `ADR`, `Scrum`, `Kanban`, `Squash Merge` | 🟡 Baja-media |

> **`React` es la keyword frontend más buscada del mercado y no aparece en ninguno de tus 6 CVs — pese a que tenés React 19.2.4 pineado en `pnpm-lock.yaml`.** Next.js corre sobre React. Ponelo.

### Problemas de formato

| Problema | Fix |
|---|---|
| Separador `·` en skills | Coma en versiones ATS |
| Guión largo `—` en fechas | Guión simple `-` |
| Header centrado | Alinear izquierda |
| `+59895812723` | `+598 95 812 723` |
| `khazzaka2008@hotmail.com` | Email profesional con nombre |

---

## 5. GitHub — revisión completa

### Estado actual

| Métrica | Valor | Lectura |
|---|---|---|
| Repos públicos | 11 (6 académicos ya archivados ✅) | Limpieza hecha |
| Repos de nivel profesional | **2** | `consultorio-odontologico` + `Frontpet` |
| Pinneados | 2 | ❌ **Falta pinnear `Frontpet`** |
| Commits consultorio | 48, PRs hasta #21 | Volumen moderado, calidad alta |
| PRs FrontPet | Hasta **#56** en ~6 semanas | Volumen alto y sostenido |
| Documentación | READMEs + CLAUDE.md + ROADMAP + 17 ADRs + design-system | **Excepcional para el nivel** |

### Comparación de los dos repos

| Dimensión | `consultorio-odontologico` | `Frontpet` |
|---|---|---|
| Madurez de producto | ✅ En producción, cliente pagando | 🔄 MVP1, hito de cobro 05/09 |
| Arquitectura backend | Por capa (`controller`/`service`/`repository`) | **Por feature** (`catalog`/`booking`/`identity`) — más maduro |
| Seguridad | JWT en localStorage (deuda declarada) | **JWT en cookie HttpOnly** — corregido |
| Testing | Tests de backend | **JUnit 5 + Testcontainers** — superior |
| Observabilidad | Sentry + Uptime Kuma | **Logback JSON desde el día uno** |
| Documentación de decisiones | Sección en el README | **17 ADRs versionados** — superior |
| Planificación | ROADMAP por sprints | **ROADMAP con presupuesto de horas y análisis de slack** — superior |
| Frontend | Angular 19 + Material | Next 16 + React 19 + Tailwind 4 + shadcn |

**Conclusión:** FrontPet es tu mejor trabajo de ingeniería. El consultorio es tu mejor prueba de negocio (está cobrando). Necesitás ambos visibles, no uno.

### El ROADMAP de FrontPet merece mención aparte

Tiene cosas que no vi nunca en un repo de junior:

- Presupuesto de horas comprometidas (22 hs/semana) contra horas disponibles
- Cálculo de slack por bloque, con la advertencia *"el bloque B tiene 3,5 hs de margen: un solo mal día ahí se come la entrega"*
- Recomendación explícita de adelantar el sprint más riesgoso para convertir 3,5 hs de margen en 22
- Registro fechado de decisiones de plan y re-baseos
- Separación entre **hito de cobro** y **entrega final**, con la nota de que se factura contra valor entregado, no contra promesa

Eso no es gestión de proyecto de estudiante. Es gestión de proyecto de alguien que entiende riesgo de entrega y flujo de caja.

### Acciones concretas

**Pinnear en este orden:**
1. `consultorio-odontologico` — el que está en producción
2. **`Frontpet`** ← hoy falta, es el error más caro de tu GitHub
3. `sebakhazzaka2` (README de perfil)
4-6. Libres, o portfolio cuando exista

**Arreglar en el README de perfil (`sebakhazzaka2`):**
- Link al repo de `Frontpet` (hoy dice `—`)
- Corregir "clientes pagos" → mejor: *"dos clientes con contrato, uno en producción"* (más preciso y más fuerte)
- Actualizar stack: Next.js **16**, Java **21**, agregar React 19, Tailwind 4, Testcontainers, PostgreSQL 16
- Agregar badges `shields.io`
- Colapsar proyectos académicos con `<details>` (ya están archivados, pero siguen ocupando espacio visual)
- Agregar una línea sobre ADRs — es tu diferenciador menos conocido

**Lo que sigue faltando:**
- Un proyecto que muestre **colaboración con otros** (todo sigue siendo solo)
- Contribución open source, aunque sea mínima
- Portfolio

---

## 6. Marca personal

### Qué imagen proyectás — actualizado

> *"Developer autodidacta con criterio de arquitectura de nivel semi-senior, proceso de ingeniería documentado, y dos clientes con contrato — pero sin ninguna validación externa ni experiencia trabajando con otras personas."*

La primera mitad de esa frase mejoró mucho con la revisión de FrontPet. La segunda mitad no cambió.

### Empresas que te llamarían

| Perfil | Probabilidad | Comentario |
|---|---|---|
| Startups LATAM early-stage | **Alta** | Tu perfil les grita "entrega y documenta" |
| Software houses brasileras | **Alta** ↑ | CPF + PT nativo + cliente en Brasil con contrato firmado |
| Agencias UY-AR-BR | **Media-alta** | Java/Angular/Next es exactamente su stack |
| Producto mid-size (50-200) | **Media** ↑ | Sube por los ADRs y Testcontainers si llega a un técnico |
| Corporaciones (IBM, Globant) | **Baja-media** | Vía pasantía específicamente |
| USA/EU contratación directa | **Baja** | Requieren experiencia formal + C1 |

### Roles a los que NO deberías postular todavía

- **AI Engineer** — cero evidencia de Python, ML, LLMs, RAG, embeddings o vector DBs. Aplicar hoy es quemar postulaciones.
- **Frontend senior/mid puro** — competente, pero tu centro de gravedad es backend/infra.

### Sesgos que genera tu perfil

| Sesgo | Cómo contrarrestarlo |
|---|---|
| **"Lobo solitario"** | Es tu sesgo #1 y no bajó con FrontPet. Contribuí a un repo ajeno. Mencioná squash merge, PR-based delivery, conventional commits. |
| **"Overengineering"** | Alguien puede ver ADRs + Testcontainers + Coolify para un petshop y pensar que sobre-diseñás. Tu defensa está escrita en tus propios ADRs — traela a la entrevista. |
| **"Proyecto de conocido"** | Contrarrestable ahora: tenés propuesta comercial firmada e hitos de cobro. Decilo. |
| **Carrera atrasada** | No lo menciones. Nadie pregunta si no lo ponés. |

---

## 7. Portfolio (sigue sin existir)

Sin cambios estructurales respecto a la v1, pero con **más material** para llenarlo.

### Stack propuesto

Next.js 16 + Tailwind 4 + shadcn/ui + Vercel — **exactamente el stack de FrontPet**. Ventaja: no aprendés nada nuevo, reutilizás componentes y el portfolio en sí demuestra el stack que declarás.

### Estructura

```
/                          Landing one-page
/proyectos/consultorio     Case study
/proyectos/frontpet        Case study
/sobre-mi                  Bio
/cv                        Los 3 PDFs
```

### Secciones de la landing

| # | Sección | Contenido |
|---|---|---|
| 1 | Hero | Nombre + "Full-Stack Developer · SaaS en producción" + 2 CTAs |
| 2 | Prueba social | Screenshot del sistema live + "Cliente activo desde mayo 2026" |
| 3 | Proyectos | 2 cards grandes, no 8 chicas |
| 4 | Stack | Agrupado por categoría |
| 5 | **Cómo trabajo** | Acá va tu diferenciador: ADRs, migraciones versionadas, PR-based delivery, presupuesto de horas |
| 6 | Contacto | Email, LinkedIn, GitHub |

### La sección que te va a conseguir entrevistas

**"Cómo trabajo"** — con evidencia verificable, no adjetivos:

> **Documento las decisiones, no solo el código.**
> 17 ADRs en FrontPet. Cada decisión de arquitectura tiene su contexto, sus alternativas y su plan de migración.
>
> **Ninguna migración aplicada a mano en producción.**
> Flyway versionado desde el día uno en los dos proyectos.
>
> **Corrijo lo que documento como deuda.**
> En el consultorio el JWT quedó en localStorage y lo registré como deuda técnica. En FrontPet arranca en cookie HttpOnly.
>
> **Estimo, mido y corrijo.**
> Presupuesté 19 horas para el backend de booking. Me llevó 26,5. Está registrado en el ROADMAP con la razón.

Ese último bloque es el más fuerte de todos porque nadie admite errores de estimación en un portfolio.

### Requisitos no negociables

| Área | Objetivo |
|---|---|
| Lighthouse | 95+ (ya hiciste trabajo de perf en el Sprint 2 de FrontPet — reutilizá el criterio) |
| Accesibilidad | **WAVE limpio.** Listás WCAG en 6 CVs; si el portfolio falla, es peor que no listarlo. |
| SEO | Metadata, OpenGraph, sitemap, JSON-LD `Person` |
| Responsive | 320 / 768 / 1024 / 1440 — los mismos breakpoints que usás en FrontPet |
| Animaciones | Sutiles. Framer Motion ya lo tenés. Nada de parallax ni cursores custom. |

---

## 8. Coherencia

### ¿Cuenta todo la misma historia?

| Canal | Historia | Nivel |
|---|---|---|
| Repo `Frontpet` | "Ingeniero con proceso documentado" | Semi-senior |
| Repo `consultorio-odontologico` | "Producto real, cliente pagando" | Semi-senior |
| CVs | "Developer full-stack con un producto" | Junior sólido |
| LinkedIn | "Junior buscando oportunidad" | Junior |

**El problema de coherencia empeoró con esta revisión.** No porque algo se rompiera, sino porque el techo de tu GitHub subió y el resto quedó donde estaba. La distancia entre lo mejor y lo peor de tu perfil ahora es de casi dos niveles de seniority.

### ¿Parece improvisado?

No. Al contrario: tenés más consistencia de proceso que la mayoría de los perfiles mid que reviso. Conventional commits en inglés, squash merge, branches de vida corta, ADRs, roadmaps con gates. Eso es un sistema, no improvisación.

El problema es que ese sistema **solo es visible si alguien clona tu repo**.

---

## 9. Puntuaciones

### Por canal

| Canal | v1 | **v2** | Justificación |
|---|---|---|---|
| LinkedIn | 4.5 | **4.5** | Sin cambios. Sigue siendo el cuello de botella. |
| CV Español (visual) | 7.5 | **7.5** | Bien, pero desactualizado respecto al stack real |
| CV Inglés (visual) | 7.5 | **7.5** | Ídem |
| CV Portugués (visual) | 8.0 | **8.0** | El mejor de los visuales |
| CV ATS (promedio) | 8.0 | **7.5** ↓ | Baja: descubrí más inconsistencias y omisiones de keywords |
| **GitHub** | 6.5 | **8.5** ↑↑ | Dos repos de nivel profesional, documentación excepcional. Pierde 1.5 por FrontPet sin pinnear y perfil desactualizado. |
| Portfolio | 0 | **0** | Sigue sin existir |

### Por dimensión

| Dimensión | v1 | **v2** | Justificación |
|---|---|---|---|
| Empleabilidad | 6.5 | **7.0** ↑ | Sube el techo técnico; el piso sigue siendo distribución |
| Claridad | 8.5 | **8.5** | Se entiende en 10 segundos qué hacés |
| Profesionalismo | 8.0 | **8.5** ↑ | El proceso de trabajo documentado sube esto |
| Branding | 7.0 | **6.5** ↓ | Baja: el gap entre lo que sos y lo que comunicás creció |
| Diferenciación | 8.5 | **9.0** ↑ | ADRs + Testcontainers + 2 clientes + trilingüe + CPF es muy escaso |
| Credibilidad | 7.0 | **7.0** | Sube por evidencia, baja por el "paying clients" plural sin corregir |
| **Nivel técnico percibido** | 7.5 | **8.5** ↑ | Backend/DevOps 9.0 · Frontend 7.5 · AI/Data 0 |

---

## 10. Posicionamiento competitivo

### Percentil actualizado

**Top 6-8% del pool junior LATAM** (v1: top 12-15%).

| Segmento | % del pool | ¿Los superás? |
|---|---|---|
| Proyectos de tutorial | ~45% | ✅ Ampliamente |
| Proyecto académico grande sin deploy | ~25% | ✅ Ampliamente |
| Proyecto propio deployado sin usuarios | ~18% | ✅ Sí |
| Con experiencia formal (pasantía/junior) | ~10% | ⚠️ Empatás o superás en técnica, perdés en validación |
| Experiencia formal + proyectos propios de calidad | ~2% | ❌ No |

**Por qué subiste 6 puntos:** el segmento "con experiencia formal" incluye mucha gente que hizo tickets durante un año sin tocar arquitectura, sin escribir un ADR y sin haber configurado un pipeline. Técnicamente los superás. Lo que no tenés es el sello de que alguien más te evaluó.

**Por qué no estás en el top 3%:** validación externa. Cero empleadores, cero certificaciones, cero contribuciones open source, cero recomendaciones públicas. Todo tu perfil es autoevaluado.

### Por rol

| Rol | v1 | **v2** | Comentario |
|---|---|---|---|
| Backend Java Jr. | Top 10% | **Top 5%** | Spring Boot + Testcontainers + producción real es rarísimo en juniors |
| Full-Stack Jr. | Top 15% | **Top 8%** | Next 16 + React 19 + Angular 19 en dos productos reales |
| DevOps Jr. | Top 25% | **Top 20%** | Sube por Coolify/Cloudflare, sigue sin K8s ni Terraform |
| Frontend Jr. | Top 35% | **Top 20%** ↑ | Sube fuerte: React 19, Tailwind 4, shadcn, TanStack Query, Server Components |
| AI Engineer Jr. | Bottom 20% | **Bottom 20%** | Sin cambios. **No apliques.** |

> El salto en Frontend es el más grande y el que tu CV oculta más. "Next.js 14" en el CV vs Next 16 + React 19 + Tailwind 4 + shadcn en el repo es la diferencia entre "sabe algo de front" y "está en el stack que las empresas están adoptando ahora".

---

## 11. Roadmap de mejoras por impacto

### 🔴 Muy alto impacto

| # | Mejora | Tiempo | Dificultad |
|---|---|---|---|
| 1 | Corregir "paying clients" plural y FrontPet como "live" en ATS EN | 10 min | Trivial |
| 2 | **Actualizar stack real en los 6 CVs** (Next 16, Java 21, React 19, Tailwind 4, Testcontainers, JUnit 5) | 45 min | Trivial |
| 3 | **Pinnear `Frontpet` en GitHub** | 2 min | Trivial |
| 4 | LinkedIn: cargar el SaaS como Experiencia formal | 20 min | Trivial |
| 5 | LinkedIn: llegar a 300+ contactos | 30 días × 15 min | Baja |
| 6 | **Declarar los dos clientes con contrato** en CVs y LinkedIn | 20 min | Trivial |
| 7 | Agregar métricas reales (PRs, commits, sprints, horas, clientes) | 1 h | Baja |

### 🟠 Alto impacto

| # | Mejora | Tiempo | Dificultad |
|---|---|---|---|
| 8 | Portfolio en Next 16 + Vercel | 15-20 h | Media |
| 9 | Actualizar README de perfil de GitHub | 1 h | Baja |
| 10 | LinkedIn: Featured (4 items) + banner | 45 min | Trivial |
| 11 | Unificar carrera e inglés en los 6 CVs | 20 min | Trivial |
| 12 | **Agregar `ADRs` como skill de proceso** | 5 min | Trivial |
| 13 | 1 post técnico/semana en LinkedIn (tenés 3 temas listos) | 30 min/sem | Baja |

### 🟡 Medio impacto

| # | Mejora | Tiempo |
|---|---|---|
| 14 | Email profesional | 15 min |
| 15 | AWS Cloud Practitioner | 3-4 sem |
| 16 | 1 PR mergeado en open source | 5-15 h |
| 17 | Fixes de formato ATS (`·` → `,`, teléfono, header) | 30 min |

### 🔵 Bajo impacto

| # | Mejora | Tiempo |
|---|---|---|
| 18 | Badges shields.io | 20 min |
| 19 | Dominio `.dev` | 30 min + USD 15 |
| 20 | Colapsar académicos con `<details>` | 15 min |

---

## 12. Plan de acción

### Hoy (≈1,5 horas) — lo que más rinde por minuto invertido

- [ ] Pinnear `Frontpet` en GitHub *(2 min — es el mejor ROI de toda la lista)*
- [ ] Corregir "paying clients" → "an active paying client" en ATS EN
- [ ] Agregar "currently in active development" a FrontPet en ATS EN
- [ ] Reemplazar "Next.js 14" → **"Next.js 16"** en los 6 CVs
- [ ] Agregar a skills: `React 19`, `Tailwind CSS 4`, `JUnit 5`, `Testcontainers`, `Java 21`, `TanStack Query`, `Zod`
- [ ] Agregar `ADRs (Architecture Decision Records)` a proceso

### Semana 1 (≈4 h más)

- [ ] Unificar nombre de carrera en los 6 CVs
- [ ] Unificar inglés → "B2 Cambridge FCE", sin "avanzado"
- [ ] Email profesional nuevo, reemplazar en los 6 CVs
- [ ] LinkedIn: headline, About, Experiencia formal, Featured con 4 items, banner
- [ ] README de perfil GitHub: link a FrontPet, stack actualizado, "dos clientes con contrato"
- [ ] Extraer métricas de los repos y agregarlas a los CVs
- [ ] Empezar 10 conexiones/día en LinkedIn

### Semanas 2-3 (≈20 h)

- [ ] Portfolio en Next 16 + Tailwind 4 + Vercel
  - Sección "Cómo trabajo" con los 4 bloques de evidencia
  - 2 case studies con la estructura problema → solución → decisiones → resultados → qué aprendí
  - WAVE limpio + Lighthouse 95+
- [ ] Dominio `.dev` y deploy
- [ ] Agregar el portfolio a los 6 CVs, LinkedIn y GitHub

### Semanas 4-12 (en paralelo)

**Track A — Distribución** *(30 min/día)*
- [ ] 10 mensajes directos/semana a CTOs y EMs de startups LATAM
- [ ] 1 post técnico/semana (empezá por el de estimación 19 h → 26,5 h)
- [ ] 10-15 postulaciones/semana: Backend Java Jr. > Full-Stack Jr. > Trainee

**Track B — Validación externa**
- [ ] 1 PR mergeado en open source
- [ ] AWS Cloud Practitioner
- [ ] Pedirle al cliente del consultorio una recomendación escrita en LinkedIn *(gratis, alto impacto, nunca lo pensaste)*

**Track C — Entrega FrontPet**
- [ ] Hito de cobro 05/09 — cuando la tienda esté vendiendo, actualizás los 6 CVs a "dos productos en producción" y **ahí sí es verdad**

### Qué NO hacer

- ❌ Postular a **AI Engineer** — sin evidencia, quema postulaciones
- ❌ Perseguir **Kubernetes / Terraform** ahora
- ❌ Rehacer los CVs desde cero — solo actualizar el stack
- ❌ Postular a roles con **2+ años formales** requeridos

---

## Conclusión

> ### Si yo fuera el recruiter, ¿te entrevistaría?

**Sí, y con más ganas que hace una semana. Para Backend Java Junior sería una llamada rápida, no una revisión larga.**

**Por qué sí:**

Porque abrí dos repos y los dos tenían documentación que la mayoría de los equipos con los que trabajé no produce. Porque encontré 17 ADRs en un proyecto de un petshop. Porque encontré Testcontainers en un backend de un junior, cuando la mitad de los mid que entrevisto no sabe qué es.

Y sobre todo por esto: tu primer proyecto documenta el JWT en localStorage como deuda técnica conocida. Tu segundo proyecto especifica JWT en cookie HttpOnly, *"nunca localStorage"*. Identificaste un error, lo documentaste, y no lo repetiste. Con fecha y en público.

Eso es lo que intento averiguar en una entrevista técnica y casi nunca puedo. Vos lo dejaste escrito.

Sumale que en tu ROADMAP calculás slack por bloque de sprint y advertís que *"un solo mal día se come la entrega"*, que separás hito de cobro de entrega final, y que registrás que una tarea te llevó 26,5 horas cuando la estimaste en 19. Eso es criterio de entrega, no de estudiante.

**Por qué dudaría:**

Sigue sin haber nadie más que vos en toda tu historia. Todo lo hiciste solo, todo lo decidiste solo, todos los ADRs los escribiste y los aprobaste vos. No sé cómo reaccionás cuando alguien te dice que tu decisión está mal. Eso lo tengo que descubrir en la entrevista, y es el único riesgo real que veo.

Y hay algo que me haría fruncir el ceño: tu CV en inglés todavía dice *"two live SaaS products with paying clients"*. Uno está live. Es chico, pero si lo detecto antes de la entrevista, todo lo demás pasa a estar bajo sospecha — incluidos los ADRs, que son ciertos y son excelentes. **Corregilo hoy.**

**El diagnóstico que importa:**

En la v1 te dije que tenías un producto bueno con distribución rota. Después de leer FrontPet, corrijo: **tenés un producto muy bueno con distribución rota, y además lo estás describiendo peor de lo que es.**

Tu CV dice Next.js 14 y tenés Next 16. Dice un cliente y tenés dos con contrato. Dice Jest y tenés Testcontainers. No dice ADRs y tenés 17.

Estuviste preocupado toda esta semana por si exagerabas. El problema real es el contrario: **te estás subestimando por escrito.**

Arreglá eso hoy — son 45 minutos — y después arreglá la distribución.
