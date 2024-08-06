<script setup>
import PlayerCard from "~/components/player_cards/PlayerCard.vue"
import BaseButton from "~/components/buttons/BaseButton.vue"
import HowWeCalculateDialog from "~/components/cards/HowWeCalculateDialog.vue"
import WhyCantSeeCardDialog from "~/components/cards/WhyCantSeeCardDialog.vue"

definePageMeta({
   name: "Karty kierowców",
})

const config = useRuntimeConfig()
const modal = useModal()

const { data } = await useFetch(`${config.public.api_url}api/race/playerCard`)

const searchModel = ref("")

const computedData = computed(() => {
   return data.value?.data?.filter((el) =>
      el.player.name.toLowerCase().includes(searchModel.value.toLowerCase()),
   )
})

function openHowWeCalculateModal() {
   modal.open(HowWeCalculateDialog)
}

function openWhyCantSeeCardModal() {
   modal.open(WhyCantSeeCardDialog)
}
</script>

<template>
   <div class="p-8 bg-primary flex flex-col gap-8">
      <div class="flex items-start gap-4">
         <BaseButton type="black" @click="openHowWeCalculateModal"
            >Jak obliczamy Twój rating?</BaseButton
         >
         <BaseButton type="black" @click="openWhyCantSeeCardModal"
            >Dlaczego nie widzę swojej karty?</BaseButton
         >
      </div>
      <UInput v-model="searchModel" placeholder="Szukaj karty" />

      <div class="flex gap-8 lg:gap-12 flex-wrap justify-center items-start">
         <template v-for="card in computedData" :key="card.id">
            <PlayerCard
               :card="card"
               class="rounded-2xl overflow-hidden"
               style="width: 250px; height: 170px"
            />
         </template>
      </div>
   </div>
</template>

<style scoped></style>
