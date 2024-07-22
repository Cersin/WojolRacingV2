<script setup lang="ts">
import { computed } from "vue"

const config = useRuntimeConfig()

const props = defineProps({
   card: {
      type: Object,
      required: true,
   },
   withRedirection: {
      type: Boolean,
      default: false,
   },
})

const calculateOverall = computed(() => {
   const card = props.card
   return (
      (+card?.awareness + +card?.experience + +card?.racePace + +card?.pace) /
      4
   ).toFixed(0)
})
</script>

<template>
   <div
      class="bg-black w-full h-full text-white flex justify-between text-base"
   >
      <div class="p-4 flex flex-col flex-1">
         <div class="flex gap-4 uppercase">
            <span class="text-primary text-2xl">{{ calculateOverall }}</span>
            {{ card.player.name }}
         </div>

         <div class="flex h-full items-start gap-8">
            <div
               class="flex flex-col flex-wrap gap-x-4"
               style="font-size: 0.8em"
            >
               <div v-if="card?.experience" class="font-thin flex gap-2">
                  <div class="font-thin w-8">EXP</div>
                  <div class="font-normal">{{ card.experience }}</div>
               </div>
               <div v-if="card?.racePace" class="font-thin flex gap-2">
                  <div class="font-thin w-8">RAC</div>
                  <div class="font-normal">{{ card.racePace }}</div>
               </div>
               <div v-if="card?.awareness" class="font-thin flex gap-2">
                  <div class="font-thin w-8">AWA</div>
                  <div class="font-normal">{{ card.awareness }}</div>
               </div>
               <div v-if="card?.pace" class="font-thin flex gap-2">
                  <div class="font-thin w-8">PAC</div>
                  <div class="font-normal">{{ card.pace }}</div>
               </div>
            </div>

            <div class="flex h-max justify-start max-w-20">
               <img
                  v-if="card?.player?.photo"
                  :src="`${config.public.api_url}players/${card.player.photo}`"
                  alt="PlayerImage"
                  class="object-cover"
               />
            </div>
         </div>
      </div>

      <div
         v-if="withRedirection"
         class="bg-secondary p-4 text-nowrap rounded-r-xl flex items-center cursor-pointer hover:brightness-125"
         style="font-size: 0.8rem"
      >
         <span style="writing-mode: vertical-lr" class="rotate-180"
            >Karty kierowców</span
         >
      </div>
   </div>
</template>

<style scoped></style>
