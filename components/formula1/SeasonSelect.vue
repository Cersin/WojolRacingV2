<script setup>
const config = useRuntimeConfig()

const props = defineProps({
   autoSelect: {
      type: Boolean,
      default: true,
   },
})

const { data, status } = useLazyFetch(`${config.public.api_url}api/seasons`, {
   server: false,
   onResponse: (e) => {
      if (e.response.ok) {
         const data = e.response._data?.data
         if (data?.length && props.autoSelect) {
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
      :loading="status === 'pending' || status === 'idle'"
      :options="data?.data"
      class="bg-primary text-black rounded min-w-24 z-40"
      color="black"
      option-attribute="season"
      placeholder="Sezon"
      searchable
      size="md"
      value-attribute="season"
   >
      <template #label>
         <span class="text-black">Sezon: {{ seasonModel }}</span>
      </template>
   </USelectMenu>
</template>

<style scoped></style>
