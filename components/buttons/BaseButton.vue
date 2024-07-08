<script setup lang="ts">
import { computed } from "vue"

const emit = defineEmits(["click"])

const props = defineProps({
   type: {
      type: String,
      default: "primary",
   },
})

const getClass = computed(() => {
   switch (props.type) {
      case "primary":
         return "text-black bg-primary hover:bg-secondary focus:ring-4 font-thin rounded-lg text-sm px-8 py-2.5 focus:outline-none"
      case "black":
         return "text-primary bg-black hover:bg-secondary hover:text-white  focus:ring-4 font-thin rounded-lg text-sm px-8 py-2.5 focus:outline-none"
      case "secondary":
         return "text-white bg-secondary hover:bg-black hover:text-white focus:ring-4 font-thin rounded-lg text-sm px-8 py-2.5 focus:outline-none"
      case "outline":
         return "text-black outline outline-black outline-2 hover:bg-secondary hover:text-white focus:ring-4 rounded-lg text-sm px-8 py-2.5 focus:outline-none"
   }
})
</script>

<template>
   <button
      v-bind="$attrs"
      type="button"
      :class="getClass"
      @click="emit('click')"
   >
      <slot> </slot>
   </button>
</template>

<style scoped></style>
