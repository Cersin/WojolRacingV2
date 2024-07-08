<script setup lang="ts">
defineProps({
   left: {
      type: [String, Number],
      default: null,
   },
   right: {
      type: [String, Number],
      default: null,
   },
   top: {
      type: [String, Number],
      default: null,
   },
   bottom: {
      type: [String, Number],
      default: null,
   },
   color: {
      type: String,
      default: "rgba(255,235,0,0.5)",
   },
   size: {
      type: String,
      default: "100px",
   },
})
</script>

<template>
   <div class="dotted_circle"></div>
</template>

<style scoped>
.dotted_circle {
   position: absolute;
   right: v-bind(right);
   top: v-bind(top);
   left: v-bind(left);
   bottom: v-bind(bottom);
   width: v-bind(size);
   height: v-bind(size);
   border-radius: 50%;
   border: 2px dotted v-bind(color);
}
</style>
