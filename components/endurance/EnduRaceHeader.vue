<script lang="ts"  setup>
import sebring_header from "assets/sebring/sebring_header.webp"
import { motion } from "motion-v"

defineProps({
   tourName: {
      type: String,
      required: true,
   },
   startDate: {
      type: Date,
      required: true,
   },
})

function navigateToSocial(link) {
   window.open(link)
}
</script>

<template>

   <motion.div
      :whileHover="{ scale: 1.1 }"
      :whilePress="{ scale: 0.95 }"
      :initial="{ opacity: 0, scale: 1.2, x: '-100%'  }"
      :whileInView="{ opacity: 1, scale: 1, x: '0%'}"g
      :in-view-option="{ once: true }"
      :transition="{ duration: 1.2 }"
      class="flex">
      <div
         class="mx-4 mt-4 h-[250px] relative rounded-2xl flex-1 max-w-[800px]"
      >
         <img
            :src="sebring_header"
            alt="sebring_header"
            class="object-cover rounded-2xl"
            style="height: 100%; width: 100%; filter: brightness(70%)"
         />

         <div
            class="absolute top-0 left-0 ml-4 w-full h-full flex flex-col justify-center column chakra-petch"
         >
            <div
               class="text-3xl font-bold"
               style="
                  text-shadow:
                     1px 2px 0 black,
                     1px 1px 0;
               "
            >
               ENDURANCE TOUR:
            </div>
            <div
               class="text-3xl text-primary font-bold"
               style="
                  text-shadow:
                     1px 2px 0 black,
                     1px 1px 0;
               "
            >
               {{ tourName }}
            </div>

            <Countdown
               v-if="new Date() < startDate"
               v-slot="{ totalHours, minutes, seconds }"
               :date="startDate"
               class="text-xl"
            >
               The race starts in: {{ totalHours }}:{{ minutes < 10 ? "0" : ""
               }}{{ minutes }}:{{ seconds }}
            </Countdown>

            <div
               v-if="new Date() > startDate"
               class="cursor-pointer z-50 text-xl"
               @click="navigateToSocial('https://www.twitch.tv/wojolracing')"
            >
               Watch race on twitch:
               <Icon
                  class="ml-2 bg-white p-1 rounded-md"
                  name="logos:twitch"
                  size="28px"
               />
            </div>
         </div>

         <div class="yellow_block flex justify-center items-center p-4">
            <UButton
               class="z-50"
               label="CHECK AND JOIN"
               trailing-icon="i-heroicons-arrow-right-circle-16-solid"
               @click="$router.push('/sebring')"
            />
         </div>
      </div>
   </motion.div>
</template>

<style lang="scss" scoped>
.yellow_block {
   position: absolute;
   right: 0;
   bottom: 0;
   height: 30%;
   background-color: #ffeb00;
   border-radius: 30px 0 0 0;

   &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: -30px;
      width: 30px;
      height: 30px;
      background-color: transparent;
      box-shadow: 10px 10px 0 #ffeb00;
      border-radius: 50%;
   }
}
</style>
