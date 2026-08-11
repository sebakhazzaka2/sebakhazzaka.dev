# Evaluación del portfolio como herramienta de empleabilidad

**Fecha:** 10 de agosto de 2026
**Alcance:** `https://sebakhazzaka-dev.vercel.app` (landing, `/proyectos/consultorio`, `/proyectos/frontpet`, `/cv`) + código fuente del repo
**Método:** lectura del contenido real (`src/content/*`, componentes, assets en `public/`) y fetch de las rutas en producción. Segunda opinión independiente sobre `Auditoria_Perfil_Sebastian_Khazzaka_v2.md`, no un resumen de ella.

**Pregunta que responde este documento:** si un recruiter o hiring manager recibe el CV y tiene acceso a este portfolio, ¿aumenta significativamente la probabilidad de conseguir una entrevista?

---

## Hallazgo previo que condiciona todo lo demás

`public/projects/frontpet/design-preview.png` mide **42 × 512 píxeles**.

Se renderiza a ancho completo en un contenedor `aspect-video` en `case-study.tsx:83-97` y en la card del landing. Es un upscale de ~28×: en pantalla es una mancha ilegible. Y aunque estuviera en alta resolución, es un screenshot del **mockup de Stitch de la propia página de case study** — no del producto Frontpet. No muestra nada de Frontpet.

Mientras tanto, `public/projects/consultorio/admin.png` (3840 × 2160, el panel admin real en producción) **no se usa en ninguna parte del sitio**.

Esa combinación —imagen rota en el proyecto que se vende como la mejor ingeniería, y la mejor captura real sin usar— es el problema más caro del portfolio, y es de ~40 minutos de trabajo.

---

## 1. El portfolio como recruiter (60–90 s)

### Primeros 10 segundos

"Full-Stack, Java + Spring Boot + Next.js, nombre, dos CTAs." Claro, rápido, sin ruido. El hero cumple. Inmediatamente debajo aparece el banner LIVE con captura real y "Cliente activo pagando desde mayo 2026" + botón a un dominio de tercero.

**Esos son los 10 segundos mejor invertidos de todo el sitio.** Un cliente real pagando, verificable en un click, en el primer scroll.

### A los 30 segundos

Dos proyectos, no ocho. Uno live, uno en desarrollo, ambos etiquetados con honestidad. Stack denso y actual (Next 16, React 19, Java 21, Testcontainers).

Acá aparece la primera fricción: la card de Frontpet muestra la imagen rota con un cartelito "Vista previa de diseño, no producción". Un recruiter no técnico no lo lee y ve una imagen fea. Un técnico lo lee y piensa: *"no tiene nada del producto que dice estar construyendo."*

### Qué queda al cerrar la página

Tres cosas, en este orden:

1. El consultorio está live con un cliente pagando.
2. "Documenta decisiones, hay ADRs y permalinks."
3. "El segundo proyecto no tiene nada visible todavía."

El resto —el stack, las migraciones, Caddy— se evapora.

### Señales profesionales reales

- Las evidence cards con permalinks fijados a commit (`src/content/evidence.ts`). Es lo mejor que hay en el sitio y es raro de ver.
- Los `alternativeDiscarded` en cada decisión técnica.
- La deuda de JWT declarada en el proyecto viejo con link cruzado al proyecto donde se corrigió.
- El desvío de estimación +40% publicado en vez de escondido.

### Señales que generan dudas

- **Imagen rota** (ver hallazgo previo).
- **`khazzaka2008@hotmail.com`** en header, footer y JSON-LD. La auditoría v2 lo marcó y sigue igual. En un portfolio con dominio propio, un hotmail con año de nacimiento rompe el registro profesional.
- **No hay ninguna persona.** No hay foto, no hay `/sobre-mi`, no hay una línea de bio, no hay ubicación, no hay idiomas. Se entiende qué se construyó; no se entiende quién es, dónde está, ni si se lo puede contratar legalmente. Para un recruiter esto es fricción operativa pura.
- **Sitio 100% en español**, con CVs en EN y PT. Si el pitch incluye software houses brasileñas y trabajo remoto, el portfolio no acompaña.
- **La sección "Resultados" del consultorio** dice: *En producción · Desde mayo 2026 · 9 migraciones versionadas*. Dos de los tres no son resultados: son el estado repetido por tercera vez en la misma página. **No hay un solo número de negocio en todo el portfolio.**

### Afirmaciones fuertes pero poco demostradas

