===== Collections ======

1. Pool

// Trigger creation by event 'PoolCreated' from UniswapV3Factory contract

interface IPool {
    address: string;          // Pool's contract address uniquely identifies the pool
    token0: string;           // Address of the first token in the pair
    token1: string;           // Address of the second token in the pair
    amount0?: string          // Total amount of token0 in pool, update by 'IncreaseLiquidity' and 'DecreaseLiquidity' event
    amount1?: string          // Total amount of token1 in pool, update by 'IncreaseLiquidity' and 'DecreaseLiquidity' event
    fee: string;              // Pool's fee in basis points, set at pool creation
    blockNumber: number;
    transactionHash: string;
}


2. AddLiquidLog

// Trigger creation by event 'IncreaseLiquidity' from NonfungiblePositionManager contract

interface IAddLiquidLog {
    pool: string  // Computed by read contract IUniswapV3Factory(factory).getPool(token0, token1, fee)
    positionId: number // From 'IncreaseLiquidity' event ̣(tokenId)
    owner: string // Read contract NonfungiblePositionManager.ownerOf(positionId)
    token0: string // Read contract NonfungiblePositionManager.position(positionId)
    token1: string // Read contract NonfungiblePositionManager.position(positionId)
    liquidity: string // From 'IncreaseLiquidity' event
    amount0: string // From 'IncreaseLiquidity' event
    amount1: string // From 'IncreaseLiquidity' event
    blockNumber: number
    transactionHash: string
}

3. RemoveLiquidLog

// Trigger creation by event 'DecreaseLiquidity' from NonfungiblePositionManager contract

interface IRemoveLiquidLog {
    pool: string  // Computed by read contract IUniswapV3Factory(factory).getPool(token0, token1, fee)
    positionId: number // From 'DecreaseLiquidity' event ̣(tokenId)
    owner: string // Read contract NonfungiblePositionManager.ownerOf(positionId)
    token0: string // Read contract NonfungiblePositionManager.position(positionId)
    token1: string // Read contract NonfungiblePositionManager.position(positionId)
    liquidity: string // From 'DecreaseLiquidity' event
    amount0: string // From 'DecreaseLiquidity' event
    amount1: string // From 'DecreaseLiquidity' event
    blockNumber: number
    transactionHash: string
}

4. Position

// Trigger creation by event 'Mint' from each UniswapV3Pool contract

interface IPosition {
    positionId: number  // From 'Mint' event
    owner: string  // From 'Mint' event
    token0: string // From this pool contract 
    token1: string // From this pool contract
    amount0: string  // From 'Mint' event
    amount1: string  // From 'Mint' event
    liquidity: string // From 'Mint' event, its liquidity amount from 'amount' field, is liquidity weight of this position
    fee: string // From this pool contract 
    tickLower: string // From 'Mint' event
    tickUpper: string // From 'Mint' event
}

5. Swap

// Trigger creation by event 'Swap' from each UniswapV3Pool contract

interface ISwap {
    sender: string
    recipient: string // Almost same as sender
    pool: string // Pool contract address 
    token0: string // From pool in db
    token1: string // From pool in db
    amount0: string // From 'Swap' event
    amount1: string // From 'Swap' event
    sqrtPriceX96: string // From 'Swap' event
    liquidity: string // From 'Swap' event. This is activated liquidity for this swap
    tick: string // Each tick corresponds to a specific price point within the pool
    blockNumber: number
    transactionHash: string
}

6. Token

// Created when a new pool is generated, and the token is not yet in the database. Token information is retrieved from a read contract.

interface IToken {
    address: string
    name: string
    symbol: string
    decimals: string
    totalSupply: string
}

7. TokenPriceLog

// Created during the execution of a cron job, which checks the token amount in the pool and records the price
// (both in ETH and USD, converted from the current ETH price retrieved from off-chain)

interface ITokenPriceLog {
    address: string // Token address
    timeFrame: TimeFrame  // in hour, day, week,..
    timestamp: number     // Start time of this time frame
    name: string
    symbol: string
    decimals: string
    priceInCoinbase: string  // Price in pair with ETH (coinbase)
    priceInUSD: string // Price in ETH (coinbase) x current ETH price
}

8. TokenVolumeLog

// Created during the execution of a cron job, which checks the token amount in the pools and records the price 
// (both in ETH and USD, converted from the current ETH price retrieved from off-chain).

interface ITokenVolumeLog {
    address: string
    timeFrame: TimeFrame // in hour, day, week,..
    timestamp: number // Start time of this time frame
    name: string
    symbol: string
    decimals: string
    volumeInCoinbase: string // Amount in ETH (coinbase)
    volumeInUSD: string // Amount in ETH (coinbase) x ETH current price
}

9. PoolVolumeLog

// Created during the execution of a cron job, which checks the pool amount in the pools and records the price
// (both in ETH and USD, converted from the current ETH price retrieved from off-chain).

interface IPoolVolumeLog {
    address: string
    timeFrame: TimeFrame // in hour, day, week,..
    timestamp: number // Start time of this time frame
    token0: string
    token1: string
    amount0: string
    amount1: string
    fee: string     // ETH fee amount
    feeInUSD: string // ETH fee amount x current price
    token0SpotPrice: string
    token1SpotPrice: string
    volume: string
    volumeInUSD: string
}

10. PoolTvlLog

// Created by a cron job that calculates the total value of the pool (token0 + token1) at specified time intervals. All pool tvl => dex tvl

interface IPoolTvlLog {
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

10. DexTvlLog

// Created by a cron job that calculates the total value of all pool tvl at specified time intervals.

interface IDexTvlLog {
    tvlInCoinbase: string
    tvlInUSD: string
    timeFrame: TimeFrame
    timestamp: number
}

11. DexVolumeLog

// Created by a cron job that calculates the total value of all pool volume at specified time intervals.

interface IDexVolumeLog {
    volumeInCoinbase: string
    volumeInUSD: string
    timeFrame: TimeFrame
    timestamp: number
}


===== Apis ======

// Query from collection DexTvlLog
// Total pool tvl,  used for creating TVL (Total Value Locked) charts.
export class DexTvl {
    tvlInUSD: string
    timeFrame: TimeFrame
    timestamp: number
}


// Query from collection DexVolumeLog
// Total pool tvl, used for creating TVL (Total Value Locked) charts.
export class DexVolume {
    volumeInUSD: string
    timeFrame: TimeFrame
    timestamp: number
}

// Query from Pool collection
export class Pool {
    token0: string
    token1: string
    address: string
    fee: string
    blockNumber: number
    transactionHash: string
}

// Query from PoolTvlLog collection
export class PoolTvl {
    pool: string
    token0: string
    token1: string
    amount0: string
    amount1: string
    tvlInUSD: string
    timeFrame: TimeFrame
    timestamp: number
}

// Query from Swap collection, filter by pool
export class PoolTransaction {
    address: string
    token0: string
    token1: string
    token0Symbol: string
    token1Symbol: string
    sender: string
    type: SwapType
    amountIn: string
    amountOut: string
    volumeInUsd: string
}
