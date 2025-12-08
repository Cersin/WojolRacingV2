<script setup lang="ts">
import { z } from "zod"
import type { FormSubmitEvent } from "#ui/types"

const toast = useToast()
const config = useRuntimeConfig()
const router = useRouter()
const { start, finish } = useLoadingIndicator({
   duration: 2000,
   throttle: 200,
   estimatedProgress: (duration, elapsed) =>
      (2 / Math.PI) * 100 * Math.atan(((elapsed / duration) * 100) / 50),
})

const driversSchema = z.object({
   fullName: z.string(),
   steamId: z.string().trim(),
   discordTag: z.string().trim(),
})

const schema = z.object({
   regulations: z.boolean().refine((val) => val, {
      message: "Please read regulations",
   }),
   drivers: z.array(driversSchema),
   team: z.string().trim(),
   carType: z.string(),
   carGTE: z.string().optional(),
   ceo: z.string(),
   ceoDiscordTag: z.string().trim(),
   teamNumber1: z.number().min(2).max(999),
   teamNumber2: z.number().min(2).max(999),
   teamNumber3: z.number().min(2).max(999),
})

type Schema = z.output<typeof schema>

const state = reactive({
   regulations: undefined,
   team: undefined,
   carType: undefined,
   carGTE: undefined,
   ceo: undefined,
   ceoDiscordTag: undefined,
   teamNumber1: undefined,
   teamNumber2: undefined,
   teamNumber3: undefined,
   drivers: [{}, {}]
})

const token = ref()
const turnstile = ref()
const loading = ref(false)

async function onSubmit(event: FormSubmitEvent<Schema>) {
   try {
      loading.value = true
      const result = await checkCaptcha()
      if (result) {
         const { data } = await $fetch(`api/endurance`, {
            method: "POST",
            body: event.data,
            baseURL: config.public.api_url
         })
         toast.add({ title: "Form sent" })
         await router.push(`/endurance/signup/${data._id}`)
      }
   } catch (e) {
      console.error(e)
      toast.add({ title: "Error occured", color: "red" })
   } finally {
      loading.value = false
      turnstile.value?.reset()
   }
}

async function checkCaptcha() {
   try {
      start()
      await $fetch("/_turnstile/validate", {
         method: "POST",
         body: {
            token: token.value
         }
      })
      return true
   } catch (e) {
      toast.add({ title: "Captcha error", color: "red" })
      return false
   } finally {
      finish()
   }
}

const carType = ["Touring", "GT1"]
const carsGTE = ["Ford", "Renault", "Honda"]
</script>

<template>
   <div>
      <div
         v-if="loading"
         class="fixed bg-black bg-opacity-80 h-full w-full z-50 flex justify-center items-center text-center"
      >
         Loading...
      </div>
      <div class="flex justify-center items-center p-4">
         <div class="bg-black p-4 rounded-lg">
            <div class="font-bold text-3xl mb-4">Road Atlanta Race Form</div>

            <div class="text-xl">
               First of all, before you complete the form:
               <a
                  class="flex items-center cursor-pointer p-2 w-[300px] lg:w-[300px] text-sm lg:text-lg"
                  href="https://docs.google.com/document/d/1Gb0bCt5CUDNyhAeKSNI1V6pHrHVDqF8wu61hgSpMFDk/edit?usp=sharing"
               >
                  <Icon class="mr-2" name="mdi:file-document" size="1.5em" />
                  Read Regulations (click)
               </a>
            </div>

            <UForm
               :schema="schema"
               :state="state"
               class="space-y-4"
               @submit="onSubmit"
            >
               <UFormGroup
                  label="I have read the regulations"
                  name="regulations"
               >
                  <UCheckbox v-model="state.regulations" />
               </UFormGroup>

               <UFormGroup label="Team name" name="team">
                  <UInput v-model="state.team" />
               </UFormGroup>

               <div>
                  Enter three team numbers, the one that is available will be
                  selected
               </div>
               <UFormGroup label="Team number 1" name="teamNumber1">
                  <UInput v-model="state.teamNumber1" type="number" />
               </UFormGroup>

               <UFormGroup label="Team number 2" name="teamNumber2">
                  <UInput v-model="state.teamNumber2" type="number" />
               </UFormGroup>

               <UFormGroup label="Team number 3" name="teamNumber3">
                  <UInput v-model="state.teamNumber3" type="number" />
               </UFormGroup>

               <UFormGroup label="Car type" name="carType">
                  <USelectMenu
                     v-model="state.carType"
                     :options="carType"
                     @change="() => (state.carGTE = undefined)"
                  />
               </UFormGroup>

               <UFormGroup
                  v-if="state.carType != undefined && state.carType === 'Touring'"
                  label="Car"
                  name="car"
               >
                  <USelectMenu v-model="state.carGTE" :options="carsGTE" />
               </UFormGroup>

               <UFormGroup label="CEO Full name" name="ceo">
                  <UInput v-model="state.ceo" />
               </UFormGroup>

               <UFormGroup label="CEO Discord Tag" name="ceoDiscordTag">
                  <UInput v-model="state.ceoDiscordTag" />
               </UFormGroup>

               <div>Minimum 2 drivers, maximum 4</div>
               <template v-for="(driver, index) in state.drivers" :key="index">
                  <div>Driver: {{ index + 1 }}</div>
                  <UFormGroup :name="`drivers.${index}.fullName`">
                     <UInput
                        v-model="driver.fullName"
                        placeholder="Driver full name"
                     />
                  </UFormGroup>

                  <UFormGroup :name="`drivers.${index}.discordTag`">
                     <UInput
                        v-model="driver.discordTag"
                        placeholder="Discord tag"
                     />
                  </UFormGroup>

                  <UFormGroup :name="`drivers.${index}.steamId`">
                     <UInput v-model="driver.steamId" placeholder="steamid64" />
                  </UFormGroup>

                  <UButton
                     v-if="index > 1"
                     label="Delete driver"
                     size="xs"
                     @click="state.drivers.splice(index, 1)"
                  />
               </template>

               <div>
                  <UButton
                     v-if="state.drivers.length < 4"
                     label="Add driver"
                     size="xs"
                     @click="state.drivers.push({})"
                  />
               </div>

               <NuxtTurnstile ref="turnstile" v-model="token" />

               <div class="flex justify-end">
                  <UButton class="mt-2" label="Sign up a team" type="submit" />
               </div>
            </UForm>
         </div>
      </div>
   </div>
</template>

<style scoped></style>