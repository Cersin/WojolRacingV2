<script lang="ts" setup>
import LinkPreview from "~/components/inspira/LinkPreview.vue"
import cammus from "assets/partners/cammus.png"
import overcrest_kids from "assets/partners/lemans/overcrest_kids.png"
import overcrest from "assets/partners/lemans/overcrest.png"
import bth_import_stal from "assets/partners/lemans/bth_import_stal.png"
import another_way from "assets/partners/another_way.png"
import chwietczuk from "assets/partners/lemans/chwietczuk.png"
import drive_squad from "assets/partners/drive_squad.png"
import go_racing from "assets/partners/go_racing.png"
import gobet from "assets/partners/lemans/gobet.png"
import irtrack from "assets/partners/irtrack.png"
import labotiga from "assets/partners/lemans/labotiga.png"
import lempart from "assets/partners/lemans/lempart.png"
import matulka from "assets/partners/lemans/matulka.jpg"
import racetracks from "assets/partners/racetracks_biale.png"
import racingshop from "assets/partners/lemans/racingshop.png"
import sim_masters from "assets/partners/sim_masters.png"
import simfun from "assets/partners/simfun_biale_transparent.png"
import simline from "assets/partners/lemans/simline.png"
import slavgent from "assets/partners/lemans/slavgent.png"
import tilt from "assets/partners/tilt.png"

const sponsors = [
   {
      url: "https://overcrest.pl/",
      image: overcrest,
   },
   {
      url: "https://www.facebook.com/Adrian.Chwietczuk/",
      image: chwietczuk,
      white: true,
   },
   {
      url: "https://lempartracing.com/",
      image: lempart,
   },
   {
      url: "https://www.facebook.com/GOPlusCars/",
      image: gobet,
   },
   {
      url: "https://jakubmatulka.com/",
      image: matulka,
   },
   {
      url: "https://cammusracing.com/",
      image: cammus,
   },
   {
      url: "https://aw-anotherway.pl/",
      image: another_way,
   },
   {
      url: "https://simline.eu/pl/",
      image: simline,
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
      url: "https://bth.pl/en/",
      image: bth_import_stal,
   },
   {
      url: "https://www.simfun.pl/",
      image: simfun,
   },
   {
      url: "https://www.labotiga.pl/",
      image: labotiga,
   },
   {
      url: "https://racetracks.pl/",
      image: racetracks,
   },
   {
      url: "https://racingshop.pl/pl/",
      image: racingshop,
   },
   {
      url: "https://slavgent.pl/",
      image: slavgent,
   },
   {
      url: "https://simmasters.pl/",
      image: sim_masters,
   },
   {
      url: "https://drivesquad.pl/",
      image: drive_squad,
   },
   {
      url: "https://kids.overcrest.pl/",
      image: overcrest_kids,
   },
]
</script>

<template>
   <div>
      <div class="flex flex-wrap gap-8 justify-center items-center">
         <LinkPreview
            v-for="(firm, index) in sponsors"
            :key="index"
            :height="200"
            :url="firm.url"
            :width="400"
         >
            <img
               :class="{ 'bg-white': !!firm?.white }"
               :src="firm.image"
               alt="firm image"
               class="p-1"
               height="100"
               width="100"
            />
         </LinkPreview>
      </div>
   </div>
</template>

<style scoped></style>
