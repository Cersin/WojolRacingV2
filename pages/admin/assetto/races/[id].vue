<script setup>
import RaceForm from "~/components/assetto/forms/RaceForm.vue"

const toast = useToast()
const config = useRuntimeConfig()
const router = useRouter()
const route = useRoute()

definePageMeta({
   middleware: "admin-middleware",
   layout: "admin",
})

const { data: race } = await useFetch(
   `${config.public.api_url}api/assetto-race/${route.params.id}`,
)

async function editRace(data) {
   console.log("send")

   try {
      await $fetch(`api/assetto-race/${route.params.id}`, {
         method: "PATCH",
         body: data,
         credentials: "include",
         baseURL: config.public.api_url,
      })
      toast.add({ title: "Edytowano" })
      await router.push("/admin/assetto/races")
   } catch (e) {
      console.error(e)
      toast.add({ title: "Error", color: "red" })
   }
}
</script>

<template>
   <div>
      <RaceForm v-model="race.data" edit @send="editRace" />
   </div>
</template>

<style scoped></style>
