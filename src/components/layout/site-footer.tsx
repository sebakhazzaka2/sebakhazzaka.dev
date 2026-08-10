import { site } from "@/content/site";

const footerLinks = [
  { href: site.links.github, label: "GitHub", external: true },
  { href: site.links.linkedin, label: "LinkedIn", external: true },
  // mailto no lleva target="_blank": abriría una pestaña en blanco antes del cliente de correo.
  { href: `mailto:${site.links.email}`, label: "Email", external: false },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto w-full border-t border-border-slate bg-background">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-gutter px-margin-mobile py-12 md:grid-cols-2 md:px-margin-desktop">
        <p className="font-mono-code text-mono-code text-text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>

        <div className="flex flex-wrap items-center gap-6 font-mono-code text-mono-code text-text-muted md:justify-end">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="underline decoration-status-blue/50 underline-offset-4 transition-colors hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
          <span className="text-status-blue">{site.availability}</span>
        </div>
      </div>
    </footer>
  );
}
