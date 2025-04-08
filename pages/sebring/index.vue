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
import gt from "assets/sebring/gt.png"

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
      tour-name="Sebring"
      :register-date="new Date('Apr 13, 2025 12:00:00')"
      :start-date="new Date('May 17, 2025 11:30:00')"
      :cars-number="20"
      :car-src="gt"
      event-description="From bumpy runways to legendary battles, Sebring is where endurance racing was born.
Now it’s your turn to take on the challenge — experience high-stakes sim racing, intense competition, and unforgettable moments."
      regulations-link="https://docs.google.com/document/d/1oIj2gv5NqBFhejlK90Dj6sXUO76wPCm2yvJINvK5ZgY/edit?usp=sharing"
   >
      <template #sponsors>
         <EnduSponsors :sponsors="sponsors"  class="mt-8 "/>
      </template>
   </EnduRacePage>
</template>

<style scoped></style>
