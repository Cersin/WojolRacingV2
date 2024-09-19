<script setup>
import { toRefs } from "vue"

const config = useRuntimeConfig()

const props = defineProps({
   event: {
      type: String,
      default: null,
   },
})

const { event } = toRefs(props)

const { data, status } = await useLazyFetch(
   `${config.public.api_url}api/assetto-race/playerPoints`,
   {
      server: false,
      query: {
         season: event,
      },
   },
)
</script>

<template>
   <div class="h-full w-full flex">
      <UProgress
         v-if="status === 'pending' || status === 'idle'"
         animation="carousel"
         class="p-4 min-h-12 self-center"
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
            <div class="flex items-center justify-between mx-8">
               <div>
                  {{ data.data[index].player.name }}
               </div>

               <div>
                  {{ data.data[index].points }}
               </div>
            </div>
         </template>
      </div>
   </div>
</template>

<style scoped></style>
