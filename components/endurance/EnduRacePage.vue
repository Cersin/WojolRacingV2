<script setup lang="ts">
import TextGenerateEffect from "~/components/inspira/TextGenerateEffect.vue"
import BaseButton from "~/components/buttons/BaseButton.vue"
import TextHighlight from "~/components/inspira/TextHighlight.vue"
import { motion } from "motion-v"

defineProps({
   startDate: {
      type: Date,
      required: true,
   },
   registerDate: {
      type: Date,
      required: true,
   },
   tourName: {
      type: String,
      required: true,
   },
   carsNumber: {
      type: Number,
      required: true,
   },
   rewardPrice: {
      type: Number,
      default: null,
   },
   regulationsLink: {
      type: String,
      required: true,
   },
   mediaPatronageSrc: {
      type: String,
      default: null,
   },
   carSrc : {
      type: String,
      default: null,
   },
   eventDescription: {
      type: String,
      required: true,
   },
   signUpLink: {
      type: String,
      default: null,
   }
})

function navigateToSocial(link: string) {
   window.open(link)
}

function formatCountdown(totalHours: number, minutes: number, _seconds: number): string {
   const days = Math.floor(totalHours / 24)
   const hours = totalHours % 24

   const result = []
   if (days > 0) result.push(`${days} day${days !== 1 ? 's' : ''}`)
   if (hours > 0) result.push(`${hours} hour${hours !== 1 ? 's' : ''}`)
   if (minutes > 0 || result.length === 0) result.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`)

   return result.join(' ')
}
</script>

<template>
   <div class="bg-black flex justify-center">
      <div class="py-8 p-4 md:p-8 lg:p-16 max-w-[1400px]">
         <div class="flex justify-between chakra-petch">
            <div class="flex flex-col items-center justify-center">
               <div class="space-y-4">
                  <div class="text-4xl md:text-5xl lg:text-6xl font-bold">
                     ENDURANCE TOUR:
                  </div>

                  <div
                     class="text-black text-2xl md:text-3xl lg:text-5xl flex justify-start"
                  >
                     <TextHighlight
                        class="rounded-lg bg-gradient-to-bl from-primary-300 to-primary p-2"
                     >{{ tourName }}
                     </TextHighlight>
                  </div>
               </div>
            </div>

            <div>
               <div
                  class="mb-2 text-2xl md:text-3xl lg:text-4xl text-primary flex flex-col items-end"
               >
                  <div
                     v-if="new Date() < startDate"
                     class="text-sm md:text-xl text-gray-300"
                  >
                     RACE STARTS IN
                  </div>
                  <div
                     v-if="new Date() > startDate"
                     class="text-sm md:text-xl text-gray-300"
                  >
                     RACE STARTS NOW
                  </div>
                  <Countdown
                     v-if="new Date() < startDate"
                     v-slot="{ totalHours, minutes, seconds }"
                     :date="startDate"
                  >
                     {{ formatCountdown(totalHours, minutes, seconds) }}
                  </Countdown>
                  <BaseButton
                     v-if="new Date() > startDate"
                     @click="
                        navigateToSocial('https://www.twitch.tv/wojolracing')
                     "
                  >Watch
                  </BaseButton>
               </div>
               <div
                  v-if="new Date() < startDate"
                  class="text-2xl md:text-3xl lg:text-4xl text-primary flex flex-col items-end"
               >
                                    <div
                                       v-if="new Date() < registerDate"
                                       class="text-sm md:text-xl text-gray-300"
                                    >
                                       SIGN UP IN
                                    </div>
                                    <div
                                       v-if="new Date() > registerDate"
                                       class="text-sm md:text-xl text-gray-300"
                                    >
                                       SIGN UP NOW
                                    </div>
                  <Countdown
                     v-if="new Date() < registerDate"
                     v-slot="{ totalHours, minutes, seconds }"
                     :date="registerDate"
                  >
                     {{ formatCountdown(totalHours, minutes, seconds) }}
                  </Countdown>
                                    <BaseButton
                                       v-if="new Date() > registerDate"
                                       @click="$router.push(signUpLink ? signUpLink : '/endurance/signup')"
                                       >Sign up
                                    </BaseButton>
               </div>
            </div>
         </div>

         <div class="flex justify-between flex-col md:flex-row mt-8 relative">
            <div class="flex-1">
               <TextGenerateEffect
                  class="mr-16 lg:mr-32 text-gray-300"
                  :words="eventDescription"
               />
            </div>

            <div
            >
               <div
                  class="flex items-center p-2 w-[300px] lg:w-[300px] text-sm lg:text-lg"
               >
                  <Icon
                     class="mr-2"
                     name="ic:baseline-directions-car"
                     size="1.5em"
                  />
                  {{ carsNumber }} cars
               </div>

               <div
                  v-if="rewardPrice"
                  class="flex items-center p-2 w-[300px] lg:w-[300px] text-sm lg:text-lg"
               >
                  <Icon
                     class="mr-2"
                     name="ic:baseline-attach-money"
                     size="1.5em"
                  />
                  <span class="font-bold">+{{ rewardPrice }} PLN</span
                  ><span>&nbsp;in rewards</span>
               </div>

               <a
                  class="flex items-center cursor-pointer p-2 w-[300px] lg:w-[300px] text-sm lg:text-lg"
                  :href="regulationsLink"
               >
                  <Icon class="mr-2" name="mdi:file-document" size="1.5em" />
                  Regulations
               </a>

               <div v-if="mediaPatronageSrc" class="absolute bottom-0 right-0 m-2">
                  <img
                     :src="mediaPatronageSrc"
                     alt="firm image"
                     class="p-2 rounded-xl bg-white"
                     height="100"
                     width="100"
                  />
               </div>
            </div>

            <div v-if="carSrc">
               <motion.img
                  :initial="{  x: '-100%'  }"
                  :whileInView="{ x: '0%'}"
                  :in-view-option="{ once: true }"
                  :transition="{ duration: 1.2 }"
                  alt="ferrari_hypercar"
                  class="w-[400px] lg:w-[600px] xl:w-[800px] mt-14 xl:mt-0 h-auto md:absolute ml-auto mr-auto left-0 right-0 top-1/4 text-center z-40"
                  :src="carSrc"
               />
               <div
                  class="invisible md:visible md:absolute md:w-[370px] lg:w-[570px] xl:w-[770px] h-[60px] bottom-[150px] lg:bottom-[170px] xl:bottom-[120px] left-0 right-0 ml-auto mr-auto text-center bg-primary z-30 rounded-2xl"
                  style="
                     background: rgb(255, 235, 0);
                     background: linear-gradient(
                        0deg,
                        rgba(255, 235, 0, 0.1) 0%,
                        rgba(11, 11, 4, 0.1) 100%
                     );
                     box-shadow: 8px 8px 24px 6px rgba(255, 235, 0, 0.1);
                  "
               />
            </div>
         </div>

         <slot name="sponsors" />
      </div>
   </div>
</template>

<style scoped>

</style>