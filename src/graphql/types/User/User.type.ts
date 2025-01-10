import { Field, ObjectType } from "type-graphql"
import { Permitting } from "./Permitting.type"
import { InternalAccount } from "./InternalAccount.type"
import { Timestamp } from "../common.type"
import { Ref } from "./Ref.type"

@ObjectType()
export class User extends Timestamp {
    @Field()
    address: string

    @Field()
    totalDepositAmount: number

    @Field()
    totalWithdrawAmount: number

    @Field()
    totalSuccessTx: number

    @Field()
    totalFailTx: number

    @Field()
    lastLogin: Date

    @Field(type => Permitting, { nullable: true })
    _permitting?: Permitting

    @Field(type => InternalAccount, { nullable: true })
    _internalAccount?: InternalAccount

    @Field(type => Ref)
    _ref: Ref
}