<script lang="ts" setup>
import type { PartnerModel } from "~/types/partners"
import cammus from "~/assets/partners/cammus.png"
import tilt from "~/assets/partners/tilt.png"
import plakatartlab from "~/assets/partners/plakatartlab.png"
import drive_squad from "~/assets/partners/drive_squad.png"
import racetracks from "~/assets/partners/racetracks_biale.png"
import irtrack from "~/assets/partners/irtrack.png"
import difficult from "~/assets/partners/difficult_small.png"
import simracing from "~/assets/partners/simracing_centre.png"
import sim_masters from "~/assets/partners/sim_masters.png"
import kja from "~/assets/partners/kja.png"
import ac_musiclab from "~/assets/partners/ac_music_lab.png"
import racing_shop from "~/assets/partners/racing_shop_logo.png"
import slavgent from "~/assets/partners/SLAVGENT-biale.png"
import simline from "~/assets/partners/simline.png"
import simcenter from "~/assets/partners/simcenter.png"
import speedframes from "~/assets/partners/speedframes.png"

const partners: Array<PartnerModel> = [
   {
      url: "https://cammusracing.com/",
      white: true,
      asset: cammus,
   },
   {
      url: "https://tilt.pl/",
      white: true,
      asset: tilt,
   },
   {
      url: "https://www.instagram.com/kjkdesignn/?igsh=MTltMTFkMGR0MXNubQ%3D%3D",
      white: true,
      asset: kja,
   },
   {
      url: "https://www.plakartlab.pl/",
      white: true,
      asset: plakatartlab,
   },
   {
      url: "https://drivesquad.pl/",
      white: true,
      asset: drive_squad,
   },
   {
      url: "https://racetracks.pl/",
      white: true,
      asset: racetracks,
   },
   {
      url: "https://www.irtrack.pl/",
      white: true,
      asset: irtrack,
   },
   {
      url: "https://www.instagram.com/difficult_js/",
      white: true,
      asset: difficult,
   },
   {
      url: "https://simracing-centre.com/",
      white: true,
      asset: simracing,
   },
   {
      url: "https://www.simmasters.pl/",
      white: true,
      asset: sim_masters,
   },
   {
      url: "https://soundcloud.com/ac-music-lab",
      white: true,
      asset: ac_musiclab,
   },
   {
      url: "https://racingshop.pl/pl/",
      white: true,
      asset: racing_shop,
   },
   {
      url: "https://slavgent.pl/",
      white: true,
      asset: slavgent,
   },
   {
      url: "https://speedframes.pl/",
      white: true,
      asset: speedframes,
   },
   {
      url: "https://simline.eu/pl/",
      white: true,
      asset: simline,
   },
   {
      url: "https://sim-center.pl/",
      white: true,
      asset: simcenter,
   },
]

defineProps({
   itemsToShow: {
      type: Number,
      default: 5,
   },
})
</script>

<template>
   <Carousel
      :autoplay="2000"
      :items-to-show="itemsToShow"
      :wrap-around="true"
      circular
   >
      <Slide v-for="el in partners" :key="el">
         <a :href="el.url" class="cursor-pointer">
            <img
               :src="el.asset"
               :style="
                  !el.white ? 'background-color: rgba(255, 255, 255, 0.2)' : ''
               "
               alt="logo"
               class="px-2 lg:px-6 py-2 object-fill"
               style="height: 80px; width: auto; object-fit: contain"
            />
         </a>
      </Slide>
   </Carousel>
</template>

<style scoped></style>
