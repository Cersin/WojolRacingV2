<script lang="ts" setup>
import { z } from "zod"
import baseTableUI from "~/styles/baseTableUI"
import teams from "~/data/teams"
import PlayerSelect from "~/components/formula1/PlayerSelect.vue"
import { tracks } from "~/data/tracks"
import SplitSelect from "~/components/formula1/SplitSelect.vue"
import SeasonSelect from "~/components/formula1/SeasonSelect.vue"

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
   team: z.string({
      message: "Pole wymagane",
   }),
   grid: z.number({
      message: "Pole wymagane",
   }),
   pitStops: z.number({
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
   season: z.number({
      message: "Pole wymagane",
   }),
   split: z.number({
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
      key: "team",
      label: "Team",
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
   console.log("git")
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
            <USelectMenu
               v-model="model.track"
               :options="Object.values(tracks)"
               class="w-48 z-50"
               option-attribute="value"
               searchable
               value-attribute="value"
            />
         </UFormGroup>

         <div class="flex">
            <UFormGroup label="Sezon" name="season">
               <SeasonSelect
                  v-model:season="model.season"
                  :auto-select="false"
               />
            </UFormGroup>

            <UFormGroup label="Split" name="split">
               <SplitSelect v-model:split="model.split" :auto-select="false" />
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
               <PlayerSelect v-model="row.player" />
            </UFormGroup>
         </template>

         <template #position-data="{ row, index }">
            <UFormGroup :name="`results.${index}.position`">
               <UInput v-model="row.position" class="w-16" type="number" />
            </UFormGroup>
         </template>

         <template #team-data="{ row, index }">
            <UFormGroup :name="`results.${index}.team`">
               <USelectMenu
                  v-model="row.team"
                  :options="Object.values(teams)"
                  class="w-36"
                  option-attribute="value"
                  placeholder="Team"
                  searchable
                  value-attribute="value"
               />
            </UFormGroup>
         </template>

         <template #grid-data="{ row, index }">
            <UFormGroup :name="`results.${index}.grid`">
               <UInput v-model="row.grid" class="w-16" type="number" />
            </UFormGroup>
         </template>

         <template #pitStops-data="{ row, index }">
            <UFormGroup :name="`results.${index}.pitStops`">
               <UInput v-model="row.pitStops" class="w-16" type="number" />
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
