// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-03",
  modules: ["@nuxtjs/tailwindcss", ["@nuxtjs/google-fonts", {
    families: {
      'Chakra Petch': true,
      'M PLUS 1': '100..700',
    },
  }]],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})