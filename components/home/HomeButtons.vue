<script lang="ts" setup>
import BaseButton from "~/components/buttons/BaseButton.vue"
</script>

<template>
   <div class="flex  gap-4 mt-4">
      <BaseButton type="black" @click="$router.push('/contact')"
         >Kontakt
      </BaseButton>

      <BaseButton type="outline" @click="$router.push('/about')">
            O nas
            <Icon name="ic:baseline-arrow-forward" size="1em" />
      </BaseButton>
   </div>
</template>

<style scoped></style>
