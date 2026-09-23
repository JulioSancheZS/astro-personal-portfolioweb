export interface Experience {
  company: string;
  position: string;
  period: string;
  current: boolean;
  description: string;
  technologies: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    company: "Sistemática Internacional (Grupo Lafise)",
    position: "Analista Programador",
    period: "Ene 2026 - Actualmente",
    current: true,
    description:
      "Desarrollo y arquitectura de soluciones backend para el sector financiero. Diseño e implementación de procesos financieros y reglas de negocio complejas mediante APIs REST robustas asegurando alta disponibilidad en entornos de misión crítica.",
    technologies: [".NET", "C#", "ASP.NET Core","REST APIs", "SQL Server", "Clean Architecture", "Integraciones"],
  },
  {
    company: "CrediCompras",
    position: "Analista Programador Junior",
    period: "Oct 2021 - Enero 2026",
    current: false,
    description:
      "Automatización de procesos empresariales y modernización de sistemas internos. Lideré la migración de aplicaciones hacia arquitecturas web modernas, optimizando flujos de trabajo financieros mediante el desarrollo de APIs y optimización de bases de datos relacionales.",
    technologies: [".NET", "Blazor", "Kotlin", "Android", "REST APIs","SQL Server", "WebForms"],
  },
  {
    company: "Muebles Indecargo",
    position: "Pasantía de Desarrollo",
    period: "Sep 2020 - Jun 2021",
    current: false,
    description:
      "Desarrollo de soluciones a medida para el control operativo de proyectos. Levantamiento de requerimientos directos con el cliente y traducción de necesidades de negocio en herramientas tecnológicas.",
    technologies: ["UML", "Web Development", "Modelado de Datos"],
  },
];
