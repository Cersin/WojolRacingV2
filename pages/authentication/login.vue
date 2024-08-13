<script setup lang="ts">
import { z } from "zod"
import type { FormSubmitEvent } from "#ui/types"
import { useAuthComposable } from "~/composables/auth-composable"

const { login } = useAuthComposable()
// const passwordValidation = new RegExp(
//    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
// );

const schema = z.object({
   username: z.string(),
   password: z.string().min(1, { message: "Minimum  1 litera" }),
})

type Schema = z.output<typeof schema>

const state = reactive({
   username: undefined,
   password: undefined,
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
   await login({
      username: event.data.username,
      password: event.data.password,
   })
}
</script>

<template>
   <div class="flex flex-col justify-center items-center">
      <div class="m-12">Funkcjonalność dostępna wkrótce</div>

      <UForm
         :schema="schema"
         :state="state"
         class="space-y-4 min-w-60"
         @submit="onSubmit"
      >
         <UFormGroup label="Nazwa użytkownika" name="username">
            <UInput v-model="state.username" autocomplete="username" />
         </UFormGroup>

         <UFormGroup label="Password" name="password">
            <UInput
               v-model="state.password"
               autocomplete="current-password"
               type="password"
            />
         </UFormGroup>

         <UButton type="submit"> Submit </UButton>
      </UForm>
   </div>
</template>