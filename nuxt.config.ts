// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    sanityProjectId: process.env.SANITY_PROJECT_ID
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sanity'
  ],

  tailwindcss: {},

  googleFonts: {
    display: 'swap',
    families: {
      Unbounded: {
        wght: [300, 400, 500, 700, 900]
      },
      'DM Sans': {
        wght: [400, 500, 700]
      },
      'DM Mono': [400],
    }
  },

  sanity: {
    projectId: 'cqqeu99s'
  },

  devtools: {
    enabled: true
  }
})
