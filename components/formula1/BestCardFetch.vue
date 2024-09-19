<script setup>
import { computed } from "vue"
import PlayerCard from "~/components/player_cards/PlayerCard.vue"

const config = useRuntimeConfig()

const { data, status } = await useLazyFetch(
   `${config.public.api_url}api/race/playerCard`,
   {
      server: false,
   },
)

const getFirstPlayer = computed(() => {
   const random = Math.floor(Math.random() * data.value.data.length)
   return data.value?.data[random]
})
</script>

<template>
   <div class="w-full flex items-center h-full">
      <UProgress
         v-if="status === 'pending' || status === 'idle'"
         animation="carousel"
         class="p-4 min-h-12"
      />

      <PlayerCard
         v-else-if="status === 'success'"
         :card="getFirstPlayer"
         class="rounded-xl overflow-hidden"
         with-redirection
      />
   </div>
</template>

<style scoped></style>
