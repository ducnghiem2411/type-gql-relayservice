import { TimeFrame } from "../../common/enum"

export interface ITokenVolumeLog {
    address: string
    timeFrame: TimeFrame
    timestamp: number
    name: string
    symbol: string
    decimals: string
    volumeInCoinbase: string
    volumeInUSD: string
}