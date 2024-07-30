<script setup lang="ts">
import BaseButton from "~/components/buttons/BaseButton.vue"
import ServerCard from "~/components/servers/ServerCard.vue"
</script>

<template>
   <div class="h-max grid gap-4 m-8 md:m-16">
      <div class="col-span-2 bg">
         <div class="grid items-center" style="grid-template-columns: 1fr 1fr">
            <div class="text-3xl md:text-4xl chakra-petch flex flex-col gap-2">
               <div>
                  HOSTUJEMY
                  <span class="bg-primary text-black rounded-2xl px-3 font-bold"
                     >SERWERY</span
                  >
               </div>
               <div>ASSETTO CORSA!</div>
            </div>

            <div class="flex items-center justify-end">
               <img
                  class="object-scale-down h-full"
                  src="~/assets/servers/servers_person.png"
                  alt="server_image"
               />
            </div>
         </div>
      </div>

      <div class="col-span-2 row-start-2">
         <div class="flex flex-col gap-4">
            <ServerCard
               :number="1"
               link="https://s1.wojolracing.pl/live-timing "
               description="Serwer 1 Publiczny serwer Nordschleife"
            />
            <ServerCard
               :number="2"
               link="https://s1.wojolracing.pl/live-timing "
               description="Serwer 1 Publiczny serwer Nordschleife"
            />
            <ServerCard
               :number="3"
               link="https://s1.wojolracing.pl/live-timing "
               description="Serwer 1 Publiczny serwer Nordschleife"
            />
         </div>
      </div>
   </div>
</template>

<style scoped></style>
