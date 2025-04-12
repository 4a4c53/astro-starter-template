# Astro Starter Template con Tailwind, ESLint y Prettier

Este proyecto es un _boilerplate_ moderno para desarrollar aplicaciones web con [Astro](https://astro.build/). Viene preconfigurado con TypeScript, TailwindCSS, ESLint y Prettier para ayudarte a escribir código limpio y eficiente desde el primer momento.

## ✨ Características

- ⚡ **Astro** – Framework para sitios rápidos y optimizados.
- 🔐 **TypeScript** – Tipado estático para mayor seguridad.
- 🎨 **TailwindCSS** – Utilidades para estilos rápidos y consistentes.
- 🧹 **ESLint** – Reglas personalizadas para un código limpio.
- 🧼 **Prettier** – Formateo automático con soporte para Astro y Tailwind.
- 🐇 **Bun** – Administrador de paquetes rápido y moderno.

## 📂 Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:

```text
/
├── public/                # Archivos estáticos públicos
│   └── favicon.svg        # Ícono del sitio
├── src/                   # Código fuente del proyecto
│   ├── components/        # Componentes reutilizables
│   ├── constants/         # Constantes globales
│   ├── layouts/           # Diseños base para las páginas
│   ├── pages/             # Páginas del sitio
│   └── styles/            # Estilos globales
├── .vscode/               # Configuración para Visual Studio Code
├── .astro/                # Archivos generados por Astro
├── package.json           # Dependencias y scripts del proyecto
├── tsconfig.json          # Configuración de TypeScript
├── prettier.config.js     # Configuración de Prettier
├── eslint.config.js       # Configuración de ESLint
└── astro.config.mjs       # Configuración de Astro
```

## 🧪 Scripts de Desarrollo

Puedes usar los siguientes comandos para trabajar con el proyecto:

| Comando            | Acción                                               |
| :----------------- | :--------------------------------------------------- |
| `bun install`      | Instala las dependencias                             |
| `bun run dev`      | Inicia el servidor de desarrollo en `localhost:4321` |
| `bun run build`    | Genera el sitio para producción en `./dist/`         |
| `bun run preview`  | Previsualiza el sitio generado localmente            |
| `bun run astro`    | Ejecuta comandos de Astro como `astro add`           |
| `bun run lint`     | Ejecuta ESLint para analizar el código               |
| `bun run lint:fix` | Aplica correcciones automáticas con ESLint           |

> [!NOTE]
> 💡 Si usás un alias como `astro` en los scripts, entonces `bun run astro add tailwind` funciona exactamente igual que `npx astro add tailwind`.

## ⚙️ Configuración Adicional

### 🎨 TailwindCSS

El proyecto utiliza TailwindCSS para estilos. En la versión 4, la configuración principal se realiza directamente en tu archivo CSS (usualmente `src/styles/global.css`) mediante variables CSS.

### 🧹 ESLint y 🧼 Prettier

El proyecto incluye reglas personalizadas para ESLint y Prettier. Estas herramientas están configuradas para trabajar juntas y garantizar un código limpio y bien formateado.

### 🛣️ Alias de Importación

Se ha configurado un alias `#` para facilitar las importaciones desde la carpeta `src`. Por ejemplo:

```ts
import { APP_NAME } from '#constants/package'
```

## 👨‍💻 Desarrollo

Este proyecto está diseñado para ser utilizado como base para aplicaciones web modernas. Puedes personalizarlo según tus necesidades y agregar nuevas funcionalidades.

## 📄 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---

¡Listo para construir algo increíble con Astro! ✨
