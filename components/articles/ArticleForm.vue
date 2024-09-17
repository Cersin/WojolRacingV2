<script setup>
import { z } from 'zod'

const Editor = defineAsyncComponent(() => import('~/components/inputs/QuillEditor.vue'))

   const model = defineModel({
      type: Object,
      default: () => {},
   })

const emit = defineEmits(['send'])

const MAX_FILE_SIZE = 3072000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const schema = z.object({
   title: z.string({
      message: 'Pole wymagane',
   }),
   category: z.string({
      message: 'Pole wymagane',
   }),
   content: z.string({
      message: 'Pole wymagane',
   }),
   author: z.string({
      message: 'Pole wymagane',
   }),
   mainPhoto: z.any()
      .refine((file) =>
          file?.size < MAX_FILE_SIZE, `Maksymalna wielkość pliku: 3MB.`
      )
      .refine(
         (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
         "Only .jpg, .jpeg, .png and .webp formats are supported."
      ),
})

async function onSubmit (event) {
   emit('send', event.data)
}

function getFileObject(e) {
   model.value.mainPhoto = e[0]
}
</script>

<template>
   <UForm :schema="schema" :state="model" @submit="onSubmit">
      <UFormGroup label="Nazwa artykułu" name="title">
         <UInput v-model="model.title" />
      </UFormGroup>

      <UFormGroup label="Kategoria" name="category">
         <UInput v-model="model.category" />
      </UFormGroup>

      <UFormGroup label="Autor/Autorzy" name="author">
         <UInput v-model="model.author" />
      </UFormGroup>

      <UFormGroup label="Główne zdjęcie" name="mainPhoto">
         <UInput v-model="model.photo" type="file" accept="image/*" @change="getFileObject" />
      </UFormGroup>

      <UFormGroup label="Treść" name="content">
      <client-only>
         <Editor v-model="model.content" />
      </client-only>
      </UFormGroup>

      <UButton class="mt-4" type="submit">
         Dodaj
      </UButton>
   </UForm>
</template>

<style scoped>

</style>