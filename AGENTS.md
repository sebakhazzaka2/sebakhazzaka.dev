# Portfolio — sebakhazzaka.dev

## Stack
Next.js 16 · App Router · TypeScript strict · Tailwind CSS 4 · shadcn/ui · Framer Motion

## Convenciones
- Conventional Commits en inglés
- Squash merge en PRs
- Componentes en src/components/, páginas en src/app/
- Sin inline styles — todo Tailwind utilities
- Sin `any` en TypeScript
- `prefers-reduced-motion` en todas las animaciones

## Estructura de rutas
/ → landing
/proyectos/consultorio → case study
/proyectos/frontpet → case study
/sobre-mi → bio
/cv → descarga de CVs

## Fuente de verdad del diseño
Stitch — extraer tokens antes de implementar cada componente

## No hacer
- Sin `useMemo`/`useCallback` manuales (React Compiler activo)
- Sin localStorage
- Sin pages router
- Sin CSS modules (usar Tailwind)