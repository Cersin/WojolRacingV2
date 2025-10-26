<template>
   <div>
   <div v-if="status === 'pending' && !data">
      <div>
         Loading...
      </div>
   </div>
      <div v-else-if="status === 'error'">
         Error occured. Sorry.
      </div>
   <div v-else-if="data" class="p-8">
      <UCard class="mb-4">
         <div class="flex flex-wrap gap-6 items-center justify-between">
            <div>
               <div class="text-lg font-semibold">{{ data.serverInfo.serverName }}</div>
               <div class="text-sm text-gray-500">Track: <span class="font-medium">{{ data.serverInfo.track }}</span></div>
            </div>
            <div class="flex flex-wrap gap-4 items-center">
               <div class="flex items-center gap-1">
                  <UIcon name="i-heroicons-sun" class="text-yellow-400 w-5 h-5" />
                  <span class="font-medium">{{ data.serverInfo.ambientTemp }}°C</span>
                  <span class="text-xs text-gray-400">Ambient</span>
               </div>
               <div class="flex items-center gap-1">
                  <UIcon name="i-heroicons-fire" class="text-orange-500 w-5 h-5" />
                  <span class="font-medium">{{ data.serverInfo.roadTemp }}°C</span>
                  <span class="text-xs text-gray-400">Road</span>
               </div>
               <div class="flex items-center gap-1">
                  <UIcon name="i-heroicons-flag" class="text-green-600 w-5 h-5" />
                  <span class="font-medium">{{ data.serverInfo.laps }}</span>
                  <span class="text-xs text-gray-400">Laps</span>
               </div>
               <div class="flex items-center gap-1">
                  <UIcon name="i-heroicons-clock" class="text-blue-500 w-5 h-5" />
                  <span class="font-medium">{{ data.serverInfo.timeElapsed }}</span>
                  <span class="text-xs text-gray-400">Session</span>
               </div>
               <div class="flex items-center gap-1">
                  <UIcon name="i-heroicons-user-group" class="text-fuchsia-500 w-5 h-5" />
                  <span class="font-medium">{{ data.serverInfo.connectedDriversCount }}</span>
                  <span class="text-xs text-gray-400">Drivers</span>
               </div>
            </div>
         </div>
      </UCard>

      <UCard>
         <template #header>
            <div class="flex justify-between items-center">
               <h2 class="text-xl font-bold">🏁 Live Leaderboard</h2>
            </div>
         </template>

         <UTable
            :rows="data.drivers"
            :columns="columns"
            :loading="status === 'pending'"
            class="text-sm"
         >
            <template #isOnline-data="{ row }">
               <UIcon
                  :name="row.isOnline ? 'i-heroicons-check-circle-solid' : 'i-heroicons-x-circle-solid'"
                  :class="row.isOnline ? 'text-green-500 w-5 h-5' : 'text-red-500 w-5 h-5'"
               />
            </template>

            <template #isInPits-data="{ row }">
               <UIcon
                  :name="row.isInPits ? 'i-heroicons-wrench-screwdriver-solid' : 'i-heroicons-x-circle-solid'"
                  :class="row.isInPits ? 'text-yellow-400 w-5 h-5' : 'text-red-500 w-5 h-5'"
               />
            </template>

            <template #bestSplits-data="{ row }">
               <div class="flex flex-col gap-1">
                  <span v-for="(sector, i) in row.bestSplits" :key="i" :class="sectorClass(sector)">{{ sector.time }}</span>
               </div>
            </template>
            <template #currentSplits-data="{ row }">
               <div class="flex flex-col text-center items-start gap-1">
                  <span v-for="(sector, i) in row.currentSplits" :key="i" :class="sectorClass(sector)">{{ sector.time }}</span>
               </div>
            </template>
            <template #ping-data="{ row }">
               <span>{{ row.ping ?? '-' }}</span>
            </template>
            <template #topSpeedBestLap-data="{ row }">
               <span>{{ row.topSpeedBestLap ?? '-' }}</span>
            </template>
         </UTable>

         <template #footer>
            <p class="text-xs text-gray-400">Data refreshes every 30  seconds</p>
         </template>
      </UCard>
   </div>

   </div>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { DriverRow, Sector } from "~/types/live-timing"
const config = useRuntimeConfig()
const route = useRoute()

const urls = ['http://188.227.170.54:9300', 'https://51.77.43.82:50226', 'https://116.202.87.185:50580', 'http://188.227.170.48:9772']

const { data, refresh, status } = await useFetch(
   `${config.public.api_url}api/live-timing`,
   {
      params: {
        server: urls[+route.params.server],
      },
      transform: (res) => {
         const data = res.data
         const connected = data.ConnectedDrivers || []
         const disconnected = data.DisconnectedDrivers || []

         const onlineDrivers = connected.map((d: any) => mapDriver(d, true))
         const offlineDrivers = disconnected.map((d: any) => mapDriver(d, false))

         const drivers = [...onlineDrivers, ...offlineDrivers].sort((a, b) => {
            if (a.isOnline !== b.isOnline) return a.isOnline ? -1 : 1
            if (a.position === '-' || b.position === '-') return 0
            return Number(a.position) - Number(b.position)
         })

         const connectedDriversCount = Array.isArray(data.ConnectedDrivers) ? data.ConnectedDrivers.length : 0

         return {
            drivers,
            serverInfo: {
               connectedDriversCount,
               serverName: data.ServerName || '-',
               roadTemp: data.RoadTemp || '-',
               track: (data.Track || '').toUpperCase(),
               ambientTemp: data.AmbientTemp || '-',
               laps: data.Laps || '-',
               sessionTime: data.Time || '-',
               timeElapsed: formatMilliseconds( data.ElapsedMilliseconds || 0),
            }
         }
      },
   }
)

