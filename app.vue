<template>
   <div class="flex flex-col h-full">
      <NavigationLayout />
      <NuxtPage class="flex-grow" />

      <UNotifications />
      <UModals />
   </div>
</template>

<script setup>
import NavigationLayout from "~/components/NavigationLayout.vue"
import { useAuthComposable } from "~/composable/auth-composable.js"
import { useFetch } from "#app"
const headers = useRequestHeaders(['cookie'])

const config = useRuntimeConfig()

const {authState} = useAuthComposable();

const { data } = await useFetch(`${config.public.api_url}api/users/verify`, {
   headers
})

// const {data} = await useFetch(`${config.public.api_url}api/users/verify`, {
//    baseURL: config.API_BASE_URL,
// });
// authState.logged = data.value?.logged;
// authState.role = data.value?.role;
</script>

<style>
.page-enter-active,
.page-leave-active {
   transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
   opacity: 0;
   filter: blur(1rem);
}


.box {
   display: flex;
   flex-flow: column;
   height: 100%;
}

.box .row {
   border: 1px dotted grey;
}

.box .row.header {
   flex: 0 1 auto;
   /* The above is shorthand for:
   flex-grow: 0,
   flex-shrink: 1,
   flex-basis: auto
   */
}

.box .row.content {
   flex: 1 1 auto;
}

.box .row.footer {
   flex: 0 1 40px;
}
</style>
