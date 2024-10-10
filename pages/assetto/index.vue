<script lang="ts" setup>
import PartnersCarousel from "~/components/partners/PartnersCarousel.vue"
import BaseSocials from "~/components/layout/BaseSocials.vue"
import EventSelect from "~/components/assetto/EventSelect.vue"
import Results from "~/components/assetto/Results.vue"

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
      label: "Statystyki",
   },
   {
      label: "Informacje AC",
   },
]

const event = ref(null)

const selectedValue = ref(0)

const selected = computed({
   get() {
      return selectedValue.value
   },
   set(newValue) {
      if (newValue === 5) {
         redirectToRegulations()
      }
   },
})

function redirectToRegulations() {
   window.open(
      "https://docs.google.com/document/d/1EOiXieRk4-xqEArTcrFm4Of0NYT7CYe6y4LATEvvXlM/edit?usp=sharing",
      "_blank",
   )
}
</script>

<template>
   <div class="bg-black p-8 overflow-scroll">
      <div class="grid sm:grid-cols-5 mb-4 gap-y-4 gap-x-2">
         <div class="text-3xl text-nowrap col-span-1">Assetto Corsa</div>

         <div
            class="col-span-4 md:col-span-4 lg:col-span-1 justify-start sm:justify-end flex gap-4"
         >
            <EventSelect v-model:event="event" />
         </div>

         <UCard
            :ui="{
               base: '',
               background: 'dark:bg-black',
               ring: 'dark:ring-gray-600',
            }"
            class="hidden lg:block col-span-3 row-span-2"
         >
            <PartnersCarousel :items-to-show="3" />
         </UCard>

         <div
            class="hidden lg:flex col-span-2 row-span-2 col-start-1 justify-center border-gray-600 border-2 rounded-xl"
         >
            <AssettoTopPlayersFetch v-if="event" :event="event" />
         </div>

         <!--         <div-->
         <!--            class="hidden lg:block col-span-1 row-span-2 col-start-2 border-gray-600 border-2 rounded-xl"-->
         <!--         >-->
         <!--            <AssettoTopConstructorsFetch v-if="event" :event="event"/>-->

         <!--         </div>-->

         <UCard
            :ui="{
               base: '',
               background: 'dark:bg-black',
               ring: 'dark:ring-gray-600',
            }"
            class="hidden lg:block col-span-3 row-start-3 col-start-3"
         >
            <BaseSocials class="flex justify-evenly" icon-size="2rem" />
         </UCard>
      </div>

      <UTabs
         v-model="selected"
         :items="tabs"
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
         orientation="vertical"
      >
         <template #item="{ index, selected }">
            <UCard
               :ui="{
                  base: '',
                  background: 'dark:bg-black',
                  ring: 'dark:ring-gray-600',
               }"
            >
               <div v-if="index === 0 && selected">
                  <Results v-if="event" :event="event" />
               </div>

               <div v-if="index === 1 && selected">
                  <AssettoAggregateResultsTable v-if="event" :event="event" />
               </div>

               <div v-if="index === 2 && selected">
                  <AssettoClassificationTable v-if="event" :event="event" />
               </div>

               <div v-if="index === 3 && selected">
                  <AssettoStatisticsTable v-if="event" :event="event" />
               </div>

               <div v-if="index === 4 && selected">
                  <div class="p-4">
                     <p>
                        Na platformie Assetto Corsa organizujemy rozgrywki wszelkiej maści:<br />
                     </p>

                     <ul class="list-disc">
                        <li>Pełne sezony ligowe</li>
                        <li>Eventy TimeAttack</li>
                        <li>Eventy wyścigowe</li>
                        <li>Wyścigi Endurance</li>
                     </ul>
                     <br />
                     <p>Aktualne rozgrywki znajdziesz na naszym discordzie!</p>
                  </div>
               </div>
            </UCard>
         </template>
      </UTabs>
   </div>
</template>

<style scoped></style>