function formatMilliseconds(ms) {
   let totalSeconds = Math.floor(ms / 1000);
   let hours = Math.floor(totalSeconds / 3600);
   let minutes = Math.floor((totalSeconds % 3600) / 60);
   let seconds = totalSeconds % 60;

   // Pad with leading zeros if needed
   hours = String(hours).padStart(2, '0');
   minutes = String(minutes).padStart(2, '0');
   seconds = String(seconds).padStart(2, '0');

   return `${hours}:${minutes}:${seconds}`;
}

function formatCountdown(totalMs, elapsedMs) {
   const remainingMs = Math.max(0, totalMs - elapsedMs);
   const totalSeconds = Math.floor(remainingMs / 1000);

   const days = Math.floor(totalSeconds / 86400);
   const hours = Math.floor((totalSeconds % 86400) / 3600);
   const minutes = Math.floor((totalSeconds % 3600) / 60);
   const seconds = totalSeconds % 60;

   const pad = (num) => String(num).padStart(2, '0');

   return `${days} days + ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function formatElapsedTime(ms) {
   const totalSeconds = Math.floor(ms / 1000);

   const days = Math.floor(totalSeconds / 86400);
   const hours = Math.floor((totalSeconds % 86400) / 3600);
   const minutes = Math.floor((totalSeconds % 3600) / 60);
   const seconds = totalSeconds % 60;

   // Format z zerami wiodącymi
   const pad = (num) => String(num).padStart(2, '0');

   return `${days} days + ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function formatNano(nano: number): string {
   if (!nano || nano <= 0) return '-'
   const ms = nano / 1e6
   const minutes = Math.floor(ms / 60000)
   const seconds = ((ms % 60000) / 1000).toFixed(3).padStart(6, '0')
   return `${minutes}:${seconds}`
}

function parseSplits(splits: any): Sector[] {
   if (!splits) return []
   return Object.values(splits).map((split: any) => {
      let time = '-'
      if (split.SplitTime) time = formatNano(split.SplitTime)
      else if (typeof split === 'number') time = formatNano(split)
      return {
         time,
         isBest: split.IsBest,
         isDriverBest: split.IsDriversBest,
         cuts: split.Cuts > 0
      }
   })
}

function mapDriver(driver: any, isOnline: boolean) {
   const model = driver.CarInfo.CarModel
   const carData = driver.Cars[model]
   const bestSplits = parseSplits(carData.BestLapSplits)
   const currentSplits = parseSplits(carData.CurrentLapSplits)
   return {
      position: driver.Position ?? '-',
      name: driver.CarInfo.DriverName,
      car: driver.CarInfo.CarName || model,
      bestLap: formatNano(carData.BestLap),
      lastLap: formatNano(carData.LastLap),
      laps: driver.TotalNumLaps || 0,
      split: driver.Split || '-',
      isOnline,
      isInPits: driver.IsInPits ?? false,
      NumPits: driver.NumPits ?? 0,
      bestSplits: bestSplits,
      currentSplits: currentSplits,
      ping: driver.Ping ?? null,
      topSpeedBestLap: carData.TopSpeedBestLap ? Number(carData.TopSpeedBestLap.toFixed(2)) : null
   }
}

const rows = ref<DriverRow[]>([])

const sessionTime = ref(0)

const formattedTime = computed(() => {
   if (!data.value?.time || data.value?.time <= 0) return '-'
   const ms = sessionTime.value
   const minutes = Math.floor(ms / 60000)
   const seconds = ((ms % 60000) / 1000).toFixed(0).padStart(2, '0')
   return `${minutes}:${seconds}`
})

function sectorClass(sector: Sector) {
   if (!sector) return ''
   if (sector.cuts) return 'bg-red-500 text-white rounded px-1'
   if (sector.isDriverBest) return 'bg-green-500 text-white rounded px-1'
   return 'bg-orange-400 text-white rounded px-1'
}

const columns = [
   { key: 'position', label: '#' },
   { key: 'name', label: 'Driver' },
   { key: 'car', label: 'Car' },
   { key: 'split', label: 'Gap' },
   { key: 'bestLap', label: 'Best Lap' },
   { key: 'lastLap', label: 'Last Lap' },
   { key: 'laps', label: 'Laps' },
   { key: 'isInPits', label: 'In Pit' },
   { key: 'NumPits', label: 'Pits'},
   { key: 'isOnline', label: 'Online' },
   { key: 'bestSplits', label: 'Best Splits' },
   { key: 'currentSplits', label: 'Current Lap Splits' },
   { key: 'topSpeedBestLap', label: 'Top Speed' },
   { key: 'ping', label: 'Ping' },
]

const combinedRows = computed(() => {
   return rows.value
      .slice()
      .sort((a, b) => {
         if (a.isOnline !== b.isOnline) return a.isOnline ? -1 : 1
         if (a.position === '-' || b.position === '-') return 0
         return Number(a.position) - Number(b.position)
      })
})

onMounted(()=> setInterval(refresh, 5000))


// onMounted(fetchData)
// useIntervalFn(fetchData, 30000)
</script>