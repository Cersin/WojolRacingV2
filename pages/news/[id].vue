<script setup>
import { pl } from "date-fns/locale"

const route = useRoute()
const config = useRuntimeConfig()

const datefns = useNuxtApp().$datefns

const { data } = await useFetch(
   `${config.public.api_url}api/articles/${route.params.id}`,
)

useSeoMeta({
   title: data?.value?.data?.title || 'Artykuł',
   ogTitle: data?.value?.data?.title || 'Artykuł',
   description: data?.value?.data?.description?.slice(0, 50),
   ogDescription: data?.value?.data?.description?.slice(0, 50),
   ogImage: `${config.public.api_url}articles/${data.value?.data?.mainPhoto}`,
   ogImageAlt: 'Zdjęcie artykułu',
   articlePublishedTime: data?.value?.data?.createdAt,
   articleAuthor: data?.value?.data?.author,
   articleTag: data?.value?.data?.category,
   category: data?.value?.data?.category,
})
</script>

<template>
   <div class="bg-black">
      <div class="p-5 mx-auto sm:p-10 md:p-16 bg-black dark:text-gray-800">
         <div class="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <img
               :src="`${config.public.api_url}articles/${data?.data?.mainPhoto}`"
               alt=""
               class="w-full h-60 sm:h-96 bg-black object-cover"
               crossorigin="anonymous"
            />
            <div
               class="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-primary"
            >
               <div class="space-y-2">
                  <div class="text-xs dark:text-gray-600">
                     {{
                        datefns.format(
                           new Date(data?.data?.createdAt),
                           "d MMMM yyyy",
                           {
                              locale: pl,
                           },
                        )
                     }}
                  </div>
                  <a
                     class="inline-block text-2xl font-semibold sm:text-3xl"
                     href="#"
                     rel="noopener noreferrer"
                     >{{ data?.data?.title }}</a
                  >
                  <p class="text-xs dark:text-gray-600">
                     By
                     <a
                        class="text-xs hover:underline"
                        href="#"
                        rel="noopener noreferrer"
                        >{{ data?.data?.author }}</a
                     >
                  </p>
               </div>
               <div class="dark:text-gray-800">
                  <client-only>
                     <p v-html="data?.data?.content" />
                  </client-only>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped></style>
