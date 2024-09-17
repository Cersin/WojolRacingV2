<script setup>
import ArticleForm from "~/components/articles/ArticleForm.vue"

const toast = useToast()
const config = useRuntimeConfig()
const router = useRouter()

definePageMeta({
   middleware: "admin-middleware",
   layout: "admin",
})

const model = ref({})

async function createArticle(data) {
   try {
      const formData = new FormData()
      formData.append('title', data.title)
      formData.append('mainPhoto', data.mainPhoto)
      formData.append('category', data.category)
      formData.append('content', data.content)
      formData.append('author', data.author)

      await $fetch(`api/articles`, {
         method: "POST",
         body: formData,
         credentials: "include",
         baseURL: config.public.api_url,
      })
      toast.add({ title: "Dodano" })
      await router.push("/admin/articles")
   } catch (e) {
      console.error(e)
      toast.add({ title: "Error", color: "red" })
   }
}
</script>

<template>
   <div>
      <ArticleForm v-model="model" @send="createArticle" />
   </div>
</template>

<style scoped></style>
