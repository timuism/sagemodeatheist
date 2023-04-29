// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
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
  }
})
