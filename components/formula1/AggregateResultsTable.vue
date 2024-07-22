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

const { data, status } = useLazyFetch(
   `${config.public.api_url}api/race/detailsPoints`,
   {
      server: false,
      query: {
         split: split,
         season: season,
      },
      onResponse: (e) => {
         if (e.response.ok) {
            const responseData = e.response._data?.data
            const races = responseData
               .map((e) => e.races)
               .flat()
               .map((e) => e.track)
            tracks.value = races.filter(
               (item, pos) => races.indexOf(item) === pos,
            )
         }
      },
   },
)

const tracks = ref([])

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
      key: "player.name",
      label: "Driver",
   },
]

const computedColumns = computed(() => {
   return [
      ...columns,
      ...tracks.value.map((el) => {
         return {
            key: el,
            label: el,
         }
      }),
      {
         key: "points",
         label: "PTS",
      },
   ]
})

const templateKeys = computed(() => {
   return tracks.value.map((el) => `${el}-data`)
})
</script>

<template>
   <UTable
      :columns="computedColumns"
      :rows="data?.data"
      :loading="status === 'pending' || status === 'idle'"
      :ui="baseTableUI"
   >
      <template #position-data="{ index }"> {{ index + 1 }}</template>

      <template #logo-data="e">
         <img
            v-if="!!teams[e.row.team]"
            class="w-8 h-8"
            :src="teams[e.row.team].img"
            alt="Team image"
         />
         <img v-else class="w-8 h-8" :src="teams.Rezerwa.img" alt="Alt Image" />
      </template>

      <template
         v-for="(track, index) in templateKeys"
         :key="index"
         #[track]="e"
      >
         <span>
            {{
               e.row.races?.find((el) => e.column.key === el.track)?.points ||
               "DNS"
            }}
         </span>
      </template>
   </UTable>
</template>

<style scoped></style>
