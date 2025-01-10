import { Field, Int, InterfaceType } from "type-graphql"
import { User } from "../User/User.type"
import { Order } from "../Order/Order"
import { DelegateStatus, ResourceType } from "../../../common/enum"
import { Timestamp } from "../common.type"

@InterfaceType()
export abstract class Delegate extends Timestamp {
    @Field(type => User)
    _delegator: User

    @Field(type => User)
    _receiver: User

    @Field(type => ResourceType)
    resourceType: ResourceType

    @Field()
    amount: number

    @Field(type => Order)
    _order: Order

    @Field()
    unitPriceInSun: number

    @Field(type => DelegateStatus)
    status: DelegateStatus

    @Field(type => Int)
    durationSec: number

    @Field()
    isLock: boolean

    @Field({ nullable: true })
    delegateAt?: Date

    @Field({ nullable: true })
    delegateTxid?: string

    @Field({ nullable: true })
    delegateAmountInSun?: number

    @Field({ nullable: true })
    isManual?: boolean

    @Field({ nullable: true })
    paidAt?: Date

    @Field({ nullable: true })
    paidTxid?: string

    @Field({ nullable: true })
    paidError?: string

    @Field({ nullable: true })
    paidAmount?: number

    @Field({ nullable: true })
    paidFee?: number

    @Field({ nullable: true })
    willReclaimAt?: Date

    @Field({ nullable: true })
    reclaimAt?: Date

    @Field({ nullable: true })
    reclaimTxid?: string

    @Field({ nullable: true })
    claimFailedReason?: string

    @Field({ nullable: true })
    deleteAt?: Date

    @Field({ nullable: true })
    failedReason?: string

    @Field({ nullable: true })
    paymentAddress?: string
}