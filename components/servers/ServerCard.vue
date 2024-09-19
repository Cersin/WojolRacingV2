<script lang="ts" setup>
defineProps({
   number: {
      type: Number,
      required: true,
   },
   link: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
})
</script>

<template>
   <div
      class="flex justify-between w-full p-4 md:p-8 chakra-petch text-base md:text-xl rounded-xl items-center"
      style="background-color: #20588a"
   >
      <div class="flex flex-col">
         {{ description }}
         <a :href="link" target="_blank">{{ link }}</a>
      </div>

      <a
         :href="link"
         class="bg-black m-2 px-8 md:px-16 py-2 rounded-xl"
         target="_blank"
         type="button"
      >
         JOIN
      </a>
   </div>
</template>

<style scoped></style>
