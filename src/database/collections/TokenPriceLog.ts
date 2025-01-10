import { TimeFrame } from "../../common/enum"

export interface ITokenPriceLog {
    address: string
    timeFrame: TimeFrame
    timestamp: number
    name: string
    symbol: string
    decimals: string
    priceInCoinbase: string
    priceInUSD: string
}