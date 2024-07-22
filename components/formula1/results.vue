<script setup>
import { computed, toRefs } from "vue"
import teams from "~/data/teams.js"
import baseTableUI from "~/styles/baseTableUI.js"

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

const { status } = useLazyFetch(`${config.public.api_url}api/race`, {
   server: false,
   query: {
      split: split,
      season: season,
   },
   onResponse: (e) => {
      if (e.response.ok) {
         const data = e.response._data?.data
         tracks.value = data?.tracks
         selectedTrack.value = data?.tracks[0]
         races.value = data?.races
      }
   },
})

const tracks = ref([])
const races = ref([])
const selectedTrack = ref(null)

const results = computed(() => {
   if (selectedTrack.value && races.value.length > 0) {
      return races.value.find((race) => selectedTrack.value === race.track)
   }
   return null
})

const columns = [
   {
      key: "position",
      label: "POS",
   },
   {
      key: "logo",
      label: "Logo",
   },
   {
      key: "team",
      label: "Team",
   },
   {
      key: "playerDetails.name",
      label: "Driver",
   },
   {
      key: "grid",
      label: "Grid",
   },
   {
      key: "pitStops",
      label: "Stops",
   },
   {
      key: "bestLap",
      label: "Best",
   },
   {
      key: "gap",
      label: "GAP",
   },
   {
      key: "points",
      label: "PTS",
   },
]
</script>

<template>
   <div class="flex flex-col">
      <USelect
         v-model="selectedTrack"
         class="self-center"
         :options="tracks"
         size="xl"
         :ui="{
            wrapper: 'relative',
            base: ' relative block w-full disabled:cursor-not-allowed disabled:opacity-75  border-0',
            color: {
               white: {
                  outline:
                     ' bg-transparent dark:bg-transparent  dark:text-primary uppercase ring-0 focus:ring-0 text-lg ',
               },
            },
            variant: {
               outline:
                  'shadow-sm bg-transparent text-gray-900 dark:text-white  ring-0 focus:ring-0',
            },
            icon: {
               base: 'flex-shrink-0  text-primary dark:text-primary',
            },
            padding: {
               '2xs': 'px-2 py-1',
               xs: 'px-2.5 py-1.5',
               sm: 'px-2.5 py-1.5',
               md: 'px-3 py-2',
               lg: 'px-3.5 py-2.5',
               xl: '',
            },
         }"
      />

      <UTable
         :columns="columns"
         :rows="results?.results"
         :loading="status === 'pending' || status === 'idle'"
         :ui="baseTableUI"
      >
         <template #logo-data="e">
            <img
               v-if="!!teams[e.row.team]"
               class="w-8 h-8"
               :src="teams[e.row.team].img"
               alt="Team image"
            />
            <img
               v-else
               class="w-8 h-8"
               :src="teams.Rezerwa.img"
               alt="Alt Image"
            />

            <!--            {{ e.row.team }}-->
         </template>
      </UTable>
   </div>
</template>

<style scoped></style>
