<script setup>
const config = useRuntimeConfig()

const { data, status } = useLazyFetch(`${config.public.api_url}api/seasons`, {
   server: false,
   onResponse: (e) => {
      if (e.response.ok) {
         const data = e.response._data?.data
         if (data?.length) {
            seasonModel.value = data[data.length - 1].season
         }
      }
   },
})

const seasonModel = defineModel("season", {
   type: [String, Number],
   default: null,
})
</script>

<template>
   <USelectMenu
      v-model="seasonModel"
      :options="data?.data"
      searchable
      placeholder="Sezon"
      option-attribute="season"
      value-attribute="season"
      :loading="status === 'pending' || status === 'idle'"
      color="black"
      size="md"
      class="bg-primary text-black rounded min-w-24 z-50"
   >
      <template #label>
         <span class="text-black">Sezon: {{ seasonModel }}</span>
      </template>
   </USelectMenu>
</template>

<style scoped></style>
