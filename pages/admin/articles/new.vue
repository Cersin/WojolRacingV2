<script lang="ts" setup>
import ArticleForm from "~/components/articles/ArticleForm.vue"

definePageMeta({
   middleware: "admin-middleware",
   layout: "admin",
})

const model = ref({})
</script>

<template>
   <div>
      <ArticleForm v-model="model" />
   </div>
</template>

<style scoped></style>
