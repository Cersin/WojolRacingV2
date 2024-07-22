<script setup lang="ts">
defineProps({
   iconSize: {
      type: String,
      default: "1.5em",
   },
})
</script>

<template>
   <div>
      <Icon class="cursor-pointer" name="logos:tiktok-icon" :size="iconSize" />
      <Icon class="cursor-pointer" name="logos:facebook" :size="iconSize" />
      <Icon class="cursor-pointer" name="logos:twitch" :size="iconSize" />
      <Icon class="cursor-pointer" name="logos:youtube-icon" :size="iconSize" />
      <Icon class="cursor-pointer" name="logos:discord-icon" :size="iconSize" />
      <Icon
         class="cursor-pointer"
         name="skill-icons:instagram"
         :size="iconSize"
      />
   </div>
</template>

<style scoped></style>