"SaaS", "multi-tenant ready", "3 tiers comerciales", "feature flags por variables de entorno" — todo afirmado en prosa, sin una captura, un diagrama ni un link a la línea de código. Contrasta mal con las evidence cards, donde sí se hizo el trabajo de linkear. **El estándar fijado en "Cómo trabajo" no se aplica en los case studies.**

### Qué hace parecer más experimentado

Los permalinks, las alternativas descartadas, el desvío de estimación, el link cruzado deuda → corrección.

### Qué podría hacer parecer que se aparenta de más

El bloque de stack. 38 tecnologías en 6 categorías, en un portfolio con 2 proyectos. "MySQL 8", "Angular Material", "UUID v7", "3FN", "Squash merge" — a un senior le suena a inventario de currículum, no a criterio. La densidad del stack contradice el tono de "acá solo hay evidencia" del resto del sitio.

### Qué falta para confiar

Quién es, dónde está, con quién trabajó, y un número de negocio.

### Conclusión: ¿lo llamaría a entrevista?

**Sí, para Backend Java Jr. / Full-Stack Jr. — pero por el banner LIVE y las cuatro evidence cards, no por el portfolio en conjunto.**

El portfolio hoy funciona como un buen envoltorio de dos activos muy fuertes. La llamada se dispara en el segundo 8 (cliente pagando, verificable) y se refuerza en el minuto 3 si el lector scrollea hasta "Cómo trabajo". El riesgo real es que muchos recruiters no llegan al minuto 3.

---

## 2. Portfolio vs. CV + GitHub + LinkedIn

| Sección | Valor incremental | Por qué |
|---|---|---|
| **Cómo trabajo (4 evidence cards con permalink)** | 🔥 | No existe en ningún otro canal y **no puede existir**. Un CV no puede citar textualmente un ADR y linkear a la línea. GitHub lo tiene enterrado a 3 clicks dentro de `docs/decisions/`. Única sección donde el portfolio hace algo estructuralmente imposible en otro formato. |
| **Proof banner (captura real + cliente pagando + link live)** | 🔥 | El CV dice "cliente pagando"; el portfolio lo **muestra y lo hace verificable en un click**. La diferencia entre claim y evidencia. |
| **Deuda declarada → corregida, con link cruzado entre case studies** | 🔥 | Es la mejor historia disponible y solo se puede contar navegando entre dos proyectos. Ni el CV ni GitHub la cuentan hoy. |
| **`alternativeDiscarded` en cada decisión** | 🔥 | Lo que separa "elegí X" de "evalué X vs Y". No cabe en un CV. |
| **Case study Consultorio (problema/solución/aprendizajes)** | ✅ | Organiza y da contexto a lo que ya está en el README. Vale, pero es reempaquetado. |
| **Case study Frontpet** | ⚠️ → ❌ | El contenido escrito es bueno; la ejecución visual (imagen rota, cero capturas de producto) **resta más de lo que suma hoy**. Un proyecto sin nada que mostrar, presentado con el mismo formato visual que uno live, invita la pregunta "¿esto existe?". |
| **Stack (38 items, 6 categorías)** | ⚠️ | Duplicado literal del CV. Cero valor incremental. Ocupa el espacio previo a la mejor sección. |
| **`/cv` con 6 PDFs** | ✅ | Útil operativamente (ATS + visual, 3 idiomas). No aporta señal, aporta conveniencia. Bien resuelto. |
| **Métricas tipo "48 commits · 25 PRs"** | ⚠️ | Están a un click en GitHub y son números que nadie usa para decidir. "25 PRs" no impresiona a nadie que sepa qué es un PR. |
| **Resultados del Consultorio ("En producción · Desde mayo 2026")** | ❌ | Tercera repetición del mismo dato en la misma página. Una sección titulada "Resultados" que no contiene resultados baja la credibilidad de las otras secciones. |
| **Footer "Disponible para roles full-stack"** | ⚠️ | Correcto pero invisible. Debería estar arriba. |

### Qué debería existir SOLO en el portfolio

1. Las 4 evidence cards con cita textual + permalink. **Único activo verdaderamente exclusivo.**
2. La narrativa cruzada deuda → corrección entre proyectos.
3. Capturas reales del producto funcionando (hoy: una sola, y la mejor sin usar).
4. Un diagrama de la arquitectura de deploy por-cliente del consultorio. No existe y es la decisión más interesante tomada.
5. Quién es: foto, ubicación, situación legal para contratar, idiomas.

### Qué debería salir

