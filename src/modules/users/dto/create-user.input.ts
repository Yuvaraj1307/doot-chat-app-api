import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from "@/common/constants/app.constants";
import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsString, MinLength, MaxLength } from "class-validator";

@InputType()
export class CreateUserInput {
    @Field()
    @IsString()
    username!: string;

    @Field()
    @IsEmail()
    email!: string;

    @Field()
    @IsString()
    @MinLength(PASSWORD_MIN_LENGTH)
    @MaxLength(PASSWORD_MAX_LENGTH)
    password!: string;

    @Field({ nullable: true })
    @IsString()
    displayName?: string;
}