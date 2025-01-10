// import './config'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { appWeb3Provider } from './blockchain'
import { connectMongo } from './database'
import { MONGO_URI, validateEnvVars } from './config'
import { createSchema } from './graphql'
import { addMocksToSchema } from '@graphql-tools/mock';

(async () => {
    // validateEnvVars()
    // await connectMongo(MONGO_URI)
    const schema = await createSchema()
    const server = new ApolloServer({
        schema
    })
    // const server = new ApolloServer({ schema: addMocksToSchema({ schema }) })

    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    })

    console.log(`🚀  Server ready at: ${url}`)

    // const unclaim = await appProvider.calculateUnclaimedFee(22011)
    // const unclaim = await appWeb3Provider.calculateUnclaimedFee(21979)
    // console.log({ unclaim })

    // const tokens: any[] = []
    // for (let i = 0; i < 10; i++) {
    //     tokens.push(generateRandomTokenData())
    // }
    // console.log(tokens)

})()