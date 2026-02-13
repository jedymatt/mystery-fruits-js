// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Enable SSG
  ssr: true,

  // Pre-render routes at build time
  nitro: {
    static: true,
    prerender: {
      routes: ['/', '/credits', '/contributors'],
      crawlLinks: true
    }
  },

  // Tailwind v4 via Vite plugin
  vite: {
    plugins: [
      // @ts-ignore - Tailwind v4 types
      (await import('@tailwindcss/vite')).default()
    ]
  },

  // TypeScript
  typescript: {
    strict: true,
    typeCheck: true
  },

  // App metadata
  app: {
    head: {
      title: 'Mystery Fruits',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Guess the mystery fruits game' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  // SSG optimization
  experimental: {
    payloadExtraction: false
  }
})
