import { Field, InterfaceType } from "type-graphql"
import { TransactionActionType, TransactionType } from "../../../common/enum"
import { Timestamp } from "../common.type"
import { User } from "../User/User.type"

@InterfaceType()
export abstract class Transaction extends Timestamp {
    @Field()
    txid: string

    @Field(type => User)
    _sender: User

    @Field(type => User, { nullable: false })
    _receiver?: User

    @Field()
    amount: number

    @Field(type => TransactionType)
    type: TransactionType

    @Field(type => TransactionActionType)
    actionType: TransactionActionType
}