1. El bloque de stack de 38 items → colapsar a ~15 defendibles en entrevista técnica.
2. Los conteos de commits/PRs.
3. La imagen de Frontpet, hasta tener algo real.
4. Los "Resultados" del consultorio que no son resultados.

---

## 3. Diferenciación: ¿candidato A, B o C?

**Respuesta directa: el contenido es C. La presentación es B con dos parches de C.**

Lo que ubica en C está todo ahí —cliente pagando verificable, deploy propio, decisiones documentadas, deuda declarada, desvío de estimación— pero está **distribuido de forma que el 70% de los visitantes solo ve la mitad B**.

Concretamente:

- Un candidato B típico también tiene hero, dos proyectos, stack grande, links a GitHub. **La estructura del landing es indistinguible de la suya hasta el scroll 4.**
- Lo que un B **no puede** tener es el banner LIVE y las evidence cards. El banner sí está arriba ✅. Las evidence cards están **cuartas**, después de una pared de 38 tecnologías.
- Un B tampoco tiene un case study de un sistema que otro ser humano paga. Pero ese case study tiene una sección "Resultados" vacía de resultados, y comparte protagonismo 50/50 en el landing con un proyecto sin UI.

Y hay algo estructural: **se le dio a Frontpet exactamente el mismo peso visual que al Consultorio.** Dos cards idénticas. Pero uno tiene un cliente pagando y el otro no tiene UI. Al igualarlos visualmente, el promedio percibido baja hacia el más débil en vez de subir hacia el más fuerte. Se regaló la mejor prueba a favor de la simetría del grid.

**Veredicto:** hoy se lee como *"B fuerte que además tiene un cliente"*. El objetivo es *"C que además documenta como un mid"*. La distancia es de reordenamiento y evidencia visual, no de contenido nuevo.

---

## 4. Señales de seniority

### Fuertes (un senior las reconoce como reales)

| Señal | Por qué es fuerte |
|---|---|
| **Permalinks fijados a SHA de commit, no a `main`** | Nadie hace esto por accidente. Demuestra entender que los links a `main` se pudren. Señal de segundo orden: no se puede fingir porque hay que haber sufrido el problema. |
| **`alternativeDiscarded` explícito** | Criterio, no elección. |
| **Deuda de seguridad declarada en un portfolio** | Ningún junior publica "puse el JWT en localStorage" en su propio portfolio. Hacerlo y encima linkear dónde se corrigió es el momento más fuerte del sitio. |
| **+40% de desvío de estimación publicado** | Ídem. Un EM lo lee y piensa "esta persona no me va a mentir sobre un plazo". |
| **`git fetch + reset --hard` en vez de `pull`, con la razón** | Detalle de operación real. Solo se sabe si rompió un deploy. |
| **Cache movida a Caddy porque Spring Security mete `no-store`** | Bug de producción real, no de tutorial. |

### Débiles (cualquiera las escribe)

- La lista de 38 tecnologías. Especialmente "WCAG / WAVE", "Clean Code", "Prettier".
- "48 commits · 25 PRs".
- "Conventional Commits", "Squash merge" como skills. Son convenciones de 20 minutos, no competencias.
- "Módulos por dominio (tenant, identity, catalog, booking, orders, notifications)" — nombrar carpetas no demuestra que los límites se respeten.
- **"24 ADRs".** El número impresiona hasta que se nota que **no hay un solo ADR linkeado desde el case study de Frontpet**. Solo uno aparece, en una evidence card del landing.

### Potencialmente contraproducentes

- **Testcontainers + 24 ADRs + Coolify + Cloudflare + UUID v7 + multi-tenant, para un petshop de barrio.** El sesgo de "overengineering" que la auditoría marcó es real y el portfolio lo **amplifica** en vez de desactivarlo: presenta toda la sofisticación y ninguna justificación de negocio. El ADR 002 tiene la defensa escrita ("sin duplicar tiempo sin valor para el cliente actual") — y esa frase, que es la que salva, está en la cita del landing pero no en el case study.
- **"~10 tests de integración"** publicado como decisión de testing. Diez tests es poco, y decir el número invita a compararlo con lo que un proyecto de ese tamaño necesitaría. O crece, o no se da el número.
- **"Estimado 19h / Real 26,5h / +40%" como los únicos tres "Resultados" de Frontpet.** Señal excelente para un senior, desastre para un recruiter no técnico, que ve un cartel rojo que dice +40% bajo el título "Resultados". La honestidad hay que conservarla; el emplazamiento hay que arreglarlo — va en "Aprendizajes", no en "Resultados".

