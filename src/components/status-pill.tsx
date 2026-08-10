import { cn } from "@/lib/utils";

type StatusPillProps = {
  label: string;
  /** "live" usa el pulse verde de Stitch; "development" queda estático en azul. */
  variant: "live" | "development";
  className?: string;
};

export function StatusPill({ label, variant, className }: StatusPillProps) {
  const dotColor = variant === "live" ? "bg-green-500" : "bg-status-blue";
  const pingColor = variant === "live" ? "bg-green-400" : "bg-status-blue";

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full border border-border-slate bg-surface-container-lowest px-3 py-1",
        className,
      )}
    >
      <span className="relative flex h-2 w-2">
        {variant === "live" && (
          <span
            aria-hidden="true"
            className={cn(
              "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
              pingColor,
            )}
          />
        )}
        <span
          className={cn("relative inline-flex h-2 w-2 rounded-full", dotColor)}
        />
      </span>
      <span className="font-mono-code text-mono-code text-text-secondary">
        {label}
      </span>
    </div>
  );
}
