<script setup>
import HomePartners from "~/components/home/HomePartners.vue"
import MobileHeader from "~/components/home/MobileHeader.vue"
import DesktopHeader from "~/components/home/DesktopHeader.vue"
import HomeDescription from "~/components/home/HomeDescription.vue"
import HomeButtons from "~/components/home/HomeButtons.vue"
import { computed } from "vue"
import DottedCircle from "~/components/layout/DottedCircle.vue"
import EnduRaceHeader from "~/components/endurance/EnduRaceHeader.vue"

const config = useRuntimeConfig()
const { data } = await useFetch(`${config.public.api_url}api/race/playerCard`, {
   server: false,
})

const getRandomPlayer = computed(() => {
   if(data?.value?.data?.length) {
      const random = Math.floor(Math.random() * data.value.data.length)
      return data.value?.data[random]
   }
return null
})
</script>

<template>
   <div class="relative flex flex-col justify-between bg-primary overflow-auto">
      <MobileHeader class="lg:hidden z-50" />

       <EnduRaceHeader class="lg:hidden" tour-name="Sebring" :start-date="new Date('May 17, 2025 11:30:00')" />
      <div class="flex flex-col lg:flex-row flex-1 items-start lg:items-center">
         <div
            class="flex lg:hidden gap-8 p-8 items-center justify-between content-stretch"
         >
            <HomeDescription />
            <HomeButtons />

         </div>

         <div class="flex-1 items-center hidden lg:flex lg:flex-col lg:items-start lg:justify-center">
            <DesktopHeader class="px-16" />
            <div class="w-full">
               <EnduRaceHeader class="px-12" tour-name="Sebring" :start-date="new Date('May 17, 2025 11:30:00')" />
            </div>
         </div>

         <HomeCards  :best-card="getRandomPlayer" class="max-w-[800px] z-40" />
      </div>
      <HomePartners class="z-50" />

      <DottedCircle
         class="hidden lg:block"
         color="rgba(141, 141, 141, 0.25)"
         right="5%"
         size="150px"
         top="5%"
      />

      <DottedCircle
         bottom="5%"
         class="hidden lg:block"
         color="rgba(141, 141, 141, 0.25)"
         right="25%"
         size="150px"
      />
   </div>
</template>

<style scoped></style>
