<script setup>
import HomePartners from "~/components/home/HomePartners.vue"
import MobileHeader from "~/components/home/MobileHeader.vue"
import DesktopHeader from "~/components/home/DesktopHeader.vue"
import HomeDescription from "~/components/home/HomeDescription.vue"
import HomeButtons from "~/components/home/HomeButtons.vue"
import { computed } from "vue"
import DottedCircle from "~/components/layout/DottedCircle.vue"

const config = useRuntimeConfig()
const { data } = await useFetch(`${config.public.api_url}api/race/playerCard`)

const getFirstPlayer = computed(() => {
   return data.value?.data[0]
})
</script>

<template>
   <div class="relative flex flex-col justify-between bg-primary overflow-auto">
      <MobileHeader class="lg:hidden z-50" />

      <div class="flex flex-col lg:flex-row flex-1 items-start lg:items-center">
         <div
            class="flex lg:hidden gap-8 p-8 items-center justify-between content-stretch"
         >
            <HomeDescription />
            <HomeButtons />
         </div>

         <div class="flex-1 items-center hidden lg:flex">
            <DesktopHeader class="p-16" />
         </div>

         <HomeCards :best-card="getFirstPlayer" class="max-w-[800px]" />
      </div>

      <HomePartners class="z-50" />

      <DottedCircle
         class="hidden lg:block"
         right="5%"
         top="5%"
         size="150px"
         color="rgba(141, 141, 141, 0.25)"
      />

      <DottedCircle
         class="hidden lg:block"
         right="25%"
         bottom="5%"
         size="150px"
         color="rgba(141, 141, 141, 0.25)"
      />
   </div>
</template>

<style scoped></style>
