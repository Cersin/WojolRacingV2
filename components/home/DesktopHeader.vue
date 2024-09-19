<script lang="ts" setup>
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
         color="rgba(141, 141, 141, 0.25)"
         left="-15%"
         size="400px"
         top="-25%"
      />

      <DottedCircle
         color="rgba(141, 141, 141, 0.25)"
         right="25%"
         size="150px"
         top="-5%"
      />
   </div>
</template>

<style lang="scss" scoped></style>