### Nivel que se aparenta

| Quién mira | Nivel que percibe |
|---|---|
| Recruiter no técnico (60 s) | **Junior con un cliente real.** El "cliente pagando" es lo único que registra por encima del ruido. |
| Hiring manager / EM (5 min) | **Junior avanzado tirando a mid en proceso.** El desvío de estimación y la deuda declarada le importan mucho. |
| Senior que abre los permalinks (15 min) | **Mid en criterio, junior en volumen y en trabajo con otros.** |

### ¿La percepción coincide con la evidencia?

Sí, y es el mejor cumplido posible: **el portfolio no infla.** Es de los pocos donde el techo percibido está *por debajo* del contenido verificable, no por encima. El problema no es exceso, es que la señal más alta está enterrada y sin apoyo visual.

Coincide con el diagnóstico central de la auditoría v2: **se subestima por escrito**, y el portfolio heredó ese vicio.

---

## 5. Análisis por proyecto

### Consultorio Odontológico — el único activo de contratación real

**Fuerza como evidencia: 8/10 en contenido, 5/10 en cómo está mostrado.**

- **Qué demuestra técnicamente:** que sabe terminar. Deploy en bare metal, dominio, HTTPS, 9 migraciones versionadas, un cliente que paga hace 3 meses.
- **Qué demuestra sobre el desarrollador:** entrega y sostiene en producción, que es lo que más cuesta encontrar en un junior.
- **Qué NO demuestra:** que el sistema se usa. Cero números de uso. Hoy no se sabe si el cliente lo abre todos los días o pagó una vez y volvió al cuaderno. Esa es exactamente la duda que un EM tiene sobre todo "cliente real" de un portfolio junior.

**Qué falta, en orden de impacto:**

1. **Un número de uso.** "X turnos agendados desde mayo", "Y pacientes en historia clínica", "Z% de reservas por la agenda pública vs WhatsApp". Uno solo. Está en la base de datos y es una query. **Es el dato más valioso que no se está mostrando en todo el perfil.**
2. **`admin.png` en la página.** Hay una captura 4K del panel admin sin usar. El panel admin es donde vive el trabajo; la landing pública es la parte que cualquiera hace. Poner las dos.
3. **Un diagrama** de la arquitectura por-cliente (Hetzner → Caddy → N contenedores Docker). Es la decisión más distintiva y hoy es un párrafo de texto.
4. **Un testimonio del cliente.** Dos líneas. La auditoría lo mencionó para LinkedIn; en el portfolio pesa más. Es gratis y es la única validación externa disponible en todo el perfil.
5. Los 3 tiers comerciales (Local / Web / Web+WhatsApp) están en una línea de prosa. Es la parte de "entiendo el negocio de mi cliente" y merece más.

**Qué ocultar:** "48 commits · 25 PRs" — a 25 PRs, el número trabaja en contra.

**¿Lo leen?** Recruiter: no, solo mira la captura y el badge LIVE. Hiring manager técnico: **sí**, y llegaría hasta "Aprendizajes". Los aprendizajes están bien escritos (el detalle de Spring Security / Caddy es exactamente el tipo de cosa que genera una pregunta de entrevista).

### Frontpet — hoy resta

**Fuerza como evidencia: 7/10 en contenido escrito, 2/10 como está publicado.**

- **Qué demuestra técnicamente:** capacidad de diseño arquitectónico (multi-tenant ready, módulos por dominio, cookie HttpOnly desde el commit 1, Testcontainers) y madurez de planificación (re-baseo documentado, hito de cobro separado de entrega).
- **Qué demuestra sobre el desarrollador:** que aprende entre proyectos y que no maquilla estimaciones.
- **Qué NO demuestra: que exista.** No hay una captura, no hay un deploy de preview, no hay link a nada corriendo, no hay un ADR linkeado desde la página. La única imagen es un archivo de 42 píxeles de ancho de un mockup del propio portfolio. Para alguien escéptico, Frontpet hoy es un conjunto de afirmaciones sobre un repo.

**Qué debería mostrarse:**

1. Cualquier captura de la UI real, aunque sea en `localhost` y a medio hacer, rotulada "en desarrollo — sprint 6". **Una pantalla fea real vale infinitamente más que un mockup lindo.**
2. Un deploy de preview en Vercel del frontend, aunque le pegue a datos seed. Con eso Frontpet pasa de afirmación a cosa que se toca.
3. Links directos a 3–4 ADRs concretos desde la sección de decisiones. Se dice "24 ADRs" y no se deja abrir ninguno.
4. Mover "+40%" de Resultados a Aprendizajes, y poner en Resultados algo que sea un resultado (módulos entregados, cobertura, endpoints — lo que sea real).

