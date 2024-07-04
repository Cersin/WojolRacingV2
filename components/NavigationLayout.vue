<script lang="ts" setup></script>

<template>
   <nav class="flex flex-row h-16 items-center bg-black text-white navigation">
      <NuxtLink
         to="/"
         active-class="text-black  bg-yellow-400"
         class="flex items-center gap-10 h-full px-8"
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
            class="flex items-center px-16 h-full hover:bg-yellow-400"
            active-class="text-black bg-yellow-400"
            to="/a"
            >Formula 1</NuxtLink
         >
         <NuxtLink
            class="flex items-center px-16 h-full hover:bg-yellow-400"
            active-class="text-black bg-yellow-400"
            to="/b"
            >Assetto Corsa</NuxtLink
         >
         <NuxtLink
            class="flex items-center px-16 h-full hover:bg-yellow-400"
            active-class="text-black bg-yellow-400"
            to="/c"
            >Aplikacja</NuxtLink
         >
         <NuxtLink
            class="flex items-center px-16 h-full hover:bg-yellow-400"
            active-class="text-black bg-yellow-400"
            to="/d"
            >Serwery</NuxtLink
         >
      </ul>

      <div class="text-3xl flex-grow flex justify-end">
         <button
            type="button"
            class="text-white m-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
