import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type MonoTagProps = {
  children: ReactNode;
  className?: string;
};

/** Chip de stack en JetBrains Mono. */
export function MonoTag({ children, className }: MonoTagProps) {
  return (
    <span
      className={cn(
        "bg-surface-container-low text-text-secondary px-2 py-1 font-mono-code text-mono-code",
        className,
      )}
    >
      {children}
    </span>
  );
}
