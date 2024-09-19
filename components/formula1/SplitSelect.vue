<script setup>
const config = useRuntimeConfig()

const props = defineProps({
   autoSelect: {
      type: Boolean,
      default: true,
   },
})

const { data, status } = useLazyFetch(`${config.public.api_url}api/splits`, {
   server: false,
   onResponse: (e) => {
      if (e.response.ok) {
         const data = e.response._data?.data
         if (data?.length && props.autoSelect) {
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
      :loading="status === 'pending' || status === 'idle'"
      :options="data?.data"
      class="bg-primary text-black rounded min-w-24 z-40"
      color="black"
      option-attribute="split"
      placeholder="Split"
      searchable
      size="md"
      value-attribute="split"
   >
      <template #label>
         <span class="text-black">Split: {{ splitModel }}</span>
      </template>
   </USelectMenu>
</template>

<style scoped></style>
