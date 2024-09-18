<script setup>
import ArticleForm from "~/components/articles/ArticleForm.vue"

const toast = useToast()
const config = useRuntimeConfig()
const router = useRouter()
const route = useRoute()

definePageMeta({
   middleware: "admin-middleware",
   layout: "admin",
})

const { data: article } = await useFetch(
   `${config.public.api_url}api/articles/${route.params.id}`,
   {
      transform: (res) => {
         const data = res.data
         return {
            _id: data._id,
            title: data.title,
            category: data.category,
            author: data.author,
            content: data.content,
         }
      }
   }
)

async function createArticle(data) {
   try {
      const formData = new FormData()
      formData.append('title', data.title)

      if(data.mainPhoto) {
         formData.append('mainPhoto', data.mainPhoto)
      }
      formData.append('category', data.category)
      formData.append('content', data.content)
      formData.append('author', data.author)

      await $fetch(`api/articles/${route.params.id}`, {
         method: "PATCH",
         body: formData,
         credentials: "include",
         baseURL: config.public.api_url,
      })
      toast.add({ title: "Edytowano" })
      await router.push("/admin/articles")
   } catch (e) {
      console.error(e)
      toast.add({ title: "Error", color: "red" })
   }
}
</script>

<template>
   <div>
      <ArticleForm v-model="article" edit @send="createArticle" />
   </div>
</template>

<style scoped></style>
