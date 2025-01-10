import "reflect-metadata"
import { buildSchema } from "type-graphql"
import { GraphQLDate } from "graphql-scalars"
import { OrderQuery } from "./queries/order.query"
import { UserQuery } from "./queries/user.query"
import { DelegateQuery } from "./queries/delegate.query"
import { PendingOrderQuery } from "./queries/pendingOrder.query"
import { ActiveRequestQuery } from "./queries/activeRequest.query"
import { TransactionQuery } from "./queries/transaction.query"


export async function createSchema() {
    return await buildSchema({
        resolvers: [
            UserQuery,
            OrderQuery,
            DelegateQuery,
            PendingOrderQuery,
            ActiveRequestQuery,
            TransactionQuery
        ],
        emitSchemaFile: true,
        scalarsMap: [{ type: Date, scalar: GraphQLDate }],
    })
}