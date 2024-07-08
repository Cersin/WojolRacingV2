<script setup lang="ts">
import PartnersCarousel from "~/components/partners/PartnersCarousel.vue"
</script>

<template>
   <div class="flex flex-col">
      <div
         class="bg-black text-white max-w-[300px] px-8 py-6 text-nowrap border-bottom rounded-tr-3xl text-xl"
      >
         Nasi partnerzy
      </div>

      <div class="flex">
         <PartnersCarousel
            class="w-11/12 md:w-8/12 bg-black cut_partners max-w-[2500px]"
         />
         <HomeSocials />
      </div>
   </div>
</template>

<style scoped>
.border-bottom {
   position: relative;
   font-family: "Chakra Petch", sans-serif;
}

.border-bottom:before {
   content: "";
   position: absolute;
   right: -25px;
   bottom: 0;
   height: 25px;
   width: 25px;
   background-color: transparent;
   box-shadow: -10px 10px 0 black;
   border-radius: 50%;
}

.cut_partners {
   position: relative;
   border-radius: 0 30px 0 0;
}
.cut_partners:before {
   content: "";
   position: absolute;
   right: -25px;
   top: 0;
   height: 100%;
   width: 30px;
   background-color: black;
   transform: skew(15deg);
   transform-origin: bottom;
   border-radius: 0 30px 0 0;
}
</style>
