import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';
import { CreateUserInput } from './dto/create-user.input.dto';

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly usersService: UsersService) { }

    @Mutation(() => User)
    async signUp(@Args('input') input: CreateUserInput): Promise<User> {
        return this.usersService.createUser(input);
    }

    @Query(() => User, { nullable: true })
    async me(@Args('id') id: string): Promise<User | null> {
        return this.usersService.findById(id);
    }

    @Query(() => User, { nullable: true })
    async userByEmail(@Args('email') email: string): Promise<User | null> {
        return this.usersService.findByEmail(email);
    }
}
