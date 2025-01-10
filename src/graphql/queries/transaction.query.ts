import { Arg, Args, Query, Resolver } from "type-graphql"
import { PaginationInput } from "../types/common.type"
import { Transaction } from "../types/Transaction/Transaction.interface"

@Resolver()
export class TransactionQuery {
    @Query(type => Transaction)
    transaction(
        @Arg('id') id: string
    ): Transaction {
        return {} as any
    }

    @Query(type => [Transaction])
    transactions(
        @Args() { offset: page, limit: pageSize }: PaginationInput
    ): Transaction[] {
        return []
    }
}