<script lang="ts" setup></script>

<template>
   <UModal class="chakra-petch">
      <UCard
         :ui="{
            ring: '',
            divide: 'divide-y divide-gray-100 dark:divide-gray-800',
         }"
      >
         <template #header>
            <div class="text-xl">Jak obliczamy Twój rating?</div>
         </template>

         <div class="text-base mb-2">
            Overall rating określa ogólną jakość i umiejętności danego kierowcy.
            Istnieje kilka czynników, które są brane pod uwagę przy liczeniu
            tych ocen:
         </div>
         <ul class="list-disc leading-1 text-sm">
            <li>
               Experience - doświadczenie kierowcy na podstawie liczby wyścigów
               w jakich brał udział w naszej lidze. Im dłużej kierowca startuje,
               tym większe doświadczenie posiada.
            </li>

            <li>
               Pace - Prędkość kierowcy oceniamy na podstawie jego osiągów
               podczas kwalifikacji. Liczona na podstawie ilości wyścigów w
               których braliśmy udział oraz ile z nich ukończyliśmy.
            </li>

            <li>
               Awareness - Świadomość kierowcy odnosi się do jego umiejętności
               rozpoznawania sytuacji na torze, unikania kolizji i reagowania na
               nieprzewidziane sytuacje. Liczona na podstawie ilości wyścigów w
               których braliśmy udział oraz ile z nich ukończyliśmy.
            </li>

            <li>
               Racecraft - Umiejętność wyścigowa kierowcy dotyczy taktyki i
               zdolności do prowadzenia emocjonujących i strategicznych walk na
               torze. Oceniona na podstawie pozycji na mecie!
            </li>

            <li>
               Overall - Jest to zsumowanie doświadczenia kierowcy, gdzie
               największą wagę mają następująco: Racecraft, Pace, Awareness,
               Experience
            </li>
         </ul>
      </UCard>
   </UModal>
</template>

<style scoped></style>
