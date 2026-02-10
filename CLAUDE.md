# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mystery Fruits JS is a Vue 3 guessing game where players identify 3 hidden fruits in the correct order within 6 attempts. Built with Vite, Tailwind CSS, and deployed to GitHub Pages.

## Commands

- **Dev server:** `pnpm dev`
- **Build:** `pnpm build`
- **Preview build:** `pnpm preview`
- **Lint (with auto-fix):** `pnpm lint`

No test framework is configured.

## Architecture

**Vue 3 SPA** using Composition API (no Vuex/Pinia). Package is ESM (`"type": "module"` in package.json). State is managed through composables in `src/composables/`.

### Key composables

- `useFruits()` — manages the hidden mystery fruits, displayed fruit list (Fisher-Yates shuffle), and selection/reset logic
- `useHistory()` — tracks each attempt's selected fruits and match counts
- `useInstruction()` — instruction banner visibility with localStorage-based 3-day dismissal
- `useTheme()` — dark/light mode toggle persisted in localStorage

### Game logic flow

1. Player selects 3 fruits via `FruitButton` components in `HomeView.vue`
2. Watchers compare selections against hidden fruits using matching utilities in `src/lib/counter.js`
3. `countMatchingArray()` counts correct fruits (any order); `countMatchingArrayOrder()` counts correct position matches
4. Win = all 3 correct AND in correct order; Loss = 0 attempts remaining

### Routing

Vue Router v5 with **hash-based history** (`createWebHashHistory`) — three routes: `/` (game), `/credits`, `/contributors`. NProgress bar on route transitions.

### Styling

Tailwind CSS v4 with CSS-first configuration — all theme customization (fonts, animations, dark mode variant) is in `src/index.css` using `@theme` and `@custom-variant`. Uses `@tailwindcss/vite` plugin instead of PostCSS. Icons from `lucide-vue-next`. Path alias `@` → `src/`.

### Config files

ESLint uses flat config (`eslint.config.js`).
