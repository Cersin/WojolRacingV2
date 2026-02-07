<script lang="ts" setup>
import EnduRacePage from "~/components/endurance/EnduRacePage.vue"
import EnduSponsors from "~/components/endurance/EnduSponsors.vue"
import irtrack from "assets/partners/irtrack.png"
import tilt from "assets/partners/tilt.png"
import sim_masters from "assets/partners/sim_masters.png"
import drive_squad from "assets/partners/drive_squad.png"
import gt from "assets/atlanta/atlanta_car.png"
import kja from "assets/partners/kja.png"
import racing_shop from "assets/partners/racing_shop_logo.png"
import slavgent from "assets/partners/SLAVGENT-biale.png"

const sponsors = [
   {
      url: "https://tilt.pl/",
      image: tilt,
   },
   {
      url: "https://www.instagram.com/kjkdesignn/?igsh=MTltMTFkMGR0MXNubQ%3D%3D",
      image: kja,
   },
   {
      url: "https://drivesquad.pl/",
      image: drive_squad,
   },
   {
      url: "https://www.irtrack.pl/",
      image: irtrack,
   },
   {
      url: "https://www.simmasters.pl/",
      image: sim_masters,
   },
   {
      url: "https://racingshop.pl/pl/",
      image: racing_shop,
   },
   {
      url: "https://slavgent.pl/",
      image: slavgent,
   },
]
</script>

<template>
   <EnduRacePage
      tour-name="DAYTONA LMP2"
      :register-date="new Date('2026-02-15T15:00:00')"
      :start-date="new Date('2026-03-01T14:00:00')"
      sign-up-link="/endurance/signup/lmp2"
      :cars-number="55"
      event-description="The Wojol Racing Endurance Tour returns with a 4-hour LMP2 Test Event at the legendary Daytona International Speedway, held in Assetto Corsa. This event is designed as a true endurance challenge, combining high-speed oval sections with the technical demands of the infield road course.

Daytona is famous for its unique layout, where flat-out banking meets heavy braking zones and slow-speed corners. Consistency, traffic management, and smart strategy will be key, especially during the mandatory long stop and multi-class-style battles within a large grid. The long straights reward efficient drafting, while the infield requires precision and stability under braking.

Teams will compete using the LMP2 URD Loire 07 (2021), with up to two drivers per team, making driver swaps and endurance pacing crucial over the 4-hour race distance. With 50–55 teams expected, this event offers intense competition and a perfect test ahead of future endurance rounds.

Sign-ups are first come, first served, with qualifying and race day both taking place on March 1. Prepare for a fast, tactical, and demanding endurance race at one of the most iconic circuits in motorsport."
      regulations-link="https://docs.google.com/document/d/1LwUEyVQQl2uvjuL3msLqOuU6IkQ_fMN4D4GFlIpPgRU/edit?usp=sharing"
   >
      <template #sponsors>
         <EnduSponsors :sponsors="sponsors"  class="mt-8 "/>
      </template>
   </EnduRacePage>
</template>

<style scoped></style>
