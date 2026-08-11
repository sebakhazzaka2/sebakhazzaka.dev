/**
 * Contenido de /sobre-mi. La narrativa humana: el resto del sitio ya
 * demuestra qué se construyó y cómo; esta página cuenta quién lo construyó.
 * Va después de la evidencia (banner LIVE, proyectos, Cómo trabajo) a
 * propósito — leído después de ver el trabajo, no antes.
 */
export type Certification = {
  title: string;
  issuer: string;
  detail: string;
  date: string;
  /** PDF real del certificado, servido desde public/certificaciones. */
  fileHref: string;
  /** Link público de verificación del emisor, si lo ofrece (ej. NVIDIA). */
  verifyHref?: string;
};

export const about = {
  photo: {
    src: "/sobre-mi/cv-photo-pro.png",
    alt: "Sebastián Khazzaka",
  },
  location: "Montevideo, Uruguay · Rivera / Santana do Livramento (frontera UY-BR)",
  languages: "Español nativo · Português nativo · English B2",
  certifications: [
    {
      title: "First Certificate in English (FCE)",
      issuer: "Cambridge Assessment English",
      detail: "Grade C · Council of Europe Level B2 · Overall Score 164",
      date: "Diciembre 2017",
      fileHref: "/certificaciones/fce-cambridge-b2.pdf",
    },
    {
      title: "Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      detail: "Certificate of Competency",
      date: "Agosto 2026",
      fileHref: "/certificaciones/nvidia-fundamentals-deep-learning.pdf",
      verifyHref: "https://learn.nvidia.com/certificates?id=zNQJH64kT52qxpg3d5N0cA",
    },
  ] as Certification[],
  comoEmpece:
    "Empecé a programar por curiosidad. De chico, los videojuegos y el hecho de desarmar PCs me llevaban constantemente a querer entender cómo funcionaba todo por dentro. Esa curiosidad terminó llevándome a estudiar programación. Hoy curso Lic. en Sistemas en la Universidad ORT Uruguay, semestre 4/8, mientras aplico conocimientos de mis fundamentos y mis aprendizajes autodidactas.",
  loQueMeMueve:
    "Me mueve hacer las cosas de forma profesional: entender bien el problema, trabajar con orden y trazabilidad, y entregar una experiencia que esté a la altura de lo que acordé con el cliente. También busco mantenerme actualizado para aprovechar nuevas tecnologías cuando realmente aportan valor.",
  comoTrabajoConOtros:
    "En proyectos como Consultorio y Frontpet aprendí que trabajar con un cliente no es simplemente recibir requisitos y programarlos. Muchas veces la otra persona sabe qué problema quiere resolver, pero no cómo expresarlo técnicamente ni qué alternativas existen. Mi trabajo es traducir esa necesidad, proponer posibilidades, explicar costos y limitaciones en un lenguaje claro, y ayudar a decidir qué tiene sentido construir según el presupuesto y el objetivo.",
  fueraDelCodigo:
    "Fuera del código, disfruto entrenar, viajar, conocer otras culturas y aprender idiomas. También sigo siendo bastante fan de los videojuegos y de pasar tiempo en la naturaleza.",
} as const;
