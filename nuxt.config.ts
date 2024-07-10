// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   devtools: { enabled: true },
   runtimeConfig: {
      public: {
         api_url: "http://localhost:3000/",
      },
   },
   compatibilityDate: "2024-07-03",
   modules: [
      "@nuxtjs/tailwindcss",
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
      "@nuxt/icon",
      "nuxt-facebook-chat",
   ],
   css: ["~/assets/css/main.css"],
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
})
