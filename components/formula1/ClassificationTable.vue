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
   `${config.public.api_url}api/race/playerPoints`,
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
      key: "points",
      label: "PTS",
   },
]
</script>

<template>
   <UTable
      :columns="columns"
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
   </UTable>
</template>

<style scoped></style>
