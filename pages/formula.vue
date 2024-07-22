<script setup lang="ts">
import PartnersCarousel from "~/components/partners/PartnersCarousel.vue"
import BaseSocials from "~/components/layout/BaseSocials.vue"
import SeasonSelect from "~/components/formula1/SeasonSelect.vue"
import SplitSelect from "~/components/formula1/SplitSelect.vue"
import BestCardFetch from "~/components/formula1/BestCardFetch.vue"
import TopPlayersFetch from "~/components/formula1/TopPlayersFetch.vue"
import Results from "~/components/formula1/results.vue"
import TopConstructorsFetch from "~/components/formula1/TopConstructorsFetch.vue"

const tabs = [
   {
      label: "Wyniki",
   },
   {
      label: "Wyniki zbiorcze",
   },
   {
      label: "Klasyfikacja generalna",
   },
   {
      label: "Klasyfikacja zespołowa",
   },
   {
      label: "Statystyki",
   },
   {
      label: "Regulamin",
   },
   {
      label: "Informacje F1",
   },
]

const season = ref(null)
const split = ref(null)
</script>

<template>
   <div class="bg-black p-8 overflow-scroll">
      <div class="grid grid-cols-5 mb-4 gap-y-4 gap-x-2">
         <div class="text-3xl text-nowrap col-span-1">Formuła 1</div>
         <div
            class="col-span-4 md:col-span-4 lg:col-span-2 justify-end flex gap-4"
         >
            <SeasonSelect v-model:season="season" />
            <SplitSelect v-model:split="split" />
         </div>

         <UCard
            class="hidden lg:block col-span-2 row-span-2"
            :ui="{
               base: '',
               background: 'dark:bg-black',
               ring: 'dark:ring-gray-600',
            }"
         >
            <PartnersCarousel :items-to-show="3" />
         </UCard>

         <div
            class="hidden lg:flex col-span-1 row-span-2 col-start-1 justify-center border-gray-600 border-2 rounded-xl"
         >
            <TopPlayersFetch
               v-if="season && split"
               :split="split"
               :season="season"
            />
         </div>

         <div
            class="hidden lg:block col-span-1 row-span-2 col-start-2 border-gray-600 border-2 rounded-xl"
         >
            <TopConstructorsFetch
               v-if="season && split"
               :split="split"
               :season="season"
            />
         </div>

         <div
            class="hidden lg:block col-span-1 row-span-2 col-start-3 border-gray-600 border-2 rounded-xl"
         >
            <BestCardFetch />
         </div>

         <UCard
            class="hidden lg:block col-span-2 row-start-3 col-start-4"
            :ui="{
               base: '',
               background: 'dark:bg-black',
               ring: 'dark:ring-gray-600',
            }"
         >
            <BaseSocials class="flex justify-evenly" icon-size="2rem" />
         </UCard>
      </div>

      <UTabs
         :items="tabs"
         orientation="vertical"
         :ui="{
            list: {
               base: 'grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 w-full  gap-4 bg-green',
               background: '',
               marker: {
                  background: 'bg-white dark:bg-primary',
               },
               tab: {
                  base: 'border border-primary relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
                  background: '',
                  active: 'text-gray-900 dark:text-black',
                  inactive: 'text-gray-500 dark:text-primary',
                  padding: 'px-3 py-4 md:py-6',
                  size: 'text-sm',
                  font: 'font-medium',
                  rounded: 'rounded-md',
                  shadow: '',
               },
            },
         }"
      >
         <template #item="{ item }">
            <UCard
               :ui="{
                  base: '',
                  background: 'dark:bg-black',
                  ring: 'dark:ring-gray-600',
               }"
            >
               <div v-if="item.label === 'Wyniki'">
                  <Results
                     v-if="season && split"
                     :season="season"
                     :split="split"
                  />
               </div>

               <div v-if="item.label === 'Wyniki zbiorcze'">zbiorcze</div>
            </UCard>
         </template>
      </UTabs>
   </div>
</template>

<style scoped></style>
