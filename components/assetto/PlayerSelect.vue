<script setup>
import { toRefs } from "vue"

const config = useRuntimeConfig()

const props = defineProps({
   season: {
      type: String,
      default: null,
   }
})

const { season } = toRefs(props)

const active = ref(true)

const { execute } = useLazyFetch(`${config.public.api_url}api/assetto-players`, {
   key: "assetto-players",
   server: false,
   immediate: false,
   query: {
      active: active,
      season: season,
   },
})

const { data: dataCached } = useNuxtData("assetto-players")

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
