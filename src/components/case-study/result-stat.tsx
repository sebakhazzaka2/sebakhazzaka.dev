import type { ResultStat as ResultStatType } from "@/content/projects";
import { cn } from "@/lib/utils";

export function ResultStat({ stat }: { stat: ResultStatType }) {
  return (
    <div className="flex flex-col justify-center bg-surface-container-lowest p-8">
      <span className="mb-2 font-mono-label text-mono-label uppercase tracking-wider text-text-muted">
        {stat.label}
      </span>
      <span
        className={cn(
          "font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg",
          stat.variant === "accent" && "text-status-blue",
          stat.variant === "warn" && "text-error",
          (!stat.variant || stat.variant === "default") && "text-text-primary",
        )}
      >
        {stat.value}
      </span>
    </div>
  );
}
