import { Arg, Query, Resolver } from "type-graphql"
import { User } from "../types/User/User.type"

@Resolver()
export class UserQuery {
    @Query(() => User)
    user(@Arg('address') address: string) { }
}