import { Terminal } from "lucide-react";
import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";
import { navLinks, site } from "@/content/site";

/**
 * Header fijo del sitio. El grueso sigue siendo Server Component; el único
 * trozo interactivo (el menú mobile) vive en <MobileNav />, un Client
 * Component aparte, para no convertir todo el header en cliente por un
 * botón. Antes no había forma de llegar a /sobre-mi, /cv o a las secciones
 * ancladas desde mobile salvo "Contacto" — ver MobileNav.
 */
export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full h-16 border-b border-border-slate bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-margin-mobile md:px-margin-desktop">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono-label text-mono-label font-bold uppercase tracking-widest text-text-primary transition-colors hover:text-status-blue"
        >
          <Terminal aria-hidden="true" className="size-4 text-status-blue" />
          {site.shortName}
          <span className="sr-only">— inicio</span>
        </Link>

        <nav aria-label="Principal" className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-mono-label text-mono-label text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden items-center gap-4 md:flex">
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-secondary transition-colors hover:text-text-primary"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-secondary transition-colors hover:text-text-primary"
            >
              <LinkedinIcon className="size-5" />
            </a>
          </div>
          <a
            href={`mailto:${site.links.email}`}
            className="font-mono-label text-mono-label text-status-blue transition-colors hover:text-text-primary"
          >
            Contacto
          </a>
          <MobileNav />
        </nav>
      </div>
    </header>
  );
}
