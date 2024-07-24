<script setup>
import PlayerCard from "~/components/player_cards/PlayerCard.vue"

const config = useRuntimeConfig()
const { data } = await useFetch(`${config.public.api_url}api/race/playerCard`)
</script>

<template>
   <div
      class="bg-primary flex gap-8 lg:gap-12 flex-wrap p-8 justify-center items-center"
   >
      <template v-for="card in data?.data" :key="card.id">
         <div class="">
            <PlayerCard
               :card="card"
               class="rounded-2xl overflow-hidden"
               style="width: 250px; height: 170px"
            />
         </div>
      </template>
   </div>
</template>

<style scoped></style>
