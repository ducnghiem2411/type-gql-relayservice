import { TimeFrame } from "../../common/enum"

export interface IDexVolumeLog {
    volumeInCoinbase: string
    volumeInUSD: string
    timeFrame: TimeFrame
    timestamp: number
}