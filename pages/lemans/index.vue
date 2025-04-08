<script lang="ts" setup>
import EnduRacePage from "~/components/endurance/EnduRacePage.vue"
import rally_and_race from "assets/partners/lemans/rally_and_race.png"
import ferrari from "assets/le_mans/ferrari.png"
import overcrest from "assets/partners/lemans/overcrest.png"
import chwietczuk from "assets/partners/lemans/chwietczuk.png"
import lempart from "assets/partners/lemans/lempart.png"
import gobet from "assets/partners/lemans/gobet.png"
import matulka from "assets/partners/lemans/matulka.jpg"
import cammus from "assets/partners/cammus.png"
import hotel_dobrzyce from "assets/partners/lemans/hotel_dobrzyce.png"
import another_way from "assets/partners/another_way.png"
import simline from "assets/partners/lemans/simline.png"
import irtrack from "assets/partners/irtrack.png"
import go_racing from "assets/partners/go_racing.png"
import tilt from "assets/partners/tilt.png"
import bth_import_stal from "assets/partners/lemans/bth_import_stal.png"
import simfun from "assets/partners/simfun_biale_transparent.png"
import labotiga from "assets/partners/lemans/labotiga.png"
import racetracks from "assets/partners/racetracks_biale.png"
import racingshop from "assets/partners/lemans/racingshop.png"
import slavgent from "assets/partners/lemans/slavgent.png"
import sim_masters from "assets/partners/sim_masters.png"
import drive_squad from "assets/partners/drive_squad.png"
import overcrest_kids from "assets/partners/lemans/overcrest_kids.png"
import EnduSponsors from "~/components/endurance/EnduSponsors.vue"

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
      url: "https://hoteldobczyce.pl/",
      image: hotel_dobrzyce,
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
   <EnduRacePage
      regulations-link="https://docs.google.com/document/d/1wk3H6tLaRZpJ-FBFe46CRjOLH7V9GhntvMUKDtEP2Ns/edit?usp=sharing"
      :cars-number="42"
      tour-name="Le Mans"
      :register-date="new Date('Nov 22, 2024 18:00:00')"
     :start-date="new Date('Jan 04, 2025 12:00:00')"
      :media-patronage-src="rally_and_race"
      :car-src="ferrari"
      event-description="Historic event on the iconic Le Mans circuit! Witness the spirit of endurance come alive.
Experience the thrill of racing, exciting challenges, and competitions, with incredible prizes for participants and spectators alike. Don’t miss your chance to be part of sim racing history!"
   >
      <template #sponsors>
         <EnduSponsors :sponsors="sponsors"  class="mt-8 "/>
      </template>
   </EnduRacePage>
</template>

<style scoped></style>
