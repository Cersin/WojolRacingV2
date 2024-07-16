<script lang="ts" setup></script>

<template>
   <nav
      class="flex flex-row min-h-16 h-16 items-center bg-black text-white navigation text-nowrap overflow-hidden"
   >
      <NuxtLink
         to="/"
         active-class="text-black  bg-primary bottom-right-inverted-border "
         class="hidden lg:flex items-center gap-10 h-full px-8 hover:bg-primary hover:text-black hover-bottom-right-inverted-border relative"
      >
         <img
            alt="WRL"
            class="object-contain h-12"
            src="~/assets/LOGO_WRL.png"
         />

         <div class="text-base font-bold">WOJOL RACING</div>
      </NuxtLink>

      <div class="flex lg:hidden items-center gap-10 text-white px-8">
         <img
            alt="WRL"
            class="object-contain h-12"
            src="~/assets/LOGO_WRL.png"
         />

         <div class="text-base font-bold">WOJOL RACING</div>
      </div>

      <ul class="text-base h-full hidden lg:flex">
         <NuxtLink
            class="flex items-center px-8 h-full hover:bg-primary hover:text-black relative hover-bottom-right-inverted-border hover-bottom-left-inverted-border"
            active-class="text-black bg-primary bottom-right-inverted-border bottom-left-inverted-border "
            to="/formula"
            >Formula 1</NuxtLink
         >
         <NuxtLink
            class="flex items-center px-8 h-full hover:bg-primary hover:text-black relative hover-bottom-right-inverted-border hover-bottom-left-inverted-border"
            active-class="text-black bg-primary bottom-right-inverted-border bottom-left-inverted-border"
            to="/b"
            >Assetto Corsa</NuxtLink
         >
         <NuxtLink
            class="flex items-center px-8 h-full hover:bg-primary hover:text-black relative hover-bottom-right-inverted-border hover-bottom-left-inverted-border"
            active-class="text-black bg-primary bottom-right-inverted-border bottom-left-inverted-border"
            to="/e"
            >Aplikacja</NuxtLink
         >
         <NuxtLink
            class="flex items-center px-8 h-full hover:bg-primary hover:text-black relative hover-bottom-right-inverted-border hover-bottom-left-inverted-border"
            active-class="text-black bg-primary bottom-right-inverted-border bottom-left-inverted-border"
            to="/d"
            >Serwery</NuxtLink
         >
      </ul>

      <div class="text-3xl flex-grow flex justify-end">
         <button
            type="button"
            class="text-white m-8 bg-secondary hover:bg-secondary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none hidden lg:block"
         >
            Zaloguj
         </button>
      </div>

      <Icon
         class="cursor-pointer mr-8 hover:bg-secondary lg:hidden"
         name="ic:baseline-menu"
         size="2em"
      />
   </nav>
</template>

<style scoped lang="scss">
.navigation {
   font-family: "Chakra Petch", sans-serif;
}

.cut:before {
   content: "";
   position: absolute;
   top: -5px;
   left: -15px;
   width: 20px;
   height: 100%;
   background-color: black;
   clip-path: polygon(0 0, 100% 0, 100% 100%, 83% 100%);
}

.bottom-right-inverted-border:after {
   content: "";
   position: absolute;
   bottom: 0;
   right: -25px;
   width: 25px;
   height: 25px;
   background-color: transparent;
   box-shadow: -10px 10px 0 #ffeb00;
   border-radius: 50%;
}

.hover-bottom-right-inverted-border:hover:after {
   content: "";
   position: absolute;
   bottom: 0;
   right: -25px;
   width: 25px;
   height: 25px;
   background-color: transparent;
   box-shadow: -10px 10px 0 #ffeb00;
   border-radius: 50%;
}

.hover-bottom-left-inverted-border:hover:before {
   content: "";
   position: absolute;
   bottom: 0;
   left: -25px;
   width: 25px;
   height: 25px;
   background-color: transparent;
   box-shadow: 10px 10px 0 #ffeb00;
   border-radius: 50%;
}

.bottom-left-inverted-border:before {
   content: "";
   position: absolute;
   bottom: 0;
   left: -25px;
   width: 25px;
   height: 25px;
   background-color: transparent;
   box-shadow: 10px 10px 0 #ffeb00;
   border-radius: 50%;
}
</style>