**Qué ocultar hasta el 05/09:** la imagen. Hoy, **sin imagen la card sería más creíble que con esta imagen**.

**¿Lo leen?** Recruiter: no. Hiring manager: hasta las decisiones técnicas, y ahí se gana la entrevista o se gana la sospecha de overengineering — depende de si ve el "para el cliente actual" que hoy no está en la página.

---

## 6. Credibilidad: claim por claim

| Claim | ¿Evidencia suficiente? | Qué lo cerraría |
|---|---|---|
| "Cliente activo pagando desde mayo 2026" | ✅ **Sí.** Captura + dominio de tercero verificable. El mejor claim del sitio. | Un número de uso lo llevaría de creíble a memorable. |
| "En producción" | ✅ Sí | — |
| "9 migraciones versionadas" | ✅ Sí, con permalink al directorio. Ejemplar. | — |
| "24 ADRs" | ⚠️ **Parcial.** Uno citado en el landing, ninguno linkeado desde el case study. | Linkear 3–4 ADRs concretos por nombre. |
| "Multi-tenant ready" | ⚠️ **Parcial.** Bien fraseado (ready ≠ operativo) y la cita del ADR 002 lo respalda. Pero no hay una línea de código ni de esquema visible. | Permalink al `@TenantFilter` o a una migración con `tenant_id`. Es un link. |
| "Testcontainers" | ⚠️ Nombra `AbstractIntegrationTest.java` sin linkearlo. "~10 tests" no ayuda. | Permalink al archivo + al workflow de CI que los corre en verde. **Un badge de CI pasando vale más que la palabra "Testcontainers".** |
| "SaaS con 3 tiers comerciales" | ❌ **No.** Solo prosa. | Una tabla de los tres tiers, o captura de la propuesta comercial con precios tachados. |
| "Feature flags y branding por variables de entorno" | ❌ **No.** | Un fragmento del `.env.example` o del `docker-compose`. 5 líneas de código lo prueban. |
| "Hito de cobro firmado" (Frontpet) | ⚠️ Claim sobre un documento que nadie puede ver. | Captura del ROADMAP donde está el hito, o del contrato con datos tapados. Sin eso, es palabra. |
| "Una instancia Docker por cliente" | ⚠️ Descrita bien, invisible. | El diagrama. |
| "WCAG / WAVE" en el stack | ❌ **Es un claim sobre este mismo sitio y no está demostrado.** La auditoría fue explícita: listar WCAG y no cumplirlo es peor que no listarlo. | Si el sitio pasa WAVE limpio y Lighthouse 95+, **poner los números en el footer**. Es autoevidencia gratis, y el único lugar donde el portfolio puede ser su propia prueba. Hoy no se aprovecha. |
| "Disponible para roles full-stack" | ⚠️ Sin ubicación ni modalidad, es medio claim. | "Montevideo, UY · remoto o híbrido · CPF brasileño". |

> **Regla que se escapó:** en "Cómo trabajo" el estándar es *cita textual + permalink*. En los case studies el estándar baja a *prosa afirmativa*. Un lector atento nota la asimetría y concluye que lo que no se linkeó es lo que no se puede linkear.

---

## 7. Valor por tipo de destinatario

### Recruiter no técnico

Entiende tres cosas: nombre, "full-stack Java/Next", y que hay un cliente pagando. Nada más. No entiende ADR, Testcontainers, multi-tenant, ni por qué "+40%" está en rojo bajo el título "Resultados" — si lo procesa, lo procesa mal.

- **Funciona bien** en los primeros 15 segundos.
- **Falla en:** no hay ubicación, no hay modalidad de trabajo, no hay foto, no hay años de experiencia, no hay idiomas, no hay un botón de contacto que no sea `mailto:`. Todo lo que ese perfil necesita para *mover el CV a la siguiente etapa* está ausente.

### Hiring manager / Engineering Manager

El mejor servido de los tres. Encuentra en 3 minutos: producto real sostenido, deuda declarada y corregida, estimación fallada y publicada, decisiones con alternativas. Eso es literalmente su checklist.

- **Falla en:** no hay una sola señal de trabajo con otras personas —ni un PR review, ni un colaborador, ni un cliente citado, ni una discusión— y eso es exactamente el riesgo que la auditoría identificó y que el portfolio no toca. También falta cualquier noción de escala: ¿este sistema aguanta 5 usuarios o 500?

