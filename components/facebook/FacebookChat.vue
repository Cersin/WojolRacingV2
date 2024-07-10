<script setup lang="ts">
import type { NuxtFacebookChatOptions } from "nuxt-facebook-chat"

const options: NuxtFacebookChatOptions = {
   pageId: "100180625030536", // Your Facebook Page ID
   locale: "pl_PL", // Set the locale for the chat
   themeColor: "#ffeb00", // Customize the chat theme color
}
</script>

<template>
   <div>
      <client-only>
         <nuxt-facebook-chat :options="options" />
      </client-only>
   </div>
</template>

<style scoped></style>
