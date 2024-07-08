<script setup lang="ts">
import HomeDescription from "~/components/home/HomeDescription.vue"
import HomeButtons from "~/components/home/HomeButtons.vue"
import DottedCircle from "~/components/layout/DottedCircle.vue"
</script>

<template>
   <div class="relative">
      <div class="text-6xl text-white chakra-petch">
         <span class="text-black">Play.</span>Race.Fun.
      </div>

      <HomeDescription />
      <HomeButtons />

      <DottedCircle
         top="-25%"
         left="-15%"
         size="400px"
         color="rgba(141, 141, 141, 0.25)"
      />

      <DottedCircle
         top="-5%"
         right="25%"
         size="150px"
         color="rgba(141, 141, 141, 0.25)"
      />
   </div>
</template>

<style scoped lang="scss"></style>
