import { Field, InputType } from "@nestjs/graphql";
import { IsArray, IsString } from "class-validator";

@InputType()
export class CreateConversationInput {
    @Field(() => [String])
    @IsArray()
    participants!: string[];

    @Field({ nullable: true })
    @IsString()
    title?: string;
 }