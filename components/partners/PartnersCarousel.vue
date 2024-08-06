<script setup lang="ts">
import type { PartnerModel } from "~/types/partners"
import anotherway from "~/assets/partners/another_way.png"
import cammus from "~/assets/partners/cammus.png"
import tilt from "~/assets/partners/tilt.png"
import plakatartlab from "~/assets/partners/plakatartlab.png"
import drive_squad from "~/assets/partners/drive_squad.png"
import racetracks from "~/assets/partners/racetracks_biale.png"
import frontszymon from "~/assets/partners/front_szymon.png"
import irtrack from "~/assets/partners/irtrack.png"
import difficult from "~/assets/partners/difficult_small.png"
import simracing from "~/assets/partners/simracing_centre.png"
import p1 from "~/assets/partners/p1_logo_white.png"
import sim_masters from "~/assets/partners/sim_masters.png"
import simfun from "~/assets/partners/simfun_biale_transparent.png"
import go_racing from "~/assets/partners/go_racing.png"
import f_one from "~/assets/partners/F-ONE.png"
import kja from "~/assets/partners/kja.png"
import pe_biale from "~/assets/partners/pe_biale.png"

const partners: Array<PartnerModel> = [
   {
      url: "https://aw-anotherway.pl/",
      white: true,
      asset: anotherway,
   },
   {
      url: "https://www.f-one.com.pl/",
      white: true,
      asset: f_one,
   },
   {
      url: "https://go-racing.pl/",
      white: true,
      asset: go_racing,
   },
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
      url: "https://www.facebook.com/ProjectEndurancePL/",
      white: true,
      asset: pe_biale,
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
      url: "https://frontszymon.pl/",
      white: true,
      asset: frontszymon,
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
      url: "https://p1racingmodels.pl/",
      white: true,
      asset: p1,
   },
   {
      url: "https://www.simmasters.pl/",
      white: true,
      asset: sim_masters,
   },
   {
      url: "https://simfun.pl/",
      white: true,
      asset: simfun,
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
      :items-to-show="itemsToShow"
      :wrap-around="true"
      :autoplay="3000"
      circular
   >
      <Slide v-for="el in partners" :key="el">
         <a class="cursor-pointer" :href="el.url">
            <img
               :src="el.asset"
               alt="logo"
               class="px-2 lg:px-6 py-2"
               :style="
                  !el.white ? 'background-color: rgba(255, 255, 255, 0.2)' : ''
               "
               style="height: 80px; width: auto; object-fit: contain"
            />
         </a>
      </Slide>
   </Carousel>
</template>

<style scoped></style>
