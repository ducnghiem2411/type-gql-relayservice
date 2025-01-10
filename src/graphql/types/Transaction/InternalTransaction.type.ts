import { Field, ObjectType } from "type-graphql"
import { Transaction } from "./Transaction.interface"

@ObjectType({ implements: Transaction })
export class InternalTransaction extends Transaction {
    @Field()
    balanceBefore: number

    @Field({ nullable: true })
    comment?: string
}