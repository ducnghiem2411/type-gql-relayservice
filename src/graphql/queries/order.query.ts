import { Arg, Args, Ctx, Query, Resolver, Root, FieldResolver } from "type-graphql"
import { PaginationInput } from "../types/common.type"
import { Order } from "../types/Order/Order"
import { mockData } from "../../mock-data"
import { User } from "../types/User/User.type"

@Resolver(type => Order)
export class OrderQuery {
    @Query(type => Order)
    order(
        @Arg('id') id: string,
    ): Order {
        const order: any = mockData.orders.find(o => o.id === id)
        if (!order) {
            throw new Error('Order not found')
        }
        return order
    }

    @Query(type => [Order])
    orders(
        @Args() { offset: page, limit: pageSize }: PaginationInput,
        // @Arg('requesterId') requesterId?: string
    ): Order[] {
        const orders: any = mockData.orders
        return orders
    }

    @FieldResolver(type => User)
    requester(@Root() order, @Ctx() ctx: any) {
        console.log("Resolving requester for order:", order.id)

        const requester = mockData.users.find((user) => user.address === order.requester)

        return requester || null
    }
}