/**
 * lucide-react no incluye logos de marca (GitHub, LinkedIn) desde hace
 * varias versiones — mismo motivo por el que el ícono de WhatsApp
 * también está dibujado a mano en whatsapp-button.tsx.
 */
type IconProps = { className?: string };

export function GithubIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.51-3.5-.7-3.72-1.34-.13-.33-.68-1.34-1.16-1.62-.4-.21-.97-.74-.01-.75.9-.01 1.54.84 1.75 1.19 1.03 1.75 2.67 1.26 3.32.96.1-.75.4-1.26.72-1.55-2.5-.29-5.12-1.27-5.12-5.62 0-1.24.44-2.26 1.16-3.05-.12-.29-.5-1.46.11-3.04 0 0 .95-.31 3.12 1.16.9-.26 1.87-.39 2.83-.39.96 0 1.93.13 2.83.39 2.17-1.48 3.12-1.16 3.12-1.16.61 1.58.23 2.75.11 3.04.72.79 1.16 1.8 1.16 3.05 0 4.36-2.63 5.32-5.14 5.61.41.36.77 1.07.77 2.16 0 1.56-.01 2.82-.01 3.2 0 .27.18.6.69.49A10.01 10.01 0 0 0 22 12.19C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}
