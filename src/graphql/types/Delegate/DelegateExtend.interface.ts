import { Field, InterfaceType } from "type-graphql"
import { ObjectId } from "mongodb"
import { Delegate } from "./Delegate.interface"
import { Order } from "../Order/Order"

@InterfaceType({ implements: Delegate })
export abstract class DelegateExtend extends Delegate {
    @Field(type => Order, { nullable: true })
    _extendOrder?: Order

    @Field({ nullable: true })
    lastExtendAt?: Date

    @Field({ nullable: true })
    lastStartExtendAt?: Date

    @Field({ nullable: true })
    lastExtendTo?: Date

    @Field({ nullable: true })
    lastExtendDuration?: number

    @Field({ nullable: true })
    pendingLastExtendAt?: Date

    @Field({ nullable: true })
    pendingLastExtendTo?: Date

    @Field({ nullable: true })
    extendStatus?: string

    @Field({ nullable: true })
    isExtendMatchedOrder?: boolean

    @Field({ nullable: true })
    extendDurationSec?: number

    @Field({ nullable: true })
    extendForMatchedOrderId?: ObjectId
}