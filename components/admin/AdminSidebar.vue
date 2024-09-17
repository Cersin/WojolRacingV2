<script setup lang="ts">
const f1Links = [
   [
      {
      label: 'Zawodnicy',
      click: () => isOpen.value = false,
      to: '/admin/formula1/players'
   },
      {
         label: 'Artykuły',
         click: () => isOpen.value = false,
         to: '/admin/articles'
      },
   ]
]

const isOpen = ref(false)

</script>

<template>
   <UButton label="Nawigacja" @click="isOpen = true" />

   <USlideover v-model="isOpen" side="left">
      <div class="p-4 flex-1">
         <div class="text-2xl mb-4">Formula 1</div>
         <UVerticalNavigation :links="f1Links" />
      </div>
   </USlideover>
</template>

<style scoped>

</style>