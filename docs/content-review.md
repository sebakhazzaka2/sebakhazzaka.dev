# Content review — proyectos

Fuente de verdad del copy antes de tocar `projects.ts` o cualquier componente (Paso 1 del plan de implementación). Cada dato está verificado contra el repo real — commit fijado para que los permalinks no se rompan si `main` avanza.

- Consultorio: `sebakhazzaka2/consultorio-odontologico` @ `9151cc8`
- Frontpet: `sebakhazzaka2/Frontpet` @ `cfd15a2`

Pendiente de aprobación humana. No volcar a `content/*.ts` hasta marcar esta sección como aprobada.

---

## Consultorio Odontológico

- **Título / tagline**: Consultorio Odontológico — B2B SaaS de gestión para profesionales de salud independientes.
- **Descripción de una línea (negocio, no tecnología)**: Sistema de turnos y gestión clínica para consultorios que hoy trabajan a mano por WhatsApp y Excel.
- **Estado**: LIVE — cliente activo pagando desde 2026-05-11.

**Antes / Después / Impacto**
- Antes: gestión de turnos manual por WhatsApp + cuaderno + Excel.
- Después: sistema web con agenda pública, historia clínica, tratamientos, pagos y deploy propio por cliente (una instancia Docker cada uno).
- Impacto: cliente real activo y pagando desde mayo 2026 — [neodentalmaster.turnosuy.com](https://neodentalmaster.turnosuy.com).

**Problema / Solución**
- Problema: profesionales independientes gestionando turnos sin sistema, sin historia clínica centralizada, sin cobrar de forma prolija.
- Solución: SaaS de instancia Docker por cliente, branding y feature flags por variables de entorno, modelo comercial en 3 tiers (Local / Web / Web + WhatsApp).

**Decisiones técnicas (con alternativa descartada)**
1. Una instancia Docker por cliente, en vez de multitenancy con una sola instancia compartida — aísla datos y falla de un cliente sin afectar a otros, a costo de más operación por cliente nuevo.
2. Deploy vía `git fetch + git reset --hard origin/main` en vez de `git pull` — un `pull` fallaba cuando el server tenía archivos versionados tocados a mano (`Caddyfile` vía `scp` sin commit). Ver `tasks/lessons.md`, entrada 2026-06-11.
3. Cache de imágenes en la capa de proxy (Caddy), no en Spring Security — Spring agrega `Cache-Control: no-store` a toda respuesta por default; mover el caching a Caddy resolvió un carrusel que se trababa. Ver `tasks/lessons.md`, entrada 2026-06-11.
4. Deuda técnica de seguridad **documentada y priorizada, no escondida**: JWT en `localStorage` en vez de cookie `HttpOnly`, con plan concreto de migración (P1, 1-1.5 días) ya en el ROADMAP.

**Métricas reales**
- 48 commits · 25 PRs (verificado vía `gh pr list`, no 21 como en el borrador anterior).
- 9 migraciones Flyway (`V1__baseline_schema.sql` → `V9__add_google_event_id_to_citas.sql`).
- Cliente activo pagando desde 2026-05-11.

**Cita verificada — deuda técnica (JWT)**
> "Security (S3): JWT in localStorage → HttpOnly cookie, rate limit on login, strict CSP, admin action audit log."
— [README.md#L66](https://github.com/sebakhazzaka2/consultorio-odontologico/blob/9151cc85dd7992974feed53979e9e81b76b648b9/README.md#L66)

> "[P1-1] JWT de localStorage → cookie HttpOnly + SameSite=Strict (1-1.5 días). XSS roba localStorage trivialmente."
— [ROADMAP.md#L264](https://github.com/sebakhazzaka2/consultorio-odontologico/blob/9151cc85dd7992974feed53979e9e81b76b648b9/ROADMAP.md#L264)

**Assets visuales**
- Screenshot real ya existe: `docs/screenshots/public-page-turnosuy.png` (landing pública) y `docs/screenshots/admin-turnosuy.png` (agenda/admin). Copiar a `public/projects/consultorio/` del portfolio. No hace falta placeholder — hay capturas reales de producción.

**Links**
- Repo: https://github.com/sebakhazzaka2/consultorio-odontologico
- Live: https://neodentalmaster.turnosuy.com
- Roadmap: https://github.com/sebakhazzaka2/consultorio-odontologico/blob/main/ROADMAP.md

---

## Frontpet

- **Título / tagline**: Frontpet — plataforma comercial para un petshop local, con base pensada para escalar a SaaS multi-tenant.
- **Descripción de una línea (negocio, no tecnología)**: Catálogo con pedidos por WhatsApp y agenda de servicios (baño y tosa) para un petshop, construido con arquitectura lista para atender más negocios del rubro.
- **Estado**: EN DESARROLLO — hito de cobro comprometido para 2026-09-05, entrega final 2026-09-30.

**Antes / Después / Impacto**
- Antes: propuesta comercial del negocio sin ningún sistema — pedidos y turnos informales.
- Después: SaaS en desarrollo activo, modelo de datos multi-tenant-ready operado hoy en modo single-tenant.
- Impacto: hito de cobro firmado contra valor entregado real (tienda vendiendo online) para el 2026-09-05, no contra una promesa.

**Problema / Solución**
- Problema: un petshop necesita vender catálogo online, recibir pedidos por WhatsApp y ofrecer turnos de baño/tosa, sin sistema propio.
- Solución: monorepo Spring Boot + Next.js con módulos por dominio (tenant, identity, catalog, booking, orders, notifications), diseñado para que agregar el segundo negocio no implique reescritura.

**Decisiones técnicas (con alternativa descartada)** — fuente: `docs/decisions/`
1. **ADR 002 — Multi-tenant ready en el modelo de datos, single-tenant en la operación**: cada tabla del dominio lleva `tenant_id` desde el día uno con un `@TenantFilter` global de Hibernate, pero sin construir infraestructura operativa multi-tenant (sin subdominios, sin signup, sin panel super-admin). Alternativa descartada: modelar todo single-tenant y retrofitear después (costo de migración altísimo) o construir toda la infraestructura multi-tenant en el MVP1 (duplica tiempo sin valor para el cliente actual).
2. **ADR 004 — Auth JWT en cookie HttpOnly** desde el inicio (a diferencia de Consultorio, que arrancó con localStorage y lo está migrando).
3. UUID v7 para identificadores (`backend/.../common/UuidV7.java`) — ordenable por tiempo, evita los problemas de fragmentación de índice de UUID v4 random.
4. Testcontainers sobre mocks para los tests de integración — `AbstractIntegrationTest.java` + ~10 tests de integración reales contra Postgres real, no contra un mock de repositorio.
5. Re-baseo de plan explícito y documentado (17/07/2026) cuando el Sprint 6 salió ~2x subestimado — el ROADMAP registra el desvío y la decisión en vez de esconderlo.

**Métricas reales**
- 24 ADRs en `docs/decisions/` (001 a 021 + índice — no 17 como en el borrador anterior).
- **+30 PRs** (25 verificados vía `gh pr list` a la fecha de esta auditoría; el repo sigue activo y el número sube semana a semana, así que se publica redondeado hacia abajo en vez de un valor exacto que quedaría desactualizado en días).
- **Sprint 5 (Booking backend): 19h estimadas → ~26,5h reales (+40%)** — ROADMAP.md línea 415. Cita exacta:
  > "corrió ~26,5 hs vs 19 estimadas. Ver Registro de decisiones de plan"
  — [ROADMAP.md#L415](https://github.com/sebakhazzaka2/Frontpet/blob/cfd15a2d9a48747dd96b4be4df1ecf5e05ca3af9/ROADMAP.md#L415)

**Assets visuales**
- No hay UI propia corriendo en producción todavía. Usar `docs/stitch/frontpet-case-study.png` (+ `.html` de referencia) como placeholder, marcado explícitamente en la UI como *"vista previa de diseño, no producción"*.

**Links**
- Repo: https://github.com/sebakhazzaka2/Frontpet
- Live: pendiente de deploy público (en desarrollo)
- Roadmap: https://github.com/sebakhazzaka2/Frontpet/blob/main/ROADMAP.md

---

## Pantallas de Stitch (referencia de diseño, en `docs/stitch/`)

5 pantallas de diseño descargadas (HTML + screenshot), la 6ta era el PRD en markdown, no una pantalla:

- `home.html` / `.png` — Home / Portfolio Refined
- `consultorio-case-study.html` / `.png` — Case study Consultorio
- `frontpet-case-study.html` / `.png` — Case study Frontpet (usada como placeholder de asset, ver arriba)
- `sobre-mi.html` / `.png` — Sobre mí (fuera de alcance v1, referencia para v1.1)
- `cv-descargas.html` / `.png` — CV / Descargas

Recordatorio de la regla del plan: de estas pantallas se toma **diseño únicamente** (tokens, layout, tipografía). El copy que traen (stack, evidence cards, etc.) es placeholder genérico y no se usa.

## Pendiente antes de aprobar esta sección

- [ ] Auditoría de README de GitHub / LinkedIn / email único (Paso 11 del plan, no bloqueante para este documento).
