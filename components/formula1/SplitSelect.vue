<script setup>
const config = useRuntimeConfig()

const { data, status } = useLazyFetch(`${config.public.api_url}api/splits`, {
   server: false,
})

const splitModel = defineModel("split", {
   type: [String, Number],
   required: true,
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
      variant=""
      color="black"
      size="md"
      class="bg-primary text-black rounded min-w-24 z-50"
   >
      <template #label>Split: {{ splitModel }}</template>
   </USelectMenu>
</template>

<style scoped></style>
