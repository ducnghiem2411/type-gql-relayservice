import { Field, Int, ObjectType } from "type-graphql"
import { Timestamp } from "../common.type"

@ObjectType()
export class Permitting extends Timestamp {
    @Field()
    address: string

    @Field(type => [String])
    permitOperations: string[]

    @Field()
    availableEnergy: number

    @Field()
    limitEnergy: number

    @Field()
    limitRecoveryEnergy: number

    @Field(type => Int, { nullable: true })
    timeRecoverEnergyUsed?: number // in seconds

    @Field()
    availableBandwidth: number

    @Field()
    limitBandwidth: number

    @Field()
    grantPermitAt: Date

    @Field()
    paymentAddress: string

    @Field()
    paymentFrequency: number

    @Field(type => Date, { nullable: true })
    lastPaymentAt?: Date

    @Field()
    maintainUnfreezeSun: number

    @Field()
    maintainUndelegateEnergy: number

    @Field()
    maintainUndelegateBandwidth: number

    @Field()
    minEnergyPrice: number

    @Field()
    minBandwidthPrice: number

    @Field()
    minDelegateAmount: number

    @Field()
    profitShare: number

    @Field()
    totalDelegateTrx: number

    @Field()
    totalDelegateEnergy: number

    @Field()
    totalDelegateBandwidth: number

    @Field()
    reclaimOnlyTronSave: boolean
}