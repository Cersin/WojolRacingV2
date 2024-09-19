<script setup>
import { toRefs } from "vue"
import baseTableUI from "~/styles/baseTableUI.js"

const config = useRuntimeConfig()

const props = defineProps({
   event: {
      type: String,
      default: null,
   },
})

const { event } = toRefs(props)

const { data, status } = useLazyFetch(
   `${config.public.api_url}api/assetto-race/playerStatistics`,
   {
      server: false,
      query: {
         season: event,
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
      key: "player.team",
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

      <template #percentageFinished-data="{ row }">
         {{ (row?.percentageFinished * 100).toFixed(0) }}%
      </template>
   </UTable>
</template>

<style scoped></style>
