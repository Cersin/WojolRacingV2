<script setup>
import HomeCard from "~/components/layout/HomeCard.vue"
import f1_wrl from "~/assets/photos/f1_wrl.jpeg"
import ac_wrl_1 from "~/assets/photos/ac_wrl_1.jpeg"
import ac_wrl_2 from "~/assets/photos/ac_wrl_2.jpeg"
import PlayerCard from "~/components/player_cards/PlayerCard.vue"

defineProps({
   bestCard: {
      type: Object,
      default: null,
   },
})
</script>

<template>
   <div class="grid grid-cols-8 w-full p-8 gap-8">
      <HomeCard
         class="h-48 lg:h-96 col-span-4 lg:col-span-5"
         shadow
         description="Formula 1"
         :img-src="f1_wrl"
      />

      <HomeCard
         class="h-48 lg:h-96 col-span-4 lg:col-span-3"
         description="Endurance"
         :img-src="ac_wrl_1"
      />

      <HomeCard
         class="h-56 lg:h-60 col-span-4 lg:col-span-5"
         description="Assetto Corsa"
         :img-src="ac_wrl_2"
      />

      <!--      <HomeCard class="h-48 lg:h-48 bg-green-300">-->
      <!--         <PlayerCard />-->
      <!--      </HomeCard>-->
      <div class="h-56 lg:h-60 flex flex-col gap-4 col-span-4 lg:col-span-3">
         <button
            type="button"
            class="bg-black bg-opacity-70 h-1/4 w-full p-4 rounded-2xl text-white font-light hover:bg-secondary"
         >
            <div class="justify-center text-center flex">
               Aktualności
               <Icon name="ic:baseline-arrow-forward" size="1.5em" />
            </div>
         </button>
         <PlayerCard
            v-if="bestCard"
            :card="bestCard"
            with-redirection
            class="h-3/4 overflow-hidden"
         />
      </div>
   </div>
</template>

<style scoped></style>
