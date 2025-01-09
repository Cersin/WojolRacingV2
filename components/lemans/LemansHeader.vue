<script lang="ts" setup>
import lemans_header from "assets/le_mans/lemans_header.jpeg"

function navigateToSocial(link) {
   window.open(link)
}
</script>

<template>
   <div class="flex">
      <div
         class="mx-4 mt-4 h-[250px] relative rounded-2xl flex-1 max-w-[800px]"
      >
         <img
            :src="lemans_header"
            alt="lemans_header"
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
               Le Mans
            </div>

            <Countdown
               v-if="new Date() < new Date('Jan 04, 2025 12:00:00')"
               v-slot="{ totalHours, minutes, seconds }"
               :date="new Date('Jan 04, 2025 12:00:00')"
               class="text-xl"
            >
               The race starts in: {{ totalHours }}:{{ minutes < 10 ? "0" : ""
               }}{{ minutes }}:{{ seconds }}
            </Countdown>

            <div
               v-if="new Date() > new Date('Jan 04, 2025 12:00:00')"
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
               @click="$router.push('/lemans')"
            />
         </div>
      </div>
   </div>
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
