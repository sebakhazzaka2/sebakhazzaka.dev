import { Clock, Database, FileText, ShieldCheck } from "lucide-react";

import type { Evidence } from "@/content/evidence";

const icons = {
  "file-text": FileText,
  database: Database,
  "shield-check": ShieldCheck,
  clock: Clock,
} as const;

export function EvidenceCard({ evidence }: { evidence: Evidence }) {
  const Icon = icons[evidence.icon];

  return (
    <div className="flex min-h-[320px] flex-col bg-[#111111] p-8 transition-colors hover:bg-[#151515]">
      <Icon aria-hidden="true" className="mb-4 size-6 text-text-secondary" />
      <h3 className="mb-2 font-mono-label text-mono-label text-text-primary">
        {evidence.number}. {evidence.title}
      </h3>
      <p className="mb-6 flex-grow font-body-md text-body-md text-text-secondary">
        {evidence.description}
      </p>
      <a
        href={evidence.permalink}
        target="_blank"
        rel="noopener noreferrer"
        className="block break-words border-l-[3px] border-status-blue bg-surface-container-lowest p-3 font-mono-code text-[12px] italic text-text-muted transition-colors hover:text-text-secondary"
      >
        &quot;{evidence.quote}&quot;
        <span className="mt-1 block not-italic text-text-muted">
          — {evidence.source}
        </span>
      </a>
    </div>
  );
}
