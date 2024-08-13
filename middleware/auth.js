import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app"
import { useAuthComposable } from "~/composables/auth-composable.js"

const { authState, auth } = useAuthComposable()

export default defineNuxtRouteMiddleware(async (to, from) => {
   if (!authState.logged) {
      const { role, logged } = await auth();

      if (!logged || role !== 'admin') {
         return navigateTo('/')
      }
   }
})