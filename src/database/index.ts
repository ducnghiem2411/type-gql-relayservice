import { Collection, MongoClient, MongoClientOptions, ReadPreference } from 'mongodb'
import { IPool } from './collections/Pool'
import { IToken } from './collections/Token'
import { IState } from './collections/State'

export let States: Collection<IState>
export let Pools: Collection<IPool>
export let Tokens: Collection<IToken>

const collectionsName = {
    states: 'states',
    pools: 'pools',
    tokens: 'tokens',
}

export let mongo: MongoClient

export const connectMongo = async (uri: string) => {
    try {
        console.log(`mongodb: connecting ...`)
        const mongo_options: MongoClientOptions = {
            ignoreUndefined: true,
            readPreference: ReadPreference.PRIMARY,
        }

        mongo = await new MongoClient(uri, mongo_options).connect()

        mongo.on('error', async (e) => {
            try {
                console.log(e)
                await mongo.close()
                await connectMongo(uri)
            } catch (e) {
                setTimeout(() => connectMongo(uri), 1000)
                throw e
            }
        })

        mongo.on('timeout', async () => {
            try {
                await mongo.close()
                await connectMongo(uri)
            } catch (e) {
                setTimeout(() => connectMongo(uri), 1000)
                throw e
            }
        })

        mongo.on('close', async () => {
            try {
                await connectMongo(uri)
            } catch (e) {
                setTimeout(() => connectMongo(uri), 1000)
                throw e
            }
        })

        const db = mongo.db()
        console.log(`🚀 mongodb: connected to ${mongo.db().databaseName}`)

        Pools = db.collection(collectionsName.pools)

        await Promise.all([
            // await Pools.createIndexes(PoolIndexes)
        ])

    } catch (e) {
        await mongo?.close(true)
        setTimeout(connectMongo, 1000)
        throw e
    }
}
