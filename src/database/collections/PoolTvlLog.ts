import { TimeFrame } from "../../common/enum"

export interface IPoolTvlLog {
    pool: string
    token0: string
    token1: string
    amount0: string
    amount1: string
    tvlInCoinbase: string
    tvlInUSD: string
    timeFrame: TimeFrame
    timestamp: number
}