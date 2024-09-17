import { reactive } from "vue"
import { navigateTo, useRuntimeConfig } from "nuxt/app"
import { useLoginForm } from "~/hooks/useNotif.js"

const authState = reactive({
   logged: false,
   role: "",
})

export const useAuthComposable = () => {
   const config = useRuntimeConfig();
   const { errorNotification, successNotification } = useLoginForm()
   const headers = useRequestHeaders(["cookie"])

   const login = async ({username, password}) => {
      try {
         const res = await $fetch(`api/users/login`, {
            method: "POST",
            credentials: "include",
            baseURL: config.public.api_url,
            headers: {
               "Content-Type": "application/json",
            },
            body: {
               name: username,
               password: password,
            },
         })

         const { message, status, role } = res

         authState.logged = true
         authState.role = role

         successNotification()

         navigateTo("/")
      } catch (e) {
        console.error(e)

         errorNotification(e?.data?.message)
      }
   }

   const auth = async () => {
      try {
         const data = await $fetch(`api/users/verify`, {
            credentials: "include",
            baseURL: config.public.api_url,

            headers,
         })

         authState.logged = !!data?.logged
         authState.role = data?.role
         return {
            logged: data?.logged,
            role: data?.role,
         }
      } catch (e) {
         return false;
      }
   }

   return {
      authState,
      login,
      auth
   }
}