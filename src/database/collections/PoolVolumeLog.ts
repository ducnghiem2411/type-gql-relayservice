import { TimeFrame } from "../../common/enum"

export interface IPoolVolumeLog {
    address: string
    timeFrame: TimeFrame
    timestamp: number
    token0: string
    token1: string
    amount0: string
    amount1: string
    fee: string
    feeInUSD: string
    token0SpotPrice: string
    token1SpotPrice: string
    volume: string
    volumeInUSD: string
}