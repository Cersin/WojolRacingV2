<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
   error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
   <section class="flex items-center h-full p-16 bg-black text-white">
      <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
         <div class="max-w-md text-center">
            <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-400">
               <span class="sr-only">Error</span>{{ error.statusCode }}
            </h2>
            <p class="text-2xl font-semibold md:text-3xl">Przepraszam, wystąpił błąd</p>
            <p class="mt-4 mb-8 dark:text-gray-600">Zapraszamy na stronę główną</p>
            <a class="px-8 py-3 font-semibold rounded bg-primary text-black cursor-pointer" @click="handleError"  rel="noopener noreferrer">Powrót na stronę główną</a>
         </div>
      </div>
   </section>
</template>