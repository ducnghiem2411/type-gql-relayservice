import { JsonRpcProvider, ethers } from "ethers"
import { UNISWAP_FACTORY_V3_ADDRESS, UNISWAP_POSITION_MANAGER_V3_ADDRESS } from "./const"
import { UNISWAP_V3_FACTORY_ABI } from "./abis/uniswapV3Factory.abi"
import { IPool } from "../database/collections/Pool"
import { UNISWAP_V3_POSITION_MANAGER_ABI } from "./abis/uniswapV3PositionManager.abi"
import { UNISWAP_V3_POOL_ABI } from "./abis/uniswapV3Pool.abi"
import { PoolRepository } from "../database/repositories"
import { Utilities } from "../common/utils"

class AppProvider {
    constructor(initRpcProvider: string) {
        this.rpcProvider = new ethers.JsonRpcProvider(initRpcProvider)
    }

    rpcProvider: JsonRpcProvider

    async getNewPool(fromBlock: number, toBlock: number) {
        const factoryContract = new ethers.Contract(UNISWAP_FACTORY_V3_ADDRESS, UNISWAP_V3_FACTORY_ABI, this.rpcProvider)

        try {
            const logs = await this.rpcProvider.getLogs({
                address: UNISWAP_FACTORY_V3_ADDRESS,
                fromBlock: fromBlock,
                toBlock: toBlock
            })
            const events = logs.map(log => ({ blockNumber: log.blockNumber, transactionHash: log.transactionHash, log: factoryContract.interface.parseLog(log) }))

            const newPools: IPool[] = []
            events.forEach(({ blockNumber, transactionHash, log }) => {
                if (log?.name === "PoolCreated") {
                    const newPool = {
                        token0: log?.args[0],
                        token1: log?.args[1],
                        fee: log?.args[2].toString(),
                        address: log?.args[4],
                        blockNumber,
                        transactionHash,
                    }
                    newPools.push(newPool)
                }
            })

            if (newPools.length) {
                await PoolRepository.insertPools(newPools)
            }
            return events
        } catch (error) {
            console.error(error)
        }
    }

    async getAddLiquid(fromBlock: number, toBlock: number) {

    }

    async calculateUnclaimedFee(positionId: number) {
        try {
            const positionManagerContract = new ethers.Contract(UNISWAP_POSITION_MANAGER_V3_ADDRESS, UNISWAP_V3_POSITION_MANAGER_ABI, this.rpcProvider)
            const position = await positionManagerContract.positions(positionId)

            const positionInfo = {
                nonce: position[0],
                operator: position[1],
                token0: position[2],
                token1: position[3],
                fee: position[4],
                tickLower: position[5],
                tickUpper: position[6],
                liquidity: position[7].toString(),
                feeGrowthInside0LastX128: position[8],
                feeGrowthInside1LastX128: position[9],
                tokensOwed0: position[10],
                tokensOwed1: position[11]
            }

            const factoryContract = new ethers.Contract(UNISWAP_FACTORY_V3_ADDRESS, UNISWAP_V3_FACTORY_ABI, this.rpcProvider)
            const pool = await factoryContract.getPool(positionInfo.token0, position.token1, positionInfo.fee)

            const poolContract = new ethers.Contract(pool, UNISWAP_V3_POOL_ABI, this.rpcProvider)

            const [feeGrowthInside0CurrentX128, feeGrowthInside1CurrentX128] = await Promise.all([
                poolContract.feeGrowthGlobal0X128(),
                poolContract.feeGrowthGlobal1X128(),
            ])

            const fee0Unclaimed = ((BigInt(position.liquidity) * (BigInt(feeGrowthInside0CurrentX128) - BigInt(position.feeGrowthInside0LastX128)) / (BigInt(2) ** BigInt(128))) + position.tokensOwed0).toString()
            const fee1Unclaimed = ((BigInt(position.liquidity) * (BigInt(feeGrowthInside1CurrentX128) - BigInt(position.feeGrowthInside1LastX128)) / (BigInt(2) ** BigInt(128))) + position.tokensOwed1).toString()

            return { ...positionInfo, pool, fee0Unclaimed, fee1Unclaimed, positionId }
        } catch (error) {
            throw new Error('Invalid token ID')
        }
    }

    async crawlPoolEvents(startBlock: number, batchSize: number = 1000) {
        let currentBlock = startBlock

        while (true) {
            try {
                const latestBlock = await this.rpcProvider.getBlockNumber()

                if (currentBlock > latestBlock) {
                    console.log(`No new blocks to process. Waiting for new blocks...`)
                    await Utilities.sleep(3000)
                    continue
                }

                const endBlock = Math.min(currentBlock + batchSize, latestBlock)


                console.log(`Fetching events from block ${currentBlock} to ${endBlock}...`)

                await this.getNewPool(currentBlock, endBlock)

                currentBlock = endBlock + 1
            } catch (error: any) {
                console.error(`Error during processing: ${error.message}`)
                console.error(`Retrying...`)
                await Utilities.sleep(3000)
            }
        }
    }
}

export const appWeb3Provider = new AppProvider("https://eth-sepolia.api.onfinality.io/public")