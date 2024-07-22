<script setup>
import { toRefs } from "vue"
import teams from "~/data/teams.js"

const config = useRuntimeConfig()

const props = defineProps({
   season: {
      type: [Number, String, null],
      default: null,
   },
   split: {
      type: [Number, String, null],
      default: null,
   },
})

const { season, split } = toRefs(props)

const { data, status } = await useLazyFetch(
   `${config.public.api_url}api/race/constructorPoints`,
   {
      server: false,
      query: {
         split: split,
         season: season,
      },
   },
)
</script>

<template>
   <div class="h-full w-full flex">
      <UProgress
         v-if="status === 'pending' || status === 'idle'"
         class="p-4 min-h-12 self-center"
         animation="carousel"
      />

      <div
         v-else-if="status === 'success'"
         class="flex flex-col justify-evenly flex-grow"
      >
         <div v-if="!data?.data?.length">Brak danych</div>
         <template
            v-for="(_, index) in data.data.length > 3 ? 3 : data.data.length"
            :key="index"
         >
            <div class="flex items-center justify-around">
               <div class="w-2/4">
                  {{ data.data[index]._id }}
               </div>
               <img
                  v-if="!!teams[data.data[index]._id]"
                  class="w-8 h-8"
                  :src="teams[data.data[index]._id].img"
                  alt="Team image"
               />
               <img
                  v-else
                  class="w-8 h-8"
                  :src="teams.Rezerwa.img"
                  alt="Alt Image"
               />

               <div>
                  {{ data.data[index].points }}
               </div>
            </div>
         </template>
      </div>
   </div>
</template>

<style scoped></style>
