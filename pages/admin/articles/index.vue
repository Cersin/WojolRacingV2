<script lang="ts" setup>
definePageMeta({
   middleware: "admin-middleware",
   layout: "admin",
})

const config = useRuntimeConfig()

const columns = [
   {
      key: "title",
      label: "Nazwa",
   },
   {
      key: "category",
      label: "Kategoria",
   },
   {
      key: "mainPhoto",
      label: "Zdjęcie glówne",
   },
   {
      key: "author",
      label: "Autor",
   },
   {
      key: "actions",
      label: "Akcje",
   },
]

const page = ref(1)
const pageLimit = ref(10)

const { status, data, refresh } = useLazyFetch(
   `${config.public.api_url}api/articles`,
   {
      server: false,
      query: {
         page: page,
         limit: pageLimit,
      },
   },
)
</script>

<template>
   <UCard
      :ui="{
         background: 'dark:bg-black',
         ring: 'dark:ring-gray-600',
      }"
   >
      <template #header>
         <h2
            class="font-semibold text-xl text-gray-900 dark:text-white leading-tight"
         >
            Artykuły
         </h2>
      </template>

      <!--   Buttons-->
      <UButton
         label="Dodaj nowy artykuł"
         @click="$router.push('/admin/articles/new')"
      />

      <UTable
         :columns="columns"
         :loading="status === 'pending' || status === 'idle'"
         :rows="data?.data"
      >
         <template #mainPhoto-data="{ row }">
            <img
               :src="`${config.public.api_url}articles/${row.mainPhoto}`"
               alt="mainPhoto"
               crossorigin="anonymous"
               style="width: auto; height: 64px"
            />
         </template>

         <template #actions-data="{ row }">
            <UButton
               :ui="{ rounded: 'rounded-full' }"
               color="emerald"
               icon="i-heroicons-pencil-square-16-solid"
               size="2xs"
               square
               @click="$router.push(`/admin/articles/${row._id}`)"
            />
         </template>
      </UTable>

      <template #footer>
         <UPagination
            v-model="page"
            :page-count="data?.pagination?.pages"
            :total="data?.size"
         />
      </template>
   </UCard>
</template>

<style scoped></style>
