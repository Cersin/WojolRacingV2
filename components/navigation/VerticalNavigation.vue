<script setup>
const links = [
   {
      label: "Strona Główna",
      to: "/",
      additional: true,
      click: () => {
         emit('close')
      },
   },
   {
      label: "Formula 1",
      to: "/formula",
      additional: false,
      click: () => {
         emit('close')
      },
   },
   {
      label: "Karty kierowców F1",
      to: "/formula/cards",
      additional: true,
      click: () => {
         emit('close')
      },
   },
   {
      label: "Assetto Corsa",
      to: "/assetto",
      additional: false,
      click: () => {
         emit('close')
      },
   },
   {
      label: "Aplikacja",
      to: "/application",
      additional: false,
      click: () => {
         emit('close')
      },
   },
   {
      label: "Serwery",
      to: "/servers",
      additional: false,
      click: () => {
         emit('close')
      },
   },
   {
      label: "Aktualności",
      to: "/news",
      additional: true,
      click: () => {
         emit('close')
      },
   },
   {
      label: "Endurance",
      to: "/endurance",
      additional: true,
      click: () => {
         emit('close')
      },
   },
   {
      label: "Kontakt",
      to: "/contact",
      additional: true,
      click: () => {
         emit('close')
      },
   },
   {
      label: "O nas",
      to: "/about",
      additional: true,
      click: () => {
         emit('close')
      },
   },
]

const props = defineProps({
   additional: {
      type: Boolean,
      default: false,
   }
})

const emit = defineEmits(['close'])

const computedLinks = computed(() => {
   if(props.additional) return links.filter((link) => link.additional)
   return links
})
</script>

<template>
   <UVerticalNavigation :links="computedLinks">
      <template #default="{ link }">
                        <span class="hover:text-primary relative">{{
                              link.label
                           }}</span>
      </template>
   </UVerticalNavigation>
</template>

<style scoped>

</style>