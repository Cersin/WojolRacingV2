<script setup>
import { computed, toRefs } from "vue"
import baseTableUI from "~/styles/baseTableUI.js"

const config = useRuntimeConfig()

const props = defineProps({
   event: {
      type: String,
      default: null,
   },
})

const { event } = toRefs(props)

const { status } = useLazyFetch(`${config.public.api_url}api/assetto-race`, {
   server: false,
   query: {
      season: event,
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

const columns = computed(() => {
   if(results?.value?.endurance) {
      return [
         {
            key: "position",
            label: "POS",
         },
         {
            key: "playerDetails.name",
            label: "Team",
         },
         {
            key: "grid",
            label: "Grid",
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
            key: "dnf",
            label: "DNF",
         },
         {
            key: "points",
            label: "PTS",
         },
      ]
   }
   return [
      {
         key: "position",
         label: "POS",
      },
      {
         key: "playerDetails.name",
         label: "Driver",
      },
      {
         key: "playerDetails.team",
         label: "Team",
      },
      {
         key: "grid",
         label: "Grid",
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
         key: "dnf",
         label: "DNF",
      },
      {
         key: "points",
         label: "PTS",
      },
   ]
})
</script>

<template>
   <div class="flex flex-col">
      <USelect
         v-model="selectedTrack"
         :options="tracks"
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
         class="self-center"
         size="xl"
      />

      <UTable
         :columns="columns"
         :loading="status === 'pending' || status === 'idle'"
         :rows="results?.results"
         :ui="baseTableUI"
      >
         <template #dnf-data="{ row }">
            <Icon
               v-if="row.dnf"
               name="material-symbols:check-rounded"
               size="24"
               style="color: green"
            />

            <Icon
               v-else
               name="material-symbols:close"
               size="24"
               style="color: red"
            />
         </template>
      </UTable>
   </div>
</template>

<style scoped></style>
