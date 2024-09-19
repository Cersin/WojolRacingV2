<script setup>
import { toRefs } from "vue"
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
   `${config.public.api_url}api/race/playerStatistics`,
   {
      server: false,
      query: {
         split: split,
         season: season,
      },
   },
)

const columns = [
   {
      key: "position",
      label: "POS",
   },
   {
      key: "player.name",
      label: "Driver",
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
      key: "firstPlaces",
      label: "Wins",
   },
   {
      key: "podiums",
      label: "Podiums",
   },
   {
      key: "top10",
      label: "Top 10",
   },
   {
      key: "avgPosition",
      label: "Avg Pos",
   },
   {
      key: "top1Grid",
      label: "Top 1 Grid",
   },
   {
      key: "top3Grid",
      label: "Top 3 Grid",
   },
   {
      key: "top10Grid",
      label: "Top 10 Grid",
   },
   {
      key: "avgStartGrid",
      label: "Avg Grid",
   },
   {
      key: "fastestLaps",
      label: "FL",
   },
   {
      key: "races",
      label: "Races",
   },
   {
      key: "gain",
      label: "Race Gain",
   },
   {
      key: "avgPits",
      label: "Avg Pits",
   },
   {
      key: "percentageFinished",
      label: "Finished",
   },
   {
      key: "DNFs",
      label: "DNFs",
   },
   {
      key: "points",
      label: "PTS",
   },
]
</script>

<template>
   <UTable
      :columns="columns"
      :loading="status === 'pending' || status === 'idle'"
      :rows="data?.data"
      :ui="baseTableUI"
   >
      <template #position-data="{ index }"> {{ index + 1 }}</template>

      <template #logo-data="e">
         <img
            v-if="!!teams[e.row.team]"
            :src="teams[e.row.team].img"
            alt="Team image"
            class="w-8 h-8"
         />
         <img v-else :src="teams.Rezerwa.img" alt="Alt Image" class="w-8 h-8" />
      </template>

      <template #percentageFinished-data="{ row }">
         {{ (row?.percentageFinished * 100).toFixed(0) }}%
      </template>
   </UTable>
</template>

<style scoped></style>
