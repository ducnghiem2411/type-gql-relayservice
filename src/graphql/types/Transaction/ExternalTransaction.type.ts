import { Field, ObjectType } from "type-graphql"
import { Transaction } from "./Transaction.interface"
import { TransactionStatus } from "../../../common/enum"

@ObjectType({ implements: Transaction })
export class ExternalTransaction extends Transaction {
    @Field(type => TransactionStatus)
    status: TransactionStatus
}