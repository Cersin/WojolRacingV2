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
   return data.value?.data[0]
})
</script>

<template>
   <div class="w-full flex items-center h-full">
      <UProgress
         v-if="status === 'pending' || status === 'idle'"
         class="p-4 min-h-12"
         animation="carousel"
      />

      <PlayerCard
         v-else-if="status === 'success'"
         class="rounded-xl"
         :card="getFirstPlayer"
         with-redirection
      />
   </div>
</template>

<style scoped></style>
