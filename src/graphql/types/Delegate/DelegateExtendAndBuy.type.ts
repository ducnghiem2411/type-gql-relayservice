import { Field, ObjectType } from "type-graphql"
import { DelegateExtend } from "./DelegateExtend.interface"

@ObjectType({ implements: DelegateExtend })
export class DelegateExtendAndBuy extends DelegateExtend {
    @Field({ nullable: true })
    isExtendAndBuyMatchedOrder?: boolean

    @Field({ nullable: true })
    extraBuyAmount?: number

    @Field({ nullable: true })
    extraBuyAmountTrx?: number

    @Field({ nullable: true })
    extendAndBuyTo?: Date

    @Field({ nullable: true })
    lockExtend?: boolean
}