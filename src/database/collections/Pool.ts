export interface IPool {
    address: string
    token0: string
    token1: string
    amount0?: string
    amount1?: string
    fee: string
    blockNumber: number
    transactionHash: string
}