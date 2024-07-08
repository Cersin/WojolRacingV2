<script setup lang="ts">
import HomePartners from "~/components/home/HomePartners.vue"
import MobileHeader from "~/components/home/MobileHeader.vue"
import DesktopHeader from "~/components/home/DesktopHeader.vue"
import HomeDescription from "~/components/home/HomeDescription.vue"
import HomeButtons from "~/components/home/HomeButtons.vue"
</script>

<template>
   <div class="flex flex-col justify-between bg-primary">
      <MobileHeader class="lg:hidden" />

      <div class="flex lg:hidden gap-8 p-8 items-center justify-between">
         <HomeDescription />
         <HomeButtons />
      </div>

      <div class="flex flex-1 items-center">
         <DesktopHeader class="p-16 hidden lg:block" />
      </div>

      <HomePartners />
   </div>
</template>

<style scoped></style>
