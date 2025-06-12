// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  pages: true,
  app: {
    head: {
      title: 'Sistema de Conciliação - Duby',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      ]
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    'usebootstrap',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt'
  ],
  googleFonts: {
    families: {
      Inter: true,
    }
  },
  css: [
    '~/assets/css/main.css'
  ],
  routeRules: {
    "/": { redirect: "/dashboard"},
  },
})