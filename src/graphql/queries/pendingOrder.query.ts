import { Arg, Args, Query, Resolver } from "type-graphql"
import { PaginationInput } from "../types/common.type"
import { PendingOrder } from "../types/PendingOrder.type"

@Resolver()
export class PendingOrderQuery {
    @Query(type => PendingOrder)
    pendingOrder(
        @Arg('id') id: string
    ): PendingOrder {
        return {} as any
    }

    @Query(type => [PendingOrder])
    pendingOrders(
        @Args() { offset: page, limit: pageSize }: PaginationInput
    ): PendingOrder[] {
        return []
    }
}