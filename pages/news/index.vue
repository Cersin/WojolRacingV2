<script setup>
import { pl } from "date-fns/locale"

definePageMeta({
   name: "Aktualności",
})

const config = useRuntimeConfig()
const datefns = useNuxtApp().$datefns

const page = ref(1)
const limit = ref(10)
const pages = ref(0)

const data = ref([])

const { status } = await useLazyFetch(`${config.public.api_url}api/articles`, {
   server: false,
   onResponse({ response }) {
      data.value = data.value.concat(response?._data.data)
      response?._data?.data?.forEach((el) => data.value.push(el))
      pages.value = response?._data?.pagination?.pages
   },
   query: {
      page: page,
      limit: limit,
   },
})

const hasMorePages = computed(() => page.value < pages.value)

function loadMore() {
   page.value++
}
</script>

<template>
   <section class="bg-black dark:text-gray-800">
      <UProgress
         v-if="!data.length && (status === 'pending' || status === 'idle')"
      />

      <div
         v-if="data.length"
         class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12"
      >
         <NuxtLink
            :to="`news/${data[0]._id}`"
            class="rounded block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-primary"
            rel="noopener noreferrer"
         >
            <img
               :src="`${config.public.api_url}articles/${data[0].mainPhoto}`"
               alt="article_photo"
               class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
               crossorigin="use-credentials"
            />
            <div class="p-6 space-y-2 lg:col-span-5">
               <h3
                  class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline"
               >
                  {{ data[0].title }}
               </h3>
               <span class="text-xs dark:text-gray-600">{{
                  datefns.format(new Date(data[0].createdAt), "d MMMM yyyy", {
                     locale: pl,
                  })
               }}</span>
               <client-only>
                  <p class="line-clamp-5" v-html="data[0].content"></p>
               </client-only>
            </div>
         </NuxtLink>

         <div
            class="flex flex-wrap sm:grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
         >
            <template v-for="(e, index) in data" :key="e._id">
               <NuxtLink
                  v-if="index !== 0"
                  :to="`news/${e._id}`"
                  class="max-w-sm group hover:no-underline focus:no-underline bg-primary rounded"
                  rel="noopener noreferrer"
               >
                  <img
                     :src="`${config.public.api_url}articles/${e.mainPhoto}`"
                     alt="article_photo"
                     class="object-cover w-full rounded h-44 dark:bg-gray-500"
                     crossorigin="use-credentials"
                     role="presentation"
                  />
                  <div class="p-6 space-y-2">
                     <h3
                        class="text-2xl font-semibold group-hover:underline group-focus:underline"
                     >
                        {{ e.title }}
                     </h3>
                     <span class="text-xs dark:text-gray-600">{{
                        datefns.format(new Date(e.createdAt), "dMMMM yyyy", {
                           locale: pl,
                        })
                     }}</span>
                     <client-only>
                        <p v-html="e.content" class="line-clamp-5"></p>
                     </client-only>
                  </div>
               </NuxtLink>
            </template>
         </div>

         <div v-if="hasMorePages" class="flex justify-center">
            <button
               class="px-6 py-3 text-sm rounded-md hover:underline bg-primary dark:text-gray-600"
               type="button"
               @click="loadMore"
            >
               Załaduj więcej...
            </button>
         </div>
      </div>
   </section>
</template>

<style scoped></style>