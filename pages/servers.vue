<script lang="ts" setup>
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
                  alt="server_image"
                  class="object-scale-down h-full"
                  src="~/assets/servers/servers_person.png"
               />
            </div>
         </div>
      </div>

      <div class="col-span-2 row-start-2">
         <div class="flex flex-col gap-4">
            <ServerCard
               :number="1"
               description="Serwer 1 Publiczny serwer Nordschleife"
               link="https://s1.wojolracing.pl/live-timing "
            />
            <ServerCard
               :number="2"
               description="Serwer 1 Publiczny serwer Nordschleife"
               link="https://s1.wojolracing.pl/live-timing "
            />
            <ServerCard
               :number="3"
               description="Serwer 1 Publiczny serwer Nordschleife"
               link="https://s1.wojolracing.pl/live-timing "
            />
         </div>
      </div>
   </div>
</template>

<style scoped></style>
