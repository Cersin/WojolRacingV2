<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()

const { data, status } = await useFetch(
   `${config.public.api_url}api/lemans/${route.params.id}`,
)
</script>

<template>
   <div>
      <UProgress
         v-if="status === 'pending' || status === 'idle'"
         animation="carousel"
         class="p-4 min-h-12 self-center"
      />

      <div v-else-if="status === 'error'">
         Error occured, sorry
      </div>

      <div v-else-if="status ==='success' && data?.data" class="p-4">
         <div class="text-2xl">
            Please copy the link to check your application status later.
         </div>
         <div class="text-xl mt-4">
            Your application id: {{ data.data._id }}
         </div>

         <div class="mt-4 text-xl">
            If you see any errors in the summary, please contact us on discord for changes/corrections.
         </div>

         <div class="mt-8 font-xl">Status: {{ data.data.status}}</div>

         <div class="mt-2">
            Team: {{ data.data.team }}
         </div>

         <div>
            Car: {{ data.data.carType }} {{ data.data?.carGTE }}
         </div>

         <div class="mt-2">
            CEO: {{ data.data.ceo }}
         </div>

         <div>
            Ceo Discord Tag: {{ data.data.ceoDiscordTag }}
         </div>

         <div class="mt-2">
           Team number 1 : {{ data.data.teamNumber1 }}
         </div>
         <div>
            Team number 2 : {{ data.data.teamNumber2 }}
         </div>
         <div>
            Team number 3 : {{ data.data.teamNumber3 }}
         </div>

         <div class="flex flex-col mt-4">
               Drivers:
            <div v-for="(driver, index) in data.data.drivers" :key="driver._id">
               <div class="text-xl">
                  Driver {{ index + 1 }}
               </div>
               <div>
                  Driver name: {{ driver.fullName }}
               </div>
               <div>
                  Driver steamid64: {{ driver.fullName }}
               </div>
               <div>
                  Driver discord tag: {{ driver.discordTag }}
               </div>
            </div>
         </div>

         <div class="mt-2">
            Created date: {{ new Date(data.data.createdAt) }}
         </div>
      </div>
   </div>
</template>

<style scoped>

</style>