export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  tags: string[];
  type: "Frontend" | "Full Stack" | "Mobile" | "Backend";
  featured?: boolean;
  content?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "control-de-gastos",
    title: "Control de Gastos",
    description: "Aplicación integral de finanzas diseñada bajo la filosofía de Presupuesto Base Cero (Zero-Based Budgeting).",
    image: "/images/projects/dashboard.png",
    link: "https://control-gasto-blazor.netlify.app/",
    github: "#",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    type: "Full Stack",
    featured: true,
    content: `<p class="text-lg text-primary-200 mb-6 leading-relaxed">
  Una aplicación integral de finanzas personales diseñada bajo la filosofía de <strong>Presupuesto Base Cero (Zero-Based Budgeting)</strong>. Permite a los usuarios asignar cada centavo de sus ingresos a propósitos específicos (sobres) antes de gastarlo, garantizando un control absoluto sobre su flujo de efectivo, metas de ahorro y compromisos recurrentes.
</p>

<img src="/images/projects/Planificacion.png" alt="Planificación y Presupuesto Base Cero" class="rounded-xl border border-surface-border my-8 w-full shadow-lg" />

<h3 class="text-2xl font-bold text-white mt-10 mb-6">🚀 Funcionalidades Principales</h3>

<ul class="space-y-6 mb-10">
  <li class="bg-surface-elevated p-6 rounded-xl border border-surface-border">
    <h4 class="text-lg font-bold text-accent-400 mb-2">Presupuesto Base Cero Quincenal/Mensual</h4>
    <p class="text-primary-300">Asistente paso a paso (Wizard) para crear planes financieros, definiendo ingresos esperados y distribuyéndolos en "sobres" hasta que el monto por asignar llegue a cero.</p>
  </li>
  <li class="bg-surface-elevated p-6 rounded-xl border border-surface-border">
    <h4 class="text-lg font-bold text-accent-400 mb-2">Gestión de Sobres (Categorización Inteligente)</h4>
    <ul class="list-disc pl-5 mt-2 text-primary-300 space-y-1">
      <li><strong>Mis Ahorros y Reservas:</strong> Dinero protegido a largo plazo.</li>
      <li><strong>Compromisos Obligatorios:</strong> Cuotas fijas mensuales (Internet, Luz, Agua).</li>
      <li><strong>Fondos de Consumo Diario:</strong> Gastos variables acumulables (Supermercado, Gasolina, Salidas).</li>
    </ul>
  </li>
  <li class="bg-surface-elevated p-6 rounded-xl border border-surface-border">
    <h4 class="text-lg font-bold text-accent-400 mb-2">Motor de Transacciones y Analítica</h4>
    <p class="text-primary-300">Registro rápido de ingresos/gastos, alertas de pagos recurrentes, y un Dashboard visual con gráficos interactivos (Recharts) sobre la distribución de gastos y evolución histórica.</p>
  </li>
</ul>

<div class="space-y-12 my-10">
  <figure>
    <img src="/images/projects/registro-gastos.png" alt="Registro de Gastos" class="rounded-xl border border-surface-border w-full max-w-md mx-auto shadow-lg" />
    <figcaption class="text-center text-sm text-primary-400 mt-3">Modal inteligente para el registro rápido de ingresos y gastos</figcaption>
  </figure>
  
  <figure>
    <img src="/images/projects/Historial.png" alt="Historial y Analítica" class="rounded-xl border border-surface-border w-full shadow-lg" />
    <figcaption class="text-center text-sm text-primary-400 mt-3">Vista completa del historial de movimientos</figcaption>
  </figure>
</div>

<h3 class="text-2xl font-bold text-white mt-10 mb-6">🛠️ Stack Tecnológico</h3>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
  <div>
    <h4 class="text-xl font-bold text-accent-400 mb-4">Frontend</h4>
    <ul class="list-disc pl-5 space-y-2 text-primary-300">
      <li><strong>Next.js 14:</strong> Renderizado del lado del servidor (SSR) y optimización de rutas con App Router.</li>
      <li><strong>React 18 & TypeScript:</strong> Tipado estático estricto y arquitectura basada en componentes funcionales.</li>
      <li><strong>Tailwind CSS & Shadcn UI:</strong> Diseño responsive, modo oscuro nativo e interfaces accesibles.</li>
      <li><strong>Recharts:</strong> Visualización de datos y gráficos interactivos.</li>
    </ul>
  </div>
  <div>
    <h4 class="text-xl font-bold text-accent-400 mb-4">Backend & Datos</h4>
    <ul class="list-disc pl-5 space-y-2 text-primary-300">
      <li><strong>Supabase:</strong> Plataforma Backend-as-a-Service y Autenticación segura.</li>
      <li><strong>PostgreSQL:</strong> Base de datos relacional robusta.</li>
      <li><strong>Row Level Security (RLS):</strong> Políticas de seguridad para aislamiento total de datos por usuario.</li>
    </ul>
  </div>
</div>`,
  },
  {
    slug: "mis-finanzas-blazor",
    title: "Mis Finanzas - Blazor",
    description:
      "Aplicación web de control de gastos con Blazor WebAssembly y MudBlazor. Registro de ingresos/egresos, presupuestos y reportes.",
    image: "/images/projects/blazor-finance.png",
    link: "https://control-gasto-blazor.netlify.app/",
    github: "https://github.com/JulioSancheZS/ControlDeGastosBlazor",
    tags: ["Blazor", ".NET", "WebAssembly"],
    type: "Frontend",
    content: `<p class="mb-4">Una alternativa de frontend para la gestión financiera, construida enteramente en C# usando Blazor WebAssembly.</p>
<h3 class="text-2xl font-bold text-white mt-8 mb-4">Características</h3>
<ul class="list-disc pl-5 space-y-2 mb-6">
  <li>Interfaz fluida y responsiva utilizando la librería MudBlazor.</li>
  <li>Ejecución directa en el navegador gracias a WebAssembly.</li>
  <li>Cálculos y reportes de presupuesto generados en el lado del cliente de forma ultrarrápida.</li>
</ul>`,
  },
  {
    slug: "sopas-la-tia",
    title: "Sopas la Tía - Android",
    description:
      "App Android nativa en Kotlin con Jetpack Compose para gestión de pedidos de restaurante.",
    image: "/images/projects/android-orders.png",
    github: "https://github.com/JulioSancheZS/AppSopasLaTia",
    tags: ["Kotlin", "Android", "Jetpack Compose"],
    type: "Mobile",
    content: `<p class="mb-4">Aplicación móvil nativa diseñada para modernizar la toma de pedidos de un restaurante local.</p>
<h3 class="text-2xl font-bold text-white mt-8 mb-4">Características</h3>
<ul class="list-disc pl-5 space-y-2 mb-6">
  <li>Interfaz de usuario moderna y declarativa construida con Jetpack Compose.</li>
  <li>Sistema de carrito de compras intuitivo.</li>
  <li>Gestión de estado eficiente para mantener la sincronización entre el menú y el carrito.</li>
</ul>`,
  },
  {
    slug: "portafolio-profesional",
    title: "Portafolio Profesional",
    description:
      "Este mismo sitio web, construido con Astro, TypeScript y Tailwind CSS.",
    image: "/images/projects/portfolio.png",
    link: "https://portfolio-dev-julio.netlify.app/",
    github: "https://github.com/JulioSancheZS/astro-personal-portfolioweb",
    tags: ["Astro", "TypeScript", "Tailwind CSS"],
    type: "Frontend",
    content: `<p class="mb-4">Mi carta de presentación digital, diseñada para mostrar no solo las tecnologías que manejo, sino mi enfoque en resolver problemas.</p>
<h3 class="text-2xl font-bold text-white mt-8 mb-4">Stack Tecnológico</h3>
<ul class="list-disc pl-5 space-y-2 mb-6">
  <li><strong>Astro:</strong> Para generar un sitio estático ultra-rápido.</li>
  <li><strong>Tailwind CSS:</strong> Para un diseño responsivo, moderno y coherente.</li>
  <li><strong>TypeScript:</strong> Para asegurar la calidad y el tipado de los datos (experiencia, proyectos).</li>
</ul>`,
  },
];
