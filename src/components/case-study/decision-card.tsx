import { AlertTriangle, ArrowRight, Box, Server } from "lucide-react";
import Link from "next/link";

import type { Decision } from "@/content/projects";
import { cn } from "@/lib/utils";

const icons = { box: Box, "alert-triangle": AlertTriangle, server: Server } as const;

export function DecisionCard({ decision }: { decision: Decision }) {
  const Icon = icons[decision.icon];

  return (
    <div
      className={cn(
        "relative flex flex-col justify-between space-y-4 border bg-surface-container-low p-6",
        decision.debtLogged &&
          "border-status-blue/50 bg-surface-container-lowest hover:border-status-blue",
        !decision.debtLogged && "border-border-slate",
      )}
    >
      <div>
        <div className="mb-4 flex items-start justify-between">
          <Icon
            aria-hidden="true"
            className={cn(
              "size-5",
              decision.debtLogged ? "text-status-blue" : "text-text-muted",
            )}
          />
          <span
            className={cn(
              "font-mono-code text-mono-code",
              decision.debtLogged
                ? "rounded bg-status-blue/10 px-2 py-1 text-status-blue"
                : "text-text-muted",
            )}
          >
            {decision.tag}
          </span>
        </div>
        <h3
          className={cn(
            "mb-2 font-headline-md text-base text-text-primary md:text-lg",
          )}
        >
          {decision.title}
        </h3>
        {decision.alternativeDiscarded && (
          <p className="mb-2 font-mono-code text-xs italic text-text-muted">
            Alternativa descartada: {decision.alternativeDiscarded}
          </p>
        )}
        <p className="text-sm font-body-md text-text-secondary">
          {decision.description}
        </p>
      </div>

      {decision.resolvedIn && (
        <Link
          href={decision.resolvedIn.href}
          className="inline-flex items-center gap-1 font-mono-label text-mono-label text-status-blue transition-colors hover:text-white"
        >
          {decision.resolvedIn.label}
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      )}
    </div>
  );
}
