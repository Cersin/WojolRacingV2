<script lang="ts" setup>
import EnduRacePage from "~/components/endurance/EnduRacePage.vue"
import EnduSponsors from "~/components/endurance/EnduSponsors.vue"
import another_way from "assets/partners/another_way.png"
import irtrack from "assets/partners/irtrack.png"
import go_racing from "assets/partners/go_racing.png"
import tilt from "assets/partners/tilt.png"
import racetracks from "assets/partners/racetracks_biale.png"
import p1 from "assets/partners/p1_logo_white.png"
import sim_masters from "assets/partners/sim_masters.png"
import drive_squad from "assets/partners/drive_squad.png"
import gt from "assets/atlanta/atlanta_car.png"

const sponsors = [
   {
      url: "https://aw-anotherway.pl/",
      image: another_way,
   },
   {
      url: "https://www.irtrack.pl/",
      image: irtrack,
   },
   {
      url: "https://go-racing.pl/",
      image: go_racing,
   },
   {
      url: "https://tilt.pl/",
      image: tilt,
   },
   {
      url: "https://racetracks.pl/",
      image: racetracks,
   },
   {
      url: "https://p1racingmodels.pl/",
      image: p1,
   },
   {
      url: "https://simmasters.pl/",
      image: sim_masters,
   },
   {
      url: "https://drivesquad.pl/",
      image: drive_squad,
   },
]
</script>

<template>
   <EnduRacePage
      tour-name="Road Atlanta"
      :register-date="new Date('Oct  27, 2025 00:00:00')"
      :start-date="new Date('Dec 07, 2025 12:00:00')"
      :cars-number="38"
      :car-src="gt"
      event-description="From blind crests to heart-stopping descents, Road Atlanta defines pure racing precision.
Every corner demands focus, every lap tests your control. This is where speed meets skill — where milliseconds decide legends. Get ready to take on one of sim racing’s most iconic circuits and prove you’ve got what it takes."
      regulations-link="https://docs.google.com/document/d/1Gb0bCt5CUDNyhAeKSNI1V6pHrHVDqF8wu61hgSpMFDk/edit?usp=sharing"
   >
      <template #sponsors>
         <EnduSponsors :sponsors="sponsors"  class="mt-8 "/>
      </template>
   </EnduRacePage>
</template>

<style scoped></style>
