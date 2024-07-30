// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },
   colorMode: {
      preference: "dark",
   },
   runtimeConfig: {
      public: {
         api_url: "http://localhost:3000/",
         EMAIL_USER_ID: process.env.EMAIL_USER_ID,
         EMAIL_SERVICE_ID: process.env.EMAIL_SERVICE_ID,
         EMAIL_TEMPLATE_ID: process.env.EMAIL_TEMPLATE_ID,
      },
   },
   compatibilityDate: "2024-07-03",
   modules: [
      [
         "@nuxtjs/google-fonts",
         {
            families: {
               "Chakra Petch": true,
               "M PLUS 1": "100..700",
            },
         },
      ],
      "@nuxt/eslint",
      "vue3-carousel-nuxt",
      "nuxt-facebook-chat",
      "@nuxt/ui",
   ],
   css: ["~/assets/css/main.css"],
   postcss: {
      plugins: {
         autoprefixer: {},
      },
   },
})
