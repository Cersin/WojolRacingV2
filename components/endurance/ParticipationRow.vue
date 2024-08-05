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
      class="flex flex-col justify-between h-72"
      :class="{
      'md:flex-row-reverse': even,
      'md:flex-row': !even,
      }">
      <div
         class="relative hidden md:flex flex-1  cut_left--end  rounded-2xl bg-green-300"
         :class="{
         'cut_left--end': !even,
         'cut_right--start': even,
         }"
      >
         <img class="rounded-2xl object-cover w-full" alt="background_photo" :src="image" />
         <div
            class="absolute bottom-8"
            :class="{
              'left-4': !even,
              'right-4': even,
            }"
         >{{ car }}</div>
      </div>

      <div
         class="flex flex-1  flex-col bg-primary text-black  rounded-2xl chakra-petch"
         :class="{
         'md:cut_left--start': !even,
         'md:cut_right--end': even,
         }"
      >
         <div
            class="flex flex-1 justify-between p-4"
         >
            <div
               class="text-xl  max-w-64"
               :class="{
              'md:ml-24 lg:ml-34 xl:ml-56': !even,
              'md:mr-24': even,
            }"
            >{{ description }}</div>
            <div
               class="text-xl"
               :class="{
              'md:mr-24 xl:mr-56': even,
            }"
            >{{ resultDescription }}</div>
         </div>

         <div class="flex  justify-between">
            <div
               class="flex flex-col gap-2  p-4 text-xl opacity-50 w-full"
               :class="{
              'md:items-end': !even,
              'md:items-start': even,
            }"
            >
               <div v-for="(driver, index) in drivers" :key="index">
                  {{ driver }}
               </div>
            </div>

            <div class="flex w-full justify-center p-2 md:hidden">
               <img class=" object-cover w-32  rounded-2xl" alt="background_photo" :src="image" />
            </div>
         </div>
      </div>
   </div>

</template>

<style scoped>

</style>