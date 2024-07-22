<script setup>
const config = useRuntimeConfig()

const { data, status } = useLazyFetch(`${config.public.api_url}api/seasons`, {
   server: false,
})

const seasonModel = defineModel("season", {
   type: [String, Number],
   required: true,
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
      variant=""
      :loading="status === 'pending' || status === 'idle'"
      color="black"
      size="md"
      class="bg-primary text-black rounded min-w-24 z-50"
   >
      <template #label>Sezon: {{ seasonModel }}</template>
   </USelectMenu>
</template>

<style scoped></style>
