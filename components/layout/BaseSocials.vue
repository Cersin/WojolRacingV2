<script setup lang="ts">
defineProps({
   iconSize: {
      type: String,
      default: "1.5em",
   },
})

function navigateToSocial(link) {
   window.open(link)
}
</script>

<template>
   <div>
      <Icon
         :size="iconSize"
         class="cursor-pointer"
         name="logos:discord-icon"
         @click="navigateToSocial('https://discord.com/invite/6MSNv53ekR')"
      />
      <Icon
         :size="iconSize"
         class="cursor-pointer"
         name="logos:facebook"
         @click="navigateToSocial('https://www.facebook.com/wojolracing')"
      />
      <Icon
         :size="iconSize"
         class="cursor-pointer"
         name="logos:youtube-icon"
         @click="
            navigateToSocial(
               'https://www.youtube.com/channel/UC73euqkfm_O-S_jsCQk7Kxg',
            )
         "
      />
      <Icon
         class="cursor-pointer"
         name="skill-icons:instagram"
         :size="iconSize"
         @click="navigateToSocial('https://www.instagram.com/wojolracing/')"
      />
      <Icon
         :size="iconSize"
         class="cursor-pointer"
         name="logos:twitch"
         @click="navigateToSocial('https://www.twitch.tv/wojolracing')"
      />
      <Icon
         :size="iconSize"
         class="cursor-pointer"
         name="logos:tiktok-icon"
         @click="navigateToSocial('https://www.tiktok.com/@wojolracing')"
      />
   </div>
</template>

<style scoped></style>