### Senior developer entrevistador

Abre los permalinks y le gusta lo que ve. Después nota: 25 PRs y ~10 tests de integración es volumen chico; la imagen rota; y que "24 ADRs" no tiene ni un link.

Sale con la impresión de *"buen criterio, poco kilometraje, y no revisó su propia página"* — y ese último punto pica más de lo que parece, porque **la página entera está dedicada a argumentar que hay rigor**.

---

## 8. Conversión a entrevista (funnel CV → Portfolio → GitHub → Entrevista)

### Dónde el portfolio suma

- **Elimina la duda #1** ("¿el 'cliente real' del CV existe?") en 8 segundos con captura + link live. Es el trabajo más valioso que hace el portfolio y lo hace bien.
- **Genera curiosidad** con la historia deuda → corrección. Es el único gancho narrativo del sitio.
- **Baja la fricción a GitHub:** los permalinks a línea exacta llevan al lector al código bueno sin obligarlo a navegar el repo. Es el problema que la auditoría identificó ("el sistema solo es visible si alguien clona el repo") y el portfolio lo resuelve — pero **solo en las 4 evidence cards, no en los case studies**.
- **Genera preguntas de entrevista buenas:** "contame del desvío del sprint 5", "por qué instancia por cliente", "cómo migrarías el JWT del consultorio". Las tres son preguntas que convienen.

### Dónde resta

- **La imagen rota de Frontpet** es una fuga directa. En una página cuyo argumento central es "tengo rigor", un asset roto es una contradicción de la tesis, no un detalle estético.
- **El stack de 38 items** se come el momento de atención que debería ir a "Cómo trabajo".
- **"+40%" en rojo bajo "Resultados"** para un lector no técnico.
- **`mailto:` a un hotmail** como único canal de contacto. Un recruiter en el celular no manda un mail: copia un LinkedIn. El LinkedIn está solo en el footer.
- **Sin ubicación ni modalidad**, un recruiter internacional descarta antes de preguntar.

### El momento exacto de "quiero hablar con esta persona"

La evidence card 03 (deuda declarada → corregida) y la 04 (estimación fallada, publicada).

Están **cuartas en la página, después del stack**. Ese es el error de arquitectura de información más caro del portfolio.

---

## 9. Auditoría del documento existente (segunda opinión)

Contra `Auditoria_Perfil_Sebastian_Khazzaka_v2.md`.

### Recomendaciones que se cumplieron bien

- **"Cómo trabajo" con los 4 bloques de evidencia** → implementado, y **mejor que lo propuesto**: la auditoría pedía las afirmaciones; se agregaron citas textuales con permalink fijado a commit. Esa mejora no estaba en el documento y es la mejor decisión del proyecto.
- 2 cards grandes, no 8 chicas → ✅
- Stack actualizado y real (Next 16, Java 21, React 19, Testcontainers) → ✅, aunque ahora sobra volumen.
- Prueba social debajo del hero → ✅
- Estructura de rutas → ✅ salvo `/sobre-mi`.

### Recomendaciones que siguen vigentes

- **`/sobre-mi` con foto real.** Estaba en el plan y quedó fuera. Sigue siendo un error, por una razón distinta a la que da la auditoría: no es por "narrativa", es porque **el sesgo de lobo solitario es el riesgo #1 declarado y el portfolio no tiene ningún lugar donde desactivarlo.** Una sección "cómo trabajo con otros" —cómo se maneja un review que contradice una decisión propia, por qué escribir ADRs siendo el único lector, cómo se negoció el alcance con el cliente— ataca directamente la única objeción que la auditoría dice que le haría dudar. Eso no cabe en ningún otro canal.
- **Email profesional.** Sigue sin hacerse y ahora está en más lugares que antes.
- **Métricas reales.** Se agregaron las de ingeniería (commits, PRs, migraciones) y **no las de negocio**, que son las que valen.

### Recomendaciones sobrevaloradas

