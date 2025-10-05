import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { AuthService } from "./auth.service";
import { UsersService } from "../users/users.service";
import { LoginInput } from "./dto/login.input.dto";

@Resolver()
export class AuthResolver { 
    constructor(private authService: AuthService, private usersService: UsersService) { }

    @Mutation(() => String)
    async login(@Args('input') input: LoginInput) {
        const user = await this.usersService.findByEmail(input.email);
        if (!user) throw new Error('Invalid credentials');

        const validatedUser = await this.authService.validateUser(input.email, input.password);
        if (!validatedUser) throw new Error('Invalid credentials');

        const tokens = await this.authService.login(user);
        return tokens.accessToken;
    }
}