<script lang="ts" setup>
import { QuillEditor } from "@vueup/vue-quill"
import "@vueup/vue-quill/dist/vue-quill.snow.css"

const model = defineModel({
   type: String,
   default: null,
})
</script>

<template>
   <div>
      <QuillEditor
         v-model:content="model"
         content-type="html"
         theme="snow"
         toolbar="full"
      />
   </div>
</template>

<style scoped></style>