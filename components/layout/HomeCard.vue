<script lang="ts" setup>
import { motion } from "motion-v"

defineProps({
   description: {
      type: String,
      default: "",
   },
   shadow: {
      type: Boolean,
      default: false,
   },
   shadowDirection: {
      type: String,
      default: "top-left",
   },
   imgSrc: {
      type: String,
      default: null,
   },
})

const emit = defineEmits(["click"])
</script>

<template>
   <motion.div
      :whileHover="{ scale: 1.1 }"
      :whilePress="{ scale: 0.95 }"
      class="relative rounded-2xl cursor-pointer drop-shadow-xl"
      v-bind="$attrs"
      @click="emit('click')"
   >
      <div
         v-if="shadow"
         :class="{
            'shadow-top-left': shadowDirection === 'top-left',
            'shadow-bottom-left': shadowDirection === 'bottom-left',
            'shadow-top-right': shadowDirection === 'top-right',
            'shadow-bottom-right': shadowDirection === 'bottom-right',
         }"
         class="shadow rounded-2xl overflow-hidden"
      />

      <img
         v-if="imgSrc"
         :src="imgSrc"
         alt="photo"
         class="w-full h-full object-cover object-center grayscale hover:grayscale-0 rounded-2xl"
      />

      <slot />

      <div
         class="description absolute bottom-0 right-0 text-white p-2 font-light"
      >
         {{ description }}
      </div>
   </motion.div>
</template>

<style lang="scss" scoped>
.shadow {
   position: absolute;

   right: 0;
   height: 100%;
   width: 100%;
   background-color: rgba(0, 0, 0, 0.08);

   &-top-left {
      top: -8%;
      left: -8%;
   }

   &-bottom-left {
      bottom: -8%;
      left: -8%;
   }

   &-top-right {
      top: -8%;
      right: -8%;
   }

   &-bottom-right {
      bottom: -8%;
      right: -8%;
   }
}
</style>
