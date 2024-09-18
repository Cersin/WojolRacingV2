<script lang="ts" setup>
import { z } from "zod"
import emailjs from "emailjs-com"

const config = useRuntimeConfig()
const toast = useToast()

definePageMeta({
   name: "Kontakt",
})

const schema = z.object({
   name: z.string({ message: "Pole wymagane" }),
   email: z
      .string({ message: "Pole wymagane" })
      .email("Nieprawidłowy adres e-mail"),
   message: z.string({ message: "Pole wymagane" }),
})

const isSend = ref(false)
const form = ref()
const sending = ref(false)

const state = reactive({
   name: undefined,
   email: undefined,
   message: undefined,
})

async function onSubmit() {
   try {
      sending.value = true
      if (!state.name || !state.email || !state.message) {
         toast.add({ title: "Uzupełnij formularz", color: "red" })
         return
      }
      await emailjs.sendForm(
         config.public.EMAIL_SERVICE_ID,
         config.public.EMAIL_TEMPLATE_ID,
         form.value,
         config.public.EMAIL_USER_ID,
      )
      toast.add({ title: "Wysłano wiadomość. Dziękujemy." })
      isSend.value = true
   } catch (e) {
      toast.add({ title: "Wystąpił błąd, przepraszamy", color: "red" })
   } finally {
      sending.value = false
   }
}
</script>

<template>
   <div class="flex flex-col justify-start p-8 items-center">
      <div
         class="uppercase text-6xl md:text-8xl xl:text-9xl text-gray-800 opacity-60 chakra-petch"
      >
         Napisz do nas
      </div>

      <div class="flex flex-col-reverse md:flex-row gap-8 mt-8">
         <div class="flex flex-col gap-8 flex-gro">
            <div class="text-4xl">Kontakt</div>
            <div class="text-base">
               Skontaktuj się z nami za pomocą formularza.
            </div>

            <div class="text-4xl">Współpraca</div>
            <div class="text-base">
               Jesteśmy otwarci na wszelkie współprace! Zapraszamy do kontaktu!
            </div>

            <div class="text-4xl">Masz pytanie?</div>
            <div class="text-base">
               Opcjonalnie możesz napisać do nas na wojolracing@gmail.com
            </div>
         </div>

         <div
            class="md:w-1/2 p-8 rounded-2xl"
            style="box-shadow: 0px 0px 8px #ffeb00"
         >
            <form ref="form" class="space-y-4" @submit.prevent="onSubmit">
               <UFormGroup label="Imię" name="name">
                  <UInput v-model="state.name" />
               </UFormGroup>

               <UFormGroup label="Email" name="email">
                  <UInput v-model="state.email" />
               </UFormGroup>

               <UFormGroup label="Wiadomość" name="message">
                  <UTextarea v-model="state.message" />
               </UFormGroup>

               <UButton :disabled="isSend" :loading="sending" type="submit"
                  >{{ isSend ? "Wiadomość wysłana" : "Wyślij" }}
               </UButton>
            </form>
         </div>
      </div>
   </div>
</template>

<style scoped></style>
