<script setup lang="ts">
import BaseButton from "~/components/buttons/BaseButton.vue"
</script>

<template>
   <div class="flex flex-col lg:flex-row gap-4 mt-4">
      <BaseButton type="black" @click="$router.push('/contact')"
         >Kontakt</BaseButton
      >

      <BaseButton type="outline" @click="$router.push('/about')"
      >
         <div class="flex items-center gap-1 text-nowrap">
            O nas <Icon name="ic:baseline-arrow-forward" size="1em" />
         </div>
      </BaseButton>
   </div>
</template>

<style scoped></style>
