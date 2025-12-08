<script lang="ts" setup>
import EnduRacePage from "~/components/endurance/EnduRacePage.vue"
import EnduSponsors from "~/components/endurance/EnduSponsors.vue"
import irtrack from "assets/partners/irtrack.png"
import tilt from "assets/partners/tilt.png"
import racetracks from "assets/partners/racetracks_biale.png"
import sim_masters from "assets/partners/sim_masters.png"
import drive_squad from "assets/partners/drive_squad.png"
import speedframes from "assets/partners/speedframes.png"
import gt from "assets/atlanta/atlanta_car.png"
import cammus from "~/assets/partners/cammus.png"
import kja from "assets/partners/kja.png"
import plakatartlab from "assets/partners/plakatartlab.png"
import simracing from "assets/partners/simracing_centre.png"
import ac_musiclab from "assets/partners/ac_music_lab.png"
import racing_shop from "assets/partners/racing_shop_logo.png"
import slavgent from "assets/partners/SLAVGENT-biale.png"
import simline from "assets/partners/simline.png"
import simcenter from "assets/partners/simcenter.png"

const sponsors = [
   {
      url: "https://cammusracing.com/",
      image: cammus,
   },
   {
      url: "https://tilt.pl/",
      image: tilt,
   },
   {
      url: "https://www.instagram.com/kjkdesignn/?igsh=MTltMTFkMGR0MXNubQ%3D%3D",
      image: kja,
   },
   {
      url: "https://www.plakartlab.pl/",
      image: plakatartlab,
   },
   {
      url: "https://drivesquad.pl/",
      image: drive_squad,
   },
   {
      url: "https://racetracks.pl/",
      image: racetracks,
   },
   {
      url: "https://www.irtrack.pl/",
      image: irtrack,
   },
   {
      url: "https://simracing-centre.com/",
      image: simracing,
   },
   {
      url: "https://www.simmasters.pl/",
      image: sim_masters,
   },
   {
      url: "https://soundcloud.com/ac-music-lab",
      image: ac_musiclab,
   },
   {
      url: "https://racingshop.pl/pl/",
      image: racing_shop,
   },
   {
      url: "https://slavgent.pl/",
      image: slavgent,
   },
   {
      url: "https://speedframes.pl/",
      image: speedframes,
   },
   {
      url: "https://simline.eu/pl/",
      image: simline,
   },
   {
      url: "https://sim-center.pl/",
      image: simcenter,
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
