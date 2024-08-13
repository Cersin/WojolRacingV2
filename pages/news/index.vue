<script setup>
import sol_nord from "~/assets/endurance/sol_nord.jpg"

definePageMeta({
   name: "Aktualności",
})
</script>

   <template>
      <section class="bg-black dark:text-gray-800">
         <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <NuxtLink to="news/1"  rel="noopener noreferrer" class="rounded block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-primary">
               <img :src="sol_nord" alt="" class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500">
               <div class="p-6 space-y-2 lg:col-span-5">
                  <h3 class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
                  <span class="text-xs dark:text-gray-600">February 19, 2021</span>
                  <p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
               </div>
            </NuxtLink>

            <div class=" grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
               <a v-for="(e, index) in 10" :key="index" rel="noopener noreferrer" href="#" class=" max-w-sm mx-auto group hover:no-underline focus:no-underline bg-primary rounded">
                  <img role="presentation" class="object-cover w-full rounded h-44 dark:bg-gray-500" :src="sol_nord">
                  <div class="p-6 space-y-2">
                     <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
                     <span class="text-xs dark:text-gray-600">January 21, 2021</span>
                     <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
                  </div>
               </a>

            </div>
            <div class="flex justify-center">
               <button type="button" class="px-6 py-3 text-sm rounded-md hover:underline bg-primary dark:text-gray-600">Load more posts...</button>
            </div>
         </div>
      </section>
   </template>

<style scoped>

</style>