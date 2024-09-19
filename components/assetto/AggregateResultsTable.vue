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

const { data, status } = useLazyFetch(
   `${config.public.api_url}api/assetto-race/detailsPoints`,
   {
      server: false,
      query: {
         season: event,
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
      key: "player.name",
      label: "Driver",
   },
   {
      key: "player.team",
      label: "Team",
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
      :loading="status === 'pending' || status === 'idle'"
      :rows="data?.data"
      :ui="baseTableUI"
   >
      <template #position-data="{ index }"> {{ index + 1 }}</template>

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
