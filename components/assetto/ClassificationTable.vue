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
   `${config.public.api_url}api/assetto-race/playerPoints`,
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
   </UTable>
</template>

<style scoped></style>
