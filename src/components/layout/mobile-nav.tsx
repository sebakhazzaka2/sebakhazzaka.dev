"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { GithubIcon, LinkedinIcon } from "@/components/social-icons";
import { navLinks, site } from "@/content/site";

/**
 * Único trozo interactivo del header — todo lo demás sigue siendo Server
 * Component. Antes no había forma de llegar a /sobre-mi, /cv o a las
 * secciones ancladas desde mobile salvo "Contacto"; esto lo resuelve sin
 * convertir todo el header en cliente.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex size-10 items-center justify-center text-text-secondary transition-colors hover:text-text-primary"
      >
        {open ? (
          <X aria-hidden="true" className="size-5" />
        ) : (
          <Menu aria-hidden="true" className="size-5" />
        )}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-16 z-50 border-b border-border-slate bg-background px-margin-mobile py-6">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block font-mono-label text-mono-label text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-6 border-t border-border-slate pt-6">
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
        </div>
      )}
    </div>
  );
}
