import { Field, ObjectType } from "type-graphql"
import { Order } from "./Order/Order"
import { User } from "./User/User.type"

@ObjectType()
export class PendingOrder {
    @Field()
    target: User

    @Field()
    requester: User

    @Field()
    orderId: Order

    @Field()
    generalField: string
}