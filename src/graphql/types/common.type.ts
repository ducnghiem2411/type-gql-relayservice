import { ArgsType, Field, Int, ObjectType, registerEnumType } from "type-graphql"
import { ActiveAddressRequestType, DelegateStatus, FromSourceType, OrderRequestType, ResourceType, TransactionActionType, TransactionSourceType, TransactionType, UserRole } from "../../common/enum"

@ArgsType()
export class PaginationInput {
    @Field(type => Int, { defaultValue: 0 })
    offset: number = 0

    @Field(type => Int, { defaultValue: 10 })
    limit: number = 10
}

@ObjectType()
export class Timestamp {
    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date
}

registerEnumType(UserRole, {
    name: "UserRole"
})

registerEnumType(ResourceType, {
    name: "ResourceType"
})

registerEnumType(OrderRequestType, {
    name: "OrderRequestType"
})

registerEnumType(FromSourceType, {
    name: "FromSourceType"
})

registerEnumType(DelegateStatus, {
    name: "DelegateStatus"
})

registerEnumType(ActiveAddressRequestType, {
    name: "ActiveAddressRequestType"
})

registerEnumType(TransactionType, {
    name: "TransactionType"
})

registerEnumType(TransactionSourceType, {
    name: "TransactionSourceType"
})

registerEnumType(TransactionActionType, {
    name: "TransactionActionType"
})