- **"Agregar métricas reales (PRs, commits, sprints)" — clasificada 🔴 muy alto impacto.** No lo es. "48 commits · 25 PRs" es ruido en el mejor caso y evidencia de volumen bajo en el peor. **Un turno agendado por un paciente real vale más que los 48 commits juntos.**
- **Lighthouse 95+ como requisito no negociable.** Vale como higiene, pero cero recruiters lo miran. Su valor real es otro y la auditoría no lo vio: **como número publicado en la propia página**, donde se convierte en autoevidencia del claim "WCAG" del stack. Medido y no mostrado, no rinde nada.
- **Dominio `.dev` clasificado en "bajo impacto".** Mal clasificado. `sebakhazzaka.dev` en un CV vs `sebakhazzaka-dev.vercel.app` no es cosmética: la URL de Vercel dice "proyecto", el dominio propio dice "profesional". Son USD 15 y 30 minutos, y aparece en los 6 CVs y en LinkedIn. Es P1, no P2. Además `site.domain` y el JSON-LD ya declaran `sebakhazzaka.dev`: hoy hay una inconsistencia entre lo que el schema dice y dónde vive el sitio.

### Lo que la auditoría no vio (porque el portfolio no existía todavía)

1. El riesgo de **igualar visualmente** un proyecto con cliente pagando y uno sin UI. Es el error de posicionamiento más grande del sitio.
2. Que el estándar de evidencia se aplicaría a "Cómo trabajo" pero **no a los case studies**, creando una asimetría que un lector atento castiga.
3. Que "Resultados" sin resultados de negocio deja el argumento más importante sin cerrar.
4. Que un portfolio en español-only choca con una estrategia de CVs en EN/PT.
5. Que faltaría la **conversión**: no hay CTA de contacto real, ni LinkedIn arriba, ni disponibilidad visible por encima del fold.

---

## 10. Priorización

| # | Cambio | Impacto en entrevistas | Esfuerzo | Prioridad |
|---|---|---:|---:|---:|
| 1 | Reemplazar la imagen de Frontpet: captura real de la UI (aunque sea localhost, rotulada "en desarrollo"). Si no hay nada, **quitar la imagen** — hoy resta. | Alto | 30 min | **P0** |
| 2 | Usar `admin.png` en el case study de Consultorio (ya está en `public/`, sin usar) | Alto | 20 min | **P0** |
| 3 | **Un número de uso real del Consultorio** (turnos agendados / pacientes / % de reservas online) en el proof banner y en "Resultados" | Muy alto | 1 h (una query) | **P0** |
| 4 | Mover "Cómo trabajo" **arriba de Stack**, inmediatamente después de Proyectos | Alto | 15 min | **P0** |
| 5 | Email profesional (`sebastian@sebakhazzaka.dev`) en header, footer, JSON-LD y los 6 CVs | Medio-alto | 45 min | **P0** |
| 6 | Reescribir "Resultados" del Consultorio con resultados; mover el +40% de Frontpet a Aprendizajes | Medio-alto | 30 min | **P0** |
| 7 | Podar el stack de 38 → ~15 items defendibles | Medio | 20 min | **P0** |
| 8 | Ubicación + modalidad + idiomas + CPF, visibles arriba del fold | Alto (recruiters) | 30 min | **P1** |
| 9 | Dominio `.dev` + redirect | Medio-alto | 30 min + USD 15 | **P1** |
| 10 | Linkear 3–4 ADRs concretos desde el case study de Frontpet | Medio-alto | 30 min | **P1** |
| 11 | Testimonio del cliente del consultorio (2 líneas + nombre + clínica) | Alto | 1 semana de espera, 10 min propios | **P1** |
| 12 | Diagrama de la arquitectura por-cliente (Hetzner → Caddy → N Docker) | Medio-alto | 2 h | **P1** |
| 13 | LinkedIn + GitHub en el header, no solo en el footer | Medio | 10 min | **P1** |
| 14 | Permalinks en los claims de los case studies (`@TenantFilter`, `AbstractIntegrationTest`, `.env.example`) | Medio | 45 min | **P1** |
| 15 | Deploy preview de Frontpet con datos seed | Alto | 3–4 h | **P1** |
| 16 | `/sobre-mi` con foto + "cómo trabajo con otros" (antídoto del lobo solitario) | Medio-alto | 3 h | **P1** |
| 17 | Publicar Lighthouse/WAVE en el footer como autoevidencia | Bajo-medio | 45 min | **P2** |
| 18 | Versión EN del sitio | Medio | 6–8 h | **P2** |
| 19 | Bloque de los 3 tiers comerciales del Consultorio | Bajo-medio | 45 min | **P2** |
| 20 | Badge de CI verde en el case study de Frontpet | Bajo-medio | 20 min | **P2** |

### NO HACER

