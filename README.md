# Memorial Park

Sitio web de Memorial Park construido con [Next.js](https://nextjs.org/) y [Tailwind CSS](https://tailwindcss.com/), basado en el boilerplate NextPlate.

## Requisitos

- Node.js 18 o superior
- Yarn (`packageManager: yarn@1.22.22`)

## Instalación

```bash
yarn install
```

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `yarn dev` | Levanta el servidor de desarrollo |
| `yarn build` | Genera el build de producción (incluye `next-sitemap` en `postbuild`) |
| `yarn start` | Sirve el build de producción |
| `yarn lint` | Corre el linter de Next.js |
| `yarn format` | Formatea el código en `src/` con Prettier |
| `yarn generate-json` | Ejecuta el script `scripts/jsonGenerator.js` |
| `yarn remove-darkmode` | Elimina el soporte de modo oscuro y reformatea el código |

## Estructura del proyecto

```
src/
├── app/            # Rutas y páginas (App Router de Next.js)
├── config/         # Configuración del sitio (config.json, menu.json, social.json, theme.json)
├── content/        # Contenido en Markdown/MDX (blog, páginas, servicios, etc.)
├── hooks/          # Hooks de React personalizados
├── layouts/        # Componentes, partials y shortcodes de layout
├── lib/            # Utilidades y helpers
├── styles/         # Estilos globales
└── types/          # Tipos de TypeScript
```

La configuración principal del sitio (título, URL base, favicon, logo, metadatos, etc.) se encuentra en [src/config/config.json](src/config/config.json).

## Despliegue

El proyecto incluye configuración para:

- **Netlify** ([netlify.toml](netlify.toml)): build con `yarn build` y publicación de `.next`.
- **Docker** ([Dockerfile](Dockerfile)): para contenerizar la aplicación.
- **Vercel**: URL base configurada en `https://memorial-park.vercel.app/`.

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.
