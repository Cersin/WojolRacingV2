<script setup>
import { pl } from "date-fns/locale"
import EventSelect from "~/components/assetto/EventSelect.vue"

definePageMeta({
   middleware: "admin-middleware",
   layout: "admin",
})

const config = useRuntimeConfig()
const modal = useModal()
const datefns = useNuxtApp().$datefns

const columns = [
   {
      key: "track",
      label: "Tor",
   },
   {
      key: "date",
      label: "Data",
   },
   {
      key: "season",
      label: "Event",
   },
   {
      key: "actions",
      label: "Akcje",
   },
]

const season = ref(null)

const { status, data, refresh } = await useLazyFetch(
   `${config.public.api_url}api/assetto-race`,
   {
      server: false,
      query: {
         season: season,
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
            Wyścigi
         </h2>
      </template>

      <!--   Buttons-->
      <UButton
         label="Dodaj nowy wyścig"
         @click="$router.push('/admin/assetto/races/new')"
      />

      <!-- Filters -->
      <div class="flex items-center gap-3 py-3">
         <EventSelect v-model:event="season" />
      </div>

      <UTable
         :columns="columns"
         :loading="status === 'pending' || status === 'idle'"
         :rows="data?.data?.races"
      >
         <template #date-data="{ row }">
            {{
               datefns.format(new Date(row.date), "d MMMM yyyy", {
                  locale: pl,
               })
            }}
         </template>

         <template #actions-data="{ row }">
            <UButton
               :ui="{ rounded: 'rounded-full' }"
               color="emerald"
               icon="i-heroicons-pencil-square-16-solid"
               size="2xs"
               square
               @click="$router.push(`/admin/assetto/races/${row._id}`)"
            />
         </template>
      </UTable>
   </UCard>
</template>

<style scoped></style>
