<script setup lang="ts">
import { z } from "zod"
import type { FormSubmitEvent } from "#ui/types"

const driversSchema = z.object({
   fullName: z.string(),
   steamId: z.string().trim(),
   discordTag: z.string().trim(),
})

const schema = z.object({
   drivers: z.array(driversSchema),
   team: z.string().trim(),
   carType: z.string(),
   carGTE: z.string(),
   ceo: z.string(),
   ceoDiscordTag: z.string().trim(),
   teamNumber1: z.number().min(2).max(999),
   teamNumber2: z.number().min(2).max(999),
   teamNumber3: z.number().min(2).max(999),
})

type Schema = z.output<typeof schema>

const state = reactive({
   team: undefined,
   carType: undefined,
   carGTE: undefined,
   ceo: undefined,
   ceoDiscordTag: undefined,
   teamNumber1: undefined,
   teamNumber2: undefined,
   teamNumber3: undefined,
   drivers: [
      {},
      {},
   ],
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
   console.log(event.data)
}

const carType = ['GTE', 'Hypercar']
const carsGTE = ['AMR EGT', 'Darche EGT 2021', 'Michigan EGT']
</script>

<template>
   <div class="flex justify-center items-center p-4">
      <div class="bg-black p-4 rounded-lg">
         <div class="font-bold text-2xl mb-4">
            Le Mans Race Form
         </div>

         <UForm
            :schema="schema"
            :state="state"
            class="space-y-4"
            @submit="onSubmit"
         >
            <UFormGroup label="Team name" name="team">
               <UInput v-model="state.team"  />
            </UFormGroup>

            <div>
               Enter three team numbers, the one that is available will be selected
            </div>
            <UFormGroup label="Team number 1" name="teamNumber1">
               <UInput v-model="state.teamNumber1"  />
            </UFormGroup>

            <UFormGroup label="Team number 2" name="teamNumber2">
               <UInput v-model="state.teamNumber1"  />
            </UFormGroup>

            <UFormGroup label="Team number 3" name="teamNumber3">
               <UInput v-model="state.teamNumber1"  />
            </UFormGroup>

            <UFormGroup label="Car type" name="carType">
               <USelectMenu v-model="state.carType" :options="carType" @change="() => state.carGTE = undefined" />
            </UFormGroup>

            <UFormGroup v-if="state.carType != undefined && state.carType === 'GTE'" label="Car" name="car">
               <USelectMenu v-model="state.carGTE" :options="carsGTE" />
            </UFormGroup>

            <UFormGroup  label="CEO Full name" name="ceo">
               <UInput v-model="state.ceo"  />
            </UFormGroup>

            <UFormGroup  label="CEO Discord Tag" name="ceoDiscordTag">
               <UInput v-model="state.ceoDiscordTag"  />
            </UFormGroup>

            <div>
               Minimum 2 drivers, maximum 5
            </div>
            <template v-for="(driver, index) in state.drivers" :key="index">
               <div>Driver: {{ index + 1 }}</div>
               <UFormGroup  :name="`drivers.${index}.fullName`">
                  <UInput v-model="driver.fullName" placeholder="Driver full name"  />
               </UFormGroup>

               <UFormGroup  :name="`drivers.${index}.discordTag`">
                  <UInput v-model="driver.discordTag" placeholder="Discord tag"  />
               </UFormGroup>

               <UFormGroup  :name="`drivers.${index}.steamId`">
                  <UInput v-model="driver.steamId" placeholder="Steam id"  />
               </UFormGroup>

               <UButton v-if="index > 1" label="Delete driver" size="xs"  @click="state.drivers.splice(index, 1)" />
            </template>

            <div>
               <UButton v-if="state.drivers.length < 5" size="xs" label="Add driver" @click="state.drivers.push({})" />
            </div>

            <div class="flex justify-end">
               <UButton class="mt-2" type="submit" label="Sign up a team" />
            </div>
         </UForm>
      </div>
   </div>
</template>

<style scoped>

</style>