- **Un tercer proyecto.** Diluye. Todo el valor está en profundizar el Consultorio.
- **Blog / sección de artículos.** Es una promesa que se ve abandonada a los 2 meses. Escribir en LinkedIn, que es donde está la distribución.
- **Más animaciones, dark/light toggle, cursor custom, transiciones de página.**
- **Rediseñar.** El diseño actual está bien y no es el problema.
- **Formulario de contacto con backend.** Un mailto y un LinkedIn alcanzan.
- **Testimonios genéricos o fabricados.** Uno real o ninguno.
- **Perseguir los 100 de Lighthouse desde 95.**

---

## 11. Test final

### A. ¿El portfolio agrega valor real?

**Sí, pero menos del que podría, y hoy tiene un componente que resta activamente** (la imagen de Frontpet).

### B. ¿Cuánto valor agrega?

Frente a CV + GitHub + LinkedIn: **~20% de la percepción profesional total hoy.** Casi todo concentrado en el proof banner y las 4 evidence cards.

Con los siete P0 hechos, llega a **~35%**, que es aproximadamente el techo de lo que un portfolio puede aportar cuando el CV y el GitHub ya son buenos.

> El cuello de botella del perfil sigue siendo la **distribución**, no el portfolio. En eso la auditoría v2 acertó de lleno, y el portfolio no cambió ese diagnóstico.

### C. Los 3 elementos que más valor generan

1. **Proof banner:** captura real + "cliente activo pagando" + link verificable en el primer scroll.
2. **Las 4 evidence cards** con cita textual y permalink fijado a commit. Único e irreproducible en otro canal.
3. **La narrativa deuda declarada → corregida** en el siguiente proyecto, con link cruzado entre case studies.

### D. Los 3 que sobran o tienen poco valor

1. **El bloque de stack de 38 items.** Duplica el CV y le roba el turno a la mejor sección.
2. **"48 commits · 25 PRs"** y las métricas de volumen.
3. **La imagen de Frontpet** — no sobra: resta.

*(Cuarto, mención aparte: los "Resultados" del Consultorio, que repiten el estado por tercera vez.)*

### E. Si hubiera solo 6 horas

| Horas | Trabajo |
|---|---|
| 1 h | Sacar el número de uso real del Consultorio de la base y ponerlo en el proof banner y en Resultados. **Lo más valioso de la lista.** |
| 1 h | Arreglar imágenes: `admin.png` en el case study; captura real de Frontpet o ninguna. |
| 1 h | Reordenar: "Cómo trabajo" arriba de Stack; podar el stack a 15; ubicación/modalidad/idiomas arriba del fold; LinkedIn en el header. |
| 1 h | Email profesional propagado a portfolio + 6 CVs. Dominio `.dev`. |
| 1 h | Reescribir "Resultados" en ambos case studies; mover el +40% a Aprendizajes. |
| 1 h | Permalinks a 3–4 ADRs y a `@TenantFilter` / `AbstractIntegrationTest` desde los case studies. |

Con esas 6 horas se pasa de "B fuerte con un cliente" a "C que documenta como un mid".

### F. Si hubiera 20 horas

Las 6 de arriba, más:

| Horas | Trabajo |
|---|---|
| 4 h | **Deploy preview de Frontpet con datos seed.** Convierte Frontpet de afirmación en cosa tocable. Es el mejor uso de las 14 horas restantes. |
| 3 h | `/sobre-mi` con foto real y una sección honesta sobre trabajo con otros. Ataca el único riesgo declarado. |
| 2 h | Diagrama de arquitectura del deploy por-cliente. |
| 2 h | Pedirle el testimonio al cliente e integrarlo (10 min propios, el resto es esperar; **iniciar el pedido hoy**). |
| 3 h | Case study del Consultorio en profundidad: los 3 tiers, feature flags con el `.env.example` real, capturas del flujo completo de un turno. |

### G. Sin modificar nada, ¿está para enviarlo con candidaturas?

**Sí — con una excepción que hay que arreglar antes del próximo CV.**

Tal como está, el portfolio **suma más de lo que resta** y es claramente mejor que no tenerlo: el proof banner solo ya justifica ponerlo en el CV.

Pero **no hay que mandar un CV más con la imagen de 42 píxeles de Frontpet en línea.** Es media hora de trabajo y hoy es una contradicción visible de la tesis central del sitio: un portfolio que argumenta rigor y publica un asset roto le da al lector escéptico exactamente la excusa que busca para desconfiar de los ADRs — que son ciertos y son el mejor activo del perfil.

Es el mismo mecanismo del *"two live SaaS products"* que la auditoría marcó: un detalle chico que pone bajo sospecha todo lo grande.

**Arreglar los ítems 1–3 (unas 2 horas) y enviar con confianza.**
