<script lang="ts" setup>
import { z } from "zod"
import baseTableUI from "~/styles/baseTableUI"
import PlayerSelect from "~/components/assetto/PlayerSelect.vue"
import EventSelect from "~/components/assetto/EventSelect.vue"

defineProps({
   edit: {
      type: Boolean,
      default: false,
   },
})

const model = defineModel({
   type: Object,
   default: () => {},
})

const formRef = ref()

const emit = defineEmits(["send"])

const resultsSchema = z.object({
   position: z
      .number({
         message: "Pole wymagane",
      })
      .min(1),
   player: z.string({
      message: "Pole wymagane",
   }),
   grid: z.number({
      message: "Pole wymagane",
   }),
   bestLap: z.string({
      message: "Pole wymagane",
   }),
   gap: z.string({
      message: "Pole wymagane",
   }),
   points: z
      .number({
         message: "Pole wymagane",
      })
      .min(0),
})

// const resultsSchema = z.array(schema)

const combineSchema = z.object({
   results: z.array(resultsSchema),
   track: z.string({
      message: "Pole wymagane",
   }),
   endurance: z.boolean().optional(),
   season: z.string({
      message: "Pole wymagane",
   }),
   date: z.date({
      message: "Pole wymagane",
   }),
})

const columns = [
   {
      key: "player",
      label: "Zawodnik",
   },
   {
      key: "position",
      label: "POS",
   },
   {
      key: "grid",
      label: "Grid",
   },
   {
      key: "pitStops",
      label: "Stops",
   },
   {
      key: "bestLap",
      label: "Best",
   },
   {
      key: "gap",
      label: "GAP",
   },
   {
      key: "fastestLap",
      label: "Fastest lap",
   },
   {
      key: "dnf",
      label: "DNF",
   },
   {
      key: "points",
      label: "PTS",
   },
]

async function onSubmit(event) {
   emit("send", event.data)
}

function addRow() {
   if (Array.isArray(model.value?.results)) {
      model.value.results.push({})
   } else {
      model.value.results = [{}]
   }
}
</script>

<template>
   <UForm
      ref="formRef"
      :schema="combineSchema"
      :state="model"
      class="p-4"
      @submit="onSubmit"
   >
      <div class="mb-4">
         <UFormGroup label="Tor" name="track">
            <UInput v-model="model.track" />
         </UFormGroup>

         <div class="flex">
            <UFormGroup label="Event" name="season">
               <EventSelect v-model:event="model.season" />
            </UFormGroup>
         </div>

         <div class="mt-1 mb-1">
            <UFormGroup  label="Endurance" name="endurance">
               <UCheckbox v-model="model.endurance" />
            </UFormGroup>
         </div>

         <UFormGroup label="Data" name="date">
            {{ edit ? "TRZEBA JESZCZE RAZ WYBRAC DATE" : null }}
            <VDatePicker v-model="model.date" mode="dateTime" timezone="UTC">
               <template #default="{ inputValue, inputEvents }">
                  <UInput :value="inputValue" v-on="inputEvents" />
               </template>
            </VDatePicker>
         </UFormGroup>
      </div>

      <UButton label="Dodaj wiersz" @click="addRow" />
      <UTable
         :columns="columns"
         :rows="model.results"
         :ui="baseTableUI"
         style="min-height: 400px"
      >
         <template #player-data="{ row, index }">
            <UFormGroup :name="`results.${index}.player`">
               <PlayerSelect v-model="row.player" :season="model.season" />
            </UFormGroup>
         </template>

         <template #position-data="{ row, index }">
            <UFormGroup :name="`results.${index}.position`">
               <UInput v-model="row.position" class="w-16" type="number" />
            </UFormGroup>
         </template>

         <template #grid-data="{ row, index }">
            <UFormGroup :name="`results.${index}.grid`">
               <UInput v-model="row.grid" class="w-16" type="number" />
            </UFormGroup>
         </template>

         <template #bestLap-data="{ row, index }">
            <UFormGroup :name="`results.${index}.bestLap`">
               <UInput v-model="row.bestLap" class="w-24" />
            </UFormGroup>
         </template>

         <template #fastestLap-data="{ row, index }">
            <UFormGroup :name="`results.${index}.fastestLap`">
               <UCheckbox v-model="row.fastestLap" color="black" />
            </UFormGroup>
         </template>

         <template #gap-data="{ row, index }">
            <UFormGroup :name="`results.${index}.gap`">
               <UInput v-model="row.gap" class="w-24" />
            </UFormGroup>
         </template>

         <template #dnf-data="{ row, index }">
            <UFormGroup :name="`results.${index}.dnf`">
               <UCheckbox v-model="row.dnf" color="black" />
            </UFormGroup>
         </template>

         <template #points-data="{ row, index }">
            <UFormGroup :name="`results.${index}.points`">
               <UInput v-model="row.points" class="w-16" type="number" />
            </UFormGroup>
         </template>
      </UTable>

      <UButton class="mt-2" type="submit">
         {{ edit ? "Edytuj" : "Zapisz" }}
      </UButton>
   </UForm>
</template>

<style scoped></style>
