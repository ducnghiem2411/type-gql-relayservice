import { Arg, Args, Query, Resolver } from "type-graphql"
import { PaginationInput } from "../types/common.type"
import { ActiveRequest } from "../types/ActiveRequest.type"

@Resolver()
export class ActiveRequestQuery {
    @Query(type => ActiveRequest)
    activeRequest(
        @Arg('id') id: string
    ): ActiveRequest {
        return {} as any
    }

    @Query(type => [ActiveRequest])
    activeRequests(
        @Args() { offset: page, limit: pageSize }: PaginationInput
    ): ActiveRequest[] {
        return []
    }
}