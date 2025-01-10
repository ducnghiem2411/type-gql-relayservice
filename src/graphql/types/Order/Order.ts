import { Field, ObjectType } from "type-graphql"
import { User } from "../User/User.type"
import { Timestamp } from "../common.type"
import { Delegate } from "../Delegate/Delegate.interface"
import { FromSourceType } from "../../../common/enum"
import { ResourceType } from "../../../common/enum"
import { OrderRequestType } from "../../../common/enum"

@ObjectType()
export class Order extends Timestamp {
    @Field()
    id: string

    @Field(type => User)
    requester: User

    @Field(type => User)
    receiver: User

    @Field(type => OrderRequestType)
    type: OrderRequestType

    @Field(type => ResourceType)
    resourceType: ResourceType

    @Field(type => FromSourceType)
    fromSource: FromSourceType

    @Field()
    amount: number

    @Field()
    remainAmount: number

    @Field()
    durationSec: number

    @Field()
    unitPrice: number

    @Field()
    maxUnitPrice: number

    @Field()
    allowPartialFull: boolean

    @Field()
    isFullFilled: boolean

    @Field()
    isLock: boolean

    @Field(type => [Delegate])
    matchedDelegates: Delegate[]

    @Field()
    scanTimes: number

    @Field({ nullable: true })
    depositTxid?: string

    @Field({ nullable: true })
    depositAmount?: number

    @Field({ nullable: true })
    refundTxid?: string

    @Field({ nullable: true })
    refundError?: string

    @Field({ nullable: true })
    cancelAt?: Date

    @Field({ nullable: true })
    deleteAt?: Date

    @Field({ nullable: true })
    lastMatchedError?: string

    @Field({ nullable: true })
    errorScanTimes?: number

    @Field({ nullable: true })
    isExtendRequest?: boolean

    @Field({ nullable: true })
    activeTo?: Date
}