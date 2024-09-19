<script setup>
import RaceForm from "~/components/formula1/forms/RaceForm.vue"

const toast = useToast()
const config = useRuntimeConfig()
const router = useRouter()
const route = useRoute()

definePageMeta({
   middleware: "admin-middleware",
   layout: "admin",
})

const { data: article } = await useFetch(
   `${config.public.api_url}api/race/${route.params.id}`,
)

async function editRace(data) {
   try {
      await $fetch(`api/race/${route.params.id}`, {
         method: "PATCH",
         body: data,
         credentials: "include",
         baseURL: config.public.api_url,
      })
      toast.add({ title: "Edytowano" })
      await router.push("/admin/formula1/races")
   } catch (e) {
      console.error(e)
      toast.add({ title: "Error", color: "red" })
   }
}
</script>

<template>
   <div>
      <RaceForm v-model="article.data" edit @send="editRace" />
   </div>
</template>

<style scoped></style>
