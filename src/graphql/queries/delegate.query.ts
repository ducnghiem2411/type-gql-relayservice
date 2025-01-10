import { Arg, Query, Resolver } from "type-graphql"
import { Delegate } from "../types/Delegate/Delegate.interface"

@Resolver()
export class DelegateQuery {
    @Query(() => Delegate)
    async delegate(@Arg('id') id: string): Promise<Delegate> {
        return {} as any
    }

    @Query(() => [Delegate])
    async delegates(
        @Arg('orderId') orderId: string
    ): Promise<Delegate[]> {
        return []
    }
}