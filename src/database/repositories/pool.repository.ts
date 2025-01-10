import { Pools } from ".."
import { IPool } from "../collections/Pool"

export class CPoolRepository {
    async insertPools(pools: IPool[]) {
        return await Pools.insertMany(pools)
    }

    async findPools(page: number, pageSize: number) {
        return await Pools.find().skip(page * pageSize).limit(pageSize).toArray()
    }

    async findPool(address: string) {
        return await Pools.findOne({ address })
    }
}