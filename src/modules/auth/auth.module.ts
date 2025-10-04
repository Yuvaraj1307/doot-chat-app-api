import { Module } from "@nestjs/common";
import { UsersModule } from "../users/users.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JWT_EXPIRES_IN, JWT_SECRET } from "@/common/constants/app.constants";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { AuthResolver } from "./auth.resolver";

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({ secret: JWT_SECRET, signOptions: { expiresIn: JWT_EXPIRES_IN } }),
    ],
    providers: [AuthService, JwtStrategy, AuthResolver],
    exports: [AuthService],
})
export class AuthModule { }
