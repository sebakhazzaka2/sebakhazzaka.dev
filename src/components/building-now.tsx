import { MonoTag } from "@/components/mono-tag";
import {
  buildingIntro,
  buildingStatusLabel,
  buildingSteps,
  buildingTags,
  type BuildingStatus,
} from "@/content/building";
import { cn } from "@/lib/utils";

const statusStyles: Record<BuildingStatus, string> = {
  now: "border-status-blue text-status-blue",
  next: "border-border-slate text-text-secondary",
  later: "border-border-slate text-text-muted",
};

/** Roadmap de lo que se está construyendo ahora, en formato de lista numerada. */
export function BuildingNow() {
  return (
    <div className="space-y-8">
      <p className="max-w-[65ch] font-body-md text-body-md text-text-secondary">
        {buildingIntro}
      </p>
      <ol className="grid grid-cols-1 gap-px bg-border-slate md:grid-cols-5">
        {buildingSteps.map((step) => (
          <li
            key={step.number}
            className={cn(
              "flex flex-col gap-4 p-6",
              step.status === "now"
                ? "bg-surface-container-low"
                : "bg-surface-container-lowest",
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono-code text-mono-code text-text-muted">
                {step.number}
              </span>
              <span
                className={cn(
                  "border px-2 py-0.5 font-mono-code text-[11px] tracking-widest",
                  statusStyles[step.status],
                )}
              >
                {buildingStatusLabel[step.status]}
              </span>
            </div>
            <h3 className="font-body-md text-body-md text-text-primary">
              {step.title}
            </h3>
            <p className="font-body-md text-body-md text-text-secondary">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
      <div className="flex flex-wrap gap-2">
        {buildingTags.map((tag) => (
          <MonoTag key={tag} className="border border-border-slate">
            {tag}
          </MonoTag>
        ))}
      </div>
    </div>
  );
}
