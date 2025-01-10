import { Field, ObjectType } from "type-graphql"
import { ActiveAddressRequestType } from "../../common/enum"
import { InternalTransaction } from "./Transaction/InternalTransaction.type"

@ObjectType()
export class ActiveRequest {
    @Field()
    _requestAddress: string

    @Field()
    inactiveAddress: string

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date

    @Field(type => ActiveAddressRequestType)
    status: ActiveAddressRequestType

    @Field()
    activeFee: number

    @Field({ nullable: true })
    activeError?: string

    @Field(type => InternalTransaction, { nullable: true })
    _activeTxid?: InternalTransaction
}