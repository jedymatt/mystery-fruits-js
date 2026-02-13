# mystery-fruits-nuxt

---

## Open for suggestions and improvements so don't hesitate to create an issue or pull request

---

A Vue 3 guessing game built with Nuxt 3 where players identify 3 hidden fruits in the correct order within 6 attempts. Deployed as a static site using Nuxt's Static Site Generation (SSG).

## Tech Stack

- **Framework:** Nuxt 3 (with Vue 3)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide Vue Next
- **Rendering:** Static Site Generation (SSG)
- **Package Manager:** pnpm

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Nuxt Configuration Reference](https://nuxt.com/docs/api/configuration/nuxt-config).

## Project Setup

```sh
pnpm install
```

### Development Server

```sh
pnpm dev
```

Starts the Nuxt development server at http://localhost:3000

### Build for Production

```sh
pnpm build
```

Generates static site in `.output/public/` directory. All routes are pre-rendered at build time.

### Preview Production Build

```sh
pnpm preview
```

Preview the production build locally.

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## Features

- **File-based routing:** Pages automatically generate routes (no Vue Router config needed)
- **Auto-imports:** Components and composables are automatically imported
- **SSG deployment:** All pages pre-rendered for optimal performance
- **Clean URLs:** No hash routing - proper URLs for SEO
- **Dark mode:** Theme toggle with localStorage persistence
- **Responsive design:** Mobile-friendly layout

## Deployment

This project uses Nuxt Static Site Generation (SSG). Deploy the `.output/public/` directory to any static hosting service:

- Vercel (recommended - auto-detects Nuxt)
- Netlify
- GitHub Pages
- Cloudflare Pages
