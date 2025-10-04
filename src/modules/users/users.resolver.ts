import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { User } from "./schemas/user.schema";
import { UsersService } from "./users.service";
import { CreateUserInput } from "./dto/create-user.input";

@Resolver(() => User)
export class UserResolver {
    constructor(private usersService: UsersService) { }

    @Mutation(() => User)
    async singUp(@Args('input') input: CreateUserInput) {
        return this.usersService.createUser(input);
    }

    @Query(() => User, { nullable: true })
    async me(@Args('id') id: string) {
        return this.usersService.findById(id);
    }

    @Query(() => User, { nullable: true })
    async userByEmail(@Args('email') email: string) {
        return this.usersService.findByEmail(email);
    }
}
