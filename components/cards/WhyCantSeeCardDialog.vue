<script setup lang="ts"></script>

<template>
   <UModal class="chakra-petch">
      <UCard
         :ui="{
            ring: '',
            divide: 'divide-y divide-gray-100 dark:divide-gray-800',
         }"
      >
         <template #header>
            <div class="text-xl">Dlaczego nie widzę swojej karty?</div>
         </template>

         <div class="text-base mb-2">
            Karta kierowcy zostaje wygenerowana dopiero po przejechaniu 5
            wyścigów. Dodatkowo musisz być aktywnym kierowcą podstawy lub
            rezerwy.
         </div>

         <div class="text-base">Twoja karta nie posiada zdjęcia?</div>
         <div class="text-base">
            Zrób zdjęcie i dostarcz je administracji na discordzie! Zostanie ono
            dodane do Twojego profilu kierowcy w systemie!
         </div>
      </UCard>
   </UModal>
</template>

<style scoped></style>
