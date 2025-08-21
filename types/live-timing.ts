export interface Sector {
   time: string
   isBest?: boolean
   isDriverBest?: boolean
   cuts?: boolean
}

export interface  DriverRow {
   position: number | string
   name: string
   car: string
   bestLap: string
   lastLap: string
   laps: number
   isOnline: boolean
   isInPits: boolean
   bestSplits: Sector[]
   currentSplits: Sector[]
   ping?: number
   topSpeedBestLap?: number
}

