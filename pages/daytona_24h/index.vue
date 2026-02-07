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
      tour-name="DAYTONA 24H"
      :register-date="new Date('2026-02-25T20:00:00')"
      :start-date="new Date('2026-04-11T13:00:00')"
      :cars-number="41"
      event-description="The Wojol Racing Endurance Tour: Daytona brings a full 24-hour multiclass endurance race to Assetto Corsa at the legendary Daytona International Speedway. This main event of the season is the ultimate test of speed, consistency, and teamwork.

Daytona’s unique mix of high-speed banking and a technical infield demands precision, smart traffic management, and flawless strategy over day and night racing. Drafting, clean multiclass overtakes, and reliability will be key across the full 24-hour distance.

The field will feature HyperCars (RSS MP-H Callahan V8) and GT3 cars (URD Detroit Coyote), creating intense multiclass battles from start to finish. Only the best-prepared teams will take on one of sim racing’s toughest endurance challenges."
      regulations-link="https://docs.google.com/document/d/1LwUEyVQQl2uvjuL3msLqOuU6IkQ_fMN4D4GFlIpPgRU/edit?usp=sharing"
   >
      <template #sponsors>
         <EnduSponsors :sponsors="sponsors"  class="mt-8 "/>
      </template>
   </EnduRacePage>
</template>

<style scoped></style>
