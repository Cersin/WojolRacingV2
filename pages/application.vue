<script lang="ts" setup>
import DottedCircle from "~/components/layout/DottedCircle.vue"
</script>

<template>
   <div
      class="flex justify-center bg-black p-8 lg:p-16 h-full relative overflow-x-hidden"
   >
      <div class="max-w-[1400px]">
         <DottedCircle left="5%" size="40px" top="5%" />
         <DottedCircle left="90%" size="250px" top="70%" />

         <div class="flex justify-between">
            <div class="flex flex-col gap-8 items-start justify-center">
               <div
                  class="font-extrabold bg-primary text-black text-xl lg:text-5xl px-8 py-4 cut_title"
               >
                  #WRL_APP
               </div>
               <div>Teraz jeszcze łatwiej możesz być na bieżąco!</div>
            </div>

            <img
               alt="app_image"
               class="h-[400px] lg:h-[800px]"
               src="~/assets/wrl_app/wrl_app.png"
            />
         </div>

         <div
            class="overflow-visible grid grid-cols-2 mt-8 md:grid-cols-3 gap-8 w-full"
            style="margin-top: -100px"
         >
            <div class="bg-primary-800 text-black rounded-2xl p-8">
               <div class="font-extrabold text-3xl">01</div>
               <div class="text-base lg:text-xl w-4/5">
                  Pobierz aplikację (wkrótcę dostępna)
               </div>
            </div>

            <div class="bg-primary-500 text-black rounded-2xl p-8">
               <div class="font-extrabold text-3xl">02</div>
               <div class="text-base lg:text-xl w-4/5">
                  Sprawdzaj wyniki i otrzymuj powiadomienia
               </div>
            </div>

            <div class="bg-primary text-black rounded-2xl p-8">
               <div class="font-extrabold text-3xl">03</div>
               <div class="text-base lg:text-xl w-4/5">
                  Zaloguj się aby korzystać ze wszystkich funkcji
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
.cut_title {
   position: relative;
   border-radius: 15px;
}

.cut_title:before {
   content: "";
   position: absolute;
   left: 0;
   top: 0;
   width: 35px;
   height: 100%;
   border-radius: 15px 0 0 15px;
   background-color: #ffeb00;
   transform: skew(15deg);
   transform-origin: bottom;
}
</style>
