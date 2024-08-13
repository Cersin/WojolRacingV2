<script setup>
import sol_nord from "~/assets/endurance/sol_nord.jpg"

const route = useRoute()
</script>

   <template>
      <div class="bg-black">
         <div class="p-5 mx-auto sm:p-10 md:p-16 bg-black dark:text-gray-800">
            <div class="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
               <img :src="sol_nord" alt="" class="w-full h-60 sm:h-96 bg-black object-cover">
               <div class="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-primary">
                  <div class="space-y-2">
                     <span class="text-xs dark:text-gray-600">January 21, 2021</span>
                     <a rel="noopener noreferrer" href="#" class="inline-block text-2xl font-semibold sm:text-3xl">The Best Activewear from the Nordstrom Anniversary Sale</a>
                     <p class="text-xs dark:text-gray-600">By
                        <a rel="noopener noreferrer" href="#" class="text-xs hover:underline">Leroy Jenkins</a>
                     </p>
                  </div>
                  <div class="dark:text-gray-800">
                     <p>Insert the actual text content here...</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </template>

<style scoped>

</style>