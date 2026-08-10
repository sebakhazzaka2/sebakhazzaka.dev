import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-center justify-center px-margin-mobile text-center md:px-margin-desktop">
      <p className="font-mono-label text-mono-label uppercase tracking-widest text-status-blue">
        404
      </p>
      <h1 className="mt-4 font-headline-lg-mobile text-headline-lg-mobile text-text-primary md:font-headline-lg md:text-headline-lg">
        Página no encontrada
      </h1>
      <p className="mt-4 max-w-[50ch] font-body-md text-body-md text-text-secondary">
        La ruta que buscás no existe o se movió.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 bg-status-blue px-6 py-3 font-mono-label text-mono-label text-white transition-opacity hover:opacity-90"
      >
        <ArrowLeft aria-hidden="true" className="size-4" />
        Volver al inicio
      </Link>
    </div>
  );
}
