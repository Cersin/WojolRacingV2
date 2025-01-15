<script setup>
import def from "~/assets/team/default.png"
import wojcikK from "~/assets/team/wojcik k.png"
import wojcikS from "~/assets/team/wojcik s.png"
import kacperski from "~/assets/team/kacperski.png"
import szafranski from "~/assets/team/szafranski.png"
import praczyk from "~/assets/team/praczyk.png"
import stanek from "~/assets/team/stanek.png"
import onik from "~/assets/team/onik.png"
import kawalec from "~/assets/team/kawalec.png"
import helbin from "~/assets/team/helbin.png"
import pres from "~/assets/team/pres.png"
import kowalczyk from "~/assets/team/kowalczyk.png"
import strozecki from "~/assets/team/strozecki.png"
import kamac from "~/assets/team/kamac.png"
import pakula from "~/assets/team/pakula.png"
import kozlowski from "~/assets/team/kozlowski.png"
import kurzak from "~/assets/team/kurzak.png"
import janiczek from "~/assets/team/janiczek.png"
import stalmirski from "~/assets/team/stalmirski.png"
import sloma from "~/assets/team/sloma.png"
import kuczyk from "~/assets/team/kuczyk.png"
import jablonski from "~/assets/team/jablonski.png"

definePageMeta({
   name: "O nas",
})

const teamCategories = {
   Administrator: "Administrator",
   "Administracja F1": "Administracja F1",
   "Administracja Assetto": "Administracja Assetto",
   Komentatorzy: "Komentatorzy",
   Grafika: "Grafika",
}

const teamList = [
   {
      name: "Krzysztof Wójcik",
      type: teamCategories.Administrator,
      image: wojcikK,
   },
   {
      name: "Szymon Wójcik",
      type: teamCategories.Administrator,
      image: wojcikS,
   },
   {
      name: "Piotr Kacperski",
      type: teamCategories.Administrator,
      image: kacperski,
   },
   {
      name: "Kacper Szafrański",
      type: teamCategories.Administrator,
      image: szafranski,
   },
   {
      name: "Szymon Praczyk",
      type: teamCategories["Administracja F1"],
      image: praczyk,
   },
   {
      name: "Rafał Bandura",
      type: teamCategories["Administracja F1"],
      image: praczyk,
   },
   {
      name: "Jakub Stanek",
      type: teamCategories["Administracja F1"],
      image: stanek,
   },
   {
      name: "Mateusz Onik",
      type: teamCategories["Administracja F1"],
      image: onik,
   },
   {
      name: "Szymon Kuczyk",
      type: teamCategories["Administracja F1"],
      image: kuczyk,
   },
   {
      name: "Daniel Słoma",
      type: teamCategories["Administracja F1"],
      image: sloma,
   },
   {
      name: "Jeremiasz Szlosek",
      type: teamCategories["Administracja F1"],
      image: def,
   },
   {
      name: "Klaudiusz Kawalec",
      type: teamCategories["Administracja Assetto"],
      image: kawalec,
   },
   {
      name: "Max Prus",
      type: teamCategories["Administracja Assetto"],
      image: def,
   },
   {
      name: "Krzysztof Helbin",
      type: teamCategories["Administracja Assetto"],
      image: helbin,
   },
   {
      name: "Dominik Jabłoński",
      type: teamCategories["Administracja Assetto"],
      image: jablonski,
   },
   {
      name: "Jakub Pres",
      type: teamCategories.Komentatorzy,
      image: pres,
   },
   {
      name: "Bartosz Kowalczyk",
      type: teamCategories.Komentatorzy,
      image: kowalczyk,
   },
   {
      name: "Jan Stróżecki",
      type: teamCategories.Komentatorzy,
      image: strozecki,
   },
   {
      name: "Bartek Kamać",
      type: teamCategories.Komentatorzy,
      image: kamac,
   },
   {
      name: "Kuba Pakuła",
      type: teamCategories.Komentatorzy,
      image: pakula,
   },
   {
      name: "Kuba Kozłowski",
      type: teamCategories.Komentatorzy,
      image: kozlowski,
   },
   {
      name: "Adam Kurzak",
      type: teamCategories.Komentatorzy,
      image: kurzak,
   },
   {
      name: "Kuba Janiczek",
      type: teamCategories.Grafika,
      image: janiczek,
   },
   {
      name: "Mateusz Stalmirski",
      type: teamCategories.Grafika,
      image: stalmirski,
   },
   {
      name: "Mateusz Sobkowiak",
      type: teamCategories.Grafika,
      image: def,
   },
]
</script>

<template>
   <div class="bg-black p-4">
      <div v-for="(category, index) in teamCategories" :key="index">
         <div class="m-4 text-center text-3xl">
            {{ category }}
         </div>

         <div
            class="flex flex-wrap gap-x-8 gap-y-4 justify-center items-center"
         >
            <div
               v-for="(member, indexTeam) in teamList.filter(
                  (e) => e.type === category,
               )"
               :key="indexTeam"
               class="hover:brightness-150"
            >
               <div class="flex flex-col gap-2 relative">
                  <img
                     :src="member.image"
                     alt="Member image"
                     class="w-auto h-48"
                  />
                  <div class="text-center text-xl font-light opacity-70">
                     {{ member.name }}
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped></style>
