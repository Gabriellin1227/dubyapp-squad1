// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  pages: true,

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    'usebootstrap',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Montserrat: true,
      Inter: true,
    }
  }
})