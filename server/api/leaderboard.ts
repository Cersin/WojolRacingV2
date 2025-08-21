import type { Sector } from "~/types/live-timing"

export default defineEventHandler(async () => {
   // const res = await fetch(`${config.public.api_url}api/live-timing`, {})
   const res = await fetch('https://api.wojolracing.pl/api/live-timing', {})
   console.log(res)
   const data = await res.json()

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
         timeLeft: formatCountdown(data.Time || 0, data.ElapsedMilliseconds || 0),
      }
   }
})

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
      isOnline,
      isInPits: driver.IsInPits ?? false,
      bestSplits: bestSplits,
      currentSplits: currentSplits,
      ping: driver.Ping ?? null,
      topSpeedBestLap: carData.TopSpeedBestLap ? Number(carData.TopSpeedBestLap.toFixed(2)) : null
   }
}
