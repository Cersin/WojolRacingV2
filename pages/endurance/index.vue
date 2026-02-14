<script setup>
import BaseSocials from "~/components/layout/BaseSocials.vue"
import ParticipationRow from "~/components/endurance/ParticipationRow.vue"
import sol_nord from "~/assets/endurance/sol_nord.jpg"
import pe_s4 from "~/assets/endurance/pe_s4.png"
import pe_lemans from "~/assets/endurance/pe_lemans.jpg"
import pe_s3 from "~/assets/endurance/pe_s3.jpg"
import pe_s2 from "~/assets/endurance/pe_s2.jpg"
import bathurst from "~/assets/endurance/bathurst.jpg"
import pe_s1 from "~/assets/endurance/pe_s1.jpg"

definePageMeta({
   name: "endurance",
})

const participations = [
   {
      drivers: [
         "Krzysztof Wójcik",
         "Szymon Wójcik",
         "Grzegorz Marszałek",
         "Kacper Szafrański",
      ],
      car: "Klasa GT4",
      description: "24 godzinny wyścig na torze Nordschleife",
      resultDescription: "2 miejsce",
      image: sol_nord,
   },
   {
      drivers: [
         "Krzysztof Wójcik",
         "Szymon Wójcik",
         "Szymon Praczyk",
         "Kacper Mariański",
      ],
      car: "Hypercar",
      description: "Project Endurance Sezon 4",
      resultDescription: "Wicemistrzowie",
      image: pe_s4,
   },
   {
      drivers: [
         "Krzysztof Wójcik",
         "Szymon Wójcik",
         "Szymon Praczyk",
         "Kacper Mariański",
         "Patryk Krutyj",
      ],
      car: "Klasa GT3",
      description: "LeMans ProjectEndurance",
      resultDescription: "1 miejsce",
      image: pe_lemans,
   },
   {
      drivers: ["Krzysztof Wójcik", "Szymon Wójcik", "Szymon Praczyk"],
      car: "Hypercar",
      description: "Project Endurance Sezon 3",
      resultDescription: "Mistrzowie",
      image: pe_s3,
   },
   {
      drivers: ["Krzysztof Wójcik", "Szymon Wójcik", "Szymon Praczyk"],
      car: "Hypercar",
      description: "Project Endurance Sezon 2",
      resultDescription: "Mistrzowie",
      image: pe_s2,
   },
   {
      drivers: [
         "Szymon Praczyk",
         "Mateusz Stalmirski",
         "Robert Radaj",
         "Mateusz Pietruczuk",
      ],
      car: "Klasa GT3",
      description: "6 Hours of Bathurst PE",
      resultDescription: "2 miejsce",
      image: bathurst,
   },
   {
      drivers: [
         "Krzysztof Wójcik",
         "Szymon Wójcik",
         "Szymon Praczyk",
         "Kacper Szafrański",
      ],
      car: "Klasa GT3",
      description: "Project Endurance Sezon 1",
      resultDescription: "Wicemistrzowie",
      image: pe_s1,
   },
]
</script>

<template>
   <div class="bg-black p-8">
      <div class="text-3xl uppercase chakra-petch mb-4">Endurance</div>

      <div
         class="flex flex-col gap-4 md:flex-row justify-between items-start md:items-center mb-8"
      >
         <div class="font-light opacity-50 max-w-80">
            Udziały Wojol Racing w wyścigach długodystansowych
         </div>

         <BaseSocials class="gap-8 flex" icon-size="2rem" />
      </div>

      <div class="flex flex-col gap-8">
         <ParticipationRow
            v-for="(participation, index) in participations"
            :key="index"
            :car="participation.car"
            :description="participation.description"
            :drivers="participation.drivers"
            :even="!!(index %= 2)"
            :image="participation.image"
            :result-description="participation.resultDescription"
         />
      </div>
   </div>
</template>

<style scoped></style>
