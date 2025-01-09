<script lang="ts" setup>
import { useAuthComposable } from "~/composables/auth-composable"

const { authState } = useAuthComposable()

const f1Links = [
   [
      {
         label: "Zawodnicy",
         click: () => (isOpen.value = false),
         to: "/admin/formula1/players",
      },
      {
         label: "Wyścigi",
         click: () => (isOpen.value = false),
         to: "/admin/formula1/races",
      },
      {
         label: "Artykuły",
         click: () => (isOpen.value = false),
         to: "/admin/articles",
      },
   ],
]

const acLinks = [
   [
      {
         label: "Zawodnicy",
         click: () => (isOpen.value = false),
         to: "/admin/assetto/players",
      },
      {
         label: "Wyścigi",
         click: () => (isOpen.value = false),
         to: "/admin/assetto/races",
      },
   ],
]

const isOpen = ref(false)
</script>

<template>
   <UButton label="Nawigacja" @click="isOpen = true" />

   <USlideover v-model="isOpen" side="left">
      <div class="p-4 flex-1">
         <div v-if="authState.role === 'admin'" class="text-2xl mb-4">Formula 1</div>
         <UVerticalNavigation v-if="authState.role === 'admin'" :links="f1Links" />
         <div v-if="authState.role === 'admin-assetto'" class="text-2xl mb-4">Assetto Corsa</div>
         <UVerticalNavigation v-if="authState.role === 'admin-assetto'" :links="acLinks" />
      </div>
   </USlideover>
</template>

<style scoped></style>