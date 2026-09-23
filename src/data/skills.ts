export interface Skill {
  name: string;
  icon?: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  items: Skill[];
}

export const SKILLS: Record<string, SkillCategory> = {
  frontend: {
    title: "Frontend",
    description: "Desarrollo de interfaces modernas.",
    items: [
      { name: "React", icon: "/icons/react_light.svg", color: "#61DAFB" },
      { name: "Next.js", icon: "/icons/nextjs_icon_dark.svg", color: "#FFFFFF" },
      { name: "Astro", icon: "/icons/astro-icon-light.svg", color: "#FF5D01" },
      { name: "Tailwind", icon: "/icons/tailwindcss.svg", color: "#06B6D4" },
      { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
    ],
  },
  backend: {
    title: "Backend",
    description: "Arquitectura y gestión de datos.",
    items: [
      { name: "C#", icon: "/icons/csharp.svg", color: "#9B4DCA" },
      { name: ".NET Core", icon: "/icons/NET core.svg", color: "#512BD4" },
      { name: "SQL Server", icon: "/icons/Microsoft SQL Server.svg", color: "#CC2927" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg", color: "#336791" },
    ],
  },
  mobile: {
    title: "Móvil",
    description: "Desarrollo nativo y multiplataforma.",
    items: [
      { name: "Android", icon: "/icons/android-icon.svg", color: "#3DDC84" },
      { name: "Kotlin", icon: "/icons/kotlin.svg", color: "#7F52FF" },
    ],
  },
  tools: {
    title: "Herramientas",
    description: "Control de versiones y entornos.",
    items: [
      { name: "Visual Studio", icon: "/icons/visual-studio.svg", color: "#5C2D91" },
      { name: "VS Code", icon: "/icons/vscode.svg", color: "#007ACC" },
      { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
      { name: "GitHub", icon: "/icons/github_dark.svg", color: "#FFFFFF" },
      { name: "npm", icon: "/icons/npm.svg", color: "#CB3837" },
    ],
  },
  solutions: {
    title: "Soluciones Específicas",
    description: "Patrones y tecnologías clave.",
    items: [
      { name: "APIs REST", color: "#FF6C37" },
      { name: "Supabase", icon: "/icons/supabase.svg", color: "#3ECF8E" },
      { name: "Clean Arch", color: "#009688" },
      { name: "CI/CD", color: "#F05032" },
    ],
  },
};
