import { Download } from "lucide-react";

import type { CvOption } from "@/content/cv";

export function CvCard({ cv }: { cv: CvOption }) {
  return (
    <div className="flex flex-col items-start gap-6 border border-border-slate bg-surface-container-low p-6 transition-colors hover:border-[#5e5e5e] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4">
        <div
          aria-hidden="true"
          className="flex size-12 shrink-0 items-center justify-center border border-border-slate bg-surface-container-lowest font-mono-label text-mono-label text-text-secondary"
        >
          {cv.code}
        </div>
        <div>
          <div className="mb-1 flex items-center gap-3">
            <h2 className="font-headline-md text-headline-md text-text-primary">
              {cv.language}
            </h2>
            <span className="border border-border-slate bg-surface-container-highest px-2 py-0.5 font-mono-code text-caption text-text-secondary">
              ATS / Visual
            </span>
          </div>
          <a
            href={cv.atsHref}
            download
            className="font-mono-code text-mono-code text-text-muted underline decoration-status-blue/30 transition-colors hover:text-text-secondary"
          >
            Versión ATS (texto plano)
          </a>
        </div>
      </div>

      <div className="flex w-full flex-col items-end gap-2 sm:w-auto">
        <a
          href={cv.visualHref}
          download
          className="flex w-full items-center justify-center gap-2 bg-cta px-6 py-2 font-mono-label text-mono-label text-white transition-opacity hover:opacity-90 sm:w-auto"
        >
          <Download aria-hidden="true" className="size-[18px]" />
          Descargar PDF
        </a>
        <span className="font-mono-code text-[11px] text-text-muted">
          Actualizado: {cv.updated}
        </span>
      </div>
    </div>
  );
}
