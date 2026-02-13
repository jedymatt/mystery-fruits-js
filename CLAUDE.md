# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mystery Fruits Nuxt is a Vue 3 guessing game where players identify 3 hidden fruits in the correct order within 6 attempts. Built with Nuxt 3, Tailwind CSS v4, and deployed as a static site (SSG) to Vercel.

## Commands

- **Dev server:** `pnpm dev`
- **Build:** `pnpm build`
- **Preview build:** `pnpm preview`
- **Lint (with auto-fix):** `pnpm lint`

No test framework is configured.

## Architecture

**Nuxt 3 SSG** (Static Site Generation) using Vue 3 Composition API (no Vuex/Pinia). Package is ESM (`"type": "module"` in package.json). State is managed through composables in `composables/`.

### Auto-imports

Nuxt automatically imports:
- **Components** from `components/` — no manual imports needed
- **Composables** from `composables/` — use directly without imports
- **Layouts** from `layouts/` — referenced in pages via `definePageMeta`

### File Structure

- `pages/` — file-based routing (replaces Vue Router config)
- `components/` — auto-imported Vue components
- `composables/` — auto-imported composables (useFruits, useHistory, etc.)
- `layouts/` — page layouts
- `lib/` — utility functions (manual imports)
- `public/` — static assets
- `app/index.css` — Tailwind CSS configuration

### Key composables (auto-imported from `composables/`)

- `useFruits()` — manages the hidden mystery fruits, displayed fruit list (Fisher-Yates shuffle), and selection/reset logic
- `useHistory()` — tracks each attempt's selected fruits and match counts
- `useInstruction()` — instruction banner visibility with localStorage-based 3-day dismissal
- `useTheme()` — dark/light mode toggle persisted in localStorage

All composables are automatically available in pages and components without imports.

### Game logic flow

1. Player selects 3 fruits via `FruitButton` components in `pages/index.vue`
2. Watchers compare selections against hidden fruits using matching utilities in `lib/counter.js`
3. `countMatchingArray()` counts correct fruits (any order); `countMatchingArrayOrder()` counts correct position matches
4. Win = all 3 correct AND in correct order; Loss = 0 attempts remaining

### Routing

**Nuxt file-based routing** with clean URLs (no hash routing) — three routes:
- `/` → `pages/index.vue` (game)
- `/credits` → `pages/credits.vue`
- `/contributors` → `pages/contributors.vue`

All routes are pre-rendered at build time (SSG). Uses Nuxt's built-in loading indicator instead of NProgress.

### Styling

Tailwind CSS v4 with CSS-first configuration — all theme customization (fonts, animations, dark mode variant) is in `app/index.css` using `@theme` and `@custom-variant`. Uses `@tailwindcss/vite` plugin (manually configured in `nuxt.config.ts`) instead of PostCSS. Icons from `lucide-vue-next`. Path alias `@` → root directory, `~` → root directory.

### Config files

- **nuxt.config.ts** — main Nuxt configuration (replaces vite.config.ts)
  - SSG configuration (`ssr: false`, `nitro.static: true`)
  - Tailwind Vite plugin manually configured
  - Pre-render routes: `/`, `/credits`, `/contributors`
- **eslint.config.js** — ESLint flat config

### Build Output

- Development: `pnpm dev` starts Nuxt dev server
- Production: `pnpm build` generates static site in `.output/public/`
  - All routes pre-rendered at build time
  - Client-only components handled via `<ClientOnly>`
  - localStorage accessed only on client side

### Deployment

Configured for Vercel deployment (see `vercel.json`):
- Framework: Nuxt.js
- Build command: `pnpm build`
- Output directory: `.output/public`
