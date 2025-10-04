import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import { UsersService } from "../users/users.service";
import { JWT_EXPIRES_IN, JWT_SECRET } from "@/common/constants/app.constants";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) { }

    async validateUser(email: string, pass: string) {
        const user = await this.usersService.findByEmail(email);
        if (!user) return null;

        const valid = await bcrypt.compare(pass, user.password);
        if (!valid) return null;

        const { password, ...result } = user.toObject();
        return result;
    }

    async login(user: any) {
        const payload = { email: user.email, sub: user._id };
        return {
            accessToken: this.jwtService.sign(payload, { secret: JWT_SECRET, expiresIn: JWT_EXPIRES_IN }),
        };
    }
}