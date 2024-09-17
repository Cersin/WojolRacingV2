<template>
   <div class="flex flex-col h-full">
      <NavigationLayout />
      <div class="p-4 md:p-8">
         <AdminSidebar/>
      </div>

      <NuxtPage class="flex-grow p-4 md:p-8" />

      <UNotifications />
      <UModals />
   </div>
</template>

<script setup>
import NavigationLayout from "~/components/NavigationLayout.vue"
</script>

<style>
.page-enter-active,
.page-leave-active {
   transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
   opacity: 0;
   filter: blur(1rem);
}

.box {
   display: flex;
   flex-flow: column;
   height: 100%;
}

.box .row {
   border: 1px dotted grey;
}

.box .row.header {
   flex: 0 1 auto;
}

.box .row.content {
   flex: 1 1 auto;
}

.box .row.footer {
   flex: 0 1 40px;
}
</style>
