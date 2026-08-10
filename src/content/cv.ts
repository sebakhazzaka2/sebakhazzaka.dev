export type CvOption = {
  language: string;
  /** Código corto en vez de emoji de bandera: Windows no renderiza banderas (Segoe UI Emoji las muestra como "UY"/"US"/"BR" literales). */
  code: string;
  visualHref: string;
  atsHref: string;
  updated: string;
};

export const cvOptions: CvOption[] = [
  {
    language: "Español",
    code: "ES",
    visualHref: "/cv/sebastian-khazzaka-cv-es.pdf",
    atsHref: "/cv/sebastian-khazzaka-cv-es-ats.pdf",
    updated: "Agosto 2026",
  },
  {
    language: "English",
    code: "EN",
    visualHref: "/cv/sebastian-khazzaka-cv-en.pdf",
    atsHref: "/cv/sebastian-khazzaka-cv-en-ats.pdf",
    updated: "Agosto 2026",
  },
  {
    language: "Português",
    code: "PT",
    visualHref: "/cv/sebastian-khazzaka-cv-pt.pdf",
    atsHref: "/cv/sebastian-khazzaka-cv-pt-ats.pdf",
    updated: "Agosto 2026",
  },
];
