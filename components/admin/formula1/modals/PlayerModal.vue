<script setup>
import { z } from "zod"
import SplitSelect from "~/components/formula1/SplitSelect.vue"
import teams from "~/data/teams"

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
})

const model = reactive({
   name: undefined,
   split: undefined,
   team: undefined,
   photo: undefined,
   photoString: undefined,
   active: undefined,
})

async function onSubmit(event) {
   try {
      const formData = new FormData()
      formData.append("name", event.data.name)
      if (event.data?.split) formData.append("split", event.data.split)
      if (event.data?.team) formData.append("team", event.data.team)
      if (event.data?.photo) formData.append("photo", event.data.photo)
      if (props.player) formData.append("active", event.data.active)
      if (props.player) {
         await $fetch(`api/players/${props.player._id}`, {
            method: "PATCH",
            body: formData,
            credentials: "include",
            baseURL: config.public.api_url,
         })
      } else {
         await $fetch(`api/players/`, {
            method: "POST",
            body: formData,
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

function getFileObject(e) {
   model.photo = e[0]
}

onMounted(() => {
   if (props.player) {
      model.split = props.player.split
      model.name = props.player.name
      model.team = props.player.team
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
               <SplitSelect v-model:split="model.split" :auto-select="false" />
            </UFormGroup>

            <UFormGroup label="Zespół" name="team">
               <USelectMenu
                  v-model="model.team"
                  :options="Object.values(teams)"
                  option-attribute="value"
                  searchable
                  value-attribute="value"
               />
            </UFormGroup>

            <UFormGroup v-if="player" label="Aktywny" name="active">
               <UCheckbox v-model="model.active" />
            </UFormGroup>

            <UFormGroup label="Zdjęcie" name="photo">
               <UInput
                  v-model="model.photoString"
                  accept="image/*"
                  type="file"
                  @change="getFileObject"
               />
            </UFormGroup>

            <div v-if="player?.photo">
               <img
                  :src="`${config.public.api_url}players/${player.photo}`"
                  alt="PlayerImage"
                  class="object-cover h-14 w-auto"
                  crossorigin="use-credentials"
               />
            </div>

            <UButton type="submit"> Zapisz</UButton>
         </UForm>
      </UCard>
   </UModal>
</template>

<style scoped></style>
