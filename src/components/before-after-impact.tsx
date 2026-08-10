import type { Project } from "@/content/projects";

type BeforeAfterImpactProps = {
  data: Project["beforeAfterImpact"];
};

/**
 * Franja de 3 líneas arriba de la prosa larga del case study: la versión que
 * se lee en 10 segundos, antes de problema/solución/decisiones para quien
 * sigue leyendo.
 */
export function BeforeAfterImpact({ data }: BeforeAfterImpactProps) {
  const rows: { label: string; value: string }[] = [
    { label: "Antes", value: data.before },
    { label: "Después", value: data.after },
    { label: "Impacto", value: data.impact },
  ];

  return (
    <dl className="grid grid-cols-1 gap-px overflow-hidden border border-border-slate bg-border-slate md:grid-cols-3">
      {rows.map((row) => (
        <div key={row.label} className="bg-surface-container-lowest p-6">
          <dt className="mb-2 font-mono-label text-mono-label uppercase tracking-wider text-text-muted">
            {row.label}
          </dt>
          <dd className="font-body-md text-body-md text-text-primary">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
