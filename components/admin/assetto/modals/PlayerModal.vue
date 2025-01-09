<script setup>
import { z } from "zod"
import EventSelect from "~/components/assetto/EventSelect.vue"

const config = useRuntimeConfig()
const toast = useToast()
const modal = useModal()

const props = defineProps({
   player: {
      type: Object,
      default: null,
   },
})

const emit = defineEmits(["success"])

const schema = z.object({
   name: z
      .string({
         message: "Pole wymagane",
      })
      .min(1, "Pole wymagane"),
   team: z
      .string({
         message: "Pole wymagane",
      })
      .min(1, "Pole wymagane"),
   season: z
      .string({
         message: "Pole wymagane",
      })
})

const model = reactive({
   name: undefined,
   team: undefined,
   season: undefined,
   active: undefined,
})

async function onSubmit(event) {
   try {
      if (props.player) {
         await $fetch(`api/assetto-players/${props.player._id}`, {
            method: "PATCH",
            body: event.data,
            credentials: "include",
            baseURL: config.public.api_url,
         })
      } else {
         await $fetch(`api/assetto-players/`, {
            method: "POST",
            body: event.data,
            credentials: "include",
            baseURL: config.public.api_url,
         })
      }
      emit("success")
      toast.add({ title: props.player ? "Edytowano" : "Dodano" })

      await modal.close()
   } catch (err) {
      console.error(err)
      toast.add({ title: "Error", color: "red" })
   }
}

onMounted(() => {
   if (props.player) {
      model.name = props.player.name
      model.team = props.player.team
      model.season = props.player.season
      model.active = props.player.active
   }
})
</script>

<template>
   <UModal class="chakra-petch">
      <UCard
         :ui="{
            ring: '',
            divide: 'divide-y divide-gray-100 dark:divide-gray-800',
         }"
      >
         <template #header>
            <div class="text-xl">
               {{ player ? "Edytuj zawodnika" : "Dodaj zawodnika" }}
            </div>
         </template>

         <UForm
            :schema="schema"
            :state="model"
            class="space-y-4"
            @submit="onSubmit"
         >
            <UFormGroup label="Imię Nazwisko" name="name">
               <UInput v-model="model.name" autofocus />
            </UFormGroup>

            <UFormGroup label="Split" name="split">
               <EventSelect v-model:event="model.season" />
            </UFormGroup>

            <UFormGroup label="Zespół" name="team">
               <UInput v-model="model.team" />
            </UFormGroup>

            <UFormGroup v-if="player" label="Aktywny" name="active">
               <UCheckbox v-model="model.active" />
            </UFormGroup>

            <UButton type="submit"> Zapisz</UButton>
         </UForm>
      </UCard>
   </UModal>
</template>

<style scoped></style>
