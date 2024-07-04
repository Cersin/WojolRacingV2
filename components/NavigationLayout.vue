<script lang="ts" setup></script>

<template>
   <nav class="flex flex-row h-16 items-center bg-black text-white navigation">
      <NuxtLink
         to="/"
         active-class="text-black  bg-primary"
         class="flex items-center gap-10 h-full px-8 hover:bg-primary"
      >
         <img
            alt="WRL"
            class="object-contain h-12"
            src="~/assets/LOGO_WRL.png"
         />

         <div class="text-base font-bold">WOJOL RACING</div>
      </NuxtLink>

      <ul class="flex text-base h-full">
         <NuxtLink
            class="flex items-center px-16 h-full hover:bg-primary"
            active-class="text-black bg-primary"
            to="/a"
            >Formula 1</NuxtLink
         >
         <NuxtLink
            class="flex items-center px-16 h-full hover:bg-primary"
            active-class="text-black bg-primary"
            to="/b"
            >Assetto Corsa</NuxtLink
         >
         <NuxtLink
            class="flex items-center px-16 h-full hover:bg-primary"
            active-class="text-black bg-primary"
            to="/c"
            >Aplikacja</NuxtLink
         >
         <NuxtLink
            class="flex items-center px-16 h-full hover:bg-primary"
            active-class="text-black bg-primary"
            to="/d"
            >Serwery</NuxtLink
         >
      </ul>

      <div class="text-3xl flex-grow flex justify-end">
         <button
            type="button"
            class="text-white m-8 bg-secondary hover:bg-secondary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
         >
            Zaloguj
         </button>
      </div>
   </nav>
</template>

<style scoped lang="scss">
.navigation {
   font-family: "Chakra Petch", sans-serif;
}
.cut {
   clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 100%);
}

.test {
   position: relative;
}
</style>
