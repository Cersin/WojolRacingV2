<script setup>
import { refDebounced } from "@vueuse/core"
import PlayerModal from "~/components/admin/formula1/modals/PlayerModal.vue"

definePageMeta({
   middleware: "admin-middleware",
   layout: "admin",
})

const config = useRuntimeConfig()
const modal = useModal()

const columns = [
   {
      key: "name",
      label: "Imię Nazwisko (nick)",
   },
   {
      key: "team",
      label: "Zespół",
   },
   {
      key: "split",
      label: "Split",
   },
   {
      key: "active",
      label: "Aktywny",
   },
   {
      key: "actions",
      label: "Akcje",
   },
]

const active = ref(true)

const page = ref(1)
const pageCount = 15
const search = ref("")
const searchDebounced = refDebounced(search, 1000)

const rows = computed(() => {
   return data.value?.data?.slice(
      (page.value - 1) * pageCount,
      page.value * pageCount,
   )
})

const { status, data, refresh } = useLazyFetch(
   `${config.public.api_url}api/players`,
   {
      server: false,
      query: {
         active: active,
         name: searchDebounced,
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
            Zawodnicy
         </h2>
      </template>

      <!--   Buttons-->
      <UButton
         label="Dodaj nowego zawodnika"
         @click="
            modal.open(PlayerModal, {
               onSuccess() {
                  refresh()
               },
            })
         "
      />

      <!-- Filters -->
      <div class="flex items-center justify-between gap-3 py-3">
         <UInput
            v-model="search"
            icon="i-heroicons-magnifying-glass-20-solid"
            placeholder="pełne imie i nazwisko"
         />

         <div class="flex items-center gap-4">
            Aktywny
            <UToggle v-model="active" />
         </div>
      </div>

      <UTable
         :columns="columns"
         :loading="status === 'pending' || status === 'idle'"
         :rows="rows"
      >
         <template #active-data="{ row }">
            <Icon
               v-if="row.active"
               name="material-symbols:check-rounded"
               size="24"
               style="color: green"
            />

            <Icon
               v-else
               name="material-symbols:close"
               size="24"
               style="color: red"
            />
         </template>

         <template #actions-data="{ row }">
            <UButton
               :ui="{ rounded: 'rounded-full' }"
               color="emerald"
               icon="i-heroicons-pencil-square-16-solid"
               size="2xs"
               square
               @click="
                  modal.open(PlayerModal, {
                     player: row,
                     onSuccess() {
                        refresh()
                     },
                  })
               "
            />
         </template>
      </UTable>

      <template #footer>
         <UPagination
            v-model="page"
            :page-count="pageCount"
            :total="data?.data?.length"
         />
      </template>
   </UCard>
</template>

<style scoped></style>
