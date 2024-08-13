import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app"
import { useAuthComposable } from "~/composables/auth-composable.js"

export default defineNuxtRouteMiddleware(async (to, from) => {
   const { authState, auth } = useAuthComposable()

   if (!authState.logged) {
      const { role, logged } = await auth();

      if (!logged || role !== 'admin') {
         return navigateTo('/')
      }
   }
})