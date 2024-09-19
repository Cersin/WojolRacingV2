<script setup>
defineProps({
   car: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   resultDescription: {
      type: String,
      required: true,
   },
   drivers: {
      type: Array,
      required: true,
   },
   image: {
      type: String,
      required: true,
   },
   even: {
      type: Boolean,
      default: false,
   },
})
</script>

<template>
   <div
      :class="{
         'md:flex-row-reverse': even,
         'md:flex-row': !even,
      }"
      class="flex flex-col justify-between h-72"
   >
      <div
         :class="{
            'cut_left--end': !even,
            'cut_right--start': even,
         }"
         class="relative hidden md:flex flex-1 cut_left--end rounded-2xl bg-green-300 hover:brightness-150"
      >
         <img
            :src="image"
            alt="background_photo"
            class="rounded-2xl object-cover w-full"
         />
         <div
            :class="{
               'left-4': !even,
               'right-4': even,
            }"
            class="absolute bottom-8"
         >
            {{ car }}
         </div>
      </div>

      <div
         :class="{
            'md:cut_left--start': !even,
            'md:cut_right--end': even,
         }"
         class="flex flex-1 flex-col bg-primary text-black rounded-2xl chakra-petch"
      >
         <div class="flex flex-1 justify-between p-4">
            <div
               :class="{
                  'md:ml-[15%]': !even,
                  'md:mr-[15%]': even,
               }"
               class="text-xl max-w-64"
            >
               {{ description }}
            </div>
            <div
               :class="{
                  'md:mr-[15%]': even,
               }"
               class="text-xl"
            >
               {{ resultDescription }}
            </div>
         </div>

         <div class="flex justify-between">
            <div
               :class="{
                  'md:items-end': !even,
                  'md:items-start': even,
               }"
               class="flex flex-col gap-2 p-4 text-xl opacity-50 w-full"
            >
               <div v-for="(driver, index) in drivers" :key="index">
                  {{ driver }}
               </div>
            </div>

            <div class="flex w-full justify-center p-2 md:hidden">
               <img
                  :src="image"
                  alt="background_photo"
                  class="object-cover w-32 rounded-2xl"
               />
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped></style>
