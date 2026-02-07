<script setup>
const events = ["Endurance Tour: Daytona 24H", "Endurance Tour: Daytona LMP2", "Endurance Tour: Road Atlanta", "Endurance Tour: Sebring", "Endurance Tour: Le Mans", "Lempart Racing Cup", "AMERICANA 500", "GT300 Cup", "Drive Squad Super S Cup"]

const eventModel = defineModel("event", {
   type: [String, Number],
   default: null,
})

onMounted(() => {
   eventModel.value = events[0]
})
</script>

<template>
   <USelectMenu
      v-model="eventModel"
      :options="events"
      class="bg-primary text-black rounded min-w-24 z-40"
      color="black"
      placeholder="Event"
      searchable
      size="md"
   >
      <template #label>
         <span class="text-black">Event: {{ eventModel }}</span>
      </template>
   </USelectMenu>
</template>

<style scoped></style>
