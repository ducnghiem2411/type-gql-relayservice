import { Field, ObjectType } from "type-graphql"
import { User } from "./User.type"
import { Timestamp } from "../common.type"

@ObjectType()
export class Ref extends Timestamp {
    @Field(type => User)
    _user: User

    @Field(type => User, { nullable: true })
    _sponsor?: User

    @Field(type => String, { nullable: true })
    pendingRefCode?: string

    @Field(type => String, { nullable: true })
    userRefCode?: string

    @Field()
    totalRefBonus: number

    @Field()
    remainRefBonus: number

    @Field()
    paymentFrequencyInSec: number
}