import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Global stylesheet (Tailwind + DaisyUI live here)
  css: ['~/assets/css/main.css'],

  // Tailwind v4 runs as a Vite plugin
  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: { lang : 'en' },
      // %s is replaced by the title each page sets with useHead()
      titleTemplate: '%s | Danica Louisse Talusik',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#2e3f4a' },
      ],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    }
  }
})