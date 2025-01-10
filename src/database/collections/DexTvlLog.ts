import { TimeFrame } from "../../common/enum"

export interface IDexTvlLog {
    tvlInCoinbase: string
    tvlInUSD: string
    timeFrame: TimeFrame
    timestamp: number
}