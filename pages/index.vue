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
   <div class="relative flex flex-col justify-between bg-primary overflow-auto items-center">
      <div class="flex flex-row flex-1  items-center justify-center">
         <div class="flex-1   lg:flex lex-col items-center justify-center">
            <DesktopHeader class="px-16" />
            <div class="w-full">
               <EnduRaceHeader v-if="new Date() < new Date('2026-04-13T00:00:00')"  class="px-12" route-push="/daytona_24h" header-src="daytona/daytona_hyper.jpg"  tour-name="DAYTONA 24H" :start-date="new Date('2026-04-11T13:00:00')" />
               <EnduRaceHeader v-if="new Date() < new Date('2026-03-02T00:00:00')" class="px-12" route-push="/daytona_lmp2" header-src="daytona/daytona_lmp2.jpg"   tour-name="Daytona LMP2" :start-date="new Date('2026-03-01T14:00:00')"  />
            </div>
         </div>

      </div>
      <HomePartners class="z-50" />

      <DottedCircle
         class=" lg:block"
         color="rgba(141, 141, 141, 0.25)"
         right="5%"
         size="150px"
         top="5%"
      />

      <DottedCircle
         bottom="5%"
         class="lg:block"
         color="rgba(141, 141, 141, 0.25)"
         right="25%"
         size="150px"
      />
   </div>
</template>

<style scoped></style>
