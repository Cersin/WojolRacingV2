<script lang="ts" setup>
import DottedCircle from "~/components/layout/DottedCircle.vue"
</script>

<template>
   <div class="bg-black p-8 chakra-petch relative">
      <div class="text-4xl text-white">
         <span class="text-primary">Play.</span>Race.Fun.
      </div>

      <div class="yellow_block" />
      <DottedCircle :top="0" right="15%" />
      <DottedCircle left="-5%" size="125px" top="15%" />
   </div>
</template>

<style lang="scss" scoped>
.yellow_block {
   position: absolute;
   right: 0;
   bottom: 0;
   height: 80%;
   width: 25%;
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
