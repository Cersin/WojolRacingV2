<script setup lang="ts">

</script>

<template>
  <nav class="flex flex-row h-20  items-center justify-between p-8">
    <ul class="flex">
      <NuxtLink to="/"   >About</NuxtLink>
    <NuxtLink to="/posts/1">Post 1</NuxtLink>
      <NuxtLink to="/posts/2">Post 2</NuxtLink>
    </ul>
    <img src="~/assets/LOGO_WRL.png" alt="WRL" class="object-contain h-20" />

    <div class="text-3xl">
      test
    </div>
  </nav>
</template>

<style scoped>

</style>