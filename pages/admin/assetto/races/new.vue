<script setup>
import RaceForm from "~/components/assetto/forms/RaceForm.vue"

const toast = useToast()
const config = useRuntimeConfig()
const router = useRouter()

definePageMeta({
   middleware: "admin-middleware",
   layout: "admin",
})

const model = ref({
   results: [],
})

async function saveRace(data) {
   try {
      await $fetch(`api/assetto-race`, {
         method: "POST",
         body: data,
         credentials: "include",
         baseURL: config.public.api_url,
      })
      toast.add({ title: "Dodano" })
      await router.push("/admin/assetto/races")
   } catch (e) {
      console.error(e)
      toast.add({ title: "Error", color: "red" })
   }
}
</script>

<template>
   <RaceForm v-model="model" @send="saveRace" />
</template>

<style scoped></style>
