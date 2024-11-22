// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: false },
   routeRules: {
      '/srv/**': {
         proxy: { to: "http://localhost:3000/**", },
         // proxy: { to: "https://api.wojolracing.pl/**", },
      }
   },
   turnstile: {
      // siteKey: '0x4AAAAAAA0L7VuI8JEGbSZJ',
      siteKey: '1x00000000000000000000AA',
      addValidateEndpoint: true,
   },
   colorMode: {
      preference: "dark",
   },
   app: {
      head: {
         charset: "utf-8",
         title: "Wojol Racing",
         viewport: "width=device-width, initial-scale=1",
      },
      pageTransition: { name: "page", mode: "out-in" },
   },
   runtimeConfig: {
      PORT: 26097,
      NITRO_PORT: 26097,
      turnstile: {
         secretKey: process.env.TURNSTILE_SECRET,
      },
      public: {
         api_url: "/srv/",
         EMAIL_USER_ID: process.env.EMAIL_USER_ID,
         EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
         EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
      },
   },
   compatibilityDate: "2024-07-03",
   modules: ['nuxt-countdown', '@vueuse/nuxt', '@vueuse/motion/nuxt', [
   "@nuxtjs/google-fonts",
   {
      families: {
         "Chakra Petch": true,
         "M PLUS 1": "100..700",
      },
   },
], "@nuxt/eslint", "vue3-carousel-nuxt", '@samk-dev/nuxt-vcalendar', "nuxt-facebook-chat", "@nuxt/ui", "@vueuse/nuxt", "@nuxtjs/turnstile"],
   css: ["~/assets/css/main.css"],
   postcss: {
      plugins: {
         autoprefixer: {},
      },
   },
})