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
   `${config.public.api_url}api/race/constructorPoints`,
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
      key: "logo",
      label: "Logo",
   },
   {
      key: "_id",
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

      <template #logo-data="e">
         <img
            v-if="!!teams[e.row._id]"
            :src="teams[e.row._id].img"
            alt="Team image"
            class="w-8 h-8"
         />
         <img v-else :src="teams.Rezerwa.img" alt="Alt Image" class="w-8 h-8" />
      </template>
   </UTable>
</template>

<style scoped></style>
