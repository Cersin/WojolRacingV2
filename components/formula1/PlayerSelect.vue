<script setup>
const config = useRuntimeConfig()

const { execute } = useLazyFetch(`${config.public.api_url}api/players`, {
   key: "players",
   server: false,
   immediate: false,
})

const { data: dataCached } = useNuxtData("players")

const model = defineModel({
   type: String,
   default: null,
})

onMounted(() => {
   if (!dataCached.value) execute()
})
</script>

<template>
   <USelectMenu
      v-model="model"
      :loading="!dataCached"
      :options="dataCached?.data"
      class="w-48"
      option-attribute="name"
      placeholder="Zawodnik"
      searchable
      value-attribute="_id"
   />
</template>

<style scoped></style>
