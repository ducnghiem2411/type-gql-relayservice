import { Field, ObjectType } from "type-graphql"
import { User } from "./User.type"
import { Timestamp } from "../common.type"

@ObjectType()
export class InternalAccount extends Timestamp {
    @Field(type => User)
    _user: User

    @Field()
    internalAddress: string

    @Field()
    balance: number

    // @Field()
    // apiKey: string

    @Field()
    totalDeposit: number

    @Field()
    totalWithdraw: number
}