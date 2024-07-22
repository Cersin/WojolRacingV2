<script setup>
const config = useRuntimeConfig()

const { data, status } = useLazyFetch(`${config.public.api_url}api/splits`, {
   server: false,
   onResponse: (e) => {
      if (e.response.ok) {
         const data = e.response._data?.data
         if (data?.length) {
            splitModel.value = data[0].split
         }
      }
   },
})

const splitModel = defineModel("split", {
   type: [String, Number],
   default: null,
})
</script>

<template>
   <USelectMenu
      v-model="splitModel"
      :options="data?.data"
      searchable
      placeholder="Split"
      option-attribute="split"
      value-attribute="split"
      :loading="status === 'pending' || status === 'idle'"
      color="black"
      size="md"
      class="bg-primary text-black rounded min-w-24 z-50"
   >
      <template #label>
         <span class="text-black">Split: {{ splitModel }}</span>
      </template>
   </USelectMenu>
</template>

<style scoped></style>
